---
name: NanoClaw
slug: nanoclaw
homepage: https://nanoclaw.dev
repo: https://github.com/gavrielc/nanoclaw
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Application
  - Assistant
  - CLI
  - Dev Tools
  - Runtime
description: >-
  NanoClaw is a lightweight containerized Claude assistant focused on secure local workflows, readable code, and fast
  customization.
logo: ''
author: gavrielc
ossDate: '2026-01-31T15:47:22Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

NanoClaw is a lightweight personal Claude assistant designed for understandability and customizability. It runs agents inside containers (Apple Container or Docker) to provide filesystem-level isolation. The project uses the Claude Agent SDK for the runtime and a skill-based extension model to keep the codebase small and auditable.

## Main Features

- Single-process, minimal source code that is easy to read and modify.
- Agents run in isolated containers to reduce host risk and enforce clear boundaries.
- Guided setup via Claude Code and a skill system for adding optional integrations.
- Supports WhatsApp I/O, scheduled tasks, web access, and common integrations.

## Use Cases

Suitable for advanced users who want to run a personal assistant in a local or controlled environment: private automation, secure personal information retrieval and reporting, scheduled briefings, and scenarios requiring reproducible, code-first customization of agent behavior.

## Technical Features

- Implemented in TypeScript with a small dependency surface.
- Runs agents in container sandboxes (Apple Container / Docker) for stronger isolation.
- Uses filesystem-based IPC and SQLite for lightweight persistence, avoiding heavy distributed infrastructure.
- Encourages code-driven customization via `claude code` commands and skill files for reproducible changes.
