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

## 简介

LangChain Go 是 LangChain 在 Go 语言中的实现，为在 Go 中编写基于 LLM 的程序提供了最简便的方式。它提供链、工具、回调、向量存储和文档加载器等模块化组件，使开发者能够使用惯用的 Go 语言从提示词拼接到多步智能体编排构建生产级应用。

## 主要特性

该 SDK 提供可组合的链、智能体、LLM、嵌入和向量存储模块，可组装为复杂工作流。它支持包括 OpenAI、本地模型和其他提供商在内的多种 LLM 后端，适用于客户端和服务器端集成。项目附带丰富的示例应用，采用 MIT 许可证开源，拥有活跃的社区贡献。

## 使用场景

开发者使用 LangChain Go 将对话式助手、文档问答和 RAG 工作流集成到 Go 微服务中。它非常适合需要低延迟模型调用和可靠生产部署的后端系统。工程团队可以将 LLM 能力直接嵌入现有 Go 服务中，而无需引入额外的语言运行时。

## 技术特点

LangChain Go 是纯 Go 实现，利用 Go 的并发模型实现轻量、可扩展的执行。其组合式 API 通过串联工具和模块来编排复杂任务，同时保持可测试性和可复用性。项目提供 GoDoc 参考和文档站点，便于快速集成。
