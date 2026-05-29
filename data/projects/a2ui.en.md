---
name: A2UI
slug: a2ui
homepage: https://a2ui.org/
repo: https://github.com/google/a2ui
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - UI
description: >-
  An open-source declarative UI specification and toolkit that lets agents describe renderable interfaces as safe,
  portable JSON.
logo: ''
author: Google
ossDate: '2025-09-24T23:14:02Z'
featured: false
status: tracked
---

## Detailed Introduction

A2UI (Agent-to-User Interface) is an open-source declarative UI specification and toolkit that enables agents to "speak UI." Agents produce a JSON payload (an A2UI Response) describing the intent and component tree; client renderers then map those abstract components to native widgets (e.g., Lit, Flutter, React). This approach aims to make agent-generated UIs "safe as data, expressive as code." See the project site at <https://a2ui.org/> for examples and documentation.

## Main Features

- Declarative format: a structured JSON representation that supports incremental updates and is easy for LLMs to generate.
- Security-first: clients maintain a catalog of trusted components to avoid executing arbitrary generated code.
- Framework-agnostic: the same A2UI payload can be rendered by different client renderers across platforms.
- Samples and renderers: the repository provides example renderers and sample agents to accelerate adoption.

## Use Cases

Use cases include dynamic data collection (agent-generated forms), embedding remote sub-agents that return UI fragments, and adaptive enterprise workflows that generate dashboards or approval UIs on the fly. A2UI is also useful as a verifiable communication layer between agents and clients to reduce security and consistency risks when models generate UI.

## Technical Characteristics

- Lightweight spec: focuses on intent and data binding rather than executable logic, facilitating auditability and verification.
- Rendering separation: renderers map abstract types to local implementations and can register "Smart Wrappers" for complex or sandboxed components.
- Transport and renderer compatibility: works with transports like A2A and is designed for distributed orchestration scenarios.
- Community-driven: Apache-2.0 licensed with a spec, samples, and renderers; contributions to additional renderers are encouraged.
