---
name: OmniRoute
slug: omniroute
homepage: https://omniroute.online
repo: https://github.com/cheaper-inference/OmniRoute
license: MIT
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - LLM Routing
  - Token Optimization
  - Free Tier
description: >-
  A free MIT-licensed AI gateway that fronts 380 providers (150+ with free
  tiers) and 1,400+ models behind one endpoint for Claude Code, Codex, Cursor,
  Cline, and Copilot, with quota-aware auto-fallback and stacked token
  compression.
author: cheaper-inference
ossDate: '2026-02-13'
featured: false
status: tracked
---

## Overview

OmniRoute is a bring-your-own-account AI gateway that catalogs hundreds of providers — including 150+ with free tiers — behind a single endpoint. Coding tools such as Claude Code, Codex, Cursor, Cline, and Copilot connect once and route to Kimi, Claude, GPT, Gemini, GLM, DeepSeek, and MiniMax models, with automatic fallback when a quota runs out so coding never stalls on a rate limit.

## Key Features

- One endpoint fronting 380 providers and roughly 1,475 unique chat model IDs
- Catalog of 485 free-tier entries across 34 recurring pools, with an audited ~1.62B free tokens per month aggregate shown on a live dashboard
- Quota-aware auto-fallback (Quota-Share) with live quota telemetry, so requests rotate across providers as limits are hit
- Stacked RTK + Caveman compression saving 15–95% of tokens at the gateway
- Modality bridge passes vision, audio, and video through the same routing
- Runs as npm package, Docker container, desktop app, or PWA; private and local-first

## Use Cases

- Keep Claude Code or Cursor coding through provider rate limits by stacking free tiers behind one endpoint
- Cut token spend on coding agents with gateway-level compression
- Discover and compare available models and free quotas via the model discovery API and dashboard

## Technical Details

- Quota-aware scheduling (Quota-Share) tracks each provider's remaining budget and rotates traffic across free tiers automatically; live telemetry exposes used/remaining quota on a `/dashboard/free-tiers` page whose budget math is pool-deduplicated and re-audited every two weeks
- Stacks RTK and Caveman compression at the gateway to strip 15–95% of tokens before requests reach the provider, transparently to the coding tool
- Exposes MCP and A2A interfaces alongside a headless `serve --headless` mode for server deployments, and a `/v1/models/query` discovery API for programmatic model lookup
- Ships through npm, Docker Hub, an Electron desktop build, and a PWA, all local-first with provider credentials staying on your machine
