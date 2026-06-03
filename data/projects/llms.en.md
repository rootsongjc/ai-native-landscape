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
author: ServiceStack
ossDate: '2025-09-23T11:04:23Z'
featured: false
status: tracked
---

## Overview

llms.py is a lightweight multi-provider LLM client and server that combines a command-line interface, an OpenAI-compatible HTTP API, and an optional browser-based chat UI. It enables developers to mix local models with remote providers while keeping analytics and data local, making it easy to balance privacy, latency, and cost across different usage scenarios.

## Key Features

- Multi-provider support integrating OpenRouter, Ollama, Anthropic, Google, OpenAI, Grok, Groq, Qwen, Mistral, and more with configurable model mappings.
- OpenAI-compatible API that exposes chat completions endpoints for seamless integration with existing clients and tooling.
- Local-first hybrid routing that prioritizes local or free providers to reduce cost, with automatic fallback to paid alternatives.
- Built-in analytics dashboard for visualizing costs, requests, and token usage alongside an optional ChatGPT-style web UI.

## Use Cases

- Development teams consolidating access to multiple LLMs through a single gateway for testing, comparison, and cost optimization across providers.
- Organizations deploying a controlled, OpenAI-compatible API endpoint internally to manage access, enforce policies, and monitor usage.
- Privacy-sensitive applications requiring local-first inference with optional cloud fallback for complex queries.

## Technical Details

- Compact single-file implementation in Python with configurable provider routing, automatic retries, and failover logic across endpoints.
- Supports multimodal inputs including image and audio, with automatic image resizing and format conversion for compatible models.
- Ships with Docker images and ready-made configurations for rapid deployment in both development and production environments.
