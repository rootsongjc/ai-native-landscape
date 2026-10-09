---
name: KCoral
slug: kcoral
homepage: https://kcoral.mlc.ai/
repo: https://github.com/mlc-ai/kcoral
license: Apache-2.0
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Sandbox
  - GPU
  - Benchmark
  - Remote Execution
  - Agentic Coding
description: >-
  A lightweight benchmark server from MLC AI that executes GPU programs remotely for agentic GPU
  programming. It manages GPU and node resources behind a unified endpoint, with sandboxed workers
  and a Rust router for multi-node scheduling.
author: MLC AI
ossDate: '2026-07-16'
featured: false
status: tracked
---

## Introduction

KCoral is a lightweight benchmark server for agentic GPU programming: it executes GPU benchmark programs remotely, manages GPU and node resources, and exposes everything through a unified endpoint. Agents (and humans) without a local GPU can compile, run, and profile GPU code — including NVIDIA tools like `ncu` and `compute-sanitizer` — as if they were local commands. It ships as a `pip install kcoral` package with a Python client, a GPU execution server, and a Rust router for scaling across nodes.

## Key Features

- `kcoral run` wraps remote tools as CLI commands: `python`, `compute-sanitizer`, `ncu`, `run-iket`, and `shell`, with `--send`/`--out` for workspace upload and artifact retrieval
- Python client API: decorate a function with `@client.function()` and call `.remote()` to execute it on the server; `Program.return_file()`/`return_folder()` bring workspace outputs back
- Multi-GPU programs via `client.execute(program, gpu_count=N)` on 1–8 GPUs, in one-process-controls-all or one-worker-per-GPU layouts
- Router mode: a Rust router accepts client requests and picks an available compute node; nodes connect outward and clients keep the same execution API
- Persistent file upload cache with configurable capacity

## Use Cases

- Coding agents iterating on GPU kernels and benchmarks without owning a local GPU
- Teams sharing a GPU cluster for agentic benchmark and profiling workflows across multiple nodes
- Running NVIDIA profiling and sanitizing tools remotely and collecting artifacts into an agent's workspace
- Splitting CPU compilation workers from GPU execution nodes in remote build-and-run pipelines

## Technical Highlights

- Execution protocol built on four instruction types — `upload`, `get_function`, `run`, `return` — that define requests, results, caching, and errors
- Worker isolation via bubblewrap filesystem sandboxing, checked at server startup with an explicit `--sandbox none` opt-out; the server is designed for trusted, isolated networks since clients can execute arbitrary code
- Router implemented in Rust; each node runs a supervisor that manages its Python server, and both connect outward to the Router so nodes need no inbound exposure
- Single- and multi-GPU programs share the same worker, which releases GPUs for `cpu_only` calls
- Split package design: `kcoral` installs client dependencies only, `kcoral[server]` adds GPU execution and CPU compilation dependencies (Python 3.10+)
