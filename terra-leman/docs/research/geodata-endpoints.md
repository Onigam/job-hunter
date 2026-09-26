# Terra Léman: reference geodata endpoints (FR 74/01 + CH GE)

Research date: 2026-09-26. Consumers: (1) weekly Node 22 / TypeScript pipeline in GitHub Actions (full internet),
(2) MapLibre GL JS v5 browser app (EPSG:3857, CORS required). AOI bbox (WGS84): lon 5.80 to 6.50, lat 46.00 to 46.45.

Confidence tag on every item:

- **[V] verified-http**: requested for real from this container with curl (only AWS S3 hosts were reachable).
- **[S] search-result**: confirmed by web-search snippets of official docs / catalogues, not fetched.
- **[M] memory**: prior knowledge, not re-confirmed this session. Probably right, but verify in CI (section D).

Constraints met during research: the egress proxy returned `CONNECT 403` for geo.api.gouv.fr, cadastre.data.gouv.fr,
apicarto.ign.fr, data.geopf.fr, files.data.gouv.fr, api-adresse, wmts/api3.geo.admin.ch, vector.sitg.ge.ch,
geodienste.ch, openfreemap, arcgisonline, cartocdn, earth-search STAC and the OVH geo-dvf mirror. WebFetch was blocked for
every doc host. The session web-search budget (200 calls) ran out during section B, so B1/B4/B5 and C4/C5 lean on [M].

---

## 0. Quick reference

| Need | Endpoint template | Conf. |
|---|---|---|
| FR communes + contours + EPCI | `https://geo.api.gouv.fr/departements/{dep}/communes?fields=...&format=geojson&geometry=contour` | S |
| FR parcels / buildings (bulk) | `https://cadastre.data.gouv.fr/data/etalab-cadastre/latest/geojson/communes/{dep}/{insee}/cadastre-{insee}-{layer}.json.gz` | S |
| FR parcel lookup | `https://apicarto.ign.fr/api/cadastre/parcelle?code_insee=&section=&numero=` or `?geom=` | S |
| FR zoning PLU/PLUi/CC/RNU | `https://apicarto.ign.fr/api/gpu/{zone-urba,secteur-cc,municipality,document}` ; WFS `wfs_du:zone_urba` | S |
| FR ortho (browser) | WMTS `ORTHOIMAGERY.ORTHOPHOTOS`, PM, jpeg, z0-19 | S |
| FR cadastre (browser) | WMTS `CADASTRALPARCELS.PARCELLAIRE_EXPRESS` / `PCI vecteur` png ; TMS `https://data.geopf.fr/tms/1.0.0/PCI/{z}/{x}/{y}.pbf` | S |
| FR zoning (browser) | WMS-V `https://data.geopf.fr/wms-v/ows` layer `zone_secteur` (ACAO `*`) | S |
| FR geocoding | `https://data.geopf.fr/geocodage/search` (api-adresse.data.gouv.fr retired end Jan 2026) | S |
| FR land sales | `https://files.data.gouv.fr/geo-dvf/latest/csv/{year}/communes/{dep}/{insee}.csv` (2021-2025) | S |
| GE parcels | `https://vector.sitg.ge.ch/arcgis/rest/services/Hosted/CAD_PARCELLE_MENSU/FeatureServer` (EPSG:2056, 2000/page) | S |
| GE buildings / zoning | `Hosted/CAD_BATIMENT_HORSOL/FeatureServer` ; `SIT_ZONE_AMENAG` (WFS/WMS) | S |
| CH imagery / cadastre (browser) | `https://wmts.geo.admin.ch/1.0.0/{layer}/default/current/3857/{z}/{x}/{y}.{jpeg,png}` | M |
| 3D terrain | `https://elevation-tiles-prod.s3.amazonaws.com/terrarium/{z}/{x}/{y}.png`, z0-15, ACAO `*` | V |
| Land cover 10 m | `https://esa-worldcover.s3.eu-central-1.amazonaws.com/v200/2021/map/ESA_WorldCover_10m_2021_v200_{tile}_Map.tif` | V |
| Sentinel-2 L2A COGs | `https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/31/T/GM/{yyyy}/{m}/{id}/{band}.tif` | V |
| Keyless vector basemap | `https://tiles.openfreemap.org/styles/{liberty,positron,bright,dark,fiord}` | M |

---

## A. France (Haute-Savoie 74, Ain 01 / Pays de Gex)

### A1. Communes, contours, EPCI membership: geo.api.gouv.fr

- Department communes as GeoJSON with contour geometry [S]:
  `GET https://geo.api.gouv.fr/departements/74/communes?fields=nom,code,codesPostaux,siren,codeEpci,epci,population,surface,centre&format=geojson&geometry=contour`
  (same with `01`). `format` = `json` or `geojson`; `geometry` = `centre` (default), `contour`, `mairie`, `bbox` [S].
- Other filters: `GET /communes?codeDepartement=74` ; `GET /communes?codeEpci=200004802` [S] ;
  `GET /communes/{insee}?fields=...&format=geojson&geometry=contour` [M].
- EPCI: `GET /epcis?codeDepartement=01` [S] ; `GET /epcis/{siren}/communes` [S] ; `GET /epcis/{siren}?format=geojson&geometry=contour` [M].
- Commune properties [S]: `code` (INSEE), `nom`, `siren`, `codeEpci`, `epci` `{code, nom}`, `codeDepartement`, `departement`,
  `codeRegion`, `region`, `codesPostaux` (array), `population`, `surface` (hectares), `centre`, `contour`, `mairie`, `bbox`.
- Pays de Gex = EPCI "Pays de Gex Agglo", 27 communes; SIREN believed 240100883 [M] (resolve at runtime by filtering
  `epci.nom`). Sample INSEE codes [M]: Gex 01173, Ferney-Voltaire 01160, Saint-Genis-Pouilly 01354, Divonne-les-Bains 01143,
  Prévessin-Moëns 01313, Thoiry 01419. Haute-Savoie has about 280 communes; restrict with `codeEpci` (Annemasse Agglo,
  CC du Genevois, Thonon Agglomération, CC Arve et Salève, CC du Pays Rochois, ...) or with the AOI bbox [M].
- Communes nouvelles (Annecy 74010 and several others in 74): the absorbed communes survive as the 3-digit `prefixe` of
  cadastral ids. List them with `GET https://geo.api.gouv.fr/communes_associees_deleguees?codeDepartement=74`
  [M path; the doc page geo.api.gouv.fr/decoupage-administratif/communes-associees-deleguees exists S].
- CRS EPSG:4326. Contours come from IGN ADMIN EXPRESS (generalised COG variant [M]); for exact legal limits use the
  Etalab cadastre `communes` layer (A2).
- Limits 50 req/s/IP [M]. CORS `Access-Control-Allow-Origin: *` [M]. Licence Ouverte 2.0 [M].
  Attribution: "Découpage administratif : INSEE, IGN (geo.api.gouv.fr)".

### A2. Cadastre Etalab per-commune files

- Template [S]: `https://cadastre.data.gouv.fr/data/etalab-cadastre/latest/geojson/communes/{dep}/{insee}/cadastre-{insee}-{layer}.json.gz`
  Example: `.../latest/geojson/communes/74/74243/cadastre-74243-parcelles.json.gz` (Saint-Julien-en-Genevois).
