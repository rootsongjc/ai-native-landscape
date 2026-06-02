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

## Overview

Superpowers is an open-source skills library and development workflow framework for coding agents that structures the software development process into verifiable, predictable stages. It enforces a test-driven RED-GREEN-REFACTOR cycle and uses subagent-driven parallel execution with two-stage reviews to ensure implementations match their design specifications.

## Key Features

The framework provides triggered skills that activate at the appropriate development stages, including brainstorming, plan writing, plan execution, and code review requests. It enforces test-driven development by requiring failing tests before implementation, supports parallel task execution via subagents with both spec-compliance and code-quality reviews, and includes built-in git worktree workflows and tmux monitoring for multi-agent orchestration.

## Use Cases

Developers hand off coding tasks to agents while retaining full design reviewability and auditability over the process. Teams use Superpowers to rapidly build prototypes with strong test coverage, break large features into small parallel tasks for faster delivery, and share reusable skills across agent platforms like Claude Code, Codex, and OpenCode.

## Technical Details

Superpowers is a script- and configuration-driven skills library designed to work across multiple coding agent platforms. It supports installation through the Claude Code plugin marketplace, ships with comprehensive example tests and contributor guides for adding new skills, and features a lightweight modular architecture that integrates with minimal friction into existing automation pipelines.
