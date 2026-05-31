---
name: landscape-archive
description: Archive or deprecate a project in the AI Native Landscape. Set status to archived or inactive, record reason and date.
---

# Archive Project in AI Native Landscape

Remove or deprecate a project from active tracking. Sets `status` to `archived` or `inactive`, records the reason and date in both language files.

## When to Use

- User says "archive project", "remove project", "deprecate project", "mark inactive"
- User provides a project slug and wants to retire it
- User says "归档", "下架", "标记不活跃"
- During health check when a project is confirmed dead
- User references a project that is no longer maintained

## Steps

### Step 1: Identify the Project

Accept project identifier:
- **Slug** (preferred): `landscape-archive langchain`
- **Name** (partial match): `landscape-archive "LangChain"`
- **Repo URL**: `landscape-archive https://github.com/langchain-ai/langchain`

If slug not given, search for it:

```bash
# By name
grep -rl "name:.*<partial-name>" data/projects/ | head -5

# By repo
grep -rl "github.com/<owner>/<repo>" data/projects/
```

Confirm the target with user before proceeding.

### Step 2: Verify Current Status

```bash
head -20 data/projects/<slug>.en.md
```

Check current `status` field:
- `tracked` → can archive or set inactive
- `inactive` → can archive (escalation)
- `archived` → already archived, report to user

### Step 3: Determine Target Status

| Status | When to use |
|--------|-------------|
| `inactive` | Project still exists but low/no activity. May revive. |
| `archived` | Project is dead, repo archived, or superseded. Permanent. |

Ask user which status if not specified. Default: `archived`.

### Step 4: Record Archive Reason

Add an `archiveReason` and `archiveDate` to frontmatter. Also clear `featured: false`.

**Update both files:**

```bash
# Edit data/projects/<slug>.en.md
```

Change:
```yaml
status: archived
featured: false
archiveDate: '<YYYY-MM-DD>'
archiveReason: '<reason>'
```

Valid reasons:
- `repo-archived` — GitHub repo is archived
- `no-activity-12m` — No commits in 12+ months
- `superseded-by:<other-slug>` — Replaced by another project
- `not-ai-native` — Doesn't fit landscape scope
- `user-request` — Manual removal request
- `duplicate:<other-slug>` — Duplicate of another entry
- Custom reason string

### Step 5: Update Both Language Files

Apply identical frontmatter changes to both:

- `data/projects/<slug>.en.md`
- `data/projects/<slug>.zh.md`

Fields to update in both:
- `status` → new value
- `featured` → `false`
- `archiveDate` → today's date
- `archiveReason` → reason string

### Step 6: Validate

```bash
npm run validate
```

Ensure schema still passes. Archived projects remain valid entries.

### Step 7: Build and Verify

```bash
npm run build
```

Verify the project still appears but with correct status:
```bash
grep -A2 '"slug": "<slug>"' dist/data/projects.json | head -5
```

### Step 8: Report

Report to user:
- Project name and slug
- Previous status → New status
- Archive reason recorded
- Validation/build status

## Bulk Archive

When archiving multiple projects (e.g., from health check results):

1. Accept a list of slugs with reasons
2. Process each through Steps 2-5
3. Validate and build once at the end
4. Report summary: X archived, Y inactive, Z skipped (already archived)

## Undo

To restore an archived project:
1. Set `status: tracked`
2. Remove `archiveDate` and `archiveReason` fields
3. Optionally set `featured: true` if appropriate
4. Validate and build

## Error Handling

| Error | Fix |
|-------|-----|
| Slug not found | List similar slugs, ask user to clarify |
| Already archived | Report current status and reason, ask if restore needed |
| Validation fails | Check frontmatter syntax, ensure required fields present |
| Build fails | Usually data issue — check error output |
