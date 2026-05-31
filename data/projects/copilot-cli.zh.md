---
name: GitHub Copilot CLI
slug: copilot-cli
homepage: null
repo: https://github.com/github/copilot-cli
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: 在命令行中使用 GitHub Copilot 的交互式编码助手，提升本地开发效率与代码理解能力。
logo: ''
author: GitHub
ossDate: '2025-09-26T00:00:00.000Z'
featured: false
status: tracked
---

## 简介

GitHub Copilot CLI 是将 Copilot 编码代理带入终端的交互式命令行工具，允许开发者在本地通过自然语言与 AI 协作完成编码、调试和重构任务。它与 GitHub 深度集成，可访问仓库上下文、Issue 与 PR，提供计划性、多步骤任务执行能力，同时在执行前展示预览以保持用户对更改的完全控制。该工具适合需要快速原型、代码导航与自动化日常开发流程的工程师和团队。

## 主要特性

- 终端原生：在命令行内直接与 Copilot 交互，无需切换到浏览器或 IDE。
- GitHub 集成：可以访问仓库、Issue、PR 与上下文信息，支持授权和组织策略。
- Agent 能力：支持多步骤任务规划与执行，能够生成、修改并建议变更。
- 可扩展性：支持自定义 MCP 服务器以扩展能力并在本地或私有环境中运行。

## 使用场景

- 代码生成与重构：快速生成样板代码、重构函数或模块，节省重复劳动。
- 调试与解释：通过自然语言询问代码行为或错误原因，获得上下文相关的解释与建议。
- 仓库自动化：执行与仓库相关的常见操作（如生成变更、创建 PR 草稿、查询 Issue）。
- 教学与学习：为新成员提供代码导航与示例，辅助理解大型代码库结构。

## 技术特点

- 多模型支持：默认使用 Claude Sonnet 4.5，可切换到其他模型以适配不同任务。
- 认证与安全：支持通过 GitHub 账号或细粒度 PAT 进行认证，遵循组织策略。
- 跨平台：支持 macOS、Linux，Windows 为实验性支持。
- 安全可控：在执行任何文件系统或代码修改前显示变更预览，需用户确认。
