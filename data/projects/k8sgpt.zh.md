---
name: k8sgpt
slug: k8sgpt
homepage: https://k8sgpt.ai/
repo: https://github.com/k8sgpt-ai/k8sgpt
license: Unknown
category: models-modalities
subCategory: foundation-models
tags:
  - Dev Tools
  - LLM
description: 为 Kubernetes 提供诊断与分析能力的 AI 工具，使用 LLM 对集群进行问题定位与解释。
logo: ''
author: K8sGPT
ossDate: '2023-03-21T19:58:16.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

k8sgpt 是一款面向 Kubernetes 的 AI 诊断工具，提供分析器来自动化发现集群问题，并利用多种 LLM 后端生成可操作的解释与修复建议。

## 主要特性

- 多种 LLM 后端支持（OpenAI、Azure、Bedrock、Vertex、local models 等）
- CLI 与 Operator 模式支持本地/集群运行
- 丰富的分析器集合（pod、service、ingress、node 等）

## 使用场景

- 即时诊断集群故障并生成修复建议
- 将分析器整合进故障响应与监控流程
- 在开发或 CI 环境中进行集群健康检查

## 技术特点

- 可扩展的分析器架构，支持自定义诊断规则
- 支持 operator 模式在集群内持续监控
- 与多种 AI 提供商的无缝集成
