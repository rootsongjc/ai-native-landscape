---
name: Orca
slug: orca
homepage: https://onOrca.dev
repo: https://github.com/stablyai/orca
license: MIT
category: agents
subCategory: agent-orchestration
tags:
  - AI Agent
  - Orchestration
  - Parallel Agents
  - Dev Tools
  - Terminal
description: >-
  Agent Development Environment (ADE) that orchestrates a fleet of parallel coding agents — run Codex, Claude Code, OpenCode, or Pi side-by-side, each in its own git worktree, tracked in one place. Available on desktop and mobile with your own subscriptions.
author: stablyai
ossDate: '2026-03-17T03:28:57Z'
featured: false
status: tracked
---

## Overview

Orca is an AI Orchestrator and Agent Development Environment (ADE) for running a fleet of parallel coding agents from a single seat. It fans one prompt across multiple agents — Codex, Claude Code, OpenCode, or Pi — each isolated in its own git worktree, so results can be compared and the winner merged. Shipped as a desktop app (macOS, Windows, Linux) with a mobile companion, it uses the developer's own model subscriptions rather than reselling compute.

## Key Features

- Parallel worktrees that run multiple agents concurrently on isolated git worktrees for the same repository, with diff comparison and merge.
- Mobile companion app (iOS and Android) to monitor agents, receive completion notifications, and send follow-ups from anywhere.
- Ghostty-class terminal splits with WebGL rendering, infinite splits, and scrollback that survives restarts.
- Design Mode that clicks any UI element in an embedded Chromium window and injects its HTML, CSS, and a cropped screenshot into the agent prompt.
- Native GitHub and Linear integration to browse PRs, issues, and boards, open worktrees from tasks, and review without context switching.
- SSH worktrees to run agents on remote machines with full file editing, git, terminals, auto-reconnect, and port forwarding.

## Use Cases

- Running several coding agents in parallel on the same task and merging the best result.
- Steering long-running agent sessions from a phone while away from the desk.
- Frontend work where Design Mode feeds live UI context straight into the agent.
- Coordinating agent-driven PR and issue workflows against GitHub and Linear boards.

## Technical Details

- Desktop app for macOS, Windows, and Linux, plus iOS and Android mobile companions.
- Bring-your-own-subscription model — Orca drives existing Codex, Claude Code, OpenCode, and Pi accounts rather than proxying model access.
- Git-worktree-based isolation per agent for safe parallel execution within one repo.
- Embedded Chromium for Design Mode and a Ghostty-class terminal emulator for in-app shells.
- YC-backed project, MIT-licensed source.
