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

## Inclusion Standards

A new project must meet every requirement below. The same list is published on the
[methodology page](https://landscape.jimmysong.io/methodology/), and the thresholds are
defined once as `INCLUSION` in `src/lib/landscape.mjs`.

1. A public GitHub repository that is not a fork and is not archived.
2. An open source license that GitHub can detect.
3. At least 200 GitHub stars.
4. The repository is at least 60 days old and has a commit in the last 90 days.
5. A software project, not an awesome list, prompt collection, documentation-only repository, or landing page.
6. Not already listed, and it fits an existing subcategory.

Meeting these requirements makes a project eligible for review; it does not guarantee a
listing. Maintainers also weigh relevance to AI Native systems and differentiation in
crowded categories.

### How submissions are triaged

The `triage` workflow (`scripts/triage-submission.mjs`) checks every submission issue and
every external pull request that adds a project. It posts one comment with the result of
each check and applies a label, acting as the **AI Native Landscape Bot** GitHub App
(`ai-native-landscape-bot[bot]`):

| Label | Meaning | What happens |
|---|---|---|
| `eligible` | All requirements are met | Stays open for maintainer review |
| `not-yet-eligible` | One or more requirements are not met | Closed as not planned |
| `duplicate` | The repository is already listed | Closed as not planned |
| `needs-info` | No valid GitHub repository could be found, or a PR touches unrelated files | Stays open until fixed |
| `exception` | Applied by a maintainer only | Star, age, and activity requirements are waived |

A submitter can comment `/recheck` to run the checks again; a closed `not-yet-eligible`
submission is reopened automatically once it qualifies. Each author may have at most two
open submissions at a time.

To check a submission locally without changing anything:

```bash
GITHUB_TOKEN=$(gh auth token) npm run triage -- --number 48 --dry-run
```

## Adding a New Project

### Option 1: GitHub Issue (Recommended for new contributors)

1. Go to [Submit Project](https://github.com/rootsongjc/ai-native-landscape/issues/new?template=add-project.yml).
2. Fill in the issue form with project details.
3. The automated check replies with the result. A maintainer reviews eligible projects and adds them.

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
description: Short English description of the project.
author: Organization
ossDate: '2025-01-01T00:00:00.000Z'
featured: false
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
description: 项目的中文简介。
author: Organization
ossDate: '2025-01-01T00:00:00.000Z'
featured: false
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
| `description` | Non-empty string in each file: English in `.en.md`, Chinese in `.zh.md`. |

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

`tracked` is the only valid value. A project that should no longer be listed is removed, see [Project Removal](#project-removal).

## Updating an Existing Project

1. Edit the relevant files in `data/projects/` (`<slug>.en.md` and `<slug>.zh.md`).
2. Run validation:

```bash
npm run validate
```

1. Open a pull request with a clear description of the change.

Common updates: category reclassification, URL changes, description improvements.

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

## Project Removal

Projects are removed when:

- The repository has been archived or deleted
- No commits or releases for 6+ consecutive months
- The project has announced end-of-life

To remove a project, delete both language files (`<slug>.en.md` and `<slug>.zh.md`) in a pull request, and run `npm run sync:avatars` to drop avatar entries no other project uses. Removed projects are not kept in the data; git history keeps the content if the project is resubmitted later. The weekly `health-check` workflow proposes removals for archived or deleted repositories in a pull request that a maintainer reviews and merges.
