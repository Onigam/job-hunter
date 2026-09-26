/**
 * Terra Léman — data contract shared by the ingestion pipeline (Node) and the web app (browser).
 *
 * The pipeline writes these structures to `web/public/data/*` and the web app reads them.
 * Keep this file dependency-free (no imports) so both runtimes can consume it directly.
 *
 * Conventions
 *  - Coordinates are WGS84 [lon, lat].
 *  - Areas are square metres, distances metres.
 *  - Dates are ISO 8601 strings (UTC). Day-only dates use `YYYY-MM-DD`.
 *  - Prices are stored in the listing currency; `priceEur` is the EUR-normalised value
 *    used for cross-border filtering and colouring.
 *  - Human-readable strings produced by the pipeline (labels, explanations) are in French.
 */

export const DATA_VERSION = 1;

export type Country = 'FR' | 'CH';
export type Currency = 'EUR' | 'CHF';

/** Property categories exposed in the UI. `terrain` is the primary focus of the product. */
export type PropertyType = 'terrain' | 'maison' | 'appartement' | 'immeuble' | 'autre';

export const PROPERTY_TYPES: PropertyType[] = ['terrain', 'maison', 'appartement', 'immeuble', 'autre'];

/**
 * How precise the listing position is, before parcel matching.
 *  - exact:     portal gives the real position (a few metres).
 *  - approx:    portal gives an approximate position (typically 100–500 m).
 *  - blurred:   portal explicitly blurs the position inside a disk of `radiusM`.
 *  - street:    geocoded from a street name found in the text.
 *  - lieu-dit:  geocoded from a cadastral place name (lieu-dit) found in the text.
 *  - commune:   only the commune is known (position = commune centroid).
 */
export type LocationPrecision = 'exact' | 'approx' | 'blurred' | 'street' | 'lieu-dit' | 'commune';

export interface ListingLocation {
  lon: number;
  lat: number;
  precision: LocationPrecision;
  /** 1-sigma uncertainty radius in metres (0 when exact). */
  radiusM: number;
}

/** Portal identifier, e.g. 'bienici', 'leboncoin', 'pap', 'notaires', 'immobilier-ch', 'flatfox', 'demo'. */
export type SourceId = string;

export type SellerType = 'agence' | 'particulier' | 'notaire' | 'promoteur' | 'inconnu';

/** One occurrence of the property on a portal. A deduplicated listing aggregates several. */
export interface SourceRef {
  source: SourceId;
  /** Identifier of the ad on the portal. */
  sourceId: string;
  url: string;
  agency?: string;
  sellerType?: SellerType;
  /** Price as displayed on this portal (listing currency). */
  price?: number;
  firstSeen: string;
  lastSeen: string;
}

export interface PricePoint {
  date: string;
  price: number;
}

/** Facts extracted from the title/description (regex and optional LLM extraction). */
export interface ListingFeatures {
  constructible?: boolean;
  viabilise?: boolean;
  divisible?: boolean;
  lotissement?: boolean;
  /** Terrain slope as described in the text. */
  pente?: 'plat' | 'legere' | 'forte';
  /** Views mentioned: 'lac', 'montagnes', 'mont-blanc', 'saleve', 'jura', 'voirons', 'degagee'. */
  vues?: string[];
  exposition?: string;
  /** Zoning code quoted in the ad, e.g. 'UC', 'UH', '1AU', 'zone 5'. */
  zoneMentionnee?: string;
  /** Cadastral references quoted in the ad, normalised as `SECTION NUMERO` (FR) or parcel number (CH). */
  refsCadastrales?: string[];
  lieuDit?: string;
  rue?: string;
  /** Maximum ground coverage (CES / emprise au sol) in %, if quoted. */
  empriseSolPct?: number;
  /** Other notable keywords (piscine, garage, ruine, bois, etc.). */
  motsCles?: string[];
}

