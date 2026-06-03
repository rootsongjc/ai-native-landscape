---
name: Outlines
slug: outlines
homepage: https://dottxt-ai.github.io/outlines/
repo: https://github.com/dottxt-ai/outlines
license: Unknown
category: coding-devtools
subCategory: sdk-frameworks
tags:
  - Dev Tools
  - Utility
description: 面向结构化生成的库，简化从 LLM 直接生成并验证 JSON/Pydantic 结构化输出的流程。
author: .txt / dottxt
ossDate: '2023-03-17T16:01:18.000Z'
featured: false
status: tracked
---

## 简介

Outlines 是一个专注于结构化生成的库，按照 Python 类型系统的风格定义输出类型，使得 LLM 能直接生成符合 JSON 或 Pydantic 模型的可靠结构化结果。

## 主要特性

- 简单的类型化接口：按类型（Literal、Pydantic model 等）约束生成结果。
- 支持多种模型与后端（OpenAI、vLLM、transformers、Ollama 等），并包含丰富的示例与文档。
- 支持流式输出、函数调用与复杂嵌套结构的生成与校验。

## 使用场景

- 将非结构化文本转换为验证通过的结构化数据（客服工单、产品分类、事件提取等）。
- 在需要 provider 无关且可移植的抽取逻辑的生产环境中使用。
- 与数据管道、API 网关或下游验证系统集成以实现自动化数据处理。

## 技术特点

- 主要基于 Python 实现，仓库包含示例、文档（ReadTheDocs/Docs 站点）和测试套件，采用 Apache-2.0 许可证。
- 提供多语言适配与多模型支持，包含性能优化与批量生成能力。
- 社区活跃、文档齐全，适合生产与研究用途。
