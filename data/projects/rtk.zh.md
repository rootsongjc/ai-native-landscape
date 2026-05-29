---
name: RTK
slug: rtk
homepage: https://www.rtk-ai.app/
repo: https://github.com/rtk-ai/rtk
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Dev Tools
  - Optimization
  - Tool
  - Utility
description: RTK 是一款高性能 CLI 代理工具，通过智能压缩命令行输出，将 LLM Token 消耗降低 60-90%，显著提升 AI 编程助手的效率并降低成本。
logo: ''
author: rtk-ai
ossDate: '2026-01-22'
featured: false
thumbnail: ''
source: ''
status: tracked
---

RTK（Rust Token Killer）是一款基于 Rust 开发的高性能 CLI 代理工具，专为降低 AI 编程助手的 Token 消耗而设计。它作为透明中间层拦截 Bash 命令输出，通过智能过滤和压缩，将 Token 消耗降低 60-90%。

## 详细介绍

RTK 是一个零依赖、零配置的单二进制 CLI 代理工具。它安装在 Shell 和 LLM 之间，自动拦截和压缩常用开发命令的输出。支持 100+ 常用命令，包括 git、cargo、npm、ls、cat 等。通过与 Claude Code、Cursor、GitHub Copilot 等 AI 编程工具无缝集成，显著降低 Token 成本并延长会话时长。项目在 GitHub 上获得超过 51,000 颗星标，是当前最受关注的 AI 开发效率工具之一。

## 主要特性

- **Token 消耗降低 60-90%**：智能过滤和压缩命令行输出，大幅减少 Token 使用量
- **零依赖、零配置**：单 Rust 二进制文件，即装即用
- **超低延迟**：启动时间低于 10ms，对工作流几乎无感
- **100+ 命令支持**：覆盖 git、cargo、npm、ls、cat 等常用开发命令
- **多工具兼容**：支持 Claude Code、Cursor、GitHub Copilot 等主流 AI 编程助手
- **平均降噪 89%**：有效去除冗余输出，保留关键信息
- **会话时长提升 3 倍**：更少的 Token 消耗意味着更长的有效会话
- **MIT 开源许可**：完全开源免费

## 使用场景

- **AI 编程成本优化**：企业和个人开发者降低 AI 编程工具的 Token 消耗成本
- **长会话开发**：延长 AI 编程助手的有效会话时长，减少上下文中断
- **CI/CD 流水线集成**：在自动化流程中优化命令输出，降低日志分析成本
- **团队协作**：统一团队开发环境中的命令输出格式，提升 AI 辅助效率
- **AI 编程工具评估**：在不同 AI 编程工具间保持一致的 Token 使用基线

## 技术特点

- 基于 Rust 编写，编译为单二进制文件，无需运行时依赖
- 采用透明代理模式，无需修改现有工作流
- 支持 Hook 集成，可自动重写 Claude Code 中的命令调用
- 提供 Token 节省分析（`rtk gain`）和历史命令审计（`rtk discover`）
- 兼容 macOS、Linux、Windows 多平台
