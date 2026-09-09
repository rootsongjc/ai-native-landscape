---
name: TeamAI CLI
slug: teamai-cli
homepage: null
repo: https://github.com/Tencent/teamai-cli
license: MIT
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - AI Agent
  - CLI
  - MCP
  - Dev Tools
  - Team Collaboration
description: >-
  TeamAI CLI from Tencent manages team-wide skills, rules, MCP servers, and knowledge across Claude Code, Codex, Cursor,
  and other AI coding agents from a single shared git repo.
author: Tencent
ossDate: '2026-04-27T09:42:49.000Z'
featured: false
status: tracked
---

## Overview

TeamAI CLI is Tencent's open-source tool for making teams "AI native" by managing skills, rules, docs, agents, hooks, and MCP servers in one shared git repo and distributing them to every member's AI coding tools. Admins push updates through a review-and-merge flow, and each member's agents pick up changes automatically on session start. Beyond distribution, it accumulates team experience into a searchable knowledge base and mines session friction into shared learnings.

## Key Features

- Centralized harness distribution: skills, rules, agents, hooks, MCP configs, env, and packages synced to Claude Code, Codex, Cursor, CodeBuddy, OpenCode, Qoder, and more
- `push → MR → review → pull` workflow: admins publish via merge requests; a SessionStart hook pulls the latest harness into every member's tools with no manual sync
- Team knowledge recall: before a task, an AI subagent searches accumulated learnings and a codebase knowledge graph, returning structured summaries with source-file references
- Friction-based experience sharing: a Stop hook scores sessions by interruptions, tool-call denials, and retries, then prompts a `/teamai-share-learnings` summary pushed to the team repo
- Distribution controls for admins: role-to-namespace mappings, tag subscriptions, and subscribing to other teams' or shared skill repos

## Use Cases

- Standardizing prompts, rules, and tool configs across a team's many AI coding agents
- Propagating vetted skills and best practices through a reviewed MR flow instead of ad-hoc copies
- Letting new agents recall prior troubleshooting lessons and codebase structure before working on a task
- Tracking team AI usage with weekly digests, privacy-scrubbed session summaries, and a live dashboard

## Technical Details

- Ships as an npm package installed globally (`teamai`); harness resources stored in git — works with GitHub, GitLab, GitCode, CNB, TGit, and private Git services
- Recall search combines BM25 scoring with graph-boosted re-ranking; a relevance precheck (`teamai recall --check`) skips retrieval entirely for unrelated tasks
- Codebase knowledge graph built by two parallel extraction tracks: a WASM tree-sitter AST track (TypeScript/JavaScript, Python, Go) resolving `DEPENDS_ON` / `REFERENCES` / `IMPLEMENTS` edges with confidence weights, plus a regex heuristic track for all other languages with automatic fallback
- Team Improvement tooling: `teamai recall maintenance` archives low-confidence learnings and flags stale skills; `teamai digest`/`session save`/`teamai dashboard` report token usage, intervention rate, and knowledge-base health
- Session friction scoring counts only high-signal events (user interruptions, tool-call denials, failing-tool retries) — routine long sessions do not trigger learning suggestions
