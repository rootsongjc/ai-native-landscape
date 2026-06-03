---
name: Agor
slug: agor
homepage: https://agor.live
repo: https://github.com/preset-io/agor
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - MCP
  - UI
description: >-
  Agor is a multiplayer spatial canvas from Preset for coordinating parallel AI assistant sessions and Git-linked
  worktrees.
author: Preset
ossDate: '2025-10-04T19:17:32Z'
featured: false
status: tracked
---
## Overview

Agor is a multiplayer spatial canvas built by Preset for orchestrating parallel AI assistant sessions on a Figma-like board. It coordinates Claude Code, Codex, and Gemini sessions with Git-linked worktrees, enabling teams to manage AI conversations, track agent activities, and visualize collaborative agentic work in real-time. Users create worktrees on a 2D canvas, drop them into zones to trigger templated prompts, and run isolated environments.

## Key Features

- Parallel agent orchestration supporting Claude Code, Codex, and Gemini with zone-triggered workflows
- Multiplayer spatial canvas with real-time synchronization, multi-cursor presence, and pinned comments
- Deep Git worktree integration providing isolated environments with automatic port management
- Model Context Protocol (MCP) integration for agent coordination and orchestration across sessions

## Use Cases

Engineering teams running concurrent AI sessions for parallel PR workflows, exploring multiple model generation strategies, large-scale code review sessions, and isolated automated regression testing. Reduces context switching and enables reproducible experiments across team members.

## Technical Details

Dual runtime model with a local daemon for development and web UI for collaborative control. Real-time WebSocket synchronization with pluggable agent providers and templated zone triggers. Worktree isolation with automatic environment orchestration prevents port collisions and accelerates start/stop cycles.
