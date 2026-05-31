---
name: Superpowers
slug: superpowers
homepage: https://blog.fsck.com/2025/10/09/superpowers/
repo: https://github.com/obra/superpowers
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Dev Tools
description: >-
  An open-source development workflow and skills library for coding agents that emphasizes TDD, process, and verifiable
  automation.
logo: ''
author: Jesse Vincent
ossDate: '2025-10-09T19:45:18Z'
featured: false
status: tracked
---

## Detailed Introduction

Superpowers is an open-source skills library and development workflow for coding agents. Before a coding agent writes code, Superpowers guides design refinement, presents designs in digestible chunks for approval, then produces an executable implementation plan. It then drives subagent-driven development with two-stage review to ensure implementations follow the plan. The project emphasizes test-driven development (RED-GREEN-REFACTOR) and process-driven simplicity to make autonomous coding predictable and verifiable.

## Main Features

- Triggered skills (brainstorming, writing plans, executing plans, requesting code review) that activate at the right stages.
- Enforced test-driven workflow to ensure changes are covered by failing tests before implementation.
- Subagent-driven parallel task execution with two-stage reviews (spec compliance, code quality).
- Built-in git worktree workflows, tmux monitoring, and plugin marketplace installation (e.g., Claude Code plugin).
- Clear contributor guides for adding new skills under the `skills/` directory.

## Use Cases

- Hand off coding tasks to agents while maintaining design reviewability and auditability.
- Rapidly build prototypes with strong test coverage using Superpowers' TDD-first workflow.
- Break work into small tasks and execute them in parallel via subagents to accelerate delivery.
- Reuse skills across agent platforms such as Claude Code, Codex, and OpenCode.

## Technical Characteristics

- Script- and config-driven skills library suitable for multiple agent platforms.
- Supports Claude Code plugin marketplace installation and includes docs for other platforms.
- Emphasizes testability and verifiability with example tests and documentation in the repo.
- Lightweight, modular design for minimal-friction integration into existing automation pipelines.
