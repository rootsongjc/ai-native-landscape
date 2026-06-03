---
name: OpenSpec
slug: openspec
homepage: https://openspec.dev/
repo: https://github.com/fission-ai/openspec
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: OpenSpec 是一个面向 AI 编程助手的规范驱动开发平台，帮助定义、验证与执行面向代码的交互规范。
author: Fission AI
ossDate: '2025-08-05T10:37:45.000Z'
featured: false
status: tracked
---

## 简介

OpenSpec 提供了一套以规范为中心的开发流程，专注于为 AI 编程助手（code assistant）定义可执行的交互规范与测试用例，从而提高生成代码的可靠性与可验证性。它帮助团队把编程任务拆解为结构化的规范，并在开发与 CI 流程中自动验证行为符合预期。

## 主要特性

- 规范驱动：以机器可执行的规范驱动助手行为，减少模型输出的不确定性。
- 验证与测试：内置测试框架支持在 CI 中对生成结果进行自动化断言与回归检查。
- 集成友好：提供工具链用于将规范集成到开发流水线与现有工程工具中。

## 使用场景

- 为代码生成与修复场景定义严格的行为规范并在 CI 中自动验证。
- 在研发中对不同模型的生成能力进行可比较的基准测试与回归控制。
- 构建企业级的智能代码助手时，将规范作为治理与安全策略的一部分。

## 技术特点

- 以 TypeScript 为主实现，面向现代前端与后端工具链，便于与现有开发工具集成。
- 提供可扩展的规范格式与验证器，支持在本地或 CI 环境中自动化运行。
