---
name: TauGrid
slug: taugrid
homepage: https://azure.github.io/taugrid/
repo: https://github.com/Azure/taugrid
license: MIT
category: platform-infra
subCategory: cloud-native-ai
tags:
  - Cloud Native
  - Kubernetes
  - GPU
  - Distributed Training
  - Scheduling
  - Observability
description: >-
  Cloud-native AI infrastructure that runs, schedules, and monitors AI workloads on GPU-enabled
  Kubernetes clusters, from data preparation to distributed training, fine-tuning, and inference.
author: Azure
ossDate: '2026-07-24'
featured: false
status: tracked
---

## Introduction

TauGrid is an open-source cloud-native AI infrastructure stack from Azure that lets platform teams run GPU workloads on Kubernetes with a single Helm install instead of assembling components separately. It covers the full AI workload lifecycle — data preparation, distributed training, fine-tuning, and inference — and gives researchers a CLI to submit and manage workloads without touching Kubernetes directly. Tested end-to-end on AKS, it aims to support cloud and on-premises Kubernetes without an Azure dependency.

## Key Features

- `tau` CLI to submit, monitor, and manage AI workloads from terminal or CI pipelines
- Workload queueing with fair-share scheduling, quota management, and priority-based admission via Kueue
- Managed Ray clusters for distributed training and inference via KubeRay
- Node-level GPU health monitoring with automated drain on hardware faults
- Integrated metrics, logs, and dashboards for clusters, GPUs, and workloads

## Use Cases

- Platform teams installing a complete GPU scheduling and observability stack on Kubernetes
- Researchers submitting distributed training or fine-tuning jobs declaratively via `tau.yaml` without K8s expertise
- Fleets requiring automated GPU hardware fault detection and node draining
- Teams needing quota management and fair-share admission for shared GPU clusters

## Technical Highlights

- Control plane composes open Kubernetes-native components: Kueue for admission, KubeRay for Ray orchestration, and a GPU health monitor for node diagnostics
- Workloads defined as declarative YAML (`tau run --config tau.yaml`) with GPU resource requests (`resources.gpu`)
- Installed as a single Helm chart from Microsoft Container Registry; first-party images split into tau, portal, and core controller repositories
- GPU health monitor performs node-level diagnostics and automatically drains nodes on hardware faults for fleet-wide visibility
- Observability pipeline covers cluster, GPU, and workload layers; Kusto/Azure Data Explorer integration remains Azure-specific
