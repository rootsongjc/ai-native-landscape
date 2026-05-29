---
name: GPT Researcher
slug: gpt-researcher
homepage: https://gptr.dev/
repo: https://github.com/assafelovic/gpt-researcher
license: Unknown
category: agents
subCategory: agent-orchestration
tags:
  - Framework
description: 基于多代理与检索的深度研究代理，自动化网页与本地文档检索并生成带来源的研究报告。
logo: ''
author: assafelovic
ossDate: '2023-05-12T10:33:54.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

GPT Researcher 是一个面向深度研究的多代理框架，能够并行化地从网页与本地文档抓取信息，生成带来源与引用的详尽研究报告，适合学术或行业调研场景。

## 主要特性

- 支持并行代理（planner/executor/publisher）协作，形成树状深度探索（Deep Research）。
- 集成 Web 抓取、图像采集与上下文记忆，能生成超过 2000 字的长篇报告并导出为 PDF/Word/Markdown。
- 提供 TaskBench、MCP 集成与多种部署方式（PIP、Docker、前端 NextJS）。

## 使用场景

- 自动化市场/学术调研，快速搜集多源证据并生成可审计报告。
- 基于本地文档的专属领域研究与知识提取。
- 研究工具链评估与 LLM 任务自动化基准测试。

## 技术特点

- 以 Python 为主实现，前端提供轻量与生产级两个版本（HTML 静态/NextJS）。
- 支持 `local`/`huggingface`/`hybrid` 等检索与推理模式，并拥有 MCP 客户端扩展。
- 开源许可（Apache-2.0），社区活跃并提供详尽文档与示例。
