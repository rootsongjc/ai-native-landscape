---
name: Plano
slug: plano
homepage: https://docs.planoai.dev/
repo: https://github.com/katanemo/plano
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - Inference
  - LLM Router
description: Plano is an open-source AI gateway and policy runtime for routing, securing, and observing production LLM/API traffic.
logo: ''
author: Katanemo
ossDate: '2026-04-10T00:00:00Z'
featured: false
status: tracked
---

## Overview

Plano is an AI-native proxy and data plane purpose-built for agentic applications, combining request routing, safety guardrails, and deep observability in a single open-source gateway. It sits between application code and LLM providers, giving teams centralized control over how agents communicate with models while keeping vendor coupling to a minimum.

## Key Features

- A unified gateway that routes traffic across multiple LLM providers with automatic fallback and resilience controls.
- Built-in safety and policy enforcement layer that applies auth, content filtering, and compliance rules to every AI request.
- Native observability primitives including distributed tracing, structured metrics, and request-level logging for operational debugging.

## Use Cases

Platform teams can use Plano to standardize AI access for internal developers across multiple models and providers without locking into a single vendor. Agentic applications benefit from the built-in orchestration and safety layer that ensures every agent request is authenticated, logged, and policy-compliant. Multi-tenant SaaS products can enforce per-tenant rate limits and governance at the gateway level.

## Technical Details

Plano is designed as an extensible proxy and runtime boundary that separates the control plane from model backends. Its plugin architecture supports custom middleware for routing, transformation, and policy enforcement, making it suitable as the single entry point for rapidly evolving LLM stacks in enterprise environments.
