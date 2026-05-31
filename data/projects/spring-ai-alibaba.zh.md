---
name: Spring AI Alibaba
slug: spring-ai-alibaba
homepage: https://java2ai.com
repo: https://github.com/alibaba/spring-ai-alibaba
license: Unknown
category: coding-devtools
subCategory: sdk-frameworks
tags:
  - Dev Tools
  - Frameworks
  - Java
description: 面向 Java 开发者的 Agentic AI 框架，支持多 agent、工作流、MCP 集成与企业级生态对接。
logo: ''
author: Alibaba
ossDate: '2024-09-09T01:35:50Z'
featured: false
status: tracked
---

## 简介

Spring AI Alibaba 是一个面向 Java 开发者的 agentic AI 框架，帮助开发者快速构建聊天机器人、工作流与多 agent 应用。项目提供图（Graph）驱动的多 agent 编排、丰富的内置节点、工具集成（如 RAG、MCP、观测与评估平台）以及面向企业的适配能力。

## 主要特性

- 基于 Graph 的多 agent 编排框架，支持嵌套与并行流程。
- 与阿里云生态（Bailian、ARMS、Nacos MCP 等）深度集成，便于从示例过渡到生产环境。
- 支持 Plan-Act 等 agent 模式，内置多种工具（检索、爬虫、Python 执行环境等）。
- 提供 Playground 与示例仓库，帮助快速上手并部署示例应用。

## 使用场景

- 企业级智能助手与自动化工作流。
- 需要与阿里云产品（Bailian、ARMS）集成的 RAG 与模型服务场景。
- 以 Java/ Spring 生态为主的开发团队构建生产级 agent 平台。

## 技术要点

- 主要语言：Java（核心），并包含 TypeScript/JS 前端组件。
- 开箱即用的 Starter 模块（如 dashscope、nl2sql、nacos-mcp client 等）。
- 支持流式输出、状态快照、人机在环（Human-in-the-loop）与可观测性埋点。
