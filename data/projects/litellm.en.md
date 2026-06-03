---
name: LiteLLM
slug: litellm
homepage: https://docs.litellm.ai/docs/
repo: https://github.com/berriai/litellm
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
description: >-
  LiteLLM is a lightweight LLM gateway and proxy framework providing a unified OpenAI-format API, routing, rate-limits,
  and pluggable provider integrations for production deployments.
author: BerriAI
ossDate: '2023-07-27T00:09:52.000Z'
featured: false
status: tracked
---

## Introduction

LiteLLM (LiteLLM Proxy / LLM Gateway) provides a unified proxy layer that exposes multiple model providers (OpenAI, Anthropic, Azure, Vertex, Hugging Face, etc.) in an OpenAI-compatible format, with routing, retry, rate-limiting and provider-plugin support.

## Key features

- Unified OpenAI-format proxy API compatible with major providers.
- Routing, retries and fallback strategies to achieve high availability across backends.
- Key management, rate limits and cost tracking for production deployments.
- Pluggable provider integrations and observability callbacks for logging/monitoring.

## Use cases

- Building enterprise LLM Gateways/Proxies to aggregate multiple model backends.
- Converting third-party provider APIs into a single OpenAI-style interface for downstream apps.
- Production environments that require traffic control, quotas, and auditing.

## Technical highlights

- Core proxy logic implemented in Python, dashboard and UI in TypeScript/JS.
- Broad provider support and plugin-based architecture to add new backends.
- Docker and Helm deployment examples for cloud and Kubernetes environments.
