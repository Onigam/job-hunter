/** Small descriptive statistics helpers. */

export interface Distribution {
  median: number;
  p25: number;
  p75: number;
  n: number;
}

/** Linear-interpolated quantile of an ascending-sorted array (q in 0..1). */
export function quantileSorted(sorted: readonly number[], q: number): number {
  if (sorted.length === 0) return Number.NaN;
  const pos = (sorted.length - 1) * q;
  const lo = Math.floor(pos);
  const hi = Math.ceil(pos);
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (pos - lo);
}

export function median(values: readonly number[]): number {
  return quantileSorted([...values].sort((a, b) => a - b), 0.5);
}

/** Median and quartiles, or undefined for an empty sample. */
export function distribution(values: readonly number[]): Distribution | undefined {
  if (values.length === 0) return undefined;
  const sorted = [...values].sort((a, b) => a - b);
  return {
    median: quantileSorted(sorted, 0.5),
    p25: quantileSorted(sorted, 0.25),
    p75: quantileSorted(sorted, 0.75),
    n: sorted.length,
  };
}

export function round(value: number, decimals = 0): number {
  const f = 10 ** decimals;
  return Math.round(value * f) / f;
}

export const clamp = (value: number, min: number, max: number): number => Math.min(max, Math.max(min, value));
