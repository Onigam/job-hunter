import { describe, expect, it } from 'vitest';
import {
  extractAreas,
  extractCadastralRefs,
  extractFeatures,
  extractLieuDit,
  extractStreet,
} from '../src/extract/index.ts';

describe('extractFeatures', () => {
  it('reads a typical building-plot ad', () => {
    const f = extractFeatures(
      'Terrain constructible 850 m² Valleiry',
      "Au calme, terrain à bâtir de 850 m² entièrement viabilisé, plat, exposé plein sud avec vue dégagée sur le Salève. " +
        'Zone UC du PLU, CES 30 %. Hors lotissement, libre de constructeur. Cadastré section B n° 1234 et 1235.',
      'terrain',
    );
    expect(f.constructible).toBe(true);
    expect(f.viabilise).toBe(true);
    expect(f.pente).toBe('plat');
    expect(f.exposition).toBe('sud');
    expect(f.vues).toEqual(expect.arrayContaining(['saleve', 'degagee']));
    expect(f.zoneMentionnee).toBe('UC');
    expect(f.empriseSolPct).toBe(30);
    expect(f.lotissement).toBe(false);
    expect(f.refsCadastrales).toEqual(['B 1234', 'B 1235']);
    expect(f.motsCles).toEqual(expect.arrayContaining(['libre constructeur', 'calme']));
  });

  it('detects non-constructible land and ignores ambiguous lowercase zone letters', () => {
    const f = extractFeatures('Terrain de loisirs', 'Terrain non constructible en zone a, idéal potager, légère pente.', 'terrain');
    expect(f.constructible).toBe(false);
    expect(f.zoneMentionnee).toBeUndefined();
    expect(f.pente).toBe('legere');
  });

  it('reads PLUi codes such as 1AUh and Geneva zones', () => {
    expect(extractFeatures('Terrain', 'Parcelle classée en zone 1AUh du PLUi.', 'terrain').zoneMentionnee).toBe('1AUh');
    expect(extractFeatures('Villa', 'Belle parcelle en zone villa à Veyrier, CHF 2 950 000.', 'maison').zoneMentionnee).toBe('zone 5');
    expect(extractFeatures('Terrain', 'Située en zone de développement 4B, Genève, CHF.', 'terrain').zoneMentionnee).toBe(
      'zone de développement 4B',
    );
  });

  it('drops pool/garage keywords for plots (they describe the neighbourhood)', () => {
    const f = extractFeatures('Terrain', 'Quartier résidentiel avec piscine municipale, terrain viabilisé.', 'terrain');
    expect(f.motsCles ?? []).not.toContain('piscine');
  });
});

describe('extractCadastralRefs', () => {
  it('handles the usual French notations', () => {
    expect(extractCadastralRefs('Parcelles cadastrées section AB numéros 12, 13 et 14')).toEqual(['AB 12', 'AB 13', 'AB 14']);
    expect(extractCadastralRefs('Réf. cadastrale : ZC 0045')).toEqual(['ZC 45']);
    expect(extractCadastralRefs('parcelle A 1250 et A 1251 vendues ensemble')).toEqual(['A 1250', 'A 1251']);
  });

  it('does not invent references from surfaces or years', () => {
    expect(extractCadastralRefs('Terrain de 850 m² construit en 2024, parcelle de 900 m²')).toEqual([]);
  });

  it('reads Geneva parcel numbers only for Swiss listings', () => {
    expect(extractCadastralRefs('Parcelle n° 4321 de la commune de Veyrier', 'CH')).toEqual(['4321']);
    expect(extractCadastralRefs('Parcelle n° 4321', 'FR')).toEqual([]);
  });
});

describe('places', () => {
  it('extracts a lieu-dit', () => {
    expect(extractLieuDit('Terrain situé au lieu-dit « Les Grands Champs », à Viry.')).toBe('Les Grands Champs');
    expect(extractLieuDit('lieudit La Côte, vue lac')).toBe('La Côte');
  });

  it('extracts an address street but not proximity mentions', () => {
    expect(extractStreet('Terrain situé chemin des Vignes, au calme.')).toBe('Chemin des Vignes');
    expect(extractStreet('À 5 min de la route de Genève et proche de la rue du Commerce.')).toBeUndefined();
    expect(extractStreet('Idéalement placé, accès rapide route de Frangy.')).toBeUndefined();
  });
});

describe('extractAreas', () => {
  it('finds land and living areas quoted in the text', () => {
    expect(extractAreas('Maison de 145 m² habitables sur un terrain de 1 200 m².')).toEqual({ landArea: 1200, livingArea: 145 });
    expect(extractAreas('Parcelle de 850m2 plate')).toEqual({ landArea: 850 });
    expect(extractAreas('Propriété sur un terrain de 1,5 ha')).toEqual({ landArea: 15000 });
  });
});
