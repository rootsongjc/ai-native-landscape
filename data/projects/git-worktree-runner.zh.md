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

## 详细介绍

gtr（Git Worktree Runner）是一个面向并行开发场景设计的跨平台命令行工具，封装并扩展了原生的 `git worktree`，并提供编辑器与 AI 工具的集成能力。它通过简化工作树创建、自动复制配置文件、可选的依赖安装与钩子执行，降低了在多个分支/工作空间之间同时开发与审查的认知负担。

## 主要特性

- 简化命令：用更直观的子命令（如 `gtr new`、`gtr editor`、`gtr ai`）替代繁琐的 `git worktree` 操作。
- 编辑器集成：支持 Cursor、VS Code、Zed 等编辑器，一键在对应工作树中打开工程。
- AI 工具支持：可在工作树内启动 Aider、Claude 等终端/编辑器智能体，便于并行的智能体协作。
- 自动化与钩子：支持配置文件复制、post-create/post-remove 钩子与依赖安装自动化。

## 使用场景

gtr 适用于需要在同一仓库中并行处理多个任务的开发流程，例如同时修复 bug、实现新特性与审查 PR；在并行运行 CI、测试或让多个智能体（智能体）分别在不同工作树处理各自任务时，gtr 能显著提升效率；也适合在本地创建临时审查环境或为 CI 脚本自动化准备工作树。

## 技术特点

gtr 使用 Bash 编写，设计为仓库作用域的工具（每个仓库有独立配置），兼容 macOS、Linux 和 Windows（通过 Git Bash/WSL）。它以配置优先而非命令行标志的策略管理行为，支持 shell 补全、平台感知的路径处理及可插拔的适配器体系（编辑器与 AI 工具适配器）。
