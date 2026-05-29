---
name: spaCy
slug: spacy
homepage: https://spacy.io
repo: https://github.com/explosion/spacy
license: Unknown
category: rag-knowledge
subCategory: data-connectors
tags:
  - Dev Tools
description: 高性能、面向生产的开源自然语言处理库，提供预训练流水线、训练系统与丰富的语言组件。
logo: ''
author: Explosion
ossDate: '2014-07-03T15:15:40Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

spaCy 是由 Explosion 开发的工业级自然语言处理（NLP）库，专注于生产环境中的速度、可扩展性与可维护性。它提供 70+ 语言的预训练流水线、分词、词性标注、依存句法、实体识别、文本分类等组件，并支持与 Transformer/大型模型集成，方便将研究成果工程化为可部署的服务。详见项目官网与文档：[spaCy Docs](https://spacy.io)。

## 主要特性

- 高性能：Cython 与优化实现，适合大规模文本处理。
- 丰富的预训练流水线与模型管理，支持模型打包部署与版本控制。
- 完备的训练系统与可扩展组件，便于自定义管线与任务。
- LLM 集成：支持将大语言模型作为流水线组件或外部后端调用。

## 使用场景

- 生产级文本处理管道：日志分析、内容分类、实体识别与索引构建。
- 信息抽取与知识抽取：从海量文本中提取结构化实体与关系。
- 训练与研究：自定义模型训练、评估与迁移学习实验。
- 教学与演示：配套教程、项目模板与在线课程，帮助快速上手。

## 技术特点

- 支持 Python 与 Cython 混合实现以兼顾易用性与性能。
- 与 Transformers 生态互通，支持多种深度学习后端与模型格式。
- 丰富的文档、示例与可复现的项目模板，便于工程化集成与持续交付。
- 采用 MIT 许可并由活跃社区维护，提供长期支持与企业服务选项。
