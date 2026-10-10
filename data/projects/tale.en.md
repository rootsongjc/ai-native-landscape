---
name: Tale
slug: tale
homepage: https://tale.dev
repo: https://github.com/tale-project/tale
license: MIT
category: agents
subCategory: agent-orchestration
tags:
  - Team Collaboration
  - Task Management
  - Agent Orchestration
  - Sandbox
  - Self-Hosted
  - Workflow Automation
  - MCP
description: An open-source project workspace where teammates and AI agents share one task board — agents run in persistent sandbox workspaces with per-agent runtime, model, skills, and tools, and results come back as reviewable reports and delivered files.
author: tale-project
ossDate: '2025-11-30'
featured: false
status: tracked
---

## Overview

Tale gives teammates and AI agents a shared project workspace. Add tasks to the board, assign people or agents, follow the work, and review reports and delivered files — with the brief, discussions, project knowledge, and results kept together. Each agent's runtime, model, skills, and tools are configured per agent, and agents run in persistent sandbox workspaces with concurrency limited by your configured capacity. Tale is MIT-licensed and can be self-hosted on your own infrastructure or used as a managed cloud service.

## Key Features

- Shared task board where tasks are assigned to people or agents side by side, with progress tracking and review of reports and delivered files
- Per-agent configuration of runtime, model, skills, and tools, using your own provider API keys or supported subscriptions with compatible agent runtimes
- Manager agent that delegates ready tasks and coordinates follow-up work across other agents
- Persistent sandbox workspaces per agent, with concurrency limited by configured capacity
- Workflow automation editor to inspect steps, test inputs, and review runs
- Governance guardrails and connectors that wire the workspace to the services your team already uses
- Chat with Arena mode to compare two model responses to the same prompt side by side

## Use Cases

- Delegating research questions, document reviews, report and marketing material preparation, or website/app/internal-tool builds to agents alongside human teammates
- Running a team workspace on your own infrastructure with self-hosted deployment while mixing agent runtimes and provider keys per agent
- Keeping briefs, discussions, knowledge, and agent deliverables in one reviewable place instead of scattered chat logs

## Technical Details

- TypeScript monorepo (services split under `services/`) with build and test CI; MIT-licensed with identical product features in Community and Enterprise editions (Enterprise adds operation and support)
- Agent execution goes through runtime harnesses with credential support — compatible runtimes include coding agents like Claude Code and Codex and personal agents like OpenClaw and Hermes, mixed with your own provider keys or subscriptions
- Agents operate in persistent sandbox workspaces rather than ephemeral sessions, so intermediate state and files survive across tasks; concurrency is bounded by configured capacity
- MCP support for tool integration, plus a connectors layer and configurable governance guardrails for policy control
- Deployment is self-hosted on your own infrastructure or via the managed Tale Cloud service
