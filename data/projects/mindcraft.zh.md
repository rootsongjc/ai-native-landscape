---
name: Mindcraft
slug: mindcraft
homepage: null
repo: https://github.com/mindcraft-bots/mindcraft
license: Unknown
category: models-modalities
subCategory: foundation-models
tags:
  - AI Agent
  - LLM
description: 基于 LLM 的 Minecraft 多主体与代理框架，用于在 Minecraft 世界中构建可交互的智能机器人与任务系统。
logo: ''
author: mindcraft-bots
ossDate: '2023-08-16T06:39:59.000Z'
featured: false
status: tracked
---

## 简介

Mindcraft 是一个将大语言模型与 Mineflayer 集成的开源项目，旨在为 Minecraft 创建可编程、可协作的智能机器人，支持多模型后端与丰富的配置文件以适配不同任务与环境。

## 主要特性

- 多模型支持：支持 OpenAI、Anthropic、Gemini、Replicate、Hugging Face、Ollama 等多种模型后端。
- 任务驱动：提供任务描述、任务套件与评估工具，用于衡量智能体在游戏中的表现。
- 可扩展性：插件式配置、Docker 支持与丰富的演示与教程（含视频和社区资源）。

## 使用场景

- 在 Minecraft 中构建自动化机器人、模拟协作代理和教学示例。
- 作为评测平台，对 LLM 驱动的具身/虚拟代理进行任务测试和性能比较。
- 快速原型：利用配置文件与 profile 定义不同风格与能力的智能体以验证策略。

## 技术特点

- 主要语言为 JavaScript/Node.js，部分任务组件使用 Python（提供 `requirements.txt`）。
- 强耦合的配置体系（`profiles`、`andy.json` 等）与任务框架，便于在本地或 Docker 中运行。
- 活跃社区与论文支持（参见 arXiv 引用），拥有多次发布与持续维护的版本迭代。
