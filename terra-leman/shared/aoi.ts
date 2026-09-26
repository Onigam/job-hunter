/**
 * Area of interest (AOI) of the proof of concept: the Greater Geneva basin, framed by
 * the Jura crest (west), the Vuache (south-west), the Salève (south), the Voirons (east)
 * and Lake Geneva (north).
 *
 * The pipeline selects French communes of the listed departments whose centroid lies in
 * `AOI_POLYGON`, plus all communes of the Canton of Geneva. The polygon is intentionally
 * generous; the precise outline shown on the map is the union of the selected communes.
 *
 * To extend the coverage later (rest of Haute-Savoie, Vaud...), widen the polygon and add
 * departments/cantons here — nothing else is hard-coded.
 */

export const AOI_NAME = 'Grand Genève — Genevois, Pays de Gex, Salève, Voirons';

/** Clockwise outline [lon, lat], first point repeated at the end. */
export const AOI_POLYGON: [number, number][] = [
  [6.0, 46.395], // Jura crest, Col de la Faucille / Mijoux
  [6.11, 46.42], // north of Divonne-les-Bains
  [6.2, 46.395], // Vaud border near the lake shore
  [6.3, 46.38], // Lake Geneva, off Yvoire
  [6.36, 46.37], // Excenevex / Yvoire shore
  [6.41, 46.33], // Sciez
  [6.43, 46.27], // Brenthonne
  [6.43, 46.21], // east flank of the Voirons
  [6.385, 46.15], // Fillinges / Marcellaz
  [6.32, 46.105], // Reignier-Ésery
  [6.24, 46.075], // Arbusigny
  [6.16, 46.06], // south of the Salève plateau
  [6.09, 46.045], // south end of the Salève
  [6.0, 46.035], // Jonzier-Épagny / Savigny
  [5.925, 46.045], // south of the Vuache
  [5.87, 46.11], // Rhône gorge, Fort l'Écluse
  [5.88, 46.18], // Péron / Farges, foot of the Jura
  [5.915, 46.26], // Jura crest, Reculet
  [5.96, 46.33], // Jura crest, Colomby de Gex
  [6.0, 46.395],
];

/** [minLon, minLat, maxLon, maxLat] of AOI_POLYGON. */
export const AOI_BBOX: [number, number, number, number] = [5.87, 46.035, 6.43, 46.42];

/** French departments scanned for communes inside the AOI. */
export const AOI_FR_DEPARTMENTS = ['74', '01'] as const;

/** The 45 communes of the Canton of Geneva with their OFS (BFS) numbers. */
export const GENEVA_COMMUNES: { ofs: string; name: string }[] = [
  { ofs: '6601', name: 'Aire-la-Ville' },
  { ofs: '6602', name: 'Anières' },
  { ofs: '6603', name: 'Avully' },
  { ofs: '6604', name: 'Avusy' },
  { ofs: '6605', name: 'Bardonnex' },
  { ofs: '6606', name: 'Bellevue' },
  { ofs: '6607', name: 'Bernex' },
  { ofs: '6608', name: 'Carouge' },
  { ofs: '6609', name: 'Cartigny' },
  { ofs: '6610', name: 'Céligny' },
  { ofs: '6611', name: 'Chancy' },
  { ofs: '6612', name: 'Chêne-Bougeries' },
  { ofs: '6613', name: 'Chêne-Bourg' },
  { ofs: '6614', name: 'Choulex' },
  { ofs: '6615', name: 'Collex-Bossy' },
  { ofs: '6616', name: 'Collonge-Bellerive' },
  { ofs: '6617', name: 'Cologny' },
  { ofs: '6618', name: 'Confignon' },
  { ofs: '6619', name: 'Corsier' },
  { ofs: '6620', name: 'Dardagny' },
  { ofs: '6621', name: 'Genève' },
  { ofs: '6622', name: 'Genthod' },
  { ofs: '6623', name: 'Le Grand-Saconnex' },
  { ofs: '6624', name: 'Gy' },
  { ofs: '6625', name: 'Hermance' },
  { ofs: '6626', name: 'Jussy' },
  { ofs: '6627', name: 'Laconnex' },
  { ofs: '6628', name: 'Lancy' },
  { ofs: '6629', name: 'Meinier' },
  { ofs: '6630', name: 'Meyrin' },
  { ofs: '6631', name: 'Onex' },
  { ofs: '6632', name: 'Perly-Certoux' },
  { ofs: '6633', name: 'Plan-les-Ouates' },
  { ofs: '6634', name: 'Pregny-Chambésy' },
  { ofs: '6635', name: 'Presinge' },
  { ofs: '6636', name: 'Puplinge' },
  { ofs: '6637', name: 'Russin' },
  { ofs: '6638', name: 'Satigny' },
  { ofs: '6639', name: 'Soral' },
  { ofs: '6640', name: 'Thônex' },
  { ofs: '6641', name: 'Troinex' },
  { ofs: '6642', name: 'Vandœuvres' },
  { ofs: '6643', name: 'Vernier' },
  { ofs: '6644', name: 'Versoix' },
  { ofs: '6645', name: 'Veyrier' },
];

/** Initial camera of the web app: looking south-east across the basin towards the Salève. */
export const DEFAULT_VIEW = {
  center: [6.12, 46.2] as [number, number],
  zoom: 10.4,
  pitch: 55,
  bearing: 150,
};

/** Landmarks labelled on the map. */
export const LANDMARKS: { name: string; lon: number; lat: number; kind: 'sommet' | 'lac' }[] = [
  { name: 'Salève', lon: 6.1747, lat: 46.1211, kind: 'sommet' },
  { name: 'Voirons', lon: 6.3386, lat: 46.2286, kind: 'sommet' },
  { name: 'Crêt de la Neige (Jura)', lon: 5.9394, lat: 46.2711, kind: 'sommet' },
  { name: 'Vuache', lon: 5.9522, lat: 46.0853, kind: 'sommet' },
  { name: 'Léman', lon: 6.23, lat: 46.33, kind: 'lac' },
];

/** Returns true when [lon, lat] lies inside the polygon (ray casting, planar approximation). */
export function pointInPolygon(lon: number, lat: number, polygon: [number, number][] = AOI_POLYGON): boolean {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];
    const intersects = yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi;
    if (intersects) inside = !inside;
  }
  return inside;
}
