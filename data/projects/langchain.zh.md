---
name: LangChain
slug: langchain
homepage: https://python.langchain.com/docs/
repo: https://github.com/langchain-ai/langchain
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - AI Agent
  - LLM
  - RAG
description: 用于构建以 LLM 为核心的应用框架，支持丰富的集成与可扩展组件。
author: LangChain contributors
ossDate: '2022-10-17T02:58:36.000Z'
featured: true
status: tracked
---

LangChain 是构建 LLM 应用的领先智能体工程平台。它提供模型、嵌入、向量数据库、检索器和工具等可组合组件，帮助开发团队快速搭建 RAG 管道、智能体工作流及其他生产级 LLM 系统。

## 核心组件

- **可组合的链与智能体**，通过抽象接口实现管道中任意组件的替换与扩展
- **数十种内置集成**，覆盖模型提供商、向量数据库和检索后端，开箱即用
- **LangSmith** 提供端到端可观测性、链路追踪和 LLM 应用评估能力
- **LangGraph** 支持有状态的图式智能体编排，具备检查点和人机协作机制
- **插件化架构** 将业务逻辑与具体供应商实现解耦，降低迁移成本

## 使用场景

- 构建检索增强生成（RAG）系统，将 LLM 连接到私有知识库实现精准问答
- 编排多步智能体工作流，串联工具调用、API 集成和多轮推理
- 开发生产级聊天机器人、文档分析管道和自动化数据处理应用
- 借助丰富的模板、教程和企业级示例快速验证 LLM 功能原型

## 技术特点

- 主要使用 Python 编写，并提供并行的 JavaScript/TypeScript 生态（LangChain.js）覆盖全栈场景
- 通过标准化适配器接口支持所有主流模型提供商和向量数据库
- 拥有超过十万 GitHub Stars，文档完善，社区活跃，持续迭代维护
