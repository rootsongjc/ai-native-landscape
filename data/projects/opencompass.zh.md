---
name: OpenCompass
slug: opencompass
homepage: https://opencompass.org.cn/
repo: https://github.com/open-compass/opencompass
license: Apache-2.0
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Benchmark
description: 面向大模型评估的一站式平台，提供丰富的基准、评估工具与排行榜，便于复现与比较模型能力。
author: OpenCompass Contributors
ossDate: '2023-06-15T12:42:58.000Z'
featured: false
status: tracked
---

## 简介

OpenCompass 是一个面向大模型（LLM/LLVLM）评估的一站式平台，提供从数据准备、评估脚本到排行榜（CompassRank/CompassHub）的完整工具链，支持开源模型和 API 模型的统一评估流程。

## 主要特性

- 支持 70+ 数据集与 20+ 预置模型配置，覆盖多维能力评估场景。
- 提供分布式评估与一键加速后端（如 vLLM、LMDeploy）支持，便于在大规模模型上快速运行评测。
- 丰富的评估范式（zero-shot、few-shot、LLM-judge、chain-of-thought）和可扩展的 evaluator 体系。
- 附带示例、实验复现脚本、数据分割与排行榜页面（CompassRank）。

## 使用场景

- 在研究与工程中复现论文评估、比较不同模型/后端在标准任务上的表现。
- 构建自动化评估流水线，用于模型上线前的能力回归测试与基准监控。
- 快速验证自研模型或第三方 API 模型在多个任务集上的综合能力。

## 技术特点

- 以 Python 实现，提供 pip 包与源码安装方式，并支持可选的加速依赖（vLLM、LMDeploy、ModelScope 等）。
- 提供配置化的 experiments、grader 与工具脚本，方便复现 leaderboard 结果与扩展新任务。
- 文档齐全（ReadTheDocs）、社区活跃（Discord/WeChat），并持续发布新版与新 benchmark 支持。
