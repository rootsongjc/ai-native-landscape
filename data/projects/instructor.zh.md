---
name: Instructor
slug: instructor
homepage: https://python.useinstructor.com/
repo: https://github.com/567-labs/instructor
license: Unknown
category: coding-devtools
subCategory: sdk-frameworks
tags:
  - Dev Tools
  - Utility
description: 基于 Pydantic 的结构化输出库，简化从任意 LLM 提取可靠 JSON 结构化数据的流程。
author: Instructor 社区
ossDate: '2023-06-14T10:42:23.000Z'
featured: false
status: tracked
---

## 简介

Instructor 是一款专注于从 LLM 获取结构化输出的库，基于 Pydantic 提供验证、类型安全和友好的开发者体验，使得从文本中提取 JSON 数据变得可靠且可重复。

## 主要特性

- 使用 Pydantic 定义响应模型并自动校验输出。
- 支持多家模型提供商（OpenAI、Anthropic、Google 等）与流式输出、自动重试与嵌套对象解析。
- 丰富的示例、文档和跨语言 SDK（Python、TypeScript、Go 等）。

## 使用场景

- 从自然语言中稳定提取结构化信息（用户信息、产品数据、表单等）。
- 需要流式或分段生成验证的场景，如实时数据提取与逐步解析。
- 将结构化抽取集成到数据管道、API 网关或下游验证系统中。

## 技术特点

- 纯 Python 实现（主要），仓库包含示例、文档站点和测试套件，采用 MIT 许可证。
- 内置重试、校验错误处理与流式部分对象支持，兼容多种 LLM 提供商的 API。
- 社区活跃、发布频繁，适合生产与研究环境使用。
