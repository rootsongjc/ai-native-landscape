---
name: Kepler
slug: kepler
homepage: https://sustainable-computing.io
repo: https://github.com/sustainable-computing-io/kepler
license: Apache-2.0
category: platform-infra
subCategory: gpu-observability-cost
tags:
  - GPU Monitoring
  - Cost Optimization
  - Kubernetes
description: 'A CNCF Sandbox Prometheus exporter that measures the energy consumption of Kubernetes workloads across CPU and GPU.'
author: Sustainable Computing
ossDate: '2022-02-01T19:48:56.000Z'
featured: false
status: tracked
---

## Overview

Kepler (Kubernetes-based Efficient Power Level Exporter) estimates energy use at the node, pod, container, and process level and exports it as Prometheus metrics. It reads hardware power sources such as RAPL for CPUs and NVML for GPUs, giving operators the power dimension of compute cost.

## Key Features

- Energy metrics attributed to nodes, pods, containers, and processes
- CPU power via RAPL and GPU power via NVML
- Prometheus metrics with Grafana dashboards
- Operator and Helm-based deployment

## Use Cases

- Tracking the energy cost of AI workloads
- Reporting sustainability metrics for clusters

## Technical Details

- Written in Go and deployed as a DaemonSet
- Attribution ratios power readings by resource utilization
