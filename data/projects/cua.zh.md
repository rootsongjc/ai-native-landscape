---
name: CUA
slug: cua
homepage: https://trycua.com
repo: https://github.com/trycua/cua
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
description: CUA 提供用于训练和评估可操作完整桌面（macOS、Linux、Windows）智能体的开源基础设施和工具链。
author: TryCUA
ossDate: '2025-01-31T15:02:49.000Z'
featured: false
status: tracked
---
## 简介

CUA（Computer-Use Agents）是一个开源基础设施，旨在训练、评估并部署能够控制桌面环境的智能体。项目包含沙箱、SDK、基准与工具，支持在 macOS、Linux 与 Windows 上复现智能体对真实应用和窗口的操作能力，帮助研究者和工程师在安全可控的环境中开展实验。

## 主要特性

- 提供可重复的沙箱环境与基准套件，用于评估代理在桌面任务上的行为表现与稳健性。
- 包含适配不同平台的 SDK 与示例，降低在真实桌面上运行智能体的集成成本。
- 支持容器化与虚拟化部署，便于在 CI/CD 与实验平台中批量跑测。

## 使用场景

- 研究与评估可操作桌面智能体的交互能力与安全性测试。
- 在受控环境中进行任务自动化、桌面应用测试或用户流程自动化的方案验证。
- 构建面向桌面操作的 MLOps 流水线，将训练、评估与部署流程标准化。

## 技术特点

- 模块化架构，支持扩展不同的虚拟化/沙箱后端与适配器。
- 强调可复现的实验流程，内置基准指标与记录机制以便比较不同代理策略。
- 兼容主流容器化与虚拟化工具，便于在多平台上进行性能与行为测试。
