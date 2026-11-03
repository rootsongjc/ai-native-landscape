---
name: NeMo Relay
slug: nemo-relay
homepage: https://docs.nvidia.com/nemo/relay/latest/about-nemo-relay/overview
repo: https://github.com/NVIDIA/NeMo-Relay
license: Apache-2.0
category: training-optimization
subCategory: observability-monitoring
tags:
  - Observability
  - Agents
  - Tracing
  - OpenTelemetry
  - Middleware
description: >-
  NVIDIA NeMo Relay is an open-source multi-language agent runtime and library for observing and controlling AI agent
  execution. It captures agent activity, applies middleware to model and tool calls, manages execution scopes and
  lifecycle events, and exports ATOF events, ATIF trajectories, or OpenTelemetry traces, logs, and metrics — without
  requiring changes to the existing agent stack.
author: NVIDIA
ossDate: '2026-03-31'
featured: false
status: tracked
---
## Overview

NVIDIA NeMo Relay gives visibility into and control over agent runs without requiring changes to the existing agent stack. It provides coding agents, applications, framework integrations, middleware, and observability backends a shared runtime for scopes, policy, plugins, and lifecycle events. A CLI can observe Codex or Claude Code locally; application owners can instrument app-owned LLM or tool calls; and framework users get ready integrations for LangChain, LangGraph, Deep Agents, Google ADK, and OpenClaw.

Relay positions itself as complementary to OpenTelemetry GenAI conventions and to observability or evaluation products, exporting ATOF events, ATIF trajectories, and OTel traces, logs, and metrics through observability plugins.

## Key Features

- **Agent Execution Observation**: Capture agent runs locally via the Relay CLI wrapping Codex or Claude Code, or instrument application-owned LLM and tool calls directly
- **Middleware on Model and Tool Calls**: Apply consistent controls and transformations to LLM and tool invocations across an existing stack
- **Execution Scope Management**: Shared runtime concepts for scopes, policy, and lifecycle events that frameworks and backends can agree on
- **Observability Export**: Export ATOF events, ATIF trajectories, or OpenTelemetry traces, logs, and metrics through configurable plugins
- **Framework Integrations**: Ready-made support for LangChain, LangGraph, Deep Agents, Google ADK, and OpenClaw
- **Plugin Architecture**: Package reusable middleware and exporters as plugins; Relay is also built into Hermes Agent

## Use Cases

- **Debug Agent Behavior**: Record a real agent run on disk — raw events plus a normalized trajectory file — and inspect what the agent actually did
- **Consistent Agent Controls**: Apply middleware policies to tool and LLM calls across multiple frameworks from one runtime
- **Agent Telemetry Pipelines**: Feed agent execution into OpenTelemetry-based backends alongside existing traces, logs, and metrics
- **Build Framework Integrations**: Use Relay as the shared execution layer when adding agent support to a framework or provider

## Technical Details

- **Multi-Language Runtime**: Ships as Python (`nemo-relay` on PyPI), Node (`nemo-relay-node` on npm), and Rust crates (`nemo-relay`, `nemo-relay-adaptive`, `nemo-relay-cli` on crates.io) with codecov-tracked CI
- **Local-First Recording**: The CLI quick start runs Codex or Claude Code through Relay with local exporters, writing raw events and a normalized trajectory file to disk for inspection
- **Scope + Lifecycle Model**: Execution scope management and lifecycle events are first-class runtime concepts, not conventions layered on top by each consumer
- **Observability Plugin Surface**: ATOF events, ATIF trajectories, and OTel traces/logs/metrics export through a plugin configuration layer, complementing OTel GenAI semantic conventions
- **Integration Guides per Entry Point**: Distinct quick-start paths for CLI observation of existing agents, application-owned calls, framework users, and framework builders