- Department bundles [M]: `.../latest/geojson/departements/{dep}/cadastre-{dep}-{layer}.json.gz` (hundreds of MB for 74).
  Dated millésimes [M]: replace `latest` by the folder date listed at `https://cadastre.data.gouv.fr/data/etalab-cadastre/`.
  Shapefile flavour under `.../latest/shp/...` [M].
- 8 layers [S]: `batiments`, `communes`, `feuilles`, `lieux_dits`, `parcelles`, `prefixes_sections`, `sections`, `subdivisions_fiscales`.
- `parcelles` properties [S]: `id`, `commune`, `prefixe`, `section`, `numero`, `contenance`, `arpente`, `created`, `updated`.
  - `id` is 14 chars [S]: INSEE (5) + prefixe (3; `000` unless the section belongs to an absorbed commune) + section
    (2, left-padded with `0`, so `A` becomes `0A`) + numero (4, zero-padded). Example `74243000AB0123`.
  - `contenance` = fiscal area in m² (integer): the figure listings usually quote. `arpente` = boolean, true when the area
    was surveyed (precise) [S]. The polygon's geodesic area differs by a few percent: match on `contenance` first.
  - `created` / `updated` = ISO dates [S]. Build ids from `id`, not from `numero` (may be unpadded) [M].
- `batiments` [S]: `type` `"01"` = bâti dur, `"02"` = bâti léger; plus `nom`, `commune`, `created`, `updated` [M]. No height.
- Other layers [M]: `sections` (`id`, `commune`, `prefixe`, `code`), `feuilles` (`id`, `commune`, `prefixe`, `section`,
  `numero`, `qualite`, `modeConfection`, `echelle`), `lieux_dits` (`nom`, `commune`), `subdivisions_fiscales` (`parcelle`, `lettre`).
- CRS EPSG:4326. Source DGFiP PCI Vecteur, quarterly: March-2026 millésime published 2026-04-09, June-2026 on 2026-07-01
  [S], so the next one is due around October 2026. Since 2025-09-01 every commune is in PCI Vecteur [S].
- Licence Ouverte 2.0. Attribution: "Cadastre DGFiP (PCI Vecteur), traitement Etalab" [M]. CORS irrelevant (pipeline).
- Pipeline tip: keep `(millésime, updated)` per parcel; a weekly run only needs to re-download when `latest` changes.

### A3. IGN API Carto (cadastre, GPU) and the Géoplateforme WFS

**Cadastre module** (doc `https://apicarto.ign.fr/api/doc/pdf/docUser_moduleCadastre.pdf`) [S]

- `GET https://apicarto.ign.fr/api/cadastre/parcelle?code_insee=74243&section=AB&numero=0123`
- `GET https://apicarto.ign.fr/api/cadastre/parcelle?geom={"type":"Point","coordinates":[6.0866,46.1452]}&_limit=1`
  (`geom` = URL-encoded GeoJSON in WGS84) [S].
- Params: `code_insee` (5), `section` (2 chars), `numero` (4 chars), `code_arr`, `com_abs` (absorbed-commune prefix), `geom`,
  `_limit` (1-1000), `_start` (offset for > 1000 results) [S]; source selector `source_ign` = `PCI` (default) or `BDP`
  [M name; S: BD Parcellaire is frozen and discouraged, PCI Express recommended].
- Response: FeatureCollection, MultiPolygon, EPSG:4326. Properties `idu`, `numero`, `feuille`, `section`, `code_dep`,
  `nom_com`, `code_com`, `com_abs`, `code_arr`, `contenance` [S: PCI Express attributes, IDU = CODE_DEP+CODE_COM+COM_ABS+SECTION+NUMERO]
  and `code_insee` [M]. Sibling endpoints [M]: `/api/cadastre/commune`, `/division` (feuilles), `/localisant` (label points).

**GPU module** (OpenAPI "Module urbanisme (GpU) 2.9.2": `https://apicarto.ign.fr/api/doc/gpu`) [S]

- Base `https://apicarto.ign.fr/api/gpu/{layer}`. Layers [S]: `municipality`, `document`, `zone-urba`, `secteur-cc`,
  `prescription-surf`, `prescription-lin`, `prescription-pct`, `info-surf`, `info-lin`, `info-pct`,
  `assiette-sup-s|l|p`, `generateur-sup-s|l|p`. Params: `geom`, `partition`, `insee` (municipality), `categorie` (SUP),
  `_limit` (max 1000), `_start` [S]. Large geometries can be POSTed as JSON [M].
- Examples: `GET /api/gpu/zone-urba?geom={"type":"Point","coordinates":[6.0866,46.1452]}` ;
  `GET /api/gpu/zone-urba?partition=DU_74243&_limit=1000&_start=0` ; `GET /api/gpu/municipality?insee=74243` ;
  `GET /api/gpu/document?geom=<commune polygon>` (lists the partitions covering an area).
- `zone-urba` properties: `gid`, `partition`, `libelle` (short label on the plan, e.g. `UH2`), `libelong`, `typezone`,
  `destdomi`, `idurba` (`<INSEE or SIREN>_<type>_<datappro>`) [S]; `nomfic`, `urlfic` (règlement PDF), `insee`, `datappro`
  (YYYYMMDD), `datvalid`, `gpu_doc_id`, `gpu_status`, `gpu_timestamp` [M].
  `typezone` in the CNIG standard: `U`, `AUc`, `AUs`, `A`, `N` [S for U/AU/A/N, M for the AUc/AUs split].
  `destdomi` codes [M]: 00 n/a, 01 habitat, 02 activité, 03 mixte, 04 loisirs/tourisme, 05 équipement, 07 agricole,
  08 espace naturel, 09 espace remarquable, 10 carrière, 99 autre.
- `secteur-cc` (cartes communales): `typesect` `01` ouvert à la construction, `02` réservé aux activités, `03` non ouvert à
  la construction sauf exceptions [S/M]; plus `libelle`, `libelong`, `destdomi`, `nomfic`, `urlfic`, `idurba`, `partition` [M].
- `municipality`: `insee`, `name` [M], `is_rnu` (boolean), `is_deleted` [S].
- Partition syntax [S]: `DU_<INSEE>` (communal POS/PLU/CC) ; `DU_<SIREN>` or `DU_<SIREN>_<CodeDU>` (PLUi, intercommunal CC) ;
  `PSMV_<INSEE>[_<CodeDU>]` ; `[<idGest>_]SUP_<codeGeo>_<categorie>` ; `scot_<SIREN>`. So 5 digits after `DU_` = communal,
  9 digits = EPCI document. Do not guess: take `partition` from the `zone-urba`/`document` hit.
- Zoning decision per parcel (use centroid or polygon as `geom`):
  1. `zone-urba?geom=` hit: PLU/PLUi zone (`libelle`, `typezone`, règlement `urlfic`).
  2. else `secteur-cc?geom=`: carte communale sector (`typesect`).
  3. else `municipality?insee=` with `is_rnu=true`: RNU commune (no zoning polygons; show "RNU").
  4. else document not (yet) published on the GPU: flag as unknown.
