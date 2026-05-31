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

## Detailed Introduction

gpustack is an open-source platform that unifies heterogeneous GPU resources into a single, orchestratable pool for model training and inference. It provides device discovery, resource abstraction, and centralized scheduling so teams can run distributed training and low-latency inference with improved utilization and observability.

## Main Features

- Resource pooling and device discovery: automatic identification of GPU model, memory and driver details, with support for CUDA and ROCm.
- Intelligent scheduling: policies based on job requirements, priorities and reservations to maximize utilization and reduce queue time.
- Observability: built-in metrics collection, job dashboards and historical statistics with Prometheus/Grafana integration.
- Extensibility: plugin hooks for custom schedulers, lifecycle events and monitoring integrations.

## Use Cases

- Research and education clusters: share GPUs safely across projects while avoiding memory and card conflicts.
- Enterprise training platforms: orchestrate large-scale distributed training and control costs.
- Online inference fleets: dynamically allocate GPUs by request load to provide low-latency, cost-effective serving.

## Technical Highlights

gpustack follows cloud-native principles and integrates with container ecosystems and orchestration tooling. It exposes a RESTful API and CLI for automation, supports modular deployment of scheduler/monitoring/access layers, and is released under the Apache-2.0 license with community documentation available on the project website.
