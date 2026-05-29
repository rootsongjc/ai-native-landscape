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
description: 一个开源的可持久计算平台，使构建和部署高可靠分布式系统更容易。
logo: ''
author: Golem Cloud
ossDate: '2023-11-24T08:54:54Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Golem 是一个开源的可持久计算平台，旨在简化高可靠分布式系统的构建与部署。它以 WebAssembly（WASM）组件为运行单元，提供可编排、可伸缩且容错的执行环境，支持长时间运行的任务与有状态服务。Golem 强调耐久性（durable computing），使开发者能够把复杂的分布式细节交给平台处理，从而专注于业务逻辑。

## 主要特性

- 以 WebAssembly 为基础的组件模型，支持多语言运行时隔离。
- 面向持久执行的调度与恢复机制，提升任务可靠性。
- 模块化服务与控制平面，便于本地开发与云端部署一致性。
- 丰富的子组件与 SDK，覆盖编排、调试与集成场景。

## 使用场景

Golem 适用于需要高可靠性与长期运行能力的分布式任务，例如分布式编译、长期数据处理管道、可恢复的后台作业以及基于 WASM 的微服务与边缘计算场景。对于需要可靠执行与可观测性的云原生系统，Golem 提供了可插拔的运行时与服务组件。

## 技术特点

Golem 的核心在于将 WebAssembly 与耐久执行语义结合，提供强一致的组件生命周期管理、作业恢复策略与可扩展的调度器。项目使用 Rust 开发以保证运行时性能与安全性，并通过模块化设计支持多种部署模式（本地、私有云、公有云）。