- **WFS alternative** [S]: `https://data.geopf.fr/wfs/ows?SERVICE=WFS&VERSION=2.0.0&REQUEST=GetFeature&TYPENAMES=wfs_du:zone_urba&OUTPUTFORMAT=application/json&SRSNAME=EPSG:4326&BBOX=46.10,6.00,46.30,6.35,urn:ogc:def:crs:EPSG::4326&COUNT=1000&STARTINDEX=0`
  (WFS 2.0 + EPSG:4326 means lat,lon order in BBOX). Hard cap 5000 features per request, paginate with `STARTINDEX` [S];
  30 req/s/IP [S]. Other typenames [M]: `wfs_du:secteur_cc`, `wfs_du:document`, `wfs_du:prescription_surf`, `wfs_du:info_surf`.
- Cadastre via WFS [S]: `TYPENAMES=CADASTRALPARCELS.PARCELLAIRE_EXPRESS:parcelle` (9 PCI resources: also `:batiment`,
  `:localisant`, `:feuille`, `:subdivision_fiscale`, `:borne_limite_propriete`, ...). Always constrain by `code_insee`,
  bbox or geometry or the request is slow or fails [S]. Server is GeoServer, so `CQL_FILTER=code_insee='74243'` works [M].
- **Bulk national GPU** (best for the weekly job) [S]: data.gouv.fr dataset "DONNEES : Géoportail de l'Urbanisme -
  Zonages des documents d'urbanisme et communes soumises au RNU"
  (`https://www.data.gouv.fr/datasets/69dd0701-6543-4731-b419-4684ef07bed5-uuid`) aggregating `zone_secteur`
  (zone_urba + secteur_cc), `municipality` (RNU) and `document`. Resolve file URLs via
  `https://www.data.gouv.fr/api/1/datasets/<id>/` then `resources[].url` [M].
- Licence Ouverte 2.0 [M]. Attribution: "Géoportail de l'Urbanisme (IGN / DGALN)". API Carto CORS `*` [M].

### A4. Browser display layers (Géoplateforme, EPSG:3857)

General [S]: no key. WMTS and TMS are exempt from Géoplateforme rate limiting (other APIs: HTTP 429 then a 5 s block).
Since 2024-06-03 GetCapabilities advertises per-layer TileMatrixSets named `PM_<zmin>_<zmax>`; ortho moved from `PM_0_21`
to `PM_0_19` in 2025 (very-high-res THR removed from this layer). Clients still widely send the generic `PM` (Geotrek docs
2025) and the grid is identical; use `PM` or the advertised id (`PM_0_19`) [S/M].

| Layer | URL template (add to `https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}`) | Notes |
|---|---|---|
| Ortho | `&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/jpeg` | jpeg, z0-19 [S]; `THR.ORTHOIMAGERY.ORTHOPHOTOS` = 5-10 cm where available [S] |
| Plan IGN raster | `&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/png` | png, z0-19 [S] |
| Cadastre raster | `&LAYER=CADASTRALPARCELS.PARCELLAIRE_EXPRESS&STYLE=PCI%20vecteur&TILEMATRIXSET=PM_0_19&FORMAT=image/png` | transparent png, credit "DGFiP" [S] |
| Hillshade | `&LAYER=ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW&STYLE=estompage_grayscale&TILEMATRIXSET=PM&FORMAT=image/png` | from BD ALTI 25 m, NE 45° + zenith light; advertised `PM_0_15` so z<=15 [S] |

- PCI vector tiles [S]: `https://data.geopf.fr/tms/1.0.0/PCI/{z}/{x}/{y}.pbf`, official style
  `https://data.geopf.fr/annexes/ressources/vectorTiles/styles/PCI/pci.json`, metadata (vector_layers, zooms)
  `https://data.geopf.fr/tms/1.0.0/PCI/metadata.json`. Source-layers per the IGN vector-tile doc [S]: `parcelle`
  (z15-19 [S]), `batiment`, `localisant` (parcel-number points), `borne_parcelle`, `borne_limite_propriete`,
  `subdivision_fiscale`, `feuille`, `arrondissement`; `commune` / `departement` at low zoom [S, weak]. Confirm with
  metadata.json. XYZ row order (no `scheme: tms`) as in IGN's own styles [M]. Refreshed with each quarterly PCI [S].
- Plan IGN vector [S]: style `https://data.geopf.fr/annexes/ressources/vectorTiles/styles/PLAN.IGN/standard.json`;
  variants standard, classique, transparent (overlay on imagery), accentué, épuré, atténué [S], file names
  `{name}.json` [M]; tiles `https://data.geopf.fr/tms/1.0.0/PLAN.IGN/{z}/{x}/{y}.pbf` [M]. Covers France; since 2025 an
  OSM-based test plan in Plan IGN style (z13-18) fills cross-border zones [S].
- GPU zoning display (WMS-Vecteur) [S]:
  `https://data.geopf.fr/wms-v/ows?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=zone_secteur&STYLES=&CRS=EPSG:3857&BBOX={bbox-epsg-3857}&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=true`
  GPU-filtered capabilities: `https://data.geopf.fr/annexes/ressources/wms-v/gpu.xml`. Layers: `zone_secteur`
  (visible from about 1:60 000, i.e. z>=13), `document` (small-scale extents), `municipality` (RNU), `prescription*`,
  `info*` [S partial]. EPSG:3857 accepted and `Access-Control-Allow-Origin: *` [S]. WMS-V limit 50 req/s/IP [S].
- CORS for WMTS/TMS: IGN / data.gouv MapLibre guides load data.geopf.fr styles and tiles from browsers, so open [S inferred];
  check the header in CI (section D).
- Licence: IGN data under Licence Ouverte 2.0 since 2021 [M]; cadastre © DGFiP. Attribution strings: "© IGN – Géoplateforme",
  "Cadastre © DGFiP", "Géoportail de l'Urbanisme".
- Elevation for analysis (not display) [M]: altimetry REST
  `https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevation.json?lon=6.10|6.11&lat=46.15|46.16&resource=ign_rge_alti_wld&zonly=true`
  (RGE ALTI 1 m) for per-parcel slope sampling.

### A5. Geocoding: BAN via Géoplateforme

- `api-adresse.data.gouv.fr` was decommissioned at the end of January 2026 (full redirect to IGN since mid-2025) [S].
- Search [S]: `GET https://data.geopf.fr/geocodage/search?q=1+rue+de+Genève+Gaillard&index=address&citycode=74133&type=housenumber&limit=5`
  Reverse: `GET https://data.geopf.fr/geocodage/reverse?lon=6.2093&lat=46.1967&index=parcel&limit=1` (point to parcel)
  [S: endpoints and parcel index exist; M: reverse semantics]. Also `/geocodage/getCapabilities`, OpenAPI `/geocodage/openapi` [S].
- Params: `q`, `index` (`address`, `poi`, `parcel`, comma-combinable) [S], `citycode` (up to 200 INSEE codes, comma list)
  [S], `postcode`, `type` (`housenumber`, `street`, `locality`, `municipality`) [S], `limit`, `lat`/`lon` bias,
  `autocomplete` [M], `returntruegeometry=true` (parcel polygon in `properties.truegeometry`, geometry stays a point) [S].
- Address properties [S]: `label`, `score`, `housenumber`, `id`, `name`, `postcode`, `citycode`, `city`, `context`, `type`;
  also `street`, `x`, `y`, `importance` [M]. Parcel-index properties [M]: `id` (14-char IDU), `departmentcode`,
  `municipalitycode`, `oldmunicipalitycode`, `section`, `number`, `sheet`, `city`.
