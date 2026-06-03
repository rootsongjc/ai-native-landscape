---
name: PicoClaw
slug: picoclaw
homepage: null
repo: https://github.com/sipeed/picoclaw
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Application
  - CLI
  - Dev Tools
description: >-
  PicoClaw is an ultra-lightweight Go-based AI assistant that runs on low-cost hardware with minimal memory and fast
  startup.
author: Sipeed
ossDate: '2026-02-04T12:32:35Z'
featured: false
status: tracked
---

PicoClaw is a tiny, fast AI agent written in Go that runs on ultra-low-cost hardware with minimal resources. It boots in about one second on a $10 single-board computer, stays under 10 MB of resident memory, and still connects to mainstream LLM providers, making it ideal for deploying AI assistants at the edge.

## Ultra-Lightweight Runtime

- Less than 10 MB resident memory with approximately 1-second startup on weak single-core CPUs
- Single-binary, cross-architecture builds for RISC-V, ARM, and x86
- Minimal runtime overhead suitable for IoT devices, single-board computers, and embedded environments

## Connectivity & Modes

- Configurable adapters for multiple LLM providers and web search backends
- Gateway mode for serving as a lightweight AI proxy in embedded deployments
- Daemon mode for headless, always-on operation on edge devices

## Extensibility

- Modular adapter system for swapping LLM backends and retrieval tools
- Small, composable components that remain extensible even in severely resource-constrained environments
- Reference implementation for extreme model compression and bootstrap-style agent design
