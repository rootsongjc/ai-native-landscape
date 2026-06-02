---
name: Planning with Files
slug: planning-with-files
homepage: https://www.aikux.ai
repo: https://github.com/othmanadi/planning-with-files
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Dev Tools
  - Workflow
description: 一个受 Manus 工作流启发、以持久化 Markdown 文件为中心的计划与智能体技能管理工具。
logo: ''
author: Othman Adi
ossDate: '2026-01-03T07:37:28Z'
featured: false
status: tracked
---

## 简介

Planning with Files 是一个受 Manus 启发的基于文件的 AI 智能体规划工具，将计划、任务和技能定义以版本可控的 Markdown 文件形式存储。通过将所有规划状态保存在文件系统中，它使智能体工作流具备可审计、可比较和易于协作的特性，并可使用标准开发者工具进行管理。

## 主要特性

- 纯 Markdown 计划存储，与 Git 自然集成，使每次计划变更都可版本化、可审查、可回滚。
- 面向文件的智能体技能和工具调用集成点，任务以可编辑的文本制品形式定义和追踪。
- 轻量、框架无关的设计，可融入包括编辑器、CI/CD 和代码审查在内的现有开发者工具链。

## 使用场景

开发智能体技能的团队可以将计划和执行记录与源代码一起维护，实现可进行代码审查的计划变更和回滚。研究者在原型开发智能体工作流时，可以方便地对比和迭代文本形式的计划。需要审计和可追溯性的自动化管道可以将运行时状态存储在仓库中，获得完整的历史可见性。

## 技术特点

该项目将文件系统作为一等规划制品，依靠结构化 Markdown 实现可移植性和长期存储。它设计为与 Git、编辑器和 CI 系统共存，使智能体计划和技能定义能以与应用代码相同的工程化标准进行管理。结构化文档和显式上下文文件使检索、比较和手动审查都很便捷。
