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
description: 一个开源的可持久计算平台，使构建和部署高可靠分布式系统更容易。
author: Golem Cloud
ossDate: '2023-11-24T08:54:54Z'
featured: false
status: tracked
---
Golem Cloud 是一个面向智能体原生应用的平台，用于构建永不丢失状态、永不重复执行的 AI 智能体和分布式应用。它以 WebAssembly 组件作为持久执行单元，使开发者能够构建高可靠的有状态服务，而无需手动处理分布式系统的复杂性。

## 持久执行

- 智能体工作流的每一步都被持久化并可恢复
- 精确一次执行语义保证不产生重复工作
- 故障时自动作业恢复，状态透明还原
- 内置对长时间运行的有状态服务的支持，可在重启后继续运行

## WebAssembly 组件模型

- 通过 WASM 组件实现语言无关的运行时隔离
- 可使用任何能编译为 WebAssembly 的语言编写智能体
- 组件生命周期管理，支持安全热替换
- 沙箱隔离执行，确保安全性和资源控制

## 编排与 SDK

- 模块化控制平面，提供丰富的编排和调试 SDK
- 平台内置持久调度与恢复机制
- 集成层用于连接智能体与外部服务和 API
- 调试工具用于检查和重放工作流执行过程

## 部署灵活性

- 使用 Rust 开发，保证性能与内存安全
- 多种部署模式：本地开发、私有云和公有云
- 可扩展调度器透明处理分布式工作负载
- 适合多步骤编排管道和可恢复的后台任务
