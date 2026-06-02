---
name: gpustack
slug: gpustack
homepage: https://gpustack.ai
repo: https://github.com/gpustack/gpustack
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Dev Tools
  - ML Platform
description: Open-source GPU cluster manager for efficient model training and high-performance inference orchestration.
logo: ''
author: gpustack
ossDate: '2024-05-11T03:41:58.000Z'
featured: false
status: tracked
---

## Overview

GPUStack is an open-source GPU cluster manager that configures and orchestrates inference engines like vLLM and SGLang for high-performance AI model deployment. It unifies heterogeneous GPU resources into a single orchestratable pool, providing device discovery, resource abstraction, and centralized scheduling to help teams run distributed training and low-latency inference with improved GPU utilization and full observability.

## Key Features

GPUStack offers automatic resource pooling and device discovery that identifies GPU model, memory, and driver details across CUDA and ROCm stacks. It provides intelligent scheduling with policies based on job requirements and priorities, built-in metrics collection with Prometheus/Grafana integration, and extensible plugin hooks for custom schedulers and monitoring integrations.

## Use Cases

GPUStack is well-suited for research and education clusters that need to share GPUs across projects without memory or card conflicts, enterprise training platforms orchestrating large-scale distributed training, and online inference fleets that require dynamic GPU allocation by request load for low-latency, cost-effective serving.

## Technical Details

Built on cloud-native principles, GPUStack integrates with container ecosystems and exposes a RESTful API and CLI for automation. Its modular architecture supports independent deployment of scheduler, monitoring, and access layers, and it is released under the Apache-2.0 license with comprehensive community documentation.
