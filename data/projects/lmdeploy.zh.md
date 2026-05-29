---
name: LMDeploy
slug: lmdeploy
homepage: https://lmdeploy.readthedocs.io/en/latest/
repo: https://github.com/internlm/lmdeploy
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Deployment
  - Dev Tools
description: LMDeploy 是一套用于大模型压缩、部署与服务化的工具集，提供高性能推理引擎、量化与分发能力，便于将模型在各类环境中上线。
logo: ''
author: InternLM
ossDate: '2023-06-15T12:38:06.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

LMDeploy 提供端到端的模型压缩、量化与推理部署能力，包含高性能引擎（如 TurboMind）、连续批处理与分发服务，适用于对吞吐与延迟有高要求的场景。

## 主要特性

- 高性能推理：TurboMind 与优化的 PyTorch 引擎带来显著吞吐提升和低延迟。
- 量化与 KV-cache 优化：支持多种量化策略与持久化缓存以降低内存占用。
- 部署与分发：支持离线批处理、在线服务与多机多卡分发架构。

## 使用场景

- 将研究/微调模型快速转化为生产级推理服务。
- 对延迟敏感或高并发的推理场景（如在线对话、API 服务）。

## 技术特点

- 支持多种后端与模型格式，提供丰富的教程与示例（文档链接见 frontmatter）。
- 提供 benchmarking 与可视化工具，便于性能回归与对比。
