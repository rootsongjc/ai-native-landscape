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
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Swarms 是一个企业级、面向生产的多智能体（智能体）编排框架，提供可扩展的多智能体架构、运行时与协议。它通过统一的 API 与工作流抽象，将复杂任务分解为协作的智能体网络，支持模型、工具与多种记忆系统的集成，并兼容模型上下文协议（MCP, Model Context Protocol）以实现工具调用与分布式部署。

## 主要特性

- 企业就绪的基础设施与可观测性，包括监控、日志与可审计执行记录。
- 多样的多智能体拓扑：SequentialWorkflow、ConcurrentWorkflow、HierarchicalSwarm、MixtureOfAgents 等。
- 自动化智能体生成（AutoSwarmBuilder）与提示工程能力，简化智能体设计与优化。
- 广泛的模型与协议集成（OpenAI、Anthropic、Hugging Face）与对外部索引/向量数据库的支持。

## 使用场景

- 将复杂业务流程拆解为协作智能体以实现自动化（如研究分析、内容创作、财务分析）。
- 多模态检索与问答、带记忆的长期对话系统与知识工作流。
- 生产级智能体编排与混合云/边缘部署，满足高可用性与横向扩展需求。

## 技术特点

- 支持并发执行、负载均衡与横向扩展以应对生产级吞吐。
- 可插拔的工具与记忆后端，支持向量数据库（Vector Database）与多模型提供者接入。
- 配置与执行版本化，提供回溯查询与审计能力，便于合规与运维。
- Apache-2.0 开源许可，附带丰富示例与企业级文档。
