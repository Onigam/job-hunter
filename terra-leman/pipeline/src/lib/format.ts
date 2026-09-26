/**
 * French number formatting for pipeline-generated labels and explanations
 * ("1 012 m²", "−0,9 %", "1,2 km").
 */
const intFormat = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 });
const oneDecimal = new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

/** "1 012" */
export const fmtInt = (value: number): string => intFormat.format(Math.round(value));

/** "1 012 m²" */
export const fmtArea = (m2: number): string => `${fmtInt(m2)} m²`;

/** Signed percentage with a typographic minus: "−0,9 %", "+12,0 %". */
export function fmtSignedPct(pct: number): string {
  const sign = pct < 0 ? '−' : '+';
  return `${sign}${oneDecimal.format(Math.abs(pct))} %`;
}

/** Unsigned rounded percentage of a 0..1 share: "12 %". */
export const fmtShare = (share: number): string => `${fmtInt(share * 100)} %`;

/** "120 m", "1,2 km" */
export function fmtDistance(m: number): string {
  if (m < 1000) return `${fmtInt(Math.round(m / 10) * 10)} m`;
  return `${oneDecimal.format(m / 1000)} km`;
}
