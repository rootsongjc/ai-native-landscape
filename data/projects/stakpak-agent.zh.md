---
name: Stakpak Agent
slug: stakpak-agent
homepage: https://stakpak.dev
repo: https://github.com/stakpak/agent
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
description: 一个终端原生的 DevOps 智能体，使用 Rust 实现，能执行命令、编辑文件并生成高质量 IaC。
logo: ''
author: Stakpak
ossDate: '2024-12-10T21:56:17Z'
featured: false
status: tracked
---

## 详细介绍

Stakpak Agent 是一款终端原生的 DevOps 智能体，由 Rust 开发，旨在在本地或 CI 环境中安全地执行命令、搜索文档、编辑文件并生成高质量的基础设施即代码（IaC）。该项目强调安全性与可控性，适合在开发者工作流中作为可编排的智能体助手，帮助自动化常见运维与开发任务。

## 主要特性

- 终端原生：在命令行环境中自然运行，便于集成到现有开发流程。
- 文件与命令操作：支持编辑文件、执行 shell 命令与交互式任务。
- 文档检索：能够在本地文档与仓库中搜索相关内容以辅助决策。
- 安全与合规：设计上注重最小权限与可审计的操作记录。

## 使用场景

- 开发辅助：在本地终端中快速生成或修复 IaC 配置片段。
- 自动化运维：将重复的运维命令与检查流程交由智能体执行并记录结果。
- CI 集成：作为 CI 流程的一部分自动执行修正或验证任务。
- 文档查询：在大型仓库中快速定位相关文档片段以支持变更说明。

## 技术特点

- 使用 Rust 提供高性能与内存安全保障。
- 支持与 LLM 及本地工具结合的流水线，用于生成与验证代码片段。
- 采用可审计的操作日志与最小权限实践以降低风险。
- Apache-2.0 许可，便于企业采纳与二次开发。
