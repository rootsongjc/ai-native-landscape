---
name: NemoClaw
slug: nemoclaw
homepage: null
repo: https://github.com/nvidia/nemoclaw
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agents
  - CLI
  - Safety
  - Sandbox
description: >-
  NVIDIA NemoClaw is an open source reference stack for running OpenClaw always-on assistants more safely inside NVIDIA
  OpenShell, providing guided onboarding, hardened blueprints, state management, and routed inference.
author: NVIDIA
ossDate: '2026-03-15'
featured: true
status: tracked
---

## Overview

NemoClaw is an open source reference stack from NVIDIA that simplifies running OpenClaw always-on assistants more safely. Built on top of the NVIDIA OpenShell runtime from NVIDIA Agent Toolkit, it provides additional security layers for autonomous agents running in sandboxed environments.

NemoClaw adds guided onboarding, hardened blueprints, state management, OpenShell-managed channel messaging, routed inference, and layered protection on top of the OpenShell runtime. The project is in Alpha stage, available as an early preview since March 16, 2026.

## Key Features

- **Guided Onboarding**: Wizard-driven flow for sandbox creation, inference configuration, and security policy application
- **Hardened Blueprints**: Pre-configured security baselines with Landlock, seccomp, and network namespace isolation
- **State Management**: Full host-side state tracking and sandbox lifecycle management
- **Routed Inference**: Multiple inference backends including NVIDIA Endpoints and Ollama
- **Layered Protection**: Four policy domains — filesystem, network, process, and inference
- **Network Policies**: Declarative YAML network policies with static and dynamic rule changes
- **Multi-Platform**: Linux, macOS (Apple Silicon), DGX Spark, and Windows WSL2 support

## Use Cases

- Running OpenClaw always-on AI assistants in secure sandboxed environments
- Using Nemotron and other models via NVIDIA NIM Endpoints for routed inference
- Applying hardened blueprints for compliance-required sandbox security configurations
- Deploying local AI agents on edge devices like DGX Spark
- Controlling agent outbound access through declarative network policies

## Technical Highlights

- Sandbox isolation powered by OpenShell K3s container clusters
- TypeScript plugin architecture extending Commander CLI
- Blueprint YAML for network policies and security configuration
- Multiple kernel-level isolation mechanisms: Landlock, seccomp, network namespaces
- Inference routing supports NVIDIA Endpoints and local Ollama models
- One-click installer script, no sudo required (except Docker installation)
