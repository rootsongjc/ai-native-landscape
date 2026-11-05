---
name: Kinference
slug: kinference
homepage: https://kinference.ai/
repo: https://github.com/Kinference-AI/kinference
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - Inference Routing
  - Kubernetes
  - vLLM
  - Control Plane
  - LLM Gateway
description: >-
  An inference control plane for Kubernetes and vLLM that selects among inference endpoints while applying policies,
  routing, and load balancing. It monitors vLLM KV-cache events and engine metrics to make placement decisions.
author: Kinference-AI (Buoyant)
ossDate: '2026-10-05'
featured: false
status: tracked
---

## Overview

Kinference is an inference control plane for Kubernetes and vLLM. At its core it selects among inference endpoints, applying policies, routing, and load balancing as appropriate. It is designed to be paired with a proxy such as the Buoyant Gateway, which forwards traffic to the endpoints Kinference chooses.

## Key Features

- Endpoint selection with policy enforcement, routing, and load balancing for inference requests
- gRPC interface accepting inference requests (e.g. OpenAI chat-completions format) and returning the chosen endpoint plus an appropriately-mutated request body
- Kubernetes CRD-driven configuration, with status monitored and reported back on the CRDs
- kinfctl CLI for validating policies before they are sent to the server

## Use Cases

- Routing and load balancing across a fleet of vLLM inference endpoints on Kubernetes
- KV-cache-aware request placement to improve inference throughput
- Policy validation in CI or by agents before applying routing configuration

## Technical Details

- Monitors vLLM KV-cache events and engine metrics, using NVIDIA's dynamo-kv-router crate to handle cache events
- Behavior is configured through a set of Kubernetes Custom Resource Definitions (CRDs); Kinference watches them and writes status back
- Designed as a control plane paired with a data-plane proxy (e.g. Buoyant Gateway) rather than terminating traffic itself
- Alpha software: no /v1/messages support, rate limiting, semantic classifiers, or multi-replica operation yet
