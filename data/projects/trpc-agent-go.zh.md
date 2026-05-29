---
name: tRPC-Agent-Go
slug: trpc-agent-go
homepage: https://trpc.group/trpc-go/trpc-agent-go/
repo: https://github.com/trpc-group/trpc-agent-go
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
  - Observability
description: tRPC-Agent-Go 是一个面向生产的 Go 语言智能体框架，提供强大的多智能体编排、工具集成与可观测性方案。
logo: ''
author: tRPC Group
ossDate: '2025-05-14T13:51:35Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

tRPC-Agent-Go 是一个以 Go 为核心实现的智能体框架，面向构建生产级的智能代理系统。项目提供灵活的 agent、runner、graph、memory 与 tool 模块，支持链式、并行与图式工作流，便于将 LLM 与外部工具、数据库、搜索服务等深度集成，满足企业级可靠性与性能需求。

## 主要特性

- 完善的多智能体编排（Chain、Parallel、Graph）与执行 Runner
- 丰富的工具集成能力，将任意函数或服务封装为可调用工具
- 内置持久化记忆与知识检索（支持 RAG 场景）
- 企业级可观测性：OpenTelemetry 集成、追踪与指标支持
- 示例丰富，覆盖从本地示例到生产部署的使用场景

## 使用场景

适用于客服机器人、数据分析助手、运维自动化、业务流程自动化以及任何需要将 LLM 与外部系统和工具结合的场景。框架尤其适合对性能、可观测性和可扩展性有严格要求的生产环境。

## 技术特点

采用 Go 语言实现，强调低延迟与高并发，模块化设计便于扩展。支持多模型接入、MCP 协议、工具沙箱与安全的代码执行示例，文档与示例完善，便于工程化落地与二次开发。
