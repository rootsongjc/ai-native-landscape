---
name: Agor
slug: agor
homepage: https://agor.live
repo: https://github.com/preset-io/agor
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - MCP
  - UI
description: Agor 是 Preset 出品的多人空间，用于在可视化画布上并行管理和编排多路 AI 智能体工作流。
logo: ''
author: Preset
ossDate: '2025-10-04T19:17:32Z'
featured: false
status: tracked
---

## 详细介绍

Agor 是由 Preset 开发的多人协作空间，类似 Figma 的可视化界面，用于在二维画布上并行编排 AI 智能体（Agent, AI Agent）工作的整个生命周期。用户可以创建与 Git worktree 关联的 worktrees、在画布上放置 Zone（触发区）来自动化任务，并在本地通过守护进程或在浏览器中通过 Web UI 同步观察与控制会话。Agor 强调可复现的隔离开发环境和实时团队协作，使大量并行会话成为可管理的工作流。

## 主要特性

- 多智能体并行控制与调度，支持 Claude Code、Codex、Gemini 等智能体。
- 空间化多人画布与 Zone 触发器，能够把工作流以视觉化方式组织与自动化。
- 与 Git worktrees 深度集成，每个 worktree 提供独立的环境与端口隔离，便于并行开发与测试。
- 集成模型上下文协议（MCP, Model Context Protocol）以实现智能体间的协作与任务编排。

## 使用场景

Agor 适用于需要多个并行 AI 会话协作的研发场景，例如并行处理多个 PR/issue 的代码修复、探索不同模型生成策略、批量审查代码片段或在受控隔离环境中进行自动化回归测试。对希望把 AI 编程助手纳入团队日常协作流程的工程团队尤其有价值。

## 技术特点

- 基于 WebSocket 的实时同步与多人游标显示，支持实时协作与注释。
- 提供守护进程（daemon）与前端 UI 两套运行方式，便于本地与远程部署。
- 支持可插拔的 agent 提供者与模板化的 Zone 触发器，便于定制自动化流水线。
- 通过工作区隔离与自动化端口管理，确保并行会话互不干扰并可快速启停。
