/**
 * Planar geometry in a local metric frame: an equirectangular projection around a reference
 * point. Distortion stays below 0.1 % within ~20 km of the reference, which is plenty for
 * parcel-scale work (a commune), and it is far cheaper than geodesic maths on every vertex.
 *
 * Shapes are stored as flat coordinate arrays: a ring is [x0, y0, x1, y1, ...] without the
 * closing point; a polygon is its outer ring followed by its holes; a shape is a list of
 * polygons (MultiPolygon semantics). Units are metres, x east, y north.
 */
import type { PolygonGeometry } from '../types.ts';

const EARTH_RADIUS = 6_371_008.8;
const DEG = Math.PI / 180;

export type BBox = [number, number, number, number];
export type Ring = Float64Array;
export type LocalPolygon = Ring[];
export type Shape = LocalPolygon[];

export interface LocalFrame {
  lon0: number;
  lat0: number;
  /** Metres per degree of longitude at lat0. */
  mx: number;
  /** Metres per degree of latitude. */
  my: number;
}

export function createFrame(lon0: number, lat0: number): LocalFrame {
  return { lon0, lat0, mx: EARTH_RADIUS * DEG * Math.cos(lat0 * DEG), my: EARTH_RADIUS * DEG };
}

export function toXY(frame: LocalFrame, lon: number, lat: number): [number, number] {
  return [(lon - frame.lon0) * frame.mx, (lat - frame.lat0) * frame.my];
}

export function toLonLat(frame: LocalFrame, x: number, y: number): [number, number] {
  return [frame.lon0 + x / frame.mx, frame.lat0 + y / frame.my];
}

function projectRing(frame: LocalFrame, coords: GeoJSON.Position[]): Ring {
  // Drop the closing point when present.
  let n = coords.length;
  if (n > 1 && coords[0][0] === coords[n - 1][0] && coords[0][1] === coords[n - 1][1]) n--;
  const ring = new Float64Array(n * 2);
  for (let i = 0; i < n; i++) {
    ring[i * 2] = (coords[i][0] - frame.lon0) * frame.mx;
    ring[i * 2 + 1] = (coords[i][1] - frame.lat0) * frame.my;
  }
  return ring;
}

export function projectGeometry(frame: LocalFrame, geometry: PolygonGeometry): Shape {
  const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;
  return polygons
    .map((rings) => rings.map((ring) => projectRing(frame, ring)).filter((r) => r.length >= 6))
    .filter((rings) => rings.length > 0);
}

/** Converts a shape back to a GeoJSON geometry in WGS84. */
export function unprojectShape(frame: LocalFrame, shape: Shape): PolygonGeometry {
  const polygons = shape.map((rings) =>
    rings.map((ring) => {
      const coords: GeoJSON.Position[] = [];
      for (let i = 0; i < ring.length; i += 2) coords.push(toLonLat(frame, ring[i], ring[i + 1]));
      coords.push(coords[0]);
      return coords;
    }),
  );
  return polygons.length === 1
    ? { type: 'Polygon', coordinates: polygons[0] }
    : { type: 'MultiPolygon', coordinates: polygons };
}

/** Signed area of a ring (positive when counter-clockwise). */
export function ringSignedArea(ring: Ring): number {
  let sum = 0;
  const n = ring.length;
  for (let i = 0, j = n - 2; i < n; j = i, i += 2) {
    sum += (ring[j] - ring[i]) * (ring[j + 1] + ring[i + 1]);
  }
  return sum / 2;
}

/** Area in m² (outer rings minus holes). */
export function shapeArea(shape: Shape): number {
  let area = 0;
  for (const polygon of shape) {
    polygon.forEach((ring, k) => {
      const a = Math.abs(ringSignedArea(ring));
      area += k === 0 ? a : -a;
    });
  }
  return Math.max(0, area);
}

export function shapeBBox(shape: Shape): BBox {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const polygon of shape) {
    const ring = polygon[0];
    for (let i = 0; i < ring.length; i += 2) {
      if (ring[i] < minX) minX = ring[i];
      if (ring[i] > maxX) maxX = ring[i];
      if (ring[i + 1] < minY) minY = ring[i + 1];
      if (ring[i + 1] > maxY) maxY = ring[i + 1];
    }
  }
  return [minX, minY, maxX, maxY];
}

