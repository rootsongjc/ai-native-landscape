---
name: BentoML
slug: bentoml
homepage: https://bentoml.com
repo: https://github.com/bentoml/bentoml
license: Unknown
category: inference-serving
subCategory: model-serving
tags:
  - Deployment
  - Dev Tools
  - Inference Service
description: >-
  BentoML is an open-source framework for packaging, containerizing, and deploying machine learning models into
  production-ready services.
logo: ''
author: BentoML
ossDate: '2019-04-02T01:39:27.000Z'
featured: false
status: tracked
---

## Overview

BentoML helps engineers package any ML/AI model into a deployable service (a "Bento"), with one-click container image generation, model versioning, and multi-framework support to streamline development-to-production workflows.

## Key features

- Turn model inference code into REST/gRPC APIs with minimal boilerplate, supporting async and batched calls.
- Build reproducible deployment artifacts (Bento) and generate Docker images for simplified release processes.
- Support adaptive batching, model parallelism, and multi-model orchestration to improve throughput and resource utilization.
- Rich examples, plugins and integrations for runtime extensions and cloud deployment.

## Use cases

- Online inference APIs and microservice-based model deployments.
- Multi-model inference pipelines and task-queue-driven workloads.
- Quickly move research models into cloud or edge production environments.

## Technical highlights

- Python-native developer experience; compatible with PyTorch, TensorFlow, Transformers and other major frameworks.
- Model Store and version management; pluggable runtime optimizations such as adaptive batching.
- Integrations with container tooling, CI/CD pipelines, and cloud platforms (e.g., BentoCloud) for production-grade deployments.
