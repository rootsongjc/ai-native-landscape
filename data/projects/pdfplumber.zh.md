---
name: pdfplumber
slug: pdfplumber
homepage: null
repo: https://github.com/jsvine/pdfplumber
license: Unknown
category: rag-knowledge
subCategory: document-processing
tags:
  - Dev Tools
  - Tool
description: 基于 pdfminer.six 的开源 Python 库，提供详细的 PDF 对象访问、表格抽取与可视化调试功能。
author: jsvine
ossDate: '2015-08-24T03:14:48.000Z'
featured: false
status: tracked
---

## 详细介绍

pdfplumber 是一个开源的 Python 库，构建在 `pdfminer.six` 之上，提供对 PDF 文件中字符、线条、矩形等底层对象的访问，并支持文本提取、表格抽取与可视化调试等高级功能，适用于机器生成的 PDF 分析场景。

## 主要特性

- 精细的对象级访问：可以获取每个字符（char）、线（line）、矩形（rect）及其坐标信息。
- 表格抽取：提供多种策略（lines/text/explicit）和可配置参数以提高表格识别准确率。
- 可视化调试：将页面渲染为图片并叠加检测结果，便于调试表格与布局抽取行为。

## 使用场景

- 从结构化、机器生成的 PDF 中抽取表格数据并导出为 CSV/JSON。
- 对 PDF 布局进行分析（字符、行、矩形定位），用于文本坐标抽取、批注解析等。
- 在数据处理流水线中结合脚本化工具对大量文档进行批量解析与验证。

## 技术特点

- 基于 `pdfminer.six` 的布局分析能力，结合自研的表格检测算法。
- 提供命令行工具以及 Python API，两者均支持自定义参数和脚本化处理。
- 活跃的开源社区与详细文档（README、示例 notebooks），维护良好并在实际工程中被大量依赖。
