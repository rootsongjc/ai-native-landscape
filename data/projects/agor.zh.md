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

## 简介

Agor 是由 Preset 构建的多人协作空间画布，类似 Figma 的可视化界面，用于编排 Claude Code、Codex 和 Gemini 的并行会话。它通过 Git 关联的工作树管理 AI 对话、跟踪智能体活动，并实时可视化团队的智能体协作。用户可以在二维画布上创建工作树，将其拖放到区域中以触发模板化提示，并在隔离环境中运行。

## 主要特性

- 多智能体并行编排，支持 Claude Code、Codex 和 Gemini，配合区域触发工作流
- 多人空间画布，支持实时同步、多人光标显示和置顶注释
- 与 Git worktree 深度集成，提供隔离环境与自动端口管理
- 集成模型上下文协议（MCP）以实现跨会话的智能体协调与编排

## 使用场景

适用于需要多个并行 AI 会话协作的工程团队场景，如并行处理多个 PR 工作流、探索不同模型生成策略、大规模代码审查以及在隔离环境中进行自动化回归测试。减少上下文切换，支持团队成员间的可复现实验。

## 技术特点

双运行时模型：本地守护进程用于开发，Web UI 用于协作控制。基于 WebSocket 的实时同步，支持可插拔的智能体提供者与模板化的区域触发器。工作区隔离与自动化环境编排防止端口冲突，加速启停周期。
