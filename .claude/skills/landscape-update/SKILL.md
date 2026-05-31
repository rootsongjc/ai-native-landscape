---
name: landscape-update
description: Update a single project's metadata from GitHub API — sync stars, license, description, topics, and activity data.
---

# Update Project in AI Native Landscape

Sync a single project's metadata from its GitHub repository. Keeps the landscape data fresh without re-adding the project.

## When to Use

- User says "update project", "sync project", "refresh project"
- User provides a slug and wants latest data: `landscape-update langchain`
- User says "更新项目", "同步项目"
- Periodic maintenance to keep metadata accurate
- After a project has a major release or rebranding

## Steps

### Step 1: Identify the Project

Accept project identifier (same as archive skill):
- **Slug** (preferred): `landscape-update langchain`
- **Name** (partial): `landscape-update "LangChain"`
- **Repo URL**: `landscape-update https://github.com/langchain-ai/langchain`

If slug not given, find it:
```bash
grep -rl "name:.*<partial-name>" data/projects/ | head -5
grep -rl "github.com/<owner>/<repo>" data/projects/
```

### Step 2: Read Current Data

```bash
head -25 data/projects/<slug>.en.md
```

Note current values for: `name`, `description`, `license`, `tags`, `homepage`, `author`, `ossDate`.

### Step 3: Fetch Fresh GitHub Data

```bash
gh repo view <owner>/<repo> --json name,description,homepageUrl,licenseInfo,stargazerCount,repositoryTopics,owner,createdAt,updatedAt,isArchived,isArchivedAt,latestRelease
```

Extract:
- `name` — may have changed
- `description` — GitHub description
- `homepageUrl` — project website
- `licenseInfo.spdxId` — license identifier
- `repositoryTopics[].name` — GitHub topics → tags
- `owner.login` — author/org
- `isArchived` — if true, suggest archiving
- `latestRelease.tagName` / `latestRelease.publishedAt` — latest release info
- `updatedAt` — last push/activity timestamp

### Step 4: Compare and Determine Changes

Compare GitHub data vs current frontmatter:

| Field | Update if |
|-------|-----------|
| `name` | Changed on GitHub |
| `description` | GitHub description differs |
| `license` | SPDX ID changed |
| `tags` | GitHub topics changed significantly |
| `homepage` | URL changed |
| `author` | Org renamed |
| `status` | GitHub `isArchived` is true |

**Present changes to user before applying.** Format:

```
Changes for <slug>:
  name: "Old Name" → "New Name"
  license: "MIT" → "Apache-2.0"
  tags: +[new-tag] -[removed-tag]
  homepage: null → "https://new-site.com"
```

### Step 5: Apply Updates to Both Files

Update frontmatter in both files:

- `data/projects/<slug>.en.md`
- `data/projects/<slug>.zh.md`

**English file** — update `description` with English description from GitHub.
**Chinese file** — translate new description if it changed. If `description` changed, provide updated Chinese translation.

If `tags` changed:
- Keep manually-added tags that aren't from GitHub
- Add new GitHub topics
- Remove topics no longer on GitHub (unless manually added)

**Special handling:**
- If `isArchived` is true on GitHub → warn user, suggest running `landscape-archive`
- If `homepage` changed → update both files
- If `name` changed → update `name` field, but keep `slug` unchanged

### Step 6: Update Content Sections (Optional)

If user requests full content refresh:

1. Fetch README: `gh repo view <owner>/<repo> --json readme`
2. Re-generate content sections based on README
3. Update `## Overview`, `## Key Features`, `## Use Cases`, `## Technical Details`
4. For Chinese file, translate updated sections

### Step 7: Validate and Build

```bash
npm run validate
npm run build
```

### Step 8: Report

Summarize what changed:
- Fields updated (list old → new)
- Files modified
- Validation/build status
- If project is archived on GitHub, recommend `landscape-archive`

## Batch Update

Update multiple specific projects:
1. Accept comma-separated slugs or "all tracked"
2. For each project, run Steps 2-5
3. Present all changes at once
4. Apply after confirmation
5. Validate and build once

## Error Handling

| Error | Fix |
|-------|-----|
| Slug not found | List matches, ask user |
| GitHub repo not found | Repo may be deleted, suggest archiving |
| GitHub API rate limit | Wait and retry, or use cached data |
| No changes detected | Report "already up to date" |
| License "NOASSERTION" | Set to "Unknown", note in report |
