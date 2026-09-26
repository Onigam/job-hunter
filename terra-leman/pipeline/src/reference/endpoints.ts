/**
 * Every external URL used by the reference-data fetchers, in one place, so that endpoints and
 * field names can be fixed quickly after a CI run (see docs/research/geodata-endpoints.md,
 * section D, for the smoke tests that validate them). Portal connectors keep their own URLs.
 *
 * Confidence notes come from the research doc: [V] verified from the dev container,
 * [S] confirmed by official docs, [M] from memory, to be confirmed in CI.
 */
import type { HostPolicy } from '../lib/http.ts';

const q = encodeURIComponent;

/** Layers of the Etalab cadastre used by the matcher. */
export type EtalabLayer = 'parcelles' | 'batiments' | 'lieux_dits';

export const ENDPOINTS = {
  // --- France -------------------------------------------------------------------------------

  /** [S] Communes of a department with contour geometry (fields listed as properties). */
  frCommunes: (dep: string) =>
    `https://geo.api.gouv.fr/departements/${dep}/communes` +
    '?fields=nom,code,codesPostaux,codeEpci,population,surface,centre&format=geojson&geometry=contour',

  /** [S] Etalab cadastre, one gzipped GeoJSON per commune and layer (EPSG:4326). */
  etalabCadastre: (dep: string, insee: string, layer: EtalabLayer) =>
    `https://cadastre.data.gouv.fr/data/etalab-cadastre/latest/geojson/communes/${dep}/${insee}/cadastre-${insee}-${layer}.json.gz`,

  /** [S] API Carto GPU: PLU/PLUi zones intersecting a GeoJSON geometry (max 1000 per page). */
  gpuZoneUrba: (geom: GeoJSON.Geometry, start: number, limit: number) =>
    `https://apicarto.ign.fr/api/gpu/zone-urba?geom=${q(JSON.stringify(geom))}&_start=${start}&_limit=${limit}`,

  /** [S] API Carto GPU: carte communale sectors intersecting a geometry. */
  gpuSecteurCC: (geom: GeoJSON.Geometry, start: number, limit: number) =>
    `https://apicarto.ign.fr/api/gpu/secteur-cc?geom=${q(JSON.stringify(geom))}&_start=${start}&_limit=${limit}`,

  /** [S] API Carto GPU: municipality status (`is_rnu`). */
  gpuMunicipality: (insee: string) => `https://apicarto.ign.fr/api/gpu/municipality?insee=${insee}`,

  /**
   * [S] Géoplateforme WFS fallback for PLU zones (same attributes as API Carto). WFS 2.0 with
   * EPSG:4326 expects the BBOX in lat,lon order. Hard cap 5000 features per request.
   */
  wfsZoneUrba: (bbox: [number, number, number, number], start: number, count: number) =>
    'https://data.geopf.fr/wfs/ows?SERVICE=WFS&VERSION=2.0.0&REQUEST=GetFeature&TYPENAMES=wfs_du:zone_urba' +
    `&OUTPUTFORMAT=application/json&SRSNAME=EPSG:4326&BBOX=${bbox[1]},${bbox[0]},${bbox[3]},${bbox[2]},urn:ogc:def:crs:EPSG::4326` +
    `&COUNT=${count}&STARTINDEX=${start}`,

  /** [S] DVF géolocalisé, one CSV per commune and year (years 2021–2025 as of 2026-09). */
  dvfCommune: (year: number, dep: string, insee: string) =>
    `https://files.data.gouv.fr/geo-dvf/latest/csv/${year}/communes/${dep}/${insee}.csv`,

  /** [S] BAN geocoder on the Géoplateforme (api-adresse.data.gouv.fr was retired in January 2026). */
  banStreet: (street: string, insee: string) =>
    `https://data.geopf.fr/geocodage/search?q=${q(street)}&index=address&citycode=${insee}&type=street&limit=1`,

  // --- Canton of Geneva ---------------------------------------------------------------------

  /** [M] swissBOUNDARIES3D commune polygons of one canton via the geo.admin.ch find service. */
  chCommunes: (canton: string) =>
    'https://api3.geo.admin.ch/rest/services/api/MapServer/find' +
    `?layer=ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill&searchText=${q(canton)}&searchField=kanton` +
    '&contains=false&returnGeometry=true&geometryFormat=geojson&sr=4326',

  /**
   * [S service, M query syntax] SITG ArcGIS layers queried by envelope (WGS84), output GeoJSON
   * in EPSG:4326, paged with resultOffset (maxRecordCount 2000).
   */
  sitgQuery: (layerUrl: string, bbox: [number, number, number, number], offset: number, count: number) =>
    `${layerUrl}/query?where=1%3D1&outFields=*&returnGeometry=true&outSR=4326&f=geojson` +
    `&geometry=${bbox.join(',')}&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects` +
    `&orderByFields=OBJECTID&resultOffset=${offset}&resultRecordCount=${count}`,

  /** [S] Parcels of the official survey (fields EGRID, NO_PARCELLE, COMMUNE, NO_COMM, SURFACE). */
  sitgParcels: 'https://vector.sitg.ge.ch/arcgis/rest/services/Hosted/CAD_PARCELLE_MENSU/FeatureServer/0',
  /** [S] Buildings above ground. */
  sitgBuildings: 'https://vector.sitg.ge.ch/arcgis/rest/services/Hosted/CAD_BATIMENT_HORSOL/FeatureServer/0',
  /** [M] Land-use zones (zones d'affectation), field names unconfirmed: see SITG_ZONE_FIELDS. */
  sitgZones: 'https://vector.sitg.ge.ch/arcgis/rest/services/SIT_ZONE_AMENAG/MapServer/0',

  /** [M] geo.admin.ch address search, used to geocode street names in Geneva. */
  chStreet: (street: string, commune: string) =>
    'https://api3.geo.admin.ch/rest/services/api/SearchServer' +
    `?searchText=${q(`${street} ${commune}`)}&type=locations&origins=address&limit=1&sr=4326`,

  // --- Global -------------------------------------------------------------------------------

  /** ECB daily reference rates (EUR base). */
  ecbDaily: 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml',

  /** [V] AWS Terrain Tiles, terrarium encoding, z0–15. */
  terrariumTile: (z: number, x: number, y: number) =>
    `https://elevation-tiles-prod.s3.amazonaws.com/terrarium/${z}/${x}/${y}.png`,

  /** [V] ESA WorldCover 2021 v200, 3°×3° COG named by its south-west corner, e.g. 'N45E006'. */
  worldCoverTile: (tile: string) =>
    `https://esa-worldcover.s3.eu-central-1.amazonaws.com/v200/2021/map/ESA_WorldCover_10m_2021_v200_${tile}_Map.tif`,
};

