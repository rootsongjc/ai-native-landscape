---
name: Lark CLI
slug: lark-cli
homepage: null
repo: https://github.com/larksuite/cli
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - CLI
  - Dev Tools
  - SDK
description: >-
  Lark CLI is the official command-line tool for Lark/Feishu, maintained by the larksuite team. It covers 17 business
  domains with 200+ commands and 24 AI Agent Skills, designed for both humans and AI agents.
author: Larksuite
ossDate: '2026-03-25T07:13:30Z'
featured: true
status: tracked
---

## Overview

Lark CLI is the official open-source command-line tool for Lark/Feishu, written in Go and maintained by the larksuite team. Designed for both human users and AI agents, it covers 17 business domains — including Calendar, Messenger, Docs, Base, Sheets, Slides, Tasks, Wiki, Contacts, Mail, Meetings, Attendance, Approval, and OKR — with 200+ commands and 24 ready-to-use AI Agent Skills. Licensed under MIT, it can be installed via npm in a single step and takes just 3 steps from setup to the first API call.

## Key Features

- Agent-Native Design: 24 structured Skills out of the box, compatible with popular AI tools — agents can operate Lark with zero extra setup.
- Three-Layer Command Architecture: Shortcuts (human and AI friendly) → API Commands (platform-synced) → Raw API (full coverage), choose the right granularity.
- 17 Business Domains: Calendar, Messenger, Docs, Base, Sheets, Slides, Tasks, Wiki, Contacts, Mail, Meetings, Attendance, Approval, OKR, and more.
- AI-Friendly Output: Every command tested with real agents, featuring concise parameters, smart defaults, and structured output to maximize agent call success rates.
- Secure and Controllable: Input injection protection, terminal output sanitization, OS-native keychain credential storage.
- Quick Start: npm one-click install, interactive login, from install to first API call in 3 steps.

## Use Cases

- AI agents automating enterprise workflows: rapidly access calendar management, messaging, document editing, and other Lark capabilities through Skills.
- Developers using the terminal to quickly interact with Lark APIs for debugging, batch data processing, and automation scripting.
- Enterprise IT admins managing users, permissions, and approval workflows at scale via CLI.
- CI/CD integration: invoke Lark APIs in automated pipelines for notifications, report generation, and data synchronization.

## Technical Highlights

- Written in Go, compiled to a single binary with zero runtime dependencies and cross-platform support.
- Distributed via npm, supporting `npx @larksuite/cli@latest install` for one-click setup.
- OAuth 2.0 authentication with user and bot identity switching (`--as user` / `--as bot`).
- WebSocket-based real-time event subscriptions (lark-event Skill) with regex routing and agent-friendly NDJSON output.
- Modular Skill architecture with extensibility via the lark-skill-maker custom skill framework.
