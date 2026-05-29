---
name: nanochat
slug: nanochat
homepage: null
repo: https://github.com/karpathy/nanochat
license: Unknown
category: applications-products
subCategory: productivity-tools
tags:
  - Application
description: 一个面向可复现训练与部署的轻量级 ChatGPT 克隆，目标实现低成本（$100 级别）可运行的端到端 LLM 系统。
logo: ''
author: Andrej Karpathy
ossDate: '2025-10-13T13:46:35.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

nanochat 是一个由 Andrej Karpathy 发起的全栈开源项目，旨在以较低成本与较低复杂度完成从分词、预训练、微调、评估到推理与简单网页版交互的完整流程。项目提供一套可复现的 speedrun 脚本，可在单台配备高端 GPU（例如 8XH100）或较少 GPU 的环境下运行，快速生成可对话的模型实例。

## 主要特性

- 端到端流水线：从数据处理、tokenizer、预训练、微调到 web UI，覆盖训练与推理全流程。
- 可复现的 speedrun：提供 `speedrun.sh` 等脚本，便于在受控环境下快速跑通训练与评估流程。
- 轻量与可读实现：代码库设计为简洁、易读，便于教学、实验与二次开发。

## 使用场景

- 研究与教学：适合做为 LLM 教学课程（如 LLM101n）或小规模研究的基线实现。
- 快速原型：在有限预算下快速搭建可交互的 ChatGPT 式系统以验证想法。
- 可复现评估：生成报告卡（report.md）用于实验结果的记录与基线比较。

## 技术特点

- 基于 PyTorch 的训练脚本，兼容多 GPU 与单 GPU 运行模式。
- 集成 Rust/BPE 分词器（rustbpe）与最小化依赖的实现，便于部署。
- 提供速度与资源可配置的训练深度（depth）与 batch 设置，支持分层扩展到更大型号。
