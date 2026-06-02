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
status: tracked
---

## 简介

spaCy 是由 Explosion 开发的工业级自然语言处理库，专注于生产环境的性能、可维护性和易部署性。它内置 70 多种语言的预训练流水线，开箱即用提供分词、词性标注、依存句法分析、命名实体识别和文本分类等核心 NLP 功能。

## 主要特性

spaCy 使用 Cython 优化的底层实现提供大规模文本处理的高吞吐能力，配合完善的模型管理系统支持版本控制和一键部署。其流水线架构完全可扩展，原生支持 Transformer 模型和 LLM 集成，并提供生产就绪的训练系统用于构建自定义 NLP 组件。

## 使用场景

工程团队在生产中使用 spaCy 构建日志处理、内容分类、实体抽取和搜索索引等文本流水线。它也被广泛用于从非结构化文档中提取信息以构建知识图谱，以及凭借丰富的教程、项目模板和在线交互课程作为 NLP 教学平台。

## 技术特点

库采用 Python 与 Cython 混合实现，在开发体验和原始处理速度之间取得平衡。它与 Hugging Face Transformers 生态原生互通并支持多种深度学习后端，以宽松的 MIT 许可证发布并由活跃社区持续维护，附带可复现的项目模板和生产部署指南。