- Limits 50 req/s/IP, then HTTP 429 and 5 s block [S]. CORS `*` [M]. Batch CSV `POST https://data.geopf.fr/geocodage/search/csv`
  (multipart `data=@file.csv`, `columns=...`) [M].
- BAN bulk CSV [S]: `https://adresse.data.gouv.fr/data/ban/adresses/latest/csv/adresses-74.csv.gz` (and `adresses-01.csv.gz`),
  `;`-separated, UTF-8, daily. Columns [S partial, M full]: `id;id_fantoir;numero;rep;nom_voie;code_postal;code_insee;nom_commune;
  code_insee_ancienne_commune;nom_ancienne_commune;x;y;lon;lat;type_position;alias;nom_ld;libelle_acheminement;nom_afnor;
  source_position;source_nom_voie;certification_commune;cad_parcelles`. `cad_parcelles` = `|`-separated 14-char parcel ids [S]:
  a direct address-to-parcel join for listings that give a street.
- Licence Ouverte 2.0 since 2020 [S]. Attribution "Base Adresse Nationale (BAN)".

### A6. DVF géolocalisé (sales)

- Per commune [S]: `https://files.data.gouv.fr/geo-dvf/latest/csv/{year}/communes/{dep}/{insee}.csv`
  (e.g. `.../2025/communes/74/74243.csv`); per department `.../{year}/departements/{dep}.csv.gz`; national `.../{year}/full.csv.gz` [S].
- Years in `latest` as of 2026-09: 2021 to 2025 [S] (DGFiP release of 2026-04-07 covers to 2025-12-31; geo-dvf 2025 folder
  dated 2026-04-15) [S]. DGFiP publishes twice a year: April (to Dec N-1) and October (to June N) [S], so 2026-H1 lands
  around late October 2026 and the 5-year window rolls.
- 40 columns [S]: `id_mutation, date_mutation, numero_disposition, nature_mutation, valeur_fonciere, adresse_numero,
  adresse_suffixe, adresse_nom_voie, adresse_code_voie, code_postal, code_commune, nom_commune, code_departement,
  ancien_code_commune, ancien_nom_commune, id_parcelle, ancien_id_parcelle, numero_volume, lot1_numero, lot1_surface_carrez,
  ... lot5_numero, lot5_surface_carrez, nombre_lots, code_type_local, type_local, surface_reelle_bati,
  nombre_pieces_principales, code_nature_culture, nature_culture, code_nature_culture_speciale, nature_culture_speciale,
  surface_terrain, longitude, latitude`.
- Building-land sales: `nature_mutation = "Vente terrain à bâtir"` [S] and/or rows with `code_nature_culture = "AB"`
  (`nature_culture = "terrains a bâtir"`) [S]. Robust rule [M]: group by `id_mutation`; keep mutations without any
  `type_local` and with at least one AB row; price per m² = `valeur_fonciere` / sum(`surface_terrain`). `valeur_fonciere`
  is repeated on every row of a mutation: never sum it.
- `id_parcelle` uses the Etalab 14-char format: joins straight onto A2 parcels [S]. Coverage excludes only 57/67/68 and
  Mayotte [S], so 74 and 01 are covered.
- Licence Ouverte 2.0 plus DVF usage terms [M]: no re-identification of people, no search-engine indexing. Serve
  per-transaction data with `noindex` and without owner names.

### A7. Parcels owned by legal entities (optional)

- DGFiP "Fichiers des locaux et des parcelles des personnes morales" [S]:
  `https://www.data.gouv.fr/datasets/fichiers-des-locaux-et-des-parcelles-des-personnes-morales` (millésime 2025 available),
  unified national Parquet `https://www.data.gouv.fr/datasets/fichiers-des-locaux-et-des-parcelles-des-personnes-morales-version-unifiee`,
  mirror on `data.economie.gouv.fr` [S]. Content: cadastral ref, address, area, nature de culture, owner SIREN / name /
  legal form [S]. Use it to flag parcels held by communes, SCIs or developers. Full Fichiers fonciers (Cerema) and DV3F
  are restricted to entitled bodies [M].

---

## B. Switzerland: Canton of Geneva (GE)

### B1. The 45 communes and their geometries

45 communes since 1931 [S]. BFS/OFS numbers are alphabetical 6601-6645 [M, high confidence]:

| BFS | Commune | BFS | Commune | BFS | Commune |
|---|---|---|---|---|---|
| 6601 | Aire-la-Ville | 6616 | Collonge-Bellerive | 6631 | Onex |
| 6602 | Anières | 6617 | Cologny | 6632 | Perly-Certoux |
| 6603 | Avully | 6618 | Confignon | 6633 | Plan-les-Ouates |
| 6604 | Avusy | 6619 | Corsier (GE) | 6634 | Pregny-Chambésy |
| 6605 | Bardonnex | 6620 | Dardagny | 6635 | Presinge |
| 6606 | Bellevue | 6621 | Genève | 6636 | Puplinge |
| 6607 | Bernex | 6622 | Genthod | 6637 | Russin |
| 6608 | Carouge (GE) | 6623 | Le Grand-Saconnex | 6638 | Satigny |
| 6609 | Cartigny | 6624 | Gy | 6639 | Soral |
| 6610 | Céligny | 6625 | Hermance | 6640 | Thônex |
| 6611 | Chancy | 6626 | Jussy | 6641 | Troinex |
| 6612 | Chêne-Bougeries | 6627 | Laconnex | 6642 | Vandœuvres |
| 6613 | Chêne-Bourg | 6628 | Lancy | 6643 | Vernier |
| 6614 | Choulex | 6629 | Meinier | 6644 | Versoix |
| 6615 | Collex-Bossy | 6630 | Meyrin | 6645 | Veyrier |

- swissBOUNDARIES3D (swisstopo, free OGD) [M]: STAC `https://data.geo.admin.ch/api/stac/v0.9/collections/ch.swisstopo.swissboundaries3d`
  (GPKG/SHP, EPSG:2056, yearly 1 January state); attributes `BFS_NUMMER`, `NAME`, `KANTONSNUM` (GE = 25).
- geo.admin.ch REST [M, field names to verify]:
  `https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill&searchText=GE&searchField=kanton&returnGeometry=true&geometryFormat=geojson&sr=4326`
  (attributes `gemname`, `gde_nr`, `kanton`).
- Gotcha [M]: the city of Geneva is split into cadastral communes/sections (Cité, Eaux-Vives, Petit-Saconnex, Plainpalais),
  and SITG `NO_COMM` is a cantonal number, not the BFS number. Parcel numbers are unique only per cadastral commune, so key
  parcels on `EGRID` ("CH" + 12 characters).

### B2. SITG cadastral parcels: CAD_PARCELLE_MENSU

- ArcGIS REST [S]: `https://vector.sitg.ge.ch/arcgis/rest/services/Hosted/CAD_PARCELLE_MENSU/FeatureServer`,
  `maxRecordCount` = 2000, spatial reference 2056 (LV95, metres) [S]. Layer id `0` [M, standard for hosted services].
