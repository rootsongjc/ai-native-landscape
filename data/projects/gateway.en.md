---
name: AI Gateway (Portkey)
slug: gateway
homepage: https://portkey.wiki/gh-10
repo: https://github.com/portkey-ai/gateway
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - Inference
description: >-
  Portkey's AI Gateway is a high-performance, enterprise-ready LLM routing and governance platform that supports many
  model providers and rich guardrail policies.
logo: ''
author: Portkey-AI
ossDate: '2023-08-23T11:52:47.000Z'
featured: false
status: tracked
---

Portkey's AI Gateway is a lightweight, enterprise-grade routing layer that connects requests to 200+ model providers and supports multiple modalities. It offers fast routing, retries and fallbacks, load balancing, extensible guardrails for safety, and auth controls—making it suitable for managing large-scale LLM traffic in production.

## Key features

- Reliable routing: supports fallbacks, automatic retries and rule-based routing to improve availability.
- Multi-modal & broad provider support: integrate text, audio and image models from 200+ providers.
- Security & governance: built-in guardrails, secure key management and role-based access control for compliance.
- Cost & performance optimizations: smart caching, usage analytics and provider optimizations to lower cost and latency.

## Use cases

- Centralized management of multiple LLM providers and model routing within products or enterprises.
- Stable, low-latency model access layer requiring fallbacks and rate-limiting policies.
- Multi-modal or agentic applications that need flexible provider integrations and workflow controls.

## Technical details

- Implementation & ecosystem: primarily implemented in TypeScript, with JS/Node and Python clients, cookbooks and deployment guides.
- Deployment & compatibility: supports Docker, Node.js server, Cloudflare Workers and enterprise cloud deployments; provides an admin console and deployment blueprints.
- Documentation & community: comprehensive docs at <https://portkey.wiki/gh-10> and an active community with many integration examples.
