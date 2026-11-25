---
name: DRA Driver for NVIDIA GPUs
slug: dra-driver-nvidia-gpu
homepage: https://dra-driver-nvidia-gpu.sigs.k8s.io
repo: https://github.com/kubernetes-sigs/dra-driver-nvidia-gpu
license: Apache-2.0
category: platform-infra
subCategory: gpu-virtualization-sharing
tags:
  - GPU Sharing
  - Kubernetes
  - Dynamic Resource Allocation
description: 'A Kubernetes Dynamic Resource Allocation (DRA) driver for NVIDIA GPUs, enabling claim-based allocation and flexible GPU sharing.'
author: Kubernetes SIGs
ossDate: '2023-04-17T19:12:49.000Z'
featured: false
status: tracked
---

## Overview

This driver implements the Kubernetes Dynamic Resource Allocation API for NVIDIA GPUs. Instead of opaque integer counts, workloads describe the devices they need through ResourceClaims, which allows attribute-based selection and sharing a device across containers and pods.

## Key Features

- ResourceClaim-based GPU requests with attribute selection (model, memory, and more)
- Sharing a single GPU across containers or pods through shared claims
- Per-claim sharing configuration such as time-slicing and MPS
- Support for MIG devices as allocatable resources

## Use Cases

- Adopting DRA as the successor to the device plugin model for GPUs
- Expressing fine-grained GPU requirements and controlled sharing

## Technical Details

- Built on the Kubernetes DRA structured-parameters model with CDI device injection
- Developed under Kubernetes SIGs; originally started in the NVIDIA organization
