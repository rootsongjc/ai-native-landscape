---
name: Tree Ring Memory
slug: tree-ring-memory
homepage: https://terminallylazy.github.io/Tree-Ring-Memory/
repo: https://github.com/TerminallyLazy/Tree-Ring-Memory
license: MIT
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Agent Memory
  - Rust
  - SQLite
  - FTS
  - Local-First
  - Context Engineering
description: A framework-agnostic, local-first memory lifecycle framework for AI agents with a Rust CLI, SQLite/FTS recall, forgetting, audit, consolidation, and multi-agent write coordination.
author: TerminallyLazy
ossDate: '2026-07-04'
featured: false
status: tracked
---

## Overview

Tree Ring Memory is a framework-agnostic, local-first memory lifecycle framework for AI agents. It gives agents explicit local recall backed by SQLite/FTS with no required cloud service, organizes durable knowledge into tree-ring layers (cambium, outer, inner, heartwood, scar, seed), and runs the entire public runtime in Rust — storage, recall, import/export, audit, consolidation, maintenance, and terminal UI. Agent memory persists across sessions without degenerating into transcript dumps.

## Key Features

- Source-linked memories for decisions, scars, lessons, evidence, and durable project truths rather than raw conversation capture
- Rust-owned audit checks that surface stale, sensitive, low-confidence, supersession, and contradiction candidates
- Deterministic consolidation with idempotent summary records and cautious handling of sensitive memories
- Maintenance operations for expiry, secret redaction, and FTS repair, runnable from the CLI
- Same-host multi-agent correlation, scoped recall filters, and idempotent worker writes, with opt-in coordinator authorization for shared publication and lifecycle mutations
- Terminal UI with dashboard, ranked search, evidence browser (install size, recall speed, harness records, recall-quality checks), and detected-framework integrations view

## Use Cases

- Giving a coding agent durable, source-linked project memory that survives across sessions and checkouts
- Running multiple agents on the same host with partitioned memory identities plus a coordinator authorized for shared writes
- Auditing an agent's memory store — finding stale entries, contradictions, and superseded decisions before they mislead future work
- Activating memory per project via harness receipts so a configured bridge never silently implies an agent actually used memory

## Technical Details

- Fully Rust-native workspace: `tree-ring-memory-core` (models, validation, sensitivity checks, recall scoring), `tree-ring-memory-sqlite` (schema-compatible SQLite/FTS storage and recall filtering), and `tree-ring-memory-cli` (the `tree-ring` CLI) — no tracked Python package, pytest suite, PyO3 crate, or CPython extension remains
- Harness activation protocol is receipt-backed: a bridge is `active` only after a fresh matching receipt shows a new session completed scoped recall and safe context injection; `init` and markers establish configuration, not activation, and each checkout keeps its own memory root
- Instruction-only plugins for ChatGPT/Codex and Claude Code (`/plugin marketplace add TerminallyLazy/Tree-Ring-Memory`) teach the reviewed workflow without bundling the CLI or an MCP server; Agent Zero uses a separate two-part setup with a descriptor-scoped capability check
- Privacy defaults block secret-like memories, hide sensitive details, and keep transcript capture out of scope; JSONL import/export applies the same redaction defaults
- Shared activation is constrained to same-host local filesystems with matching project-store identity — no claimed safe SQLite sharing across NFS or containers on different hosts
- Install paths: one-line installer (macOS ARM64 / Linux x86_64 prebuilts), Homebrew tap, and project-local installs with first-run initialization
