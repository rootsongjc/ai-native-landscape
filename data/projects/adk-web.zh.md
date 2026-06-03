---
name: Agent Development Kit Web (ADK Web)
slug: adk-web
homepage: https://google.github.io/adk-docs/
repo: https://github.com/google/adk-web
license: Apache-2.0
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Dev Tools
  - UI
description: Google 提供的内置开发者界面，用于结合 Agent Development Kit 进行智能体开发与调试。
author: Google
ossDate: '2025-05-05T17:16:28Z'
featured: false
status: tracked
---
## 简介

Agent Development Kit Web（ADK Web）是 Google 为 Agent Development Kit 提供的内置开发者界面，旨在简化智能体开发与调试流程。它与 ADK 后端组件配合使用，提供可视化任务流展示、交互式调试面板和示例工程，帮助开发者快速验证智能体行为。

## 主要特性

- 内置可视化界面，实时展示智能体执行流、调用链与任务状态。
- 交互式调试工具，支持输入模拟、日志查看与事件回放，快速定位问题。
- 与 adk-python、adk-java 等 SDK 兼容，并提供示例工程便于快速上手。

## 使用场景

- 开发与调试智能体逻辑与多步骤工作流，获得可视化反馈。
- 教学与演示场景，用于展示智能体交互模式。
- 与后端 SDK 联合进行本地集成测试，加速开发迭代周期。

## 技术特点

- 基于 TypeScript 与 Angular 实现，具备良好的可扩展性与可维护性。
- 与 ADK 后端 API 协同工作，支持本地和远程后端配置。
- 采用 Apache-2.0 开源许可，设计上模型无关，可与多种模型和部署方案配合使用。
