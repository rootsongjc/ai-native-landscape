---
name: ValueCell
slug: valuecell
homepage: https://valuecell.ai
repo: https://github.com/valuecell-ai/valuecell
license: Unknown
category: agents
subCategory: agent-orchestration
tags:
  - Agents
  - Application
  - Dev Tools
description: 一个社区驱动的多智能体金融平台，提供研究、策略与自动化交易能力，并把敏感数据保存在本地。
author: ValueCell AI
ossDate: '2025-09-01T09:07:06Z'
featured: false
status: tracked
---

## 详细介绍

ValueCell 是一个社区驱动的多智能体（智能体）平台，面向金融场景提供从研究、策略开发到自动化交易的一体化能力。平台强调本地优先的数据策略——将 API 密钥与敏感数据保存在用户设备上，同时通过可扩展的智能体生态实现组合智能与协作决策。项目对开发者友好，并通过插件与 SDK 支持外部模型与交易所接入。

## 主要特性

- 多智能体体系：包含研究、策略、新闻检索等多种智能体，支持协同工作。
- 本地敏感数据存储：API 密钥和用户数据默认保存在本地，提升隐私与安全性。
- 多模型与交易所接入：支持多家 LLM 提供商与交易所（如 Binance、OKX、Hyperliquid）。
- 开发者工具链：提供 Python SDK、WebSocket 支持与可视化配置界面。

## 使用场景

适合需要长期记忆与自动化交易的个人或团队：包括量化研究、策略回测、实盘合约交易、实时新闻监控与基于上下文的投资建议。ValueCell 也可作为多智能体实验平台，用于快速验证交易思路和模型集成。

## 技术特点

系统以 Python 为核心，前端采用现代 Web 框架，数据以本地文件与 SQLite 存储并支持 LanceDB。平台支持多模型后端、WebSocket 实时流式通信与可插拔的代理架构，便于在保持数据可控性的前提下实现可扩展的智能体协作。
