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

## Overview

KAI Scheduler is an open-source, Kubernetes-native scheduler developed by NVIDIA specifically for orchestrating AI workloads at large scale. It deeply understands AI task characteristics such as GPU requirements, topology preferences, and communication patterns to deliver superior resource utilization and scheduling quality for containerized training and inference workflows.

## Key Features

The scheduler features AI-aware placement that understands GPU, network topology, and communication patterns to optimize task distribution and parallelism across clusters. It provides specialized optimizations for multi-GPU and multi-node distributed training and inference, maximizing cluster resource efficiency through smart pinning, network awareness, and dynamic allocation strategies.

## Use Cases

KAI Scheduler is designed for data centers and cloud platforms running large-scale AI training on Kubernetes that require efficient scheduling and resource isolation. It also handles dynamic load balancing and GPU sharing in inference clusters, as well as mixed workload management where AI and regular applications share the same cluster with priority and resource controls.

## Technical Details

Built on the Kubernetes Scheduler Framework with a pluggable architecture, KAI Scheduler is implemented in Go for seamless integration into existing Kubernetes infrastructure. It works natively with NVIDIA AI and container technologies such as CUDA, cuDNN, and Triton Inference Server, and is open-source under the Apache 2.0 license.