export type ZoneType =
  | 'U' // zone urbaine (FR)
  | 'AU' // à urbaniser (FR)
  | 'A' // agricole (FR)
  | 'N' // naturelle et forestière (FR)
  | 'ZC' // carte communale, constructible (FR)
  | 'ZnC' // carte communale, non constructible (FR)
  | 'RNU' // règlement national d'urbanisme, no local plan (FR)
  | 'CH-habitat' // zones à bâtir 1–5 (GE)
  | 'CH-developpement' // zones de développement (GE)
  | 'CH-activites' // zones industrielles / artisanales (GE)
  | 'CH-agricole'
  | 'CH-foret'
  | 'CH-autre'
  | 'inconnu';

export interface ZoningInfo {
  /** Local code, e.g. 'UC', '1AUh', 'A', 'N', 'Zone 5', 'ZD4A'. */
  code: string;
  type: ZoneType;
  label?: string;
  /** Whether the zone generally allows new residential construction. */
  constructible: boolean;
  /** Link to the planning document (PLU regulation PDF, SITG sheet...). */
  docUrl?: string;
}

export interface TerrainInfo {
  elevationM: number;
  /** Mean slope over the parcel, percent. */
  slopePct: number;
  /** Dominant slope orientation. */
  aspect: 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SO' | 'O' | 'NO' | 'plat';
}

export type MatchSignalKey =
  | 'surface'
  | 'position'
  | 'zonage'
  | 'bati'
  | 'occupation-sol'
  | 'texte'
  | 'ref-cadastrale'
  | 'pente';

/** One factor of the parcel matching score, explained to the user. */
export interface MatchSignal {
  key: MatchSignalKey;
  /** 0..1, 1 = perfectly consistent with the listing. */
  score: number;
  /** Relative weight used in the combined score. */
  weight: number;
  /** French explanation, e.g. "Surface cadastrale 842 m² vs 850 m² annoncés (−0,9 %)". */
  label: string;
}

export interface ParcelCandidate {
  /** 0 = best. */
  rank: number;
  /** Cadastral parcel identifiers composing this candidate (1..n adjacent parcels). */
  parcelIds: string[];
  /** Human-readable references, e.g. "Valleiry · section B n° 1234". */
  labels: string[];
  /** Official area when known (contenance / surface RF), else geodesic area. */
  area: number;
  /** (area − listed area) / listed area × 100. Undefined when the listing has no area. */
  areaDeltaPct?: number;
  /** Distance between candidate centroid and the listing position prior. */
  distanceM: number;
  /** Raw combined score 0..1. */
  score: number;
  /** Normalised probability among considered candidates, 0..1. */
  probability: number;
  zoning?: ZoningInfo;
  /** Share of the candidate covered by buildings, 0..1. */
  buildingCoverage: number;
  /** Share of land-cover classes from ESA WorldCover (e.g. { prairie: 0.7, arbres: 0.2 }). */
  landCover?: Record<string, number>;
  terrain?: TerrainInfo;
  signals: MatchSignal[];
  /** Centroid [lon, lat] for quick camera moves without loading geometry. */
  centroid: [number, number];
  /** Bounding box [minLon, minLat, maxLon, maxLat]. */
  bbox: [number, number, number, number];
}

export type MatchMethod =
  | 'ref-cadastrale' // cadastral reference quoted in the ad
  | 'surface-unique' // one parcel whose area matches
  | 'surface-multiple' // a group of adjacent parcels whose total area matches
  | 'emprise-bati' // house/apartment: parcel carrying a consistent building
  | 'zone-probable' // no convincing contour: only a probable zone is shown
  | 'aucune'; // not enough data (no reference data for the commune, no area...)

export type ConfidenceLabel = 'élevée' | 'moyenne' | 'faible' | 'très faible';

/** Result of the parcel reconstruction for one listing. */
export interface ParcelMatch {
  /** 0..1 reliability of the displayed contour (not of the listing itself). */
  confidence: number;
  confidenceLabel: ConfidenceLabel;
  method: MatchMethod;
  /** Up to 5 candidates sorted by probability, candidates[0] is the displayed contour. */
  candidates: ParcelCandidate[];
  /** Radius of the search area around the position prior (0 = whole commune). */
  searchRadiusM: number;
  /** How many parcels/groups were scored. */
  candidatesConsidered: number;
  /** Ordered French sentences summarising the reasoning. */
  explanation: string[];
}

