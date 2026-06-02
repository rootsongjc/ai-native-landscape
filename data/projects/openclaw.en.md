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

## Overview

OpenClaw is a local-first personal AI assistant platform that runs directly on your devices and integrates with the messaging channels you already use. It provides an always-on, privacy-respecting agent experience through a centralized Gateway that connects desktop, mobile, and messaging interfaces into a unified personal assistant.

## Key Features

Local-first architecture keeps the agent and all data on your own devices or self-hosted infrastructure, minimizing external dependencies. Native integrations with mainstream messaging channels including WhatsApp, Telegram, Slack, Discord, Signal, and iMessage with configurable routing and distribution rules. Orchestrable skills and workspaces enable complex automation flows managed through a visual skills registry and workspace model.

## Use Cases

Personal productivity assistance for calendar management, task tracking, and quick information lookups across all your devices and channels. Multi-channel alert routing and automated workflows for individuals and small teams who need a private, controllable assistant. Local developer testing and integration scenarios where low-latency voice and Canvas interactions are required.

## Technical Details

WebSocket-based Gateway architecture serves as the control plane, unifying sessions, routing, tool invocations, and event management for runtime extensibility. Multi-node coordination via RPC connects CLI, macOS menu bar, and mobile nodes, enabling device-local actions such as system commands. Supports multiple model backends with credential rotation and automatic failover strategies for improved robustness.
