---
name: Hermes Agent
slug: hermes-agent
homepage: https://hermes-agent.nousresearch.com/docs
repo: https://github.com/nousresearch/hermes-agent
license: MIT
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - AI Agent
  - CLI
  - Dev Tools
description: >-
  Hermes Agent is an open-source, self-improving AI agent by Nous Research with a built-in learning loop, autonomous
  skill creation and refinement, cross-session memory retrieval, multi-platform messaging gateway, and scheduled
  automations, deployable from a $5 VPS to GPU clusters.
author: Nous Research
ossDate: '2025-07-22T22:22:28Z'
featured: false
status: tracked
---

## Overview

Hermes Agent is a self-improving AI agent built by Nous Research with the core philosophy of growing with you. It is the only agent with a complete built-in learning loop — it creates skills from experience, refines them during use, nudges itself to persist knowledge, searches past conversations, and builds a deepening model of who you are across sessions. Hermes supports free switching between multiple LLM providers including Nous Portal, OpenRouter (200+ models), OpenAI, Anthropic, and more, with no code changes and no vendor lock-in.

## Key Features

- Closed learning loop: agent-curated memory with periodic nudges, autonomous skill creation after complex tasks, skills that self-improve during use, FTS5 full-text search with LLM summarization for cross-session recall.
- Multi-platform messaging gateway: single gateway process supporting Telegram, Discord, Slack, WhatsApp, Signal, and CLI, with voice memo transcription and cross-platform conversation continuity.
- Full terminal UI: complete TUI with multiline editing, slash-command autocomplete, conversation history, interrupt-and-redirect, and streaming tool output.
- Scheduled automations: built-in cron scheduler with delivery to any platform, supporting natural-language-defined daily reports, nightly backups, and weekly audits running unattended.
- Subagent delegation and parallelization: spawn isolated subagents for parallel workstreams, write Python scripts that call tools via RPC, collapsing multi-step pipelines into zero-context-cost turns.
- Flexible deployment: six terminal backends — local, Docker, SSH, Daytona, Singularity, and Modal — runnable on a $5 VPS or a GPU cluster.
- Research support: batch trajectory generation, Atropos RL environments, and trajectory compression for training the next generation of tool-calling models.

## Use Cases

- Always-on personal AI assistant accessible via Telegram, Discord, and other platforms, combined with scheduled tasks for automated workflows.
- Drop-in replacement for OpenClaw with a complete transition path from setup wizard to data migration.
- Deploying long-running automated agents on low-budget VPS with serverless backends for on-demand wake-up and cost optimization.
- Generating training trajectories in AI research scenarios for reinforcement learning and tool-calling model iteration.

## Technical Highlights

- Written in Python with uv dependency management, providing 40+ built-in tools and a toolset system.
- MCP integration support for connecting any MCP server to extend capabilities.
- Compatible with the agentskills.io open skill standard, with Honcho dialectic user modeling.
- Licensed under MIT, with documentation hosted at hermes-agent.nousresearch.com.
