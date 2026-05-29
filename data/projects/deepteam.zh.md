---
name: DeepTeam
slug: deepteam
homepage: https://trydeepteam.com
repo: https://github.com/confident-ai/deepteam
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Evaluation
  - Tool
description: 一个用于对大语言模型与 LLM 系统进行红队测试的开源框架，聚焦安全性与稳健性评估。
logo: ''
author: Confident AI
ossDate: '2025-03-05T06:34:21Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

DeepTeam 是一个面向大语言模型（LLM）与 LLM 系统的红队（red team）测试框架，旨在帮助研究者与工程团队系统性地发现模型在安全性、稳健性与对抗样本方面的弱点。该项目提供测试策略、攻击模版与度量工具，支持在不同部署场景中验证模型的边界行为与潜在风险，从而为加固模型提供实证依据。

## 主要特性

- 提供用于生成对抗输入与攻击场景的策略与模板。
- 支持评估模型响应的安全性、健壮性与可复现性。
- 集成可扩展的测试流水线，便于将红队测试嵌入 CI/CD 或评估流程。
- 开源实现便于审计、复现与社区贡献新的攻击/防护方法。

## 使用场景

- 在模型上线前进行安全评估，发现潜在的滥用或敏感信息泄露风险。
- 在企业或研究实验室中进行持续的健壮性回归测试以监控模型质量。
- 用作对比评估不同防护策略在真实攻击场景下的有效性。

## 技术特点

- 以可复现与可量化的评估为目标，提供统一的攻击模板与评价指标。
- 支持与检索、日志与监控系统集成，以便在测试中收集丰富的信号。
- 模块化设计，便于扩展新的攻击策略或接入自定义模型端点。
- 社区驱动，便于快速吸收新兴攻击向量与防护实践。
