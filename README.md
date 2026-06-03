# AI Native Landscape

[中文文档](./README.zh.md) | **English**

> A curated, scored directory of open-source AI Native projects — agents, MCP servers, RAG frameworks, AI runtimes, and infrastructure.

**Live site**: [landscape.jimmysong.io](https://landscape.jimmysong.io)

## Features

- **Landscape browsing** — Grid and heatmap views with category filtering
- **Project detail pages** — Scores, GitHub metrics, bilingual descriptions (`/projects/<slug>/`)
- **Category pages** — Browse by technology domain (`/categories/<key>/`)
- **Scoring system** — 5-dimension evaluation (activity, community, quality, sustainability → health)
- **Bilingual** — Full Chinese (zh) and English (en) support
- **Data export** — JSON and CSV formats
- **Community contributions** — Submit projects via GitHub Issues

## Quick Start

```bash
npm install
npm run build
npm run dev
```

Visit `http://127.0.0.1:4173/`

## Project Structure

```plaintext
ai-landscape/
├── data/
│   ├── projects/          # Bilingual markdown files (.en.md, .zh.md)
│   ├── categories.yaml    # Two-level taxonomy (category → subCategory)
│   └── schema.project.json # JSON Schema for project validation
├── scripts/               # Build, validation, migration, export scripts
├── src/
│   ├── components/        # Astro components (ProjectDetail, LandscapeGrid, etc.)
│   ├── layouts/           # BaseLayout with SEO meta tags
│   ├── lib/               # Shared utilities, UI strings, scoring logic
│   ├── pages/             # File-based routing (index, projects/[slug], categories/[key])
│   └── styles/            # Global CSS with light/dark theme variables
├── public/                # Static assets (OG image, favicon, manifest)
└── docs/                  # Documentation
```

## Data Model

Each project is a pair of Markdown files with YAML frontmatter:

| Field | Required | Description |
| ----- | -------- | ----------- |
| `name` | ✅ | Project display name |
| `slug` | ✅ | URL-safe identifier |
| `repo` | ✅ | GitHub repository URL |
| `category` | ✅ | Top-level category key (e.g., `agents`, `rag-knowledge`) |
| `description` | ✅ | Bilingual `{en, zh}` one-liner |
| `subCategory` | | Second-level classification |
| `homepage` | | Project website URL |
| `license` | | Open source license |
| `tags` | | String array of tags |
| `author` | | Author or organization |
| `ossDate` | | Date open-sourced |
| `status` | | Reference status (`tracked`, `recommended`, etc.) |
| `score` | | Scoring dimensions (optional, runtime scores from API) |

### Scoring

Scores (0–100) are fetched at runtime from an external API and cached client-side:

| Dimension | What it measures |
| --------- | ---------------- |
| **health** | Overall project health (weighted composite) |
| **activity** | Commit frequency, release cadence, issue response |
| **community** | Contributors, PR merge speed, discussion volume |
| **quality** | Stars, forks, dependency graph, external references |
| **sustainability** | Maintenance history, team stability, roadmap |

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run validate` | Validate all project data against JSON Schema |
| `npm run build:index` | Build search index |
| `npm run export` | Export projects as JSON/CSV |
| `npm run generate:og` | Generate OG images for all projects |
| `npm run build` | Full build pipeline (validate → index → export → OG → astro build) |
| `npm run dev` | Start dev server at `127.0.0.1:4173` |

## Deployment (Cloudflare Pages)

- **Build command**: `npm ci && npm run build`
- **Output directory**: `dist`
- **Production domain**: `landscape.jimmysong.io`

## AI-Powered Skills

Search 600+ curated open-source AI projects by natural language, directly inside your AI coding tool.

### Install for Claude Code

```bash
npx skills add rootsongjc/ai-native-landscape --skill landscape-search
```

### Install for Cursor, Copilot, Codex, Cline, Aider

```bash
npx landscape-search
```

This launches an interactive installer that supports 6 AI coding tools. See [`packages/landscape-search/`](./packages/landscape-search/) for details.

### After Installing

Ask your AI assistant in natural language — e.g.:

> "Find open-source agent frameworks for building multi-agent systems"
> "帮我找一个支持中文的 RAG 框架"

### For Maintainers & Contributors (requires cloning this repo)

These skills are only available inside this repository:

| Skill | What it does |
| ----- | ------------ |
| **`/landscape-add`** | Add a new project from a GitHub URL or issue |
| **`/landscape-update`** | Sync a single project's metadata from GitHub |
| **`/landscape-sync`** | Batch sync all projects' metadata from GitHub |
| **`/landscape-batch`** | Bulk import projects from JSON, CSV, or URL lists |
| **`/landscape-archive`** | Archive or deprecate a project |
| **`/landscape-health`** | Run health checks across all projects |
| **`/landscape-report`** | Generate statistics and analytics reports |

## Contributing

See [CONTRIBUTING.md](./docs/contributing.md) for guidelines on adding projects and fixing data.

## Documentation

- [Architecture](./docs/architecture.md) — Component structure and data flow
- [Contributing](./docs/contributing.md) — How to add projects and submit changes
- [Deployment](./docs/deployment.md) — CI/CD and Cloudflare Pages setup

## License

Licensed under the [Apache License 2.0](./LICENSE).
