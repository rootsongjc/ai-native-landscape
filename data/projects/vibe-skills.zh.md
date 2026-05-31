---
name: Vibe Skills
slug: vibe-skills
homepage: null
repo: https://github.com/foryourhealth111-pixel/vibe-skills
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
  - Framework
description: Vibe Skills 是一个开源的一站式 AI 技能包，将专家级能力和上下文管理集成到通用技能包中，让任何 AI Agent 即刻升级功能，消除碎片化工具的摩擦。
logo: ''
author: foryourhealth111-pixel
ossDate: '2026-02-22T13:51:44Z'
featured: false
status: tracked
---

## 详细介绍

Vibe Skills 是一个开源的一站式 AI 技能包与自动编排框架，核心理念是将专家级能力、上下文管理和工作流编排打包为一个可插拔的技能束。用户只需安装后输入 `vibe`，框架便会自动接管全流程：理解意图、拆分阶段、调用对应专家技能、验证结果并保留跨会话上下文。内置 340+ 专家技能，覆盖规划、工程、AI、研究、创作等五大领域，并支持任意领域的新技能通过开放技能平面无缝接入。

## 主要特性

- 自动编排：Harness 层自动决策下一步行动，按阶段调用合适的专家技能，无需用户充当调度员。
- 340+ 专家技能：内置覆盖 TDD 指导、代码审查、数据分析、写作、研究支持等领域的技能集。
- 跨会话记忆：结构化存储项目信息、决策和证据，后续会话可直接延续上下文。
- 开放技能平面：新领域技能可接入同一工作流，未来可扩展到研究、设计、教育、金融、法律等方向。
- 验证驱动交付：工作成果需通过测试、检查或明确的人工审查才能标记为完成。
- 智能路由：340+ 技能间无冲突协作，框架根据任务阶段自动选择合适技能。

## 使用场景

- 软件开发全流程：从需求分析、方案设计到编码实现、测试验证，由 AI Agent 自动驱动。
- AI 辅助研究：利用内置研究技能进行文献调研、数据分析与报告生成。
- 多领域自动化：通过开放技能平面接入自定义领域技能，构建行业专属 AI 工作流。
- 团队知识沉淀：跨会话记忆系统保留项目决策和上下文，降低团队协作中的信息丢失。

## 技术特点

- 基于 Python 构建，VCO Runtime 作为核心运行时，提供 `vibe` 和 `vibe-upgrade` 入口命令。
- 采用分层架构：意图冻结 → 阶段规划 → 技能编排 → 证据验证 → 记忆保留。
- 支持 Claude Code、Codex 等多种 AI Agent 后端，提供统一的技能调用接口。
- 插件化技能设计，新技能只需遵循约定即可接入编排层，无需修改框架核心。
- 内置 TDD 工作流和代码审查流程，确保交付质量。
