---
name: archify
slug: archify
homepage: https://archify.si
repo: https://github.com/tt-a1i/archify
license: Apache-2.0
category: coding-devtools
subCategory: developer-utilities
tags:
  - Agent Skills
  - Diagrams
  - Visualization
  - Software Architecture
description: >-
  An agent skill that turns ideas, plans, or codebases into interactive, self-contained HTML diagrams — architecture,
  sequence, workflow, ERD and more — with typed JSON sources, validation receipts, and chat-driven refinement.
author: tt-a1i
ossDate: '2026-04-15'
featured: false
status: tracked
---

## Overview

Archify is an agent skill for Claude Code, Codex, Cursor, and OpenCode that turns anything you want to understand, plan, or share into an interactive visual. Start from a one-sentence description or ask your agent to read a repository, and Archify produces a standalone interactive HTML file you can explore, customize, and send to others. It also builds "explainer" pages — the conclusion first, then one panel per question with validated diagrams and numbered sources.

## Key Features

- Ten diagram types: Architecture, Workflow, Sequence, Data Flow, Lifecycle, ERD, Class, Tree, Timeline, and Waterfall, each with prompt guidance for what to include
- Source-backed diagrams: trace a real repository at a pinned commit and keep typed JSON sources for targeted iteration ("add Redis", "highlight the rollback path")
- Explainer pages that answer a question as one HTML page: conclusion first, steps beside the diagram they walk through, claims citing numbered sources
- Architecture Delta compares validated Before/Delta/After snapshots with a machine receipt for design and PR review
- Self-contained HTML output with light/dark themes, node details, path tracing, PNG/WebP/JPG export, and share cards — viewable without installing anything
- Zero-dependency CLI for guidance and validation (`node archify/bin/archify.mjs guide ...`)

## Use Cases

- Mapping a repository's runtime architecture into an interactive diagram for onboarding or documentation
- Explaining a cache-miss request path, an agent workflow, or an incident timeline to teammates
- Producing one-page answers with evidence for design reviews and investigations
- Turning travel plans, learning maps, and other non-code plans into interactive artifacts

## Technical Details

- Implemented as an agent skill: markdown instructions the agent follows, plus a typed JSON diagram schema the agent fills in; the JSON source is retained so later prompts can revise the diagram structurally
- A zero-dependency Node CLI (`archify/bin/archify.mjs`) validates diagram sources and renders them; `compare` produces Architecture Delta HTML with a machine receipt for before/after snapshots
- Diagrams ship as standalone HTML files with an embedded interactive viewer — themes, focus/reach tracing, route highlighting, and export run entirely in the browser, no Archify installation needed to view
- Repository tracing pins diagrams to a specific commit; claims cite numbered sources and repo excerpts open in a source card
- Validation is fail-closed: optional profiles like `deployment-ownership` refuse to render implicit facts and never inspect live infrastructure; the update checker only reads a fixed manifest and can be disabled with `ARCHIFY_UPDATE_CHECK_DISABLED=1`
