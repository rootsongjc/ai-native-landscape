---
name: Open Notebook
slug: open-notebook
homepage: https://www.open-notebook.ai
repo: https://github.com/lfnovo/open-notebook
license: Unknown
category: models-modalities
subCategory: multimodal
tags:
  - Application
  - Multimodal
description: 一个开源且注重隐私的笔记与研究管理平台，支持多模型接入与多模态内容管理。
author: Luis Novo
ossDate: '2024-10-21T17:58:46.000Z'
featured: false
status: tracked
---

## 简介

Open Notebook 是一个开源、自托管的研究与笔记平台，强调数据隐私与可控性。项目支持多种 AI 提供商接入，能够将 PDF、音频、视频、网页等多模态内容组织为可检索的研究资料，并通过内置的对话与笔记功能将内容转化为可复用的知识。

## 主要特性

- 隐私优先：支持本地部署与多种后端模型，数据掌控在使用者手中。
- 多模型兼容：兼容多家模型提供商，便于在成本与效果间切换。
- 多模态管理：支持文档、音频、视频等多类型内容的索引与检索。
- 部署友好：提供 Docker 与完整的 REST API，便于在多种环境中运行。

## 使用场景

- 个人或团队的研究资料管理与知识库搭建。
- 基于文献与资料进行的上下文驱动对话与信息抽取。
- 用于构建可控的原型、测试多模型能力或演示多模态工作流。

## 技术特点

- 使用前端与后端分离架构（Next.js + FastAPI），支持可扩展的插件与内容转换流水线。
- 支持向量检索与全文搜索，结合模型生成实现检索增强生成（RAG）场景。
- MIT 许可证、社区活跃且持续迭代，适合二次开发与集成。
