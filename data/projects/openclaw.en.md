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
author: OpenClaw
ossDate: '2025-11-24T10:16:47Z'
featured: false
status: tracked
---

OpenClaw is a local-first personal AI assistant platform that runs directly on your devices and integrates with the messaging channels you already use. It provides an always-on, privacy-respecting agent experience through a centralized Gateway that connects desktop, mobile, and messaging interfaces into a unified personal assistant.

## Local-First Architecture

- Keeps the agent and all data on your own devices or self-hosted infrastructure, minimizing external dependencies
- Multi-node coordination via RPC connects CLI, macOS menu bar, and mobile nodes for device-local actions
- Supports multiple model backends with credential rotation and automatic failover strategies for improved robustness

## Multi-Channel Messaging

- Native integrations with mainstream messaging channels including WhatsApp, Telegram, Slack, Discord, Signal, and iMessage
- Configurable routing and distribution rules for multi-channel alert routing and automated workflows
- Personal productivity assistance for calendar management, task tracking, and quick information lookups across all devices

## Orchestrable Skills and Gateway

- WebSocket-based Gateway architecture serves as the control plane, unifying sessions, routing, tool invocations, and event management
- Visual skills registry and workspace model enable complex automation flows managed through an intuitive interface
- Low-latency voice and Canvas interactions for local developer testing and integration scenarios
