---
name: LangExtract
slug: langextract
homepage: null
repo: https://github.com/google/langextract
license: Apache-2.0
category: rag-knowledge
subCategory: document-processing
tags:
  - Framework
  - LLM
description: 一个基于 LLM 的文档结构化抽取库，擅长从非结构化文本中提取并可视化结构化信息。
author: Google
ossDate: '2025-07-08T20:46:06.000Z'
featured: false
status: tracked
---

LangExtract 是 Google 推出的 Python 库，利用大语言模型从非结构化文本中提取结构化信息，并提供精确的来源定位。它生成可验证的抽取结果并附带交互式 HTML 可视化，非常适合医疗、法律和科研等领域的长文档处理。

## 核心能力

- **来源锚定的抽取结果**，每条提取内容都链接回原文的精确位置，便于验证和审计
- **示例驱动的抽取模式**，只需少量高质量示例即可定义复杂模板，无需编写规则
- **多模型支持**，覆盖 Gemini、OpenAI 等云模型以及通过 Ollama 进行本地推理
- **长文档优化**，通过智能分块、并行执行和多轮策略高效处理超长文本
- **交互式 HTML 可视化**，用于审查、审计和浏览抽取结果

## 使用场景

- 将病历、药物记录、出院小结等临床文本结构化
- 从法律文档和合同中提取条款、实体和关系，并保持完整的可追溯性
- 从大型档案中批量提取实体，用于下游分析和知识图谱构建
- 为 RAG 管道预处理非结构化数据，提供强类型和模式约束

## 技术特点

- 基于提示和示例的抽取方法，结合多轮策略最大化召回率和稳健性
- 以 JSONL 等格式输出强类型结果，便于下游系统无缝消费
- 插件化的模型提供者系统，在不同推理后端之间切换无需修改抽取逻辑
