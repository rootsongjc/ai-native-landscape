---
name: NVIDIA GPU Operator
slug: nvidia-gpu-operator
homepage: https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/
repo: https://github.com/nvidia/gpu-operator
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Inference
description: NVIDIA GPU Operator automates deployment, configuration, and management of GPU components and drivers in Kubernetes.
logo: ''
author: NVIDIA
ossDate: '2019-02-26T22:56:06Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

The NVIDIA GPU Operator is a Kubernetes Operator that automates deployment and management of GPU drivers, container runtimes, device plugins, and monitoring components. It encapsulates the complexity of driver installation and versioning into reproducible workflows, enabling cluster operators to reliably enable GPU capabilities across nodes for training and inference workloads.

## Main Features

- Automated deployment: Installs NVIDIA drivers, Container Toolkit, and Device Plugin components automatically, reducing manual configuration.
- Version control: Uses declarative Custom Resources to manage driver and component versions, simplifying upgrades and rollbacks.
- Health and monitoring: Integrates exporters for visibility in Prometheus and other monitoring stacks.
- Kubernetes-native: Runs as an Operator following Kubernetes control loops and declarative management patterns.

## Use Cases

Suitable for running GPU-accelerated workloads on Kubernetes, including deep learning training clusters, inference services, HPC jobs, and GPU-based data pipelines. In multi-tenant or heterogeneous GPU environments, the GPU Operator standardizes drivers and runtimes to reduce operational complexity.

## Technical Characteristics

The GPU Operator leverages Kubernetes Custom Resources and controllers to manage driver installation, DaemonSets, and related resources. It emphasizes declarative configuration and uses node selectors and tolerations to target specific nodes for GPU scheduling. For installation details and guides, see the official docs: [NVIDIA GPU Operator docs](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/).
