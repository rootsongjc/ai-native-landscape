---
name: Swarms
slug: swarms
homepage: https://swarms.ai
repo: https://github.com/kyegomez/swarms
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - MCP
description: 一个面向生产的多智能体编排框架，提供可扩展的协作智能体运行时与协议。
logo: ''
author: Swarms
ossDate: '2023-05-11T01:09:00Z'
featured: false
status: tracked
---

## 简介

Swarms 是一个企业级的多智能体编排框架，提供可扩展的运行时、统一的 API 和工作流抽象，用于构建面向生产环境的智能体系统。它使开发者能够将复杂任务分解为协作智能体网络，内置支持多种模型提供者、工具集成、记忆后端以及模型上下文协议（MCP）。

## 主要特性

框架提供丰富的预置智能体拓扑，包括 SequentialWorkflow、ConcurrentWorkflow、HierarchicalSwarm 和 MixtureOfAgents，团队可根据任务特点选择合适的协调模式。AutoSwarmBuilder 可自动生成智能体并优化提示工程，降低开发成本。Swarms 集成主流模型提供者（OpenAI、Anthropic、Hugging Face），支持向量数据库作为长期记忆后端，并提供包含可观测性、日志和可审计执行记录的生产级基础设施。

## 使用场景

团队使用 Swarms 编排专业智能体协同工作，自动化研究分析、内容创作和财务建模等复杂业务流程。它驱动多模态检索增强生成（RAG）和知识密集型问答工作流，支持跨会话的持久记忆。组织在混合云和边缘环境中部署 Swarms，满足高可用性、横向扩展和合规审计的需求。

## 技术特点

Swarms 开箱即用地支持并发执行、负载均衡和横向扩展，提供生产级吞吐能力。其可插拔架构允许团队在不修改智能体逻辑的情况下更换工具后端、记忆存储和模型提供者。配置和执行记录支持版本化，支持回滚和合规审计。框架基于 Apache-2.0 许可开源，附带丰富的文档和企业级示例。
