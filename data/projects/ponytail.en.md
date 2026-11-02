---
name: ponytail
slug: ponytail
homepage: https://ponytail.dev
repo: https://github.com/DietrichGebert/ponytail
license: MIT
category: coding-devtools
subCategory: coding-agents
tags:
  - Agent Skill
  - Prompt Engineering
  - YAGNI
  - Code Review
description: >-
  An agent skill that makes your AI agent think like the laziest senior dev in
  the room — write only what the task needs and reuse what exists, never
  cutting validation, security, or accessibility. The best code is the code you
  never wrote.
author: DietrichGebert
ossDate: '2026-06-12'
featured: false
status: tracked
---

## Overview

Ponytail puts the laziest senior developer on the team inside your AI agent. The rule is never "fewest tokens" — it is write only what the task needs, reuse what the repo and the platform already provide, and never cut validation, error handling, security, or accessibility. In its published benchmark (Claude Code, 39 tasks, 5 runs each) that discipline produced 53% less code, 45% fewer tokens, and 98% of risky logic shipping with a test, versus 68% without the skill.

## Key Features

- Reuse-first behavior: before writing anything new, the agent looks for an existing component or platform capability that already solves the task
- `/ponytail-review` reads the code a change touches, not just the diff, checking bugs, security, real load, missing tests, speed, and what to cut
- `/ponytail-audit` maps entry points, data flow, and expected load across the whole repo, then ranks findings and says what to fix first
- The band: a strip above the Claude Code prompt showing per-task cost, tokens, agent time, code-reuse rate, and whether tests passed after the last change
- The board: a local page aggregating cost, agent time, tokens, and test status across every task and project, with import of past Claude Code sessions
- Works with roughly 20 agents via Claude Code plugin and Cursor rules forms

## Use Cases

- Stop agents from hand-building what the repo or the browser already provides
- Get senior-dev-style reviews that catch breakage in files the diff never touched
- Track what each agent task actually costs in tokens, money, and agent time

## Technical Details

- Installed as a Claude Code plugin (npm package `@dietrichgebert/ponytail`) or as Cursor rules, so the same behavioral instruction set loads across about 20 agents
- The instruction set encodes YAGNI as a decision procedure: inventory what exists (repo components, platform features) before writing, and treat validation, error handling, security, and accessibility as non-negotiable even when cutting scope
- `/ponytail-review` widens the review window from the diff to the code the change touches and reports each finding as what the code does, what goes wrong, the fix, and the consequence of skipping it; `/ponytail-audit` runs the same checks repository-wide after mapping entry points and data flow
- The band hooks into Claude Code 2.1.290+ UI state to render live per-task metrics; the board is a local page reading session data from `~/.config/ponytail/band/`, and `/ponytail band import` backfills past Claude Code sessions — all data stays on the machine
