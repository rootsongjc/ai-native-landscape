---
name: KAI Scheduler
slug: kai-scheduler
homepage: https://github.com/NVIDIA/KAI-Scheduler
repo: https://github.com/nvidia/kai-scheduler
license: Apache-2.0
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Inference
  - Orchestration
description: >-
  A Kubernetes-native scheduler for large-scale AI workloads, providing efficient resource orchestration and
  optimization for containerized AI training and inference workflows.
author: NVIDIA
ossDate: '2025-02-26T20:39:42Z'
featured: false
status: tracked
---

KAI Scheduler is an open-source, Kubernetes-native scheduler developed by NVIDIA specifically for orchestrating AI workloads at large scale. It deeply understands AI task characteristics such as GPU requirements, topology preferences, and communication patterns to deliver superior resource utilization and scheduling quality for containerized training and inference workflows.

## Key Features

- AI-aware placement that understands GPU, network topology, and communication patterns to optimize task distribution
- Specialized optimizations for multi-GPU and multi-node distributed training and inference
- Smart pinning, network awareness, and dynamic allocation strategies to maximize cluster resource efficiency
- Built on the Kubernetes Scheduler Framework with a pluggable architecture for customization
- Native integration with NVIDIA AI technologies including CUDA, cuDNN, and Triton Inference Server

## Use Cases

- Data centers and cloud platforms running large-scale AI training on Kubernetes with efficient scheduling and resource isolation
- Dynamic load balancing and GPU sharing in inference clusters serving production traffic
- Mixed workload management where AI and regular applications share the same cluster with priority and resource controls
- Multi-tenant GPU environments requiring fair resource allocation and isolation

## Technical Highlights

- Implemented in Go for seamless integration into existing Kubernetes infrastructure
- Pluggable scheduler framework architecture enabling custom scheduling policies
- Open-source under the Apache 2.0 license with active NVIDIA development and support
