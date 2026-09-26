/**
 * Digital elevation model from the AWS Terrain Tiles (Mapzen "terrarium" PNG encoding).
 * At zoom 14 a pixel is ≈ 6.6 m at the latitude of Geneva.
 *
 *   elevation = R × 256 + G + B / 256 − 32768
 *
 * Tiles are cached on disk through the HTTP client and decoded tiles are kept in a small LRU.
 */
import { PNG } from 'pngjs';
import type { TerrainInfo } from '../../../shared/types.ts';
import type { HttpClient } from '../lib/http.ts';
import type { Logger } from '../lib/log.ts';
import { round } from '../lib/stats.ts';
import { ENDPOINTS } from '../reference/endpoints.ts';
import type { PolygonGeometry } from '../types.ts';
import { geometryBBox } from './geometry.ts';
import { createFrame, pointInShape, projectGeometry, shapeArea, shapeBBox, toLonLat } from './planar.ts';

const TILE_SIZE = 256;
const EARTH_CIRCUMFERENCE = 2 * Math.PI * 6_378_137;
/** Below this mean slope a parcel is reported as flat. */
const FLAT_SLOPE_PCT = 3;
const MAX_SAMPLES = 400;

/** Loads one decoded tile (elevations, row-major 256×256), or undefined when unavailable. */
export type TileLoader = (z: number, x: number, y: number) => Promise<Float32Array | undefined>;

export interface Dem {
  /** Elevation in metres at a point, or undefined when the tile is unavailable. */
  elevation(lon: number, lat: number): Promise<number | undefined>;
  /** Mean elevation, mean slope and dominant aspect of a polygon. */
  terrain(geometry: PolygonGeometry): Promise<TerrainInfo | undefined>;
}

/** Decodes a terrarium PNG into elevations (metres). */
export function decodeTerrarium(png: Buffer): Float32Array {
  const image = PNG.sync.read(png);
  const out = new Float32Array(image.width * image.height);
  const data = image.data;
  for (let i = 0, p = 0; i < out.length; i++, p += 4) {
    out[i] = data[p] * 256 + data[p + 1] + data[p + 2] / 256 - 32768;
  }
  return out;
}

/** Global Web Mercator pixel coordinates at zoom z. */
export function lonLatToPixel(lon: number, lat: number, z: number): [number, number] {
  const scale = TILE_SIZE * 2 ** z;
  const phi = (lat * Math.PI) / 180;
  const x = ((lon + 180) / 360) * scale;
  const y = ((1 - Math.log(Math.tan(phi) + 1 / Math.cos(phi)) / Math.PI) / 2) * scale;
  return [x, y];
}

/** Compass sector (French abbreviations) of the downhill direction given as an azimuth in degrees. */
export function aspectFromAzimuth(azimuth: number): TerrainInfo['aspect'] {
  const sectors: TerrainInfo['aspect'][] = ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO'];
  return sectors[Math.round((((azimuth % 360) + 360) % 360) / 45) % 8];
}

/** DEM backed by AWS terrarium tiles fetched through the polite HTTP client. */
export function createDem(http: HttpClient, log: Logger, zoom = 14): Dem {
  const failed = new Set<string>();
  const loader: TileLoader = async (z, x, y) => {
    const url = ENDPOINTS.terrariumTile(z, x, y);
    try {
      const png = await http.buffer(url, {
        cacheKey: `dem/terrarium/${z}/${x}/${y}.png`,
        cacheMaxAgeMs: 365 * 24 * 3600 * 1000,
        decompress: false,
        retries: 2,
      });
      return decodeTerrarium(png);
    } catch (err) {
      const key = `${z}/${x}/${y}`;
      if (!failed.has(key)) {
        failed.add(key);
        log.warn('DEM tile unavailable', { tile: key, error: (err as Error).message });
      }
      return undefined;
    }
  };
  return createDemFromLoader(loader, zoom);
}

