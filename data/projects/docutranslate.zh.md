---
name: DocuTranslate
slug: docutranslate
homepage: https://pypi.org/project/docutranslate/
repo: https://github.com/xunbu/docutranslate
license: Unknown
category: platform-infra
subCategory: data-platforms
tags:
  - Data
  - Dev Tools
description: DocuTranslate 是一款基于大语言模型的轻量化文档翻译工具，支持多种文档格式与本地/在线解析引擎。
logo: ''
author: xunbu
ossDate: '2025-05-08T08:16:40Z'
featured: false
status: tracked
---

## 简介

DocuTranslate 是一款轻量化文档翻译工具，结合大语言模型（LLM）与多种解析引擎，支持 PDF、Word、Excel、JSON、EPUB、SRT 等格式的翻译。它提供从文件解析、语义翻译到导出的一体化流水线，适用于小说、论文与字幕等场景。

## 主要特性

- 多格式支持：PDF、DOCX、XLSX、Markdown、JSON、EPUB、SRT，保留表格与公式结构。
- 可选解析引擎：在线 `minerU`（免安装）与本地 `docling`（适合离线/高隐私场景）。
- 工作流化设计：按文件类型配置转换、翻译、导出流水线，内置 Web UI 与 REST API。

## 使用场景

- 学术论文、技术文档、小说或字幕等多种文档的自动化翻译。
- 团队本地或内网部署，批量转换并导出为 Markdown/HTML 以供发布。
- 个人用户使用独立包或在线 Demo 快速完成单次翻译。

## 技术特点

- 兼容 OpenAI、Zhipu、Qwen 等多个 AI 平台执行翻译任务。
- 异步与并发设计，适合大规模文档的高吞吐翻译场景。
- 本地优先：提供 Docker 与独立二进制包，结合缓存机制减少重复解析开销。
