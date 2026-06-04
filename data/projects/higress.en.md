---
name: Higress
slug: higress
homepage: https://higress.ai/en/
repo: https://github.com/alibaba/higress
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
description: >-
  A cloud-native API gateway based on Istio and Envoy that supports Wasm plugins and AI Gateway features including MCP
  hosting and multi-model integrations.
author: 阿里巴巴
ossDate: '2022-10-27T03:53:00.000Z'
featured: false
status: tracked
---

## Overview

Higress is a cloud-native API gateway from Alibaba built on Istio and Envoy. It extends gateway capabilities through Wasm plugins and provides AI Gateway features such as MCP hosting and unified multi-model integration for enterprise workloads.

## Key Features

- Unified access to multiple model providers with observability, token rate limiting and caching
- MCP server hosting and openapi-to-mcp tooling
- Rich Wasm plugin ecosystem with language-agnostic extensions

## Use Cases

- Integrate LLM APIs and MCP services in enterprise API gateways
- Host remote MCP servers with unified auth, rate limiting and auditing
- Provide streaming processing and high availability for AI workloads

## Technical Highlights

- Production-grade architecture with zero-downtime config updates
- Wasm plugin sandboxing for safe extensibility
- Enterprise observability, audit and security features
