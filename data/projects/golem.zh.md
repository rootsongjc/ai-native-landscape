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
status: tracked
---

## 简介

Golem Cloud 是一个面向智能体原生应用的平台，用于构建永不丢失状态、永不重复执行的 AI 智能体和分布式应用。它以 WebAssembly 组件作为持久执行单元，使开发者能够构建高可靠的有状态服务，而无需手动处理分布式系统的复杂性。Golem 的持久执行模型确保智能体工作流的每一步都被持久化并可恢复，非常适合关键任务的 AI 工作流。

## 主要特性

Golem 提供基于 WebAssembly 的组件模型，支持多语言运行时隔离，以及保证精确一次执行语义的持久调度与恢复机制。它提供模块化控制平面和丰富的 SDK，覆盖编排、调试与集成场景，并内置对长时间运行的有状态服务的支持，能够在故障发生时透明恢复。

## 使用场景

Golem 非常适合构建需要可靠状态管理的持久化 AI 智能体工作流，例如多步骤编排管道、长期运行的数据处理任务和可恢复的后台作业。它同样适用于基于 WASM 的微服务、边缘计算工作负载，以及任何需要容错执行与强可观测性的云原生系统。

## 技术特点

Golem 使用 Rust 开发以保证性能与安全性，将 WebAssembly 与持久执行语义相结合，提供组件生命周期管理、自动作业恢复与可扩展的调度器。其模块化架构支持多种部署模式（本地、私有云、公有云），并通过语言无关的组件模型允许开发者使用自己喜欢的编程语言编写智能体。
