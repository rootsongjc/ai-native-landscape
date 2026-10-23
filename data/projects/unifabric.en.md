---
name: Unifabric
slug: unifabric
homepage: null
repo: https://github.com/unifabric-io/unifabric
license: Apache-2.0
category: platform-infra
subCategory: cloud-native-ai
tags:
  - Observability
  - Networking
  - RDMA
  - Kubernetes
  - Cloud Native
description: Cloud-native observability for the high-speed networks of AI clusters, covering RDMA, RoCE/InfiniBand, and NVLink, and attributing network traffic to Kubernetes workloads.
author: unifabric-io
ossDate: '2026-04-19T15:41:54Z'
featured: false
status: tracked
---

## Overview

Unifabric provides observability for the three high-speed networks of a cloud-native AI cluster: the scale-out GPU network (RoCE or InfiniBand), the scale-up intra-node GPU interconnect (NVLink), and the high-speed storage network. It discovers the physical fabric topology, collects RDMA traffic metrics and attributes them to Pods, and probes network health proactively, presenting everything through one Kubernetes resource model (CRDs, Node labels, and metrics) regardless of hardware vendor.

## Key Features

- **Topology Discovery**: Probes host/switch/device connections across scale-out, scale-up, and storage networks in real time, publishing `Topology` CRDs with interactive Grafana visualization of the whole fabric
- **Tiered Node Labels for Scheduling**: Writes each node's network position (leaf, spine, and other tiers) into Node labels that Kueue TAS, Volcano, and KAI Scheduler consume directly to place communication-heavy jobs inside one switch domain
- **High-Speed Traffic Observability**: Collects RDMA throughput, congestion, and error metrics from NIC counters and switch telemetry, and associates switch-side RDMA traffic with specific Pods and workloads
- **Network Health Checks**: Continuously monitors LLDP readiness, switch connectivity, and probe results to surface link and configuration problems before workloads fail

## Use Cases

- **Training/inference slowdown diagnosis**: Correlate RDMA metrics along the path (switches, Pod NICs) at the workload level to find communication hot spots and bandwidth consumers when a job slows down
- **Cluster routine inspection**: Keep track of link and switch health across large clusters without checking devices one by one
- **Topology-aware scheduling**: Feed fabric topology labels into Kueue/Volcano to shorten communication paths and improve training and inference efficiency

## Technical Details

- eBPF probes attach to the submit path of the verbs library to reconstruct Pod-level RDMA flows (who talks to whom, when, how much per send) for CPU-initiated RDMA, without any application change — bypassing the fact that RDMA skips the kernel stack and NICs expose only aggregate counters
- Topology discovery is LLDP-based for general SONiC RoCE switches, with support for NVIDIA Spectrum-X and InfiniBand topologies imported from NVIDIA Topograph; works on bare-metal and cloud
- Exposes results as Kubernetes CRDs, Node labels, and Prometheus-style metrics consumed by prebuilt Grafana dashboards
- NVLink traffic metrics and active network path probing with link degradation detection are on the roadmap
