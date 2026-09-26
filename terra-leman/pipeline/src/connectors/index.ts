/**
 * Registry of listing connectors. Each connector lives in its own file in this folder and
 * implements `Connector` from `../types.ts`. Add new connectors to `CONNECTORS`.
 */
import type { Connector } from '../types.ts';
import { manualConnector } from './manual.ts';

export const CONNECTORS: Connector[] = [manualConnector];

export function getConnectors(ids?: string[]): Connector[] {
  if (!ids || ids.length === 0) return CONNECTORS.filter((c) => c.enabledByDefault);
  const wanted = new Set(ids);
  return CONNECTORS.filter((c) => wanted.has(c.id));
}
