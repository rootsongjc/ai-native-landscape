---
name: Agent Development Kit Web (ADK Web)
slug: adk-web
homepage: https://google.github.io/adk-docs/
repo: https://github.com/google/adk-web
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Dev Tools
  - UI
description: Google 提供的内置开发者界面，用于结合 Agent Development Kit 进行智能体开发与调试。
logo: ''
author: Google
ossDate: '2025-05-05T17:16:28Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Agent Development Kit Web（ADK Web）是 Google 为 Agent Development Kit 提供的内置开发者界面，旨在简化智能体（智能体）开发、调试与交互流程。ADK Web 与 ADK 的后端组件配合使用，提供可视化的任务流展示、交互式调试面板和示例工程，帮助开发者从本地调试快速验证智能体行为。更多文档请参见 [ADK 文档](https://google.github.io/adk-docs/)。

## 主要特性

- 内置可视化界面：展示智能体执行流、调用链与任务状态。
- 调试工具：交互式输入、日志查看与事件回放，便于定位问题。
- 示例与集成：与 `adk-python`、`adk-java` 等 SDK 兼容，提供样例工程。
- 轻量部署：基于前端技术栈，配合后端 API 可快速本地运行。

## 使用场景

- 开发与调试智能体逻辑与工作流。
- 教学与示例演示，用于展示智能体交互模式。
- 与后端 SDK 联合测试，作为本地开发面板以缩短调试周期。

## 技术特点

- 基于 TypeScript/Angular 实现，前端可扩展性强。
- 与 ADK 后端 API 协同工作，支持本地和远程后端配置。
- 遵循开源许可（Apache-2.0），社区可贡献插件与改进。
- 针对 Google 生态进行了优化，但设计为模型无关，可与其他模型和部署方案配合使用。
