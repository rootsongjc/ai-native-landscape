---
name: Agent Skills
slug: addyosmani-agent-skills
homepage: null
repo: https://github.com/addyosmani/agent-skills
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
  - Vibe Coding
description: >-
  Agent Skills is an open-source collection of production-grade engineering skills by Google Chrome engineer Addy
  Osmani, featuring 20 structured workflows and 7 slash commands covering the full development lifecycle from spec to
  ship.
logo: ''
author: Addy Osmani
ossDate: '2026-02-15T20:20:26Z'
featured: false
status: tracked
---

## Overview

Agent Skills is an open-source project by Google Chrome senior engineer Addy Osmani that provides a production-grade engineering skill system designed specifically for AI coding agents. The core philosophy is to encode the workflows, quality gates, and best practices that senior engineers follow in software development into structured skills, enabling AI agents to consistently execute these standards at every stage of development. The collection includes 20 core skills, 7 slash commands, 3 specialist agent personas, and 4 reference checklists, covering the complete software development lifecycle from Define through Plan, Build, Verify, Review, and Ship.

## Key Features

- 20 structured skills: Each skill includes steps, checkpoints, and exit criteria that agents follow as workflows rather than skipping arbitrarily.
- 7 slash commands: /spec, /plan, /build, /test, /review, /code-simplify, /ship, mapping to each phase of the development lifecycle.
- Anti-rationalization: Each skill includes a table of common excuses agents use to skip steps (e.g., "I'll add tests later") with documented counter-arguments.
- Multi-platform support: Works with Claude Code, Cursor, Gemini CLI, Windsurf, GitHub Copilot, Kiro, and other AI coding tools.
- 3 specialist personas: Code reviewer (Senior Staff Engineer perspective), test engineer (QA specialist), and security auditor.

## Use Cases

- Install via Claude Code plugin marketplace to provide end-to-end engineering standards for AI coding agents.
- Integrate into Cursor or Copilot for teams to unify coding standards and quality gates.
- Individual developers leverage skill workflows to elevate AI-assisted coding output from prototype to production quality.
- Engineering teams reference the skill structure to build custom internal AI coding agent skill systems.

## Technical Highlights

- Each skill follows a consistent SKILL.md anatomy: frontmatter metadata, overview, triggering conditions, process steps, anti-rationalization table, red flags, and verification requirements.
- Incorporates best practices from Google's engineering culture: Hyrum's Law in API design, the Beyonce Rule and test pyramid in testing, change sizing norms in code review, Shift Left strategy in CI/CD, and more.
- Progressive disclosure design with SKILL.md as entry point and reference checklists loaded on demand, minimizing token consumption.
- Skills are pure Markdown compatible with any agent that accepts system prompts or instruction files, licensed under MIT.
