---
name: Volcano
slug: volcano
homepage: https://volcano.sh/
repo: https://github.com/volcano-sh/volcano
license: Unknown
category: platform-infra
subCategory: cloud-native-ai
tags:
  - Dev Tools
  - Orchestration
description: >-
  Volcano is a Kubernetes-native batch scheduling system (a CNCF project) that enhances kube-scheduler with advanced
  features for batch, HPC, and AI workloads.
author: volcano-sh
ossDate: '2019-06-01T00:00:00.000Z'
featured: false
status: tracked
---

## Introduction

Volcano is a Kubernetes-native batch scheduling system that extends the capabilities of kube-scheduler to support batch jobs, elastic training, and high-performance computing (HPC) scenarios. It offers a rich set of scheduling policies and a plugin ecosystem for large-scale AI/ML and big data job scheduling, enabling efficient utilization of cluster resources.

## Key Features

- Comprehensive scheduling strategies and a pluggable design, supporting topology awareness, priority, preemption, and more.
- Seamless integration with frameworks such as Spark, Flink, MPI, and Horovod.
- Supports one-click installation via Helm and quick deployment with YAML.

## Use Cases

- Unified scheduling for large-scale offline training and batch processing jobs.
- Improved GPU/CPU resource utilization and reduced fragmentation.
- Integration with cloud providers or in-house platforms as a custom scheduler.

## Technical Highlights

- Built on Kubernetes CRDs and controllers, fully compatible with the cloud-native ecosystem.
- Production-ready design with high availability and scalability.
