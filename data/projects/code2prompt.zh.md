---
name: Code2Prompt
slug: code2prompt
homepage: https://code2prompt.dev/
repo: https://github.com/mufeedvh/code2prompt
license: Unknown
category: training-optimization
subCategory: prompt-quality
tags:
  - Dev Tools
  - Prompt Engineering
  - Utility
description: 将代码库转换为单一 LLM 提示的工具，便于代码分析、生成与自动化工作流整合。
logo: ''
author: mufeedvh
ossDate: '2024-03-09T12:42:06.000Z'
featured: false
status: tracked
---

Code2Prompt 是一个将代码库转换为结构化 LLM 提示的开源工具，适用于代码分析、自动化审查与生成任务。它能遍历项目目录、构建文件树并收集文件元信息，从而生成面向大模型的上下文提示，简化人工整理代码上下文的工作流程。

## 主要特性

- 自动代码处理：将任意规模的代码库转换为可读且格式化的提示文本
- 智能过滤：支持 glob 模式和 .gitignore 规则以包括或排除文件
- 模板化定制：使用 Handlebars 模板定制生成的提示内容
- Token 追踪：统计和控制提示的 token 使用，避免超出模型上下文
- Git 集成：可包含 diff、提交历史和分支比较信息

## 使用场景

- 代码审查自动化：为 LLM 提供完整且结构化的代码上下文以辅助审查
- 生成测试与示例：自动提取上下文以生成单元测试或示例代码
- 开发者助理：为 AI 驱动的开发工具和代理提供丰富的项目上下文
- 文档与迁移：帮助理解遗留代码以便重构与迁移

## 技术特点

- 多端支持：提供 CLI、SDK（Python 绑定）和 MCP 服务模式
- 高效解析：基于 Rust 实现的核心库，兼顾性能与安全
- 可扩展性：通过模板和过滤策略定制不同场景的提示输出
- 社区驱动：开源项目，活跃的贡献者和详细文档（<https://code2prompt.dev/docs/welcome/>）
