---
name: ArchGW
slug: archgw
homepage: https://docs.archgw.com/
repo: https://github.com/katanemo/archgw
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - Observability
  - Orchestration
description: >-
  ArchGW is a model-native proxy server for agents that provides routing, guardrails, tool calling and end-to-end
  observability.
logo: ''
author: Arch (katanemo)
ossDate: '2024-07-09T20:25:56Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

ArchGW (Arch) is a model-native proxy server for agents designed to extract the low-level plumbing of agentic apps—routing, guardrails, tool calling, and unified LLM access—out of application code. Built atop Envoy-like principles, Arch offers unified access to multiple model providers, preference-aware routing strategies, function-call conversion, and end-to-end tracing to accelerate engineering agentic capabilities while ensuring observability and safety.

## Key Features

- Flexible model routing strategies: model-based, alias-based, and preference-aligned routing
- Centralized guardrails and input/output validation for safer behavior
- Automatic conversion of prompts into API/tool calls for common agent workflows
- End-to-end observability with W3C tracing and LLM metrics integration
- Envoy integration for easy deployment within existing traffic management stacks

## Use Cases

Ideal for platforms and organizations that need unified model access, centralized governance for prompts and outputs, or fast rollout of agentic capabilities across services. Typical deployments include enterprise AI infrastructure, regulated environments requiring auditability, and large-scale model routing scenarios.

## Technical Highlights

Implemented primarily in Rust with Python tooling, Arch emphasizes performance, extensibility, and production readiness. The project provides extensive documentation, demos, and deployment guides, supporting containerized deployments and integration with observability backends.
