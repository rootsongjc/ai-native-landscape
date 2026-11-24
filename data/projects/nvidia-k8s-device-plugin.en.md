---
name: NVIDIA Device Plugin for Kubernetes
slug: nvidia-k8s-device-plugin
repo: https://github.com/NVIDIA/k8s-device-plugin
license: Apache-2.0
category: platform-infra
subCategory: gpu-virtualization-sharing
tags:
  - GPU Sharing
  - Device Plugin
  - Kubernetes
description: 'The NVIDIA device plugin for Kubernetes, which exposes GPUs to the kubelet and supports GPU sharing through time-slicing and MPS.'
author: NVIDIA
ossDate: '2017-10-10T21:31:02.000Z'
featured: false
status: tracked
---

## Overview

The NVIDIA device plugin is a DaemonSet that advertises the GPUs on each node to Kubernetes so pods can request `nvidia.com/gpu` resources. Beyond whole-GPU allocation, it supports oversubscribing GPUs via time-slicing and CUDA MPS, and exposing MIG devices as schedulable resources.

## Key Features

- Exposes GPUs as Kubernetes extended resources and tracks their health
- Time-slicing configuration to share one GPU across multiple pods
- CUDA MPS sharing for concurrent workloads
- MIG strategies for exposing hardware-partitioned GPU instances
- Bundled GPU Feature Discovery for node labeling

## Use Cases

- Enabling GPU workloads on Kubernetes clusters
- Sharing GPUs among small inference or notebook workloads

## Technical Details

- Implements the Kubernetes device plugin gRPC API in Go
- Time-slicing provides no memory or fault isolation between sharing pods
