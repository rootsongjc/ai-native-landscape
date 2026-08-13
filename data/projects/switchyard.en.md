---
name: NeMo Switchyard
slug: switchyard
homepage: null
repo: https://github.com/NVIDIA-NeMo/Switchyard
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - LLM Routing
  - Gateway
  - Rust
  - NVIDIA
description: Rust proxy and library for LLM traffic that routes requests across providers and translates between OpenAI and Anthropic APIs.
author: NVIDIA-NeMo
ossDate: '2026-05-19T19:06:33Z'
featured: false
status: tracked
---

## Overview

Switchyard is a Rust proxy and library for LLM traffic from the NVIDIA NeMo team. It routes requests across providers, translates between OpenAI Chat, Anthropic Messages, and OpenAI Responses API formats, records operational metrics, and provides typed, composable routing algorithms. Point a coding agent like Claude Code or Codex at an open-source model served by vLLM, NVIDIA NIM, or Ollama while the agent keeps speaking its native API.

## Key Features

- Protocol translation between OpenAI Chat, Anthropic Messages, and OpenAI Responses formats.
- Multi-backend routing: random, LLM-as-classifier, signal-driven stage-router, or custom algorithms.
- Prometheus metrics for requests, errors, latency, tokens, and routing overhead.
- Usable as launcher, standalone proxy server, or embedded Rust library.

## Use Cases

- Run Claude Code or Codex CLI against open-source models.
- Spread traffic across models for A/B benchmarking.
- Embed custom LLM routing in Rust applications.

## Technical Details

- Written in Rust; routing algorithms are typed and composable, so custom strategies plug into the same proxy.
- Three usage modes: launcher that wraps Claude Code / Codex CLI / OpenClaw, standalone proxy server, or embedded library.
- Routing strategies include random, LLM-as-classifier, signal-driven stage routing, and user-written algorithms.
- Prometheus metrics cover requests, errors, latency, tokens, and routing overhead itself.
- Pre-alpha maturity — APIs expected to change before v1.0.
