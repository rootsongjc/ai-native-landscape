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
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

DeepTutor 是由 HKU Data Intelligence Lab 推出的面向个性化学习的多智能体教学系统，旨在为学习者提供从知识检索、理解到练习与评估的一体化体验。系统结合检索增强生成（RAG）、知识图谱与多智能体协同推理，支持文档级问答、自动习题生成、交互式可视化讲解与模拟考试场景，强调可追溯的引用与会话上下文记忆。

## 主要特性

- 大规模文档知识问答：构建知识库并通过向量检索与 RAG 提供精确引用的答案。
- 多智能体问题求解：分析循环与求解循环的双环架构，支持实时流式推理展示。
- 智能习题生成：按难度与考试风格生成并验证练习题，支持批量与模仿模式。
- 交互式学习可视化：将复杂概念转换为可交互的分步演示与图表，提升理解效果。

## 使用场景

适用于高校教学、在线课程平台、研究文献综述与自学用户：教师可快速构建题库与模拟试卷；学生可通过交互式讲解与个性化练习提升学习效率；研究者可利用深度检索与报告生成功能进行系统性综述与想法生成。

## 技术特点

系统以 Python/FastAPI 为后端，Next.js 为前端，支持 Docker 部署与本地开发环境。检索层采用嵌入向量与知识图谱，研究流水线具备并行化的动态任务队列与集中化引用管理，支持插件化的工具整合（网页检索、代码执行、PDF 解析等）。
