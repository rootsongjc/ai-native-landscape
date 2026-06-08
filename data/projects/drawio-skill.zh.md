---
name: drawio-skill
slug: drawio-skill
homepage: https://agents365-ai.github.io/drawio-skill/
repo: https://github.com/Agents365-ai/drawio-skill
license: MIT
category: coding-devtools
subCategory: developer-utilities
tags:
  - Drawio
  - 图表
  - 架构图
  - Claude Code
  - UML
  - 流程图
  - ERD
  - 智能体技能
description: 从自然语言生成 draw.io 图表，支持 6 种预设、视觉自检与最多 5 轮自动优化，包含 10,000+ 官方图形和 321 个 AI/LLM 品牌图标。
author: Agents365-ai
ossDate: '2026-03-03T16:54:59.000Z'
featured: false
status: tracked
---

## 简介

drawio-skill 是一个 Claude Code 技能，可从自然语言描述生成专业的 draw.io 图表。它提供 6 种预设图表类型、基于视觉的自检机制、最多 5 轮自动优化、代码库到图表的转换功能，以及包含 10,000+ 官方图形和 321 个 AI/LLM 品牌图标的图形库。

## 主要特性

- **6 种图表预设**：架构图、流程图、UML、ERD、时序图和网络图，带有优化的布局默认值
- **视觉自检 + 自动优化**：自动验证生成的图表视觉效果，最多迭代 5 轮以确保质量
- **代码库转图表**：分析源代码仓库并自动生成架构图
- **10,000+ 图形库**：包含 draw.io 官方图形和 321 个 AI/LLM 品牌图标
- **多格式导出**：支持 PNG、SVG、PDF 和 JPG 输出格式

## 使用场景

- **系统设计文档**：在设计会话中从自然语言描述生成架构图
- **代码库可视化**：从现有代码仓库自动生成架构概览
- **技术文档**：为博客文章、演示文稿和内部文档创建一致的品牌化图表

## 技术特点

- 基于 skill-md 规范构建，兼容 SkillsMP 和 OpenClaw 生态系统
- 使用视觉反馈循环在最终输出前验证图表正确性
