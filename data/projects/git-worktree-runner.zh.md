---
name: gtr — Git Worktree Runner
slug: git-worktree-runner
homepage: https://www.coderabbit.ai/
repo: https://github.com/coderabbitai/git-worktree-runner
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Dev Tools
description: 一个跨平台的轻量级 CLI，用于简化 git worktree 管理、编辑器集成与 AI 工具工作流。
logo: ''
author: CodeRabbit
ossDate: '2025-08-07T21:13:33Z'
featured: false
status: tracked
---

## 简介

gtr（Git Worktree Runner）是由 CodeRabbit 开发的基于 Bash 的跨平台命令行工具，用于简化 git worktree 管理，并集成编辑器和 AI 工具。它封装并扩展了原生 git worktree 功能，自动完成按分支创建工作树、选择性配置文件复制和可选的依赖安装，支持并行开发和审查工作流。

## 主要特性

gtr 提供直观的子命令（如 `gtr new`、`gtr editor`、`gtr ai`）用于常见工作树操作。它支持 Cursor、VS Code、Zed 等编辑器一键打开工作树，并可在工作树内启动 Aider、Claude 等 AI 工具实现并行智能体工作流。可配置的文件复制、钩子和可选依赖安装步骤使设置过程完全自动化。

## 使用场景

gtr 适用于在同一仓库中并行维护多个分支的场景，例如同时修复 bug、开发新功能和审查 PR 而不中断当前工作。它支持并行运行 CI 或测试实例，并允许多个 AI 智能体在隔离的工作树中同时处理同一项目的不同任务。

## 技术特点

gtr 以 Bash 实现以确保最大可移植性，设计为仓库作用域的工具，兼容 macOS、Linux 和 Windows（通过 Git Bash/WSL）。它采用配置优先而非命令行标志的策略，提供 shell 补全和平台感知的路径处理，并使用可插拔的适配器体系集成编辑器和 AI 工具。
