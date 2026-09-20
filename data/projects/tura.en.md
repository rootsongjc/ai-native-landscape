---
name: Tura
slug: tura
homepage: https://turaai.net/
repo: https://github.com/Tura-AI/tura
license: AGPL-3.0
category: coding-devtools
subCategory: coding-agents
tags:
  - Coding Agent
  - Rust
  - Token Efficiency
  - Benchmark
  - CLI
description: An open-source execution layer for AI coding agents that groups environment inspection, edits, builds, and tests into macro commands run in fewer model turns, with published DeepSWE benchmark artifacts.
author: Tura AI
ossDate: '2026-07-06'
featured: false
status: tracked
---

## Overview

Tura is an open-source agent runtime harness for coding tasks. In a ReAct session the model must re-enter after every tool result, repeatedly carrying the system prompt and a growing context; Tura turns the same task into a runtime-managed command graph so deterministic execution continues without another model round trip. Its published DeepSWE comparison shows higher verifier success with fewer turns and tokens than Codex CLI.

## Key Features

- One macro tool `command_run` executes a multi-step tree (inspect, patch, build, test, lint) in a single LLM turn where a tool-calling agent needs five
- Backward reasoning: instead of reasoning from current state to goal, Tura guides the model to estimate the pre-goal state first and reason back, reconstructing failure states before writing code
- Context managed as runtime state: task status, runtime prompts, and recursive task manuals keep active context scoped rather than piling skills and stale history into one session
- CLI compaction that preserves exact execution state (code locations, patches, tests) in `task_status.compact_context` instead of a loose summary
- Multiple entry points: interactive TUI (`tura`), direct CLI runner (`tura exec`), gateway-backed run with streaming/history (`tura run`), local HTTP/SSE gateway with web GUI, and a desktop GUI workspace

## Use Cases

- Long-horizon debugging and repo-wide rewrite tasks where turn counts and token budgets dominate cost
- Multi-session concurrent coding work with HTML rich-text support in both TUI and GUI
- Teams wanting reproducible benchmark evidence — archived prompts, per-round tool calls, token usage, patches, and verifier results per session

## Technical Details

- Rust codebase organized as crates (runtime, router, gateway, session_log, tools) with TUI and GUI apps; npm distribution via `tura-ai` with no postinstall lifecycle script — the wrapper resolves and launches the platform package directly
- Published benchmark artifacts cover 20 DeepSWE v1.1 tasks × 3 runs per agent plus rewrite and design tasks: Tura Balanced reached an 80.0% verifier success rate versus 63.3% for Codex CLI (+16.7 pp) with 31.1% fewer tokens; Tura Direct used 77.5% fewer tokens at a comparable 65.0% success rate
- DeepSWE's own mini-swe-agent results show only an 8% gap between High and Medium reasoning effort, indicating higher reasoning effort alone does not explain the advantage; manifests for all replicates are published
- Compaction is a CLI operation with explicit `compact_context` events: benchmark sessions resumed execution an average of 2.6 rounds after compaction (Codex estimated 5.4 from token-usage drops, as it exposes no equivalent events)
- Provider-agnostic with documented evidence gaps: broader Anthropic/Gemini/local-provider, UI-latency, and cross-OS measurements tracked in the public roadmap and known-issues docs
- Sessions persisted in a session DB with a runtime/session equivalence gate in tests; first launch requires configuring an LLM provider — no credentials bundled
