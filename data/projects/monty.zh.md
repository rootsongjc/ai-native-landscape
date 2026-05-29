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
description: 一个用 Rust 实现的轻量、安全的 Python 解释器，专为在智能体中安全执行 LLM 生成的代码设计。
logo: ''
author: Pydantic
ossDate: '2023-05-28T11:13:38Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Monty 是一个用 Rust 实现的轻量、安全的 Python 解释器，专为在智能体内安全执行由大模型生成的 Python 代码而设计。它通过限制标准库、强制外部函数边界与资源上限，避免直接暴露宿主环境，从而在保持极低启动延迟的同时提供可控的执行环境。

## 主要特性

- 微秒级启动与轻量二进制，适合集成到智能体与运行时中。
- 可序列化的执行快照（snapshot），支持在外部存储中暂停与恢复执行状态。
- 严格沙箱：文件系统、网络与环境变量访问由外部函数显式控制。
- 支持类型检查（可选），并提供 Python / Rust / JavaScript 的调用绑定。

## 使用场景

- 在智能体（agent）架构中安全运行 LLM 生成的代码以调用宿主提供的工具。
- 需要低延迟代码执行的内嵌脚本场景，替代完整容器沙箱以降低复杂性与资源开销。
- 快照与恢复场景下的长期任务挂起与迁移，例如分布式工作流的中断恢复。

## 技术特点

- 用 Rust 实现、无需依赖 CPython，便于在多种宿主语言中嵌入与部署。
- 提供精细的资源追踪（内存、栈深度、执行时间），可在超限时取消任务。
- 支持将解释器状态序列化为字节以供缓存或跨进程传输。
- 有意限制语言完整性（受限标准库、暂不支持类定义等），以换取安全性与可审计性。
