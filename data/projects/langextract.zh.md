---
name: LangExtract
slug: langextract
homepage: null
repo: https://github.com/google/langextract
license: Unknown
category: models-modalities
subCategory: foundation-models
tags:
  - Framework
  - LLM
description: 一个基于 LLM 的文档结构化抽取库，擅长从非结构化文本中提取并可视化结构化信息。
logo: ''
author: Google
ossDate: '2025-07-08T20:46:06.000Z'
featured: false
status: tracked
---

## 简介

LangExtract 是一个由 Google 发布的 Python 库，使用大语言模型（LLM）将非结构化文本提取为结构化数据，并支持精确的来源定位与交互式可视化，适合处理医学、法律、文档理解等长文本场景。

## 主要特性

- 精确来源定位：每条抽取都关联回原文位置，便于人工校验与可视化。
- 可配置的抽取任务与示例驱动：通过少量示例即可定义复杂抽取模板。
- 支持云端模型与本地推理：兼容 Gemini、OpenAI 等云模型，并支持 Ollama 等本地模型。
- 大文档优化：分块并行处理与多轮抽取提升召回率。

## 使用场景

- 医疗文本结构化（比如病历、药物信息抽取）。
- 法律文档与合同要素抽取。
- 大规模档案或书籍中实体与关系的批量抽取。
- 构建面向业务的 RAG 前处理或数据标注验证工具。

## 技术特点

- 基于 LLM 的提示与示例驱动抽取，结合多轮抽取策略提高稳健性。
- 输出强类型化的结构以便下游系统消费（JSONL 等格式）。
- 提供交互式 HTML 可视化工具以审阅抽取结果。
- 插件化模型提供者系统，便于接入不同推理后端。