- Paged query [M, standard ArcGIS REST]:
  `GET .../FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=true&outSR=4326&f=geojson&orderByFields=OBJECTID&resultOffset=0&resultRecordCount=2000`
  Spatial filter: `&geometry=6.05,46.15,6.10,46.20&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects`.
  Count first with `&returnCountOnly=true`; switch to POST for long `where` / `objectIds`. Order of magnitude 10^5 parcels.
- Fields [S]: `EGRID` (string 14), `NO_PARCELLE` (int), `COMMUNE` (string 25), `NO_COMM` (small int), `SURFACE` (int, m²,
  land-register area: the Swiss analogue of `contenance`), `IDEDDP` (string 12), `TYPE_PROPRI` (string 25, private vs
  public domain), plus `MUTMAI`, `MUTORI`, `DATEDT`, `PROVENANCE`, `VALIDITE`, `PROPRI_PUBLIQUE` [S]. Hosted services can
  expose lower-case names: read `.../FeatureServer/0?f=pjson` at runtime and normalise [M].
- Same data elsewhere [S]: WFS `https://vector.sitg.ge.ch/arcgis/services/CAD_PARCELLE_MENSU/MapServer/WFSServer`,
  WMS `https://vector.sitg.ge.ch/arcgis/services/CAD_PARCELLE_MENSU/MapServer/WMSServer`, RDPPF map service layer 47
  `https://ge.ch/terags/rest/services/ECADASTRE_rdppf_map/MapServer/47`.
- Updated daily (catalogue showed last publication 2025-06-12 when indexed) [S]. Pre-mutation parcels move to the
  history layer `CAD_PARCELLE_MENSU_HISTO` (catalogue slug `cad-parcelle-mensu-histo`) [S]: useful for stale listings.
- Catalogue [S]: `https://sitg.ge.ch/donnees/cad-parcelle-mensu`, `https://opendata.swiss/en/dataset/parcelles-de-la-mensuration1`,
  `https://www.geocat.ch/geonetwork/srv/api/records/CAD_PARCELLE_MENSU`. File downloads (SHP/GPKG, see
  `https://sitg.ge.ch/ressources/formats-disponibles`) exist; get direct URLs programmatically with the CKAN API
  `https://opendata.swiss/api/3/action/package_show?id=parcelles-de-la-mensuration1` then `resources[].url` [M].
- CRS EPSG:2056 native. Licence: SITG open data (free access), attribution "© SITG" [M]. CORS: ArcGIS Server default is
  `*` [M, verify].

### B3. SITG buildings and land-use zoning

- Buildings above ground [S]: `https://vector.sitg.ge.ch/arcgis/rest/services/Hosted/CAD_BATIMENT_HORSOL/FeatureServer/0`;
  related `CAD_BATIMENT_HORSOL_TOIT` (roof parts) and `CAD_BATIMENT_SOUSOL` (underground, slug `cad-batiment-sousol`) [S].
  Expected fields [M]: `EGID`, building number, `NO_COMM` / `COMMUNE`, `DESTINATION`, `SURFACE`; introspect with `?f=pjson`.
- Zoning [S]: `SIT_ZONE_AMENAG` ("Zones d'affectation", free access), a merge of `RDPPF_ZONES_PRIM` and `RDPPF_ZONES_DEV`.
  WFS `https://vector.sitg.ge.ch/arcgis/services/SIT_ZONE_AMENAG/MapServer/WFSServer`, WMS `.../MapServer/WMSServer` [S];
  REST query `https://vector.sitg.ge.ch/arcgis/rest/services/SIT_ZONE_AMENAG/MapServer/0/query` [M, inferred].
  Three attributes were added on 2025-07-31: date and URL of the complementary legal provision, URL of extra info [S].
  Exact field names were not confirmed (expect a zone code, a label and a category) [M]. Catalogue
  `https://sitg.ge.ch/donnees/sit-zone-amenag`; zone definitions
  `https://ge.ch/sitg/geodata/SITG/CATALOGUE/INFORMATIONS_COMPLEMENTAIRES/DESCRIPTIF_ZONES_AFFECTATION.pdf` [S].
- Related RDPPF layers [S]: `rdppf-zones-prim`, `rdppf-zones-dev`, `rdppf-zr` (zones réservées), `rdppf-zp` (zones
  protégées), `rdppf-pnp` (protected natural perimeters), plus "Synthèse RDPPF par EGRID" (`rdppf-synth-dyn-extract`).
- Zone vocabulary (LaLAT art. 19) [S + M]: ordinary building zones 1, 2, 3, 4A (urban), 4B (villages), 5 (villas, max
  height 10 m [S]), ZIA (industrielle et artisanale), ferroviaire, aéroportuaire; development zones ZD 2, 3, 4A, 4B,
  4A protégée, 4B protégée, 5, ZDAM (activités mixtes), ZDIA [S]; protected zones (4B protégée, eaux et rives,
  protection de la nature et du paysage) [S]; non-building zones: agricole, bois et forêts, verdure (public open space,
  cemeteries) [S], sportive, jardins familiaux [M]. UI note: a "zone de développement" means state-steered development
  (PLQ, price controls).
- Cross-border harmonised zoning [S]: SITG "Agglo - Zones d'affectation simplifiée de l'agglomération franco-valdo-genevoise"
  (`https://sitg.ge.ch/donnees/agglo-zone-aff-simplifiee`, opendata.swiss `agglo-zones-daffectation-simplifiees`):
  9 classes (urban, village, public facilities, economic activities, transport infrastructure, airport, green spaces,
  agricultural/viticultural, natural/forest) over GE, district of Nyon and the French communes; French side sourced from
  the GPU since 2024; state 2024-01-01; refreshed about every 5 years. A ready-made single legend for the overview map.

### B4. Alternatives: geodienste.ch and geo.admin.ch [M]

- geodienste.ch "Mensuration officielle / Amtliche Vermessung": `https://geodienste.ch/db/av_0/fra?SERVICE=WFS&REQUEST=GetCapabilities`
  (same path for WMS); parcels in the `RESF` class, DDP in `DPRSF`, with number, EGRID and area [M, low]. Per-canton
  downloads (INTERLIS, GPKG, SHP, DXF) from `https://geodienste.ch/services/av` [M]. For GE the SITG layers are fresher (daily).
- Parcel under a point (cadastral web map identify) [M]:
  `https://api3.geo.admin.ch/rest/services/ech/MapServer/identify?geometry=2499500,1117500&geometryType=esriGeometryPoint&sr=2056&layers=all:ch.kantone.cadastralwebmap-farbe&tolerance=0&returnGeometry=true&geometryFormat=geojson&lang=fr`
  returns properties such as `egris_egrid`, `number`, `identnd`, `ak`, `realestate_type`, `geoportal_url`.
- Parcel / EGRID search [M]: `https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText={text}&type=locations&origins=parcel&sr=4326`.
- Terrain for slope [M]: `https://api3.geo.admin.ch/rest/services/height?easting=2500000&northing=1118000&sr=2056`;
  swissALTI3D 0.5 m / 2 m COGs via STAC `https://data.geo.admin.ch/api/stac/v0.9/collections/ch.swisstopo.swissalti3d/items?bbox=5.95,46.12,6.32,46.38`.
- Terms [M]: swisstopo OGD since 2021, free, attribution "© swisstopo"; cadastral web map content "© Cantons"; fair use, no key.

### B5. Browser display, Swiss side [M unless noted]

