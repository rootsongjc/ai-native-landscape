---
name: Unified AI System
slug: unified-ai-system
homepage: https://happy520ai.github.io/unified-ai-system/
repo: https://github.com/happy520ai/unified-ai-system
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - LLM Routing
  - MCP
  - Virtual Keys
  - Self-Hosted
  - Guardrails
description: An Apache-2.0 self-hosted AI gateway and MCP server that fronts OpenAI, Anthropic, and Gemini APIs with virtual keys, budgets, caching, guardrails, reverse MCP governance, and provider-free deterministic prompt enhancement.
author: happy520ai
ossDate: '2026-04-27'
featured: false
status: tracked
---

## Overview

Unified AI System is a self-hosted, protocol-first AI gateway and MCP control plane. Agent clients — Codex, Cursor, Cline, VS Code, Claude Code, Gemini CLI, OpenCode, Continue, and generic stdio clients — keep their native protocols while the gateway adds virtual keys, budgets, caching, guardrails, observability, and audit in front of real providers. It is fake-provider-first: every feature can be exercised with zero credentials, and the deterministic prompt-enhancement path never calls a model provider.

## Key Features

- OpenAI-, Anthropic-, and Gemini-compatible APIs from one endpoint: `/v1/chat/completions` (SSE streaming, tools, image/audio input), `/v1/messages` with native Anthropic streaming and prompt-caching passthrough, native Gemini inbound `:generateContent` family, the Responses API, and model discovery — keep the SDK, change the base URL
- Virtual `uai-` keys with periodic token budgets (daily/monthly windows), per-key request limits, soft-budget alerts, spend attribution, and instant revocation; consumers never hold provider keys
- Response cache with byte-identical JSON/SSE replay plus an opt-in lexical-approximate similarity layer (attach a real embedding endpoint for semantic-grade matching)
- Deterministic, fully local guardrails: pasted-secret block, PII redaction, injection phrasing warnings, banned terms and size limits — measured under 0.2 ms overhead, runtime-configurable per rule
- Reverse MCP governance aggregating upstream Streamable HTTP and stdio MCP servers behind one authenticated, audited, allow-listed surface, plus REST→MCP turning any OpenAPI 3 spec into governed tools
- A2A v1.0 gateway with optional Agent Card/JWKS signature verification and tenant-scoped task execution

## Use Cases

- Giving MCP-compatible coding clients (Codex, Cursor, Cline) a governed, audited entry point to model providers
- Issuing budgeted virtual keys to teammates or services without sharing provider credentials
- Enhancing rough prompts deterministically before they reach a model — execution requirements, output requirements, and completion criteria added with `providerCalled=false` evidence
- Running multi-instance deployments with cross-host quotas, idempotency, and audit chains

## Technical Details

- Prompt enhancement is deterministic and provider-free by design; the browser Prompt Lab renders enhanced prompts locally with no account, API key, or network call, and the published Docker image runs the same proof with visible evidence
- Provider governance uses a three-gate whitelist matrix with memory-only runtime credentials by default; opt-in AES-256-GCM encrypted persistence with a separately protected master key, hashed virtual keys, request cost guards, circuit breakers, and fallback chains
- Security posture: JWT auth, RBAC, tenant isolation with audit hash chains verified by a repeatable 23-attack live security regression; OIDC SSO (authorization code + PKCE + JWKS verification) and SCIM 2.0 provisioning
- Observability: chat-specific Prometheus metrics (tokens per model, cache hit rates, TTFT histograms, guardrail findings) plus optional Langfuse export and per-key spend reporting; `GET /api/overview` terminal-first snapshot
- Multi-instance modes: same-host SQLite by default; explicit PostgreSQL modes cover cross-host quotas, response idempotency, dispatch tombstones, leases and terminal fences, and a shared HMAC audit chain — with a destructive CI drill proving WAL replay, single-standby automatic failover, bridge fencing, and LSN-based PITR recovery
- Published single-node benchmark (fake provider): chat JSON p50 15.6 ms, SSE TTFT p50 2.8 ms, 402 req/s at concurrency 8, cache hits 5.6× faster than misses; weighted routing splits and shadow traffic configurable at runtime
