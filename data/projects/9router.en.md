---
name: 9router
slug: 9router
homepage: https://9router.com
repo: https://github.com/decolua/9router
license: MIT
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - LLM Routing
  - Token Saver
  - Proxy
description: >-
  A free AI router and token saver that connects Claude Code, Codex, Cursor, Cline, Copilot and other coding tools to 40+
  providers and 100+ models, with tiered auto-fallback from subscriptions to cheap and free tiers and 20-40% token savings.
author: decolua
ossDate: '2026-01-05'
featured: false
status: tracked
---

## Overview

9Router is a local AI gateway aimed at "never stop coding" — it fronts the coding tools you already use (Claude Code, Codex, Cursor, Copilot, Gemini, OpenCode, Cline, Antigravity, OpenClaw) and routes their requests through 40+ providers and 100+ models. It tracks subscription quotas and falls back automatically from subscription tiers to cheap paid models and then to free providers, while its RTK token saver compresses tool output to cut token usage on every request.

## Key Features

- Connect any CLI coding tool to a single local endpoint (`http://localhost:20128/v1`) covering 40+ providers and 100+ models
- Tiered auto-fallback: subscription (Claude Code, Codex, GitHub Copilot) → cheap (GLM, MiniMax) → free (Kiro, OpenCode Free, Vertex credits), with zero downtime on quota exhaustion
- RTK token saver auto-compresses `tool_result` content such as git diff, grep, and ls output, saving 20-40% tokens per request
- Quota tracking to maximize subscriptions before reset, plus automatic token refresh
- Multi-account round-robin between accounts per provider
- Format translation between OpenAI and Claude API shapes so any tool can talk to any backend
- Web dashboard at `localhost:20128` for connecting providers and copying keys

## Use Cases

- Keeping long coding sessions alive through rate limits and quota exhaustion without manual provider switching
- Squeezing full value out of paid subscriptions before falling back to cheaper or free models
- Using one free provider (Kiro, OpenCode Free) as a zero-cost entry point for Claude Code or Codex
- Reducing token burn from verbose tool output in agent-heavy workflows

## Technical Details

- Runs as a local proxy: coding tools point at `http://localhost:20128/v1`, and the router performs OpenAI ↔ Claude format translation, quota tracking, and token refresh before forwarding to the chosen backend
- Routing follows a three-tier model (subscription → cheap → free): each tier is tried in order and the next takes over when quota or budget limits are hit, so the client never sees a provider error
- RTK token-saver compresses `tool_result` payloads in place, cutting measured request size by 20-40% on outputs like git diffs and grep listings
- Multi-account support rotates across accounts per provider with round-robin and handles OAuth token refresh automatically
- Distributed via npm (`npm install -g 9router`) and Docker; the dashboard and provider setup run as a Next.js app on port 20128
