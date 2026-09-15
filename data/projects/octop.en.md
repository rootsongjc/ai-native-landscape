---
name: Octop
slug: octop
homepage: null
repo: https://github.com/TencentCloud/Octop
license: MIT
category: applications-products
subCategory: chat-interfaces
tags:
  - Agents
  - Chatbot
  - Self-Hosted
  - Multi-Agent
  - MCP
  - ACP
description: A self-hosted, multi-user, multi-agent AI assistant from Tencent Cloud that serves a web dashboard, CLI, and IM channels (Feishu, DingTalk, QQ, Discord, WeCom) from a single process.
author: Tencent Cloud
ossDate: '2026-07-08'
featured: false
status: tracked
---

## Overview

Octop is an open-source, self-hosted AI assistant platform for households and small teams. A single process serves a web dashboard, a CLI, IM channels (Feishu, DingTalk, QQ, Discord, WeCom), and cron automation — all sharing one SQLite database under `~/.octop/`. Each user gets a personal team of specialized agents with per-agent workspaces, providers, channels, and personas.

## Key Features

- Multi-user JWT authentication with admin role; each user runs multiple agents with isolated workspaces, providers, and channels
- Expert library with scenario-based specialist switching plus 16 MBTI persona templates
- IM channels (Feishu, DingTalk, QQ, Discord, WeCom) unified through one message pipeline alongside Web UI, CLI, HTTP/SSE API, and natural-language/slash-command cron jobs
- ACP bidirectional integration — expose Octop agents to IDEs via `octop acp`, or delegate to OpenCode, Claude Code, Codex, and CodeBuddy runners with permission gates
- Browser AI (headless Chromium automation), terminal AI (browser shell with AI-assisted execution), and cross-platform remote desktop streaming
- Connectors ecosystem: Tencent suite, OAuth apps, and MCP gateways; pluggable workspace backends (local disk, Docker, PostgreSQL, COS/S3)

## Use Cases

- Household or small-team shared AI assistant with per-user agent teams, keeping all conversations and credentials local
- Multi-channel chatbot serving Feishu/DingTalk/QQ/Discord/WeCom from one self-hosted deployment
- Scheduled, proactive agent tasks via natural-language cron triggers

## Technical Details

- Built on the Harness stack composed into one process: harness-agent (model routing, tools, skills, checkpointing), harness-gateway (multi-platform IM bridge), harness-memory (hierarchical recall with FTS), harness-browser (CDP automation) — no external queue or broker; every surface routes through one in-process HarnessProcessor
- Single restart-safe process whose entire state rebuilds from `~/.octop/octop.db` (SQLite WAL via aiosqlite) on boot; PostgreSQL available as an alternative control-plane backend
- FastAPI + uvicorn backend with React 18 + TypeScript + Vite + Ant Design dashboard shipped as a wheel artifact; APScheduler for cron; agent-client-protocol for ACP
- Security model: JWT multi-user isolation, tool approval, user-editable shell command allow/deny rules under `~/.octop/security/tool_guard/`, PII redaction, and bubblewrap execute jails for local backends
- Installable via one-line installer (uv-provisioned isolated venv), PyPI (`pip install octop`), or Docker Compose; registers as systemd/launchd/Windows service via `octop service start`
