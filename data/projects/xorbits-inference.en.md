---
name: Xinference (Xorbits Inference)
slug: xorbits-inference
homepage: https://inference.readthedocs.io/
repo: https://github.com/xorbitsai/inference
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Inference
description: >-
  A model serving and inference framework that supports multiple backends, distributed deployments, and
  OpenAI-compatible APIs.
logo: ''
author: Xorbits
ossDate: '2023-06-14T07:05:04.000Z'
featured: false
status: tracked
---

## Overview

Xinference (Xorbits Inference) is a model serving and inference framework for language, speech, and multimodal models. It supports heterogeneous backends, distributed deployment, and provides OpenAI-compatible RESTful APIs for easy integration.

## Key Features

- Support for various inference engines (vLLM, GGML, TensorRT) and efficient use of heterogeneous hardware.
- OpenAI-compatible REST API, RPC, CLI and WebUI with streaming and function-calling support.
- Built-in support for cluster and distributed deployments, with Docker and Helm charts for production setups.

## Use Cases

- Self-hosted LLM services to control cost and privacy.
- Enterprise-grade model serving with multi-node, high-throughput requirements.
- Rapid prototyping and experiments via Colab, Docker, or Kubernetes.

## Technical Highlights

- Modular architecture with backend plugins and custom model adapters.
- Deep integrations with third-party ecosystems (LangChain, LlamaIndex, Dify) for building RAG and agent workflows.
- Comprehensive docs and examples on ReadTheDocs to accelerate adoption and production migration.
