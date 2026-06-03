---
name: LangChain Go
slug: langchaingo
homepage: https://tmc.github.io/langchaongo/
repo: https://github.com/tmc/langchaongo
license: Unknown
category: coding-devtools
subCategory: sdk-frameworks
tags:
  - Dev Tools
  - SDK
description: LangChain Go 是 LangChain 在 Go 语言中的实现，提供可组合的 SDK 与工具，便于在 Go 中构建基于大语言模型的应用。
author: tmc
ossDate: '2023-02-18T20:04:54Z'
featured: false
status: tracked
---

LangChain Go 是 LangChain 在 Go 语言中的实现，为在 Go 中编写基于 LLM 的程序提供了最简便的方式。它提供链、工具、回调、向量存储和文档加载器等模块化组件，使开发者能够使用惯用的 Go 语言从提示词拼接到多步智能体编排构建生产级应用。

## 核心模块

- **链与智能体**，通过可组合接口组装复杂的 LLM 工作流
- **多种 LLM 后端**，支持 OpenAI、本地模型及其他提供商，适用于客户端和服务器端
- **向量存储与嵌入**，用于构建检索增强生成（RAG）管道
- **文档加载器与文本分割器**，用于摄入和预处理多样化的数据源
- **回调与可观测性钩子**，支持链路追踪、日志记录和监控 LLM 交互

## 使用场景

- 将对话式助手、文档问答和 RAG 工作流集成到 Go 微服务中
- 构建需要低延迟模型调用和可靠生产部署的后端系统
- 将 LLM 能力直接嵌入现有 Go 服务中，无需引入额外的语言运行时
- 在 Go 命令行工具和服务端应用中快速验证 LLM 功能

## 技术特点

- 纯 Go 实现，利用 Go 的并发模型实现轻量、可扩展的执行
- 组合式 API 通过串联工具和模块编排复杂任务，同时保持可测试性
- 采用 MIT 许可证开源，提供 GoDoc 参考和文档站点便于快速集成
