/**
 * Name normalisation and fuzzy matching for commune names, lieux-dits and streets.
 */
import { normalizeText } from '../extract/index.ts';

/**
 * Comparison key for place names: lower case, no accents, ligatures expanded, punctuation and
 * hyphens as spaces, "St"/"Ste" expanded, "Cedex" and arrondissement numbers dropped.
 * `nameKey("St-Julien-en-Genevois Cedex")` → "saint julien en genevois".
 */
export function nameKey(name: string): string {
  return normalizeText(name)
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/[-'_/.,;:()«»"]+/g, ' ')
    .replace(/\bcedex\b.*$/, ' ')
    .replace(/\bste\b/g, 'sainte')
    .replace(/\bst\b/g, 'saint')
    .replace(/\s\d{1,2}$/, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Levenshtein edit distance, early exit once `max` is exceeded (returns max + 1). */
export function editDistance(a: string, b: string, max = Number.POSITIVE_INFINITY): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      rowMin = Math.min(rowMin, cur[j]);
    }
    if (rowMin > max) return max + 1;
    prev = cur;
  }
  return prev[b.length];
}

/**
 * Picks the entry whose key best matches `query` (both already passed through `nameKey`):
 * exact match, then a unique prefix match (≥ 5 chars), then the closest edit distance
 * (≤ 1 for short names, ≤ 2 from 9 characters). Returns undefined when ambiguous.
 */
export function fuzzyFind<T>(query: string, entries: readonly T[], keyOf: (entry: T) => string): T | undefined {
  if (!query) return undefined;
  const exact = entries.filter((e) => keyOf(e) === query);
  if (exact.length === 1) return exact[0];
  if (exact.length > 1) return undefined;

  if (query.length >= 5) {
    const prefixed = entries.filter((e) => keyOf(e).startsWith(`${query} `));
    if (prefixed.length === 1) return prefixed[0];
  }

  const max = query.length >= 9 ? 2 : query.length >= 5 ? 1 : 0;
  if (max === 0) return undefined;
  let best: T | undefined;
  let bestDistance = max + 1;
  let tie = false;
  for (const entry of entries) {
    const d = editDistance(query, keyOf(entry), max);
    if (d < bestDistance) {
      best = entry;
      bestDistance = d;
      tie = false;
    } else if (d === bestDistance && d <= max) {
      tie = true;
    }
  }
  return bestDistance <= max && !tie ? best : undefined;
}
