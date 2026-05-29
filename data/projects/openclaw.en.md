---
name: OpenClaw
slug: openclaw
homepage: https://openclaw.ai
repo: https://github.com/openclaw/openclaw
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - AI Gateway
  - Agent Framework
  - Agents
  - Assistant
  - CLI
description: A local-first personal AI assistant that runs on your devices and integrates with messaging channels.
logo: ''
author: OpenClaw
ossDate: '2025-11-24T10:16:47Z'
featured: false
status: tracked
---

## Detailed Introduction

OpenClaw is a local-first personal agent platform that lets you run an always-on assistant on your own devices. The Gateway acts as the control plane, connecting the CLI, macOS/iOS/Android nodes, and multiple channels (WhatsApp, Telegram, Slack, Discord, Google Chat, Signal, iMessage, etc.), and provides a visual Canvas and skill management. See the [website](https://openclaw.ai) and [docs](https://docs.openclaw.ai) for install and getting-started guides.

## Main Features

- Local-first: keep the agent and data on your devices or self-hosted hosts to reduce external dependency.
- Multi-channel support: native integrations with mainstream messaging channels and WebChat, with routing and distribution rules.
- Orchestrable skills and workspaces: manage complex flows and automations via a skills registry and workspace model.
- Developer-friendly: CLI and SDKs for building, debugging, and extending from source.

## Use Cases

OpenClaw suits individuals and small teams who want a private, controllable always-on assistant: personal productivity (calendar, tasks, quick lookups), multi-channel alerts and automations, local developer testing and integration, and low-latency voice/Canvas interactions. The onboarding wizard configures the Gateway and channels to simplify setup.

## Technical Features

- Gateway architecture: a WebSocket-based control plane that unifies sessions, routing, tools, and events for runtime extensibility and remote access.
- Multi-node support: CLI, macOS menu app, and mobile nodes coordinate via RPC, enabling device-local actions such as `system.run`.
- Model failover: supports multiple model backends, credential rotation, and failover strategies to improve robustness.
- Security & guardrails: built-in DM access policies, permission controls, and security guidance to reduce misuse risk.
