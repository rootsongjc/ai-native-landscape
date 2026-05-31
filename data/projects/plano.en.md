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

## Detailed Introduction

Plano is an open-source AI gateway focused on production-grade LLM traffic management. It provides a unified ingress layer for multiple model backends and API providers, helping teams standardize access control, routing behavior, and runtime policies without tightly coupling application code to a single vendor.

## Main Features

- Unified AI gateway layer for multi-provider and multi-model traffic.
- Policy-driven routing and governance for request control and compliance.
- Observability primitives for tracing, monitoring, and operational debugging.
- Production-oriented architecture for reliability, rollout safety, and scale.

## Use Cases

- Route traffic across different model providers with fallback and resilience controls.
- Enforce centralized safety, auth, and policy checks for AI requests.
- Standardize AI platform interfaces for internal teams and multi-tenant systems.

## Technical Features

- Designed as an extensible gateway/runtime boundary for AI applications.
- Emphasizes operational controls needed in enterprise and platform environments.
- Suitable as a control plane entry point for rapidly evolving LLM stacks.
