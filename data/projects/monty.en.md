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
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

Monty is a minimal, secure Python interpreter implemented in Rust, designed to safely execute LLM-generated Python code inside agents and model-driven workflows. By restricting the standard library, enforcing explicit external function boundaries, and applying resource limits, Monty avoids exposing the host environment while providing microsecond-level startup and a predictable execution model.

## Main Features

- Microsecond startup and a small binary suitable for embedding in agent runtimes.
- Serializable execution snapshots that allow pausing and resuming state externally.
- Strict sandboxing: filesystem, network and env access are only available via developer-provided external functions.
- Optional type checking and bindings for Python, Rust and JavaScript hosts.

## Use Cases

- Safely running LLM-generated code within agent architectures to call host-provided tools.
- Low-latency inline code execution where full container sandboxes are too heavy.
- Snapshot-and-resume workflows for suspending long-running tasks and migrating execution across processes.

## Technical Features

- Implemented in Rust with no CPython dependency, making it portable across host languages.
- Fine-grained resource tracking (memory, stack depth, execution time) with cancel-on-limit semantics.
- Byte-serializable interpreter state for caching or cross-process transport.
- Intentionally limited language surface (restricted stdlib, limited syntax) to improve safety and auditability.
