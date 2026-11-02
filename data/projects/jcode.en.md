---
name: jcode
slug: jcode
homepage: https://jcode.sh
repo: https://github.com/1jehuang/jcode
license: MIT
category: coding-devtools
subCategory: coding-agents
tags:
  - Coding Agent
  - Rust
  - Terminal
  - Multi-Agent
description: >-
  A high-performance coding agent harness written in Rust, built for heavy multi-agent development
  workflows — run dozens of agents in parallel with minimal per-session RAM and near-instant startup.
author: 1jehuang
ossDate: '2026-01-05'
featured: false
status: tracked
---

## Overview

jcode is a high-performance coding agent harness written in Rust, designed for developers who run heavy multi-agent workflows. Its headline claim is resource efficiency: dozens of parallel agents without melting the machine, with the project's benchmarks measuring roughly 3.3 MB of additional RAM per extra headless session and about 19 ms to first input. A server-managed swarm model lets agents in the same repo collaborate, detect conflicting edits, and message each other, and a self-dev mode lets jcode modify, rebuild, and reload its own binary.

## Key Features

- Very low marginal cost per session: ~3.3 MB additional RAM per extra headless session and ~19 ms time-to-first-input in the project's published benchmarks, against 79–194 MB and 0.6–3.5 s for other CLI agents
- Swarm mode: when two or more agents share a repo, the server manages them — if agent A edits a file agent B has read, B is notified and can inspect the diff or ignore it
- Inter-agent messaging: DM a single agent, broadcast to all agents on the server, or scope messages to agents working in one repo; agents can spawn their own swarms, turning the main agent into a coordinator
- Self-dev mode: the agent edits, builds, and tests jcode's own source code, then reloads its own binary and continues working across sessions, fully automatically
- Terminal UI with inline image rendering, inline LaTeX, a session resume menu, and prompt-cache-cold notifications
- OAuth login for a wide range of providers, including Claude OAuth and OpenAI Codex OAuth

## Use Cases

- Running many parallel coding agents in one repo or across repos without RAM blowup or lag
- Multi-agent teams that need automatic conflict detection and structured messaging
- Customizing the tool itself by having the agent iterate on its own source (self-dev)

## Technical Details

- Written in Rust with a client–server session architecture: the server hosts sessions and swarm coordination, keeping each additional headless session at ~3.3 MB in the repo's benchmark scripts (first session ~71.3 MB)
- Swarm coordination is server-mediated: the server tracks which agent has read which file and pushes invalidation notices on edits; messaging supports DM, repo-scoped, and global broadcast, headed or headless
- Self-dev infrastructure covers the full loop — edit, build, test, reload its own binary — and continues in existing sessions afterward, so the agent can improve the very harness it runs on
- Distributed via a curl install script (macOS and Linux); provider authentication supports Claude OAuth and OpenAI Codex OAuth among others
