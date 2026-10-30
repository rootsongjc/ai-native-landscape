---
name: Agent Router
slug: agent-router
homepage: https://theagentrouter.ai/
repo: https://github.com/theagentrouter/agent-router
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - Kubernetes
  - Envoy
  - LLM
description: >-
  An open source control plane for AI and agent traffic built on Envoy Gateway, providing a unified OpenAI-compatible
  API with centralized credentials, routing, quotas, and failover. Formerly Envoy AI Gateway.
author: Agentic AI Foundation
ossDate: '2024-10-21T02:59:59.000Z'
featured: false
status: tracked
---
## Overview

Agent Router, formerly Envoy AI Gateway, is an open source control plane for AI and agent traffic powered by Envoy and Envoy Gateway, now an Agentic AI Foundation project. It gives application teams one consistent, OpenAI-compatible API for every model and tool — hosted providers, self-hosted inference, and MCP servers — while platform teams keep credentials, routing, quotas, failover, and usage attribution in one place. The rename changed only the repository and website locations; CRDs, the `aigw` CLI, container images, Helm charts, and the Go module path are unchanged.

## Key Features

- Unified OpenAI-compatible API across 20+ providers, including OpenAI, Azure OpenAI, Anthropic, Google Gemini, Vertex AI, AWS Bedrock, Mistral, Groq, DeepSeek, and self-hosted inference
- Kubernetes-native control plane with `AIGatewayRoute`, `AIServiceBackend`, and `BackendSecurityPolicy` CRDs
- Centralized credential management, token quotas, rate limiting, failover, and usage attribution
- Standalone mode via the `aigw` CLI: run a local router with `aigw run` and provider auto-configuration, serving OpenAI-compatible clients on `localhost:1975`
- Two-tier gateway pattern: a Tier One gateway for authentication, top-level routing, and global rate limiting, plus a Tier Two gateway with fine-grained control and endpoint picker support for self-hosted model serving clusters
- MCP server support alongside hosted and self-hosted model backends

## Use Cases

- Presenting a single OpenAI-compatible endpoint to applications while routing across many model providers
- Platform teams enforcing credentials, quotas, and usage attribution without touching application code
- Kubernetes ingress and traffic management for self-hosted LLM serving clusters
- Local development and evaluation with a zero-config standalone router

## Technical Details

- Control plane built on Envoy Gateway: AI traffic resources are declared as Kubernetes CRDs and enforced by Envoy as the data plane ("Agent Router controls, Envoy carries")
- API group `aigateway.envoyproxy.io` and CRDs remain unchanged from the Envoy AI Gateway era, so existing manifests keep applying after the rename
- Runs in the `envoy-ai-gateway-system` namespace; images ship as `docker.io/envoyproxy/ai-gateway-*` and the Go module path stays `github.com/envoyproxy/ai-gateway`
- Standalone `aigw run` mode serves the OpenAI-compatible `/v1` API on port 1975 for laptop-scale use without a Kubernetes cluster
