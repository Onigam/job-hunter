/**
 * Manual import connector: listings added by hand in `state/manual/listings.json`
 * (e.g. ads spotted on a website that has no connector). They are validated strictly —
 * anything malformed is dropped rather than guessed — and then go through the same
 * normalisation, deduplication and parcel matching as portal listings.
 *
 * File format: `{ "listings": [ { "url", "type", "title", "price", "currency", "country",
 * "communeName", "postalCode", "landArea", "livingArea", "rooms", "bedrooms", "description",
 * "lat", "lon", "photos", "publishedAt", "agency" } ] }` — only url, type, title, price and
 * country are required.
 */
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Currency, PropertyType } from '../../../shared/types.ts';
import type { Connector, RawListing } from '../types.ts';

const MANUAL_FILE = join(dirname(fileURLToPath(import.meta.url)), '../../state/manual/listings.json');
const TYPES: PropertyType[] = ['terrain', 'maison', 'appartement', 'immeuble', 'autre'];

type ManualListing = Record<string, unknown>;

const str = (v: unknown, max = 500): string | undefined =>
  typeof v === 'string' && v.trim() ? v.trim().slice(0, max) : undefined;

const num = (v: unknown, min: number, max: number): number | undefined => {
  const n = typeof v === 'string' ? Number(v.replace(/[\s  ]/g, '').replace(',', '.')) : v;
  return typeof n === 'number' && Number.isFinite(n) && n >= min && n <= max ? n : undefined;
};

export function parseManualListing(item: ManualListing): RawListing | null {
  const url = str(item.url, 2000);
  if (!url || !/^https?:\/\//.test(url)) return null;
  const type = TYPES.find((t) => t === item.type);
  const title = str(item.title, 300);
  const country = item.country === 'CH' ? 'CH' : item.country === 'FR' ? 'FR' : undefined;
  const price = num(item.price, 1_000, 100_000_000);
  if (!type || !title || !country || price === undefined) return null;

  const currency: Currency = item.currency === 'CHF' || (item.currency !== 'EUR' && country === 'CH') ? 'CHF' : 'EUR';
  const lat = num(item.lat, 45.5, 47);
  const lon = num(item.lon, 5.5, 7);
  const photos = Array.isArray(item.photos)
    ? item.photos.filter((p): p is string => typeof p === 'string' && /^https:\/\//.test(p)).slice(0, 8)
    : [];
  const publishedAt = str(item.publishedAt, 30);
  const agency = str(item.agency, 120);

  return {
    source: 'manuel',
    sourceId: createHash('sha1').update(url).digest('hex').slice(0, 12),
    url,
    type,
    title,
    description: str(item.description, 3000),
    price,
    currency,
    landArea: num(item.landArea, 20, 2_000_000),
    livingArea: num(item.livingArea, 10, 5_000),
    rooms: num(item.rooms, 1, 50),
    bedrooms: num(item.bedrooms, 0, 40),
    country,
    communeName: str(item.communeName, 120),
    postalCode: str(item.postalCode, 10),
    ...(lat !== undefined && lon !== undefined ? { lat, lon, precision: 'exact' as const, radiusM: 0 } : {}),
    photos,
    publishedAt: publishedAt && !Number.isNaN(Date.parse(publishedAt)) ? publishedAt : undefined,
    agency,
    sellerType: agency ? (/notaire/i.test(agency) ? 'notaire' : 'agence') : 'inconnu',
  };
}

export const manualConnector: Connector = {
  id: 'manuel',
  label: 'Ajouts manuels',
  country: 'FR',
  // Only active when the file exists.
  enabledByDefault: existsSync(MANUAL_FILE),
  async fetch(ctx) {
    if (!existsSync(MANUAL_FILE)) return [];
    const data = JSON.parse(await readFile(MANUAL_FILE, 'utf8')) as { listings?: unknown[] };
    const items = Array.isArray(data.listings) ? data.listings : [];
    const listings = items
      .map((item) => parseManualListing((item ?? {}) as ManualListing))
      .filter((l): l is RawListing => l !== null);
    if (listings.length < items.length) {
      ctx.log.warn(`manuel: ${items.length - listings.length} entrée(s) invalide(s) ignorée(s)`);
    }
    return listings;
  },
};
