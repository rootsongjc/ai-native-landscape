---
name: Koordinator
slug: koordinator
homepage: https://koordinator.sh
repo: https://github.com/koordinator-sh/koordinator
license: Apache-2.0
category: platform-infra
subCategory: heterogeneous-compute-scheduling
tags:
  - GPU Scheduling
  - Batch Scheduling
  - Kubernetes
description: 'A QoS-based Kubernetes scheduling system for co-locating microservices, big data, and AI workloads, with fine-grained GPU and heterogeneous device scheduling.'
author: Koordinator
ossDate: '2022-03-16T07:14:48.000Z'
featured: false
status: tracked
---

## Overview

Koordinator is a CNCF Sandbox project that extends Kubernetes scheduling for workload co-location. For AI workloads it adds device-aware scheduling, including GPU sharing, joint allocation of GPUs and RDMA NICs, gang scheduling, and elastic quotas, with support for accelerators from multiple vendors.

## Key Features

- QoS classes and resource overcommitment for co-located workloads
- Device scheduling for GPUs, RDMA, and other heterogeneous accelerators
- Gang scheduling, elastic quota, and network-topology-aware placement
- Node-level isolation and interference suppression through koordlet

## Use Cases

- Running online services and AI jobs on shared clusters
- Scheduling GPU jobs that need topology-aligned devices

## Technical Details

- Built on the Kubernetes scheduling framework with a node agent
- Originated from Alibaba’s large-scale co-location practice
