---
name: Intelligent Terminal
slug: intelligent-terminal
homepage: https://devblogs.microsoft.com/commandline/announcing-intelligent-terminal-version-0-1/
repo: https://github.com/microsoft/intelligent-terminal
license: MIT
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - AI Agent
  - CLI
  - Terminal
  - ACP
  - Copilot
  - Developer Tools
description: >-
  微软基于 Windows Terminal 的实验性分支，原生集成 AI 智能体，支持 GitHub Copilot、Claude、Codex、Gemini
  等任意 ACP 兼容的智能体 CLI。
author: microsoft
ossDate: '2026-05-18T10:57:07Z'
featured: false
status: tracked
---

## 简介

Intelligent Terminal 是微软基于 Windows Terminal 的实验性分支，将 AI 智能体原生集成到命令行中。它支持任何兼容 Agent Client Protocol（ACP）的智能体 CLI，首次启动时自动检测已安装的 GitHub Copilot、Claude、Codex、Gemini 等智能体。

## 主要特性

- **智能体状态栏**：在终端界面实时显示智能体状态
- **智能体面板**：集成的侧边面板，可基于 Shell 输出上下文与 AI 智能体交互
- **智能体管理**：自动检测和配置 ACP 兼容的智能体 CLI
- **错误检测**：自动检测命令行错误并提供 AI 辅助解决方案
- **Shell 上下文感知**：智能体直接获取 Shell 输出上下文，无需复制粘贴

## 使用场景

- 开发者希望在终端中获得 AI 辅助的工作流，无需切换窗口
- Windows 团队希望在日常工作环境中集成 AI 助手
- 高级用户希望在一个终端中与多个 AI 智能体（Copilot、Claude、Codex、Gemini）交互

## 技术特点

- 基于 Windows Terminal 分支，集成 ACP（Agent Client Protocol）
- 支持多种智能体 CLI 的自动检测
- 需要 Windows 11 22H2+（内部版本 22621.6060+）
- MIT 协议，C++ 构建
