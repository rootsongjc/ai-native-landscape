---
name: Youtu-Agent
slug: youtu-agent
homepage: https://tencentcloudadp.github.io/youtu-agent/
repo: https://github.com/tencentcloudadp/youtu-agent
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
description: Youtu-Agent 是一个由腾讯发布的开源智能体框架，面向研究与工程实践。
logo: ''
author: Tencent Cloud
ossDate: '2025-08-21T07:58:13Z'
featured: false
status: tracked
---

## 详细介绍

Youtu-Agent 是腾讯发布的开源智能体框架，旨在为研究者与工程师提供一个轻量、可扩展且实用的智能体开发与评估平台。该框架以 YAML 配置驱动，支持自动生成智能体与工具，集成大量示例（包括 RAG、PPT 生成与深度检索场景），并兼容多种开源模型与 API，帮助用户以较低成本构建复杂的多步骤任务流水线。

## 主要特性

- 自动化配置：通过 YAML 配置快速定义智能体行为与工具链，支持交互式自动生成。
- 多模型兼容：支持 OpenAI 风格接口、DeepSeek 等开源/商用模型，便于替换与评估。
- 丰富示例：内置数据分析、文件管理、RAG 与 PPT 生成功能，降低上手门槛。
- 可观测性：提供轨迹与可视化工具，便于回放、调试与基准测试。

## 使用场景

- 研究与基准：针对 WebWalkerQA、GAIA 等基准进行评估与 ablation 研究。
- 自动化工作流：自动化的数据分析、网页生成与文献综述任务。
- 工程化落地：作为企业级智能体应用的原型框架，用于快速验证产品化方案。

## 技术特点

- 异步执行：内建异步设计，适合高并发评估与大规模实验。
- 模块化设计：Environment、ContextManager 等组件解耦，便于定制与扩展。
- 跟踪系统：支持自定义的 DBTracingProcessor，用于深入分析工具调用与智能体轨迹。
- 开放生态：基于开源工具链（如 openai-agents），保持低成本与社区兼容性。
