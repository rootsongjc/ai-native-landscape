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
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

Golem is an open source durable computing platform designed to simplify building and deploying highly reliable distributed systems. It runs WebAssembly (WASM) components as execution units and provides an orchestrated, scalable, and fault-tolerant environment suitable for long-running workloads and stateful services. Golem focuses on durable execution so developers can delegate distributed concerns to the platform and concentrate on application logic.

## Main Features

- WebAssembly-based component model with language-agnostic runtime isolation.
- Durable scheduling and recovery mechanisms to improve job reliability.
- Modular control plane and services for consistent local development and cloud deployment.
- Rich subcomponents and SDKs covering orchestration, debugging, and integration.

## Use Cases

Golem fits scenarios that need high reliability and long-lived computation: distributed builds, long-running data pipelines, recoverable background jobs, and WASM-based microservices or edge computing. It is suitable for cloud-native systems that require reliable execution and observability.

## Technical Features

Golem combines WebAssembly with durable execution semantics, offering lifecycle management, job recovery strategies, and a scalable scheduler. The project is implemented in Rust for performance and safety, and its modular architecture supports multiple deployment modes (local, private cloud, public cloud).
