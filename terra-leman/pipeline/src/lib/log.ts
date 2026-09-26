/**
 * Minimal structured logger. Writes human-readable lines to stderr so stdout stays clean.
 * In GitHub Actions, `group()` folds sections of the log.
 */
export interface Logger {
  info(msg: string, extra?: Record<string, unknown>): void;
  warn(msg: string, extra?: Record<string, unknown>): void;
  error(msg: string, extra?: Record<string, unknown>): void;
  debug(msg: string, extra?: Record<string, unknown>): void;
  child(scope: string): Logger;
  group<T>(title: string, fn: () => Promise<T>): Promise<T>;
}

const inActions = process.env.GITHUB_ACTIONS === 'true';
const verbose = process.env.TL_DEBUG === '1';

function fmt(extra?: Record<string, unknown>): string {
  if (!extra || Object.keys(extra).length === 0) return '';
  return (
    ' ' +
    Object.entries(extra)
      .map(([k, v]) => `${k}=${typeof v === 'string' ? v : JSON.stringify(v)}`)
      .join(' ')
  );
}

export function createLogger(scope = 'terra-leman'): Logger {
  const prefix = () => `${new Date().toISOString().slice(11, 19)} [${scope}]`;
  return {
    info: (msg, extra) => console.error(`${prefix()} ${msg}${fmt(extra)}`),
    warn: (msg, extra) =>
      console.error(inActions ? `::warning::[${scope}] ${msg}${fmt(extra)}` : `${prefix()} ⚠ ${msg}${fmt(extra)}`),
    error: (msg, extra) =>
      console.error(inActions ? `::error::[${scope}] ${msg}${fmt(extra)}` : `${prefix()} ✖ ${msg}${fmt(extra)}`),
    debug: (msg, extra) => {
      if (verbose) console.error(`${prefix()} · ${msg}${fmt(extra)}`);
    },
    child: (child) => createLogger(`${scope}:${child}`),
    group: async (title, fn) => {
      if (inActions) console.error(`::group::${title}`);
      else console.error(`${prefix()} ── ${title}`);
      try {
        return await fn();
      } finally {
        if (inActions) console.error('::endgroup::');
      }
    },
  };
}
