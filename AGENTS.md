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
```

No test framework configured.

## Architecture

### Data Layer

- **Project data**: `data/projects/<slug>.{zh,en}.md` — ~600 projects, bilingual markdown with YAML frontmatter
- **Taxonomy**: `data/categories.yaml` — two-level hierarchy (category → subCategory)
- **Schema**: `data/schema.project.json` — JSON Schema for project validation (ajv)
- **Exports**: `exports/` — generated JSON output

Project frontmatter fields: `name`, `slug`, `homepage`, `repo`, `license`, `category`, `subCategory`, `tags`, `logo`, `status`, `author`, `ossDate`, `featured`, `thumbnail`, `source`, plus `score` object (`health`, `activity`, `community`, `quality`, `sustainability`).

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

- `LandscapeGrid.astro` — main grid orchestrator (search + filters + cards)
- `LandscapeToolbar.astro` — search/filter controls
- `LandscapeCategory.astro` — category section rendering
- `LandscapeCard.astro` — individual project card with scores
- `ProjectDetail.astro` — full project detail page (35K, largest component)
- `LandscapeHeatmap.astro` — visual heatmap view
- `LandscapeIndex.astro` — index/search page

### Scoring

Scores fetched at runtime from `ai-oss-rank-worker.jimmysong.io`. Four dimensions (0–100): health, activity, community, quality. Tier labels: Must Watch (90+), Strong Recommendation (80+), Recommendation (70+), Worth Watching (60+), General (below).

### i18n

Bilingual content managed as paired files (`<slug>.zh.md` + `<slug>.en.md`). Language routing via `/en/` and `/zh/` path prefixes.

## Key Conventions

- ES modules throughout (`"type": "module"`)
- Tag-based auto-classification: `TAG_PRIORITY_RULES` in `lib.mjs` maps tags to subcategories; rules run in order, first match wins
- All projects must have both `category` and `subCategory` — if unclassifiable, project shouldn't be listed
- Astro static output mode — all pages pre-rendered at build time
- No client-side framework; interactivity via vanilla JS in `<script>` tags inside Astro components
