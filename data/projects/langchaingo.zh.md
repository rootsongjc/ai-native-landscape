---
name: LangChain Go
slug: langchaingo
homepage: https://tmc.github.io/langchaingo/
repo: https://github.com/tmc/langchaingo
license: Unknown
category: coding-devtools
subCategory: sdk-frameworks
tags:
  - Dev Tools
  - SDK
description: LangChain Go 是 LangChain 在 Go 语言中的实现，提供可组合的 SDK 与工具，便于在 Go 中构建基于大语言模型的应用。
logo: ''
author: tmc
ossDate: '2023-02-18T20:04:54Z'
featured: false
status: tracked
---

## 详细介绍

LangChain Go（LangChain Go）是 LangChain 在 Go 语言生态中的实现，目标是在 Go 中以可组合的方式构建基于大语言模型（LLM）的应用。项目提供链（chains）、工具（tools）、回调（callbacks）、向量存储与文档加载器等模块化组件，便于开发者使用熟悉的 Go 语言编写从提示拼接到多步骤任务编排的生产级程序。

## 主要特性

- 模块化 SDK：包含 chains、agents、llms、embeddings、vectorstores 等核心模块，支持灵活组合。
- 丰富示例：仓库提供多种示例工程，帮助快速上手与验证常见用例。
- 多运行环境支持：可与 OpenAI、本地模型或其他 LLM 后端对接，并支持客户端与服务器端集成。
- 开源与生态：项目在 GitHub 开源（MIT 许可），拥有活跃的社区与文档站点。

## 使用场景

适用于在 Go 服务中集成对话式助手、文档问答、检索增强生成（RAG）流程、以及需要将 LLM 能力嵌入后端业务逻辑的场景。工程团队可将 LangChain Go 嵌入现有 Go 微服务，以实现低延迟的模型调用与可靠的生产化部署。

## 技术特点

- 纯 Go 实现：利用 Go 的并发模型与工程化生态，提供轻量且可扩展的运行时。
- 组合式 API：通过链与工具的组合实现复杂任务编排，提高可测试性与复用性。
- 文档与 API 引导：配套文档站点与 GoDoc 引用，便于接口查阅与集成。
- 社区驱动：持续迭代的示例、修复与扩展，使其适配不同后端与部署需求。
