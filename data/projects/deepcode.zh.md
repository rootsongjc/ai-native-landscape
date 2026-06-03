---
name: DeepCode
slug: deepcode
homepage: https://pypi.org/project/deepcode-hku/
repo: https://github.com/hkuds/deepcode
license: MIT
category: agents
subCategory: agent-orchestration
tags:
  - AI Agent
description: 基于多智能体系统的代码生成与研究复现平台，能将论文与自然语言转化为可运行代码。
author: HKU Data Intelligence Lab
ossDate: '2025-05-14T05:23:02.000Z'
featured: false
status: tracked
---
## 简介

DeepCode 是一个由香港大学 Data Intelligence Lab 开发的开源多智能体代码生成平台，旨在将学术论文、文本描述和文档自动转换为高质量、可运行的代码实现，显著加速研究复现与原型开发。

## 主要特性

- 自动将论文/文档抽取为实现要点并生成相应代码（Paper2Code）。
- 支持文本到前端/后端的快速原型生成（Text2Web / Text2Backend）。
- 内置多智能体协同工作流与质量保证机制（自动测试与静态分析）。

## 使用场景

- 研究复现：快速把论文的算法转化为可运行实现，降低实现门槛。
- 原型开发：从需求或文本说明快速生成前后端脚手架与示例代码。
- 教学与示例：作为教学演示与代码生成实验平台使用。

## 技术特点

- 多智能体编排引擎，支持动态任务分配与流程调整。
- CodeRAG 集成，实现检索增强生成以提高实现准确性。
- 支持多种接口：CLI、Web 界面与 Python 包（pip install deepcode-hku）。
