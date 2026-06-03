---
name: Aider
slug: aider
homepage: https://aider.chat/
repo: https://github.com/aider-ai/aider
license: Apache-2.0
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: 基于终端的 AI 结对程序员，通过自然语言命令帮助你编写、编辑和管理代码，支持 Git 集成和多种大语言模型。
author: Aider
ossDate: '2023-05-09T18:57:49.000Z'
featured: false
status: tracked
---
## 简介

Aider 是一款在终端中运行的 AI 结对编程工具，让你可以与 LLM 结对编程来启动新项目或在已有代码上构建。它支持多种主流模型，包括 Claude、DeepSeek、OpenAI 和本地模型，能够智能地映射和理解整个代码库，支持超过 100 种编程语言。

## 主要特性

- 无缝 Git 集成，自动提交更改并生成合理的提交信息
- 支持多种 LLM 提供商（Claude、DeepSeek、OpenAI）和通过 Ollama 连接本地模型
- 支持图片、网页的上下文理解以及语音转代码功能，实现免手动编程
- 自动代码质量保障，每次修改后内置检查、测试并修复检测到的问题

## 使用场景

与 AI 结对编程以启动新项目或在已有代码库上构建。通过终端或常用 IDE 中的自然语言命令进行重构、调试和添加功能。适用于希望将 AI 辅助直接集成到现有工作流中而不切换工具的开发者。

## 技术特点

基于 Python 的 CLI 工具，通过 pip 安装，支持超过 100 种编程语言。通过 API 密钥连接 LLM 提供商并支持本地模型。通过添加注释请求更改，可在任何编辑器或 IDE 中使用。采用模块化架构，具备自动 Git 操作、代码分析和多文件编辑能力。
