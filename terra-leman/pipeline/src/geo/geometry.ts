/**
 * GeoJSON-level helpers in WGS84 (bbox, centroid, rounding, validation, distances).
 */
import { area as turfArea } from '@turf/turf';
import type { PolygonGeometry } from '../types.ts';
import { createFrame, interiorPoint, projectGeometry, shapeCentroid, toLonLat } from './planar.ts';

export type LonLatBBox = [number, number, number, number];

/** Narrows any GeoJSON geometry to Polygon | MultiPolygon with at least one ring, else undefined. */
export function asPolygonGeometry(geometry: GeoJSON.Geometry | null | undefined): PolygonGeometry | undefined {
  if (!geometry) return undefined;
  if (geometry.type === 'Polygon' && geometry.coordinates.length > 0 && geometry.coordinates[0].length >= 4) {
    return geometry;
  }
  if (geometry.type === 'MultiPolygon') {
    const coordinates = geometry.coordinates.filter((p) => p.length > 0 && p[0].length >= 4);
    if (coordinates.length === 0) return undefined;
    return coordinates.length === 1 ? { type: 'Polygon', coordinates: coordinates[0] } : { type: 'MultiPolygon', coordinates };
  }
  return undefined;
}

export function geometryBBox(geometry: PolygonGeometry): LonLatBBox {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;
  for (const polygon of polygons) {
    for (const [x, y] of polygon[0]) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
  return [minX, minY, maxX, maxY];
}

/** Area-weighted centroid [lon, lat]. */
export function geometryCentroid(geometry: PolygonGeometry): [number, number] {
  const bbox = geometryBBox(geometry);
  const frame = createFrame((bbox[0] + bbox[2]) / 2, (bbox[1] + bbox[3]) / 2);
  const [x, y] = shapeCentroid(projectGeometry(frame, geometry));
  return toLonLat(frame, x, y);
}

/** A point [lon, lat] guaranteed to be inside the geometry. */
export function geometryInteriorPoint(geometry: PolygonGeometry): [number, number] {
  const bbox = geometryBBox(geometry);
  const frame = createFrame((bbox[0] + bbox[2]) / 2, (bbox[1] + bbox[3]) / 2);
  const [x, y] = interiorPoint(projectGeometry(frame, geometry));
  return toLonLat(frame, x, y);
}

/** Geodesic area in m². */
export function geodesicArea(geometry: PolygonGeometry): number {
  return turfArea(geometry);
}

/** Great-circle distance in metres between two [lon, lat] points. */
export function haversineM(a: [number, number], b: [number, number]): number {
  const R = 6_371_008.8;
  const toRad = Math.PI / 180;
  const dLat = (b[1] - a[1]) * toRad;
  const dLon = (b[0] - a[0]) * toRad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a[1] * toRad) * Math.cos(b[1] * toRad) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

/** Even-odd point-in-polygon test in lon/lat (planar; fine at commune scale). */
export function pointInGeometry(geometry: PolygonGeometry, lon: number, lat: number): boolean {
  const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;
  const inRing = (ring: GeoJSON.Position[]) => {
    let inside = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const [xi, yi] = ring[i];
      const [xj, yj] = ring[j];
      if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  };
  return polygons.some((rings) => inRing(rings[0]) && !rings.slice(1).some(inRing));
}

/** Copy of the geometry with coordinates rounded to `decimals`, dropping repeated points. */
export function roundGeometry(geometry: PolygonGeometry, decimals: number): PolygonGeometry {
  const f = 10 ** decimals;
  const roundRing = (ring: GeoJSON.Position[]) => {
    const out: GeoJSON.Position[] = [];
    for (const [x, y] of ring) {
      const p = [Math.round(x * f) / f, Math.round(y * f) / f];
      const last = out[out.length - 1];
      if (!last || last[0] !== p[0] || last[1] !== p[1]) out.push(p);
    }
    return out;
  };
  const roundPolygon = (rings: GeoJSON.Position[][]) => rings.map(roundRing).filter((r) => r.length >= 4);
  if (geometry.type === 'Polygon') return { type: 'Polygon', coordinates: roundPolygon(geometry.coordinates) };
  return {
    type: 'MultiPolygon',
    coordinates: geometry.coordinates.map(roundPolygon).filter((p) => p.length > 0),
  };
}

/** Rounds a [lon, lat] pair (6 decimals ≈ 0.1 m). */
export const roundPoint = (p: [number, number], decimals = 6): [number, number] => {
  const f = 10 ** decimals;
  return [Math.round(p[0] * f) / f, Math.round(p[1] * f) / f];
};

export const roundBBox = (b: LonLatBBox, decimals = 6): LonLatBBox => {
  const f = 10 ** decimals;
  return [Math.round(b[0] * f) / f, Math.round(b[1] * f) / f, Math.round(b[2] * f) / f, Math.round(b[3] * f) / f];
};
