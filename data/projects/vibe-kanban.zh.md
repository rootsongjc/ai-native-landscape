---
name: Vibe Kanban
slug: vibe-kanban
homepage: https://www.vibekanban.com/
repo: https://github.com/bloopai/vibe-kanban
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: 用于管理 AI 编码代理的看板工具，支持 Claude Code、Gemini CLI、Codex、Amp 等多种代理的编排、审查与任务跟踪。
author: BloopAI 团队
ossDate: '2025-06-14T19:10:21.000Z'
featured: false
status: tracked
---

Vibe Kanban 是一个用于管理 AI 编码代理的看板工具。它帮助开发者高效地规划、审查和编排任务，支持多种 AI 编码代理的切换与并行/串行编排。

## 主要功能

- 快速切换不同的编码代理
- 并行或串行编排多个编码代理的执行
- 快速审查工作并启动开发服务器
- 跟踪编码代理正在处理的任务状态
- 集中管理编码代理的 MCP 配置

## 安装方法

确保已认证你常用的编码代理。然后在终端运行：

```bash
npx vibe-kanban
```

更多文档和使用指南请访问 [官网](https://vibekanban.com/)。

## 开发环境

- Rust（最新稳定版）
- Node.js（>=18）
- pnpm（>=8）

安装依赖：

```bash
pnpm i
```

启动开发服务器：

```bash
pnpm run dev
```
