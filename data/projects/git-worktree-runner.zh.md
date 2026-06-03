---
name: gtr — Git Worktree Runner
slug: git-worktree-runner
homepage: https://www.coderabbit.ai/
repo: https://github.com/coderabbitai/git-worktree-runner
license: Apache-2.0
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Dev Tools
description: 一个跨平台的轻量级 CLI，用于简化 git worktree 管理、编辑器集成与 AI 工具工作流。
author: CodeRabbit
ossDate: '2025-08-07T21:13:33Z'
featured: false
status: tracked
---
gtr（Git Worktree Runner）是由 CodeRabbit 开发的基于 Bash 的跨平台命令行工具，用于简化 git worktree 管理，并集成编辑器和 AI 工具。它封装并扩展了原生 git worktree 功能，自动完成按分支创建工作树、选择性配置文件复制和可选的依赖安装，支持并行开发和审查工作流。

## 工作树管理

- 直观的子命令：`gtr new`、`gtr editor`、`gtr ai` 覆盖常见操作
- 按分支自动创建工作树，保持清洁隔离
- 选择性配置文件复制以复现环境设置
- 可选的依赖安装钩子实现自动化配置

## 编辑器集成

- 一键在 Cursor、VS Code 和 Zed 中打开工作树
- 可插拔适配器体系，方便添加新编辑器支持
- 跨 macOS、Linux 和 Windows 的平台感知路径处理
- Shell 补全支持快速命令行交互

## AI 工具工作流

- 在工作树内启动 Aider、Claude 等 AI 工具实现并行智能体工作流
- 多个 AI 智能体可在隔离的工作树中同时处理同一项目的不同任务
- 配置优先策略，偏好配置文件而非命令行标志

## 并行开发

- 无需 stash 或切换即可并行维护多个分支
- 同时修复 bug、开发新功能和审查 PR
- 跨不同工作树运行并行 CI 或测试实例
- 以 Bash 实现确保最大可移植性，兼容 Git Bash 和 WSL
