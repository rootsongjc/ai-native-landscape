---
name: Spring AI
slug: spring-ai
homepage: https://docs.spring.io/spring-ai/reference/index.html
repo: https://github.com/spring-projects/spring-ai
license: Unknown
category: coding-devtools
subCategory: sdk-frameworks
tags:
  - Application Framework
  - Dev Tools
description: 面向 AI 工程的企业级应用框架，提供与 Spring 生态兼容的模型接入、向量存储和可移植的 AI 接口。
logo: ''
author: Spring
ossDate: '2023-06-27T00:00:00.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

Spring AI 是一个面向企业应用的 AI 工程框架，旨在将 AI 能力以 Spring 风格的可移植、模块化方式引入 Java 生态。它提供与主流模型提供者（如 OpenAI、Anthropic 等）的适配器、向量数据库的集成、以及面向生产环境的可观测性和测试工具。Spring AI 的设计关注生产环境中的可维护性和可替换性，通过 starter、自动配置与示例工程降低在现有 Spring 系统中引入 AI 的门槛。文档团队也提供了迁移指南、评估工具与示例以支持企业在 CI/CD 流程中可靠地集成模型服务。

## 主要特性

- 可移植的模型抽象：为不同模型提供商提供统一的 API，使应用更容易更换底层模型实现。
- 向量存储与检索支持：提供对多种向量数据库的兼容层，支持 RAG 场景。
- Observability 与测试工具：包括评估、监控与集成测试支持，便于在企业级系统中使用。
- 与 Spring Boot 集成：提供 starter 与自动配置，简化接入和部署流程。

## 使用场景

- 企业级 AI 应用：在已有 Spring 应用中嵌入 AI 功能，如智能客服、智能搜索与自动化流程。
- 数据工程与 RAG：结合向量数据库和检索组件构建基于企业数据的问答系统。
- 模型治理与评估：在 CI/CD 流程中集成模型评估与回归测试。

## 技术特点

- 基于 Java 与 Spring 生态，使用 familiar 的配置与依赖管理方式。
- 提供详尽文档和示例工程，支持在云与本地环境中部署。
