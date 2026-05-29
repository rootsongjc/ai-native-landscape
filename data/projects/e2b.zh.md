---
name: E2B
slug: e2b
homepage: https://e2b.dev/docs
repo: https://github.com/e2b-dev/e2b
license: Unknown
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - AI Agent
  - Dev Tools
  - Product
description: 用于 AI 应用和智能体的安全开源云运行时环境。
logo: ''
author: E2B
ossDate: '2023-03-04T13:41:18.000Z'
featured: true
thumbnail: ''
source: ''
status: tracked
---

E2B 是一个开源基础设施，允许您在云端安全隔离的沙箱中运行 AI 生成的代码。您可以使用我们的 Python SDK 或 JavaScript SDK 来启动和控制沙箱。

## 什么是 E2B？

E2B 为执行 AI 生成的代码提供了安全环境。它允许您在云端隔离的沙箱中运行不受信任的代码，防止对系统造成潜在危害。通过 E2B，您可以构建需要安全执行代码的 AI 应用程序，如智能体、代码助手或自动化分析工具。

E2B 的典型使用场景包括：

- AI 数据分析或可视化
- 运行各种语言的 AI 生成代码
- 编程代理的试验场
- 代码生成评估环境
- 运行完整的 AI 生成应用程序（如 Fragments）

## 内部原理

E2B 沙箱是一个可以快速启动的小型隔离虚拟机（约 150 毫秒）。您可以将其视为 AI 模型的小型计算机。您可以同时运行多个沙箱。通常，您会为应用程序中的每个大语言模型、用户或智能体会话运行单独的沙箱。例如，如果您正在构建一个 AI 数据分析聊天机器人，您会为每个用户会话启动一个沙箱。
