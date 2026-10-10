---
name: Ordewell
slug: ordewell
homepage: https://ordewell.ai
repo: https://github.com/ordewell/ordewell
license: Apache-2.0
category: agents
subCategory: agent-orchestration
tags:
  - Task Orchestration
  - Coding Agents
  - Multi-Agent
  - CLI
  - TUI
  - VS Code Extension
description: A task orchestrator for coding agents that turns one goal into an editable plan of tasks — each with its own runner, model, and mode — executed in parallel git worktrees and verified before anything reaches your branch.
author: ordewell
ossDate: '2026-07-31'
featured: false
status: tracked
---

## Overview

Ordewell turns a goal into a plan you can read and change before anything runs. A planner researches your repository, asks about whatever you left vague, and hands back a dependency graph of tasks where each task names the coding agent, model, and thinking effort it will use. Independent tasks run in parallel, each in its own git worktree, and nothing reaches your branch until you have reviewed the result. Claude Code, Codex, and OpenCode are supported out of the box and can be mixed freely within one plan.

## Key Features

- An editable plan — change any task's prompt, runner, model, effort, or mode, add or remove tasks, and rewire dependencies without another round trip to the model
- The right model for each task — a security refactor and a README update get different models, with every assignment visible before a token is spent
- Isolated execution — every code-changing task works on its own branch; passing work lands on one integration branch in plan order, and you choose when to merge
- Ops tasks in the right place and order — a deploy, cloud CLI call, or push runs as an ops task in your own checkout and waits until the change it depends on is merged
- Verdicts from evidence — completion is decided by the runner's own done signal (a tool call on the structured transport, or its completion marker as fallback), never by a model's opinion of its own work
- A planner that cannot write — it reads, asks, and plans; commands that would change your repository are refused

## Use Cases

- Breaking a feature goal ("add rate limiting, update the tests, document it") into an ordered plan executed by mixed Claude Code / Codex / OpenCode runs in parallel worktrees
- Assigning expensive models to security-critical tasks and cheap models to docs churn inside the same plan, with human review before merge
- Sequencing operational steps (deploy, push) so they only run after the code change they depend on has landed

## Technical Details

- npm package `@ordewell/cli` with a terminal UI, a VS Code extension (bundles its own core), a scripting CLI, and a local API — all sharing one core
- Task isolation via git worktrees: independent tasks execute in parallel on dedicated branches, and integration lands in plan order on a single integration branch
- Done-signal detection runs on the structured transport (Ordewell's own tool) with the runner's completion marker in output as fallback — structured transport and marker detection are deliberately separated from model self-reporting
- The planner is sandboxed to read-only operations on the repository and must route questions back to the user instead of guessing
- Planner can be a coding agent you already pay for (no extra API key) or any of 25 provider API keys
- Node.js 20+, git required; tmux optional for the terminal transport (one terminal window per task); Windows terminal UI runs under WSL