/** DEM over any tile loader (used by tests with synthetic tiles). */
export function createDemFromLoader(loader: TileLoader, zoom = 14, maxTiles = 96): Dem {
  // LRU of tile promises: Map iteration order is insertion order, re-inserted on access.
  const cache = new Map<string, Promise<Float32Array | undefined>>();
  const tile = (x: number, y: number) => {
    const key = `${x}/${y}`;
    let entry = cache.get(key);
    if (entry) {
      cache.delete(key);
    } else {
      entry = loader(zoom, x, y);
      if (cache.size >= maxTiles) cache.delete(cache.keys().next().value as string);
    }
    cache.set(key, entry);
    return entry;
  };

  /** Loads the tiles covering a global pixel window and returns a bilinear sampler over them. */
  async function sampler(minPx: number, minPy: number, maxPx: number, maxPy: number) {
    const tiles = new Map<string, Float32Array | undefined>();
    const loads: Promise<void>[] = [];
    for (let tx = Math.floor(minPx / TILE_SIZE); tx <= Math.floor(maxPx / TILE_SIZE); tx++) {
      for (let ty = Math.floor(minPy / TILE_SIZE); ty <= Math.floor(maxPy / TILE_SIZE); ty++) {
        loads.push(tile(tx, ty).then((t) => void tiles.set(`${tx}/${ty}`, t)));
      }
    }
    await Promise.all(loads);
    const pixel = (px: number, py: number): number | undefined => {
      const t = tiles.get(`${Math.floor(px / TILE_SIZE)}/${Math.floor(py / TILE_SIZE)}`);
      if (!t) return undefined;
      return t[(py % TILE_SIZE) * TILE_SIZE + (px % TILE_SIZE)];
    };
    // Bilinear interpolation between pixel centres (centre of pixel i is at i + 0.5).
    return (x: number, y: number): number | undefined => {
      const fx = x - 0.5;
      const fy = y - 0.5;
      const x0 = Math.floor(fx);
      const y0 = Math.floor(fy);
      const tx = fx - x0;
      const ty = fy - y0;
      const a = pixel(x0, y0);
      const b = pixel(x0 + 1, y0);
      const c = pixel(x0, y0 + 1);
      const d = pixel(x0 + 1, y0 + 1);
      if (a === undefined || b === undefined || c === undefined || d === undefined) return undefined;
      return a * (1 - tx) * (1 - ty) + b * tx * (1 - ty) + c * (1 - tx) * ty + d * tx * ty;
    };
  }

  return {
    async elevation(lon, lat) {
      const [px, py] = lonLatToPixel(lon, lat, zoom);
      const sample = await sampler(px - 1, py - 1, px + 1, py + 1);
      return sample(px, py);
    },

    async terrain(geometry) {
      const bbox = geometryBBox(geometry);
      const frame = createFrame((bbox[0] + bbox[2]) / 2, (bbox[1] + bbox[3]) / 2);
      const shape = projectGeometry(frame, geometry);
      if (shape.length === 0) return undefined;
      const [p0x, p0y] = lonLatToPixel(bbox[0], bbox[3], zoom);
      const [p1x, p1y] = lonLatToPixel(bbox[2], bbox[1], zoom);
      const sample = await sampler(p0x - 2, p0y - 2, p1x + 2, p1y + 2);

      // Regular grid of sample points inside the polygon, bounded in number.
      const [minX, minY, maxX, maxY] = shapeBBox(shape);
      let step = Math.max(3, Math.sqrt(shapeArea(shape)) / 12);
      while (((maxX - minX) / step) * ((maxY - minY) / step) > MAX_SAMPLES * 1.6) step *= 1.25;
      const points: [number, number][] = [];
      for (let y = minY + step / 2; y < maxY; y += step) {
        for (let x = minX + step / 2; x < maxX; x += step) {
          if (pointInShape(shape, x, y)) points.push(toLonLat(frame, x, y));
        }
      }
      if (points.length === 0) points.push(toLonLat(frame, (minX + maxX) / 2, (minY + maxY) / 2));

      const metresPerPixel = (EARTH_CIRCUMFERENCE * Math.cos((frame.lat0 * Math.PI) / 180)) / (TILE_SIZE * 2 ** zoom);
      let sumZ = 0;
      let sumSlope = 0;
      let sumGx = 0;
      let sumGy = 0;
      let n = 0;
      for (const [lon, lat] of points) {
        const [px, py] = lonLatToPixel(lon, lat, zoom);
        const z = sample(px, py);
        const east = sample(px + 1, py);
        const west = sample(px - 1, py);
        const south = sample(px, py + 1);
        const north = sample(px, py - 1);
        if (z === undefined || east === undefined || west === undefined || south === undefined || north === undefined) {
          continue;
        }
        // Central differences; pixel y grows southwards, so dz/dnorth = (north − south) / 2px.
        const gx = (east - west) / (2 * metresPerPixel);
        const gy = (north - south) / (2 * metresPerPixel);
        sumZ += z;
        sumSlope += Math.hypot(gx, gy) * 100;
        sumGx += gx;
        sumGy += gy;
        n++;
      }
      if (n === 0) return undefined;
      const slopePct = sumSlope / n;
      // Downhill direction of the mean gradient; azimuth measured clockwise from north.
      const azimuth = (Math.atan2(-sumGx, -sumGy) * 180) / Math.PI;
      const netSlopePct = (Math.hypot(sumGx, sumGy) / n) * 100;
      return {
        elevationM: Math.round(sumZ / n),
        slopePct: round(slopePct, 1),
        aspect: slopePct < FLAT_SLOPE_PCT || netSlopePct < FLAT_SLOPE_PCT / 2 ? 'plat' : aspectFromAzimuth(azimuth),
      };
    },
  };
}
