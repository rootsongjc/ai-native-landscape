---
name: A2UI
slug: a2ui
homepage: https://a2ui.org/
repo: https://github.com/google/a2ui
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - UI
description: 一个开源的声明式 UI 规范与工具集，使智能体以安全且可移植的 JSON 描述生成可渲染界面。
logo: ''
author: Google
ossDate: '2025-09-24T23:14:02Z'
featured: false
status: tracked
---

## 详细介绍

A2UI（Agent-to-User Interface）是一个开源的声明式 UI 规范与工具集，旨在让智能体以“说 UI”的方式与客户端交互。智能体生成描述界面意图的 JSON 载荷（A2UI Response），客户端的渲染器将这些抽象组件映射为本地组件（如 Lit、Flutter、React 等），从而实现既“像数据一样安全”，又“像代码一样富表达力”的交互体验。更多信息与示例请参见 [官网](https://a2ui.org/)。

## 主要特性

- 声明式格式：以结构化 JSON 表示可增量更新的组件树，便于 LLM 逐步生成与调整。
- 安全优先：客户端维护受信任的组件目录，避免执行任意生成代码，将执行控制权交回开发者。
- 框架无关：同一 A2UI 载荷可被不同客户端渲染器（Web、Flutter 等）复用，支持注册自定义映射。
- 示例与渲染器：仓库提供多种示例渲染器与样例 agent，便于快速上手与验证。

## 使用场景

A2UI 适用于需要将智能体输出呈现为交互界面的场景，如基于会话生成定制表单（动态数据采集）、在主界面嵌入远端子智能体返回的 UI 片段（远程子任务）以及企业级自适应工作流（按上下文生成审批面板或数据可视化）。该规范也适合作为智能体 - 客户端之间的可验证通信层，降低模型生成 UI 时的安全与一致性风险。

## 技术特点

- 轻量格式：A2UI 聚焦表达意图与数据绑定，而非可执行逻辑，利于审计与验证。
- 渲染分离：渲染器负责将抽象类型映射到本地实现，支持注册“Smart Wrapper”来接入复杂或受限组件。
- 渲染与传输兼容：与 A2A 协议等运输层兼容，便于在分布式与编排场景中传递 UI 载荷。
- 社区驱动：项目采用 Apache-2.0 许可，提供规范、示例与渲染器，欢迎社区贡献与实现更多渲染器。
