---
name: NVIDIA Run:ai
slug: run-ai
homepage: https://docs.nvidia.com/run-ai/
repo: https://github.com/dsx-ai-factory/run-ai
license: Apache-2.0
category: platform-infra
subCategory: cloud-native-ai
tags:
  - GPU Orchestration
  - Kubernetes
  - AI Workload Management
  - GPU Scheduling
  - Multi-Cluster
  - MCP
description: An open-source AI workload and GPU orchestration platform for Kubernetes, combining GPU-aware scheduling, fractional GPU allocation, quotas, governance, and observability to share GPU resources efficiently across teams and clusters.
author: NVIDIA
ossDate: '2026-08-25'
featured: false
status: tracked
---

## Overview

NVIDIA Run:ai is an open-source AI workload and GPU orchestration platform for managing shared AI infrastructure on Kubernetes. It provides a consistent way to run development, training, and inference workloads across on-premises, cloud, or hybrid Kubernetes environments, combining GPU scheduling, resource management, workload orchestration, governance, and observability so organizations can share GPU capacity efficiently across teams and clusters. The monorepo contains the control plane and cluster services, the in-cluster Kubernetes operator/controllers, the installer, CLI, MCP server, documentation, and shared client packages.

## Key Features

- AI-aware GPU scheduling via the shipped KAI Scheduler — fair-share, preemption, bin-packing, priorities, and topology-aware placement on top of Kubernetes
- Dynamic GPU allocation with fractional GPUs, letting multiple workloads share one GPU and capacity be reused dynamically
- Resource quotas and hierarchical policies that allocate GPU resources across departments and projects and enforce organizational rules
- Multi-cluster management — one control plane centrally manages workloads, resources, and configuration across connected Kubernetes clusters
- AI workload management for workspaces, training, distributed training, and inference as first-class workloads, with extensible support for additional Kubernetes workload types
- Access control and governance with role-based permissions, plus monitoring and observability across clusters, nodes, GPUs, workloads, and platform activity
- Operated through web UI, CLI, REST API, and an MCP server for agent-driven infrastructure interaction

## Use Cases

- Sharing one Kubernetes GPU estate across multiple teams with fair-share guarantees, preemption, and per-department quota enforcement
- Running dev workspaces, training, distributed training, and inference workloads on the same shared GPU pool with fractional allocation
- Governing and observing GPU utilization centrally across multi-cluster and hybrid (on-prem/cloud) AI infrastructure

## Technical Details

- Two-component architecture installed on Kubernetes: a control plane (centralized resource management, workload submission, monitoring/analytics) connected to one or more Run:ai clusters, where in-cluster operators/controllers extend native Kubernetes scheduling with GPU-aware capabilities
- Scheduling layer runs on the open-source KAI Scheduler, adding fair-share, preemption, fractional GPUs, and quota hierarchies over what `kube-scheduler`, Volcano, or Kueue provide; GPU Operator/Network Operator remain complementary node-level enablers
- Positioned above Kubernetes/OpenShift and complementary to ML platforms (Kubeflow, Ray, Argo Workflows) — those submit workloads while Run:ai schedules and governs the GPU capacity they consume; integrates with Training Operator, LeaderWorkerSet, Knative, and KServe workload types
- Go monorepo bundling installer (`runai-installer` CLI with configuration YAML, preflight checks, guided deployment), CLI, MCP server, shared client libraries, and local development environment
- Deployable on Kubernetes or OpenShift in connected or air-gapped environments, self-hosted with published API reference
