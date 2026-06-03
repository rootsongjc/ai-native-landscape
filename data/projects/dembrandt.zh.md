---
name: Dembrandt
slug: dembrandt
homepage: null
repo: https://github.com/thevangelist/dembrandt
license: MIT
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Dev Tools
  - UI
  - Utility
description: 一个基于 Playwright 的命令行工具，用于从任意网站自动提取 logo、颜色、排版、间距与组件等设计 tokens 并导出结构化 JSON 文件。
author: thevangelist
ossDate: '2025-11-22T13:49:09Z'
featured: false
status: tracked
---
## 简介

Dembrandt 是一款基于 Playwright 的命令行工具，能在数秒内从任意公开网站抽取设计系统要素并导出为结构化的 design tokens（JSON）。它会渲染页面、收集计算样式、分析颜色与排版模式，并对结果赋予置信度评分，适合审计与文档化工作流程。

## 主要特性

- 一行命令自动提取 logo、语义色、调色板、CSS 变量、字体与排版信息。
- 自动识别间距比例、圆角、阴影与响应式断点。
- 输出含置信度元数据的 JSON 格式，支持 `--dark-mode`、`--mobile`、`--debug` 等选项。

## 使用场景

- 品牌审计与竞品分析，快速获取视觉规范要点。
- 建立或完善设计系统文档与 tokens 库。
- 多站点品牌合并与样式一致性检查及前端迁移参考。

## 技术特点

- 使用 Playwright 渲染页面并注入防检测脚本以提高兼容性。
- 从 DOM 提取计算样式、分析颜色使用频次并分组相似色，输出置信度评分。
- 并行运行多种提取器并等待 SPA hydration，确保动态内容被完整抓取。
