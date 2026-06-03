---
name: json-render
slug: json-render
homepage: https://json-render.dev
repo: https://github.com/vercel-labs/json-render
license: Unknown
category: applications-products
subCategory: productivity-tools
tags:
  - Dashboard
  - Dev Tools
  - Visualization
description: 一个将 AI 生成的结构化 JSON 转换为可预测、可渲染 UI 的开源框架。
author: Vercel
ossDate: '2026-01-14T17:22:39Z'
featured: false
status: tracked
---

json-render 是一个 JSON 渲染引擎，可将 AI 生成的结构化输出约束为可预测、安全的 UI 组件。通过限制 AI 仅使用预定义的组件目录，确保模型输出始终可渲染且类型安全，适合构建可靠的 AI 驱动用户界面。

## 主要特性

- 组件目录系统作为护栏，确保模型输出始终在允许范围内
- 支持流式生成与渐进渲染以提升交互体验
- 内置基于 zod 的 schema 校验机制保证输出正确性
- 附带 React 渲染器与示例项目，方便快速集成到现有应用中
- 动作声明与外部回调绑定，可将用户交互映射到后端操作

## 使用场景

- 将自然语言提示转为仪表盘、报表和可视化组件，避免不可预测的输出
- 充当护栏层，在模型输出需要可验证约束时进行安全渲染
- 作为前端集成层，将 RAG、LLM 等智能服务的响应渲染为安全且可交互的 UI
- 构建具有类型安全保证的 AI 驱动数据可视化工具

## 技术特点

- 采用多包 monorepo 架构，包含 `@json-render/core` 与 `@json-render/react` 等模块
- 使用 schema 驱动验证确保组件 props 与动作的类型安全
- 开源许可为 Apache-2.0，社区活跃并提供 playground 便于快速上手
