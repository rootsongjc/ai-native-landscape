---
name: CC Workflow Studio
slug: cc-workflow-studio
homepage: null
repo: https://github.com/breaking-brake/cc-wf-studio
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Agents
  - Dev Tools
  - Framework
  - Vibe Coding
description: >-
  CC Workflow Studio 是一个 VS Code 扩展，提供可视化的拖放式画布来设计 AI 智能体编排，无需编写代码。支持多智能体工作流、子智能体编排、Agent Skills 和 MCP 工具集成，可通过自然语言与 AI
  对话来迭代改进工作流，并支持一键导出为多种格式并在编辑器中直接运行。
logo: ''
author: breaking-brake
ossDate: '2025-03-16'
featured: false
status: tracked
---

## 详细介绍

CC Workflow Studio 是一个专为 AI 智能体设计的可视化工作流编辑器，以 VS Code 扩展的形式提供。该工具通过直观的拖放式画布，让开发者无需编写代码即可设计复杂的 AI 智能体编排。基于 React Flow 构建，支持多智能体工程的核心构建模块，包括子智能体编排、Agent Skills 和 MCP 工具集成。

平台内置"AI 辅助编辑"功能，通过 MCP Server 与 Claude Code、GitHub Copilot 等智能体对话，使用自然语言描述即可生成或优化工作流。支持一键导出为多种智能体格式，并可直接在编辑器中运行工作流，实时查看自动化效果。

## 主要特性

- **可视化工作流编辑器**：直观的拖放式画布，无需编写代码即可设计 AI 智能体编排
- **智能体工程**：支持多智能体工作流、子智能体编排、Agent Skills 和 MCP 工具集成
- **AI 辅助编辑**：通过自然语言与 AI 对话来迭代改进工作流，添加功能或优化逻辑
- **一键导出与运行**：将工作流导出为多种智能体可用的格式，并可直接在编辑器中运行
- **多平台支持**：支持 Claude Code、GitHub Copilot Chat/CLI、OpenAI Codex CLI、Roo Code、Gemini CLI、Antigravity、Cursor 等多种智能体
- **原生 MCP 集成**：通过 MCP Server 实现与 AI 智能体的原生交互

## 使用场景

- **智能体开发**：为开发者提供可视化工具来设计和测试 AI 智能体工作流
- **工作流自动化**：通过拖放方式快速构建复杂的 AI 自动化流程
- **多智能体编排**：设计和管理多个 AI 智能体的协作流程
- **快速原型**：使用自然语言快速生成和迭代工作流原型
- **技能开发**：为 Claude Code、GitHub Copilot 等智能体开发自定义技能和命令

## 技术特点

- **React Flow 构建**：基于 React Flow 提供强大的可视化编辑能力
- **VS Code 扩展**：无缝集成到 VS Code 开发环境
- **MCP Server 协议**：通过 MCP Server 实现与 AI 智能体的双向通信
- **多格式导出**：
  - Claude Code：`.claude/agents/` 和 `.claude/commands/`
  - GitHub Copilot Chat：`.github/prompts/`
  - GitHub Copilot CLI：`.github/skills/`
  - OpenAI Codex CLI：`.codex/skills/`
  - Roo Code：`.roo/skills/`
  - Gemini CLI：`.gemini/skills/`
  - Antigravity：`.agent/skills/`
  - Cursor：`.cursor/agents/` 和 `.cursor/skills/`
- **内置运行**：支持在编辑器中直接运行工作流，实时查看执行结果
- **许可证**：AGPL-3.0
