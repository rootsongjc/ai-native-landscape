---
name: Helicone
slug: helicone
homepage: null
repo: https://github.com/helicone/helicone
license: Unknown
category: training-optimization
subCategory: observability-monitoring
tags:
  - Observation
description: >-
  Helicone is an open-source LLM observability and analytics platform that captures requests, traces and sessions to
  help developers debug, evaluate and optimize model usage.
logo: ''
author: Helicone
ossDate: '2023-01-31T22:34:44.000Z'
featured: false
status: tracked
---

## Introduction

Helicone is an open-source LLM observability and analytics platform. With one line of integration, it captures requests, sessions and traces, offering visualization, metrics and cost/latency analysis to help developers and ops teams improve the quality of model calls.

## Key Features

- One-line integration: quick logging for OpenAI, Anthropic, Gemini and other providers.
- Tracing & playback: inspect requests and sessions for fine-grained debugging.
- Metrics & analytics: cost, latency and quality metrics with export options (e.g. PostHog).
- Prompt management: versioning and A/B testing for prompts and experiments.
- Cloud & self-hosting: Helicone Cloud or self-hosted deployment via Docker/Helm.

## Use Cases

- Development & debugging: observe request flows and context in real time to find issues.
- Cost optimization: analyze cost and latency across models and strategies.
- Quality evaluation: compare prompt/model variants and run automated evaluations.
- Compliance & auditing: preserve traces and sessions for governance and audits.

## Technical Highlights

- Multi-language SDKs: JavaScript/TypeScript and Python SDKs with example projects.
- Distributed analytics: uses ClickHouse for large-scale log aggregation and analysis.
- Cloud-native ready: Docker Compose and Helm Chart for Kubernetes deployments.
