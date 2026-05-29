---
name: Skill Seeker
slug: skill-seeker
homepage: null
repo: https://github.com/yusufkaraaslan/skill_seekers
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Dev Tools
description: 将网站文档、GitHub 仓库和 PDF 自动转换为可上传的 Claude 技能包，支持冲突检测与本地增强。
logo: ''
author: Yusuf Karaaslan
ossDate: '2025-10-17T14:43:48Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Skill Seeker 是一款开源工具，能将网站文档、GitHub 仓库和 PDF 自动抓取、解析并增强为 Claude AI 可用的技能包（.zip）。项目集成深度代码分析（AST）、冲突检测与 AI 增强流程，支持本地化增强（无需外部 API 成本）并提供 MCP 集成以便在 Claude Code 中直接使用。

## 主要特性

- 自动化抓取：支持多源（文档网站、仓库、PDF）统一抓取与分类。
- 冲突检测：比较文档与代码实现，生成差异与警告报告。
- AI 增强：使用本地或可选 API 对 SKILL.md 进行补充与示例提取。
- 打包上传：输出可直接上传到 Claude 的技能包（.zip）。

## 使用场景

- 为大型框架或产品快速生成使用手册与交互技能。
- 将内部文档与代码合并成团队可用的 AI 助手与知识库。
- 教学与示例归档：从示例代码和文档生成易于查询的参考资料。

## 技术特点

- 语言：Python（兼容 3.10+），提供 CLI 与 MCP 服务。
- 性能：支持异步模式与并行抓取，适应 10k+ 页面的大型文档库。
- 扩展性：预置多种配置模板（React、Django、Godot 等），并支持自定义规则与并发策略。
