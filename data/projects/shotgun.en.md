---
name: Shotgun
slug: shotgun
homepage: null
repo: https://github.com/shotgun-sh/shotgun
license: MIT
category: coding-devtools
subCategory: coding-agents
tags:
  - CLI
  - Dev Tools
  - Vibe Coding
  - Workflow
description: >-
  Shotgun is a CLI tool that transforms what you want to work on into a complete flow of research to specs to plans to
  tasks to implementation with full codebase understanding.
author: shotgun-sh
ossDate: '2025-08-25T00:00:00.000Z'
featured: false
status: tracked
---

## Overview

Shotgun is a Python-based command-line tool designed to transform abstract development ideas into structured implementation flows. Through five core modes: Research, Specify, Plan, Tasks, and Implement, it helps developers complete the full journey from concept to code with AI assistance. Before any operation, Shotgun indexes the entire codebase to build a searchable code graph, ensuring all decisions are based on actual code structure and dependencies, providing more accurate contextual understanding and recommendations.

## Key Features

- **Five Core Modes**: Research, Specify, Plan, Tasks, and Implement form a complete development workflow.
- **Complete Codebase Understanding**: Indexes the entire codebase before starting any work, building a real-time code graph.
- **Deterministic Artifacts**: Generated specs, plans, and tasks are version-controlled Markdown documents for easy review and iteration.
- **Multi-Source Query**: Simultaneously query codebase, web, GitHub, and docs for comprehensive research foundation.
- **Export Capability**: Supports export to agents.md ecosystem, compatible with various code generation tools.

## Use Cases

- **New Developer Onboarding**: Quickly map the entire architecture and generate documentation that matches actual code.
- **Refactoring Projects**: Fully understand dependencies before making changes, preventing refactors from becoming rewrites.
- **New Feature Development**: Precisely locate feature placement and prevent duplicate implementations.
- **Project Migration**: Map legacy systems, plan new architecture, track change deltas, and migrate in safe stages.
- **Team Collaboration**: Generate version-controlled spec documents to facilitate knowledge sharing and decision recording.

## Technical Highlights

- Built on Python with pipx for isolated installation, deployable in 30 seconds.
- Supports multiple LLM providers including OpenAI, Anthropic, and Gemini.
- Real-time code graph technology ensures all recommendations are based on the latest code state.
- Human-in-the-loop checkpoints require human review at key decision points, maintaining control.
- Telemetry and change tracking features reduce rework and late-night incidents.
