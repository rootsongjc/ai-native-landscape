---
name: OpenCost
slug: opencost
homepage: https://opencost.io
repo: https://github.com/opencost/opencost
license: Apache-2.0
category: platform-infra
subCategory: gpu-observability-cost
tags:
  - FinOps
  - Cost Optimization
  - Kubernetes
description: 'A vendor-neutral CNCF project for real-time cost monitoring and allocation of Kubernetes workloads and cloud spend, including GPU costs.'
author: OpenCost
ossDate: '2019-03-27T21:49:05.000Z'
status: tracked
---

## Overview

OpenCost measures and allocates infrastructure costs for Kubernetes workloads in real time. It breaks costs down by namespace, workload, and label across CPU, memory, storage, network, and GPU, which makes it a common basis for GPU chargeback and showback.

## Key Features

- Real-time cost allocation by cluster, namespace, controller, pod, and label
- GPU cost allocation alongside CPU, memory, storage, and network
- Billing integrations for major clouds and custom pricing for on-premises clusters
- Prometheus metrics, API, and a built-in UI

## Use Cases

- Showing teams the cost of their GPU workloads
- Finding idle or over-provisioned accelerator capacity

## Technical Details

- Implements the open OpenCost specification for Kubernetes cost monitoring
- CNCF Incubating project written in Go; originally created by Kubecost
