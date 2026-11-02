---
name: herdr
slug: herdr
homepage: https://herdr.dev
repo: https://github.com/herdrdev/herdr
license: Apache-2.0
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Terminal Multiplexer
  - Coding Agent
  - Runtime
  - Rust
description: >-
  The runtime coding agents live on — a Rust terminal multiplexer that keeps
  agent terminals running in a background server, marks every pane working,
  blocked, or idle, and lets agents drive it through a CLI and socket API.
author: herdrdev
ossDate: '2026-03-27'
featured: false
status: tracked
---

## Overview

herdr is the runtime your coding agents live on: a terminal multiplexer built for agent workflows. Detach or lose your SSH connection and the terminals keep running in a background server; every pane is marked working, blocked, or idle so you never hunt for the stuck one. It runs claude code, codex, cursor, opencode, grok and the rest by owning their terminals — it does not wrap or replace them.

## Key Features

- Detach without stopping work: terminals survive client disconnects, and after a restart herdr restores the saved layout and can resume supported agent sessions
- Several machines, one window: local work and saved SSH machines together with a combined agent list and independent reconnects
- Never hunt for the stuck one: every pane is marked working, blocked, or idle, and herdr announces when an agent stops and needs an answer
- Agent-native: agents spawn panes, prompt each other, and wait until another agent is genuinely blocked, via CLI and socket API
- tmux-style prefix keys and first-class mouse (click, drag, split) — pick per moment, not per tool
- Plugins extend panes and workflows; one Rust binary, no Electron

## Use Cases

- Run many coding agents in parallel panes and see at a glance which is working, blocked, or idle
- Keep long agent sessions alive across SSH drops, laptop sleeps, and machine restarts
- Coordinate multi-agent workflows where one agent spawns and prompts another and waits for it to block

## Technical Details

- A single Rust binary backed by a background server that owns the terminals: detaching or dropping SSH leaves sessions running, and after a machine restart herdr restores the saved layout and resumes supported agent sessions (the original processes themselves do not survive)
- Agents drive herdr through a CLI and socket API — spawning panes, prompting other agents, and waiting until another agent is genuinely blocked; an agent skill packages this for coding agents
- Local work and saved SSH machines share one window with a combined agent list and independent per-machine reconnects; supported agents are run by owning their terminals rather than wrapping them
- Input layers both tmux-style prefix keys and first-class mouse interaction (click, drag, split); a plugin system extends panes and workflows through a marketplace
