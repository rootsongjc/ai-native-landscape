---
name: A2UI
slug: a2ui
homepage: https://a2ui.org/
repo: https://github.com/google/a2ui
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - UI
description: 一个开源的声明式 UI 规范与工具集，使智能体以安全且可移植的 JSON 描述生成可渲染界面。
author: Google
ossDate: '2025-09-24T23:14:02Z'
featured: false
status: tracked
---
## 简介

A2UI（Agent-to-User Interface）是由 Google 开发的开源声明式 UI 规范与工具集，使智能体能够以安全、可移植的 JSON 格式描述可渲染界面。智能体生成描述界面意图和组件树的结构化 JSON 载荷，客户端渲染器将其映射为各平台的原生组件。

## 主要特性

- 声明式 JSON 格式，支持增量更新，便于大语言模型逐步生成与调整。
- 安全优先设计，客户端维护受信任的组件目录，避免执行任意生成代码。
- 框架无关渲染：同一 A2UI 载荷可被 Lit、Flutter、React 等不同客户端渲染器复用。

## 使用场景

- 通过智能体生成的表单和交互组件进行动态数据采集。
- 在父应用中嵌入远端子智能体返回的 UI 片段。
- 自适应企业工作流，按上下文实时生成仪表盘、审批面板或数据可视化。

## 技术特点

- 轻量规范聚焦意图与数据绑定，而非可执行逻辑，便于审计与验证。
- 渲染分离架构，支持注册 Smart Wrapper 接入复杂或受限组件。
- 与 A2A 协议等传输层兼容，适用于分布式智能体编排场景。
