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

LangExtract 是 Google 推出的 Python 库，利用大语言模型从非结构化文本中提取结构化信息，并提供精确的来源定位。它生成可验证的抽取结果并附带交互式 HTML 可视化，非常适合医疗、法律和科研等领域的长文档处理。

## 主要特性

每条抽取结果都链接回原文的精确位置，便于验证和可视化审查。该库采用示例驱动的抽取模式，只需少量高质量示例即可定义复杂的抽取模板。它支持 Gemini、OpenAI 等云模型以及通过 Ollama 进行本地推理，并通过分块、并行执行和多轮策略优化长文档处理。

## 使用场景

从业者使用 LangExtract 将病历、药物记录等临床文本结构化。它能从法律文档和合同中提取条款、实体和关系，并保持完整的可追溯性。团队还依赖它从大型档案中批量提取实体，以及为 RAG 管道进行数据预处理。

## 技术特点

LangExtract 采用基于提示和示例的抽取方法，结合多轮策略最大化召回率和稳健性。它以 JSONL 等格式输出强类型结果，便于下游系统无缝消费。插件化的模型提供者系统使得在不同推理后端之间切换无需修改抽取逻辑。
