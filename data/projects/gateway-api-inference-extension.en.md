---
name: Gateway API Inference Extension
slug: gateway-api-inference-extension
homepage: https://gateway-api-inference-extension.sigs.k8s.io/
repo: https://github.com/kubernetes-sigs/gateway-api-inference-extension
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
description: >-
  Combines Gateway API with Envoy External Processing to provide a Kubernetes-native inference gateway for optimizing
  GenAI inference deployments.
author: Kubernetes SIGs
ossDate: '2024-08-28T20:04:10.000Z'
featured: false
status: tracked
---
## Introduction

Gateway API Inference Extension (Inference Gateway) combines the Gateway API with Envoy's External Processing to provide Kubernetes-native capabilities for routing, scheduling and optimizing inference requests for self-hosted generative AI workloads.

## Key features

- Kubernetes-native declarative APIs (InferenceObjective / Inference Pool) for routing and traffic control.
- Pluggable schedulers and Endpoint Picker (EPP) supporting cost/performance-aware routing and prefix-cache aware load balancing.
- Operations and observability: Grafana dashboards, end-to-end tests, comprehensive docs and examples.

## Use cases

- Multi-model inference platforms on Kubernetes that need cost/performance-aware request routing.
- Integrating model routing into an AI gateway with LoRA adapter support, A/B traffic splitting and safety isolation.
- Integrations with vLLM, llm-d and other model servers for disaggregated scalable serving.

## Technical details

- Implemented primarily in Go, with Python tools/examples, documentation site and test suites included in the repo.
- Supports ext-proc, Envoy Gateway and adapters for multiple model server protocols.
- Provides CRDs, controllers and deployment scripts, and includes examples, benchmarks and E2E test workflows.
