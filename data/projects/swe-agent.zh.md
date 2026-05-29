---
name: SWE-agent
slug: swe-agent
homepage: https://swe-agent.com/latest/
repo: https://github.com/swe-agent/swe-agent
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
description: SWE-agent：一个由学术团队开发的自动化软件工程代理框架，适用于代码修复、评估与自动化工作流。
logo: ''
author: SWE-agent
ossDate: '2024-04-02T04:09:47.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

SWE-agent 是由学术团队（Princeton / Stanford 等）开发的自动化软件工程代理框架，侧重让 LLM 驱动的代理安全、可配置并可复现实验。它提供示例、基准（SWE-bench）、以及面向研究的工具链与文档。

## 主要特性

- 支持多种示例与模式（包括用于评测的 SWE-bench 与 Mini-SWE-Agent）。
- 提供线上文档与快速上手指南，支持在 Codespaces 里直接体验示例。
- 面向研究设计：配置化、易复现并提供基准评测工具。

## 使用场景

- 自动化代码修复与仓库维护的研究原型。
- 在安全与漏洞研究（如 EnIGMA 模式）中的攻防演练与评估。
- 评价大型模型在软件工程任务上的能力（使用 SWE-bench）。

## 技术特点

- Python 实现，完善的文档站点（<https://swe-agent.com>）。
- MIT 许可证，仓库提供 CI、文档构建与测试套件。
- 提供将工具/函数转为可执行单元的工作流与评测接口。
