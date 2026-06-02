---
name: KubeRay
slug: kuberay
homepage: https://docs.ray.io/en/latest/cluster/kubernetes/index.html
repo: https://github.com/ray-project/kuberay
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Dev Tools
  - Runtime
description: >-
  KubeRay is the Ray Project's open-source Kubernetes operator for deploying and managing Ray applications on
  Kubernetes.
logo: ''
author: Ray Project
ossDate: '2020-10-29T20:42:00Z'
featured: false
status: tracked
---

## Overview

KubeRay is the Ray Project's open-source Kubernetes operator for deploying and managing Ray applications on Kubernetes. It provides purpose-built custom resources including RayCluster, RayJob, and RayService to simplify lifecycle management, autoscaling, and high-availability for distributed AI and ML workloads running on Kubernetes clusters.

## Key Features

KubeRay offers CRDs for RayCluster, RayJob, and RayService that automate cluster lifecycle management and elastic autoscaling. It integrates deeply with the Kubernetes ecosystem including Prometheus, Grafana, Ingress, and queueing systems, and provides a `kubectl ray` plugin along with an experimental dashboard to streamline day-to-day operations for production training and inference workloads.

## Use Cases

KubeRay is designed for organizations running Ray workloads on Kubernetes, including large-scale distributed training jobs, batch data processing, LLM online inference, and services requiring elastic scaling. Teams can integrate it into existing CI/CD, monitoring, and scheduling systems to build observable and resilient ML platforms.

## Technical Details

Implemented primarily in Go using the Kubernetes Operator pattern, KubeRay distributes Helm charts and comprehensive examples for quick deployment. The repository includes tooling, development documentation, and quickstart guides, with official user documentation hosted on the Ray documentation site.
