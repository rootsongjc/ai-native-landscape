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
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

DocuTranslate 是一款面向文件翻译场景的轻量化工具，结合大语言模型（LLM）与多种文档解析引擎，提供从文件解析、语义翻译到导出的一体化流水线。它支持 PDF、DOCX、XLSX、JSON、EPUB、SRT 等常见格式，并通过可选的本地 `docling` 引擎或在线 `minerU` 引擎完成 PDF 解析，满足离线与在线两种部署需求。

## 主要特性

- 多格式支持：pdf、docx、xlsx、md、json、epub、srt 等，保留表格与公式结构。
- 可选解析引擎：在线 `minerU`（免安装）与本地 `docling`（适合离线/高隐私场景）。
- 工作流化设计：基于可配置的 Workflow 抽象，按文件类型选择转换→翻译→导出流程。
- Web UI 与 API：内置交互式 Web 界面和 REST API，便于本地部署与集成。

## 使用场景

适用于学术论文、技术文档、小说或字幕等多种文档的自动化翻译场景。团队可在本地或内网部署服务，利用流水线将原始文件批量转换为 Markdown/HTML 并导出翻译结果；个人用户也可使用发布的独立包或在线 Demo 快速试用。

## 技术特点

- 多 AI 平台兼容：可接入 OpenAI、Zhipu、Qwen 等主流平台以执行翻译任务。
- 异步与并发：设计支持异步翻译与并发处理，适合大规模文档场景。
- 可扩展导出：支持导出为 HTML、Markdown、ZIP、DOCX 等格式，便于后续编辑与发布。
- 本地优先：提供 Docker 与本地二进制包，结合本地索引与缓存机制减少重复解析开销。
