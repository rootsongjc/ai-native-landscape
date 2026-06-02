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
logo: ''
author: LangChain4j
ossDate: '2023-06-20T15:30:29Z'
featured: false
status: tracked
---

## 简介

LangChain4j 是一个面向 JVM 的惯用 Java 库，用于构建基于 LLM 的应用。它在数十种 LLM 提供商和向量存储之上提供统一 API，使 Java 开发者能够使用熟悉的企业工程实践来构建 RAG 管道、工具调用智能体及其他 AI 工作流。

## 主要特性

该库暴露单一、一致的 Java API，抽象了不同 LLM 提供商和向量数据库后端之间的差异。它原生支持 RAG 模式、工具调用（包括兼容 MCP 的模式）和智能体式编排。针对 Spring Boot 和 Jakarta EE 的企业适配器使集成到现有 Java 技术栈变得简单直接。

## 使用场景

团队使用 LangChain4j 在不离开 Java 生态的情况下为后端服务添加语义搜索和问答能力。它支持调用外部工具、数据库和 API 的智能体工作流以自动化业务流程。企业还依赖它在合规敏感的环境中使用自托管模型部署来集成摘要、分类和文本生成功能。

## 技术特点

LangChain4j 可与 Java 构建工具和 CI/CD 管道无缝集成。它支持包括 Chroma、Milvus 和 PGVector 在内的多种向量存储后端。该库通过日志、指标和健壮的错误处理强调可观测性，并提供包含部署和性能指导的完整文档。
