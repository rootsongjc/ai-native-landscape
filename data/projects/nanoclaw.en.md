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
status: tracked
---

## Overview

NanoClaw is a lightweight, containerized personal Claude assistant designed for code-level understandability and rapid customizability. It runs each agent inside an isolated container using Apple Container or Docker to provide filesystem-level security boundaries. Built on the Claude Agent SDK with a skill-based extension model, the codebase stays small and auditable.

## Key Features

A single-process, minimal source code architecture makes the entire codebase easy to read, understand, and modify without navigating complex microservices. Container-based isolation ensures each agent runs with clear security boundaries, reducing host system risk. Guided setup through Claude Code and a skill system let users incrementally add integrations such as WhatsApp I/O, scheduled tasks, and web access. The framework connects to popular messaging platforms including WhatsApp, Telegram, Slack, Discord, and Gmail.

## Use Cases

Advanced users run NanoClaw as a personal assistant in local or controlled environments for private automation, secure information retrieval, and scheduled briefings. Developers customize agent behavior through reproducible, code-first skill files rather than opaque configuration. The project is ideal for anyone who wants full control over their assistant's capabilities without the overhead of enterprise platforms.

## Technical Details

The TypeScript implementation maintains a minimal dependency surface for reliability and ease of auditing. Container sandboxes using Apple Container or Docker provide strong isolation without heavy orchestration infrastructure. Lightweight persistence through filesystem-based IPC and SQLite replaces distributed databases, keeping the system simple and portable. Code-driven customization via skill files ensures all changes are version-controlled and reproducible.
