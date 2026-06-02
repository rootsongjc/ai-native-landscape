---
name: Monty
slug: monty
homepage: https://pypi.org/project/pydantic-monty/
repo: https://github.com/pydantic/monty
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
  - Runtime
  - SDK
description: A minimal, secure Python interpreter written in Rust for safely executing LLM-generated Python code.
logo: ''
author: Pydantic
ossDate: '2023-05-28T11:13:38Z'
featured: false
status: tracked
---

## Overview

Monty is a minimal, secure Python interpreter written in Rust, purpose-built for safely executing LLM-generated Python code inside agents and model-driven workflows. It restricts the standard library, enforces explicit external function boundaries, and applies strict resource limits to avoid exposing the host environment, all while delivering microsecond-level startup and a predictable execution model.

## Key Features

Microsecond startup and a compact binary make Monty ideal for embedding directly into agent runtimes where low-latency code execution is critical. Serializable execution snapshots allow pausing and resuming interpreter state externally, enabling sophisticated checkpoint-and-resume workflows. Strict sandboxing ensures that filesystem, network, and environment access are only available through developer-provided external functions, eliminating uncontrolled side effects. Optional type checking and bindings for Python, Rust, and JavaScript hosts provide flexibility across diverse technology stacks.

## Use Cases

Agent architectures use Monty to safely run LLM-generated code that calls host-provided tools without risking the host environment. It serves as a lightweight alternative to full container sandboxes in low-latency inline execution scenarios. Snapshot-and-resume workflows benefit teams that need to suspend long-running tasks and migrate execution state across processes or machines.

## Technical Details

Implemented entirely in Rust with no CPython dependency, Monty is portable across host languages and easy to embed. Fine-grained resource tracking covers memory, stack depth, and execution time with cancel-on-limit semantics to prevent runaway computations. The interpreter state is byte-serializable for efficient caching or cross-process transport. The deliberately limited language surface, including a restricted standard library and constrained syntax, improves security and makes the codebase auditable.
