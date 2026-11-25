---
name: Omnigent
slug: omnigent
homepage: https://omnigent.ai
repo: https://github.com/omnigent-ai/omnigent
license: Apache-2.0
category: agents
subCategory: agent-orchestration
tags:
  - Orchestration
  - Multi-Agent
  - Coding Agent
  - Sandbox
  - Claude Code
description: >-
  An open-source meta-harness that puts one orchestration layer over Claude Code, Codex, Cursor, and custom agents, with
  policies, cloud sandboxes, and real-time collaboration from any device.
author: Omnigent
ossDate: '2026-06-11T12:18:13.000Z'
status: tracked
---
## Overview

Omnigent is an open-source meta-harness for AI agents. It provides a common orchestration layer over coding agents such as Claude Code, Codex, Cursor, OpenCode, Goose, and GitHub Copilot, as well as custom agents defined in YAML, so harnesses can be swapped or combined without rewriting. Sessions stay in sync across the terminal, browser, phone, and a native desktop app.

## Key Features

- Multi-agent supervision: mix different agents in one session, have one review another's work, or split a task between them.
- Any model: first-party API keys, Claude or ChatGPT subscriptions, or any compatible gateway.
- Cloud sandboxes: run sessions in disposable Modal, Daytona, E2B, Kubernetes, Databricks, and other sandboxes.
- Governance: policies pause for approval before risky actions, cap spend, or limit the tools an agent can reach, scoped to a server, an agent, or a single chat.
- Collaboration: share a session so teammates can watch, co-drive, or fork the conversation.

## Use Cases

- Running several coding agents on one task and comparing or reviewing their output.
- Continuing an agent session started in the terminal from a browser or phone.
- Giving a team governed, sandboxed access to coding agents with approval and spend controls.

## Technical Details

- Written in Python (3.12+) and distributed on PyPI and Homebrew.
- Optional extras add model providers (Bedrock, Vertex), sandbox providers, and SDK harnesses.
- Released under the Apache 2.0 license; the project describes its status as alpha.