function pointInRing(ring: Ring, x: number, y: number): boolean {
  let inside = false;
  const n = ring.length;
  for (let i = 0, j = n - 2; i < n; j = i, i += 2) {
    const xi = ring[i];
    const yi = ring[i + 1];
    const xj = ring[j];
    const yj = ring[j + 1];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

export function pointInPolygon(polygon: LocalPolygon, x: number, y: number): boolean {
  if (!pointInRing(polygon[0], x, y)) return false;
  for (let k = 1; k < polygon.length; k++) if (pointInRing(polygon[k], x, y)) return false;
  return true;
}

export function pointInShape(shape: Shape, x: number, y: number): boolean {
  return shape.some((polygon) => pointInPolygon(polygon, x, y));
}

/** Squared distance from (x, y) to the segment (ax, ay)–(bx, by). */
function segmentDistance2(x: number, y: number, ax: number, ay: number, bx: number, by: number): number {
  const dx = bx - ax;
  const dy = by - ay;
  const len2 = dx * dx + dy * dy;
  let t = len2 > 0 ? ((x - ax) * dx + (y - ay) * dy) / len2 : 0;
  t = t < 0 ? 0 : t > 1 ? 1 : t;
  const px = ax + t * dx - x;
  const py = ay + t * dy - y;
  return px * px + py * py;
}

/** Distance from (x, y) to the nearest ring edge of the shape (ignores inside/outside). */
export function distanceToBoundary(shape: Shape, x: number, y: number): number {
  let best = Infinity;
  for (const polygon of shape) {
    for (const ring of polygon) {
      const n = ring.length;
      for (let i = 0, j = n - 2; i < n; j = i, i += 2) {
        const d2 = segmentDistance2(x, y, ring[j], ring[j + 1], ring[i], ring[i + 1]);
        if (d2 < best) best = d2;
      }
    }
  }
  return Math.sqrt(best);
}

/** Distance from (x, y) to the shape: 0 inside, else distance to the boundary. */
export function distanceToShape(shape: Shape, x: number, y: number): number {
  return pointInShape(shape, x, y) ? 0 : distanceToBoundary(shape, x, y);
}

/** Area-weighted centroid (may fall outside a concave shape; see `interiorPoint`). */
export function shapeCentroid(shape: Shape): [number, number] {
  let cx = 0;
  let cy = 0;
  let total = 0;
  for (const polygon of shape) {
    polygon.forEach((ring, k) => {
      const sign = k === 0 ? 1 : -1;
      const orientation = Math.sign(ringSignedArea(ring)) || 1;
      const n = ring.length;
      for (let i = 0, j = n - 2; i < n; j = i, i += 2) {
        const cross = ring[j] * ring[i + 1] - ring[i] * ring[j + 1];
        const f = sign * orientation * cross;
        cx += (ring[j] + ring[i]) * f;
        cy += (ring[j + 1] + ring[i + 1]) * f;
        total += f;
      }
    });
  }
  if (Math.abs(total) < 1e-9) {
    const ring = shape[0][0];
    return [ring[0], ring[1]];
  }
  return [cx / (3 * total), cy / (3 * total)];
}

/**
 * A point guaranteed to lie inside the shape: the centroid when it is inside, otherwise the
 * middle of the widest interior interval on the horizontal line through the centroid.
 */
export function interiorPoint(shape: Shape): [number, number] {
  const [cx, cy] = shapeCentroid(shape);
  if (pointInShape(shape, cx, cy)) return [cx, cy];
  let best: [number, number] | undefined;
  let bestWidth = -1;
  for (const polygon of shape) {
    const xs: number[] = [];
    const [, minY, , maxY] = shapeBBox([polygon]);
    // Scan through the centroid height when it crosses this polygon, else through its middle.
    const y = cy > minY && cy < maxY ? cy : (minY + maxY) / 2;
    for (const ring of polygon) {
      const n = ring.length;
      for (let i = 0, j = n - 2; i < n; j = i, i += 2) {
        const yi = ring[i + 1];
        const yj = ring[j + 1];
        if (yi > y !== yj > y) xs.push(ring[i] + ((y - yi) * (ring[j] - ring[i])) / (yj - yi));
      }
    }
    xs.sort((a, b) => a - b);
    for (let k = 0; k + 1 < xs.length; k += 2) {
      const width = xs[k + 1] - xs[k];
      if (width > bestWidth) {
        bestWidth = width;
        best = [(xs[k] + xs[k + 1]) / 2, y];
      }
    }
  }
  return best ?? [shape[0][0][0], shape[0][0][1]];
}

function segmentsIntersect(
  ax: number, ay: number, bx: number, by: number,
  cx: number, cy: number, dx: number, dy: number,
): boolean {
  const d1 = (dx - cx) * (ay - cy) - (dy - cy) * (ax - cx);
  const d2 = (dx - cx) * (by - cy) - (dy - cy) * (bx - cx);
  const d3 = (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
  const d4 = (bx - ax) * (dy - ay) - (by - ay) * (dx - ax);
  return d1 * d2 < 0 && d3 * d4 < 0;
}

/** Minimum distance between two shapes (0 when they overlap or touch). */
export function shapesDistance(a: Shape, b: Shape): number {
  // Containment of any vertex means overlap.
  for (const polygon of a) if (pointInShape(b, polygon[0][0], polygon[0][1])) return 0;
  for (const polygon of b) if (pointInShape(a, polygon[0][0], polygon[0][1])) return 0;
  let best = Infinity;
  for (const pa of a) {
    for (const ra of pa) {
      const na = ra.length;
      for (let i = 0, j = na - 2; i < na; j = i, i += 2) {
        best = Math.min(best, distanceToBoundary(b, ra[i], ra[i + 1]));
        for (const pb of b) {
          for (const rb of pb) {
            const nb = rb.length;
            for (let k = 0, l = nb - 2; k < nb; l = k, k += 2) {
              if (segmentsIntersect(ra[j], ra[j + 1], ra[i], ra[i + 1], rb[l], rb[l + 1], rb[k], rb[k + 1])) return 0;
            }
          }
        }
      }
    }
  }
  for (const pb of b) {
    for (const rb of pb) {
      for (let k = 0; k < rb.length; k += 2) best = Math.min(best, distanceToBoundary(a, rb[k], rb[k + 1]));
    }
  }
  return best;
}

/** All vertices of the shape as [x, y] pairs (outer rings and holes). */
export function* shapeVertices(shape: Shape): Generator<[number, number]> {
  for (const polygon of shape) {
    for (const ring of polygon) {
      for (let i = 0; i < ring.length; i += 2) yield [ring[i], ring[i + 1]];
    }
  }
}
