---
name: Agent Skills
slug: agent-skills
homepage: https://agentskills.io/
repo: https://github.com/vercel-labs/agent-skills
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
  - Project
description: 一个将可复用技能（SKILL）打包为指令与脚本，让智能体扩展能力的开源集合。
logo: ''
author: Vercel
ossDate: '2025-12-08T19:10:06Z'
featured: false
status: tracked
---

## 详细介绍

Agent Skills 是一个将可复用技能（Skill）打包为说明与脚本的开源集合，旨在为智能体提供即插即用的功能模块。每个技能定义了触发条件、输入/输出和执行步骤，方便智能体在对话或任务执行中调用特定能力，从而简化复杂任务的拆解与自动化。

## 主要特性

- 将操作指令和辅助脚本以 Skill 格式组织，便于共享与复用。
- 支持丰富的技能类型（部署、代码审查、格式化等），覆盖常见工程与运维场景。
- 与常见智能体运行时兼容，能在检测到相关任务时自动调用匹配技能。

## 使用场景

- 在对话式智能体中扩展能力，例如自动部署、代码审计或网站性能检查。
- 将重复性操作封装为技能，降低人为误差并提升效率。
- 将技能库作为开发者工具，快速为内部智能体或协作机器人添加新功能。

## 技术特点

- 基于文本化的 Skill 规范，包含 `SKILL.md` 指令与可选脚本目录。
- 可通过包管理（如 npm）或一键安装方式集成到智能体平台。
- 设计为轻量、可组合的模块，便于与现有工作流和 CI/CD 集成。
