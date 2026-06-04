---
name: KServe
slug: kserve
homepage: https://kserve.github.io/website/
repo: https://github.com/kserve/kserve
license: Apache-2.0
category: inference-serving
subCategory: model-serving
tags:
  - Deployment
  - Inference Service
description: 'KServe: a Kubernetes-native model inference platform for scalable predictive and generative AI deployments.'
author: KServe
ossDate: '2019-03-27T21:14:14.000Z'
featured: false
status: tracked
---

## Introduction

KServe is a Kubernetes-native model inference platform that provides standardized CRDs and data-plane protocols to support scalable predictive and generative AI in production.

## Key Features

- Standardized Inference CRDs and APIs for simplified model deployment and lifecycle management.
- Autoscaling (including GPU autoscaling and scale-to-zero) and high-density model loading via ModelMesh.
- Support for canary releases, pipelines, and ensembles (InferenceGraph) for advanced deployment patterns.

## Use Cases

- Deploy and manage online inference services (real-time and batch) on Kubernetes declaratively.
- Provide a unified ingress and routing layer for multi-framework, multi-model deployments.
- Integrate with GenAI/LLM inference and MCP scenarios with observability and governance.

## Technical Highlights

- Extends Kubernetes via CRDs for smooth integration with k8s toolchains and CI/CD.
- Integrates with ModelMesh for intelligent routing, resource reuse, and high-density serving.
- Supports various deployment modes (Knative serverless, raw k8s, ModelMesh) to meet different scale and latency needs.
