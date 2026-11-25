---
name: landscape-remove
description: Remove a dead or out-of-scope project from the AI Native Landscape. Deletes both language files and opens a pull request for a maintainer to review.
---

# Remove Project from AI Native Landscape

Dead projects are removed from the repository. There is no archive page and no `archived`, `inactive` or `unavailable` status: the only valid `status` is `tracked`, and a project that should no longer be listed has its data files deleted.

## When to Use

- User says "remove project", "delete project", "archive project", "deprecate project"
- User provides a project slug and wants to retire it
- User says "移除", "删除", "下架", "归档"
- During a health check when a project is confirmed dead
- User references a project that is no longer maintained

## Steps

### Step 1: Identify the Project

Accept project identifier:
- **Slug** (preferred): `landscape-remove langchain`
- **Name** (partial match): `landscape-remove "LangChain"`
- **Repo URL**: `landscape-remove https://github.com/langchain-ai/langchain`

If slug not given, search for it:

```bash
# By name
grep -rl "name:.*<partial-name>" data/projects/ | head -5

# By repo
grep -rl "github.com/<owner>/<repo>" data/projects/
```

### Step 2: Confirm the Reason

Check the repository before removing anything:

```bash
gh repo view <owner>/<repo> --json isArchived,pushedAt,stargazerCount
```

Valid reasons:
- Repo is archived on GitHub
- Repo returns 404 (deleted or private). A 404 can be temporary, so check again before removing
- No commits or releases for 6+ months
- Project announced end-of-life or recommends migration
- Out of scope, duplicate of another entry, or removal requested by the maintainer

If the repo was only renamed or transferred, do not remove the project: update `repo` instead (see `landscape-update`).

Confirm the target and the reason with the user before deleting.

### Step 3: Delete Both Language Files

```bash
git rm data/projects/<slug>.en.md data/projects/<slug>.zh.md
```

Do not set a status, and do not keep the files "for reference". Git history keeps the content if the project is ever resubmitted.

### Step 4: Clean Up What Only That Project Used

```bash
# References to the slug elsewhere (redirects, docs, other projects' content)
grep -rn "<slug>" public/_redirects data/ docs/ README.md README.zh.md

# Drops owners that no remaining project uses from data/avatars.json
npm run sync:avatars
```

If the project was removed because it was renamed into or superseded by another listed project, add a redirect from the old detail page to the new one in `public/_redirects` (see the existing entries). Otherwise add no redirect: the old URL returns 404.

### Step 5: Validate and Build

```bash
npm run validate
npm run build
```

### Step 6: Open a Pull Request

Commit on a branch and open a pull request. Do not push removals to `main` directly: a maintainer reviews and merges them. List every removed project by name, with its repo and the reason, in the description.

### Step 7: Report

Report to user:
- Project name, slug and repo
- Reason for removal
- Validation/build status
- Pull request link

## Bulk Removal

When removing multiple projects (e.g., from health check results):

1. Accept a list of slugs with reasons
2. Process each through Steps 2-4
3. Validate and build once at the end
4. Open one pull request listing every removed project and its reason

## Undo

To bring a project back, restore its files from git history (`git log --diff-filter=D -- data/projects/<slug>.en.md`) or resubmit it through `landscape-add`. It has to meet the inclusion standards again.

## Error Handling

| Error | Fix |
|-------|-----|
| Slug not found | List similar slugs, ask user to clarify |
| Repo is alive and maintained | Do not remove; report to user |
| Validation fails | Check that both language files were deleted, not just one |
| Build fails | Usually a leftover reference to the removed slug — check error output |
