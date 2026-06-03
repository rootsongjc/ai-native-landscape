---
name: NVIDIA AI Cluster Runtime
slug: aicr
homepage: https://docs.nvidia.com/aicr/
repo: https://github.com/NVIDIA/aicr
license: Apache-2.0
category: platform-infra
subCategory: cloud-native-ai
tags:
  - GPU
  - Kubernetes
  - Cloud Native
  - Infrastructure
description: NVIDIA AI Cluster Runtime (AICR) generates optimized, validated, and reproducible GPU-accelerated Kubernetes cluster configurations for AI training and inference.
author: NVIDIA
ossDate: '2026-01-30T19:02:59Z'
featured: false
status: tracked
---

## Overview

NVIDIA AI Cluster Runtime (AICR) makes it easy to stand up GPU-accelerated Kubernetes clusters by capturing known-good combinations of drivers, operators, kernels, and system configurations as version-locked recipes. It generates reproducible deployment artifacts for Helm, Argo CD, Flux, and Helmfile, solving the hardest problem in AI infrastructure — environment consistency.

## Key Features

- Recipe engine generating version-locked GPU K8s configurations validated by NVIDIA.
- Multi-deployer bundles for Helm, Argo CD, Flux, and Helmfile.
- Multi-phase validation covering deployment, performance (training and inference), and conformance.
- Drift detection comparing cluster snapshots to surface configuration changes.
- Supply chain security with SLSA Level 3 provenance, signed SBOMs, and Cosign attestations.

## Use Cases

- Stand up validated GPU K8s clusters for AI training or inference in minutes.
- Ensure reproducible GPU environments across teams and regions.
- Detect and remediate configuration drift in production GPU clusters.
- Integrate GPU infrastructure provisioning into CI/CD and GitOps pipelines.

## Technical Details

- Single CLI binary for full workflow: snapshot, recipe, bundle, validate, verify, diff.
- Supports EKS, GKE, AKS, Kind, and more with H100, B200, GB200, A100 accelerators.
- Composable overlay architecture: base defaults layered with cloud, accelerator, OS, and workload tuning.
- Go SDK available for programmatic integration without subprocess or REST calls.
