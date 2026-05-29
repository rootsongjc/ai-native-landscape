---
name: ElizaOS
slug: eliza
homepage: https://eliza.how/
repo: https://github.com/elizaos/eliza
license: Unknown
category: agents
subCategory: agent-orchestration
tags:
  - Agents
  - Application
description: ElizaOS 是一个面向多智能体与应用部署的开源平台，提供从代理创建、文档摄取到可视化管理的一体化工具链，适用于构建复杂的多智能体系统与线上服务。
logo: ''
author: ElizaOS
ossDate: '2023-08-01T00:00:00.000Z'
featured: false
status: tracked
---

## 简介

ElizaOS 是一个面向多智能体与企业级部署场景的开源平台，提供从智能体创建、文档摄取到实时管理的一体化工具链。平台集合了 CLI、Web 控制台与插件系统，支持多模型提供商与丰富的外部连接器（如 Discord、Telegram、Slack 等），便于在真实业务场景中快速构建可扩展的 RAG + agent 解决方案。

## 主要特性

- 多智能体编排：支持定义、部署与调度多个协作智能体，实现任务拆分与跨服务协作。
- 文档摄取与 RAG：内置文档索引与检索流水线，使智能体可以基于业务知识库提供准确回答。
- 可扩展插件与现代 UI：丰富的插件能力与 Web 管理界面降低运维成本并提升可观测性。

## 使用场景

- 构建面向多渠道的客服或业务自动化代理（例如同时服务于 Discord 与 Telegram）。
- 部署企业级智能体集群，统一管理模型提供商、凭据与路由策略。
- 快速验证与演示多智能体协作能力，用于研究或产品原型开发。

## 技术特点

- Monorepo 架构包含服务端、前端与 CLI 等模块，主要基于 TypeScript/Node 实现，便于扩展与贡献。
- 提供插件化扩展点和与外部模型/服务的适配层，支持多种部署与调度策略。
