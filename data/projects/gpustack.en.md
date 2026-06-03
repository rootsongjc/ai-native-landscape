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
author: gpustack
ossDate: '2024-05-11T03:41:58.000Z'
featured: false
status: tracked
---

GPUStack is an open-source GPU cluster manager that configures and orchestrates inference engines like vLLM and SGLang for high-performance AI model deployment. It unifies heterogeneous GPU resources into a single orchestratable pool, providing device discovery, resource abstraction, and centralized scheduling to help teams run distributed training and low-latency inference with improved GPU utilization.

## Resource Management

- Automatic resource pooling and device discovery across CUDA and ROCm stacks
- Identifies GPU model, memory, and driver details for optimal placement
- Heterogeneous GPU support combining NVIDIA and AMD hardware in one cluster
- Resource abstraction layer that simplifies multi-GPU orchestration

## Intelligent Scheduling

- Scheduling policies based on job requirements and priorities
- Dynamic GPU allocation by request load for cost-effective inference serving
- Multi-tenant isolation allowing safe GPU sharing across projects
- Extensible plugin hooks for custom schedulers and monitoring integrations

## Observability and Operations

- Built-in metrics collection with Prometheus and Grafana integration
- RESTful API and CLI for automation and operational management
- Modular architecture supporting independent deployment of scheduler, monitoring, and access layers
- Cloud-native design integrated with container ecosystems

## Supported Workloads

- Research and education clusters sharing GPUs without memory or card conflicts
- Enterprise training platforms orchestrating large-scale distributed training
- Online inference fleets requiring low-latency, high-throughput serving
- Apache-2.0 licensed with comprehensive community documentation
