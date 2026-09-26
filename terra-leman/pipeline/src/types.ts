/**
 * Internal pipeline types. The public data contract lives in `shared/types.ts`.
 */
import type {
  Country,
  Currency,
  Listing,
  ListingFeatures,
  ListingLocation,
  LocationPrecision,
  PropertyType,
  SellerType,
  ZoningInfo,
} from '../../shared/types.ts';
import type { HttpClient } from './lib/http.ts';
import type { Logger } from './lib/log.ts';

/** A commune of the area of interest. */
export interface CommuneRef {
  country: Country;
  /** INSEE code (FR, e.g. '74243') or OFS number (CH, e.g. '6621'). */
  code: string;
  name: string;
  /** French department ('74', '01') or Swiss canton ('GE'). */
  admin: string;
  postalCodes: string[];
  /** [lon, lat] */
  centroid: [number, number];
  bbox: [number, number, number, number];
  /** SIREN of the EPCI (FR only) — used to find PLUi zoning partitions. */
  epci?: string;
  population?: number;
  /** Outline (WGS84). Absent when the geometry could not be fetched. */
  geometry?: GeoJSON.Polygon | GeoJSON.MultiPolygon;
}

/**
 * One ad as returned by a portal connector, before normalisation, deduplication and matching.
 * Connectors fill what they can; everything except identity/url/type/currency/country/photos is optional.
 */
export interface RawListing {
  source: string;
  sourceId: string;
  url: string;
  type: PropertyType;
  title: string;
  description?: string;
  price?: number;
  currency: Currency;
  /** m² */
  landArea?: number;
  /** m² */
  livingArea?: number;
  rooms?: number;
  bedrooms?: number;
  country: Country;
  communeName?: string;
  /** INSEE / OFS code when the portal provides it. */
  communeCode?: string;
  postalCode?: string;
  lat?: number;
  lon?: number;
  /** Precision of lat/lon as far as the connector knows. */
  precision?: LocationPrecision;
  /** Blur radius in metres when the portal exposes one. */
  radiusM?: number;
  photos: string[];
  publishedAt?: string;
  updatedAt?: string;
  agency?: string;
  sellerType?: SellerType;
  /** True for synthetic demo ads. */
  demo?: boolean;
}

export interface ConnectorContext {
  /** Communes of the AOI for this connector's country. */
  communes: CommuneRef[];
  bbox: [number, number, number, number];
  polygon: [number, number][];
  /** Property types to fetch. */
  types: PropertyType[];
  http: HttpClient;
  log: Logger;
  /** Optional cap on the number of ads (useful in development). */
  limit?: number;
  /** Deadline (epoch ms) after which the connector should stop paginating and return what it has. */
  deadline: number;
}

export interface Connector {
  id: string;
  label: string;
  country: Country;
  /** Whether the connector runs when no explicit source list is given. */
  enabledByDefault: boolean;
  fetch(ctx: ConnectorContext): Promise<RawListing[]>;
}

/**
 * A raw ad after normalisation (`normalize.ts`): commune resolved inside the AOI, position prior,
 * EUR price and text features. Input of deduplication (`dedupe.ts`) and of the later stages.
 */
export interface NormalizedListing extends RawListing {
  commune: CommuneRef;
  location: ListingLocation;
  priceEur?: number;
  /** EUR per m² of land (terrain only). */
  pricePerM2Land?: number;
  /** EUR per m² of living area (built property only). */
  pricePerM2Living?: number;
  features: ListingFeatures;
}

/**
 * A deduplicated listing (one cluster of `NormalizedListing`) before history merging assigns its
 * stable id, first/last seen dates and price history (`history.ts`).
 */
export type ListingDraft = Omit<
  Listing,
  'id' | 'firstSeen' | 'lastSeen' | 'priceHistory' | 'status' | 'removedAt' | 'match' | 'market' | 'flags'
> & { demo: boolean };

// ---------------------------------------------------------------------------------------------
// Reference geodata (cadastre, buildings, place names, zoning) of one commune
// ---------------------------------------------------------------------------------------------

export type PolygonGeometry = GeoJSON.Polygon | GeoJSON.MultiPolygon;

/** A cadastral parcel (Etalab cadastre in France, official survey "MO" in Geneva). */
export interface Parcel {
  /** Official identifier: Etalab id (e.g. '74243000B1234') or Geneva EGRID / commune-number key. */
  id: string;
  communeCode: string;
  /** Short human-readable reference, e.g. "Valleiry · B 1234" or "Genève · 4321". */
  label: string;
  /** Section (FR only), without leading zeros, e.g. 'B', 'AB'. */
  section?: string;
  /** Parcel number without leading zeros. */
  numero: string;
  /** Prefix of the former commune for merged communes (FR, '000' when none). */
  prefix?: string;
  /** m²: official area (contenance / surface RF) when known, else geodesic area. */
  area: number;
  geometry: PolygonGeometry;
  bbox: [number, number, number, number];
  centroid: [number, number];
}

export interface Building {
  geometry: PolygonGeometry;
}

/** Cadastral place name (lieu-dit) with its outline. */
export interface LieuDit {
  name: string;
  geometry: PolygonGeometry;
}

/** One zoning polygon of the local plan (PLU/PLUi zone, carte communale sector, GE zone). */
export interface ZoneArea {
  zoning: ZoningInfo;
  geometry: PolygonGeometry;
}

/** Everything the matcher needs to know about one commune. */
export interface CommuneGeodata {
  commune: CommuneRef;
  parcels: Parcel[];
  buildings: Building[];
  lieuxDits: LieuDit[];
  zones: ZoneArea[];
  /** Zoning of parcels covered by no zone polygon (e.g. RNU communes); undefined = unknown. */
  defaultZoning?: ZoningInfo;
  /** Degradations met while loading (missing layer, failed request...), for the sync report. */
  warnings: string[];
}
