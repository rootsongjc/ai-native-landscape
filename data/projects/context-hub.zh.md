---
name: Context Hub
slug: context-hub
homepage: null
repo: https://github.com/andrewyng/context-hub
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - AI Agent
  - Data
  - Tool
description: >-
  Context Hub (Chub) 是由 Andrew Ng（吴恩达）发起的开源项目，为 AI 编码代理提供精选的、版本化的文档，并通过注释和反馈机制使代理能够在每次任务中变得更聪明。所有内容以 Markdown
  格式公开维护，支持版本化和语言特定的文档检索。
logo: ''
author: Andrew Ng（吴恩达）
ossDate: '2025-03-17'
featured: false
status: tracked
---

## 详细介绍

Context Hub (Chub) 是由 AI 领域知名专家 Andrew Ng（吴恩达）发起的开源项目，旨在解决 AI 编码代理面临的两个核心问题：API 幻觉和会话知识遗忘。该项目为 AI 编码代理提供精选的、版本化的文档，并通过注释和反馈机制使代理能够在每次任务中变得更聪明。

所有文档内容以 Markdown 格式公开维护在 GitHub 仓库中，任何人都可以检查代理读取的内容，并贡献改进。Context Hub 通过 CLI 工具（`chub`）提供搜索、获取、注释和反馈功能，形成一个自我改进的代理学习循环。

## 主要特性

- **精选文档**：提供经过精选的 API 文档，减少代理搜索时的噪声，提高代码准确性
- **版本化与语言特定**：支持不同编程语言的文档变体（如 Python、JavaScript），确保代理获得语言相关的准确信息
- **注释机制**：允许代理在文档上附加本地笔记，这些注释在会话间持久保存，并在未来获取时自动显示
- **反馈系统**：通过向上/向下投票收集代理使用反馈，帮助文档作者持续改进内容质量
- **增量获取**：支持只获取所需的文档部分，避免浪费 token
- **开源协作**：所有内容以 Markdown 格式维护，社区可以通过 PR 贡献文档和技能

## 使用场景

- **AI 编码代理**：为 Claude Code、GitHub Copilot 等 AI 编码代理提供准确的 API 文档
- **文档管理**：作为团队内部 API 文档的集中管理和版本控制平台
- **知识库构建**：为 AI 智能体构建可学习的、版本化的技术知识库
- **代理技能开发**：为智能体开发可复用的技能和工具文档
- **文档贡献**：API 提供商、框架作者和社区可以贡献文档，帮助整个生态系统

## 技术特点

- **CLI 工具**：通过 `npm install -g @aisuite/chub` 安装命令行工具
- **核心命令**：
  - `chub search [query]`：搜索文档和技能
  - `chub get <id> [--lang py|js]`：获取文档或技能
  - `chub annotate <id> <note>`：为文档附加注释
  - `chub feedback <id> <up|down>`：对文档进行投票反馈
- **持久化存储**：注释和反馈在会话间持久保存，形成学习循环
- **Markdown 格式**：所有内容使用 Markdown 和 YAML frontmatter 格式
- **版本控制**：文档版本化管理，支持追溯和回滚
- **多语言支持**：支持 Python、JavaScript 等多种编程语言的文档变体
- **许可证**：MIT
