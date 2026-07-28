---
name: TokenHub
slug: tokenhub
homepage: https://thinkinai-labs.github.io/tokenhome/
repo: https://github.com/astaxie/TokenHub
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - Enterprise
  - LLM Routing
description: >-
  TokenHub is a private enterprise AI gateway that unifies multi-provider model access behind OpenAI- and
  Anthropic-compatible APIs, with role-based workspaces for users, team leaders, and administrators.
author: astaxie
ossDate: '2026-06-10T15:32:07Z'
featured: false
status: tracked
---
## Overview

TokenHub is a self-hosted, SQLite-first enterprise AI gateway written in Go with a Next.js console. It exposes OpenAI- and Anthropic-compatible endpoints over a catalog of upstream providers (OpenAI, Azure OpenAI, Anthropic, Gemini, DeepSeek, Qwen, and local vLLM/Ollama) and organizes access around three roles — users, team leaders, and administrators — so everyday model usage, team governance, and platform administration stay cleanly separated.

## Key Features

- OpenAI-compatible `/v1/chat/completions`, `/v1/responses`, `/v1/embeddings` and Anthropic `/v1/messages` APIs, plus image generation and reference-image editing
- Provider channels with a model catalog and routing policies supporting priority, weight, failover, and route health diagnostics
- Project-scoped API key management with member permissions, quotas, and concurrency controls
- Usage analytics and request logs attributed to user, project, team, model, and cost center
- Enterprise identity (OAuth/OIDC), RBAC, and audit trails
- SQLite-first private deployment via Docker Compose, with PostgreSQL for horizontal scaling

## Use Cases

Ideal for organizations that need a private, auditable AI gateway in front of multiple model providers — enterprise platform teams managing cost attribution, team leaders governing project access and quotas, and end users calling unified model APIs through project-scoped keys.

## Technical Details

- Go 1.26 backend with a Next.js 16 / React 19 console
- SQLite-first storage; PostgreSQL supported for multi-instance deployments with connection pooling
- i18n console in English, Chinese, and Japanese
- Codex subscription integration routing selected Codex CLI/desktop sessions through an isolated, recoverable profile
