---
name: Pi
slug: pi
homepage: https://pi.dev
repo: https://github.com/earendil-works/pi
license: MIT
category: coding-devtools
subCategory: coding-agents
tags:
  - Coding Agent
  - CLI
  - TUI
  - TypeScript SDK
description: Pi is a minimal, extensible coding agent CLI and agent harness with a unified multi-provider LLM API, an interactive terminal UI, and a TypeScript SDK.
author: Earendil Works
ossDate: '2025-08-09'
status: tracked
---

## Overview

Pi is a minimal, extensible agent harness for coding workflows that you adapt to your own way of working rather than the other way around. It ships with strong defaults but deliberately omits features like sub-agents and plan mode, expecting users to add what they need as extensions. The same project also serves as a toolkit: a unified multi-provider LLM API, an agent runtime, and a terminal UI library that other applications can build on.

## Key Features

- Interactive terminal coding agent with a full-screen TUI, plus print and JSON modes for scripting and automation
- Extensible through extensions, skills, prompt templates, and themes, bundled as Pi packages shareable via npm or git
- Unified multi-provider LLM API supporting OpenAI, Anthropic, Google, and others
- Controllable over RPC and embeddable via a TypeScript SDK for building custom agent apps
- Built-in AI provider login (`/login`) to connect subscriptions or API keys

## Use Cases

- Terminal-based AI pair programming and code generation with a customizable harness
- Automating coding tasks in CI or scripts via print/JSON output modes
- Building custom agent applications on top of the SDK, agent runtime, and TUI library
- Driving agents programmatically from other tools over RPC

## Technical Details

- Monorepo of composable packages: `pi-ai` (unified multi-provider LLM API), `pi-agent-core` (agent runtime with tool calling and state management), `pi-tui` (terminal UI library with differential rendering), `pi-durable` (durable conversation, task, and document runtime), and `pi-coding-agent` (the CLI itself)
- Requires Node.js 22.19+; npm installation runs without dependency lifecycle scripts (`--ignore-scripts`), and the official installers pin all dependencies with self-updates via `pi update`
- No built-in permission system: filesystem, process, network, and credential access run with the launching user's rights, with documented containerization patterns (micro-VM extension routing tools off-host, plain Docker, or a policy-controlled sandbox)
- Ships offline-capable Nix builds with a pinned model catalog revision overlaid by newer runtime catalog data from pi.dev
- Vendor-neutral telemetry contracts (`pi-telemetry`) with a reference adapter, conformance tests, and typed schemas
