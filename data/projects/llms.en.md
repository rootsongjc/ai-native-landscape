---
name: llms.py
slug: llms
homepage: https://servicestack.net/posts/llms-py-ui
repo: https://github.com/servicestack/llms
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - CLI
  - Dev Tools
  - UI
description: Lightweight multi-provider LLM client with an OpenAI-compatible server API and optional chat UI.
logo: ''
author: ServiceStack
ossDate: '2025-09-23T11:04:23Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

llms.py is a lightweight LLM client and server developed by ServiceStack that combines a CLI, an OpenAI-compatible HTTP API, and an optional browser-based chat UI. It lets you mix local models with remote providers while keeping analytics and data local when desired, making it easy to balance privacy, latency, and cost. Docker images and ready-made configuration simplify local and production deployments.

## Main Features

1. Multi-provider support: integrates OpenRouter, Ollama, Anthropic, Google, OpenAI, Grok, Groq, Qwen, Z.ai, Mistral and more with configurable model mappings.
2. OpenAI-compatible API: exposes an API compatible with OpenAI chat completions for easy integration with existing clients and tooling.
3. Local-first hybrid routing: prioritize local or free providers to reduce cost, with automatic fallback to other providers.
4. Built-in analytics & UI: visualisations for costs, requests and token usage plus an optional ChatGPT-like web UI.

## Use Cases

llms.py is ideal for consolidating access to multiple LLMs — from developer testing of different models to running a controlled OpenAI-compatible gateway inside an organization, or creating local-first chat applications that preserve data privacy. It also works well for quick Docker-based deployments in edge or constrained environments.

## Technical Features

Technically, llms.py offers a compact single-file implementation (with Python/JS components), configurable provider routing, automatic retries and failover, and multimodal support for image and audio inputs. It also supports optional GitHub OAuth for authentication, automatic image resizing/format conversion, and a useful set of CLI commands for running and debugging.
