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
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Acontext 是一款面向自学习智能体的上下文数据平台，帮助团队统一存储会话上下文、任务记录与产物（artifact），并通过观测任务行为与用户反馈将经验沉淀为长期记忆。平台包含可本地部署的服务与可视化 Dashboard，以及命令行工具，便于开发者在本地或云端快速搭建观测与学习闭环。更多文档见 [Acontext 文档](https://docs.acontext.io/)。

## 主要特性

- 结构化上下文存储：支持 Session、Space 与 Artifact 的分层组织，便于检索与管理。
- 观测与指标：记录任务执行流程与成功率，提供 Dashboard 可视化观察。
- 经验沉淀：将 SOP（经验操作）与任务结果转为长期记忆，支持技能检索与重用。
- 本地与云端部署：提供 `acontext` CLI、Docker 配置与多种模板，降低上手成本。

## 使用场景

- 智能体产品：为多智能体系统提供集中式上下文与记忆存储，提升任务成功率。
- 研发与测试：在本地复现任务流程、分析失败原因并快速迭代策略。
- 企业部署：在受控网络中部署以满足数据合规与隐私需求。
- 教学与原型：用作构建智能体样例与教学演示的基础平台。

## 技术特点

- 多语言 SDK 与模板：支持 Go、Python、TypeScript 等语言的接入模板。
- 可扩展存储：支持磁盘与外部对象存储作为 Artifact 后端。
- 开发者友好：含示例仓库、迁移脚手架与详细文档，便于与现有工具链集成。
- 开源许可：采用 Apache-2.0 许可证，社区可贡献与复用。
