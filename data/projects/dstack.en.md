---
name: dstack
slug: dstack
homepage: https://dstack.ai
repo: https://github.com/dstackai/dstack
license: MPL-2.0
category: platform-infra
subCategory: cloud-native-ai
tags:
  - Cloud Native
  - GPU
  - Kubernetes
  - Orchestration
  - Training
  - Inference
description: >-
  Vendor-agnostic orchestration for training, inference, and agentic workloads across NVIDIA, AMD, TPU, and Tenstorrent
  on clouds, Kubernetes, and bare metal.
author: dstackai
ossDate: '2022-01-04'
featured: false
status: tracked
---

## Introduction

dstack is an open-source orchestration platform for AI development that lets teams run training, fine-tuning, inference, and agentic workloads on any cloud, Kubernetes, or bare-metal infrastructure. It abstracts away compute provisioning so GPU resources from multiple providers and accelerators (NVIDIA, AMD, TPU, Tenstorrent) can be used through a single declarative interface.

## Key Features

- Vendor-agnostic support for clouds, Kubernetes, and on-prem bare metal
- Unified provisioning across NVIDIA, AMD, TPU, and Tenstorrent accelerators
- Declarative run and task configuration for training, fine-tuning, and serving
- Built-in fleet and policy management for cost control and capacity sharing
- Drop-in acceleration for popular frameworks via containerized environments

## Use Cases

- Provisioning elastic GPU capacity across multiple cloud providers
- Running distributed training and fine-tuning jobs without infra glue code
- Deploying and scaling inference services on Kubernetes or bare metal
- Centralizing compute policy and cost governance for ML teams

## Technical Highlights

- Declarative YAML-based run definitions replace manual provisioning scripts
- Designed as an open alternative to vendor-specific GPU platforms
- Integrates with Kubernetes and Slurm-style scheduling workflows
- Python-native CLI and API for programmatic workload orchestration
