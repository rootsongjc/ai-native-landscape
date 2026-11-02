---
name: mempalace
slug: mempalace
homepage: http://mempalaceofficial.com/
repo: https://github.com/MemPalace/mempalace
license: MIT
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Agent Memory
  - MCP
  - Semantic Search
  - Local First
description: >-
  本地优先的 AI 记忆系统：对话历史逐字存储，语义搜索取回，LongMemEval 原始
  Recall@5 达 96.6% 且零 API 调用，检索后端可插拔。
author: MemPalace
ossDate: '2026-04-05'
featured: false
status: tracked
---

## 简介

MemPalace 是一个本地优先的 AI 记忆系统：对话历史以逐字文本存储，通过语义搜索取回——不做摘要、抽取或改写。索引被组织成一座宫殿：人物和项目是“翼（wing）”，话题是“房间（room）”，原始内容放在“抽屉（drawer）”里，因此检索可以限定范围，而不必在扁平语料上全文扫描。除非主动选择，数据不会离开你的机器。

## 主要特性

- 逐字存储：对话历史保留原文，绝不摘要或改写
- 结构化索引：翼（人物/项目）、房间（话题）、抽屉（原始内容）支持范围化检索
- 检索后端可插拔，默认 ChromaDB，替换后端无需改动系统其余部分
- LongMemEval 原始 Recall@5 达 96.6%，零 API 调用
- 以 CLI、MCP 服务器和三个智能体技能（mempalace、mempalace-recall、mempalace-task）交付
- 支持 uv/pipx、venv 安装，或以多架构 Docker 镜像（amd64 + arm64）运行

## 使用场景

- 为 Claude Code 提供跨会话的持久记忆，避免会话过期或压缩后失忆
- 回答前先做 search-before-answer 式回忆，唤起过往决策与对话
- 以共享“宫殿”作为多个智能体的记忆中枢，同时数据全部留在本地

## 技术特点

- 存储层保存逐字文本；检索层在结构化索引（翼/房间/抽屉）上做语义搜索，查询可限定到某个人物、项目或话题，而非扫描扁平语料
- 检索层是定义在 `mempalace/backends/base.py` 中的接口；ChromaDB 为当前默认实现，任何替代后端都可直接替换而无需改动其他部分
- MCP 服务器通过 stdio 运行（容器场景用 `docker run -i`），宫殿、配置和缓存的嵌入模型等全部状态持久化在 `/data` 之下，挂载卷即可跨重启保留
- 通过 `npx skills add MemPalace/mempalace` 做智能体引导安装：检测系统、安装 Python 包、配置 MCP，并记录运行时来自 uv tool、pipx 还是 pip；可选的版本检查只访问 PyPI，绝不自动安装更新
