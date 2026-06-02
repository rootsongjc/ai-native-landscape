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
status: tracked
---

## Overview

The NVIDIA GPU Operator is a Kubernetes-native operator that automates the deployment, configuration, and lifecycle management of GPU drivers, container runtimes, device plugins, and monitoring components across cluster nodes. It turns the complexity of GPU provisioning into declarative, reproducible workflows for training and inference workloads.

## Key Features

Automated installation of NVIDIA drivers, Container Toolkit, and Device Plugin components eliminates manual node-level configuration. Declarative Custom Resources manage driver and component versions, streamlining upgrades and rollbacks across the cluster. Integrated health monitoring and metrics exporters provide GPU visibility within Prometheus and other observability stacks.

## Use Cases

Running GPU-accelerated deep learning training clusters and inference services on Kubernetes infrastructure. Managing heterogeneous GPU environments where standardizing drivers and runtimes reduces operational overhead. GPU-based HPC jobs and data pipelines requiring consistent driver and runtime configuration across nodes.

## Technical Details

Leverages Kubernetes Custom Resources and controller patterns to manage driver DaemonSets and related node-level resources. Uses declarative configuration with node selectors and tolerations for targeted GPU scheduling. Follows Kubernetes Operator best practices with control-loop reconciliation for maintaining desired GPU stack state across the cluster.
