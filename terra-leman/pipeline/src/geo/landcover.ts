/**
 * Land-cover class shares inside a polygon from ESA WorldCover 2021 (10 m, Sentinel-derived).
 *
 * WorldCover is published as 3°×3° Cloud-Optimized GeoTIFFs (36000 px, 1024 px internal tiles,
 * DEFLATE, pixel = 1/12000°). geotiff.js reads byte ranges through the polite HTTP client; decoded
 * internal tiles (1 MB each) are kept in a bounded LRU so memory stays flat over a whole run.
 */
import { BaseClient, BaseResponse, fromCustomClient } from 'geotiff';
import type { BlockedSourceOptions, GeoTIFFImage, RemoteSourceOptions } from 'geotiff';
import type { HttpClient, HttpResponse } from '../lib/http.ts';
import type { Logger } from '../lib/log.ts';
import { round } from '../lib/stats.ts';
import { ENDPOINTS } from '../reference/endpoints.ts';
import type { PolygonGeometry } from '../types.ts';
import { geometryBBox, geometryInteriorPoint, pointInGeometry } from './geometry.ts';

/** French labels of the WorldCover classes. */
export const WORLDCOVER_LABELS: Record<number, string> = {
  10: 'arbres',
  20: 'arbustes',
  30: 'prairie',
  40: 'cultures',
  50: 'bâti',
  60: 'sol nu',
  70: 'neige',
  80: 'eau',
  90: 'zone humide',
  95: 'mangrove',
  100: 'mousses',
};

const PIXELS_PER_DEGREE = 12_000;
/** Above this many pixels, the polygon is sampled with a stride (large zones). */
const MAX_PIXELS = 40_000;
/** Decoded 1024×1024 uint8 tiles kept in memory (≈ 1 MB each). */
const MAX_DECODED_TILES = 48;

export interface LandCover {
  /** Share (0..1) of each class inside the polygon, keyed by French label; undefined if unavailable. */
  shares(geometry: PolygonGeometry): Promise<Record<string, number> | undefined>;
}

/** Name of the 3°×3° WorldCover tile containing a point, e.g. 'N45E006'. */
export function worldCoverTileName(lon: number, lat: number): string {
  const latC = Math.floor(lat / 3) * 3;
  const lonC = Math.floor(lon / 3) * 3;
  const ns = `${latC >= 0 ? 'N' : 'S'}${String(Math.abs(latC)).padStart(2, '0')}`;
  const ew = `${lonC >= 0 ? 'E' : 'W'}${String(Math.abs(lonC)).padStart(3, '0')}`;
  return ns + ew;
}

/** geotiff.js response facade over our HTTP client response. */
class HttpResponseAdapter extends BaseResponse {
  constructor(private readonly res: HttpResponse) {
    super();
  }
  override get ok(): boolean {
    return this.res.status >= 200 && this.res.status < 300;
  }
  override get status(): number {
    return this.res.status;
  }
  override getHeader(name: string): string | undefined {
    return this.res.headers.get(name) ?? undefined;
  }
  override async getData(): Promise<ArrayBuffer> {
    const body = this.res.body;
    return body.buffer.slice(body.byteOffset, body.byteOffset + body.byteLength) as ArrayBuffer;
  }
}

/** geotiff.js client issuing its Range requests through the polite HTTP client (retries, throttling). */
class HttpClientAdapter extends BaseClient {
  constructor(url: string, private readonly http: HttpClient) {
    super(url);
  }
  override async request(options: RequestInit = {}): Promise<BaseResponse> {
    const headers = Object.fromEntries(new Headers(options.headers ?? {}).entries());
    // Never gunzip: a TIFF byte range may start with the gzip magic bytes by chance.
    const res = await this.http.request(this.url, { headers, decompress: false, retries: 2, timeoutMs: 60_000 });
    return new HttpResponseAdapter(res);
  }
}

interface DecodedTile {
  data: Uint8Array;
  width: number;
}

