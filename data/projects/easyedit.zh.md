---
name: EasyEdit
slug: easyedit
homepage: https://zjunlp.github.io/project/KnowEdit
repo: https://github.com/zjunlp/easyedit
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Framework
description: 一个易用的知识编辑（model editing）框架，提供多种编辑方法、评估指标与数据集，支持 LLM 与部分多模态模型的知识插入、更新与擦除。
logo: ''
author: ZJUNLP
ossDate: '2023-05-09T07:48:02Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

EasyEdit 是一个面向大语言模型的知识编辑工具包，目标是在有限样本下高效地修改模型在特定查询上的行为，同时尽量保持模型在无关输入上的原有表现。项目包含多种编辑方法（如 ROME、MEND、MEMIT、WISE 等）、评估指标（可靠性、泛化性、局部性、可迁移性）以及用于比较的基准数据集（如 KnowEdit / CKnowEdit）。

## 主要特性

- 统一的编辑框架（Editor / Method / Evaluate）
- 多种方法实现：定位 - 修改（ROME、MEMIT 等）、内存/路由方法（SERAC、IKE）、元学习类（MEND）等
- 支持连续/批量编辑与回滚机制
- 提供丰富的示例、教程笔记本和基准数据集（KnowEdit / CKnowEdit）

## 使用场景

- 修正模型中的过时事实或错误知识
- 擦除或修复模型中不当或敏感信息
- 对模型行为做细粒度控制以满足产品需求
- 作为研究平台比较不同编辑方法的性能与开销

## 技术特点

- 支持多种模型家族（GPT 系列、LLaMA、GPT-J、T5 等）和多种编辑算法
- 提供评估脚本以度量编辑效果（rewrite_acc, rephrase_acc, locality, portability）
- 包含多模态编辑示例与教程（如 MMEdit）
