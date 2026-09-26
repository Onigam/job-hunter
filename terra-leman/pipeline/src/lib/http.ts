/**
 * Polite HTTP client used by connectors and reference-data fetchers.
 *
 *  - per-host throttling (minimum interval + max concurrency)
 *  - retries with exponential backoff on network errors, 429 and 5xx (honours Retry-After)
 *  - timeouts
 *  - optional on-disk cache (reference datasets), transparent gunzip of `.gz` payloads
 *  - per-host statistics for the sync report
 */
import { createHash } from 'node:crypto';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { gunzipSync } from 'node:zlib';
import type { Logger } from './log.ts';

export const BROWSER_UA =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';

export class HttpError extends Error {
  constructor(
    public readonly status: number,
    public readonly url: string,
    public readonly bodySnippet: string,
  ) {
    super(`HTTP ${status} for ${url}${bodySnippet ? ` — ${bodySnippet.slice(0, 200)}` : ''}`);
    this.name = 'HttpError';
  }
}

export interface RequestOptions {
  method?: 'GET' | 'POST';
  headers?: Record<string, string>;
  /** Request body; objects are JSON-encoded. */
  body?: string | Record<string, unknown> | unknown[];
  /** Max retries after the first attempt (default 3). */
  retries?: number;
  /** Per-attempt timeout (default 45 s). */
  timeoutMs?: number;
  /** Cache the successful response on disk under this key. */
  cacheKey?: string;
  /** Maximum age of a cached response (default 7 days). */
  cacheMaxAgeMs?: number;
  /** Treat these statuses as a valid (non-throwing) response, e.g. [404]. */
  acceptStatus?: number[];
}

export interface HttpResponse {
  status: number;
  url: string;
  headers: Headers;
  body: Buffer;
  fromCache: boolean;
}

export interface HostPolicy {
  /** Minimum delay between two request starts on this host (ms). */
  minIntervalMs: number;
  /** Maximum concurrent requests on this host. */
  concurrency: number;
}

export interface HostStats {
  requests: number;
  ok: number;
  failed: number;
  bytes: number;
  cacheHits: number;
}

export interface HttpClient {
  request(url: string, opts?: RequestOptions): Promise<HttpResponse>;
  json<T = unknown>(url: string, opts?: RequestOptions): Promise<T>;
  text(url: string, opts?: RequestOptions): Promise<string>;
  buffer(url: string, opts?: RequestOptions): Promise<Buffer>;
  /** Override throttling for a host (e.g. faster for open-data APIs). */
  setHostPolicy(host: string, policy: Partial<HostPolicy>): void;
  stats(): Record<string, HostStats>;
}

const DEFAULT_POLICY: HostPolicy = { minIntervalMs: 700, concurrency: 2 };

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

class HostGate {
  private active = 0;
  private nextStart = 0;
  private queue: (() => void)[] = [];
  constructor(public policy: HostPolicy) {}

  async acquire(): Promise<void> {
    if (this.active >= this.policy.concurrency) {
      await new Promise<void>((resolve) => this.queue.push(resolve));
    }
    this.active++;
    const now = Date.now();
    const wait = this.nextStart - now;
    this.nextStart = Math.max(now, this.nextStart) + this.policy.minIntervalMs;
    if (wait > 0) await sleep(wait);
  }

  release(): void {
    this.active--;
    const next = this.queue.shift();
    if (next) next();
  }
}

export interface HttpClientOptions {
  log: Logger;
  cacheDir: string;
  userAgent?: string;
  /** Default headers added to every request. */
  headers?: Record<string, string>;
}

