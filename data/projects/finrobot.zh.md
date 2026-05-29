---
name: FinRobot
slug: finrobot
homepage: https://ai4finance.org
repo: https://github.com/ai4finance-foundation/finrobot
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Application
description: 一个面向金融分析的开源智能体平台，整合多源数据、工具和大语言模型以自动化研究与策略构建。
logo: ''
author: AI4Finance Foundation
ossDate: '2024-02-27T02:30:30Z'
featured: false
status: tracked
---

## 详细介绍

FinRobot 是一个面向金融分析的开源智能体（AI Agent）平台，旨在将大语言模型与金融数据源、工具链和策略库整合为可编排的智能流程。平台包含市场预测、报表撰写、文档分析与交易策略等示例智能体，支持多源数据接入（新闻、财报、行情）与插件式工具调用，便于研究人员和工程团队快速构建可复用的金融自动化工作流。

## 主要特性

- 多智能体架构：支持任务分工与协调的智能体编排，便于将复杂分析拆分为子任务并组合结果。
- 多源数据接入：内置对行情、财报与文本数据的适配器，支持检索增强生成与上下文检索。
- 可插拔工具链：与外部 API、因子库、回测模块和可视化组件集成，便于将模型推理转化为可执行动作。
- 开放与社区驱动：基于 Apache-2.0 许可，拥有活跃的社区、教程与示例 notebooks。

## 使用场景

- 市场预测与信号生成：利用历史行情与新闻事件生成短期或中期的方向性预测。
- 报告自动化：从财务报表和文本中抽取要点并生成行业/公司研究报告草稿。
- 量化策略集成：将智能体输出转为交易策略信号，接入回测与执行模块进行验证。
- 文档与合规分析：自动化合规检查、要点抽取与合规摘要生成。

## 技术特点

- 基于大语言模型（LLM）作为“脑”，结合链式思维（Chain-of-Thought）设计以提升推理质量。
- 支持 RAG（检索增强生成）与本地/远程工具调用以保障上下文准确性与可执行性。
- 采用模块化代码结构与示例 notebooks，便于研发迭代与自定义扩展。
- 提供多种部署路径（本地、容器化与服务化），适配研究与生产环境需求。
