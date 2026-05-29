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
logo: ''
author: Vercel
ossDate: '2026-01-14T17:22:39Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

json-render 是一个将自然语言或模型输出约束为结构化 JSON 的开源框架，目标是让 AI 只使用预先定义的组件词典生成界面描述，从而实现输出的可预测性与安全性。项目包含核心类型系统、React 渲染器和示例应用，便于将 AI 生成的 UI 流水线化为可渲染、可交互的前端组件。

## 主要特性

- 以组件目录（catalog）定义可用组件与动作，作为护栏（guardrails），确保模型输出在允许范围内。
- 支持流式生成与渐进渲染，提升交互体验并降低首屏延迟。
- 内建验证与类型约束，结合 zod 等 schema 校验生成输出的有效性。
- 提供 React 渲染器与示例项目，方便在现有应用中集成与扩展。

## 使用场景

- 将自然语言描述转为仪表盘、报表和可视化组件的场景。
- 在需要对模型输出施加可验证约束的产品中作为护栏层使用。
- 作为前端集成层，将 RAG、LLM 或其他智能服务的响应渲染为安全且可交互的 UI。

## 技术特点

- 多包 monorepo 架构，包含 `@json-render/core` 与 `@json-render/react` 等模块，便于按需引入。
- 使用 schema 驱动验证（如 zod）定义组件 props 与动作，确保类型安全与稳定性。
- 支持动作（actions）声明与外部回调绑定，便于将用户交互映射到后端操作。
- Apache-2.0 开源许可，社区活跃且包含示例与 playground，便于快速上手。
