# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Project Overview

AI OSS Landscape — standalone site deployed at `landscape.jimmysong.io`. Bilingual (zh/en) static catalog of AI open-source projects with scoring, search, filtering, and category browsing. Built with Astro 6, deployed to Cloudflare Pages.

## Commands

```bash
# Development
npm run dev                  # Dev server at 127.0.0.1:4173

# Data pipeline (run in order when setting up fresh)
npm run import:website       # Import project data from main jimmysong.io site
npm run migrate:projects-markdown  # Convert imported data to bilingual markdown
npm run migrate:taxonomy     # Update category taxonomy

# Build
npm run validate             # Validate project data against schema
npm run build:index          # Build search index from project data
npm run export               # Export data as JSON
npm run build                # Full pipeline: validate → build:index → export → astro build
npm run preview              # Preview built site

# Data validation
npm run validate             # Runs scripts/validate-data.mjs against data/schema.project.json

# Landscape map logos
npm run sync:avatars         # Resolve new GitHub owners into data/avatars.json (incremental; --force to redo all)

# Project levels
npm run sync:levels          # Snapshot score API signals into data/signals.json and report level changes (--dry-run to preview)
```

Script unit tests use the Node.js built-in runner: `npm test` (files matching `scripts/*.test.mjs`).

Submission triage: `npm run triage -- --number <n> --dry-run` checks an issue or pull request against the inclusion standards (`INCLUSION` in `src/lib/landscape.mjs`). The `triage` workflow runs it on every submission.

## Architecture

### Data Layer

- **Project data**: `data/projects/<slug>.{zh,en}.md` — ~600 projects, bilingual markdown with YAML frontmatter
- **Taxonomy**: `data/categories.yaml` — two-level hierarchy (category → subCategory)
- **Schema**: `data/schema.project.json` — JSON Schema for project validation (ajv)
- **Exports**: `exports/` — generated JSON output
- **Signals**: `data/signals.json` — per-repository snapshot (health score, age, contributors, commits in the last year, days since last commit) written by `npm run sync:levels`. Project levels and the catalog order are derived from it at build time. Never edit entries by hand
- **Avatars**: `data/avatars.json` — GitHub owner → numeric avatar id, written by `npm run sync:avatars`. The landscape map needs the direct `avatars.githubusercontent.com/u/<id>` URL because it is CORS-enabled and can be drawn into the PNG/PDF export; owners missing from the file still show a logo on the page but are exported as initials. Run the script after adding projects.

Project frontmatter fields: `name`, `slug`, `homepage`, `repo`, `license`, `category`, `subCategory`, `tags`, `logo`, `status`, `author`, `ossDate`, `thumbnail`, `source`, plus `score` object (`health`, `activity`, `community`, `quality`, `sustainability`).

### Scripts (`scripts/`)

All data processing lives in `scripts/`. Key file: **`lib.mjs`** (26K) — shared data loading, project normalization, tag-based auto-classification (`TAG_PRIORITY_RULES`, `SUBCATEGORY_RULES`), and index building. All other scripts import from it.

Data pipeline: `loadProjectDocuments()` → merge bilingual files → AJV validate → `buildLandscapeIndex()` → categorized index.

### Pages (`src/pages/`)

- `index.astro` — main landscape grid
- `projects/[slug].astro` — project detail (generates `/projects/<slug>/` and `/en/projects/<slug>/`)
- `categories/[key].astro` — category landing pages
- `methodology.astro`, `about.astro`, `submit.astro` — static pages
- `en/` and `zh/` — language-specific page variants

### Components (`src/components/`)

- `LandscapeGrid.astro` — homepage orchestrator; shows the landscape map by default with a Landscape/List switch (`?display=list`, remembered in `localStorage`) to the category overview + directory (search + filters + cards)
- `LandscapeToolbar.astro` — search/filter controls
- `LandscapeCategory.astro` — category section rendering
- `LandscapeCard.astro` — individual project card with scores
- `ProjectDetail.astro` — full project detail page (35K, largest component)
- `LandscapeHeatmap.astro` — visual heatmap view
- `LandscapeMap.astro` — CNCF-style landscape picture, the default homepage view (category boxes → subcategory boxes → logo tiles), with hover/click detail popover, search highlight, zoom, fullscreen, and client-side PNG/PDF export (canvas + `jspdf`)
- `LandscapeIndex.astro` — index/search page

### Scoring

Scores fetched at runtime from `ai-oss-rank-worker.jimmysong.io`. Four dimensions (0–100): health, activity, community, quality. Tier labels: Must Watch (90+), Strong Recommendation (80+), Recommendation (70+), Worth Watching (60+), General (below).

### Levels

Every project has a computed level: `mature`, `growing`, or `emerging` (deliberately not foundation vocabulary such as graduated/incubating/sandbox — the site belongs to no foundation). A level measures project health: the overall health score is worth up to 4 points, and contributor base, sustained activity and track record up to 2 each. Star count, foundation membership and vendor neutrality are deliberately not part of the standard. `DIMENSIONS` and `LEVELS` in `src/lib/levels.mjs` hold the numbers and are rendered on the methodology page, so the published standard and the computation cannot drift.

`loadProjects()` attaches `level`, `levelPoints`, `levelTotal` and `signals`, and sorts by level → points → health → name, which is the default order of every category and subcategory. Mature projects get a 2×2 tile in the landscape map. The weekly `sync-levels` workflow refreshes the snapshot and opens a pull request when a level changes.

There is no `featured` field and no manual override: to change an outcome, change the standard for all projects.

### i18n

Bilingual content managed as paired files (`<slug>.zh.md` + `<slug>.en.md`). Language routing via `/en/` and `/zh/` path prefixes.

## Key Conventions

- ES modules throughout (`"type": "module"`)
- Tag-based auto-classification: `TAG_PRIORITY_RULES` in `lib.mjs` maps tags to subcategories; rules run in order, first match wins
- All projects must have both `category` and `subCategory` — if unclassifiable, project shouldn't be listed
- `level` is computed, never stored in project frontmatter; do not add `featured` or any other hand-picked ranking field (the schema rejects it)
- `status` is always `tracked`. Dead projects (repo archived or deleted, or no longer maintained) are removed from the repository: delete both language files in a pull request. Do not add an archived/inactive status or an archive page. The weekly `health-check` workflow proposes removals in a pull request for a maintainer to merge
- Astro static output mode — all pages pre-rendered at build time
- No client-side framework; interactivity via vanilla JS in `<script>` tags inside Astro components
