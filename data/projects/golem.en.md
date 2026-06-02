---
name: Golem
slug: golem
homepage: https://learn.golem.cloud/
repo: https://github.com/golemcloud/golem
license: Unknown
category: inference-serving
subCategory: model-serving
tags:
  - Framework
  - Runtime
  - Serving
description: An open source durable computing platform that simplifies building and deploying highly reliable distributed systems.
logo: ''
author: Golem Cloud
ossDate: '2023-11-24T08:54:54Z'
featured: false
status: tracked
---

## Overview

Golem Cloud is an agent-native platform for building AI agents and distributed applications that never lose state and never duplicate work. It runs WebAssembly components as durable execution units, enabling developers to build highly reliable stateful services without manually handling distributed systems complexity. Golem's durable execution model ensures that every step of an agent's workflow is persisted and recoverable, making it ideal for mission-critical AI workflows.

## Key Features

Golem provides a WebAssembly-based component model with language-agnostic runtime isolation, durable scheduling and recovery mechanisms that guarantee exactly-once execution semantics. It offers a modular control plane with rich SDKs covering orchestration, debugging, and integration, along with built-in support for long-running stateful services that can survive failures transparently.

## Use Cases

Golem is well-suited for building durable AI agent workflows that require reliable state management, such as multi-step orchestration pipelines, long-running data processing jobs, and recoverable background tasks. It also fits scenarios involving WASM-based microservices, edge computing workloads, and any cloud-native system that demands fault-tolerant execution with strong observability.

## Technical Details

Built in Rust for performance and safety, Golem combines WebAssembly with durable execution semantics to provide lifecycle management, automatic job recovery, and a scalable scheduler. Its modular architecture supports multiple deployment modes including local development, private cloud, and public cloud, with a language-agnostic component model that allows developers to write agents in their preferred programming language.
