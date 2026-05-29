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

## 详细介绍

Skills 是 Anthropic 开源的智能体（智能体）技能库，旨在提供一套可定义、共享与复用的能力模块，用于把离散的任务操作封装为可组合的技能单元。该仓库包含技能示例、接口约定与使用说明，帮助开发者快速为智能体补充可复用的行为能力，从而降低构建复杂多步骤工作流的门槛。

## 主要特性

- 提供规范化的技能定义模式，便于统一调用与测试。
- 包含示例实现与最佳实践，支持快速上手与复用。
- 设计为可组合的能力模块，方便在不同智能体和工作流间共享。

## 使用场景

Skills 适用于需要将常见操作封装为可复用能力的场景，例如自动化任务执行、信息检索与处理、跨系统集成、以及作为更复杂智能体工作流中的构建块。它特别适合希望把单步动作和多步骤流程模块化的开发者与团队。

## 技术特点

- 面向模块化的技能描述与调用约定，便于集成到现有智能体运行时。
- 语言无关的设计，示例以常见实现语言展示，方便移植。
- 注重可测试性与可组合性，便于在 CI 流程中验证技能行为。
