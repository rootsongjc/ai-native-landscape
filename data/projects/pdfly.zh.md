---
name: pdfly
slug: pdfly
homepage: https://pdfly.readthedocs.io
repo: https://github.com/py-pdf/pdfly
license: BSD-3-Clause
category: rag-knowledge
subCategory: document-processing
tags:
  - Application
  - CLI
  - Dev Tools
description: 基于命令行的 PDF 元数据提取与处理工具，适用于批量自动化文档处理任务。
author: py-pdf
ossDate: '2022-04-09T20:49:42Z'
featured: false
status: tracked
---

pdfly 是一个轻量级命令行工具，用于从 PDF 中提取元数据并批量执行常见的 PDF 操作。它提供可脚本化的命令，可自然地融入自动化流水线、CI 任务和批处理工作流，无需编写自定义解析代码即可完成 PDF 处理。

## 提取能力

- 通过单条命令快速提取单个或多个 PDF 的文档元数据、文本内容和结构化信息
- 面向批处理的 CLI 设计，适合在 CI/CD 或数据管道中进行脚本化和无人值守执行
- 可配置的输出格式和处理选项，适应归档、索引或分析等不同需求

## 集成与自动化

- 融入 CI/CD 流水线，实现自动化文档处理和验证
- 适用于 OCR 后处理流程，在下游分析之前对 PDF 进行检查和转换
- 自动提取和索引大规模文档归档中数千份 PDF 的元数据

## 技术设计

- 基于成熟的 PDF 解析库用 Python 构建
- 同时提供 CLI 和可编程 API 以兼顾灵活性
- BSD-3-Clause 许可证发布，文档托管在 Read the Docs 上
