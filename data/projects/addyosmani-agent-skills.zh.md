---
name: Agent Skills
slug: addyosmani-agent-skills
homepage: null
repo: https://github.com/addyosmani/agent-skills
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
  - Vibe Coding
description: Agent Skills 是由 Google Chrome 团队工程师 Addy Osmani 开源的生产级工程技能集合，包含 20 个结构化工作流和 7 个斜杠命令，覆盖从需求定义到生产发布的完整开发生命周期。
logo: ''
author: Addy Osmani
ossDate: '2026-02-15T20:20:26Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Agent Skills 是由 Google Chrome 团队资深工程师 Addy Osmani 开发的开源项目，提供了一套生产级的工程技能体系，专为 AI 编码代理设计。项目核心理念是将资深工程师在软件开发中遵循的工作流、质量门控和最佳实践编码为结构化技能，使 AI 代理在开发的每个阶段都能一致地执行这些规范。整个技能集包含 20 个核心技能、7 个斜杠命令、3 个专家代理角色和 4 份参考清单，覆盖从需求定义（Define）、规划（Plan）、构建（Build）、验证（Verify）、审查（Review）到发布（Ship）的完整软件开发生命周期。

## 主要特性

- 20 个结构化技能：每个技能包含步骤、检查点和退出条件，代理按流程执行而非随意跳过。
- 7 个斜杠命令：/spec、/plan、/build、/test、/review、/code-simplify、/ship，映射到开发生命周期的各个阶段。
- 反合理化机制：每个技能包含常见借口及其反驳论据表，防止代理跳过测试、安全审查等关键步骤。
- 多平台兼容：支持 Claude Code、Cursor、Gemini CLI、Windsurf、GitHub Copilot、Kiro 等主流 AI 编码工具。
- 3 个专家代理角色：代码审查员（高级 Staff 工程师视角）、测试工程师（QA 专家）、安全审计员。

## 使用场景

- 在 Claude Code 中通过插件市场安装，为 AI 编码代理提供端到端的工程规范。
- 团队将技能集集成到 Cursor 或 Copilot 中，统一编码标准和质量门控。
- 个人开发者利用技能工作流提升 AI 辅助编程的输出质量，从原型级提升到生产级。
- 工程团队参考其技能结构，构建内部定制化的 AI 编码代理技能体系。

## 技术特点

- 每个技能遵循统一的 SKILL.md 格式：前置元数据、概述、触发条件、流程步骤、合理化反驳表、红旗信号和验证要求。
- 融入 Google 工程文化中的最佳实践：API 设计中的 Hyrum 定律、测试中的 Beyonce 规则和测试金字塔、代码审查中的变更规模控制、CI/CD 中的左移策略等。
- 采用渐进式披露设计，SKILL.md 作为入口，参考清单按需加载，最小化 token 消耗。
- 技能为纯 Markdown 格式，可与任何接受系统提示或指令文件的代理兼容，MIT 许可证开源。
