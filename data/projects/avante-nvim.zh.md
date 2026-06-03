---
name: avante.nvim
slug: avante-nvim
homepage: https://nix-community.github.io/nixvim/plugins/avante/index.html
repo: https://github.com/yetone/avante.nvim
license: Apache-2.0
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: avante.nvim 将 AI 驱动的代码建议与一键应用能力带入 Neovim 编辑器，实现类似 Cursor 的智能交互体验。
author: yetone
ossDate: '2024-08-14T16:45:16Z'
featured: false
status: tracked
---
## 简介

avante.nvim 是一个把 AI 助手深度嵌入 Neovim 的插件，提供上下文感知的代码建议、一键应用编辑、项目级指令文件（`avante.md`）以及多种 LLM provider 的适配能力。它既能在本地直接运行预编译二进制，也支持从源码构建，兼顾开发者工作流与可扩展性。

## 主要特性

- 编辑器内 AI 助手：基于当前缓冲区与项目上下文生成建议并支持逐项或一键应用。
- 项目指令：通过 `avante.md` 将项目特有的上下文注入模型以改善建议准确性。
- 多 provider 与 ACP：支持 Anthropic、OpenAI、Ollama 等提供者，并兼容 ACP/Agent Client Protocol。
- Zen Mode 与快速应用：提供专注模式和高性能的“快速应用”机制以加速代码变更流程。

## 使用场景

- 在本地编辑器内进行交互式代码重构与补丁应用，提升代码审查与修复效率。
- 将项目文档与约定注入模型，提高生成建议的相关性与正确性。
- 构建以编辑器为中心的 AI 驱动开发体验，例如学习型代码生成与可重复的自动化改动。

## 技术特点

- 以 Lua 为主实现，兼容 Neovim 原生 API；部分性能敏感模块采用 Rust 实现。
- 支持懒加载插件管理器（如 `lazy.nvim`）与多种依赖插件的集成。
- 提供丰富的命令与键位映射以便在不同工作流程中使用。
