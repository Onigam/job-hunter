# Listing portals for Terra Léman: connector research (France + Switzerland)

_Research date: 2026-09-26. Scope: land (terrain) first, then houses/apartments, for sale, inside the
AOI of `shared/aoi.ts` (bbox `[5.87, 46.035, 6.43, 46.42]`, departments 74 + 01, 45 Geneva communes).
Field mappings target `RawListing` in `pipeline/src/types.ts`._

**How this was researched.** The research container blocks egress to every portal (and to lobstr.io,
flatfox.ch, gouv.fr...), so **no endpoint below was exercised first-hand**. Evidence comes from
web-search result snippets (mostly Apify actor pages, scraping-vendor blogs such as Scrapfly and
Piloterr, the portals' own indexed SEO pages, law-firm articles) plus prior knowledge. The session's
200-query search budget ran out before Jinka, Castorus, RSS feeds and builder sites could be checked.

Confidence tags used on every detail:

- **[V]** seen in search results (secondary sources, 2025-2026): likely true, still verify on first run.
- **[M]** from memory / prior knowledge, not re-verified: plausible, must be checked in DevTools.
- **[I]** inference from [V]/[M] facts.

## 0. TL;DR

- **Bien'ici** is the only large French portal with a keyless JSON search API that reportedly works
  from datacenter IPs ("no Cloudflare", "no proxy required") [V]. It exposes explicit position
  blurring (`blurInfo`: disk + radius) [V], land (`propertyType: ["terrain"]`) [V] and most agency
  stock (agency software multi-posts to Bien'ici, SeLoger, Logic-Immo...) [M]. **Implement first.**
- **Flatfox** (CH) has a documented public API with exact coordinates [V], but sale volume is small
  (~1,900 sale listings nationwide vs ~33,900 rentals) [V]. **Implement second** (cheap, legal).
- **immobilier.notaires.fr** has a JSON API behind its SPA (read directly by several Apify actors) [V];
  the exact path is unconfirmed [M]. Strong notarial presence in 74 (276 notaries / 90 offices) [V].
- **Leboncoin, PAP, SeLoger, Logic-Immo, Homegate, ImmoScout24.ch, Comparis** sit behind DataDome /
  Cloudflare-class protection [V]; from GitHub Actions (Azure IPs) expect 403/captcha [I]. Leboncoin
  also won a database-right case up to the Cour de cassation against a scraper [V]. These need a
  fallback channel (section 8), not a plain connector.
- Land supply in the Canton of Geneva is tiny: ImmoScout24 showed **13 building plots** for sale in
  the whole canton (1,096 properties of all types) [V]. Swiss connectors matter mainly for houses and
  apartments; French land volume is ~900 terrain ads in all of 74 on SeLoger [V].

## 1. Summary table

| # | Source | Ctry | Endpoint type | Geo filter | Land | Coords precision | Anti-bot risk from GH Actions | Priority |
|---|---|---|---|---|---|---|---|---|
| 1 | Bien'ici | FR | Undocumented public JSON (GET) | zone ids (negative ints) from suggest | yes `terrain` [V] | blurred disk + radius, or exact [V] | **Low** [V] | **P1** |
| 2 | Flatfox | CH | Documented public REST [V] | bbox (`/pin`) [V] | yes (building land ads exist) [V] | exact [V] | **Low** [I] | **P1** |
| 3 | immobilier.notaires.fr | FR | SPA JSON API [V], path [M] | département / locality [V/M] | yes (`TER`?) [V-weak] | "geo data" present [V], precision ? | Low-Med (nothing reported) [I] | **P2** (verify) |
| 4 | Green-Acres | FR | AJAX JSON wrapping HTML [V] | URL/department | yes [V] | approx [M] | **Low** (no anti-bot found) [V] | P2 |
| 5 | immobilier.ch | CH | HTML/SPA, mobile app API likely [I] | URL slugs [V] | yes (`plot`) [V] | map view exists [V] | Unknown | P3 (spike) |
| 6 | Newhome.ch | CH | HTML/JSON (unconfirmed) | ? | yes [M] | coords extracted by scrapers [V] | Unknown | P4 (spike) |
| 7 | Leboncoin | FR | Internal JSON (POST) [V] | city/zip list, dept, lat/lng+radius [V/M] | yes `real_estate_type=3` [V] | mostly commune centroid [M] | **Very high** (DataDome) + legal [V] | P3 via fallback only |
| 8 | PAP | FR | iOS-app JSON [V] | geo ids via `/app/gis` [V] | yes [M] | approx [M] | **High** (DataDome, 403) [V] | P4 via fallback |
| 9 | ImmoScout24.ch | CH | Embedded state JSON [V] | URL slugs `canton-geneva` [V] | yes `plot` [V] | address-level [I] | **High** (captcha, non-CH IPs) [V] | P3 via fallback |
| 10 | Homegate | CH | Embedded state JSON [V] | geoTags / URL slugs [V] | yes `plot` [V] | `geoCoordinates` + `accuracy` [V] | **High** (DataDome/Cloudflare) [V] | P3 via fallback |
| 11 | SeLoger | FR | Embedded JSON on `/classified-search` [V] | `AD08FR…` place ids [V] | yes [V] | blurred [M] | **Very high** (DataDome) [V] | P5 (dup of Bien'ici) |
| 12 | Logic-Immo | FR | AVIV stack [V] | idem [I] | yes [V] | ? | Very high [I] | P5 |
| 13 | Figaro Immobilier | FR | HTML pages, no API found [V] | URL slugs [V] | yes [I] | ? | Unknown | P5 |
| 14 | Superimmo / ParuVendu / Entreparticuliers | FR | HTML only (3rd-party scrapers) [V] | URL | yes | ? | Unknown | P6 |
| 15 | Comparis | CH | Metasearch HTML [V] | - | yes | - | **Very high** ("aggressive") [V] | skip |
| 16 | tutti / anibis | CH | Reverse-engineered API (tutti) [V] | location filters [V] | rare | ? | Medium [I] | P6 |
| 17 | acheter-louer.ch | CH | HTML [V] | ? | yes [V] | ? | Unknown | P6 |

## 2. Geo keys per portal for this AOI

- AOI bbox `[5.87, 46.035, 6.43, 46.42]` (lon/lat). All portals except Flatfox need a commune- or
  department-level key; always re-filter client-side with `pointInPolygon` / commune list [I].
- Useful postal codes [M]: 74160 (Saint-Julien-en-Genevois + Archamps, Collonges-sous-Salève...),
  74520 (Valleiry), 74580 (Viry), 74100 (Annemasse, Ambilly, Ville-la-Grand...), 74240 (Gaillard),
  01170 (Gex), 01210 (Ferney-Voltaire), 01220 (Divonne-les-Bains), 01630 (Saint-Genis-Pouilly),
  01710 (Thoiry). INSEE examples [M]: Annemasse 74012, Saint-Julien 74243, Gex 01173, Ferney 01160.
  Take the authoritative list from `CommuneRef.postalCodes` (geo.api.gouv.fr) rather than hard-coding.
- **Bien'ici**: one zone id per commune via `suggest.json`; Paris is `-7444` [V], which is the OSM
  relation id of Paris negated, so ids are probably `-<OSM admin relation id>` [I] (could be
  precomputed from OSM `ref:INSEE`; verify on 2-3 communes first).
- **Leboncoin**: `{city, zipcode}` list, `department_id` "74"/"01", or `area {lat,lng,radius}` in
  metres [V/M]. Simplest robust option: department + client-side AOI filter.
- **PAP**: numeric geo ids; Haute-Savoie = `438` (`-g438` in URLs), Savoie = `437` [V]; communes via
  `/app/gis?q=` [V].
- **notaires**: `departement=74` on the web UI [V]; API parameter name unconfirmed [M].
- **SeLoger**: internal place ids `AD08FR<n>` (commune level; Paris = `AD08FR31096`, not INSEE) [V].
- **Flatfox**: bbox directly [V]. **Homegate / ImmoScout24.ch**: slugs `canton-geneva`, `city-geneve`
  [V] / Homegate `geoTags` [V].

## 3. France

### 3.1 Bien'ici (bienici.com) — P1

| Purpose | Request | Conf. |
|---|---|---|
| Search | `GET https://www.bienici.com/realEstateAds.json?filters=<url-encoded JSON>` | [V] |
| Detail | `GET https://www.bienici.com/realEstateAd.json?id=<id>` | [M] high |
| Place suggest | `GET https://res.bienici.com/suggest.json?q=<text>` (a "geo-suggest" exists [V]) | [M] medium |

No API key [V]. Send a normal browser `User-Agent`, `Accept: application/json`,
`Referer: https://www.bienici.com/` [M].

```bash
# 1) commune -> zone ids (run once per commune, cache the mapping in the repo)
curl -s 'https://res.bienici.com/suggest.json?q=valleiry' \
  -H 'Accept: application/json' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) Chrome/128.0 Safari/537.36'
# -> array of places (name, type, zoneIds[], postal codes...) [M: exact keys unverified]

# 2) land for sale in a set of communes, newest first
curl -s -G 'https://www.bienici.com/realEstateAds.json' \
  -H 'Accept: application/json' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) Chrome/128.0 Safari/537.36' \
  --data-urlencode 'filters={"size":100,"from":0,"page":1,"filterType":"buy","propertyType":["terrain"],"onTheMarket":[true],"showAllModels":false,"sortBy":"publicationDate","sortOrder":"desc","zoneIdsByTypes":{"zoneIds":["-ZONE_A","-ZONE_B"]}}'
# -> {"total":N,"from":0,"perPage":100,"realEstateAds":[...]}   [M: envelope keys]
```

Filter keys: `size`, `from` [V], `page` [M]; `filterType` `buy|rent` [V]; `propertyType` array from
`house, flat, parking, terrain, loft, shop, building, castle, premises, office, townhouse, others`
[V]; `zoneIdsByTypes.zoneIds` (strings like `"-7444"`) [V]; `onTheMarket: [true]` [V];
`showAllModels` [V] (builders' catalogue house models; `true` should surface "terrain + maison"
packages [I]); `minPrice`/`maxPrice` [V]; `minArea`, `maxArea`, `minRooms`, `sortBy`, `sortOrder`
[M]. The site also sends `extensionType=extendedIfNoResult` as a separate query param [V]; its name
suggests the search is widened when empty [I], so **omit it** in the pipeline.

Pagination and caps: offset paging with `from` + `size`; a query cannot go beyond ~2,400-2,500 rows,
past that the endpoint answers **HTTP 400 "Too many ads requested"** [V]. Max `size` unknown (use 100
and test) [M]. AOI volumes per commune x type are far below the cap [I].

| RawListing | Bien'ici field | Conf. |
|---|---|---|
| sourceId | `id` (ids embed the feeding software, e.g. photo names like `immo-facile-60851947_...`) | [V] |
| type | `propertyType`: terrain -> terrain; house, townhouse, castle -> maison; flat, loft -> appartement; building -> immeuble; else autre | [V] enum |
| title / description | `title`, `description` | [V] |
| price, currency | `price` (EUR); new-build programmes may carry ranges | [V] / [M] |
| landArea | `landSurfaceArea` (present on houses; on terrain ads also check `surfaceArea`) | [V] / [I] |
| livingArea | `surfaceArea` | [V] |
| rooms / bedrooms | `roomsQuantity` / `bedroomsQuantity` | [V] |
| communeName / postalCode | `city` / `postalCode` (+ `district`); no INSEE code seen, join on postal code + name | [V] / [I] |
| lat / lon | `blurInfo.position.lat/lon` (also `blurInfo.centroid`) | [V] |
| precision / radiusM | `blurInfo.type: "disk"` -> `blurred`, `radiusM = blurInfo.radius` (e.g. 250); `addressKnown: true` -> `exact` | [V]; other `type` values [M] |
| photos | `photos[].url` on `https://file.bienici.com/photo/...` | [V] host, [M] key |
| url | build `https://www.bienici.com/annonce/vente/{city-slug}/{type-fr}/{n}pieces/{id}` (seen: `.../paris-15e/appartement/3pieces/<id>`); terrain ads probably omit the `pieces` segment | [V] / [M] |
| publishedAt / updatedAt | `publicationDate` / `modificationDate` (ISO 8601, `Z`) | [V] |
| sellerType / agency | `accountType` (`agency` -> agence, private -> particulier), agency name as `agencyName` in scraper outputs | [V] / [M] |
| extras | `adType`, `energyClassification`, `greenhouseGazClassification`, `newProperty`, `pricePerSquareMeter`, `reference`, `photoCount` | [V] |

Anti-bot / ToS: an Apify actor states Bien'ici "works from datacenter IPs without proxy (no
Cloudflare)" while LeBonCoin and SeLoger "require residential proxy" [V]; several other actors are
"HTTP-only, no proxy required" [V]. One public project reported that `filters` were silently ignored
(HTTP 200 with all-France results) [V]: the connector must assert that every returned ad's
`postalCode` is in the requested set and fail loudly otherwise [I]. No licence for reuse; keep
throttling and store metadata + links only (project policy). Cadastral data: none [M].

### 3.2 Leboncoin — P3, fallback channel only

| Purpose | Request | Conf. |
|---|---|---|
| Search | `POST https://api.leboncoin.fr/finder/search` (JSON body) | [V] |
| Detail | `GET https://api.leboncoin.fr/finder/classified/{list_id}` | [M] low |
| Detail (page) | `https://www.leboncoin.fr/ad/ventes_immobilieres/{list_id}`, data in `__NEXT_DATA__` | [V] |
| Human search URL | `https://www.leboncoin.fr/recherche?category=9&real_estate_type=3&locations=Valleiry_74520__46.107_5.970_5000` (format `City__lat_lng_radius` seen with Bordeaux) | [V] / [M] zip part |

```bash
curl -s 'https://api.leboncoin.fr/finder/search' \
  -H 'Content-Type: application/json' -H 'api_key: ba0c2dad52b3ec' \
  -H 'Origin: https://www.leboncoin.fr' -H 'Referer: https://www.leboncoin.fr/' \
  -H 'User-Agent: <real Chrome UA>' -H 'Cookie: datadome=<cookie from a real browser session>' \
  --data '{"limit":35,"offset":0,
    "filters":{"category":{"id":"9"},
      "enums":{"ad_type":["offer"],"real_estate_type":["3","1"]},
      "location":{"department_id":"74"},
      "ranges":{"price":{"max":900000},"land_plot_surface":{"min":300}}},
    "sort_by":"time","sort_order":"desc","owner_type":"all"}'
# location alternatives [M]: {"locations":[{"locationType":"city","city":"Valleiry","zipcode":"74520"}]}
#                            {"area":{"lat":46.146,"lng":6.081,"radius":15000}}   (radius in metres [V])
```

Confidence: category `9` = ventes immobilières [V]; `ad_type: offer`, `limit: 35`, `offset`,
`owner_type` (`pro`/`private`), `sort_by`, `sort_order` [V]; `real_estate_type` 1 = maison,
2 = appartement, 3 = terrain [V, from the portal's own SEO URLs], 4 = parking, 5 = autre [M];
`immo_sell_type` `old` [V] / `new`, `viager` [M]; the `api_key` value and exact nesting of
`location`/`ranges` [M]. Cap: responses carry `max_pages: 100`, i.e. 100 x 35 = **3,500 ads per
query** [V]; partition by department x type x price band.

Response [V]: `total`, `total_all`, `total_pro`, `total_private`, `max_pages`, `ads[]`.

| RawListing | Leboncoin field | Conf. |
|---|---|---|
| sourceId | `list_id` | [V] |
| type | attribute `real_estate_type` (1/2/3...) | [V] |
| title / description | `subject` / `body` | [V] |
| price | `price` (integer EUR, returned as a one-element array) | [V] / [M] array |
| landArea | attribute `land_plot_surface` (`value`; `value_label` "606 m²") | [V] |
| livingArea / rooms / bedrooms | attributes `square`, `rooms` [V]; `bedrooms` [M] | |
| communeName / postalCode | `location.city`, `location.zipcode` (+ `department_id`, `region_id`) | [V] |
| lat / lon | `location.lat`, `location.lng` | [V] |
| precision | `location.source` (`city` = commune centroid, otherwise user-placed) and `location.is_shape` | [V] fields, [M] semantics |
| photos | `images.urls_large[]` (also `urls`, `small_url`, `thumb_url`) | [V] |
| url | `url` = `https://www.leboncoin.fr/ad/ventes_immobilieres/{list_id}` | [V] |
| publishedAt / updatedAt | `first_publication_date` / `index_date` (`"2026-03-09 13:27:23"`, no TZ, Paris time) | [V] / [M] TZ |
| sellerType / agency | `owner.type` (`pro` -> agence, `private` -> particulier), `owner.name`, `owner.siren` | [V] |

Anti-bot: DataDome [V]; datacenter and non-French IPs are blocked; requests need a French
residential/mobile IP **and** a real-browser TLS fingerprint (a 2026 report on the `lbc` Python client
says DataDome blocked 3 of 4 `curl_cffi` impersonations, only `chrome_android` passed) [V]. From Azure
runners: expect near-total 403 [I]. Legal: TGI Paris (2017) then Cour d'appel and **Cour de cassation**
held that Entreparticuliers.com's systematic extraction of Leboncoin real-estate ads infringed LBC's
sui generis database right (CPI L.341-1 / L.342-1; EUR 20k damages + EUR 10k costs) [V]. Highest legal
exposure of all sources for a public aggregator. Private sellers' names/phones are personal data.

### 3.3 PAP (pap.fr) — P4, fallback channel

| Purpose | Request | Conf. |
|---|---|---|
| Search (iOS app API) | `GET https://api-ios.pap.fr/app/annonces?produit=vente&geo[ids][]=438&typesbien[]=terrain&prix[max]=...&surface[min]=...&nb_pieces[min]=...&nb_chambres[min]=...` (up to 300 cards per call) | [V]; `terrain` value [M] |
| Geo autocomplete | `GET https://api-ios.pap.fr/app/gis?q=annemasse` | [V] |
| Legacy web WS | `GET https://ws.pap.fr/immobilier/annonces?recherche[produit]=vente&recherche[typesbien][]=terrain&recherche[geo][ids][]=438` | [M]; param style [V] |
| Obsolete | `POST http://www.pap.fr/iphone/v1/recherche.php` (produit, geoobjets, typesbien) | [V] dead |
| Web pages | list `https://www.pap.fr/annonce/vente-terrains-haute-savoie-74-g438`, detail `https://www.pap.fr/annonces/...-r{id}` | [V] |

Fields: the app API returns "30+ data points" per card incl. price, surface, rooms, bedrooms, DPE/GES,
nearby transport, high-res photos, and the seller phone when shown [V]; exact keys unknown [M]
(legacy HAL JSON used `prix`, `surface`, `nb_pieces`, `nb_chambres`, `_embedded.photo[]` [M]). Position
approximate [M]. `sellerType` is always `particulier` (PAP is private-only) [V]. Volume: only **~10 land
ads in all of Haute-Savoie** at research time [V] -> low value. Anti-bot: DataDome; Apify PAP actors
report "anti-bot 403 responses, may return 0 results"; working ones use Chrome TLS impersonation + FR
residential proxy [V]. App User-Agent / headers unknown [M].

### 3.4 immobilier.notaires.fr (+ immonot.com) — P2 after verification

- Portal of the Notaires de France, ~100-120k ads nationally [V]; 276 notaries / 90 offices in 74 [V].
- Web URLs [V]: `https://www.immobilier.notaires.fr/fr/annonces-immobilieres/vente/terrain/haute-savoie-74`,
  `https://www.immobilier.notaires.fr/fr/annonces-immobilieres-notaires?departement=74`.
- The SPA reads a **public JSON API** that Apify actors call directly ("no HTML scraping") [V]; raw
  French field names such as `typeBien`, `localiteNom` [V]; pagination via `parPage` [V]; `TER` is
  reportedly the land code [V-weak]. Output includes price, notary fees, DPE, surface, "geo data",
  notary contact [V].
- Endpoint guess to confirm in DevTools on the page above [M, low]:

```bash
curl -s -G 'https://www.immobilier.notaires.fr/pub-services/inotr-www-annonces/v1/annonces' \
  -H 'Accept: application/json' -H 'Referer: https://www.immobilier.notaires.fr/fr/annonces-immobilieres' \
  --data-urlencode 'offset=0' --data-urlencode 'page=1' --data-urlencode 'parPage=50' \
  --data-urlencode 'departements=74' --data-urlencode 'typeBiens=TER,MAI,APP' \
  --data-urlencode 'typeTransactions=VENTE,VNI,VAE'
```

- Transaction codes [M]: `VENTE` (classic), `VNI` (online interactive notarial sale), `VAE` (auction).
  Keep auctions but flag them (price = starting bid) [I].
- Mapping [M, to confirm]: id (`annonceId`?), `typeBien`, price (`prix`/`prixAffiche`, check whether
  fees are included), `surface`, `surfaceTerrain`, `nbPieces`, `localiteNom` + postal/INSEE code,
  lat/lon if present, photo URLs, creation/update dates. `sellerType = notaire`.
- Anti-bot: nothing reported by the actors [I]; plausibly fine from Azure, unverified.
- **immonot.com** is a second notarial portal with strong Savoie/Haute-Savoie coverage
  (`https://www.immonot.com/tout-immobilier/D74/immobilier-notaire-haute-savoie.html` exists [V]);
  not researched further. Expect overlap with immobilier.notaires.fr [I].

### 3.5 SeLoger and Logic-Immo (AVIV group) — P5

- Legacy app API `POST https://api-seloger.svc.groupe-seloger.com/api/v1/listings/search`, body with
  `pageIndex`, `pageSize`, `realtyTypes`, `transactionType`, `inseeCodes`, `minimumPrice`,
  `maximumPrice`, `minimumLivingArea`, `bedrooms` [V, from old client libs]; needed app auth/challenge
  headers [M]; treat as dead [I].
- Current web search: `https://www.seloger.com/classified-search?distributionTypes=Buy&estateTypes=House,Apartment&locations=AD08FR31096`
  [V]; `estateTypes` values seen: Apartment, House, Building [V]; land value probably `Land` [M-low].
  Location ids `AD08FR<n>` are internal (resolved by an autocomplete endpoint whose URL was not found) [V].
- Data sits in `window["initialData"]` / the "UFRN classified-serp-init-data" payload [V]. Old
  `/list.htm?projects=...` URLs are WAF-blocked at the edge [V].
- Anti-bot: **DataDome**, FR residential routing required [V]. Volume: 901 land ads in 74 [V].
- Logic-Immo: same AVIV group [V], ~63k land ads in France [V]; same protection assumed [I].
- Value: agency ads are multi-posted to Bien'ici by the same agency software [M], so marginal gain is
  mostly duplicates. Skip until fallback infrastructure exists.

### 3.6 Figaro Immobilier — P5

Search pages like `https://immobilier.lefigaro.fr/annonces/immobilier-vente-appartement-paris.html` [V]
(terrain variant `immobilier-vente-terrain-{ville}.html` [I]). No JSON API found; scrapers parse pages
[V]. Anti-bot not documented. Content is agency stock (duplicates) [M].

### 3.7 Green-Acres — P2

- An Apify actor's recon states "no anti-bot was found on green-acres.fr" [V].
- List endpoint `/{lang}/AdvertListingActions/AdvertsListing` returns JSON `{html, advertsCount}`
  where `html` holds `.announce-cards` fragments; sort param `order=price_i` [V, seen with `nl`];
  French path `/fr/...` assumed [I]. Detail pages give price, surface, land size, rooms, energy grade,
  photos, agency [V]. Coordinates approximate / commune-level [M].
- Rural and foreign-buyer audience, decent land coverage in 74/01 [M]; agency duplicates likely [I].

### 3.8 Superimmo, ParuVendu, Entreparticuliers — P6

Only third-party HTML scrapers found (Apify lexis-solutions, tagadanar actors) [V]; no JSON API.
Superimmo is itself an aggregator of agency ads [M]. Entreparticuliers.com was the defendant in the
Leboncoin database case [V]. Low unique value; skip.

### 3.9 Builders' land offers and aggregators (not researched in depth)

- terrain-construction.com and builder sites: not checked (budget). Builder "terrain + maison"
  packages are widely syndicated to Bien'ici (house models, `showAllModels`) and to Leboncoin as pro
  ads [M]; tag them `sellerType: promoteur` and detect land-only price in text [I].
- Jinka, Castorus: not checked. Jinka's app API requires a logged-in account [M]; Castorus is a
  price-history site without API [M]; both redistribute third-party data. Not suitable.

## 4. Switzerland

### 4.1 Flatfox (flatfox.ch) — P1

| Purpose | Request | Conf. |
|---|---|---|
| Docs | `https://flatfox.ch/en/docs/api/` | [V] |
| Bbox pins | `GET https://flatfox.ch/api/v1/pin/?west=5.87&south=46.035&east=6.43&north=46.42&max_count=400` | [V] params |
| Listing data | `GET https://flatfox.ch/api/v1/public-listing/?limit=100&offset=0&expand=images` | [V] |
| By ids | `GET https://flatfox.ch/api/v1/public-listing/?pk=1554999&pk=583537` | [V] `pk` filter, [M] repeated |
| Detail page | `https://flatfox.ch/en/flat/{slug}/{pk}/` (e.g. `/en/flat/promenade-1-7270-davos/1554999/`) | [V] |

- `public-listing` only accepts `limit`, `offset`, `pk`, `status`, `organization` (no geo/price
  filters) [V]; responses are paginated with `count` + `next` [V]; `expand=` inlines related objects,
  nested with dots [V]. Private/business endpoints use HTTP basic auth [V]; public listing endpoints
  are used keyless by scrapers [I].
- `/pin` is what the map uses; one bbox request is capped (reported ~1,000 candidates) and scrapers
  split the bbox into quadrants when the cap is hit [V]. It probably accepts the site-search filters
  (`offer_type=SALE`, `object_category=...`) [M]; otherwise filter after fetching details.
- Plan [I]: pins over the Geneva part of the AOI -> pks -> batched `public-listing?pk=...` -> keep
  `offer_type == "SALE"`. Fallback: full weekly crawl of `public-listing` (~36k items, ~360 requests at
  `limit=100`).
- Categories seen: `APARTMENT, HOUSE, SECONDARY, SHARED, INDUSTRY, PARK` [V]; building-land sale ads
  exist ("Buy a 981m² building land in Davos") but their category/type code is unknown [V]/[M].

| RawListing | Flatfox field (snake_case originals [M]; camelCase seen in scraper output [V]) | Conf. |
|---|---|---|
| sourceId | `pk` | [V] |
| type | `object_category` / `object_type` (APARTMENT -> appartement, HOUSE -> maison, building land -> terrain) | [V] / [M] |
| price, currency | `price_display` (+ `price_display_type`, `price_unit`), `selling_price`; CHF | [V] names |
| landArea | `surface_property` | [V] |
| livingArea | `livingspace` (camel `livingSpace`); also `surface_usable` | [V] / [M] |
| rooms | `number_of_rooms` (decimal string, e.g. "4.5") | [M] |
| lat / lon, precision | `latitude`, `longitude`: exact [V]; downgrade to `approx` if no street in `public_address` [I] | |
| communeName / postalCode | `city`, `zipcode` | [V] / [M] key |
| photos | expanded `images[].url` (relative, prefix `https://flatfox.ch`) | [M] |
| url | `https://flatfox.ch` + `url` | [V] pattern |
| publishedAt | `published` (or `created`) | [M] |
| agency | `agency` / `organization` | [M] |

Volume: ~1,900 sale listings in Switzerland vs ~33,900 rentals [V] -> expect dozens in GE. Anti-bot:
none reported [I]. Public API intended for integrations (a Laravel package exists "to receive public
listings") [V].

### 4.2 ImmoScout24.ch and Homegate (SMG) — P3, fallback channel

- ImmoScout24.ch URLs [V]: `https://www.immoscout24.ch/en/plot/buy/canton-geneva` (13 building plots
  "from CHF 1,000,000"), `?pty=13,77` (agricultural land), `/en/real-estate/buy/canton-geneva` (1,096),
  `/en/house/buy/canton-geneva` (542), `/en/flat/buy/city-geneve` (207).
- Homegate URLs [V]: `https://www.homegate.ch/buy/plot/country-switzerland/matching-list` (1,678 plots);
  canton variant `.../buy/plot/canton-geneva/matching-list` [I]. Homegate dropped the `/de/` prefix
  and moved property pages to `window.__PINIA_INITIAL_STATE__` (Vue 3); search pages keep
  `window.__INITIAL_STATE__` [V]. ImmoScout24.ch loads from an internal JSON API with an embedded blob [V].
- Internal APIs, unverified [M]: `POST https://api.homegate.ch/search/listings` (Elasticsearch-style body:
  `query.offerType`, `query.categories`, `query.location.geoTags`, `from`, `size`), legacy
  `https://rest-api.immoscout24.ch/v4/...`. `offerType` RENT/BUY and "geoTags" are confirmed concepts [V].
- Homegate listing JSON [V]: `id`, `offerType`, `categories[]`, `address{street, postalCode, locality,
  geoCoordinates{latitude, longitude, accuracy, manual}}`, `characteristics{numberOfRooms, livingSpace,
  lotSize, yearBuilt}`, `prices`, `localization.<lang>.text{title, description}`, `lister`.
- Mapping: price `prices.buy.price` CHF [M]; landArea `characteristics.lotSize` [V]; livingArea
  `characteristics.livingSpace` [V]; rooms `numberOfRooms` [V]; lat/lon `address.geoCoordinates` with
  precision from `accuracy`/`manual` [V fields, M values]; photos `localization.<lang>.attachments[]`
  of type IMAGE [M]; url `https://www.homegate.ch/buy/{id}` [M]; dates under listing meta [M].
- Anti-bot: Homegate is reported behind DataDome (also Cloudflare mentions) [V]; ImmoScout24.ch shows a
  captcha wall on the first request, especially for non-Swiss IPs, and needs a Swiss proxy [V]. Not
  viable from Azure without an unblocker [I]. SMG terms forbid automated access [M]; in Swiss law the
  relevant risk is UWG art. 5 let. c (taking over another's market-ready work result by technical
  reproduction) rather than a database right [M].

### 4.3 immobilier.ch — P3 (research spike)

Romandie portal backed by regional agencies [M]. URLs [V]: `https://www.immobilier.ch/en/buy/plot/geneva/page-1`,
`https://www.immobilier.ch/en/buy/apartment/geneva/page-1` (660 apartments),
`https://www.immobilier.ch/fr/carte/louer/appartement-maison/geneve/geneve/page-1` (map view, so
coordinates are in the page data [I]). Android app `com.procab.immobilier` [V] implies a JSON API [I].
No public API or anti-bot report found; an Apify actor scrapes it [V]. Spike: open DevTools on the map
view for sales (`/fr/carte/acheter/...` [I]) and look for XHR JSON.

### 4.4 Comparis — skip

Metasearch across Swiss portals [M]; "aggressive anti-bot layer across the entire site", residential
proxies recommended [V]; list path `comparis.ch/immobilien/result/list` [V]. Content duplicates others.

### 4.5 Newhome.ch — P4 (spike)

Scrapers extract price, rooms, living space, address, **geo-coordinates**, images, year built, agency
[V]; no native API documented [V]. Owned by Swiss cantonal banks [M]. Anti-bot unknown.

### 4.6 tutti.ch / anibis.ch — P6

Both run by SMG, UIs merged since 2024 [V]. tutti has a reverse-engineered API with search filters
(category, price, location) and cursor pagination, packaged as a TypeScript SDK (`filippofinke/tutti-api`)
[V]. Real-estate volume in GE is marginal [I]; ToS risk. Skip.

### 4.7 acheter-louer.ch — P6

Geneva pages covering houses, apartments and land exist
(`https://www.acheter-louer.ch/en/immobilier/geneve-immobilier-maison-appartement-villa-chalet-appartement-terrain.html`)
[V]; nothing else found.

## 5. Open data, feeds and licensed aggregators

- No open-data or RSS listing feed covering these portals was found [I]; Leboncoin dropped RSS years
  ago [M]; portals offer email alerts instead [M]. (RSS search was cut short by the search budget.)
- Useful **enrichment** sources (not listings): DVF sales (geo-dvf CSVs per department; "API données
  foncières" on api.gouv.fr [V exists]) for price context; IGN API Carto cadastre parcels
  (`https://apicarto.ign.fr/api/cadastre/parcelle?...` [M]) and GPU zoning (`/api/gpu/zone-urba` [M]);
  SITG open data for Geneva cadastre and zones d'affectation [M]. No portal exposes cadastral parcel
  ids in listing JSON [M]; they only appear in ad text (already covered by `ListingFeatures.refsCadastrales`).
- Licensed aggregator APIs that legally include Leboncoin/SeLoger/PAP content: Melo.io ("900+ sources",
  JSON with GPS, land area, price changes) [V], Stream Estate [V], Fluximmo [V], Yanport [V]. Paid, and
  they need an API key, which breaks the project's keyless rule (would become a GitHub secret).

## 6. Legal / ToS summary

- France: sui generis database right (CPI L.341-1, L.342-1), enforced by Leboncoin up to the Cour de
  cassation [V]. Extracting a "substantial part" repeatedly is the risk; a narrow AOI and metadata-only
  storage reduce, not remove, exposure [I]. Descriptions and photos are copyrighted [M]: keep hotlinking
  + link-out (current project policy), never re-host.
- Switzerland: no database right, but UWG art. 5 let. c and portal ToS [M].
- Personal data: do not store private sellers' names/phones (GDPR / Swiss FADP) [V, Scrapfly note].
- robots.txt could not be fetched for any portal (egress blocked); check before enabling each connector.

## 7. Ranked recommendation

1. **Bien'ici** (FR): keyless, datacenter-friendly, largest agency coverage, explicit blur radius.
   Per commune x type queries, incremental by `publicationDate`, postal-code assertion.
2. **Flatfox** (CH): official public API, exact coordinates; small but clean sale inventory.
3. **immobilier.notaires.fr** (FR): after a 30-minute DevTools session confirms path, params, coords;
   adds notarial-only stock (land parcels from successions are common in notarial ads [M]).
4. **Green-Acres** (FR): no anti-bot; parse HTML fragments from the JSON endpoint; mostly duplicates,
   useful for rural land.
5. **immobilier.ch** then **Newhome.ch** (CH): short spikes; implement only if their JSON is reachable
   from Azure without challenge.
6. **Leboncoin** (biggest private-seller land stock), **ImmoScout24.ch/Homegate** (bulk of Geneva
   houses/apartments), **PAP**, **SeLoger/Logic-Immo**: only through the fallback channel below.

Dedupe across portals on (commune, rounded price, land/living area +-3 %, photo hash) since agency ads
repeat on Bien'ici, SeLoger, Logic-Immo, Figaro and Green-Acres [I].

## 8. Fallback strategy for blocked portals

Ordered from most compatible with the keyless, weekly GitHub Actions design to least:

1. **Degrade gracefully**: a blocked connector returns `SourceStatus.ok=false` with the HTTP status;
   the merge step keeps its previous ads (do not flip them to `removed`) until N consecutive failures.
2. **Assisted manual import**: a bookmarklet run by a human on a normal browser session exports the
   current results page state (`__NEXT_DATA__` on Leboncoin, `window["initialData"]` on SeLoger,
   `__INITIAL_STATE__` on Homegate) to JSON committed under `pipeline/manual/<source>/*.json`; the
   weekly job ingests these files with the same mappers. Low volume, no bot traffic, no keys.
3. **Self-hosted runner on a residential line** (FR or CH) labelled `residential`, used only for
   protected portals, driving a real Chrome (Playwright, headful) at <= 1 page / 10 s. Solves IP
   reputation and TLS fingerprinting, not the ToS/legal question.
4. **Email alerts**: saved searches on Leboncoin, PAP, SeLoger, Homegate, ImmoScout24 delivered to a
   dedicated mailbox, parsed weekly (ad id, url, price, surface, commune), then enriched only from
   keyless sources. Needs a mailbox credential (GitHub secret).
5. **Paid channels** (need keys): unblocker APIs (Scrapfly ASP, ZenRows, ScrapingBee, Bright Data), Apify
   actors via API (Bien'ici actors from ~USD 1 per 1,000 results [V]), or a licensed feed (Melo, Stream
   Estate, Fluximmo, Yanport), the only legally clean route to Leboncoin/SeLoger volume.

## 9. Verification checklist for the first sprint (run from a normal machine)

- Bien'ici: `suggest.json` shape and whether zone ids equal `-<OSM relation id>`; max `size`; that
  `propertyType:["terrain"]` + zone filter really narrows results; `blurInfo.type` values; URL of a
  terrain ad; whether terrain ads fill `landSurfaceArea` or `surfaceArea`.
- Flatfox: `/pin` response shape and accepted filters; category/type code of building land; photo URLs.
- notaires: real XHR path and params, coordinate fields and precision, fee-inclusive price field.
- Green-Acres, immobilier.ch, Newhome: status codes from a GitHub-hosted runner (one-off workflow).
- Every portal: robots.txt and ToS clause on automated access, recorded in the connector header.

## Sources consulted (search results; none fetched first-hand)

- Bien'ici: [apify apikiy/french-realestate](https://apify.com/apikiy/french-realestate),
  [scrapyx](https://apify.com/scrapyx/bienici-properties-scraper),
  [logiover](https://apify.com/logiover/bien-ici-fr-scraper-france-real-estate),
  [toax4 OpenAPI](https://apify.com/toax4/bienici-scraper/api/openapi),
  [igolaizola](https://apify.com/igolaizola/bienici-scraper),
  [crawlerbros](https://apify.com/crawlerbros/bienici-scraper),
  [parseforge](https://apify.com/parseforge/bienici-real-estate-scraper),
  [lobstr best scrapers](https://www.lobstr.io/blog/best-bienici-scrapers),
  [lobstr tutorial](https://www.lobstr.io/fr/blog/comment-scraper-bien-ici-avec-python-et-requests-en-2023-1),
  [veille-immobiliere-Bordeaux](https://github.com/frankouassi90-del/veille-immobiliere-Bordeaux)
- Leboncoin: [Scrapfly guide](https://scrapfly.io/blog/posts/how-to-scrape-leboncoin-marketplace-real-estate),
  [Piloterr search API](https://docs.piloterr.com/v2/api-reference/leboncoin/search_api),
  [etienne-hd/lbc](https://github.com/etienne-hd/lbc), [lbc issue 17](https://github.com/etienne-hd/lbc/issues/17),
  [go-leboncoin protocols](https://pkg.go.dev/github.com/fallais/go-leboncoin/leboncoin/protocols),
  [durieux leboncoin](https://durieux.me/projects/leboncoin.html),
  [leadsbrary actor](https://apify.com/leadsbrary/leboncoin-real-estate-scraper),
  [LBC terrain 74](https://www.leboncoin.fr/cl/ventes_immobilieres/dp_haute-savoie/real_estate_type:3),
  [Legalis](https://www.legalis.net/actualite/condamnation-pour-extraction-prohibee-des-annonces-de-leboncoin-fr/),
  [LBC press release](https://presse.leboncoincorporate.com/actualites/la-cour-de-cassation-confirme-latteinte-aux-bases-de-donnees-du-site-leboncoin-par-entreparticuliers-com-c0bf-763e3.html)
- PAP: [memo23 actor](https://apify.com/memo23/pap-scraper), [PAP-php API.md](https://github.com/bodinsamuel/PAP-php/blob/master/API.md),
  [apikiy PAP (disabled)](https://apify.com/apikiy/pap-scraper), [PAP terrains 74](https://www.pap.fr/annonce/vente-terrains-haute-savoie-74-g438)
- Notaires: [saswave](https://apify.com/saswave/immobilier-notaires-fr-scraper),
  [webdata_labs](https://apify.com/webdata_labs/france-notaires-property-api),
  [terrains 74](https://www.immobilier.notaires.fr/fr/annonces-immobilieres/vente/terrain/haute-savoie-74),
  [immonot 74](https://www.immonot.com/tout-immobilier/D74/immobilier-notaire-haute-savoie.html)
- AVIV / others FR: [Scrapfly SeLoger](https://scrapfly.io/blog/posts/how-to-scrape-seloger-com-listing-real-estate-ads),
  [parsebird SeLoger](https://apify.com/parsebird/seloger-france-scraper),
  [seloger-php API.md](https://github.com/bodinsamuel/seloger-php/blob/master/API.md),
  [SeLoger terrains 74](https://www.seloger.com/immobilier/achat/74/bien-terrain/),
  [Logic-Immo terrains](https://www.logic-immo.com/index/terrain-a-vendre),
  [Figaro actor](https://apify.com/dadhalfdev/figaro-immobilier-scraper),
  [Green-Acres actor](https://apify.com/studio-amba/green-acres-scraper),
  [bargainhunter PR 15](https://github.com/NikkiKoole/bargainhunter/pull/15),
  [ParuVendu actor](https://apify.com/tagadanar/french-real-estate-paruvendu/api),
  [Entreparticuliers actor](https://apify.com/lexis-solutions/entreparticuliers-scraper/api)
- Switzerland: [Flatfox API docs](https://flatfox.ch/en/docs/api/), [solidcode Flatfox](https://apify.com/solidcode/flatfox-scraper),
  [parsebird Flatfox](https://apify.com/parsebird/flatfox-scraper),
  [Flatfox land example](https://flatfox.ch/en/flat/promenade-1-7270-davos/1554999/),
  [Scrapfly Homegate](https://scrapfly.io/blog/posts/how-to-scrape-homegate-ch-real-estate-property-data),
  [Homegate plots](https://www.homegate.ch/buy/plot/country-switzerland/matching-list),
  [Scrapfly ImmoScout24.ch](https://scrapfly.io/blog/posts/how-to-scrape-immoscout24-ch-real-estate-property-data),
  [IS24 plots GE](https://www.immoscout24.ch/en/plot/buy/canton-geneva),
  [immobilier.ch plots GE](https://www.immobilier.ch/en/buy/plot/geneva/page-1),
  [immobilier.ch actor](https://apify.com/lexis-solutions/immobilier-ch-scraper),
  [Comparis actor](https://apify.com/parsebird/comparis-ch-scraper),
  [Newhome actor](https://apify.com/unfenced-group/newhome-scraper),
  [tutti-api](https://github.com/filippofinke/tutti-api)
- Aggregators: [Melo notaires API](https://www.melo.io/logiciel-api-immobilier/immobilier-notaires-api),
  [Stream Estate on SeLoger API](https://stream.estate/fr/blog/api-seloger-existe-elle-alternatives)
