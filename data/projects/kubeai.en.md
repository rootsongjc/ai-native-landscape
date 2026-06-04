---
name: KubeAI
slug: kubeai
homepage: https://www.kubeai.org/
repo: https://github.com/substratusai/kubeai
license: Apache-2.0
category: inference-serving
subCategory: inference-runtimes
tags:
  - Inference
  - ML Platform
description: An AI inferencing operator for Kubernetes that simplifies deploying LLMs, embeddings, and speech-to-text services.
author: SubstratusAI
ossDate: '2023-10-21T00:59:51.000Z'
featured: false
status: tracked
---

## Overview

KubeAI is a Kubernetes-native inferencing operator designed to streamline deploying and running LLMs, embeddings, and speech-to-text services at scale. It combines a model proxy, an operator for model lifecycle management, and routing/caching optimizations to improve throughput and latency. Note: the project is marked as no longer actively maintained; evaluate continuity needs before production use.

## Key Features

- OpenAI-compatible API endpoints for chat, completions, and embeddings.
- Optimized routing and cache-aware load balancing to improve KV cache utilization.
- Automated model management with support for downloading, mounting, and dynamic LoRA adapters.

## Use Cases

- Hosting low-latency model inference services and chat UIs on Kubernetes.
- Large-scale batch inference and embedding pipelines across clusters.
- Researching cache-aware routing and distributed inference strategies (noting maintenance status).

## Technical Details

- Written primarily in Go with supporting Jupyter/Notebook examples and Python tooling.
- Deploys via Helm charts and uses Bazel/Makefile for builds and testing.
- Includes quickstart examples and comprehensive docs at <https://www.kubeai.org/>.
