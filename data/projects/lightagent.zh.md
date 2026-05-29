---
name: LightAgent
slug: lightagent
homepage: null
repo: https://github.com/wxai-space/lightagent
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
description: 一个开源且轻量的智能体框架，内置记忆、工具与 Tree-of-Thought，支持多模型与多智能体协作。
logo: ''
author: Wanxing AI
ossDate: '2025-01-20T12:31:57Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

LightAgent 是由 Wanxing AI 发布的开源智能体框架，设计目标是轻量、可扩展与可生产化。框架内置记忆模块（如 `mem0`）、工具（Tools）与 Tree-of-Thought（ToT）能力，支持多智能体协作、自学习与复杂任务分解，且兼容主流大模型（OpenAI、Qwen、DeepSeek 等）。核心实现尽量精简，便于工程化部署与二次开发。

## 主要特性

- 轻量高效：纯 Python 实现，核心代码精简，便于快速部署与调试。
- 可扩展记忆：支持可插拔的长期记忆模块（`mem0`），实现个性化对话和场景记忆。
- 多模型兼容：内置对多家模型提供方的支持，易于切换与集成。
- 自动化工具生成：提供工具生成器，加速从 API 文档到可用工具的构建流程。

## 使用场景

- 智能客服与问答系统：多轮对话与工具调用结合，支持复杂业务操作。
- 数据分析与自动化：Tree-of-Thought 与多智能体协作用于复杂任务分解与执行。
- 教学与原型：轻量实现便于教学演示与快速原型验证。

## 技术特点

- 支持流式输出与主流聊天框架的 API 格式，提升交互体验。
- 提供丰富的示例与文档，便于工程化集成与 CI/CD 部署。
- 采用 Apache-2.0 许可，适合商用改造与企业集成。
