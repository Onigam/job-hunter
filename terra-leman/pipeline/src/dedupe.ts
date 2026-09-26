/**
 * Cross-portal deduplication: the same property is often published on several portals and by
 * several agencies (sometimes with slightly different prices because of agency fees).
 * Listings are clustered with union-find; each cluster becomes one published listing that keeps
 * every source.
 *
 * The function is generic over the listing shape so it only depends on the fields it reads.
 */
import type { PropertyType } from '../../shared/types.ts';
import { normalizeText } from './extract/index.ts';

export interface DedupeCandidate {
  source: string;
  sourceId: string;
  type: PropertyType;
  title: string;
  description?: string;
  priceEur?: number;
  landArea?: number;
  livingArea?: number;
  rooms?: number;
  photos: string[];
  commune: { code: string };
  location: { lon: number; lat: number; precision: string; radiusM: number };
}

/** Types that can describe the same property depending on the portal's taxonomy. */
function compatibleTypes(a: PropertyType, b: PropertyType): boolean {
  if (a === b) return true;
  const pair = new Set([a, b]);
  // A house sold "with a big plot" is sometimes filed under terrain, and "autre" is a catch-all.
  return (pair.has('maison') && pair.has('terrain')) || pair.has('autre');
}

function relDiff(a: number, b: number): number {
  return Math.abs(a - b) / Math.max(a, b);
}

function distanceM(a: { lon: number; lat: number }, b: { lon: number; lat: number }): number {
  const R = 6_371_000;
  const toRad = Math.PI / 180;
  const dLat = (b.lat - a.lat) * toRad;
  const dLon = (b.lon - a.lon) * toRad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * toRad) * Math.cos(b.lat * toRad) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

const STOP_WORDS = new Set(
  'le la les de des du un une et en a au aux pour sur dans avec par ce cette ses son sa vous nous est sont tres plus'.split(' '),
);

function shingles(text: string | undefined): Set<string> {
  const words = normalizeText(text ?? '')
    .replace(/[^a-z0-9 ]+/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP_WORDS.has(w));
  const out = new Set<string>();
  for (let i = 0; i + 2 < words.length; i++) out.add(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
  return out;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const s of a) if (b.has(s)) inter++;
  return inter / (a.size + b.size - inter);
}

/** File name of a photo URL without size/format decorations, used to spot shared pictures. */
function photoKey(url: string): string {
  const name = url.split('?')[0].split('/').pop() ?? url;
  return name.replace(/[-_](?:\d{2,4}x\d{2,4}|small|medium|large|thumb|original)(?=\.)/gi, '').toLowerCase();
}

const isPrecise = (p: string) => p === 'exact' || p === 'approx' || p === 'street';

/**
 * Decides whether two listings describe the same property. Strong structural agreement
 * (areas + price) is required; text or photo overlap can compensate for missing areas.
 */
export function isSameProperty(a: DedupeCandidate, b: DedupeCandidate, cache?: Map<DedupeCandidate, Set<string>>): boolean {
  if (a.source === b.source && a.sourceId === b.sourceId) return true;
  if (!compatibleTypes(a.type, b.type)) return false;

  // Hard incompatibilities.
  if (a.landArea && b.landArea && relDiff(a.landArea, b.landArea) > 0.02) return false;
  if (a.livingArea && b.livingArea && relDiff(a.livingArea, b.livingArea) > 0.04) return false;
  if (a.rooms && b.rooms && Math.abs(a.rooms - b.rooms) > 1) return false;
  if (isPrecise(a.location.precision) && isPrecise(b.location.precision) && distanceM(a.location, b.location) > 600) {
    return false;
  }
  const priceDiff = a.priceEur && b.priceEur ? relDiff(a.priceEur, b.priceEur) : undefined;
  if (priceDiff !== undefined && priceDiff > 0.08) return false;

  // Evidence.
  const photosA = new Set(a.photos.map(photoKey));
  const sharedPhoto = b.photos.some((p) => photosA.has(photoKey(p)));
  const shA = cache?.get(a) ?? shingles(`${a.title} ${a.description ?? ''}`);
  const shB = cache?.get(b) ?? shingles(`${b.title} ${b.description ?? ''}`);
  const textSim = jaccard(shA, shB);

  const sameLand = !!(a.landArea && b.landArea && relDiff(a.landArea, b.landArea) <= 0.005);
  const sameLiving = !!(a.livingArea && b.livingArea && relDiff(a.livingArea, b.livingArea) <= 0.01);
  const closePrice = priceDiff !== undefined && priceDiff <= 0.035;

  if (sharedPhoto && (priceDiff === undefined || priceDiff <= 0.08)) return true;
  if (textSim >= 0.5) return true;
  if (a.type === 'terrain' || b.type === 'terrain') {
    // Plots: identical surface to the m² and a close price is a very strong signal.
    return sameLand && (closePrice || textSim >= 0.2);
  }
  // Built property: both surfaces (when present) and price must agree.
  const surfacesAgree = (sameLiving || !a.livingArea || !b.livingArea) && (sameLand || !a.landArea || !b.landArea);
  const hasSurface = sameLiving || sameLand;
  return surfacesAgree && hasSurface && (closePrice || textSim >= 0.25);
}

/** Completeness score used to order a cluster (first element = richest record). */
function richness(l: DedupeCandidate): number {
  return (
    (l.description ? Math.min(l.description.length, 2000) / 400 : 0) +
    l.photos.length * 0.5 +
    (isPrecise(l.location.precision) ? 3 : 0) +
    (l.landArea ? 1 : 0) +
    (l.livingArea ? 1 : 0)
  );
}

/**
 * Clusters duplicate listings. Returns one array per property, the richest record first.
 * Comparisons are blocked by commune, so the cost stays quadratic only within a commune.
 */
export function dedupe<T extends DedupeCandidate>(listings: T[]): T[][] {
  const parent = listings.map((_, i) => i);
  const find = (i: number): number => {
    while (parent[i] !== i) {
      parent[i] = parent[parent[i]];
      i = parent[i];
    }
    return i;
  };
  const union = (i: number, j: number) => {
    const ri = find(i);
    const rj = find(j);
    if (ri !== rj) parent[rj] = ri;
  };

  const cache = new Map<DedupeCandidate, Set<string>>();
  for (const l of listings) cache.set(l, shingles(`${l.title} ${l.description ?? ''}`));

  const blocks = new Map<string, number[]>();
  listings.forEach((l, i) => {
    const key = l.commune.code;
    const block = blocks.get(key);
    if (block) block.push(i);
    else blocks.set(key, [i]);
  });

  for (const block of blocks.values()) {
    for (let x = 0; x < block.length; x++) {
      for (let y = x + 1; y < block.length; y++) {
        const i = block[x];
        const j = block[y];
        if (find(i) === find(j)) continue;
        if (isSameProperty(listings[i], listings[j], cache)) union(i, j);
      }
    }
  }

  const clusters = new Map<number, T[]>();
  listings.forEach((l, i) => {
    const root = find(i);
    const cluster = clusters.get(root);
    if (cluster) cluster.push(l);
    else clusters.set(root, [l]);
  });
  return [...clusters.values()].map((c) => c.sort((a, b) => richness(b) - richness(a)));
}
