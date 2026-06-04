---
name: Plano
slug: plano
homepage: https://docs.planoai.dev/
repo: https://github.com/katanemo/plano
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - Inference
  - LLM Router
description: Plano is an open-source AI gateway and policy runtime for routing, securing, and observing production LLM/API traffic.
author: Katanemo
ossDate: '2026-04-10T00:00:00Z'
featured: false
status: tracked
---

Plano is an AI-native proxy and data plane purpose-built for agentic applications, combining request routing, safety guardrails, and deep observability in a single open-source gateway. It sits between application code and LLM providers, giving teams centralized control over how agents communicate with models while keeping vendor coupling to a minimum.

## Unified Gateway

- Routes traffic across multiple LLM providers with automatic fallback and resilience controls
- Separates the control plane from model backends for clean architectural boundaries
- Plugin architecture supporting custom middleware for routing, transformation, and policy enforcement

## Safety & Policy Enforcement

- Built-in auth, content filtering, and compliance rules applied to every AI request
- Per-tenant rate limits and governance policies for multi-tenant SaaS products
- Ensures every agent request is authenticated, logged, and policy-compliant

## Observability

- Native distributed tracing for end-to-end request visibility across providers
- Structured metrics and request-level logging for operational debugging
- Deep observability into agent-to-model communication for production reliability