- WMTS REST (EPSG:3857): `https://wmts.geo.admin.ch/1.0.0/{layer}/default/{time}/3857/{z}/{x}/{y}.{ext}`;
  capabilities `https://wmts.geo.admin.ch/EPSG/3857/1.0.0/WMTSCapabilities.xml`.
  - SWISSIMAGE: `https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.swissimage/default/current/3857/{z}/{x}/{y}.jpeg` (jpeg only;
    pyramid to about z20: read `TileMatrixSetLink`, set source `maxzoom` 19-20 and let MapLibre overzoom).
  - Cadastral web map: `https://wmts.geo.admin.ch/1.0.0/ch.kantone.cadastralwebmap-farbe/default/current/3857/{z}/{x}/{y}.png`.
  - Hillshade: `ch.swisstopo.swissalti3d-reliefschattierung` (png).
  - Coverage: CH + Liechtenstein with some imagery past the border; out-of-extent tiles are blank (and jpeg cannot be
    transparent). Never put SWISSIMAGE on top of France unclipped (see C5). [M, low: test with section D tiles]
  - CORS `Access-Control-Allow-Origin: *` [M, high].
  - swisstopo vector basemaps: `https://vectortiles.geo.admin.ch/styles/ch.swisstopo.lightbasemap.vt/style.json`,
    `ch.swisstopo.basemap.vt`, `ch.swisstopo.imagerybasemap.vt` (SWISSIMAGE + labels).
- SITG display: WMS endpoints above [S] as a MapLibre raster source:
  `https://vector.sitg.ge.ch/arcgis/services/SIT_ZONE_AMENAG/MapServer/WMSServer?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=0&STYLES=&CRS=EPSG:3857&BBOX={bbox-epsg-3857}&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=TRUE`
  (ArcGIS WMS layer names are usually `0`, `1`, ...; check capabilities) [M]; or ArcGIS REST export
  `https://vector.sitg.ge.ch/arcgis/rest/services/{svc}/MapServer/export?bbox={bbox-epsg-3857}&bboxSR=3857&imageSR=3857&size=256,256&format=png32&transparent=true&f=image` [M].
  Legacy `ge.ch/sitgags{1,2,3}` servers are being replaced by `vector.`, `thematic.` and `raster.sitg.ge.ch` [M].
  Faster: pre-tile SITG parcels/zoning to PMTiles in the pipeline (open data, about 10^5 features).

---

## C. Global

### C1. AWS Terrain Tiles (terrarium) [V]

- `https://elevation-tiles-prod.s3.amazonaws.com/terrarium/{z}/{x}/{y}.png` (256 px PNG). Siblings on the same bucket [V]:
  `normal/{z}/{x}/{y}.png`, `geotiff/{z}/{x}/{y}.tif`, `skadi/N46/N46E006.hgt.gz`. (`v2/` prefix is an older Sept 2017 build.)
- Decode: `elevation_m = (R * 256 + G + B / 256) - 32768` [V: z15 tile 16943/11630 decoded to 366.7-399.7 m, the Rade de
  Genève pixel at 6.1469E 46.2064N reads 369.8 m against a lake level of about 372 m].
- Max zoom 15 [V: z15 returns 200, z16 returns 404]. AOI tile counts [V computed]: z12 81, z14 990, z15 3 900 tiles.
- Sources near Geneva [V, header `x-amz-meta-x-imagery-sources`]: z<=8 SRTM + GMTED2010; z9-15 EU-DEM
  (`eudem/eudem_dem_5deg_n45e005.tif`) at every sampled AOI point (Gex, Salève, Veyrier, Thonon, Lausanne): 25 m grid
  (1 arc-second), seamless across the FR/CH border. Fine for a 3D look; too coarse for the slope of an 800 m² parcel
  (about one DEM cell): use RGE ALTI (A4) and swissALTI3D (B4) for per-parcel metrics.
- CORS [V]: `Access-Control-Allow-Origin: *`, `Access-Control-Allow-Methods: GET` on GET with Origin and on OPTIONS preflight.
- MapLibre: `{"type":"raster-dem","encoding":"terrarium","tileSize":256,"maxzoom":15,"tiles":[...]}`.
- Attribution [M, Tilezen wording]: "Terrain Tiles (Mapzen/Tilezen, AWS Open Data). EU-DEM: produced using Copernicus data
  and information funded by the European Union. SRTM and GMTED2010 courtesy of the U.S. Geological Survey."
- Alternative DEM on S3 [V]: Copernicus GLO-30 COGs
  `https://copernicus-dem-30m.s3.amazonaws.com/Copernicus_DSM_COG_10_N46_00_E006_00_DEM/Copernicus_DSM_COG_10_N46_00_E006_00_DEM.tif`
  (also `N46_00_E005_00`): 3600 x 3600 Float32, 1 arc-second, DEFLATE with float predictor, 1024 px tiles, SW-corner naming
  (N46_E006 covers 46-47N, 6-7E). It is a surface model (buildings, canopy) and has no CORS header [V]: pipeline only.
  Licence text [M]: "© DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018 provided under COPERNICUS by the
  European Union and ESA".

### C2. ESA WorldCover 10 m (2021 v200) [V]

- AOI needs two 3x3 degree tiles, named by SW corner (lon 5.8-6.0 falls in E003, 6.0-6.5 in E006) [V]:
  - `https://esa-worldcover.s3.eu-central-1.amazonaws.com/v200/2021/map/ESA_WorldCover_10m_2021_v200_N45E003_Map.tif` (102 017 373 B)
  - `https://esa-worldcover.s3.eu-central-1.amazonaws.com/v200/2021/map/ESA_WorldCover_10m_2021_v200_N45E006_Map.tif` (106 497 465 B)
  - 2020 v100: `.../v100/2020/map/ESA_WorldCover_10m_2020_v100_{N45E003,N45E006}_Map.tif` (200 OK).
  - Grid index `v200/2021/esa_worldcover_grid.geojson` (and `.fgb`); docs `v200/2021/docs/WorldCover_PUM_V2.0.pdf`;
    also `inputquality/` and 60-degree `macrotiles/*.zip`. Listing: `https://esa-worldcover.s3.eu-central-1.amazonaws.com/?list-type=2&prefix=v200/2021/&delimiter=/`.
- COG layout [V, parsed TIFF tags]: 36000 x 36000 uint8 palette, DEFLATE, 1024 px internal tiles, 6 overviews
  (18000 down to 562), nodata 0, EPSG:4326, pixel 1/12000 degree (8.333e-5 degree, about 6.4 m E-W x 9.3 m N-S at 46N);
  tiepoint of N45E006 = lon 6.0 / lat 48.0 (NW corner). Range reads work (206 Partial Content) [V].
- Classes [V, embedded legend]: 10 Tree cover, 20 Shrubland, 30 Grassland, 40 Cropland, 50 Built-up,
  60 Bare/sparse vegetation, 70 Snow and ice, 80 Permanent water bodies, 90 Herbaceous wetland, 95 Mangroves, 100 Moss and lichen.
- Licence [V, embedded]: CC-BY 4.0. Attribution [V, embedded]: "ESA WorldCover project 2021 / Contains modified Copernicus
  Sentinel data (2021) processed by ESA WorldCover consortium".
- CORS [V]: none (no ACAO header on GET with Origin; OPTIONS preflight returns 403). Pipeline only: window-read with
  geotiff.js / GDAL, clip to the AOI, emit PNG or PMTiles for the browser.

