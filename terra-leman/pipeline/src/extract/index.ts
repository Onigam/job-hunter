/**
 * Deterministic feature extraction from French listing texts (title + description).
 *
 * Everything here feeds the parcel matcher, so precision matters more than recall:
 * a wrong cadastral reference or street would pull the reconstruction to the wrong place,
 * while a missing one only makes the result less certain. Patterns are therefore
 * conservative and anchored on explicit wording.
 */
import type { ListingFeatures, PropertyType } from '../../../shared/types.ts';

/** Lower-case, strip accents, normalise apostrophes/dashes/spaces. Keeps string length stable enough for regexes. */
export function normalizeText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[’`´]/g, "'")
    .replace(/[‐‑‒–—]/g, '-')
    .replace(/[  ]/g, ' ')
    .toLowerCase();
}

/** Parses "1 250", "1.250", "1250,5" → number. */
function parseNumber(raw: string): number {
  const cleaned = raw.replace(/[\s.](?=\d{3}\b)/g, '').replace(',', '.');
  return Number(cleaned);
}

// ---------------------------------------------------------------------------------------------
// Booleans
// ---------------------------------------------------------------------------------------------

const NOT_CONSTRUCTIBLE =
  /\b(non[- ]constructible|inconstructible|non a batir|zone (?:agricole|naturelle)|terrain de loisirs?|terrain agricole|en zone [an]\b|pas constructible)/;
const CONSTRUCTIBLE = /\b(constructible|a batir|terrain a construire|permis de construire (?:obtenu|accorde|purge)|pret a construire)\b/;

const NOT_SERVICED = /\b(non viabilise|a viabiliser|viabilisation a (?:prevoir|la charge))/;
const SERVICED =
  /\b(viabilise|entierement viabilise|reseaux en bordure|raccordable|raccorde aux reseaux|eau,? electricite(?:,| et) (?:tout[- ]a[- ]l'egout|assainissement))/;

const DIVISIBLE = /\b(divisible|possibilite de division|division possible|detachement de (?:parcelle|lot)|redivisible)\b/;
const OUT_OF_ESTATE = /\bhors lotissement\b/;
const IN_ESTATE = /\b(en lotissement|dans un (?:petit |beau |nouveau )?lotissement|lot n ?°? ?\d+|lotissement de \d+ lots)\b/;

// ---------------------------------------------------------------------------------------------
// Slope, views, exposure
// ---------------------------------------------------------------------------------------------

function extractSlope(t: string): ListingFeatures['pente'] {
  if (/\b(forte pente|tres en pente|pentu|terrain en pente|en restanques?|terrain pentu)\b/.test(t)) return 'forte';
  if (/\b(legere(?:ment)? (?:en )?pente|faible pente|pente douce|legerement pentu)\b/.test(t)) return 'legere';
  // "toit plat" describes a building, not the land.
  const withoutRoofs = t.replace(/\b(?:toits?|toitures?|terrasses?)[- ](?:plats?|plates?)\b/g, '');
  if (/\b(plat|plate|a plat)\b/.test(withoutRoofs)) return 'plat';
  return undefined;
}

const VIEW_PREFIX =
  "\\bvue (?:(?:imprenable|panoramique|degagee|splendide|magnifique|superbe|exceptionnelle|directe|partielle|dominante) ){0,2}(?:(?:sur|vers) (?:le |la |les |l')?)?";
const VIEW_PATTERNS: [string, RegExp][] = [
  ['lac', new RegExp(`${VIEW_PREFIX}(?:lac|leman)\\b`)],
  ['mont-blanc', new RegExp(`${VIEW_PREFIX}mont[- ]blanc\\b`)],
  ['saleve', new RegExp(`${VIEW_PREFIX}saleve\\b`)],
  ['jura', new RegExp(`${VIEW_PREFIX}jura\\b`)],
  ['voirons', new RegExp(`${VIEW_PREFIX}voirons\\b`)],
  ['montagnes', new RegExp(`${VIEW_PREFIX}(?:montagnes?|alpes|massifs?|sommets)\\b`)],
  ['degagee', /\b(vue degagee|sans vis[- ]a[- ]vis|vue panoramique|vue imprenable)\b/],
];

function extractViews(t: string): string[] | undefined {
  const views = VIEW_PATTERNS.filter(([, re]) => re.test(t)).map(([v]) => v);
  return views.length ? views : undefined;
}

function extractExposure(t: string): string | undefined {
  const m = t.match(/\b(?:expose|exposition|orientation|oriente|plein)\s*:?\s*(plein )?(sud[- ]ouest|sud[- ]est|nord[- ]ouest|nord[- ]est|sud|ouest|est|nord)\b/);
  if (!m) return undefined;
  return m[2].replace(' ', '-');
}

// ---------------------------------------------------------------------------------------------
// Zoning
// ---------------------------------------------------------------------------------------------

function extractZone(original: string, t: string): string | undefined {
  // Geneva zoning: "zone 5", "zone villa", "zone de développement 4B".
  const ge = t.match(/\bzone (?:de developpement )?([1-5][ab]?)\b(?!\s*(?:min|km|m\b))/);
  if (ge && /\b(zone villas?|zone de developpement|zone [1-5][ab]?\b)/.test(t)) {
    return /developpement/.test(ge[0]) ? `zone de développement ${ge[1].toUpperCase()}` : `zone ${ge[1].toUpperCase()}`;
  }
  if (/\bzone villas?\b/.test(t)) return 'zone 5';

  // French PLU codes, only when introduced by "zone", "PLU" or "classé".
  const re = /\b(?:en zone|zone|classe(?:e)? en|plu|plui)\s*:?\s*(?:du plu\s*:?\s*)?\(?\s*(1AU[a-z]{0,2}|2AU[a-z]{0,2}|AU[a-z]{0,2}|U[A-Z]{0,2}[a-z]?\d?|N[a-z]{0,2}|A[a-z]?)\s*\)?(?=[\s,.;)]|$)/;
  const m = original.normalize('NFD').replace(/[̀-ͯ]/g, '').match(new RegExp(re.source, 'i'));
  if (!m) return undefined;
  const code = m[1];
  // "zone A" / "zone N" alone are too ambiguous unless written in capitals in the original text.
  if (/^[AN]$/i.test(code) && code !== code.toUpperCase()) return undefined;
  if (/^u$/i.test(code) && code !== 'U') return undefined;
  return code.replace(/^(\d?)(au|u|n|a)/i, (_, d: string, z: string) => `${d}${z.toUpperCase()}`);
}

// ---------------------------------------------------------------------------------------------
// Cadastral references
// ---------------------------------------------------------------------------------------------

/**
 * French references: "section AB n° 123", "cadastré section B numéros 1234 et 1235",
 * "parcelle(s) AB 123, AB 124", "réf. cadastrale : B 1234". Normalised as "AB 123".
 * Geneva: "parcelle n° 4321" (numbers only) when the listing is in Switzerland.
 */
export function extractCadastralRefs(text: string, country: 'FR' | 'CH' = 'FR'): string[] {
  const t = normalizeText(text);
  const refs = new Set<string>();
  const add = (section: string, numero: string) => {
    const n = String(Number(numero));
    if (n === 'NaN' || Number(n) === 0 || Number(n) > 9999) return;
    refs.add(`${section.toUpperCase()} ${n}`);
  };

  if (country === 'FR') {
    // "section AB n° 123 (et|,) 124"
    const sectionRe =
      /\bsection\s+([a-z]{1,2}|0[a-z])\s*(?:n(?:°|o|os|um(?:ero)?s?)?\.?\s*)?((?:\d{1,4}(?:\s*(?:,|et|&|-|\/)\s*)?)+)/g;
    for (const m of t.matchAll(sectionRe)) {
      // "section de 850 m²" is not a reference.
      if (/^(de|du|la|le|en|et|au|un)$/.test(m[1])) continue;
      const after = t.slice((m.index ?? 0) + m[0].length, (m.index ?? 0) + m[0].length + 4);
      if (/^\s*(m\b|m2|m²|km|%)/.test(after)) continue;
      for (const num of m[2].split(/\s*(?:,|et|&|-|\/)\s*/).filter(Boolean)) add(m[1], num);
    }
    // "parcelle(s) AB 123", "cadastré(e)(s) AB 123", "réf. cadastrale : AB 123".
    // Sections are written in capitals: matching case-sensitively on the accent-stripped text avoids
    // reading "parcelle à 5 min" or "parcelle de 850 m²" as references.
    const tc = text.normalize('NFD').replace(/[̀-ͯ]/g, '');
    const inlineRe =
      /\b(?:[Pp]arcelles?|PARCELLES?|[Cc]adastr[a-z]*|CADASTR[A-Z]*|[Rr][Ee][Ff](?:[a-z]*|[A-Z]*)\.?\s+[Cc]adastrales?\s*:?)(?:\s+sous\s+(?:le|les)\s+n(?:°|o|os)?)?\s+((?:[A-Z]{1,2}\s*(?:n°|N°)?\s*\d{1,4}(?![\d.,]*\s*(?:m\b|m2|m²|km|min|%|€))(?:\s*(?:,|et|&)\s*)?)+)/g;
    for (const m of tc.matchAll(inlineRe)) {
      for (const part of m[1].matchAll(/([A-Z]{1,2})\s*(?:n°|N°)?\s*(\d{1,4})/g)) add(part[1], part[2]);
    }
  } else {
    const geRe = /\bparcelles?\s+(?:n(?:°|o|os)?\.?\s*)?(\d{2,5})(?:\s*(?:,|et)\s*(\d{2,5}))?/g;
    for (const m of t.matchAll(geRe)) {
      refs.add(String(Number(m[1])));
      if (m[2]) refs.add(String(Number(m[2])));
    }
  }
  return [...refs];
}

// ---------------------------------------------------------------------------------------------
// Places
// ---------------------------------------------------------------------------------------------

const PLACE_WORD = "[A-ZÀ-Ÿ][\\p{L}'’-]*";
const PLACE_NAME = `(?:(?:les?|la|l'|des|du|de la|de l'|aux?|sur|sous)\\s*)?${PLACE_WORD}(?:\\s+(?:(?:de|du|des|la|le|les|d'|l'|sur|sous|aux?)\\s*)?${PLACE_WORD}){0,3}`;

export function extractLieuDit(text: string): string | undefined {
  const m = text.match(new RegExp(`\\blieu[- ]?dit\\s*:?\\s*[«"“]?\\s*(${PLACE_NAME})`, 'u'));
  return m ? m[1].trim().replace(/[»"”]$/, '') : undefined;
}

const STREET_TYPES = '(?:chemin|impasse|allée|allee|montée|montee|sentier|route|rue|avenue|place|clos|hameau|passage)';
// Mentions like "proche de la route de Genève" or "à 5 min de la rue X" describe surroundings, not the address.
const PROXIMITY_BEFORE = /(proxim|proche|pres d|minutes?|min\b|acces|a \d+\s?(?:m|km)|axe|sortie|direction|vers|donnant sur|bordure|longe|le long)/;
const GENERIC_ROADS = /^route (?:de|d')\s*(?:geneve|annecy|lyon|frangy|thonon|chambery|bellegarde|saint-julien|annemasse|gex|ferney|divonne|bonneville|chamonix)\b/;

export function extractStreet(description: string | undefined): string | undefined {
  if (!description) return undefined;
  const re = new RegExp(`\\b(${STREET_TYPES}\\s+(?:de la |de l'|des |du |de |d'|l'|la |le |les |aux? )?${PLACE_WORD}(?:\\s+${PLACE_WORD}){0,2})`, 'giu');
  for (const m of description.matchAll(re)) {
    const before = normalizeText(description.slice(Math.max(0, (m.index ?? 0) - 35), m.index ?? 0));
    if (PROXIMITY_BEFORE.test(before)) continue;
    const street = m[1].trim();
    if (GENERIC_ROADS.test(normalizeText(street))) continue;
    // Require an explicit location cue before the street ("situé", "sis", "au", "chemin" at sentence start...).
    if (!/(situe|sis|sise|au|a l'adresse|adresse|localise|se trouve|dans le|dans la|en bordure du|^|[.:]\s*)\s*$/.test(before.trimEnd() + ' ')) {
      continue;
    }
    return street.charAt(0).toUpperCase() + street.slice(1);
  }
  return undefined;
}

// ---------------------------------------------------------------------------------------------
// Areas quoted in the text
// ---------------------------------------------------------------------------------------------

/**
 * Surfaces quoted in the text, e.g. "sur un terrain de 1 200 m²", "parcelle de 850m2",
 * "maison de 145 m² habitables". Used by normalisation when the portal omits a field.
 */
export function extractAreas(text: string): { landArea?: number; livingArea?: number } {
  const t = normalizeText(text);
  const out: { landArea?: number; livingArea?: number } = {};
  const unit = '\\s*(?:m2|m²|m ²|metres? carres?)';
  const num = '(\\d{1,3}(?:[ .]\\d{3})*(?:,\\d+)?|\\d+(?:,\\d+)?)';
  const land = t.match(new RegExp(`\\b(?:terrain|parcelle|jardin|foncier|terrain arbore|terrain plat)(?: (?:clos|plat|arbore|constructible|a batir|attenant|paysager|de))*? (?:de |d'environ |d'une surface de |d'une superficie de |sur )?${num}${unit}`));
  if (land) {
    const v = parseNumber(land[1]);
    if (v >= 50 && v <= 500_000) out.landArea = v;
  }
  const ha = !out.landArea && t.match(/\b(?:terrain|parcelle|propriete)[^.]{0,40}?(\d+(?:,\d+)?)\s*(?:ha|hectares?)\b/);
  if (ha) {
    const v = parseNumber(ha[1]) * 10_000;
    if (v >= 1_000 && v <= 2_000_000) out.landArea = v;
  }
  const living = t.match(new RegExp(`${num}${unit}\\s*(?:habitables?|de surface habitable|utiles)|surface habitable (?:de |d'environ )?${num}${unit}`));
  if (living) {
    const v = parseNumber(living[1] ?? living[2]);
    if (v >= 10 && v <= 3_000) out.livingArea = v;
  }
  return out;
}

// ---------------------------------------------------------------------------------------------
// Keywords
// ---------------------------------------------------------------------------------------------

const KEYWORDS: [string, RegExp][] = [
  ['piscine', /\bpiscine\b/],
  ['garage', /\bgarage\b/],
  ['ruine', /\bruine\b/],
  ['grange', /\bgrange\b/],
  ['à rénover', /\ba (?:renover|rehabiliter)\b/],
  ['à démolir', /\ba demolir\b/],
  ['boisé', /\b(boise|arbore)\b/],
  ['cours d’eau', /\b(ruisseau|riviere|cours d'eau)\b/],
  ['permis obtenu', /\bpermis de construire (?:obtenu|accorde|purge|valide)\b/],
  ['certificat d’urbanisme', /\b(certificat d'urbanisme|cu (?:operationnel|positif))\b/],
  ['libre constructeur', /\blibre (?:de|du choix du) constructeur\b/],
  ['borné', /\b(borne|bornage)\b/],
  ['clôturé', /\bclotur/],
  ['servitude', /\bservitude/],
  ['promoteur', /\b(promoteur|promotion immobiliere|programme neuf)\b/],
  ['calme', /\b(calme|au calme|quartier calme)\b/],
  ['exclusivité', /\bexclusivite\b/],
];

// ---------------------------------------------------------------------------------------------

export function extractFeatures(title: string, description: string | undefined, type: PropertyType): ListingFeatures {
  const original = `${title}\n${description ?? ''}`;
  const t = normalizeText(original);
  const features: ListingFeatures = {};

  if (NOT_CONSTRUCTIBLE.test(t)) features.constructible = false;
  else if (CONSTRUCTIBLE.test(t)) features.constructible = true;

  if (NOT_SERVICED.test(t)) features.viabilise = false;
  else if (SERVICED.test(t)) features.viabilise = true;

  if (DIVISIBLE.test(t)) features.divisible = true;
  if (OUT_OF_ESTATE.test(t)) features.lotissement = false;
  else if (IN_ESTATE.test(t)) features.lotissement = true;

  const pente = extractSlope(t);
  if (pente) features.pente = pente;
  const vues = extractViews(t);
  if (vues) features.vues = vues;
  const exposition = extractExposure(t);
  if (exposition) features.exposition = exposition;

  const zone = extractZone(original, t);
  if (zone) features.zoneMentionnee = zone;

  const country = /\bchf\b|\bgeneve\b.*\bsuisse\b/.test(t) ? 'CH' : 'FR';
  const refs = extractCadastralRefs(original, country);
  if (refs.length) features.refsCadastrales = refs;

  const lieuDit = extractLieuDit(original);
  if (lieuDit) features.lieuDit = lieuDit;
  const rue = extractStreet(description);
  if (rue) features.rue = rue;

  const ces = t.match(/\b(?:ces|coefficient d'emprise au sol|emprise au sol)\D{0,25}?(\d{1,2}(?:[.,]\d+)?)\s?%/);
  if (ces) features.empriseSolPct = Number(ces[1].replace(',', '.'));

  const keywords = KEYWORDS.filter(([, re]) => re.test(t)).map(([k]) => k);
  // A terrain listing mentioning a pool or garage is usually describing the neighbourhood; keep for built types only.
  const filtered = type === 'terrain' ? keywords.filter((k) => k !== 'piscine' && k !== 'garage') : keywords;
  if (filtered.length) features.motsCles = filtered;

  return features;
}
