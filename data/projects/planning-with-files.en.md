---
name: Planning with Files
slug: planning-with-files
homepage: https://www.aikux.ai
repo: https://github.com/othmanadi/planning-with-files
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Dev Tools
  - Workflow
description: A Manus-inspired workflow that uses persistent Markdown files to manage plans and agent skills.
author: Othman Adi
ossDate: '2026-01-03T07:37:28Z'
featured: false
status: tracked
---

Planning with Files is a Manus-inspired, file-based approach to AI agent planning that stores plans, tasks, and skill definitions as version-controlled Markdown files. By keeping all planning state in the file system, it makes agent workflows auditable, diffable, and easy to collaborate on using standard developer tools.

## File-Based Planning

- Plain-Markdown plan storage that integrates naturally with Git for versioned, reviewable, and reversible changes
- File-driven integration points for agent skills and tool-call flows as editable text artifacts
- Structured documents and explicit context files for straightforward retrieval and comparison

## Developer Toolchain Integration

- Lightweight, framework-agnostic design that fits into existing editors, CI/CD, and code review processes
- Agent plans and skill definitions managed with the same engineering rigor as application code
- Plans live alongside source code so changes go through standard review workflows

## Auditable Workflows

- Every plan change is tracked in version control with full diff and rollback capability
- Runtime state can be stored in the repository for complete historical visibility
- Enables teams to audit, compare, and iterate on agent behavior over time
