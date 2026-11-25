---
name: Apache YuniKorn
slug: yunikorn
homepage: https://yunikorn.apache.org/
repo: https://github.com/apache/yunikorn-core
license: Apache-2.0
category: platform-infra
subCategory: heterogeneous-compute-scheduling
tags:
  - Batch Scheduling
  - Job Queueing
  - Kubernetes
description: 'A universal resource scheduler for batch, data, and machine learning workloads on Kubernetes, built around hierarchical queues and quotas.'
author: Apache Software Foundation
ossDate: '2019-06-13T15:18:08.000Z'
featured: false
status: tracked
---

## Overview

Apache YuniKorn is a standalone resource scheduler that replaces or runs alongside the default Kubernetes scheduler for batch-style workloads. It brings hierarchical queues, resource fairness, and gang scheduling to clusters that run Spark, Ray, and GPU training jobs.

## Key Features

- Hierarchical queues with guaranteed and maximum quotas
- Fairness, priority, and preemption policies across queues
- Gang scheduling for jobs that need all members to start together
- Scheduling of extended resources such as GPUs

## Use Cases

- Multi-tenant batch and ML platforms on Kubernetes
- Migrating YARN-style queue management to Kubernetes

## Technical Details

- `yunikorn-core` is the platform-agnostic scheduler; a Kubernetes shim connects it to the cluster
- Written in Go and governed by the Apache Software Foundation
