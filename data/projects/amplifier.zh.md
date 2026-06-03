---
name: Amplifier
slug: amplifier
homepage: null
repo: https://github.com/microsoft/amplifier
license: MIT
category: inference-serving
subCategory: inference-runtimes
tags:
  - Dev Tools
  - Inference
description: 微软推出的开发与部署辅助工具，专注于 AI 项目的性能分析、模型部署和流水线支持。
author: Microsoft
ossDate: '2025-09-09T22:21:51.000Z'
featured: false
status: tracked
---
## 概述

Amplifier 是微软开源的工具包（仓库：microsoft/amplifier），旨在帮助 AI 项目的开发、部署与性能调优。它为工程团队在真实环境中验证模型性能、构建部署流水线、优化推理流程提供了 CLI 工具、可复用模板以及与主流部署平台的集成能力。

## 主要特性

- 开发与部署辅助：通过 CLI 工具和模板，规范模型打包与部署流程。
- 性能分析：提供推理指标采集与负载测试工具，帮助定位瓶颈并持续优化。
- 集成能力：支持容器平台和 CI/CD 流水线，简化生产交付。

## 典型场景

- 推理模型上线前的基准测试与容量规划。
- 在 CI 流水线中自动化模型镜像构建与发布流程。
- 开发阶段复现生产负载，验证优化效果。

## 技术说明

- 主要采用 Python 实现，支持插件与脚本扩展。
- 注重开发者体验与团队间的运维复用。
