---
name: KubeRay
slug: kuberay
homepage: https://docs.ray.io/en/latest/cluster/kubernetes/index.html
repo: https://github.com/ray-project/kuberay
license: Apache-2.0
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Dev Tools
  - Runtime
description: >-
  KubeRay is the Ray Project's open-source Kubernetes operator for deploying and managing Ray applications on
  Kubernetes.
author: Ray Project
ossDate: '2020-10-29T20:42:00Z'
featured: false
status: tracked
---

KubeRay is the Ray Project's open-source Kubernetes operator for deploying and managing Ray applications on Kubernetes. It provides purpose-built custom resources including RayCluster, RayJob, and RayService to simplify lifecycle management, autoscaling, and high-availability for distributed AI and ML workloads running on Kubernetes clusters.

## Key Features

- CRDs for RayCluster, RayJob, and RayService that automate cluster lifecycle management and elastic autoscaling
- Deep integration with the Kubernetes ecosystem including Prometheus, Grafana, Ingress, and queueing systems
- `kubectl ray` plugin along with an experimental dashboard for streamlined day-to-day operations
- Helm charts and comprehensive examples for quick deployment and configuration
- Support for both production training and inference workloads with high-availability configurations

## Use Cases

- Large-scale distributed training jobs running on Kubernetes clusters
- Batch data processing and ETL pipelines leveraging Ray's distributed computing capabilities
- LLM online inference services requiring elastic scaling to handle variable traffic patterns
- ML platform teams integrating Ray workloads into existing CI/CD, monitoring, and scheduling systems

## Technical Highlights

- Implemented primarily in Go using the Kubernetes Operator pattern for robust cluster management
- Distributes Helm charts with comprehensive examples and quickstart guides
- Official user documentation hosted on the Ray documentation site with active community support
