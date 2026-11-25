---
name: HAMi-core
slug: hami-core
homepage: https://project-hami.io
repo: https://github.com/Project-HAMi/HAMi-core
license: Apache-2.0
category: platform-infra
subCategory: gpu-virtualization-sharing
tags:
  - GPU Virtualization
  - GPU Sharing
  - CUDA
description: 'A transparent in-container GPU resource controller that enforces memory and compute limits by intercepting CUDA calls, with no application or driver changes.'
author: Project-HAMi
ossDate: '2024-01-23T09:36:22.000Z'
status: tracked
---

## Overview

HAMi-core is the in-container isolation library behind HAMi. It is loaded into a container as a shared library (`libvgpu.so`) and intercepts CUDA and NVML calls to enforce per-container GPU memory and compute limits, which is what makes hard-limited GPU sharing possible.

## Key Features

- Hard device-memory limits per container
- Compute (GPU utilization) limiting through time-slice control
- Virtualized device view so tools inside the container see the limited resources
- Works with unmodified applications and stock NVIDIA drivers

## Use Cases

- Building vGPU sharing on Kubernetes together with HAMi
- Enforcing GPU limits for plain Docker containers

## Technical Details

- C library injected via `LD_PRELOAD` that hooks the CUDA and NVML APIs
- User-space isolation; it does not rely on hardware partitioning such as MIG
