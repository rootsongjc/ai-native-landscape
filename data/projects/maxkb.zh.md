---
name: MaxKB
slug: maxkb
homepage: https://maxkb.cn
repo: https://github.com/1panel-dev/maxkb
license: Unknown
category: applications-products
subCategory: low-code-builders
tags:
  - Agent
  - RAG
description: MaxKB：开源的企业级智能体平台，支持 RAG、Agent 工作流和多模态输入，适用于企业知识库和客服场景。
author: 1Panel
ossDate: '2023-09-14T02:05:12Z'
featured: false
status: tracked
---

## 简介

MaxKB 是一个面向企业的开源智能体平台，目标是让企业能够快速构建和部署智能问答、知识库与 Agent 工作流。它集成了 RAG（检索增强生成）管道、工作流引擎和多模型适配能力，支持本地部署与容器化运行，注重企业级可用性与安全性。该项目在国内外社区活跃，适合需要内部知识管理、客服自动化或研究实验的场景。

## 主要特性

- 原生 RAG 管道：支持文档上传、自动切分、向量化和检索，减少模型幻觉。
- Agent 工作流：内置流程编排和工具调用能力，支持复杂业务场景的自动化执行。
- 多模态支持：支持文本、图片、音频与视频输入输出，便于构建富媒体问答系统。
- 容器化与云原生：提供 Docker 镜像与部署方案，方便集成到现有基础设施。

## 使用场景

1. 企业知识库与内部问答：将内部文档接入 MaxKB，实现面向员工的智能问答。
2. 智能客服与工单自动化：通过 Agent 工作流处理复杂的客服场景，提升响应效率。
3. 学术与研究实验平台：提供可复现的 RAG 流水线与模型适配接口，便于研究和对比实验。

## 技术特点

MaxKB 基于 Python/Django 与前端 Vue 进行开发，使用 PostgreSQL 和 pgvector 作为常见后端存储方案。项目同时兼容多种 LLM 平台（公有云或私有模型），并以插件式的方式扩展工具与数据接入。其许可证为 GPL-3.0，适合开源或内部部署场景。
