---
name: TraceRoot
slug: traceroot
homepage: https://traceroot.ai
repo: https://github.com/traceroot-ai/traceroot
license: Apache-2.0
category: training-optimization
subCategory: observability-monitoring
tags:
  - Observability
  - AI Agent
  - LLM Observability
  - Debugging
  - Evaluation
description: >-
  TraceRoot is an open-source observability and self-improving layer for AI agents. It detects production failures,
  root-causes them against source code and GitHub history, opens verified fix PRs, and evals every fix.
author: TraceRoot AI
ossDate: '2025-07-22T19:50:15.000Z'
featured: false
status: tracked
---

## Overview

TraceRoot is an open-source self-improving layer for AI agents. It monitors production traces for failures such as hallucinations, tool failures, logic errors, and safety violations, then automatically root-causes each failure against the agent's source code and GitHub history and opens a verified fix PR. Confirmed failures feed back into golden datasets and offline evals, forming a continuous improvement loop across releases.

## Key Features

- LLM-as-judge Detectors that screen incoming traces for hallucinations, tool/logic failures, safety violations, and intent drift, with Slack/email alerts
- Agentic Debugging that connects to a sandbox of your production source code, pinpoints the exact failing line, and correlates it with GitHub commits, PRs, and issues
- One-click conversion of production findings into golden datasets, with offline evals runnable from the CLI or SDK inside coding agents like Claude Code, Codex, and Cursor
- OpenTelemetry-compatible tracing for LLM calls, agent actions, and tool usage, with noise filtering to surface high-signal traces

## Use Cases

- Monitoring AI agents in production and catching failures without manual trace review
- Root-causing agent regressions tied to code changes, tool instability, or model updates
- Building eval datasets from real production failures and verifying every fix before release
- Teams needing self-hosted agent observability with no vendor lock-in

## Technical Details

- Core licensed under Apache-2.0, with enterprise features isolated in `ee/` directories under a separate license
- Tracing ingested via OpenTelemetry-compatible protocol; Python and TypeScript SDKs with automated instrumentation for LangChain, LlamaIndex, CrewAI, AutoGen, OpenAI Agents SDK, Claude Agent SDK, Pydantic AI, Vercel AI SDK, and more
- Root cause analysis runs an AI debugger against a sandbox containing the production source code, cross-referencing GitHub commit and PR history to attribute failures to specific changes
- BYOK (bring your own key) support for OpenAI, Anthropic, Gemini, xAI, DeepSeek, OpenRouter, Kimi, GLM, and other model providers
- Self-hostable via Docker Compose for local development, or Helm + Terraform on Kubernetes for production deployment
