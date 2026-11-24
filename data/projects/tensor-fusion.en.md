---
name: Tensor Fusion
slug: tensor-fusion
homepage: https://tensor-fusion.ai
repo: https://github.com/NexusGPU/tensor-fusion
license: Apache-2.0
category: platform-infra
subCategory: gpu-virtualization-sharing
tags:
  - GPU Virtualization
  - GPU Sharing
  - Kubernetes
description: 'A GPU virtualization and pooling solution for Kubernetes that provides fractional GPUs, oversubscription, and GPU-aware autoscaling.'
author: NexusGPU
ossDate: '2024-11-12T23:49:48.000Z'
featured: false
status: tracked
---

## Overview

Tensor Fusion virtualizes and pools GPUs in Kubernetes clusters to raise utilization. It lets workloads request fractions of GPU compute and VRAM, schedules them onto a shared pool, and scales allocations up and down with demand.

## Key Features

- Fractional GPU allocation with compute and VRAM limits
- GPU pooling and bin-packing scheduling across nodes
- VRAM oversubscription and automatic scaling of GPU resources
- Remote GPU sharing so workloads can use GPUs on other nodes

## Use Cases

- Consolidating many small inference workloads onto fewer GPUs
- Running multi-tenant GPU clusters with fine-grained quotas

## Technical Details

- Kubernetes operator and scheduler extensions written in Go
- Some advanced isolation features are part of the commercial offering
