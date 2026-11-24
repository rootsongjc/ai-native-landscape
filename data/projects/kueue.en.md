---
name: Kueue
slug: kueue
homepage: https://kueue.sigs.k8s.io
repo: https://github.com/kubernetes-sigs/kueue
license: Apache-2.0
category: platform-infra
subCategory: heterogeneous-compute-scheduling
tags:
  - Job Queueing
  - Batch Scheduling
  - Kubernetes
description: 'A Kubernetes-native job queueing system that manages quotas and decides when batch, AI, and HPC jobs are admitted to a cluster.'
author: Kubernetes SIGs
ossDate: '2022-02-16T05:52:19.000Z'
featured: false
status: tracked
---

## Overview

Kueue is a set of APIs and a controller for job queueing on Kubernetes. It decides when a job should start or be preempted based on quotas and fair sharing, while leaving pod placement to the regular scheduler. It is widely used to share GPU capacity among teams.

## Key Features

- ClusterQueues and LocalQueues with per-resource-flavor quotas
- Quota borrowing and preemption across cohorts, with fair sharing
- Resource flavors for modeling different GPU types, spot versus on-demand, and more
- Integrations with Job, JobSet, Kubeflow, Ray, and other workload APIs
- MultiKueue for dispatching jobs across clusters

## Use Cases

- Sharing a GPU cluster among teams with guaranteed and borrowable quota
- Queueing training jobs when accelerators are scarce

## Technical Details

- Admission-level controller that complements kube-scheduler rather than replacing it
- A Kubernetes SIG Scheduling subproject written in Go
