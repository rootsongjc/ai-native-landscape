---
name: vLLM Semantic Router
slug: semantic-router
homepage: https://vllm-semantic-router.com/
repo: https://github.com/vllm-project/semantic-router
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - Inference
  - LLM Router
description: >-
  An intelligent Mixture-of-Models router that directs requests to the most suitable models to improve inference
  accuracy and efficiency.
logo: ''
author: vLLM Semantic Router 团队
ossDate: '2025-08-26T21:49:50.000Z'
featured: false
status: tracked
---

## Introduction

vLLM Semantic Router is a high-performance routing framework that uses semantic understanding to dispatch requests to the best-suited model or service, improving accuracy while optimizing cost and latency.

## Key features

- Semantic classification-based model selection (BERT classifier / Mixture-of-Models).
- Similarity caching to reduce redundant computation and latency.
- Enterprise-grade security: PII detection and prompt guard.

## Use cases

- Request routing and model orchestration in multi-model deployments.
- Inference platforms balancing latency, cost, and accuracy.
- Integrating routing as part of an AI gateway or microservice stack.

## Technical details

- Multi-language implementation (Go core with Python benchmarks and Rust bindings).
- Integrations with vLLM and Hugging Face Candle backends, with Grafana dashboards and deployment scripts.
- Comprehensive docs, examples and benchmarks (bench & examples).
