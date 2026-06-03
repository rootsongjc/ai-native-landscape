---
name: Agent Substrate
slug: agent-substrate
homepage: null
repo: https://github.com/agent-substrate/substrate
license: Apache-2.0
category: platform-infra
subCategory: cloud-native-ai
tags:
  - Kubernetes
  - Agent Infrastructure
  - Cloud Native
  - Scheduling
  - gVisor
description: Kubernetes-based system for managing agent workloads at scale, multiplexing many stateful actors onto fewer pods with sub-second activation and persistent state.
logo: ''
author: Agent Substrate
ossDate: '2026-05-13'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

Agent Substrate is a Kubernetes-layer system purpose-built for running AI agent workloads at scale. It multiplexes a large set of stateful "actors" (agents) onto a smaller pool of ready "workers" (Kubernetes Pods), leveraging the fact that agents are idle most of the time. It achieves 30x+ oversubscription with sub-second actor activation and full state persistence across hibernation cycles.

## Key Features

- Actor-to-worker multiplexing with 30x+ oversubscription on Kubernetes
- Sub-second suspend/resume with full RAM and filesystem state persistence
- Framework-agnostic — works with ADK, LangChain, Claude Code, and any OCI container
- Sandboxed execution via gVisor for secure isolation
- MCP server deployment as durable Substrate Actors

## Use Cases

- Running thousands of concurrent AI agents on minimal Kubernetes infrastructure
- High-density stateful coding environments (Claude Code, Codex) with session persistence
- Deploying sandboxed MCP tool servers as durable actors
- Cost-efficient agent infrastructure for production agentic applications

## Technical Details

- Built on Kubernetes, bypasses control plane for low-latency scheduling
- Uses gVisor for kernel-level container isolation
- Compatible with Agent Executor (AX) for distributed agent runtime coordination
- Supports standard Kubernetes autoscaling alongside agent-specific scheduling
