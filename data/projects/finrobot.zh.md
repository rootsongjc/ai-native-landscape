---
name: FinRobot
slug: finrobot
homepage: https://ai4finance.org
repo: https://github.com/ai4finance-foundation/finrobot
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Application
description: 一个面向金融分析的开源智能体平台，整合多源数据、工具和大语言模型以自动化研究与策略构建。
author: AI4Finance Foundation
ossDate: '2024-02-27T02:30:30Z'
featured: false
status: tracked
---
FinRobot 是一个专为金融分析设计的开源 AI 智能体平台，将大语言模型与行情数据、公司财报和新闻等多源数据适配器相结合。它支持可复用、可编排的智能体工作流，内置市场预测、报告生成、文档分析和交易策略等示例智能体，便于研究人员和工程团队快速构建金融自动化流程。

## 多智能体架构

- 支持复杂金融分析的任务分解与协调编排
- 链式思维（Chain-of-Thought）设计提升多步推理的可解释性
- 模块化智能体设计，可组合专业化的金融工作流
- 内置预测、报告、文档分析和交易等示例智能体

## 数据与工具

- 内置行情、财报与文本数据的适配器
- 检索增强生成（RAG）支持确保上下文准确性
- 可插拔工具链，集成外部 API、因子库和回测模块
- 可视化组件用于呈现分析结果

## 分析与自动化

- 利用历史行情与新闻事件生成市场方向性预测
- 从财务报表中自动抽取要点并生成研究报告草稿
- 将智能体输出转为交易策略信号并通过回测验证
- 文档与合规分析，实现关键条款抽取的自动化

## 部署与开发

- 模块化代码结构与示例 notebooks 便于迭代开发
- 本地、容器化和服务化等多种部署路径
- Apache-2.0 许可，活跃社区与教程资源
- 适配研究实验与生产环境
