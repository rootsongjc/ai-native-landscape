---
name: k8sgpt
slug: k8sgpt
homepage: https://k8sgpt.ai/
repo: https://github.com/k8sgpt-ai/k8sgpt
license: Unknown
category: models-modalities
subCategory: foundation-models
tags:
  - Dev Tools
  - LLM
description: >-
  An AI tool that provides diagnostic and analysis capabilities for Kubernetes, using LLM to locate and explain cluster
  issues.
logo: ''
author: K8sGPT
ossDate: '2023-03-21T19:58:16.000Z'
featured: false
status: tracked
---

## Introduction

k8sgpt is an AI diagnostic tool for Kubernetes that provides analyzers to automatically discover cluster issues and generates actionable explanations and remediation suggestions using various LLM backends.

## Key Features

- Multiple LLM backend support (OpenAI, Azure, Bedrock, Vertex, local models, etc.)
- CLI and Operator modes for local/cluster execution
- Rich collection of analyzers (pod, service, ingress, node, etc.)

## Use Cases

- Instant cluster fault diagnosis with remediation suggestions
- Integration of analyzers into incident response and monitoring workflows
- Cluster health checks in development or CI environments

## Technical Highlights

- Extensible analyzer architecture with support for custom diagnostic rules
- Operator mode for continuous in-cluster monitoring
- Seamless integration with multiple AI providers
