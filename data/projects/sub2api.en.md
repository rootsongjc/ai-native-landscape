---
name: Sub2API
slug: sub2api
homepage: null
repo: https://github.com/Wei-Shaw/sub2api
license: LGPL-3.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - API Proxy
  - Claude
  - OpenAI Compatible
  - Account Pooling
  - Self-hosted
description: A self-hosted gateway that converts Claude, OpenAI, Gemini, and Grok subscriptions into OpenAI-compatible API endpoints, with multi-account scheduling, token-level billing, and key distribution.
author: Wei-Shaw
ossDate: '2025-12-18T00:00:00Z'
featured: false
status: tracked
---

## Overview

Sub2API is a self-hosted AI API gateway that turns Claude, OpenAI, Gemini, and Grok subscriptions into OpenAI-compatible API endpoints. It lets multiple users share subscription quotas through generated API keys while handling authentication, scheduling, billing, and request forwarding.

## Key Features

- Multi-account management across providers, supporting both OAuth subscription accounts and API-key accounts with automatic token refresh.
- Smart scheduler with sticky sessions for conversation continuity, plus per-user and per-account concurrency limits.
- Token-level billing with built-in payment integration (EasyPay, Alipay, WeChat Pay, Stripe).
- Composite groups: admin routing layer that resolves requested models to concrete upstream providers.
- Web admin dashboard for monitoring accounts, keys, and usage.

## Use Cases

- Teams sharing Claude/GPT subscription quotas across members with per-user keys and usage accounting.
- Unifying multiple AI provider accounts behind a single OpenAI-compatible endpoint for internal tools.
- Running subscription-to-API relay services with cost splitting ("carpool") and billing policies.

## Technical Details

- Backend written in Go on the Gin framework with Ent ORM; frontend is a Vue 3 + TailwindCSS admin dashboard.
- PostgreSQL for persistent data; Redis for session state, rate limiting, and distributed coordination.
- Gateway core performs protocol conversion between OpenAI, Anthropic (/v1/messages), and Gemini (/v1beta) formats, keeping native tools like Claude Code working transparently.
- Scheduler selects upstream accounts by model, health, and sticky-session requirements; failed accounts are removed from rotation by health monitoring.
- OAuth flows store access/refresh tokens with expiry tracking; Grok accounts get media eligibility checks via billing probes.