/**
 * Candidate attribute names of the SITG zoning layer, tried in order (case-insensitive). The
 * mapper falls back to any string attribute that looks like a zone label.
 */
export const SITG_ZONE_FIELDS = ['DESCRIPTION', 'NOM_ZONE', 'LIBELLE_ZONE', 'LIBELLE', 'DESIGNATION', 'ZONE', 'TYPE_ZONE', 'CODE_ZONE'];

/** Throttling per host: open-data APIs tolerate much more than listing portals. */
export const HOST_POLICIES: Record<string, Partial<HostPolicy>> = {
  'geo.api.gouv.fr': { minIntervalMs: 100, concurrency: 4 },
  'cadastre.data.gouv.fr': { minIntervalMs: 100, concurrency: 4 },
  'files.data.gouv.fr': { minIntervalMs: 50, concurrency: 6 },
  'apicarto.ign.fr': { minIntervalMs: 150, concurrency: 3 },
  // Géoplateforme: 30–50 req/s/IP, then HTTP 429 with a 5 s block.
  'data.geopf.fr': { minIntervalMs: 100, concurrency: 3 },
  'api3.geo.admin.ch': { minIntervalMs: 150, concurrency: 3 },
  'vector.sitg.ge.ch': { minIntervalMs: 200, concurrency: 2 },
  'elevation-tiles-prod.s3.amazonaws.com': { minIntervalMs: 0, concurrency: 12 },
  'esa-worldcover.s3.eu-central-1.amazonaws.com': { minIntervalMs: 0, concurrency: 8 },
};
