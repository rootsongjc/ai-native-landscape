---
name: Vibe Skills
slug: vibe-skills
homepage: null
repo: https://github.com/foryourhealth111-pixel/vibe-skills
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
  - Framework
description: >-
  Vibe Skills is an open-source all-in-one AI skill package that integrates expert-level capabilities and context
  management, enabling any AI agent to instantly upgrade its functionality.
author: foryourhealth111-pixel
ossDate: '2026-02-22T13:51:44Z'
featured: false
status: tracked
---

## Overview

Vibe Skills is an open-source all-in-one AI skill package and automatic orchestration framework. Its core idea is to package expert capabilities, context management, and workflow orchestration into a single pluggable skill bundle. After installation, users simply type `vibe` and the harness takes over the full flow: understanding intent, splitting into stages, calling the right expert Skills, verifying results, and preserving cross-session context. With 340+ built-in expert Skills spanning planning, engineering, AI, research, and creation, and an open skill plane that lets new domain Skills plug into the same workflow seamlessly.

## Key Features

- Automatic orchestration: the Harness layer decides the next step, calls the right expert Skills per stage, eliminating the need for users to act as dispatchers.
- 340+ expert Skills: built-in capabilities covering TDD guidance, code review, data analysis, writing, and research support.
- Cross-session memory: structured storage of project information, decisions, and evidence so later sessions can resume context.
- Open skill plane: new domain Skills can join the same workflow, extensible to research, design, education, finance, law, and more.
- Verification-driven delivery: work must be backed by tests, checks, or explicit review before completion.
- Intelligent routing: 340+ Skills collaborate without conflict, with the framework automatically selecting the right Skill per task stage.

## Use Cases

- Full-cycle software development: from requirements analysis and design to implementation and testing, driven automatically by AI agents.
- AI-assisted research: leveraging built-in research Skills for literature review, data analysis, and report generation.
- Multi-domain automation: plugging custom domain Skills into the open skill plane to build industry-specific AI workflows.
- Team knowledge preservation: the cross-session memory system retains project decisions and context, reducing information loss in team collaboration.

## Technical Highlights

- Built in Python with VCO Runtime as the core, providing `vibe` and `vibe-upgrade` entry commands.
- Layered pipeline architecture: intent freeze, stage planning, skill orchestration, evidence verification, memory preservation.
- Supports multiple AI agent backends including Claude Code and Codex with a unified skill invocation interface.
- Plugin-based skill design: new Skills simply follow conventions to plug into the orchestration layer without modifying the framework core.
- Built-in TDD workflows and code review processes to ensure delivery quality.