### C3. Sentinel-2 L2A COGs [V, STAC M]

- STAC API `https://earth-search.aws.element84.com/v1` (collections `sentinel-2-l2a`, `sentinel-2-c1-l2a`) [M]:
  blocked from this container (CONNECT 403), fine from GitHub Actions.
- Direct bucket works [V]: `https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/{utm}/{band}/{sq}/{yyyy}/{m}/{id}/`
  e.g. `.../31/T/GM/2026/9/S2C_31TGM_20260923_0_L2A/`; list with `?list-type=2&prefix=...&delimiter=/`. Updated to
  2026-09-23 at test time [V]. Each scene folder holds `{id}.json` (STAC item: `bbox`, `properties.eo:cloud_cover`, assets),
  `TCI.tif` (asset `visual`), `B01`-`B12`, `B8A`, `SCL`, `AOT`, `WVP` COGs; asset keys `visual`, `red`, `green`, `blue`,
  `nir`, `scl`, ... plus `-jp2` twins [V].
- MGRS tile `31TGM` (EPSG:32631) covers the whole AOI: bbox 5.579-7.066E, 45.896-46.924N [V].
- CORS `Access-Control-Allow-Origin: *` [V]. Attribution: "Contains modified Copernicus Sentinel data 2026" [M].

### C4. Keyless basemaps and label overlays [M]

- OpenFreeMap (no key, no registration, no view limits, CORS open): style URLs `https://tiles.openfreemap.org/styles/liberty`,
  `.../bright`, `.../positron`, `.../dark`, `.../fiord`; vector TileJSON `https://tiles.openfreemap.org/planet`
  (OpenMapTiles schema). Styles carry attribution "OpenFreeMap © OpenMapTiles Data from OpenStreetMap". Liberty includes a
  3D building layer (fill-extrusion).
- Esri World Imagery: `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}`
  (note `{y}/{x}`), jpeg, z0-19 (deeper in places), CORS `*`. Terms: works without a key, but production use formally
  needs an ArcGIS account / Location Platform key (free tier on the order of 2M basemap tiles per month). Credit
  "Esri, Maxar, Earthstar Geographics, and the GIS User Community".
