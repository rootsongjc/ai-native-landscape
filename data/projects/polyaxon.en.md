---
name: Polyaxon
slug: polyaxon
homepage: https://polyaxon.com/docs/
repo: https://github.com/polyaxon/polyaxon
license: Unknown
category: training-optimization
subCategory: observability-monitoring
tags:
  - Orchestration
  - Workflow
description: Polyaxon is an MLOps platform for managing, training and monitoring large-scale machine learning workloads.
logo: ''
author: Polyaxon
ossDate: '2016-12-26T12:48:47.000Z'
featured: false
status: tracked
---

Polyaxon is an MLOps platform designed to help teams reproduce, automate and scale machine learning workloads.

## Key features

- Job orchestration and scheduling: container-native DAG/workflow engine supporting parallel and distributed training.
- Experiment tracking and comparison: centralized logging of metrics and resource usage with dashboards and comparison views.
- Automation and hyperparameter tuning: built-in grid search, random search, Hyperband and Bayesian optimization.

## Use cases

- Large-scale distributed training and hyperparameter optimization.
- CI/CD driven training pipelines and reproducible experiments.
- Multi-tenant resource sharing and team-level experiment management.

## Technical notes

- Flexible deployment: self-hosted (Kubernetes/Helm), cloud-hosted or Polyaxon-managed services.
- CLI and SDK: `polyaxon` CLI, polyaxonfile configurations and SDKs for integration and automation.
- Modular architecture: submodules and plugins (e.g., hypertune, traceml) to extend functionality.
