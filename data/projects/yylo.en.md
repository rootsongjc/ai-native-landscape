---
name: YYLO
slug: yylo
homepage: https://www.npmjs.com/package/@yylo/cli
repo: https://github.com/yylo-dev/yylo
license: MIT
category: agents
subCategory: agent-orchestration
tags:
  - CLI
  - Agent Orchestration
  - Coding Agents
  - Workflow
  - Worktree
  - Merge Queue
  - Receipts
description: A command-line orchestrator for coding agents that gives developers a quick agent loop and operators typed task, validation, merge, and release-readiness boundaries with receipt-backed evidence.
author: yylo-dev
ossDate: '2026-01-06'
featured: false
status: tracked
---

## Overview

YYLO ("why-lo") is a command-line orchestrator for coding agents, repeatable workflows, and receipt-backed repository changes. It serves two audiences at once: developers get a fast agent loop (`yy pi`, iteration-bounded runs, live terminal sessions), while project operators get typed task, validation, merge, and release-readiness boundaries — every task executes in its own branch/worktree, the merge queue owns one-task composition, and declared receipt hashes plus terminal manifests provide immutable evidence for agent runs.

## Key Features

- Equivalent `yylo` and `yy` launchers with `ypl` (`yy pi --live`) interactive terminal agent sessions; execution summaries print iterations, tool calls, cost, and session IDs after each run
- Typed task lifecycle (`task start|run|status|checkpoint|preflight|finish`) where each task works in a dedicated branch/worktree with the protected target SHA frozen at start
- One-task merge composition (`merge status|land|project`) using native Git and expected-old ref protection; a moved target forces recomposition, and conflicts stay private to their task
- Observable command execution (`watch exec|status|await`) with bounded logs and terminal state instead of scrollback reconstruction, plus content-addressed validation evidence (`evidence run|status|await`)
- Repeatable workflow runner driven by reviewed YAML with loop metadata injected per step (`YYLO_LOOP_ID`, `YYLO_ITERATION`, …), dry-run linting, and recover-attempt resuming only the first invalid step
- Versioned machine-output contract (`--format json|ndjson --raw`) for task, merge, and integration commands

## Use Cases

- Running a coding agent in bounded iterations with an outer command workflow (`yy loop -n 5 --step 'yy pi …' --step 'npm test'`)
- Structuring agent-driven feature delivery as typed tasks that land one at a time through a protected merge queue
- Keeping immutable audit evidence for agent runs — receipts, terminal manifests, stdout/stderr, and session IDs retained per run
- Managing Simple (single checkout) versus Advanced (controller + isolated worktrees + managed merging) workspace modes per project

## Technical Details

- npm package `@yylo/cli` (stable 0.2.x on `@latest`, prereleases on `@next`); Node.js 20.10+, Git required; `yy init` bootstraps `.juno_task/` without committing or rearranging existing dirty repositories
- Safety invariants: `finish` independently enforces scope, dirty-byte, runtime, hydration, requirements, ownership, and selected-validation checks and requires a clean committed tip before queueing — merge launches no models, chooses no reviewers, and schedules no suites
- `merge land` selects one immutable task source, composes in a private detached candidate worktree, and uses Git expected-old ref updates; Git success and Ledger projection are separate, so a projection retry never repeats integration
- Skill content is versioned independently in the `yylo-dev/yylo-skills` repository and installed on demand (`skills install|update|status`), staged through `npx skills add` with a shallow exact-tag Git clone fallback; differing canonical directories are refused without `--force`
- Records and evaluation delegate to separately installed canonical packages — YYLO Ledger (Git-native record/task store) and YYLO Benchmark — rather than bundling alternate implementations
- Controller-generation upgrades migrate automatically with diagnostic `doctor` commands; whole-workspace relocation runs through plan/apply/verify scripts that bind the Git common directory, HEAD/ref, task-state hash, and old/new roots, refusing dirty, stale, tampered, or replayed inputs
- First-run canary (`yy watch exec pwd`) completes without contacting any model provider; `doctor workspace` is intentionally nonzero on actionable topology problems and never mutates the workspace
