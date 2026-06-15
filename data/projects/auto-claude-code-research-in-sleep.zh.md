---
name: ARIS (Auto-Research-In-Sleep)
slug: auto-claude-code-research-in-sleep
homepage: null
repo: https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep
license: MIT
category: agents
subCategory: agent-orchestration
tags:
  - Research Automation
  - Autonomous Agent
  - Claude Code
  - ML Research
  - LLM
description: ARIS 是一套轻量级的纯 Markdown 技能集合，面向自主化机器学习研究，提供跨模型评审循环、创意发现与实验自动化，兼容任意 LLM 智能体。
author: wanshuiyin
ossDate: '2026-03-10'
featured: false
status: tracked
---

## 简介

ARIS（Auto-Research-In-Sleep）是一组纯 Markdown 编写的技能，能将 LLM 编码智能体转化为自主研究助手。它不提供框架或运行时，而是给出开箱即用的工作流：跨模型论文评审、研究创意生成以及实验自动化。技能与具体模型无关，可直接接入 Claude Code、Codex、OpenClaw 或任何能读取 Markdown 指令的智能体。

## 主要特性

- 跨模型评审循环，多个 LLM 相互批评与优化彼此的输出
- 面向机器学习文献的研究创意发现与论文评审工作流
- 无人值守的实验自动化，自动运行并迭代 ML 任务
- 纯 Markdown 技能，无框架锁定与额外依赖
- 兼容 Claude Code、Codex、OpenClaw 及通用 LLM 智能体

## 使用场景

- 夜间自主运行文献综述与论文评审
- 跨模型生成并对新颖研究想法进行压力测试
- 自动化重复性的 ML 实验与消融流水线
- 在已有编码智能体内构建自我演进的研究闭环

## 技术特点

- 技能以纯 Markdown 定义，无需守护进程、运行时或厂商 SDK
- 围绕跨模型编排与迭代式智能体循环设计
- 通过 Claude Code 等智能体的标准技能/工具加载机制接入
