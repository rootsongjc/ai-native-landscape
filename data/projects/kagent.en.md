---
name: kagent
slug: kagent
homepage: https://kagent.dev/
repo: https://github.com/kagent-dev/kagent
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - AI Agent
  - Dev Tools
  - MCP
description: Kubernetes-native agent framework to declaratively build, run and manage AI agents on Kubernetes.
author: Solo.o
ossDate: '2025-01-21T17:03:23.000Z'
featured: false
status: tracked
---

## Overview

kagent is a Kubernetes-native framework that brings agent, tool and model configuration into Kubernetes via CRDs. It includes a controller, engine, UI and CLI to simplify deploying, observing and debugging AI agents in clusters.

## Key Features

- Kubernetes-native CRDs (Agent, ToolServer, etc.)
- Multi-LLM provider support (OpenAI, Azure, Anthropic, Vertex, Ollama, ...)
- Built-in MCP tools, memory and OpenTelemetry observability

## Use Cases

- Deploy managed conversational/agent services in Kubernetes
- Expose external tools to agents via MCP
- Run agent-driven automation in CI/CD workflows

## Technical Highlights

- Declarative resource management with hot updates and observability
- Provides UI and CLI for local dev and cluster workflows
- Extensible plugin and tool ecosystem
