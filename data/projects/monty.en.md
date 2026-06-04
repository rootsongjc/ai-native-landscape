---
name: Monty
slug: monty
homepage: https://pypi.org/project/pydantic-monty/
repo: https://github.com/pydantic/monty
license: Unknown
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Agent Framework
  - Dev Tools
  - Runtime
  - SDK
description: A minimal, secure Python interpreter written in Rust for safely executing LLM-generated Python code.
author: Pydantic
ossDate: '2023-05-28T11:13:38Z'
featured: false
status: tracked
---

Monty is a minimal, secure Python interpreter written in Rust, purpose-built for safely executing LLM-generated Python code inside agents and model-driven workflows. It restricts the standard library, enforces explicit external function boundaries, and applies strict resource limits while delivering microsecond-level startup and a predictable execution model.

## Performance and Portability

- Microsecond startup and a compact binary make Monty ideal for embedding directly into agent runtimes where low-latency code execution is critical
- Implemented entirely in Rust with no CPython dependency, making it portable across host languages and easy to embed
- Optional type checking and bindings for Python, Rust, and JavaScript hosts provide flexibility across diverse technology stacks

## Security and Sandboxing

- Strict sandboxing ensures filesystem, network, and environment access are only available through developer-provided external functions
- Fine-grained resource tracking covers memory, stack depth, and execution time with cancel-on-limit semantics to prevent runaway computations
- The deliberately limited language surface, including a restricted standard library and constrained syntax, improves security and makes the codebase auditable

## Execution State Management

- Serializable execution snapshots allow pausing and resuming interpreter state externally, enabling sophisticated checkpoint-and-resume workflows
- The interpreter state is byte-serializable for efficient caching or cross-process transport
- Serves as a lightweight alternative to full container sandboxes in low-latency inline execution scenarios