- Labels-only rasters: Esri `https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}`
  (transparent png, same terms); CARTO `https://{a-d}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}@2x.png`
  (also `light_only_labels`, `dark_only_labels`; free for non-commercial use up to about 75k views/month; "© OpenStreetMap
  contributors © CARTO").
- Recommended keyless route for MapLibre: fetch the OpenFreeMap `liberty` style JSON, keep only `symbol` layers (optionally
  road lines at low opacity), drop background and fills, place it above the imagery and raise `text-halo-width`. The IGN
  `PLAN.IGN/transparent.json` style is the French-only equivalent [S name, M file].

### C5. Joining IGN ortho (FR) and SWISSIMAGE (CH) at the border [M + V tile maths]

- Facts: both WMTS feeds are jpeg (opaque). BD ORTHO is produced per département and may spill a little over Switzerland;
  SWISSIMAGE covers CH + FL with a margin past the border and blanks beyond [M]. Neither cuts cleanly on the border, and
  MapLibre cannot mask a raster layer with a polygon.
- v1 (simple): the upper imagery layer must be transparent outside its coverage. Put SWISSIMAGE WMTS (jpeg, source
  `bounds` = GE bbox `[5.95,46.12,6.32,46.38]`) at the bottom and IGN ortho on top as **WMS-R PNG with transparency**:
  `https://data.geopf.fr/wms-r?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=ORTHOIMAGERY.ORTHOPHOTOS&STYLES=&CRS=EPSG:3857&BBOX={bbox-epsg-3857}&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=true` [M].
  The seam then sits at the edge of BD ORTHO, close to the border. Mirror option: IGN WMTS below and SWISSIMAGE from
  `wms.geo.admin.ch` as transparent PNG on top [M, check the layer is offered on WMS].
- Make the seam intentional: draw the national border (from swissBOUNDARIES3D or the Etalab `communes` union) as a thin
  light line with a soft halo, and harmonise colours with `raster-saturation`, `raster-contrast`,
  `raster-brightness-min/max` and `raster-hue-rotate` on one of the two layers.
- v2 (best quality): in the pipeline, composite only the border-strip tiles (both sources, per-pixel mask rasterised from
  the border polygon, 5-10 px feather, histogram match) into a small PMTiles overlay (WebP with alpha), or serve through a
  Cloudflare Worker that returns 204 for out-of-country tiles. Full pre-rendering of the GE bbox costs about 17k tiles
  at z17 and 68k at z18, so keep it to the strip.
- Terrain has no seam (EU-DEM on both sides [V]). Seamless low-zoom underlay if wanted: Sentinel-2 (C3) or EOX
  s2cloudless `https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2024_3857/default/g/{z}/{y}/{x}.jpg` [M] (CC BY-NC-SA 4.0
  for 2018+ years, i.e. non-commercial).
- Test tiles straddling the border [V computed]: Moillesulaz (Thônex/Gaillard) z16 `33898/23263`, z17 `67796/46527`;
  Ferney-Voltaire / Grand-Saconnex z16 `33879/23251`; Bardonnex / Saint-Julien z16 `33876/23277`; controls: Geneva centre
  (CH) z16 `33886/23261`, Annemasse (FR) z16 `33902/23264`. EPSG:3857 bbox of the Moillesulaz z16 tile:
  `690990.74,5811660.13,691602.23,5812271.63`.

---

## D. CI smoke tests (run from GitHub Actions, full internet)

Closes the [M] gaps above: prints field names, page caps, CORS headers and out-of-coverage behaviour.

```bash
set -u; O='Origin: https://terra-leman.example'
cors() { curl -s -o /dev/null -D - -H "$O" "$1" | grep -iE '^HTTP/|access-control-allow-origin|content-type'; }
curl -s "https://geo.api.gouv.fr/departements/01/communes?fields=nom,code,codeEpci,epci" | jq -c '[.[]|select(.epci.nom|test("Gex"))][0]'
curl -s "https://geo.api.gouv.fr/communes_associees_deleguees?codeDepartement=74" | jq length
curl -sI "https://cadastre.data.gouv.fr/data/etalab-cadastre/latest/geojson/communes/74/74243/cadastre-74243-parcelles.json.gz" | head -1
curl -s "https://apicarto.ign.fr/api/cadastre/parcelle?code_insee=74243&_limit=1" | jq '.features[0].properties'
curl -s "https://apicarto.ign.fr/api/gpu/municipality?insee=74243" | jq '.features[0].properties'
curl -s 'https://apicarto.ign.fr/api/gpu/zone-urba?geom={"type":"Point","coordinates":[6.0866,46.1452]}' | jq '.features[0].properties'
curl -s "https://data.geopf.fr/tms/1.0.0/PCI/metadata.json" | jq '[.vector_layers[]|{id,minzoom,maxzoom}]'
cors "https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&STYLE=normal&TILEMATRIXSET=PM&TILEMATRIX=16&TILEROW=23263&TILECOL=33898&FORMAT=image/jpeg"
cors "https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&STYLE=normal&TILEMATRIXSET=PM&TILEMATRIX=16&TILEROW=23261&TILECOL=33886&FORMAT=image/jpeg"  # Geneva: IGN over CH?
cors "https://data.geopf.fr/tms/1.0.0/PCI/16/33902/23264.pbf"
curl -s "https://data.geopf.fr/geocodage/reverse?lon=6.2093&lat=46.1967&index=parcel&limit=1" | jq '.features[0].properties'
curl -s "https://files.data.gouv.fr/geo-dvf/latest/csv/2025/communes/74/74243.csv" | head -1
curl -s "https://vector.sitg.ge.ch/arcgis/rest/services/Hosted/CAD_PARCELLE_MENSU/FeatureServer/0?f=pjson" | jq '{maxRecordCount, fields:[.fields[].name]}'
curl -s "https://vector.sitg.ge.ch/arcgis/rest/services/Hosted/CAD_BATIMENT_HORSOL/FeatureServer/0?f=pjson" | jq '[.fields[].name]'
curl -s "https://vector.sitg.ge.ch/arcgis/rest/services/SIT_ZONE_AMENAG/MapServer/0?f=pjson" | jq '[.fields[].name]'
cors "https://vector.sitg.ge.ch/arcgis/rest/services/Hosted/CAD_PARCELLE_MENSU/FeatureServer/0/query?where=1%3D1&resultRecordCount=1&f=geojson"
cors "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.swissimage/default/current/3857/16/33902/23264.jpeg"  # Annemasse: blank or 404?
cors "https://wmts.geo.admin.ch/1.0.0/ch.kantone.cadastralwebmap-farbe/default/current/3857/17/67772/46523.png"
curl -s "https://wmts.geo.admin.ch/EPSG/3857/1.0.0/WMTSCapabilities.xml" | grep -A3 '<ows:Identifier>ch.swisstopo.swissimage</ows:Identifier>' | head
curl -s "https://tiles.openfreemap.org/styles/liberty" | jq '[.layers[]|select(.type=="symbol")|.id]|length'
```

---

## E. Main sources (search results)

- geo.api.gouv.fr communes / EPCI docs: https://geo.api.gouv.fr/decoupage-administratif/communes , https://geo.api.gouv.fr/decoupage-administratif/epcis
- Cadastre Etalab: https://cadastre.data.gouv.fr/datasets/cadastre-etalab , https://guides.data.gouv.fr/guides/reutiliser-des-donnees/autour-du-cadastre/manipuler-les-donnees-du-cadastre , https://www.data.gouv.fr/datasets/cadastre-pci-vecteur
- API Carto: https://apicarto.ign.fr/api/doc/pdf/docUser_moduleCadastre.pdf , https://apicarto.ign.fr/api/doc/gpu , https://apicarto.ign.fr/api/doc/pdf/docUser_moduleUrbanisme.pdf
- GPU partitions / services: https://www.geoportail-urbanisme.gouv.fr/services/ , https://www.geoportail-urbanisme.gouv.fr/image/UtilisationAPI_GPU_1-0.pdf , CNIG standards https://cnig.gouv.fr/IMG/pdf/231220_standard_cnig_plu_v2024-01.pdf
- Géoplateforme limits / WMTS / TMS: https://cartes.gouv.fr/aide/fr/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/limites-d-usage/ , https://geoservices.ign.fr/actualites/2024-05-evolution-wmts , https://geoservices.ign.fr/actualites/2025-07-09-mise-%C3%A0-jour-flux-ortho , https://cartes.gouv.fr/aide/fr/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/diffusion/tms/
- PCI flows: https://www.data.gouv.fr/reuses/flux-wmts-wms-wfs-sur-le-pci , https://umap.incubateur.anct.gouv.fr/en/map/tuto-placer-le-cadastre-en-fond-de-carte-transpare_1117 , https://data.geopf.fr/annexes/ressources/wfs/parcellaire.xml
- Plan IGN: https://geoservices.ign.fr/actualites/2026-03-21-PlanIGN , https://guides.data.gouv.fr/guides/reutiliser-des-donnees/utiliser-les-api-geographiques/utiliser-les-tuiles-vectorielles , https://geoservices.ign.fr/actualites/2025-05-fonds-de-carte
- Geocoding: https://adresse.data.gouv.fr/blog/lapi-adresse-de-la-base-adresse-nationale-est-transferee-a-lign , https://data.geopf.fr/geocodage/openapi , https://cartes.gouv.fr/aide/fr/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/geocodage/ , https://adresse.data.gouv.fr/outils/telechargements/format-csv
- DVF: https://files.data.gouv.fr/geo-dvf/latest/ , https://www.data.gouv.fr/datasets/demandes-de-valeurs-foncieres-geolocalisees , https://doc-datafoncier.cerema.fr/doc/guide/dv3f/identifier-les-terrains-a-batir-et-analyser-leurs-marches
- Personnes morales: https://www.data.gouv.fr/datasets/fichiers-des-locaux-et-des-parcelles-des-personnes-morales
- SITG: https://sitg.ge.ch/donnees/cad-parcelle-mensu , https://vector.sitg.ge.ch/arcgis/rest/services/Hosted/CAD_PARCELLE_MENSU/FeatureServer , https://ge.ch/terags/rest/services/ECADASTRE_rdppf_map/MapServer/47 , https://sitg.ge.ch/donnees/sit-zone-amenag , https://sitg.ge.ch/actualites/ajout-dattributs-supplementaires-sur-la-couche-des-zones-daffectation-sitzoneamenag , https://sitg.ge.ch/donnees/agglo-zone-aff-simplifiee
- Verified by curl: elevation-tiles-prod, esa-worldcover, sentinel-cogs, copernicus-dem-30m S3 buckets (headers and TIFF tags quoted above).

---

## Appendix: MapLibre v5 source block (starting point)

```json
{
  "ign-ortho": { "type": "raster", "tileSize": 256, "maxzoom": 19, "attribution": "© IGN",
    "tiles": ["https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&STYLE=normal&TILEMATRIXSET=PM&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=image/jpeg"] },
  "swissimage": { "type": "raster", "tileSize": 256, "maxzoom": 20, "bounds": [5.95, 46.12, 6.32, 46.38], "attribution": "© swisstopo",
    "tiles": ["https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.swissimage/default/current/3857/{z}/{x}/{y}.jpeg"] },
  "pci": { "type": "vector", "maxzoom": 19, "attribution": "Cadastre © DGFiP, IGN",
    "tiles": ["https://data.geopf.fr/tms/1.0.0/PCI/{z}/{x}/{y}.pbf"] },
  "gpu-zonage": { "type": "raster", "tileSize": 256, "minzoom": 13, "attribution": "Géoportail de l'Urbanisme",
    "tiles": ["https://data.geopf.fr/wms-v/ows?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=zone_secteur&STYLES=&CRS=EPSG:3857&BBOX={bbox-epsg-3857}&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=true"] },
  "terrain": { "type": "raster-dem", "encoding": "terrarium", "tileSize": 256, "maxzoom": 15,
    "attribution": "Terrain: Tilezen/AWS, EU-DEM © Copernicus",
    "tiles": ["https://elevation-tiles-prod.s3.amazonaws.com/terrarium/{z}/{x}/{y}.png"] }
}
```

Use `"terrain": {"source": "terrain", "exaggeration": 1.3}` at style root; PCI layer `parcelle` with layer `minzoom` 15.
