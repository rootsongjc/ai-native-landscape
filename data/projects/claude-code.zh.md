---
name: Claude Code
slug: claude-code
homepage: https://docs.anthropic.com/en/docs/claude-code/overview
repo: https://github.com/anthropics/claude-code
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: Claude Code 作为基于命令行的 AI 编程助手，可以说带火了 AI 命令行氛围编程这个赛道。
logo: ''
author: Anthropic
ossDate: '2025-02-22T17:41:21.000Z'
featured: true
status: tracked
---

自从 Claude Code 发布以来，以命令行为载体的氛围编程工具的热度就甚嚣尘上，Claude Code 作为 Anthropic 的 AI 编程助手，自然也备受瞩目。Claude Code 是一个 AI 编程助手，帮助开发者使用先进的 AI 功能编写、调试和优化代码。

## 功能特性

- **智能代码补全**：根据项目结构和编码模式提供上下文感知的代码建议。
- **高级调试辅助**：通过分析代码逻辑并提供解决方案来帮助识别和修复错误。
- **代码优化**：提供性能改进和最佳实践建议，以优化代码质量。
- **多语言支持**：支持广泛的语言，包括 Python、JavaScript、Java、C++ 等。
- **自然语言交互**：允许开发者用自然语言描述他们想要构建的内容，并生成相应的代码。

## 使用场景

因为 Claude code 是直接运行在命令行中的，所以可以与任何编辑器、IDE 或开发环境集成。而且它还可以通过代理调用 Claude 以外的大模型。

![配置 Claude Code 使用 Gemini 2.5 Pro 模型](https://assets.jimmysong.io/images/ai/claude-code/claude-code.webp)
{width=3000 height=1636}

网上有很多实践案例，比如使用 [claude-code-router](https://github.com/musistudio/claude-code-router/) 接入其他大语言模型，或者使用 [LiteLLM](https://github.com/antipalindrome/litellm) 接入 Mistral 等。我平时主要用它接入 GitHub Copilot，因为我订阅了 Copilot Pro。
