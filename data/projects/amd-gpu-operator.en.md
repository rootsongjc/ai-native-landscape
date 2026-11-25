---
name: AMD GPU Operator
slug: amd-gpu-operator
homepage: https://instinct.docs.amd.com/projects/gpu-operator
repo: https://github.com/ROCm/gpu-operator
license: Apache-2.0
category: platform-infra
subCategory: heterogeneous-compute-scheduling
tags:
  - Device Plugin
  - Heterogeneous Computing
  - Kubernetes
description: 'A Kubernetes operator that automates driver installation, device plugin deployment, node labeling, and metrics for AMD Instinct and Radeon GPUs.'
author: AMD
ossDate: '2023-11-14T07:02:56.000Z'
status: tracked
---

## Overview

AMD GPU Operator simplifies deploying and managing AMD Instinct and Radeon GPU accelerators in Kubernetes clusters. It bundles the components needed to run GPU workloads on AMD hardware, playing the same role for AMD GPUs that the NVIDIA GPU Operator plays for NVIDIA GPUs.

## Key Features

- Automated GPU driver installation and lifecycle management
- Device plugin and a DRA driver as alternative allocation paths
- Node labeling of AMD GPU capabilities
- Device metrics exporter and health monitoring
- GPU partitioning configuration through the Device Config Manager

## Use Cases

- Running AI workloads on AMD GPUs in Kubernetes
- Operating clusters that mix AMD and NVIDIA accelerators

## Technical Details

- Builds on Node Feature Discovery and Kernel Module Management operators
- Requires Kubernetes 1.29 or later
