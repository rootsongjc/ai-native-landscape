---
name: Flyte
slug: flyte
homepage: https://flyte.org/
repo: https://github.com/flyteorg/flyte
license: Unknown
category: applications-products
subCategory: workflow-automation
tags:
  - Deployment
  - ML Platform
  - Workflow
description: A scalable, reproducible open-source workflow orchestration platform for data, ML and analytics pipelines.
logo: ''
author: Flyte 社区
ossDate: '2019-10-21T17:40:04.000Z'
featured: false
status: tracked
---

## Introduction

Flyte is an open-source, production-grade workflow orchestration platform focused on scalability, strong typing and reproducibility. It enables teams to build and run complex data and ML pipelines on Kubernetes.

## Key features

- Strongly typed interfaces and data guardrails (Flyte types) to improve data quality and maintainability.
- Multi-language SDK support (Python, Java, etc.) with containerized execution to isolate dependencies.
- Advanced capabilities such as dynamic workflows, map tasks, task-level caching and failure recovery.
- Local sandbox, CLI tools and a visual console to ease development and debugging.

## Use cases

- Production orchestration of data and ML pipelines on cloud or on-prem Kubernetes clusters.
- Migrating research code to reproducible, versioned production workflows with data lineage.
- Optimizing resource utilization and recovery strategies for large-scale parallel or long-running jobs.

## Technical details

- Core components implemented in Go, with SDKs (e.g., Python's flytekit) to simplify developer experience.
- Deep Kubernetes integration for containerized tasks, dynamic resource scheduling and multi-tenancy.
- Extensive docs and community support at <https://docs.flyte.org/>, adopted by many large organizations.
