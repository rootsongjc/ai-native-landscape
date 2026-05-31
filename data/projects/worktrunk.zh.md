---
name: Worktrunk
slug: worktrunk
homepage: https://worktrunk.dev
repo: https://github.com/max-sixty/worktrunk
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Agents
  - CLI
  - Dev Tools
  - Tool
description: 一个面向并行智能体工作流的命令行工具，简化 Git worktree 操作并提供钩子与 LLM 提交集成。
logo: ''
author: max-sixty
ossDate: '2025-10-17T22:13:14Z'
featured: false
status: tracked
---

## 详细介绍

Worktrunk 是一个面向开发者的命令行工具，用于将 Git 的 worktree 操作简化为类似分支的体验。它专为并行运行的智能体（Agent）与基于大语言模型（LLM）的自动化工作流设计，提供统一的创建、切换、合并与清理命令，减少创建工作树的复杂步骤并提升多任务并行执行的可用性与可维护性。

## 主要特性

- 将 worktree 操作为直观的 `wt` 子命令（如 `wt switch`, `wt list`, `wt merge`, `wt remove`）。
- 支持项目级钩子（hooks），在创建、预合并与合并后运行自定义脚本以自动化常见任务。
- 集成 LLM 提交消息生成与辅助工具，便于智能体输出变更说明并自动化提交流程。
- 提供跨平台安装方式（Homebrew、Cargo 等）与详尽文档，便于在本地与 CI 环境中使用。

## 使用场景

Worktrunk 适合需要并行开展多个开发任务或运行多个智能体的团队与个人：为每个智能体/任务创建独立工作树、在本地以隔离方式进行实验、通过钩子自动化项目初始化与合并前检查，以及在 CI 或多人协作流程中简化 worktree 的管理与清理。

## 技术特点

Worktrunk 使用 Rust 开发，提供轻量且快速的 CLI 二进制，设计上将每个 worktree 与单一分支一一对应并自动推导路径。工具配套详尽文档与演示，支持插件化的钩子系统与与 LLM 集成的扩展点，便于将其嵌入到自动化开发与智能体驱动的工作流中。
