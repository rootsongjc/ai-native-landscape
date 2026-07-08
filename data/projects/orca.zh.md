---
name: Orca
slug: orca
homepage: https://onOrca.dev
repo: https://github.com/stablyai/orca
license: MIT
category: agents
subCategory: agent-orchestration
tags:
  - AI Agent
  - Orchestration
  - Parallel Agents
  - Dev Tools
  - Terminal
description: >-
  智能体开发环境（ADE），编排一组并行编程智能体——让 Codex、Claude Code、OpenCode 或 Pi 各自运行在独立 git worktree 中并行工作，统一集中跟踪。支持桌面端与移动端，使用用户自有订阅。
author: stablyai
ossDate: '2026-03-17T03:28:57Z'
featured: false
status: tracked
---

## 简介

Orca 是一款 AI 编排器与智能体开发环境（ADE），用于在单一席位上运行一组并行编程智能体。它可将同一提示分发给多个智能体——Codex、Claude Code、OpenCode 或 Pi——每个智能体隔离在独立 git worktree 中运行，便于对比结果并合并最优方案。以桌面应用（macOS、Windows、Linux）加移动端伴侣的形式交付，使用开发者自有的模型订阅，而非转售算力。

## 主要特性

- 并行 worktree：多个智能体在同一仓库的隔离 git worktree 中并发运行，支持 diff 对比与合并。
- 移动端伴侣应用（iOS 与 Android）：随时监控智能体、接收完成通知并在任何地方发送后续指令。
- Ghostty 级终端分屏，WebGL 渲染、无限分屏、滚动历史可在重启后保留。
- Design Mode：在内嵌 Chromium 窗口中点击任意 UI 元素，将其 HTML、CSS 与截图直接注入智能体提示。
- 原生集成 GitHub 与 Linear：浏览 PR、issue 与看板，从任务直接打开 worktree，无需切换上下文完成评审。
- SSH worktree：在远程机器上运行智能体，支持完整文件编辑、git、终端、自动重连与端口转发。

## 使用场景

- 在同一任务上并行运行多个编程智能体并合并最优结果。
- 离开工位时用手机引导长时间运行的智能体会话。
- 前端开发中通过 Design Mode 将实时 UI 上下文直接喂给智能体。
- 围绕 GitHub 与 Linear 看板编排智能体驱动的 PR 与 issue 工作流。

## 技术特点

- 桌面端覆盖 macOS、Windows、Linux，并提供 iOS、Android 移动伴侣应用。
- 自带订阅模式——Orca 驱动用户已有的 Codex、Claude Code、OpenCode、Pi 账户，不代理模型访问。
- 基于每智能体独立 git worktree 的隔离机制，保障同仓库并行执行安全。
- 内嵌 Chromium 支持 Design Mode，内建 Ghostty 级终端模拟器提供应用内 shell。
- YC 背书项目，源码以 MIT 协议开源。
