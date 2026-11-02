---
name: utopia
slug: utopia
homepage: null
repo: https://github.com/deeplethe/utopia
license: Apache-2.0
category: models-modalities
subCategory: foundation-models
tags:
  - Knowledge Graph
  - Bitemporal
  - RAG
  - MCP
description: >-
  DeepLethe 出品的开源企业级世界模型：一个双时态知识图谱，被动地从你的材料中学习，把本体与时间感知放进
  基础层，以单个 Rust 二进制加 Postgres 的形态离线部署。
author: deeplethe
ossDate: '2026-08-07'
featured: false
status: tracked
---

## 简介

Utopia 由 DeepLethe 打造，定位为首个开源的企业世界模型，是一个被动学习、自我治理的知识工程底座。向量库与普通知识图谱致力于"把当前知识记对"，而 Utopia 把时间感知与本体放进基础层：知识随材料到来而演化，冲突检测、推理与决策都基于这套本体运行。它支持离线部署，企业可以在自己掌控的硬件上建立知识地基和一个 Agent 可以信任的决策核心。

## 主要特性

- 双时态知识图谱：每个事实都记录它在现实中成立的时刻与系统知晓它的时刻；修正会关闭旧版本并链接新版本，而非直接覆盖
- 广泛的摄取能力——PDF、DOCX、PPTX、XLSX、CSV、Markdown、HTML 等，扫描件经 MinerU 或视觉模型识别，录音经带说话人标注的转写，网页、RSS、GitHub、Jira、Notion、WebDAV 与 S3 兼容存储可定时同步
- 混合搜索与对话：Tantivy 全文检索加 pgvector 向量、RRF 融合，答案流式输出并带可打开原文段落的内联引用；兼容任意 OpenAI 兼容端点，整个系统可完全离线运行
- 本体工作台与冷启动：内置 schema.org、W3C Org、PROV-O、FOAF、IOF Core 本体包；三阶段实体消歧可撤销，Agent 自行裁决，存疑案例进入人工复核队列
- 推理与冲突检测：本体公理编译为规则，经前向链推导新事实；三类冲突各有明确的处置选项
- 基于 MCP 的 Agent 接入：每个知识库一个 MCP 服务器，权限细粒度可控——读取是带类型、带日期的，写入则是先交人工审批的提案

## 使用场景

- 合同链场景：回答某日期适用哪套付款条款、出自哪份修订案，并给出原文句子作为证据
- 记录持续变化时的"谁在何时负责什么"类问题，包括当时系统相信什么
- Agent 经 MCP 读取知识库；机器人、监控等系统把带时间戳的观测直接推进图谱

## 技术特点

- 单个 Rust 二进制加一个 Postgres：全文检索由内嵌的 Tantivy 承担，向量存于 pgvector，任务队列就是一张表——通过 docker compose 部署于 linux/amd64 与 arm64，Web 控制台监听 1516 端口
- 抽取环节把文档转化为符合可编辑本体的实体与事实；边做了具体化（reified）处理，边本身可以携带属性
- 每个事实保留两个时钟（有效时间与系统时间）；实体消歧依次执行精确名称/别名匹配、向量相似度、模型判断，且每次合并都可撤销
- 搜索用 RRF 融合 Tantivy 与 pgvector 的结果；同一组只读 Agent 工具经 MCP 暴露；挂载的数据库（Postgres、MySQL、ClickHouse、Trino、Databricks、Snowflake）经 Ontology2SQL 查询——由 Agent 提出表到本体的映射、由人确认
