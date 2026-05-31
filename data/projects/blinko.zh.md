---
name: Blinko
slug: blinko
homepage: https://blinko.space
repo: https://github.com/blinkospace/blinko
license: Unknown
category: applications-products
subCategory: productivity-tools
tags:
  - Application
  - Data
description: Blinko 是一款开源的自托管 AI 卡片笔记工具，强调隐私与快速检索。
logo: ''
author: BlinkoSpace
ossDate: '2024-10-23T10:04:59Z'
featured: false
status: tracked
---

## 详细介绍

Blinko 是一款面向个人知识管理的开源卡片笔记应用，支持本地/自托管部署并以隐私为优先。Blinko 结合检索增强生成（RAG, Retrieval-Augmented Generation）和大语言模型（LLM）能力，允许用户用自然语言快速检索、生成与组织笔记，同时将数据保存在用户控制的环境中，适合注重数据所有权的个人与团队使用。

## 主要特性

- AI 驱动的笔记检索与增强，支持自然语言查询与语义搜索。
- 数据自托管，配置与存储可在用户控制的环境中运行以保护隐私。
- 轻量跨平台，基于 Tauri 支持 macOS、Windows、Linux 与移动端部署。
- 开源协作：社区贡献、文档与在线演示（Demo）可直接使用。

## 使用场景

适用于要捕捉零碎想法并希望通过语义检索快速访问笔记的个人或团队。可作为个人知识库、写作草稿管理、会议记录归档或与 RAG 流程集成的轻量笔记后端；也可用于离线或自托管的隐私优先工作流。

## 技术特点

- 模型兼容性：可接入 OpenAI/Anthropic 等主流模型用于增强检索与生成。
- 存储与索引：支持将文本以 Markdown 存储并建立语义索引以加速查询。
- 部署便捷：提供 Docker 快速部署脚本与本地开发说明。
- 现代前端栈：基于 Next.js、React 与 Tauri 构建，便于扩展与本地体验优化。