export interface MarketRef {
  /** Median price per m² (EUR) for comparable sales/listings. */
  medianPricePerM2: number;
  p25?: number;
  p75?: number;
  sampleSize: number;
  /** e.g. "2022–2025". */
  period: string;
  source: 'DVF' | 'annonces';
  /** (listing €/m² − median) / median × 100. */
  deltaPct?: number;
}

export interface Listing {
  /** Stable id across syncs (survives dedup re-clustering), e.g. 'tl_8f3a2c19'. */
  id: string;
  type: PropertyType;
  title: string;
  description?: string;
  price?: number;
  currency: Currency;
  priceEur?: number;
  /** Land surface, m². */
  landArea?: number;
  /** Living surface, m². */
  livingArea?: number;
  rooms?: number;
  bedrooms?: number;
  /** EUR per m² of land (terrain) — priceEur / landArea. */
  pricePerM2Land?: number;
  /** EUR per m² of living area (built property) — priceEur / livingArea. */
  pricePerM2Living?: number;
  country: Country;
  commune: {
    /** INSEE code (FR) or OFS number (CH). */
    code: string;
    name: string;
    postalCode?: string;
  };
  location: ListingLocation;
  /** Absolute photo URLs (hotlinked from the portal). */
  photos: string[];
  sources: SourceRef[];
  firstSeen: string;
  lastSeen: string;
  publishedAt?: string;
  priceHistory: PricePoint[];
  status: 'active' | 'removed';
  removedAt?: string;
  features: ListingFeatures;
  match?: ParcelMatch;
  market?: MarketRef;
  flags: {
    /** First seen during the last 7 days. */
    isNew: boolean;
    /** Price decreased at least once. */
    priceDrop: boolean;
    /** Synthetic listing generated for demonstration (no real ad behind it). */
    demo?: boolean;
  };
}

export interface SourceStatus {
  source: SourceId;
  label: string;
  country: Country;
  ok: boolean;
  /** Raw ads fetched. */
  fetched: number;
  /** Ads kept after AOI filtering and normalisation. */
  kept: number;
  durationMs: number;
  error?: string;
}

export interface SyncMeta {
  version: number;
  generatedAt: string;
  aoi: {
    name: string;
    bbox: [number, number, number, number];
  };
  counts: {
    total: number;
    active: number;
    byType: Record<PropertyType, number>;
    withContour: number;
    highConfidence: number;
  };
  sources: SourceStatus[];
  fx: { CHF_EUR: number; date: string };
  /** True when the dataset (or part of it) is synthetic. */
  demo: boolean;
}

/** `web/public/data/listings.json` */
export interface ListingsFile {
  meta: SyncMeta;
  listings: Listing[];
}

/**
 * Properties of features in `web/public/data/parcels.geojson`.
 * Geometry: Polygon | MultiPolygon (WGS84). One feature per candidate
 * (all ranks), plus one `zone` feature for listings without a convincing contour.
 */
export interface ParcelFeatureProps {
  /** `${listingId}:${rank}` or `${listingId}:zone`. */
  id: string;
  listingId: string;
  kind: 'parcel' | 'zone';
  rank: number;
  isBest: boolean;
  probability: number;
  /** Confidence of the listing match (same for all its features). */
  confidence: number;
  type: PropertyType;
  area: number;
  priceEur?: number;
  pricePerM2?: number;
}

/**
 * Properties of features in `web/public/data/communes.geojson`
 * (one per commune of the area of interest, simplified geometry).
 */
export interface CommuneFeatureProps {
  code: string;
  name: string;
  country: Country;
  postalCodes: string[];
  /** Active listings in the commune. */
  listingCount: number;
  /** Median land price €/m² from recent DVF sales of building plots (FR only). */
  dvfLandMedianPricePerM2?: number;
  dvfLandSampleSize?: number;
  /** Median asking €/m² of land for active terrain listings. */
  askingLandMedianPricePerM2?: number;
}
