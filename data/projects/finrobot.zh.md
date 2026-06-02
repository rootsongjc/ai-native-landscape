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

## 简介

FinRobot 是一个专为金融分析设计的开源 AI 智能体平台，将大语言模型与行情数据、公司财报和新闻等多源数据适配器相结合。它支持可复用、可编排的智能体工作流，内置市场预测、报告生成、文档分析和交易策略等示例智能体，便于研究人员和工程团队快速构建金融自动化流程。

## 主要特性

FinRobot 采用多智能体架构，支持复杂金融分析的任务分解与协调编排。它内置行情、财报与文本数据的适配器，支持检索增强生成（RAG）。平台提供可插拔工具链，可集成外部 API、因子库、回测模块和可视化组件，将模型推理转化为可执行动作。项目基于 Apache-2.0 许可，拥有活跃的社区、教程和示例 notebooks。

## 使用场景

FinRobot 可用于利用历史行情与新闻事件生成市场方向性预测，从财务报表中自动抽取要点并生成研究报告草稿，以及将智能体输出转为交易策略信号并通过回测验证。它还支持文档与合规分析场景，实现合规检查和关键条款抽取的自动化。

## 技术特点

FinRobot 以大语言模型为核心，结合链式思维（Chain-of-Thought）设计提升多步推理的可解释性。它支持 RAG 与工具调用以确保上下文准确性，采用模块化代码结构与示例 notebooks 便于迭代开发，并提供本地、容器化和服务化等多种部署路径，适配研究与生产环境。
