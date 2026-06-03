---
name: fuck-u-code
slug: fuck-u-code
homepage: null
repo: https://github.com/done-0/fuck-u-code
license: MIT
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Benchmark
description: 一款用于评估代码‘混乱度’并生成可读报告的静态分析工具，支持多语言和 Markdown 输出。
author: Done-0
ossDate: '2025-06-25T16:40:22.000Z'
featured: false
status: tracked
---
## 简介

fuck-u-code 是一款面向代码质量评估的静态分析工具，能够以“混乱度”（legacy-mess）指标评估代码库并生成可视化的 Markdown 报告，支持 Go/JS/TS/Python/Java/C/C++ 等多种语言。工具注重本地运行与输出可读报告，适用于 CI/CD 报告、代码审查与技术债务统计。

## 主要特性

- 多语言支持：Go 为主，兼容 JS/TS、Python、Java、C/C++ 等。
- 混乱度评分：对代码复杂度、函数长度、注释率、错误处理等维度给出综合评分。
- 可配置输出：支持 Markdown 报告、摘要视图与详细问题列表。
- 本地与容器运行：支持二进制安装与 Docker 构建，便于集成到 CI 流水线。

## 使用场景

- 持续集成报告：在 CI 中运行以获取代码质量趋势与问题清单。
- 代码审查辅助：为 PR 提供量化的质量指标，帮助评审聚焦高风险区域。
- 团队质量监测：定期生成报告以追踪技术债务与重构优先级。

## 技术特点

- 以 Go 开发，单一可执行文件便于分发与集成。
- 提供丰富的命令行参数（如 --top、--issues、--markdown、--lang）以支持定制化分析。
- 输出侧重可读性，支持将分析结果导出为 Markdown 以便上报与展示。
