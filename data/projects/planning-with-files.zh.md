---
name: Planning with Files
slug: planning-with-files
homepage: https://www.aikux.ai
repo: https://github.com/othmanadi/planning-with-files
license: MIT
category: coding-devtools
subCategory: mcp-tools
tags:
  - Agent Framework
  - Agents
  - Dev Tools
  - Workflow
description: 一个受 Manus 工作流启发、以持久化 Markdown 文件为中心的计划与智能体技能管理工具。
author: Othman Adi
ossDate: '2026-01-03T07:37:28Z'
featured: false
status: tracked
---

Planning with Files 是一个受 Manus 启发的基于文件的 AI 智能体规划工具，将计划、任务和技能定义以版本可控的 Markdown 文件形式存储。通过将所有规划状态保存在文件系统中，它使智能体工作流具备可审计、可比较和易于协作的特性，并可使用标准开发者工具进行管理。

## 基于文件的规划

- 纯 Markdown 计划存储，与 Git 自然集成，使每次变更都可版本化、可审查、可回滚
- 面向文件的智能体技能和工具调用集成点，任务以可编辑的文本制品形式定义和追踪
- 结构化文档和显式上下文文件，便于检索、比较和手动审查

## 开发者工具链集成

- 轻量、框架无关的设计，可融入编辑器、CI/CD 和代码审查等现有工具链
- 智能体计划和技能定义以与应用代码相同的工程化标准进行管理
- 计划与源代码共存，变更通过标准审查流程

## 可审计的工作流

- 每次计划变更都在版本控制中追踪，支持完整的差异比较和回滚
- 运行时状态可存储在仓库中，获得完整的历史可见性
- 支持团队随时间审计、对比和迭代智能体行为
