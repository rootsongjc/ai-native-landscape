---
name: DeepTutor
slug: deeptutor
homepage: https://hkuds.github.io/DeepTutor
repo: https://github.com/hkuds/deeptutor
license: Unknown
category: rag-knowledge
subCategory: knowledge-graphs
tags:
  - Agents
  - Application
  - Assistant
  - Knowledge Graph
  - RAG
  - Visualization
description: 一个面向个性化学习的多智能体教学系统，集成检索增强生成、知识图谱与交互式可视化。
logo: ''
author: HKUDS
ossDate: '2025-12-28T15:35:54Z'
featured: false
status: tracked
---

## 简介

DeepTutor 是由 HKUDS 开发的智能体原生开源个性化辅导平台，结合检索增强生成（RAG）、知识图谱与多智能体协同推理，为学习者提供从知识检索到练习评估的一体化学习体验。

## 主要特性

- 大规模文档问答：构建知识库并通过向量检索与 RAG 提供带精确引用的答案。
- 多智能体问题求解：双环架构支持分析与求解，提供实时流式推理展示。
- 智能习题生成：按难度与考试风格自动生成并验证练习题，支持批量与模仿模式。
- 交互式学习可视化：将复杂概念转换为可交互的分步演示与图表。

## 使用场景

- 高校教学与在线课程平台，教师可快速构建题库与模拟试卷。
- 自学用户通过交互式讲解与个性化练习提升学习效率。
- 研究者利用深度检索与报告生成功能进行文献综述与想法合成。

## 技术特点

- 后端采用 Python/FastAPI，前端使用 Next.js，支持 Docker 部署与本地开发。
- 检索层结合嵌入向量与知识图谱结构实现语义搜索。
- 并行化动态任务队列与集中化引用管理，支持插件化工具整合。
