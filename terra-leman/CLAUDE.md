# Terra Léman — project notes for agents

Interactive 3D map of land (and other property) for sale in the Greater Geneva basin
(Genevois haut-savoyard, Pays de Gex, Salève, Voirons, Canton of Geneva), aggregated from
several listing portals, with a reconstruction of each listing's cadastral parcel and a
reliability score for that contour.

## Layout

```
terra-leman/
  shared/     data contract (types.ts) + area of interest (aoi.ts) — no dependencies, imported by both sides
  pipeline/   Node 22 + TypeScript ingestion pipeline (run with tsx), writes web/public/data/*
  web/        Vite + React + TypeScript + MapLibre GL web app (static site)
  docs/       research notes and architecture docs
```

## Conventions

- UI text and pipeline-generated labels/explanations are in **French**; code, comments and docs for
  developers are in English.
- TypeScript everywhere, ESM, relative imports **with the `.ts` extension** in `pipeline/` and `shared/`.
- `shared/types.ts` is the single source of truth for the published data files. Change it first,
  then both sides.
- Coordinates WGS84 `[lon, lat]`, areas m², distances m, dates ISO 8601.
- No API keys are required anywhere (all basemaps, geodata and portals used are keyless).
- Be polite with portals: throttled requests (see `pipeline/src/lib/http.ts`), weekly sync, only
  metadata + links + hotlinked photos are stored.

## Commands

```bash
cd pipeline && npm ci && npm run sync          # full sync (needs internet: gouv.fr, ign, sitg, portals)
cd pipeline && npm test && npm run typecheck
cd web && npm ci && npm run dev                 # local app on http://localhost:5173
cd web && npm run build                         # static build in web/dist
```

The weekly sync runs in GitHub Actions (`.github/workflows/terra-leman-sync.yml`) and commits the
refreshed `web/public/data/*` files.
