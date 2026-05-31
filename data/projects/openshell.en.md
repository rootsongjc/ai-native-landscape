---
name: OpenShell
slug: openshell
homepage: null
repo: https://github.com/nvidia/openshell
license: Unknown
category: training-optimization
subCategory: safety-guardrails
tags:
  - Agents
  - CLI
  - Safety
  - Sandbox
description: >-
  NVIDIA OpenShell is a safe, private runtime for autonomous AI agents, providing sandboxed execution environments with
  declarative YAML policies to protect data, credentials, and infrastructure from unauthorized access.
logo: ''
author: NVIDIA
ossDate: '2026-02-24'
featured: true
status: tracked
---

## Overview

OpenShell is a safe, private runtime developed by NVIDIA for autonomous AI agents. It provides containerized sandbox isolation that prevents unauthorized file access, data exfiltration, and uncontrolled network activity. All outbound connections are intercepted by a policy engine that allows, routes, or denies based on declarative YAML policies.

Built with an agent-first philosophy, OpenShell ships with built-in agent skills and supports Claude Code, OpenCode, Codex, and GitHub Copilot. Under the hood, it runs a K3s Kubernetes cluster inside a single Docker container — no separate Kubernetes installation required.

## Key Features

- **Sandbox Isolation**: Each sandbox runs in its own container with policy-enforced egress routing
- **Declarative Policies**: Define filesystem, network, process, and inference policies via YAML files
- **Defense in Depth**: Four policy domains — filesystem, network, process, and inference
- **Credential Management**: Provider mechanism auto-discovers and injects API keys without leaking to sandbox filesystem
- **GPU Support**: Experimental GPU passthrough for local inference and fine-tuning workloads
- **Terminal UI**: Real-time terminal dashboard with keyboard-driven interface inspired by k9s
- **Hot-Reload Policies**: Network and inference policies can be updated at runtime without restart

## Use Cases

- Providing secure isolated execution environments for AI coding assistants
- Running autonomous agents under controlled network policies
- Protecting API keys and credentials from agent exposure
- Implementing compliance auditing and data loss prevention via policy engine
- Performing local model inference with GPU passthrough

## Technical Highlights

- Uses K3s Kubernetes cluster encapsulated in a single Docker container
- Gateway component serves as control-plane API for sandbox lifecycle coordination
- Privacy Router enables privacy-aware LLM routing, keeping sensitive context on sandbox compute
- Static policies (filesystem, process) locked at creation; dynamic policies (network, inference) support hot-reload
- Supports BYOC (Bring Your Own Container) and community sandbox catalog
