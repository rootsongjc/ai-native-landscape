---
name: spaCy
slug: spacy
homepage: https://spacy.io
repo: https://github.com/explosion/spacy
license: MIT
category: rag-knowledge
subCategory: document-processing
tags:
  - Dev Tools
description: 高性能、面向生产的开源自然语言处理库，提供预训练流水线、训练系统与丰富的语言组件。
author: Explosion
ossDate: '2014-07-03T15:15:40Z'
featured: false
status: tracked
---

spaCy 是由 Explosion 开发的工业级自然语言处理库，专注于生产环境的性能、可维护性和易部署性。它内置 70 多种语言的预训练流水线，开箱即用提供分词、词性标注、依存句法分析、命名实体识别和文本分类等核心 NLP 功能。

## 主要特性

- 使用 Cython 优化的底层实现，提供大规模文本处理的高吞吐能力
- 完善的模型管理系统支持版本控制和一键部署
- 完全可扩展的流水线架构，原生支持 Transformer 模型和 LLM 集成
- 提供生产就绪的训练系统，用于构建自定义 NLP 组件
- 预置 70+ 语言的流水线，覆盖核心 NLP 任务

## 使用场景

- 生产环境中的日志处理、内容分类、实体抽取和搜索索引等文本流水线
- 从非结构化文档中提取信息以构建知识图谱
- 构建对话式 AI 的预处理层和意图识别系统
- 借助丰富的教程、项目模板和在线交互课程进行 NLP 教学

## 技术特点

- 采用 Python 与 Cython 混合实现，在开发体验和原始处理速度之间取得平衡
- 与 Hugging Face Transformers 生态原生互通并支持多种深度学习后端
- 以宽松的 MIT 许可证发布，由活跃社区持续维护
- 附带可复现的项目模板和生产部署指南
