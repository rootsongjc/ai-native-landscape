---
name: Acontext
slug: acontext
homepage: https://acontext.io
repo: https://github.com/memodb-io/acontext
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Agents
  - Dashboard
  - Data
  - Dev Tools
  - Memory
description: 面向自学习智能体的上下文数据平台，用于存储、观测与沉淀经验。
logo: ''
author: MemoDB
ossDate: '2025-07-16T13:15:48Z'
featured: false
status: tracked
---

## 简介

Acontext 是一款面向自学习智能体的上下文数据平台，将智能体技能转化为持久化记忆。它统一存储会话上下文、任务记录与产物，通过观测任务行为与用户反馈将经验沉淀为长期记忆，帮助 AI 编码智能体持续自我改进。

## 主要特性

- 结构化上下文存储，支持 Session、Space 与 Artifact 的分层组织，便于检索与管理。
- 观测与指标能力，包括任务执行流程记录、成功率仪表盘与诊断视图，便于调试智能体行为。
- 经验沉淀功能，将 SOP 与任务结果转为可复用的技能与长期记忆。

## 使用场景

- 为多智能体系统提供集中式上下文与记忆存储，提升协调效率与任务成功率。
- 在本地复现任务流程、分析失败原因并快速迭代策略的研发与测试场景。
- 在受控网络中部署以满足数据合规与治理要求的企业环境。

## 技术特点

- 多语言 SDK 与模板，支持 Go、Python 和 TypeScript 接入。
- 可扩展存储后端，支持磁盘与外部对象存储作为 Artifact 存储。
- 提供 CLI 工具与 Docker 预设，便于本地或云端快速部署与验证。
