---
name: BettaFish (WeiYu)
slug: bettafish
homepage: null
repo: https://github.com/666ghj/bettafish
license: MIT
category: agents
subCategory: agent-orchestration
tags:
  - Agents
  - Application
  - Data
description: 开源多智能体舆情分析平台，自动化采集、分析与报告生成，支持多模态社媒数据。
author: 666ghj
ossDate: '2024-07-01T13:11:38Z'
featured: false
status: tracked
---
BettaFish（微舆）是一个从零实现的多智能体舆情分析助手，不依赖外部框架，整合爬虫、检索、情感分析与多模态解析能力。它打破信息茧房，面向主流社媒持续采集与深度分析数据，帮助用户还原舆情全貌并预测趋势。

## 多智能体架构

- Query、Media、Insight、Report 等专用 Agent 协同工作，实现检索、抽取与报告闭环
- 以对话式查询为入口，自动生成结构化研究报告供决策参考
- 支持舆情全貌还原与趋势预测，辅助危机响应与战略决策

## 数据采集与分析

- 全网爬取与多模态解析（文本、图像、短视频），覆盖微博、小红书、抖音等主流平台
- 实时捕获热点话题并生成溯源与热度报告
- 内置情感分析引擎，支持正负面判定与情绪趋势追踪

## 报告与部署

- 内置报表与模板引擎，自动生成可导出的 HTML 报告供决策参考
- 提供 Docker 与脚本化一键部署，便于在云主机或本地服务器快速启动
- 以 Python 为主进行模块化实现，兼容常见数据存储与消息队列，便于二次开发

## 扩展能力

- 提供可插拔的模型接口，可接入本地微调模型或主流云端 LLM 服务
- 支持连接池与缓存机制以提升抓取与分析的稳定性和吞吐能力
- 支持混合推理策略，灵活组合本地与云端模型