export function createLandCover(http: HttpClient, log: Logger): LandCover {
  const images = new Map<string, Promise<GeoTIFFImage | undefined>>();
  const tiles = new Map<string, Promise<DecodedTile | undefined>>();

  const image = (name: string) => {
    let entry = images.get(name);
    if (!entry) {
      const url = ENDPOINTS.worldCoverTile(name);
      const options: RemoteSourceOptions & BlockedSourceOptions = { blockSize: 65_536, cacheSize: 64 };
      entry = fromCustomClient(new HttpClientAdapter(url, http), options)
        .then((tiff) => tiff.getImage(0))
        .catch((err: unknown) => {
          log.warn('WorldCover tile unavailable, land cover disabled for it', { tile: name, error: (err as Error).message });
          return undefined;
        });
      images.set(name, entry);
    }
    return entry;
  };

  /** Decoded internal tile (tx, ty) of a WorldCover file, LRU-cached. */
  const tile = (name: string, img: GeoTIFFImage, tx: number, ty: number) => {
    const key = `${name}/${tx}/${ty}`;
    let entry = tiles.get(key);
    if (entry) {
      tiles.delete(key);
    } else {
      const tw = img.getTileWidth();
      const th = img.getTileHeight();
      const window = [tx * tw, ty * th, Math.min((tx + 1) * tw, img.getWidth()), Math.min((ty + 1) * th, img.getHeight())];
      entry = img
        .readRasters({ window, samples: [0] })
        .then((rasters) => {
          const band = (rasters as unknown as ArrayLike<number>[])[0];
          return { data: Uint8Array.from(band), width: window[2] - window[0] };
        })
        .catch((err: unknown) => {
          log.warn('WorldCover read failed', { tile: key, error: (err as Error).message });
          return undefined;
        });
      if (tiles.size >= MAX_DECODED_TILES) tiles.delete(tiles.keys().next().value as string);
    }
    tiles.set(key, entry);
    return entry;
  };

  /** Class value at a point, or undefined (no data / unavailable). */
  async function classAt(lon: number, lat: number): Promise<number | undefined> {
    const name = worldCoverTileName(lon, lat);
    const img = await image(name);
    if (!img) return undefined;
    const [originLon, originLat] = img.getOrigin();
    const [resX, resY] = img.getResolution();
    const col = Math.floor((lon - originLon) / resX);
    const row = Math.floor((lat - originLat) / resY);
    if (col < 0 || row < 0 || col >= img.getWidth() || row >= img.getHeight()) return undefined;
    const tw = img.getTileWidth();
    const th = img.getTileHeight();
    const decoded = await tile(name, img, Math.floor(col / tw), Math.floor(row / th));
    if (!decoded) return undefined;
    const value = decoded.data[(row % th) * decoded.width + (col % tw)];
    return value === 0 ? undefined : value;
  }

  return {
    async shares(geometry) {
      const [minLon, minLat, maxLon, maxLat] = geometryBBox(geometry);
      // Global pixel grid aligned with WorldCover (pixel centres at (i + 0.5) / 12000°).
      const c0 = Math.floor((minLon + 180) * PIXELS_PER_DEGREE);
      const c1 = Math.floor((maxLon + 180) * PIXELS_PER_DEGREE);
      const r0 = Math.floor((90 - maxLat) * PIXELS_PER_DEGREE);
      const r1 = Math.floor((90 - minLat) * PIXELS_PER_DEGREE);
      const stride = Math.max(1, Math.ceil(Math.sqrt(((c1 - c0 + 1) * (r1 - r0 + 1)) / MAX_PIXELS)));

      const points: [number, number][] = [];
      for (let r = r0; r <= r1; r += stride) {
        const lat = 90 - (r + 0.5) / PIXELS_PER_DEGREE;
        for (let c = c0; c <= c1; c += stride) {
          const lon = (c + 0.5) / PIXELS_PER_DEGREE - 180;
          if (pointInGeometry(geometry, lon, lat)) points.push([lon, lat]);
        }
      }
      // Polygons smaller than a pixel: use the pixel under an interior point.
      if (points.length === 0) points.push(geometryInteriorPoint(geometry));

      const counts = new Map<number, number>();
      let total = 0;
      for (const [lon, lat] of points) {
        const value = await classAt(lon, lat);
        if (value === undefined) continue;
        counts.set(value, (counts.get(value) ?? 0) + 1);
        total++;
      }
      if (total === 0) return undefined;
      const result: Record<string, number> = {};
      for (const [value, count] of [...counts].sort((a, b) => b[1] - a[1])) {
        const share = round(count / total, 2);
        if (share >= 0.01) result[WORLDCOVER_LABELS[value] ?? `classe ${value}`] = share;
      }
      return result;
    },
  };
}
