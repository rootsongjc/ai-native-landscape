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
author: gavrielc
ossDate: '2026-01-31T15:47:22Z'
featured: false
status: tracked
---

NanoClaw is a lightweight, containerized personal Claude assistant designed for code-level understandability and rapid customizability. It runs each agent inside an isolated container using Apple Container or Docker to provide filesystem-level security boundaries, and uses a skill-based extension model built on the Claude Agent SDK.

## Minimal and Auditable Architecture

- Single-process, minimal source code architecture makes the entire codebase easy to read, understand, and modify
- TypeScript implementation maintains a minimal dependency surface for reliability and ease of auditing
- Code-driven customization via skill files ensures all changes are version-controlled and reproducible

## Container-Based Security

- Container-based isolation ensures each agent runs with clear security boundaries, reducing host system risk
- Apple Container or Docker sandboxes provide strong isolation without heavy orchestration infrastructure
- Lightweight persistence through filesystem-based IPC and SQLite replaces distributed databases

## Messaging and Integration

- Connects to popular messaging platforms including WhatsApp, Telegram, Slack, Discord, and Gmail
- Guided setup through Claude Code and a skill system let users incrementally add integrations such as WhatsApp I/O, scheduled tasks, and web access
- Ideal for personal automation, secure information retrieval, and scheduled briefings in local or controlled environments
