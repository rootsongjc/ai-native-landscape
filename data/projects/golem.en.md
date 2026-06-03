---
name: Golem
slug: golem
homepage: https://learn.golem.cloud/
repo: https://github.com/golemcloud/golem
license: Apache-2.0
category: inference-serving
subCategory: model-serving
tags:
  - Framework
  - Runtime
  - Serving
description: An open source durable computing platform that simplifies building and deploying highly reliable distributed systems.
author: Golem Cloud
ossDate: '2023-11-24T08:54:54Z'
featured: false
status: tracked
---
Golem Cloud is an agent-native platform for building AI agents and distributed applications that never lose state and never duplicate work. It runs WebAssembly components as durable execution units, enabling developers to build highly reliable stateful services without manually handling distributed systems complexity.

## Durable Execution

- Every step of an agent's workflow is persisted and recoverable
- Exactly-once execution semantics guarantee no duplicated work
- Automatic job recovery from failures with transparent state restoration
- Built-in support for long-running stateful services that survive restarts

## WebAssembly Component Model

- Language-agnostic runtime isolation via WASM components
- Write agents in any language that compiles to WebAssembly
- Component lifecycle management with safe hot-swapping
- Sandbox-isolated execution for security and resource control

## Orchestration and SDKs

- Modular control plane with rich SDKs for orchestration and debugging
- Durable scheduling and recovery mechanisms built into the platform
- Integration layers for connecting agents with external services and APIs
- Debugging tools for inspecting and replaying workflow execution

## Deployment Flexibility

- Built in Rust for performance and memory safety
- Multiple deployment modes: local development, private cloud, and public cloud
- Scalable scheduler that handles distributed workloads transparently
- Ideal for multi-step orchestration pipelines and recoverable background tasks
