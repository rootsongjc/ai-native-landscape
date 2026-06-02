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

## Overview

A2UI (Agent-to-User Interface) is an open-source declarative UI specification and toolkit developed by Google that enables agents to describe renderable interfaces as safe, portable JSON. Agents produce structured JSON payloads describing intent and component trees, while client renderers map those abstract components to native widgets across platforms.

## Key Features

- Declarative JSON format that supports incremental updates and is easy for LLMs to generate.
- Security-first design where clients maintain a catalog of trusted components to avoid executing arbitrary generated code.
- Framework-agnostic rendering: the same A2UI payload works with Lit, Flutter, React, and other client renderers.

## Use Cases

- Dynamic data collection through agent-generated forms and interactive UI components.
- Embedding remote sub-agents that return UI fragments into parent applications.
- Adaptive enterprise workflows that generate dashboards, approval panels, or data visualizations on the fly.

## Technical Details

- Lightweight specification focused on intent and data binding rather than executable logic, facilitating auditability.
- Rendering separation architecture with Smart Wrappers for complex or sandboxed components.
- Compatible with transports like A2A for distributed agent orchestration scenarios.
