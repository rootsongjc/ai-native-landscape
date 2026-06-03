# Contributing

Contributions are welcome. This guide covers adding projects, updating data, and submitting pull requests.

## Prerequisites

- Node.js 20+
- npm

## Local Setup

```bash
git clone https://github.com/rootsongjc/ai-native-landscape.git
cd ai-native-landscape
npm install
npm run dev          # http://127.0.0.1:4173
```

## Adding a New Project

### Option 1: GitHub Issue (Recommended for new contributors)

1. Go to [Submit Project](https://github.com/rootsongjc/ai-native-landscape/issues/new?template=add-project.yml).
2. Fill in the issue form with project details.
3. A maintainer will review and add the project.

### Option 2: Pull Request

1. Search the [landscape](https://landscape.jimmysong.io) to confirm the project is not already listed.

2. Create two markdown files in `data/projects/`:

**`data/projects/<slug>.en.md`**:

```markdown
---
name: Project Name
slug: project-name
homepage: https://example.com/
repo: https://github.com/org/repo
license: Apache-2.0
category: coding-devtools
subCategory: mcp-tools
tags:
  - AI Agent
  - MCP
description:
  en: Short English description of the project.
  zh: Short Chinese description of the project.
author: Organization
ossDate: '2025-01-01T00:00:00.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---
```

**`data/projects/<slug>.zh.md`**:

```markdown
---
name: Project Name
slug: project-name
homepage: https://example.com/
repo: https://github.com/org/repo
license: Apache-2.0
category: coding-devtools
subCategory: mcp-tools
tags:
  - AI Agent
  - MCP
description:
  en: Short English description of the project.
  zh: Short Chinese description of the project.
author: Organization
ossDate: '2025-01-01T00:00:00.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---
```

The markdown body below the frontmatter can contain extended project description in the respective language.

1. Validate the data:

```bash
npm run validate
```

1. Build to verify everything works:

```bash
npm run build
```

1. Commit and open a pull request.

### Required Fields

| Field | Rules |
|---|---|
| `slug` | Lowercase alphanumeric and hyphens only (`^[a-z0-9-]+$`). Must be unique. |
| `name` | Non-empty string. |
| `repo` | Valid GitHub repository URL. Must be unique across all projects. |
| `category` | Must match a top-level key from `data/categories.yaml`. |
| `subCategory` | Must match a subcategory key that belongs to the declared `category`. |
| `description.en` | Non-empty English description. |
| `description.zh` | Non-empty Chinese description. |

### Category and SubCategory Keys

Refer to `data/categories.yaml` for the full list. The 8 categories are:

- `agents` -- Agent Systems
- `rag-knowledge` -- Knowledge & Context
- `models-modalities` -- Models & Modalities
- `inference-serving` -- Inference & Runtime
- `training-optimization` -- Training, Evaluation & Optimization
- `coding-devtools` -- Developer Tooling
- `applications-products` -- Applications & Experience
- `platform-infra` -- Platform & Infrastructure

If you are unsure which category to use, leave `subCategory` empty and let the auto-classification rules in `scripts/lib.mjs` assign one based on your tags.

### Status Values

| Status | Meaning |
|---|---|
| `tracked` | Listed and actively tracked |
| `inactive` | No recent activity but not yet archived |
| `archived` | Project stopped maintenance or repository deleted |

## Updating an Existing Project

1. Edit the relevant files in `data/projects/` (`<slug>.en.md` and `<slug>.zh.md`).
2. Run validation:

```bash
npm run validate
```

1. Open a pull request with a clear description of the change.

Common updates: category reclassification, URL changes, description improvements, status changes.

## Fixing Data Issues

Run validation to identify problems:

```bash
npm run validate
```

The validator checks:

- Schema compliance against `data/schema.project.json`
- Category and subCategory keys exist and are correctly paired
- Duplicate slugs or repository URLs
- Missing bilingual descriptions
- Category concentration warnings

Fix the reported issues in the project markdown files and re-run validation.

## Pull Request Checklist

Before submitting a PR, verify:

- [ ] `npm run validate` passes with no errors
- [ ] `npm run build` completes successfully
- [ ] Both `.en.md` and `.zh.md` files are included for new projects
- [ ] `category` and `subCategory` match valid keys in `data/categories.yaml`
- [ ] `repo` is a valid GitHub URL
- [ ] No duplicate slugs or repositories
- [ ] Descriptions are present in both Chinese and English

The CI workflow (`.github/workflows/ci.yml`) runs `npm run build` on every push and pull request, which includes validation. PRs that fail validation cannot be merged.

## Project Archival

Projects are archived when:

- The repository has been archived or deleted
- No commits or releases for 6+ consecutive months
- The project has announced end-of-life

To archive a project, set `status: archived` in both language files. Archived projects remain in the data but are dimmed in the UI.
