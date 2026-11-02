---
name: kimi-code
slug: kimi-code
homepage: https://www.kimi.com/code/docs/
repo: https://github.com/MoonshotAI/kimi-code
license: MIT
category: coding-devtools
subCategory: coding-agents
tags:
  - Coding Agent
  - CLI
  - MCP
  - Dev Tools
description: >-
  Kimi Code CLI 是月之暗面推出的终端 AI 编程智能体，可读写代码、执行 Shell 命令并根据反馈自主决定下一步，开箱即用对接 Kimi
  模型，也支持其他兼容模型服务。
author: Moonshot AI
ossDate: '2026-05-22'
featured: false
status: tracked
---

## 简介

Kimi Code CLI 是运行在终端中的 AI 编程智能体。它可以读写代码、执行 Shell 命令、搜索文件、抓取网页，并根据执行反馈自主决定下一步操作。开箱即用对接月之暗面的 Kimi 模型，也可配置其他兼容模型服务。

## 主要特性

- 单二进制分发，一条命令安装，无需 Node.js 环境，无全局模块冲突。
- 专为长时间专注智能体会话调优的 TUI，毫秒级启动。
- 内置 `coder`、`explore`、`plan` 子智能体，在隔离上下文中并行处理任务，保持主会话干净。
- 通过 `/mcp-config` 以对话方式完成 MCP 服务的添加、编辑与认证，无需手改 JSON。
- 支持视频输入，将屏幕录制或演示片段直接拖入对话，让智能体“看懂”难以用文字描述的内容。
- 生命周期钩子可在关键节点执行本地命令，拦截高风险工具调用、审计决策或接入外部自动化。
- 通过 Agent Client Protocol（ACP）集成 Zed、JetBrains 等编辑器与 IDE。

## 使用场景

- 终端中的交互式编程：浏览代码库、实现功能、运行并修复测试。
- 通过 ACP 从 IDE 驱动智能体会话，共享一次登录。
- 借助子智能体、MCP 工具和生命周期钩子自动化代码相关的工作流。

## 技术特点

- 以独立二进制形式通过安装脚本分发，安装时无需 Node.js 运行时。
- 基于 stdio 实现 Agent Client Protocol（ACP），任何 ACP 兼容编辑器都可通过 `kimi acp` 子命令驱动会话，无需二次登录。
- 插件市场模式，技能、MCP 服务与数据源可从市场或任意 GitHub 仓库安装，并前置展示每次安装的信任级别。
- Windows 下以 Git Bash 作为 Shell 环境（可通过 `KIMI_SHELL_PATH` 覆盖）。
