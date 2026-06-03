---
name: DLRover
slug: dlrover
homepage: https://pypi.org/project/dlrover/
repo: https://github.com/intelligent-machine-learning/dlrover
license: Apache-2.0
category: platform-infra
subCategory: deployment-operations
tags:
  - Dev Tools
  - Framework
  - ML Platform
description: >-
  DLRover is an automatic distributed deep learning system that provides elastic scheduling, flash checkpointing and
  auto-scaling to simplify large-scale model training on Kubernetes and Ray.
author: Intelligent Machine Learning
ossDate: '2022-06-24T09:31:07.000Z'
featured: false
status: tracked
---
## Introduction

DLRover is an industrial-grade automatic distributed deep learning system designed to reduce training downtime, improve resource utilization, and accelerate failure recovery for large-scale model training on Kubernetes or Ray clusters.

## Key features

- Fault tolerance and recovery: automatic diagnosis and process restart to minimize training interruption.
- Flash Checkpoint: asynchronous checkpoint persistence and in-memory fast recovery for seconds-level resume of large models.
- Auto-scaling and scheduling: dynamic scaling and data sharding to mitigate stragglers and improve throughput.

## Use cases

- Production orchestration and operations of large-scale LLM/model training.
- Distributed training tasks on K8s/Ray that require elasticity, fault-tolerance, and fast recovery.
- Scenarios that need to reduce I/O overhead and speed up checkpoint/recovery processes.

## Technical details

- Primarily implemented in Python with supporting Go/C++ components; integrates with DDP, FSDP, DeepSpeed, and Megatron-LM.
- Provides tutorials and examples (elastic scheduling, node health checks, Flash Checkpoint) for easy integration into existing training pipelines.
