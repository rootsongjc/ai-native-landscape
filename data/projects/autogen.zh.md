---
name: AutoGen
slug: autogen
homepage: https://microsoft.github.io/autogen/
repo: https://github.com/microsoft/autogen
license: Unknown
category: agents
subCategory: agent-orchestration
tags:
  - AI Agent
  - Dev Tools
  - Utility
description: 用于代理式 AI 的编程框架，可实现多代理工作流的开发，具有分层和可扩展的设计。
logo: ''
author: Microsoft
ossDate: '2023-08-18T11:43:45.000Z'
featured: false
status: tracked
---

## 简介

AutoGen 是微软推出的代理式 AI 编程框架，用于构建具有灵活对话模式的多智能体系统。框架采用分层可扩展的架构设计，各层职责明确，使开发者能够在不同抽象级别上工作，从高级 API 到底层组件，创建复杂的多智能体工作流。

## 主要特性

AutoGen 提供用于消息传递与事件驱动代理的核心 API（支持本地和分布式运行时）、用于快速原型设计的 AgentChat API（支持群聊等常见多代理模式），以及用于第一方和第三方集成的扩展 API（支持 LLM 客户端与代码执行）。还包含 AutoGen Studio（无代码 GUI）和 AutoGen Bench（基准测试套件）两个核心开发者工具。

## 使用场景

AutoGen 适用于构建需要协调对话模式的多智能体应用，例如 Magentic-One 可处理网页浏览、代码执行和文件处理等多种任务。适合团队进行智能体方案原型验证、基准性能评估以及跨领域生产级多智能体系统开发。

## 技术特点

框架支持 .NET 和 Python 跨语言开发，提供本地与分布式运行时选项，通过分层 API 设计实现可扩展性。集成主流 LLM 提供商（OpenAI、Azure OpenAI），包含可观测性、基准测试和无代码智能体编排等工具。项目拥有活跃的社区，提供每周办公时间、Discord 和 GitHub Discussions 等支持渠道。
