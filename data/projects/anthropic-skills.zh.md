---
name: Skills
slug: anthropic-skills
homepage: https://www.anthropic.com/
repo: https://github.com/anthropics/skills
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Tool
description: Anthropic 提供的开源智能体技能库，用于定义、共享与复用面向任务的能力模块。
logo: ''
author: Anthropic
ossDate: '2025-09-22T15:53:31Z'
featured: false
status: tracked
---

## 简介

Skills 是 Anthropic 的公开智能体技能仓库——包含指令和脚本的文件夹，旨在为 Claude 赋予新的能力和专业知识。每个技能是一个独立的模块，包含文档、示例和元数据，可在不同智能体和工作流间共享，降低构建多步骤智能体系统的复杂度。

## 主要特性

- 规范化的技能定义模式，在不同项目中提供一致的调用与测试体验
- 包含示例实现与最佳实践，支持快速上手与技能复用
- 可组合的能力模块，设计用于在不同智能体和工作流间共享
- Anthropic 官方维护的仓库，支持社区贡献

## 使用场景

将常见操作封装为可复用能力，用于任务自动化、信息检索和跨系统集成。构建模块化智能体工作流，使单步动作和多步骤流程可以组合和共享。希望跨项目标准化扩展 Claude 能力的团队。

## 技术特点

面向模块化的技能描述与调用约定，便于集成到现有智能体运行时。语言无关的设计，示例以常见实现语言展示，方便移植。注重可测试性与可组合性，便于在 CI 流程中验证技能行为。技能以文件夹形式组织，包含指令和脚本，便于发现和加载。
