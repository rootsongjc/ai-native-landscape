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
description: 一个用 Rust 实现的轻量、安全的 Python 解释器，专为在智能体中安全执行 LLM 生成的代码设计。
author: Pydantic
ossDate: '2023-05-28T11:13:38Z'
featured: false
status: tracked
---

Monty 是一个用 Rust 实现的轻量、安全的 Python 解释器，专为在智能体和模型驱动工作流中安全执行 LLM 生成的 Python 代码而设计。它通过限制标准库、强制外部函数边界和严格的资源上限来避免暴露宿主环境，同时提供微秒级启动延迟和可预测的执行模型。

## 性能与可移植性

- 微秒级启动和紧凑的二进制文件，非常适合直接嵌入需要低延迟代码执行的智能体运行时
- 完全用 Rust 实现，不依赖 CPython，可跨宿主语言移植且易于嵌入
- 可选的类型检查和 Python、Rust、JavaScript 宿主绑定提供跨技术栈的灵活性

## 安全与沙箱

- 严格沙箱机制确保文件系统、网络和环境变量访问只能通过开发者提供的外部函数进行
- 精细的资源追踪覆盖内存、栈深度和执行时间，超限时自动取消以防止计算失控
- 刻意受限的语言表面（包括受限标准库和约束语法）提升安全性并使代码库可审计

## 执行状态管理

- 可序列化的执行快照支持在外部暂停和恢复解释器状态，实现精细的检查点与恢复工作流
- 解释器状态可序列化为字节，支持高效缓存或跨进程传输
- 在低延迟内嵌执行场景中作为完整容器沙箱的轻量替代方案
