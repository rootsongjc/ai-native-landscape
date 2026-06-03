---
name: Agent Skills
slug: agentskills
homepage: https://agentskills.io
repo: https://github.com/agentskills/agentskills
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Reference
description: 一个用于描述、共享与发现智能体技能（skills）的开源规范与文档集合。
author: Anthropic
ossDate: '2025-12-16T15:47:19Z'
featured: false
status: tracked
---
## 简介

Agent Skills 提供了一套标准化的规范与文档，用于描述、共享与发现智能体技能。技能是一种为 AI 智能体赋予新能力和专业知识的标准化方式，由说明文档、示例与元数据组成，便于不同智能体实现与复用，提高完成复杂任务时的可组合性与可靠性。

## 主要特性

- 统一规范：以清晰可读的格式定义技能的能力声明、输入输出及元数据
- 可发现性：通过规范化的目录与示例，支持技能的索引与查找，便于智能体按需加载
- 参考实现：包含文档与示例仓库，帮助开发者理解如何编写、测试与集成技能
- 社区驱动：由 Anthropic 发起并接受社区贡献，采用开源协作流程

## 使用场景

为聊天助手、任务型智能体或自动化流水线提供可复用能力模块以扩展智能体能力。构建技能市场或目录，让第三方开发者发布可发现的可重用技能。不同智能体平台通过统一规范互相调用技能，提升跨平台互操作性。

## 技术特点

语言无关的规范，关注能力与元数据，示例实现使用 Python 等多种语言。基于可读的文件格式定义技能的接口与行为。规范配套示例与测试，可用于验证技能描述的正确性与兼容性。
