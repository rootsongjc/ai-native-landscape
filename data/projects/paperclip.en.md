---
name: Paperclip
slug: paperclip
homepage: null
repo: https://github.com/paperclipai/paperclip
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Agents
  - Automation
  - Orchestration
description: >-
  Paperclip is a Node.js server and React UI that orchestrates a team of AI agents to run a business. It manages org
  charts, budgets, governance, goal alignment, and agent coordination, letting users track their agents' work and costs
  from one dashboard.
logo: ''
author: paperclipai
ossDate: '2026-01-15'
featured: false
status: tracked
---

## Overview

Paperclip is an open-source orchestration platform designed for "zero-human companies." If OpenClaw is an employee, Paperclip is the company itself. It provides a complete organizational structure that enables multiple AI agents to work together to achieve business goals.

## Key Features

- **Bring Your Own Agent**: Any agent, any runtime, one org chart. If it can receive a heartbeat, it's hired.
- **Goal Alignment**: Every task traces back to the company mission. Agents know what to do and why.
- **Heartbeats**: Agents wake on a schedule, check work, and act. Delegation flows up and down the org chart.
- **Cost Control**: Monthly budgets per agent. When they hit the limit, they stop. No runaway costs.
- **Multi-Company**: One deployment, many companies. Complete data isolation. One control plane for your portfolio.
- **Ticket System**: Every conversation traced. Every decision explained. Full tool-call tracing and immutable audit log.
- **Governance**: You're the board. Approve hires, override strategy, pause or terminate any agent — at any time.
- **Org Chart**: Hierarchies, roles, reporting lines. Your agents have a boss, a title, and a job description.
- **Mobile Ready**: Monitor and manage your autonomous businesses from anywhere.

## Use Cases

- **Build autonomous AI companies**: You want to build companies powered entirely by AI
- **Coordinate many agents**: You're using OpenClaw, Codex, Claude, Cursor simultaneously and need unified management
- **24/7 autonomous operation**: You want agents running autonomously around the clock, but still need to audit work and chime in when needed
- **Cost monitoring**: You need to monitor costs and enforce budget constraints
- **Task manager experience**: You want a process for managing agents that feels like using a task manager
- **Mobile management**: You need to manage your autonomous businesses from your phone

## Technical Highlights

- **Atomic execution**: Task checkout and budget enforcement are atomic, so no double-work and no runaway spend.
- **Persistent agent state**: Agents resume the same task context across heartbeats instead of restarting from scratch.
- **Runtime skill injection**: Agents can learn Paperclip workflows and project context at runtime, without retraining.
- **Governance with rollback**: Approval gates are enforced, config changes are revisioned, and bad changes can be rolled back safely.
- **Goal-aware execution**: Tasks carry full goal ancestry so agents consistently see the "why," not just a title.
- **Portable company templates**: Export/import orgs, agents, and skills with secret scrubbing and collision handling.
- **True multi-company isolation**: Every entity is company-scoped, so one deployment can run many companies with separate data and audit trails.

Paperclip handles the hard orchestration details correctly, so you can focus on managing business goals, not pull requests. Open source, self-hosted, no Paperclip account required.
