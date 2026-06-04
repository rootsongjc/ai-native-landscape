---
name: Mindcraft
slug: mindcraft
homepage: null
repo: https://github.com/mindcraft-bots/mindcraft
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - AI Agent
  - LLM
description: 基于 LLM 的 Minecraft 多主体与代理框架，用于在 Minecraft 世界中构建可交互的智能机器人与任务系统。
author: mindcraft-bots
ossDate: '2023-08-16T06:39:59.000Z'
featured: false
status: tracked
---

Mindcraft 是一个将大语言模型与 Mineflayer 深度集成的开源框架，旨在为 Minecraft 世界创建可编程、可协作的智能机器人。项目支持多种模型后端，提供基于配置文件的智能体管理、任务套件与评估工具，适合在交互式游戏环境中对智能体行为进行基准测试。

## 核心特性

- **多模型后端支持**，覆盖 OpenAI、Anthropic、Gemini、Replicate、Hugging Face、Ollama 等主流提供商
- **任务驱动的评估体系**，提供结构化的任务定义与工具，用于量化与比较智能体性能
- **基于 profile 的配置**，使智能体设置可复现、可版本化和可基准测试
- **Docker 支持**，确保开发和研究环境的一致性部署
- **丰富的社区资源**，包括教程、演示和活跃的贡献者社区

## 使用场景

- 通过交互式游戏场景进行 AI 概念教学和智能体演示
- 在受控但动态的环境中评估具身智能策略和多智能体协作
- 创建智能 NPC 和 LLM 驱动的游戏玩法演示
- 基于标准化任务套件对 LLM 的推理、规划和工具使用能力进行基准测试

## 技术特点

- 代码库以 JavaScript/Node.js 为主，辅以 Python 组件用于任务评估工具
- 基于 profile 和 task 的配置架构使智能体设置可复现、可共享
- 拥有活跃的社区和 arXiv 学术论文引用，并保持频繁的版本迭代
