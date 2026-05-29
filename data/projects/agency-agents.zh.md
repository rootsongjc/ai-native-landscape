---
name: Agency Agents
slug: agency-agents
homepage: null
repo: https://github.com/msitarzewski/agency-agents
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Agents
  - Dev Tools
description: Agency Agents 是一个包含 147+ 个专业化 AI 智能体角色的开源合集，覆盖工程、设计、营销、销售、产品等 12 个部门，可一键集成 Claude Code、Cursor、Copilot 等主流 AI 编程工具。
logo: ''
author: msitarzewski
ossDate: '2025-03-01T00:00:00.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Agency Agents（简称 The Agency）是一个精心策划的开源 AI 智能体角色集合，包含 147+ 个专业化 Agent，横跨工程、设计、付费媒体、销售、营销、产品、项目管理、测试、支持、空间计算、专业化及金融等 12 个部门。每个 Agent 都具备独特的个性、明确的工作流程与可交付成果，可直接安装到 Claude Code、Cursor、GitHub Copilot、Aider、Windsurf、Gemini CLI、OpenCode 等主流 AI 编程工具中使用。

## 主要特性

- 147+ 个专业化 Agent 覆盖 12 个部门，从前端开发到法律合规应有尽有。
- 原生支持 Claude Code（直接复制到 ~/.claude/agents/），同时兼容 Cursor、Copilot、Aider、Windsurf、Gemini CLI 等 10+ 款工具。
- 每个 Agent 包含完整的身份定义、核心使命、技术交付物、工作流程和成功度量指标。
- 提供自动化脚本一键安装与转换，支持并行处理以加速部署。
- MIT 开源协议，可自由商用与定制。

## 使用场景

- 创业团队组建虚拟 MVP 开发小组，快速交付产品原型。
- 企业级功能开发中充当质量保障与项目管理角色，建立交付标准。
- 营销团队借助专业化 Agent 执行多平台内容策略与社区运营。
- 个人开发者根据任务需求灵活切换不同专家角色，提升编码效率。

## 技术特点

- 每个 Agent 以独立 Markdown 文件定义，结构化的 frontmatter 与内容格式便于维护与扩展。
- 提供 convert.sh 脚本可将 Agent 转换为不同工具所需的格式（.mdc、SKILL.md、YAML 等）。
- install.sh 脚本自动检测系统中已安装的工具并提供交互式选择界面。
- Agent 设计哲学强调个性化（非通用模板）、可交付物导向（具体代码与流程）与生产就绪（经过实战验证）。
