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

## 详细介绍

claude-code-tools 是由 pchalasani 开发的生产力工具集合，面向 Claude Code、Codex-CLI 与类似的命令行编码智能体（智能体）使用场景。该项目提供插件（如 `aichat`、`tmux-cli`、`safety-hooks`）与若干 CLI 命令（如 `aichat`、`vault`、`env-safe`），帮助在大语言模型（LLM）驱动的开发流程中管理会话、实现终端自动化、保护敏感环境变量并提供快速全文检索与续会能力。

## 主要特性

- 会话管理与续会：`aichat` 支持会话回溯、智能截断（trim）、rollover 与 Rust/Tantivy 灯塔式全文检索。
- 终端自动化：`tmux-cli` 为智能体提供可靠的终端交互能力，内置延迟与等待机制，减少自动化错误。
- 安全钩子与环境保护：`safety-hooks` 阻止危险命令并配合 `env-safe` 提供无值暴露的 `.env` 检查工具。
- 多语言组件：Python 主程序、Rust 搜索二进制与 Node.js 操作菜单组成混合架构，便于在本地与 CI 环境部署。

## 使用场景

该项目适合希望将 Claude Code 等 CLI 智能体纳入日常开发流程的个人与团队：在本地以隔离会话继续长期工作，使用 `aichat search` 快速检索过去会话以恢复上下文，通过 `tmux-cli` 与自动化脚本测试交互式应用，或在 CI/团队环境中装入安全钩子以防止误操作。

## 技术特点

项目采用 Python 提供命令逻辑与包装，Rust（Tantivy）实现高性能全文检索 TUI，Node.js 提供交互式菜单。设计强调模块化插件、最小权限原则（子智能体工具权限）與可扩展的钩子系统，支持 Homebrew/Cargo 安装与 PyPI 分发，便于生产环境集成与自动化运维。
