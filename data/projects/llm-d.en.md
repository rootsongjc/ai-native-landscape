---
name: llm-d
slug: llm-d
homepage: https://www.llm-d.ai/
repo: https://github.com/llm-d/llm-d
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Inference
  - ML Platform
description: >-
  A Kubernetes-native distributed inference stack providing well‑lit paths for high-performance LLM serving across
  diverse accelerators.
logo: ''
author: llm-d
ossDate: '2025-04-29T18:28:17.000Z'
featured: false
status: tracked
---

## Overview

llm-d is a Kubernetes-native distributed inference stack that offers tested "well‑lit paths" for serving large generative models at scale. It integrates vLLM, Inference Gateway, and optimized routing and scheduling to reduce time-to-first-token and improve throughput across multi-vendor accelerators.

## Key Features

- Intelligent scheduling that is cache- and workload-aware to maximize KV cache utilization.
- Disaggregated serving patterns (prefill/decode) to reduce latency and improve predictability.
- Support for multiple accelerators and production-ready Helm charts and guides.

## Use Cases

- High-throughput, low-latency online LLM serving and conversational interfaces.
- Large-scale batch inference and embedding pipelines.
- Research and benchmarking of distributed inference strategies and cache-aware routing.

## Technical Details

- Integrates with vLLM and IGW, leveraging high-performance transports (e.g., NIXL) for inter-component communication.
- Provides Helm charts, guides, and reproducible examples for quick production adoption.
- Maintains active documentation and a CI-driven engineering workflow to support multiple deployment scales.
