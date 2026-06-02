---
name: claude-code-tools
slug: claude-code-tools
homepage: https://pypi.org/project/claude-code-tools/
repo: https://github.com/pchalasani/claude-code-tools
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Agents
  - CLI
  - Dev Tools
  - Tool
  - Utility
description: 为 Claude Code、Codex-CLI 等 CLI 智能体提供的实用生产力工具集合与插件。
logo: ''
author: pchalasani
ossDate: '2025-07-30T20:10:38Z'
featured: false
status: tracked
---

## 简介

claude-code-tools 是一套旨在增强 Claude Code 工作流及类似 CLI 编码智能体体验的生产力工具和扩展集合。由 pchalasani 维护，提供会话管理、终端自动化和安全控制等插件，帮助开发者从 LLM 驱动的开发环境中获得更高效率。

## 主要特性

通过 aichat 实现会话续接与裁剪，内置基于 Rust Tantivy 的高性能全文检索和智能轮转策略，轻松恢复历史上下文。通过 tmux-cli 实现终端自动化，减少交互式工作流中的竞争条件，提升智能体可靠性。安全钩子和 env-safe 工具可防止危险操作并在不暴露敏感值的情况下检查环境文件。

## 使用场景

运行并行智能体驱动任务的开发者需要健壮的会话管理，以在不丢失上下文的情况下恢复长期工作。团队在本地和 CI 环境中自动化交互式终端工作流的同时维护安全控制。需要跨历史编码会话进行快速全文检索以恢复相关决策和代码模式的场景。

## 技术特点

混合架构设计，结合 Python 用于 CLI 编排、Rust 与 Tantivy 用于高性能全文检索和 TUI、Node.js 用于交互式菜单。强调模块化插件设计，子智能体采用最小权限工具授权，支持基于钩子的可扩展性。通过 PyPI 分发，搜索组件可选安装 Rust 和 Cargo 二进制文件。
