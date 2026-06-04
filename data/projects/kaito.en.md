---
name: Kaito
slug: kaito
homepage: https://kaito-project.github.io/kaito/docs/
repo: https://github.com/kaito-project/kaito
license: Apache-2.0
category: inference-serving
subCategory: model-serving
tags:
  - AI
  - Automation
  - Cloud Native
  - Kubernetes
  - RAG
description: >-
  Kaito is a Kubernetes AI Toolchain Operator that automates deployment and management of large-model inference and
  tuning workflows, with built-in RAG support and node auto-provisioning.
author: kaito-project
ossDate: '2023-09-09T01:53:38.000Z'
featured: false
status: tracked
---

## Introduction

Kaito is a Kubernetes AI Toolchain Operator that automates deployment and management of large model inference and tuning workloads in Kubernetes, supporting node auto-provisioning, preset configurations and a RAG engine.

## Key Features

- Automated workflows: declare inference or tuning specs through the `Workspace` CRD and let the operator reconcile resources and scheduling.
- RAG support: includes RAGEngine that uses LlamaIndex and FAISS for retrieval-augmented generation.
- Node auto-provisioning: integrates with gpu-provisioner/Karpenter to scale GPU nodes on demand.
- Multi-runtime support: compatible with vLLM, transformers, Ollama and other inference backends.

## Use Cases

- Rapid delivery of large-model inference and RAG services on Kubernetes.
- Multi-node/multi-GPU inference with automated provisioning and cost optimization.
- Research and testing environments for validating deployments and performance.

## Technical Highlights

- Kubernetes-native CRD/controller architecture for seamless integration with cloud-native tooling.
- Helm and Terraform deployment guides and examples for production-ready deployments.
