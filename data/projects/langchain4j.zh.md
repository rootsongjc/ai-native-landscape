---
name: LangChain4j
slug: langchain4j
homepage: https://docs.langchain4j.dev
repo: https://github.com/langchain4j/langchain4j
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Framework
  - LLM
  - RAG
  - SDK
description: 一个开源的 Java 库，提供统一 API 用于在企业级 Java 应用中集成大语言模型与向量数据库。
author: LangChain4j
ossDate: '2023-06-20T15:30:29Z'
featured: false
status: tracked
---

LangChain4j 是一个面向 JVM 的惯用 Java 库，用于构建基于 LLM 的应用。它在数十种 LLM 提供商和向量存储之上提供统一 API，使 Java 开发者能够使用熟悉的企业工程实践来构建 RAG 管道、工具调用智能体及其他 AI 工作流。

## 核心能力

- **统一 Java API**，将不同 LLM 提供商和向量数据库后端的差异封装在单一一致接口之后
- **原生 RAG 支持**，内置检索、索引和增强工作流的实现模式
- **工具调用与智能体编排**，包括兼容 MCP 的模式，可将 LLM 连接到外部系统
- **企业框架适配器**，针对 Spring Boot 和 Jakarta EE 可直接集成到现有 Java 技术栈
- **多种向量存储后端**，支持 Chroma、Milvus 和 PGVector 等灵活的数据层选择

## 使用场景

- 在不离开 Java 生态的情况下为后端服务添加语义搜索和问答能力
- 构建调用外部工具、数据库和 API 的智能体工作流以自动化业务流程
- 在合规敏感环境中使用自托管模型集成摘要、分类和文本生成功能
- 通过熟悉的依赖注入模式为现有企业 Java 应用扩展 LLM 能力

## 技术特点

- 与 Maven、Gradle 及标准 Java CI/CD 管道无缝集成
- 通过结构化日志、指标和健壮的错误处理强调可观测性
- 提供包含部署、调优和性能指导的完整文档