export function createHttpClient(options: HttpClientOptions): HttpClient {
  const gates = new Map<string, HostGate>();
  const policies = new Map<string, Partial<HostPolicy>>();
  const stats: Record<string, HostStats> = {};
  const log = options.log;

  const gateFor = (host: string) => {
    let gate = gates.get(host);
    if (!gate) {
      gate = new HostGate({ ...DEFAULT_POLICY, ...policies.get(host) });
      gates.set(host, gate);
    }
    return gate;
  };

  const statFor = (host: string) =>
    (stats[host] ??= { requests: 0, ok: 0, failed: 0, bytes: 0, cacheHits: 0 });

  const cachePath = (key: string) => {
    const safe = key.replace(/[^a-zA-Z0-9._-]+/g, '_').slice(0, 120);
    const hash = createHash('sha1').update(key).digest('hex').slice(0, 10);
    return join(options.cacheDir, 'http', `${safe}.${hash}.bin`);
  };

  async function readCache(key: string, maxAgeMs: number): Promise<Buffer | null> {
    const path = cachePath(key);
    try {
      const s = await stat(path);
      if (Date.now() - s.mtimeMs > maxAgeMs) return null;
      return await readFile(path);
    } catch {
      return null;
    }
  }

  async function writeCache(key: string, body: Buffer): Promise<void> {
    const path = cachePath(key);
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, body);
  }

  function maybeGunzip(body: Buffer): Buffer {
    if (body.length > 2 && body[0] === 0x1f && body[1] === 0x8b) return gunzipSync(body);
    return body;
  }

  async function request(url: string, opts: RequestOptions = {}): Promise<HttpResponse> {
    const host = new URL(url).host;
    const st = statFor(host);
    const maxAge = opts.cacheMaxAgeMs ?? 7 * 24 * 3600 * 1000;

    if (opts.cacheKey) {
      const cached = await readCache(opts.cacheKey, maxAge);
      if (cached) {
        st.cacheHits++;
        return { status: 200, url, headers: new Headers(), body: cached, fromCache: true };
      }
    }

    const retries = opts.retries ?? 3;
    const headers: Record<string, string> = {
      'User-Agent': options.userAgent ?? BROWSER_UA,
      'Accept-Language': 'fr-FR,fr;q=0.9,en;q=0.6',
      ...options.headers,
      ...opts.headers,
    };
    let body: string | undefined;
    if (opts.body !== undefined) {
      body = typeof opts.body === 'string' ? opts.body : JSON.stringify(opts.body);
      if (typeof opts.body !== 'string' && !Object.keys(headers).some((h) => h.toLowerCase() === 'content-type')) {
        headers['Content-Type'] = 'application/json';
      }
    }

    let lastError: unknown;
    for (let attempt = 0; attempt <= retries; attempt++) {
      const gate = gateFor(host);
      await gate.acquire();
      st.requests++;
      try {
        const res = await fetch(url, {
          method: opts.method ?? (body ? 'POST' : 'GET'),
          headers,
          body,
          redirect: 'follow',
          signal: AbortSignal.timeout(opts.timeoutMs ?? 45_000),
        });
        const raw = Buffer.from(await res.arrayBuffer());
        st.bytes += raw.length;
        if (res.ok || opts.acceptStatus?.includes(res.status)) {
          const decoded = maybeGunzip(raw);
          if (res.ok) st.ok++;
          if (res.ok && opts.cacheKey) await writeCache(opts.cacheKey, decoded);
          return { status: res.status, url: res.url || url, headers: res.headers, body: decoded, fromCache: false };
        }
        const snippet = raw.subarray(0, 300).toString('utf8').replace(/\s+/g, ' ');
        const err = new HttpError(res.status, url, snippet);
        const retryable = res.status === 429 || res.status >= 500;
        if (!retryable || attempt === retries) {
          st.failed++;
          throw err;
        }
        lastError = err;
        const retryAfter = Number(res.headers.get('retry-after'));
        const delay = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 1000 * 2 ** attempt;
        log.debug(`retry ${attempt + 1}/${retries} after HTTP ${res.status}`, { url, delay });
        await sleep(Math.min(delay, 30_000));
      } catch (err) {
        if (err instanceof HttpError) throw err;
        lastError = err;
        if (attempt === retries) {
          st.failed++;
          break;
        }
        const delay = 1000 * 2 ** attempt;
        log.debug(`retry ${attempt + 1}/${retries} after network error`, {
          url,
          error: (err as Error).message,
        });
        await sleep(delay);
      } finally {
        gate.release();
      }
    }
    const message = lastError instanceof Error ? lastError.message : String(lastError);
    throw new Error(`Request failed for ${url}: ${message}`);
  }

  return {
    request,
    async json<T>(url: string, opts?: RequestOptions) {
      const res = await request(url, {
        ...opts,
        headers: { Accept: 'application/json, text/plain, */*', ...opts?.headers },
      });
      const text = res.body.toString('utf8');
      try {
        return JSON.parse(text) as T;
      } catch {
        throw new Error(`Invalid JSON from ${url}: ${text.slice(0, 200)}`);
      }
    },
    async text(url: string, opts?: RequestOptions) {
      return (await request(url, opts)).body.toString('utf8');
    },
    async buffer(url: string, opts?: RequestOptions) {
      return (await request(url, opts)).body;
    },
    setHostPolicy(host: string, policy: Partial<HostPolicy>) {
      policies.set(host, { ...policies.get(host), ...policy });
      const gate = gates.get(host);
      if (gate) gate.policy = { ...gate.policy, ...policy };
    },
    stats: () => stats,
  };
}
