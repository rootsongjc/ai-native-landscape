---
name: HarnessRouter
slug: harnessrouter
homepage: https://harnessrouter.ai/
repo: https://github.com/HarnessRouter/harnessrouter
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - Agent Harness
  - Coding Agent
  - Unified API
  - Self Hosted
  - Open Protocol
description: Self-hosted unified interface for agent harnesses that runs Codex, Claude Code, and 26 harness bases through one OpenAI Responses-compatible API, implementing the open Unified Harness Protocol (UHP).
author: HarnessRouter
ossDate: '2026-08-09T20:19:14Z'
featured: false
status: tracked
---

## Overview

HarnessRouter is the infrastructure layer that turns existing agent harnesses such as Codex, Claude Code, OpenCode, and Gemini CLI into plug-and-play agent backends. A product backend calls one OpenAI Responses-compatible API and selects the harness with `metadata.harness_id`, letting it run tasks, retrieve results, and switch harnesses without per-harness integration work. Community Edition is self-hosted with bring-your-own provider keys and no account requirement.

## Key Features

- **One integration for many harnesses**: 26 harness bases (Codex, Claude Code, Hermes, Pi, DeepSeek Harness, OpenCode, Qwen Code, Gemini CLI, Cline, goose, Aider, OpenHands, and more) behind a single unified API, swappable per request
- **Full agent lifecycle over the API**: start tasks, continue sessions via `previous_response_id`, stream live progress over server-sent events, attach and retrieve files, cancel tasks, and inspect structured errors and execution traces
- **Cost and latency optimization**: switching harness × model configurations on the same task shows a 99.8% cost spread (223 to 0.47 credits) and 3.2× latency difference across eight configurations in published benchmarks
- **Console for setup and observation**: builds an agent setup (instructions, harness, model, skills, plugins, tools) from one sentence, replays recorded example runs, and shows every task and transcript in the workspace
- **Bring-your-own-key self-hosting**: one Docker command, provider keys entered in the console, and all state (database, files, secrets, workspaces) kept in a local volume on infrastructure you control

## Use Cases

- **Agent-powered product features**: power slides, sheets, dashboards, and video generation in an application by calling the Responses API and choosing the harness per task, instead of integrating each harness CLI separately
- **Harness cost/latency tuning**: benchmark the same task across harness and model configurations and route production traffic to the cheapest or fastest backend
- **Self-hosted agent infrastructure**: run coding agents on private infrastructure with own provider keys, per-session workspaces, and trace correlation into existing observability stacks

## Technical Details

- Implements the Unified Harness Protocol (UHP), a public, versioned contract whose task surface is deliberately compatible with the OpenAI Responses API, so existing Responses SDKs, streaming parsers, and UI components work against a UHP server; the repository ships the Apache-2.0 reference implementation, machine-readable OpenAPI/JSON Schema, and a conformance suite
- Single-container architecture: Console on :3000 as the only published port and a same-origin proxy to the Gateway (:8080, Responses API and harness lifecycle) and Runner (:8081, executes harnesses in session workspaces), both bound to loopback inside the container
- Sessions get separate workspaces and operating-system users rather than separate containers; the Runner runs as root to manage per-session users while Console and Gateway run unprivileged
- W3C Trace Context propagation: `traceparent`/`tracestate` headers make the task's model calls children of the caller's trace; invalid trace headers are dropped rather than refused, and `baggage` is never read
- Idempotency via `Idempotency-Key`: a retry with the same key returns the first request's result without re-executing, waits if the first is still running, and returns 409 when the key is reused with a different body
- Secret handling: harness `env` maps resolve per turn from `$headers.*` references or `vault:` secrets stored through `PUT /v1/mcp-secrets/{ref}`, and values that arrived through a reference are redacted from the response, stream, trace, and stored record
- OpenAPI spec is generated from the routes and served at `/v1/openapi.json` with a browsable copy at `/v1/docs`
