---
name: NVIDIA Cloud Functions
slug: nvcf
homepage: https://docs.nvidia.com/nvcf/overview
repo: https://github.com/NVIDIA/nvcf
license: Apache-2.0
category: inference-serving
subCategory: model-serving
tags:
  - GPU
  - Inference
  - Serverless
  - Kubernetes
description: NVIDIA Cloud Functions (NVCF) is a platform for deploying, managing, and running GPU-accelerated inference and streaming workloads at scale, powering build.nvidia.com.
logo: ''
author: NVIDIA
ossDate: '2026-04-01T19:22:14Z'
featured: false
status: tracked
---

## Overview

NVIDIA Cloud Functions (NVCF) is a GPU-accelerated serverless platform for deploying, managing, and running inference, streaming, and other GPU workloads at scale. It routes requests across multi-region GPU clusters with load balancing, autoscaling, and mixed GPU support. NVCF is the underlying engine for build.nvidia.com.

## Key Features

- Unified control plane managing function lifecycle across multi-region GPU clusters.
- Load-balanced workload routing for inference, streaming, and custom GPU workloads.
- Multi-cluster autoscaling from zero to max with mixed GPU type support.
- Supports HTTP, streaming, and gRPC protocols for different workload needs.
- Long-running functions and asynchronous run-to-completion tasks.

## Use Cases

- Deploy GPU inference endpoints at scale without managing infrastructure.
- Run batch inference, fine-tuning, and evaluation as asynchronous tasks.
- Stream real-time AI responses across multi-region GPU clusters.

## Technical Details

- Runs as Kubernetes services with control plane, invocation plane, and compute plane separation.
- GPU clusters connect through NVIDIA Cluster Agent (NVCA) for resource registration and workload execution.
- Includes CLI, Go/Python libraries, Helm-based deployment, and observability dashboards.
- Built-in AI tooling with agent skills and workflow helpers for NVCF users.
