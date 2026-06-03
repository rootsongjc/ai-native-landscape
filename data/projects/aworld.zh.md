---
name: AWorld
slug: aworld
homepage: https://inclusionai.github.io/AWorld/
repo: https://github.com/inclusionai/aworld
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - ML Platform
  - Tool
  - Training
description: AWorld 是为多智能体自我改进与大规模训练而设计的开源智能体运行时与研究平台。
author: inclusionAI
ossDate: '2025-03-14T08:30:52Z'
featured: false
status: tracked
---
## 详细介绍

AWorld 是一个面向大规模多智能体（Multi-Agent）系统的运行时与训练平台，侧重于智能体自我改进（self-improvement）和协同学习。项目提供完整的 agent、runner、swarm、sandbox、tools 等模块，支持高并发任务执行、经验收集、基于回报的训练流程以及可观测的追踪与监控机制，适合研究与工程化双重场景。

## 主要特性

- 面向多智能体系统的运行时与编排（Swarm、Runners）
- 内置训练与评估管线，支持分布式训练与奖励优化
- 丰富的工具与环境（包括代码执行、搜索、浏览器自动化等）
- 支持 MCP 协议与多模型接入，便于集成多种 LLM 提供方
- 完整的示例与教程，包含 Quickstart、架构设计与应用案例

## 使用场景

AWorld 适用于学术研究、行业级大型多智能体训练、仿真与算法验证、以及需要大规模代理协同的产品原型验证。它既可用于构建自治代理工作流，也能作为训练平台来优化自适应策略与集体智能表现。

## 技术特点

项目以 Python 为主实现，模块化设计良好，提供可插拔的工具接口、可观测的 trace 系统与支持多模型的策略配置。其代码与文档齐全，拥有成熟的示例工程，便于快速上手与二次开发。
