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

## 详细介绍

Planning with Files 是由 Othman Adi 开发的开源项目，受 Manus 工作流启发，旨在通过持久化的 Markdown 文件实现以文件为中心的计划与任务管理。该项目把计划、任务和智能体技能配置保存在本地或仓库中，便于版本控制、审计与多人协作，同时可与智能体（例如基于 Claude 的技能）集成，支持将运行状态与历史记录保存在可追溯的文件系统中。

## 主要特性

- 基于 Markdown 的持久化计划存储，便于编辑与差异比较。
- 与智能体/技能集成，支持在文件中定义任务、上下文与工具调用流程。
- 面向开发者的工具链，易于纳入现有 Git 工作流与 CI/CD 管道。
- 轻量、可扩展，适合作为实验性或生产级的计划与工作流层。

## 使用场景

适合希望把规划与执行记录保存在文本文件中的团队或个人，例如：研究原型、智能体技能开发、以 Git 为中心的任务管理流程，或需要审计与回溯的自动化工作流。通过把运行状态与配置保存在仓库，团队可以对计划变更进行代码审查与回滚。

## 技术特点

该项目以文件系统为第一类公民，依靠简单的文本格式实现可移植性与长期存储。它强调与现有工具链（Git、编辑器、CI）无缝集成，便于把智能体的计划与技能定义纳入工程化流程。文档与上下文采用结构化 Markdown，使得检索、差异比较与手动审阅都很方便。
