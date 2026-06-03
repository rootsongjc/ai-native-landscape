---
name: Agent Executor (AX)
slug: ax
homepage: 'https://agentexecutor.io'
repo: https://github.com/google/ax
license: Apache-2.0
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Agent Runtime
  - Distributed
  - Kubernetes
  - Resumability
  - MCP
description: Google's open source distributed agent runtime that coordinates agentic loops, manages executions with event logging, and provides native recovery and resumption for reliable agent deployments.
author: Google
ossDate: '2026-03-30'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

AX (Agent eXecutor) is Google's distributed agent runtime designed for reliable, production-grade agent execution. It coordinates agentic loops, manages executions with durable event logging, and provides native support for recovery and resumption. AX targets Kubernetes deployments and supports isolated execution of skills, tools, and agents.

## Key Features

- Distributed runtime with isolated execution for controllers, skills, tools, and agents
- Automatic recovery and execution resumption via durable event log
- Single-writer architecture ensuring consistent state management
- MCP server integration for tool execution
- Kubernetes-native design with compute-layer actor resumption

## Use Cases

- Running production AI agents with guaranteed reliability and resumability
- Deploying distributed agent systems on Kubernetes with isolated actors
- Building auditable agent workflows with centralized policy control
- Long-running autonomous agent tasks requiring fault tolerance

## Technical Details

- Single-controller architecture with event-sourced execution state
- Supports remote agents, MCP tools, and isolated skill environments
- Designed for Kubernetes with compute-layer actor resumption on compatible platforms
- Model-agnostic and harness-agnostic runtime layer
