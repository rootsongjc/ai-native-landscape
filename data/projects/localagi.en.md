---
name: LocalAGI
slug: localagi
homepage: https://localai.io
repo: https://github.com/mudler/localagi
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - AI Gateways
  - Agents
  - Dev Tools
description: LocalAGI is a self-hostable agent platform focused on privacy, local execution, and extensibility.
author: mudler
ossDate: '2023-07-27T23:21:36Z'
featured: false
status: tracked
---

## Overview

LocalAGI is a self-hostable AI agent platform designed for maximum privacy by running entirely on user-owned hardware without cloud dependencies. It provides a Web UI, REST API, and multiple messaging connectors, enabling teams to deploy capable AI agents with agentic tool use, long-term memory, and multi-step task execution fully on-premises.

## Key Features

- Fully local agent execution with a Web management UI for creating, configuring, and monitoring agents without sending data externally.
- Native connectors for Discord, Slack, Telegram, and custom actions, enabling agents to interact across communication platforms.
- Deep integration with LocalRecall for persistent memory and LocalAI for inference, forming a complete self-hosted AI stack.
- Support for diverse hardware configurations including CPU, GPU, Intel, and AMD accelerators.

## Use Cases

- Privacy-sensitive organizations that require AI agent capabilities without transmitting data to external cloud services.
- Edge deployments in air-gapped or bandwidth-limited environments where cloud connectivity is unreliable or prohibited.
- Teams building internal AI assistants that need long-term memory, RAG over private documents, and tool-calling capabilities.

## Technical Details

- Modular architecture with Model Context Protocol (MCP) support for extensible tool integration and pluggable memory layers.
- Production-ready REST API with OpenAI-compatible endpoints, serving as a drop-in replacement for cloud-based agent services.
- Ships with Docker and Kubernetes deployment examples tailored for diverse hardware and network configurations.
