---
name: add-project
description: Add a new project to the AI Native Landscape from a GitHub URL or GitHub issue requesting inclusion.
---

# Add Project to AI Native Landscape

Add a new open-source project to the landscape catalog. Accepts either a GitHub repository URL or a GitHub issue that requests project inclusion.

## When to Use

- User provides a GitHub URL and asks to add it to the landscape
- User references a GitHub issue requesting a project be listed
- User says "add project", "include this project", "list this project", or similar
- User pastes a GitHub issue URL about project submission

## Steps

### Step 1: Extract Project Info

**From GitHub URL:**

1. Parse the GitHub URL to get `owner/repo`
2. Fetch repo metadata via `gh repo view <owner/repo> --json name,description,homepageUrl,licenseInfo,stargazerCount,createdAt,repositoryTopics,owner`
3. Use the repo description, topics, and README to understand the project

**From GitHub Issue:**

1. Fetch the issue via `gh issue view <number> --json title,body,comments`
2. Extract the GitHub repo URL from the issue body or comments
3. If multiple repos are mentioned, list them and ask the user which one(s) to add
4. Then proceed as "From GitHub URL" above

### Step 2: Classify the Project

You MUST determine the correct `category` and `subCategory` by examining the project's topics, description, README, and tags. Reference the full taxonomy:

**Read the taxonomy file first:**
```
cat data/categories.yaml
```

**Categories and their subcategories:**

| Category | Subcategories |
|----------|--------------|
| `agents` | `agent-frameworks`, `agent-orchestration` |
| `rag-knowledge` | `agent-memory-context`, `vector-databases`, `retrieval-indexing`, `document-processing`, `knowledge-graphs`, `data-connectors` |
| `models-modalities` | `foundation-models`, `model-toolkits`, `multimodal`, `audio-speech`, `image-video-generation` |
| `inference-serving` | `model-serving`, `inference-runtimes`, `sandboxes-runtimes`, `gpu-acceleration`, `edge-local-inference`, `llm-routing-gateways` |
| `training-optimization` | `training-frameworks`, `finetuning-alignment`, `experiment-mlops`, `evaluation-benchmarks`, `observability-monitoring`, `prompt-quality`, `safety-guardrails`, `optimization-simulation` |
| `coding-devtools` | `mcp-tools`, `coding-agents`, `ide-cli-tools`, `sdk-frameworks`, `browser-automation`, `developer-utilities` |
| `applications-products` | `chat-interfaces`, `desktop-clients`, `workflow-automation`, `low-code-builders`, `productivity-tools` |
| `platform-infra` | `cloud-native-ai`, `data-platforms`, `security-policy`, `deployment-operations` |

**Auto-classification hints** — check the project's GitHub topics and README keywords against `TAG_PRIORITY_RULES` and `SUBCATEGORY_RULES` in `scripts/lib.mjs` (lines 12–48 for tag rules, lines 50–219 for subcategory rules). First match wins.

If unsure about classification, check existing projects in similar categories:
```bash
ls data/projects/ | grep -i "<keyword>"
```

### Step 3: Generate Slug

The slug must be **unique** and lowercase with hyphens only (`^[a-z0-9-]+$`).

```bash
# Check for existing slug
ls data/projects/ | grep "^<slug>\."
```

Derive slug from repo name: lowercase, replace non-alphanumeric with hyphens, collapse consecutive hyphens. If the slug already exists, the project is already listed — report this to the user.

### Step 4: Check for Duplicates

```bash
# Check by repo URL
grep -r "github.com/<owner>/<repo>" data/projects/
```

If found, the project already exists. Report to user.

### Step 5: Create Project Files

Create **two** markdown files in `data/projects/` — one per language:

**File: `data/projects/<slug>.en.md`**
```markdown
---
name: <Project Name>
slug: <slug>
homepage: <homepage_url or null>
repo: https://github.com/<owner>/<repo>
license: <SPDX identifier or "Unknown">
category: <category-key>
subCategory: <subcategory-key>
tags:
  - <tag1>
  - <tag2>
description: <English description, 1-2 sentences>
logo: ''
author: <org or author name>
ossDate: '<ISO date from repo createdAt>'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

<2-3 sentences about what the project does>

## Key Features

- <feature 1>
- <feature 2>
- <feature 3>

## Use Cases

- <use case 1>
- <use case 2>

## Technical Details

- <notable technical detail>
```

**File: `data/projects/<slug>.zh.md`**
```markdown
---
name: <Project Name>
slug: <slug>
homepage: <homepage_url or null>
repo: https://github.com/<owner>/<repo>
license: <SPDX identifier or "Unknown">
category: <category-key>
subCategory: <subcategory-key>
tags:
  - <tag1>
  - <tag2>
description: <中文描述，1-2 句话>
logo: ''
author: <org or author name>
ossDate: '<ISO date from repo createdAt>'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

<2-3 句话介绍项目功能>

## 主要特性

- <特性 1>
- <特性 2>
- <特性 3>

## 使用场景

- <使用场景 1>
- <使用场景 2>

## 技术特点

- <关键技术特点>
```

**Tags**: Extract from GitHub topics. Lowercase. Examples: `Agent Framework`, `LLM`, `MCP`, `RAG`, `Vector Database`, `Inference`, `Cloud Native`.

### Step 6: Validate

```bash
npm run validate
```

This runs `scripts/validate-data.mjs` which checks:
- Schema compliance against `data/schema.project.json`
- All required fields present (`name`, `slug`, `repo`, `category`, `description` with both `zh` and `en`)
- Valid `category` + `subCategory` pair
- No duplicate slugs or repo URLs
- Description has both `zh` and `en`

If validation fails, fix the reported errors and re-run.

### Step 7: Build and Verify

```bash
npm run build
```

Verify the new project appears in the built output:
```bash
grep -l "<slug>" dist/data/projects.json 2>/dev/null || grep "<slug>" dist/data/index.json | head -3
```

### Step 8: Report Results

After successful addition, report:
- Project name and slug
- Category → SubCategory assignment
- Tags applied
- Validation and build status

## Required Fields Checklist

- [ ] `name` — project display name
- [ ] `slug` — unique lowercase hyphenated identifier
- [ ] `repo` — GitHub URL (must be `github.com`)
- [ ] `category` — valid key from `data/categories.yaml`
- [ ] `subCategory` — valid key belonging to the chosen category
- [ ] `description.zh` — Chinese description (1-2 sentences)
- [ ] `description.en` — English description (1-2 sentences)
- [ ] `license` — SPDX identifier or "Unknown"
- [ ] `author` — organization or maintainer name
- [ ] `ossDate` — ISO date from repo creation
- [ ] Two files created: `<slug>.en.md` and `<slug>.zh.md`

## Error Handling

| Error | Fix |
|-------|-----|
| Duplicate slug | Project already exists, report to user |
| Duplicate repo URL | Project already exists under different slug |
| Unknown category/subCategory | Check `data/categories.yaml` for valid keys |
| Validation fails | Read error output, fix fields, re-run `npm run validate` |
| Build fails | Check error output, usually a data issue |
| Cannot determine category | Ask the user which category fits, provide the list |

## Batch Mode (Multiple Projects)

When adding multiple projects (e.g., from a list of GitHub URLs):
1. Process each project independently through Steps 1-5
2. Validate all at once with `npm run validate`
3. Build once with `npm run build`
4. Report summary of all additions
