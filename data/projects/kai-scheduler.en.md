---
name: KAI Scheduler
slug: kai-scheduler
homepage: https://github.com/NVIDIA/KAI-Scheduler
repo: https://github.com/nvidia/kai-scheduler
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Inference
  - Orchestration
description: >-
  A Kubernetes-native scheduler for large-scale AI workloads, providing efficient resource orchestration and
  optimization for containerized AI training and inference workflows.
logo: ''
author: NVIDIA
ossDate: '2025-02-26T20:39:42Z'
featured: false
status: tracked
---

## Detailed Introduction

KAI Scheduler is NVIDIA's native Kubernetes scheduler, purpose-built for orchestrating and optimizing large-scale AI workloads. By deeply understanding AI task characteristics—such as GPU requirements, topology preferences, and communication patterns—it enhances resource utilization and scheduling quality for AI training and inference tasks in Kubernetes clusters. Implemented in Go, it integrates natively with the Kubernetes control plane to provide production-grade capabilities for containerized AI workflows.

## Main Features

- Kubernetes-native design: works as a standard Kubernetes scheduler extension for easy deployment.
- AI-aware scheduling: understands GPU, network topology, and communication patterns to optimize task placement and parallelism.
- Large-scale support: specialized optimization for multi-GPU and multi-node distributed training and inference.
- Resource efficiency: maximizes cluster utilization through smart pinning, network awareness, and dynamic allocation.

## Use Cases

- Data centers or cloud platforms running large-scale AI training on Kubernetes with efficient scheduling and resource isolation.
- Dynamic load balancing and GPU resource sharing in inference service clusters.
- Mixed workload (AI and regular applications) management with priority and resource control in shared clusters.

## Technical Features

- Built on Kubernetes Scheduler Framework with a pluggable architecture for easy customization.
- Implemented in Go for seamless integration into existing Kubernetes infrastructure.
- Open-source under Apache 2.0 license, supporting community contributions.
- Works seamlessly with NVIDIA AI and container technologies like CUDA, cuDNN, and Triton Inference Server.
