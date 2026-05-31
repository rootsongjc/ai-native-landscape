---
name: MLflow
slug: mlflow
homepage: https://mlflow.org/
repo: https://github.com/mlflow/mlflow
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Dev Tools
  - ML Platform
description: >-
  MLflow is an open-source platform for managing the machine learning lifecycle, including experiment tracking,
  packaging, model registry and deployment.
logo: ''
author: MLflow
ossDate: '2018-06-05T16:05:58.000Z'
featured: false
status: tracked
---

## Overview

MLflow is an open-source platform designed to manage the end-to-end machine learning lifecycle. It provides components for tracking experiments, packaging code in reproducible runs, registering and versioning models, and deploying models to various environments. MLflow integrates with major ML frameworks and supports multiple storage and deployment backends.

## Key features

- Experiment tracking: record parameters, metrics and artifacts for easy comparison and reproducibility.
- Model registry: centralize model versioning, stage transitions and metadata.
- Project packaging: encapsulate reproducible run environments and entry points.
- Deployment integrations: adapt to local, cloud and third-party deployment targets.

## Use cases

- Experiment management and results reproducibility.
- Model version control and governance workflows.
- Deploying trained models to inference services or production pipelines.

## Technical notes

- Provides Python API and CLI, with integrations for TensorFlow, PyTorch and scikit-learn.
- Supports multiple storage backends (filesystem, S3, databases) and tracking servers.
- Active community, extensible plugin ecosystem, and Apache-2.0 license suitable for enterprise use.
