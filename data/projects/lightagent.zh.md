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
author: Wanxing AI
ossDate: '2025-01-20T12:31:57Z'
featured: false
status: tracked
---

LightAgent 是一个轻量级的开源 AI 智能体框架，内置记忆、MCP 支持和技能扩展能力。它支持多智能体协作和自学习，同时兼容包括 OpenAI、Qwen 和 DeepSeek 在内的主流大模型，适用于原型验证和生产部署。

## 核心特性

- **精简的 Python 核心**，便于部署、调试和嵌入现有应用
- **可插拔的长期记忆模块**，支持个性化多轮对话和上下文持久化
- **自动化工具生成器**，可从 API 文档自动创建智能体工具，加速开发效率
- **多模型支持**，允许在 OpenAI、Qwen、DeepSeek 等 LLM 提供商之间无缝切换
- **MCP 协议支持**，实现标准化的工具集成与智能体间通信

## 使用场景

- 构建集成外部工具和 API 的智能客服机器人和多轮对话助手
- 通过 Tree-of-Thought 推理驱动数据分析和自动化任务执行
- 多智能体协作场景，由专业化智能体分工解决复杂问题
- 教育、教学演示和快速原型验证，得益于精简易读的代码实现

## 技术特点

- 提供兼容主流聊天框架的流式 API 支持，确保响应式的用户体验
- 采用 Apache-2.0 许可证发布，适合商用改造和企业集成
- 附带涵盖工程集成和 CI/CD 工作流的丰富示例和文档
