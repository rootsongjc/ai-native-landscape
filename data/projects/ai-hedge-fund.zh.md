---
name: AI Hedge Fund
slug: ai-hedge-fund
homepage: null
repo: https://github.com/virattt/ai-hedge-fund
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Application
  - CLI
description: 一个以智能体为中心的量化研究示例，提供回测、CLI 与可视化 Web 应用以探索 AI 在选股与风控中的应用。
logo: ''
author: virattt
ossDate: '2024-11-29T16:30:01Z'
featured: false
status: tracked
---

## 简介

AI Hedge Fund 是一个概念验证项目，展示如何使用多个专业化智能体实现 AI 驱动的对冲基金交易决策。它展示了专注于估值、情绪、基本面和技术面的智能体如何协同生成交易信号。项目提供 CLI 和可选的 Web 应用于回测与策略验证，强调可复现的研究与教育探索。

## 主要特性

- 多个专业化智能体（估值、情绪、基本面、技术面）并行评估资产，生成多样化的交易信号
- 可配置的回测器与风险模块，支持在历史数据窗口上进行稳健性检验
- 可插拔的 LLM 集成，支持主流提供商和本地模型（如通过 `--ollama` 标志）
- 全栈运行方式，CLI 用于自动化，内置 Web 应用用于交互式分析

## 使用场景

面向研究者、量化爱好者与教学场景，用于探索智能体协作、LLM 驱动的决策解释与策略回测流程。典型用途包括交易策略原型验证、AI 金融概念教学演示以及在受控环境下研究模型对交易决策的影响。项目明确非实盘交易工具。

## 技术特点

Python 实现，采用 Poetry 管理依赖。模块化架构将数据获取、策略逻辑、回测引擎与展示层解耦。可配置的数据源支持免费行情样例与第三方金融数据 API。本地优先设计，所有关键计算在本地运行，网络调用为可选项以保护敏感数据。
