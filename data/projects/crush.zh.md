---
name: Crush
slug: crush
homepage: null
repo: https://github.com/charmbracelet/crush
license: MIT
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - AI Terminal
  - CLI
description: 在终端中运行的 AI 助手，支持多模型、会话管理、LSP 强化与可扩展的模型提供器配置。
author: Charmbracelet
ossDate: '2025-05-21T12:14:57.000Z'
featured: false
status: tracked
---
Crush 是一个在终端中运行的 AI 助手，将工具、代码和工作流与多种 LLM 提供者连接。它支持会话管理、在会话内切换模型、通过 LSP 增强上下文，并可通过 MCP（http、stdio、sse）扩展功能。Crush 可在 macOS、Linux、Windows 与 BSD 系统上运行，提供 Homebrew、npm、二进制包和 go install 等安装方式。

## 主要特性

- 多模型与会话：支持云端与本地模型，能在会话中切换模型而保留上下文。
- LSP 增强：集成语言服务器以提供代码上下文和更准确的建议。
- 可扩展 MCP：通过 http、stdio、sse 等 MCP 插件扩展数据源与功能。
- 多平台安装与包管理：支持 Homebrew、npm、二进制包与 go 安装。

## 使用场景

- 在终端中以自然语言辅助代码编辑、调试与重构。
- 将 LLM 集成进本地开发、脚本或 CI 工作流。
- 在受限或离线环境中使用本地模型或私有提供者。

## 技术要点

- 配置优先级：本地项目配置优先于全局配置，使用 `crush.json` 管理设置。
- 自动提供者更新：默认从 Catwalk 同步模型列表，可关闭或手动更新。
- 隐私与指标：记录伪匿名使用指标，提供开关以禁用指标收集。
