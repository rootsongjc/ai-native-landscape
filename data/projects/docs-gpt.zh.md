---
name: DocsGPT
slug: docs-gpt
homepage: https://app.docsgpt.cloud/
repo: https://github.com/arc53/docsgpt
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Agents
  - RAG
description: 一个开源的企业级文档智能体平台，结合 RAG 与多模型支持以提供带来源引用的文档问答。
logo: ''
author: arc53
ossDate: '2023-02-02T11:03:23Z'
featured: false
status: tracked
---

## 详细介绍

DocsGPT 是一个面向企业与研究的开源文档智能体平台，提供 Agent Builder、文档分析、深度检索与多模型接入能力。项目支持读取 PDF、DOCX、HTML、MD 等多种文档格式，并能从网址、站点地图或 GitHub 仓库中抓取内容。通过检索增强生成（RAG）与大语言模型（LLM）结合，DocsGPT 能输出带来源引用的可靠答案，并在 UI 中展示证据片段以提升可审计性。该项目既提供云端服务（[DocsGPT Cloud](https://app.docsgpt.cloud/)），也支持完整自托管与 Docker 部署，适合对隐私与治理有较高要求的场景。

## 主要特性

- 多格式文档解析：PDF、DOCX、PPTX、Markdown、HTML、CSV 等。
- 检索增强生成（RAG）：源自文档的证据引用以减少幻觉。
- 多模型与本地推理：兼容 OpenAI/Google/Anthropic，亦支持本地模型（如 Ollama）。
- 可执行工具与 API：支持连接外部工具、触发动作与生成可执行响应。

## 使用场景

适合企业文档检索、内部知识库问答、合规审计支持、法务与研发文档搜索等场景。团队可用于构建私有客服、文档驱动的智能搜索或作为内部智能体平台来自动化文档相关任务，并保持数据在企业控制下。

## 技术特点

- 后端以 Python 为主，前端使用 React/Vite，便于自托管与企业部署。
- 提供快速上手的 QuickStart 与 Docker 化部署脚本，支持在本地或云上运行。
- 支持 MCP 与 OAuth 集成，用于安全的工具与模型接入。
- MIT 许可证，社区活跃且有企业支持渠道与付费云版本（文档与演示见项目主页）。
