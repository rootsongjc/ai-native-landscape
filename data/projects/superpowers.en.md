---
name: Superpowers
slug: superpowers
homepage: https://blog.fsck.com/2025/10/09/superpowers/
repo: https://github.com/obra/superpowers
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Dev Tools
description: >-
  An open-source development workflow and skills library for coding agents that emphasizes TDD, process, and verifiable
  automation.
author: Jesse Vincent
ossDate: '2025-10-09T19:45:18Z'
featured: false
status: tracked
---

Superpowers is an open-source skills library and development workflow framework for coding agents that structures the software development process into verifiable, predictable stages. It enforces a test-driven RED-GREEN-REFACTOR cycle and uses subagent-driven parallel execution with two-stage reviews to ensure implementations match their design specifications.

## Key Features

- Triggered skills that activate at appropriate development stages: brainstorming, plan writing, plan execution, and code review
- Enforces test-driven development by requiring failing tests before implementation begins
- Parallel task execution via subagents with both spec-compliance and code-quality reviews
- Built-in git worktree workflows and tmux monitoring for multi-agent orchestration
- Two-stage review process ensuring implementations match design specifications

## Use Cases

- Handing off coding tasks to agents while retaining full design reviewability and auditability
- Rapidly building prototypes with strong test coverage through enforced TDD practices
- Breaking large features into small parallel tasks for faster delivery
- Sharing reusable skills across agent platforms like Claude Code, Codex, and OpenCode

## Technical Details

- Script- and configuration-driven skills library designed to work across multiple coding agent platforms
- Supports installation through the Claude Code plugin marketplace
- Ships with comprehensive example tests and contributor guides for adding new skills
- Lightweight modular architecture that integrates with minimal friction into existing automation pipelines
