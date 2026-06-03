---
name: Plannotator
slug: plannotator
homepage: https://plannotator.ai
repo: https://github.com/backnotprop/plannotator
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Code Agent
  - Dev Tools
  - Tool
  - UI
description: >-
  Plannotator is an interactive plan and code review tool for AI coding agents, featuring visual annotations, team
  collaboration, and one-click feedback, compatible with Claude Code, Copilot CLI, Gemini CLI, and more.
author: backnotprop
ossDate: '2025-05-01'
featured: false
status: tracked
---

## Overview

Plannotator is an interactive plan and code review tool purpose-built for AI coding agents. When an agent finishes planning, Plannotator opens a visual UI in your browser where you can annotate plans inline (delete, insert, replace, comment). Approve to let the agent proceed, or request changes and your annotations are sent back as structured feedback.

It integrates with Claude Code, Copilot CLI, Gemini CLI, OpenCode, Pi, and Codex through built-in hooks that activate automatically. Sharing is privacy-first with end-to-end encryption, making team collaboration secure and seamless.

## Key Features

- **Visual Plan Review**: Built-in hooks automatically open a visual UI in your browser when the agent finishes planning, with inline annotations and approve/reject actions.
- **Plan Diff**: Automatically shows what changed when the agent revises a plan, making iteration tracking straightforward.
- **Code Review**: Use `/plannotator-review` to view git diffs or remote PRs, package annotations, and leverage AI-assisted code review.
- **File Annotation**: Use `/plannotator-annotate` to annotate Markdown, HTML, URLs, or folders and send feedback directly to your agent.
- **Team Collaboration Sharing**: Small plans are encoded entirely in the URL hash with no server involved. Large plans use end-to-end encrypted (AES-256-GCM) short links that auto-delete after 7 days.
- **Multi-Agent Support**: Compatible with Claude Code, Copilot CLI, Gemini CLI, OpenCode, Pi, and Codex.

## Use Cases

- **Agent Plan Review**: Visually review and modify AI coding agent plans before execution, ensuring the approach meets expectations.
- **Code Diff Review**: Inspect git diffs or GitHub PRs with AI-assisted code review and feed annotations back to the agent.
- **Team Collaboration**: Privately share plans or code reviews with colleagues, collect their annotations, import them, and send structured feedback to the agent.
- **Specification Annotation**: Annotate project specs, requirements docs, or any file and send structured feedback to the agent as context.

## Technical Highlights

- Hook-based integration with six major coding agents, activating plan review automatically after installation.
- End-to-end encrypted sharing (AES-256-GCM) with zero-knowledge storage architecture, similar to PrivateBin.
- Small plans use URL hash encoding with no server storage required.
- Self-hostable with full source code available under Apache-2.0 / MIT dual license.
- SHA256 checksums and SLSA provenance verification for binary security.
