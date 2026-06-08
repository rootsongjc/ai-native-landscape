---
name: Fluid
slug: fluid
homepage: https://fluid-cloudnative.github.io/
repo: https://github.com/fluid-cloudnative/fluid
license: Apache-2.0
category: platform-infra
subCategory: cloud-native-ai
tags:
  - Cloud Native
  - Kubernetes
  - Data Abstraction
  - AI Framework
  - Distributed Cache
description: Elastic data abstraction and acceleration layer for BigData/AI applications on Kubernetes, enabling efficient data access through distributed caching.
author: CNCF
ossDate: '2020-07-11T22:57:18.000Z'
featured: false
status: tracked
---

## Overview

Fluid is an open-source Kubernetes-native data orchestration system under the CNCF ecosystem. It abstracts and accelerates data access for BigData and AI workloads by integrating distributed caching engines (such as Alluxio and JuiceFS) as Kubernetes-native resources, enabling datasets to be cached, moved, and managed like first-class citizens in the cluster.

## Key Features

- **Dataset Abstraction**: Treats datasets as Kubernetes CRDs, enabling declarative data management with versioning, caching policies, and runtime binding
- **Multi-Cache Engine Support**: Pluggable runtime architecture supporting Alluxio, JuiceFS, GooseFS, and other distributed cache backends
- **Elastic Scaling**: Automatically scales cache workers up and down based on data access patterns and resource availability
- **Data Affinity Scheduling**: Co-schedules compute pods with cached data to minimize network transfer and accelerate training jobs

## Use Cases

- **AI/ML Training Acceleration**: Cache training datasets close to GPU nodes to eliminate data loading bottlenecks
- **Big Data on Kubernetes**: Run Spark, Presto, and other analytics frameworks with accelerated data access without modifying application code
- **Multi-Tenant Data Sharing**: Share cached datasets across teams and workloads with fine-grained access control

## Technical Details

- CNCF Sandbox project built on Kubernetes Operator pattern with custom controllers and CRDs
- Supports data prefetching, lazy loading, and tiered cache eviction strategies
