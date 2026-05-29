---
name: PandaWiki
slug: pandawiki
homepage: https://pandawiki.docs.baizhi.cloud/
repo: https://github.com/chaitin/pandawiki
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - RAG
description: PandaWiki 是一个基于大模型驱动的开源知识库系统，帮助快速搭建面向文档、FAQ 与博客的智能知识中心。
logo: ''
author: Chaitin
ossDate: '2025-05-15T12:55:40.000Z'
featured: false
status: tracked
---

## 简介

PandaWiki 是由 Chaitin 开发的开源知识库系统，结合大模型能力，帮助团队快速搭建面向产品文档、FAQ 与博客的智能知识中心。它支持从网页、RSS 与文件等多源导入内容，通过向量检索与检索增强生成（RAG）为上层应用提供高质量的知识问答与内容搜索能力。

## 主要特性

- 多源导入与格式兼容：支持 Markdown、HTML、Word、PDF 等常见文档格式的批量导入与解析。
- 大模型驱动检索：基于向量索引与上下文拼接实现增强问答与语义搜索。
- 可嵌入与可扩展：提供前端插件与 SDK，便于将知识库嵌入网站或聊天机器人中。

## 使用场景

- 将产品文档、FAQ 与博客内容组织为智能知识库，提升用户自助服务效果。
- 在企业内部构建面向员工的知识发现与问答系统，减少重复沟通成本。
- 结合搜索与问答场景，为客服、培训与文档支持提供智能辅助。

## 技术特点

- 以 TypeScript/Go 为主的多语言后端实现，面向容器化部署与 CI 集成。
- 支持向量化索引、RAG 流水线与可配置的检索管道，易于对接外部模型与向量数据库。
