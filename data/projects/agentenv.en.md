---
name: AgentENV
slug: agentenv
homepage: https://kvcache-ai.github.io/AgentENV/
repo: https://github.com/kvcache-ai/AgentENV
license: MIT
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Agent Environment
  - Sandbox
  - MicroVM
  - Firecracker
  - Agentic RL
description: Distributed platform for running agent environments at scale, powering agentic RL training for Kimi K3.
author: kvcache-ai
ossDate: '2026-07-23T02:48:07Z'
featured: false
status: tracked
---

## Overview

AgentENV (AENV) is an open-source distributed platform for running agent environments at scale. It runs large numbers of Firecracker microVM environments across machines using diverse OCI-compatible images, powering agentic RL training for Kimi K3.

## Key Features

- **Scale across environments**: Runs massive Firecracker environments cluster-wide with on-demand OCI images via overlaybd; local disk acts as a bounded cache, evicting cold data so images can exceed disk capacity without pre-warming hosts
- **Inexpensive idle environments**: Snapshot-backed environments boot or resume in under 50 ms and pause in under 100 ms; idle environments release CPU and memory, returning when new work arrives
- **Native snapshot and fork**: Increments memory and filesystem snapshots in under 100 ms under heavy disk modification; a running environment can fork into multiple independent sandboxes for parallel agent workflows
- **High density over time**: High-performance I/O via ublk with shared host page cache; memory ballooning returns reclaimable guest memory to sustain high overcommit
- **E2B-compatible API**: Point `E2B_API_URL` at the server and use the standard E2B Python / TypeScript SDK without code changes

## Use Cases

- Agentic reinforcement learning training at scale
- Parallel agent workflows via environment forking
- High-density sandboxed code execution for coding agents
- Long-running agent environments with snapshot persistence

## Technical Details

- Built on Firecracker microVMs requiring Linux kernel 6.8+ and `/dev/kvm` access
- Snapshot persistence to S3-compatible object storage or shared distributed filesystem
- Ships `aenv` CLI and server; deployable via systemd, Docker, Docker Compose, or Kubernetes
