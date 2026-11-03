---
name: freelm
slug: freelm
homepage: https://shahriarlabs.com/products/freelm/
repo: https://github.com/shihabshahrier/freelm
license: MIT
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - LLM Router
  - AI Gateway
  - OpenAI Compatible
  - Failover
  - Free Tier
description: >-
  freelm is an LLM router that pools the official free tiers of Gemini, Groq, OpenRouter, Cerebras, Mistral, NVIDIA NIM,
  Cloudflare Workers AI and other providers behind one OpenAI-compatible API, using the user's own keys. It runs
  in-process as a Python or TypeScript library or as a local server (`freelm serve`), routing each request by measured
  latency and per-model quota, with classified failure handling and racing of slow providers — free-only by design.
author: shihabshahrier
ossDate: '2026-06-07'
featured: false
status: tracked
---
## Overview

freelm turns the free tiers of Google Gemini, Groq, OpenRouter, Cloudflare Workers AI, Z.ai, Cohere, Mistral, NVIDIA NIM, and Kilo into one OpenAI-compatible LLM — usable in Python or TypeScript code, or as a local `/v1` endpoint for any tool. It is a free-only, lightweight alternative to LiteLLM or an OpenRouter account: it rotates your own keys, falls back across providers on rate limits, outages, and retired models, races a slow provider against the next one (a hung provider costs about 6 seconds, not a 60-second failure — measured in reproducible benchmarks), and discovers which models are free today.

It is a library, not a server to babysit: keys go straight from the user's environment to each provider, with no relay, dashboard, or admin port. The CLI even works with no keys at all, falling back to keyless public endpoints.

## Key Features

- **One OpenAI-Compatible API**: `freelm serve` exposes the pooled free tiers at a local `/v1` endpoint with streaming, tool calls, and failover — point OpenAI SDK, LangChain, LlamaIndex, Continue, Cline, or OpenCode at it
- **Library-First**: In-process use as a Python (`pip install freelm`) or TypeScript (`npm install freelm`, zero dependencies) library with identical behavior in both
- **Measured Routing**: Each request routes by measured latency and per-model quota; model aliases `auto`, `chat:fast`, `large`, and `tools` pick concrete ids for you
- **Classified Failure Handling**: Rate limits, auth failures, retired models, and hung connections are classified separately, each with the right recovery
- **Slow-Provider Racing**: A slow attempt is raced against the next provider, cutting hung-provider cost from a 60-second failure to roughly 6 seconds
- **Key Diagnostics**: `freelm doctor` sends one tiny request per key and reports exactly what is wrong and how to fix it
- **Works With No Keys**: With no keys configured, the CLI falls back to keyless public endpoints (Kilo Gateway free routes, OVHcloud AI Endpoints anonymous tier) and says so

## Use Cases

- **Zero-Cost Prototyping**: Run agent or app prototypes on pooled free tiers with your own keys, no account or billing setup
- **Drop-in Free Backend**: Give any OpenAI-compatible tool (Continue, Cline, Roo Code, OpenCode, LangChain) a free LLM backend via `freelm serve`
- **Resilient Hobby Deployments**: Survive per-provider rate limits and outages with automatic failover and slow-provider racing
- **Edge and Workers Deployments**: Bundle the zero-dependency TypeScript build into Cloudflare Workers or edge runtimes

## Technical Details

- **Twin Implementations**: Python (one runtime dependency, Python 3.9+) and TypeScript (zero runtime dependencies, Node 20+) with identical routing behavior; the TS build bundles for Workers/edge
- **Reproducible Benchmarks**: Failover numbers come from benchmark scripts kept in the repository (`benchmarks/`), not vendor claims
- **Free-Only Enforcement**: Refuses paid model ids on OpenRouter by design, keeping the routing pool honest to free tiers
- **Key-Pass-Through Architecture**: No relay, dashboard, or admin port — user keys go directly from environment variables to each provider
- **Deployable as Server or Docker**: `freelm serve` runs the same router as a local server (port 4000 by default); a Docker image is also published
- **Distributed on PyPI and npm since June 2026**, currently at 0.5.x
