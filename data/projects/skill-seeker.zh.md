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
status: tracked
---

## 简介

Skill Seeker 是一款开源工具，能够自动抓取文档网站、GitHub 仓库和 PDF，并将其增强、打包为 Claude AI 可直接使用的技能 ZIP 文件。它集成了 AST 级别的深度代码分析和冲突检测，确保生成的技能准确反映底层代码实现。

## 主要特性

Skill Seeker 支持从文档网站、代码仓库和 PDF 等多种来源进行统一抽取，并内置冲突检测机制，自动发现文档与代码之间的不一致之处。它提供本地 AI 增强功能来补充 SKILL.md 中的实用示例，最终输出可直接上传至 Claude 技能系统的打包 ZIP 文件。

## 使用场景

开发者可以快速为 React、Django、Godot 等流行框架生成可复用的技能，无需手动整理。团队能够将分散的内部文档和代码库整合为结构化的 AI 助手，教育工作者也能基于现有教学材料生成可搜索的学习资源。

## 技术特点

基于 Python 3.10+ 构建，同时提供 CLI 工具和可选的 MCP 服务器以集成 Claude Code。采用异步并行抓取机制，可处理数万页面级别的大型文档库，并预置了常见框架的配置模板，支持用户自定义抓取规则。
