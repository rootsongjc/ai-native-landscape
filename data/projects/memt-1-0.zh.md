---
name: MemT-1.0
slug: memt-1-0
homepage: null
repo: https://github.com/MemTensor/MemT-1.0
license: PolyForm-Noncommercial-1.0.0
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Memory
  - Long-Term Memory
  - Memory-Augmented Models
  - LLM
description: >-
  MemT-1.0 是新一代记忆基础模型系列，将持久、动态演化的记忆内建为模型计算的一部分，推理时无需回读原始上下文即可保留并利用历史信息。
author: MemTensor
ossDate: '2026-10-19'
featured: false
status: tracked
---

## 简介

MemT-1.0 是 MemTensor 推出的新一代记忆基础模型，将持久、动态演化的记忆直接构建进模型计算之中。它不依赖外部检索或全量上下文 KV 缓存，而是维护一个恒定大小的潜在记忆状态，让历史信息跨交互持续保留。该系列包含两个版本：MemT-1.0-Nano（总参数 36B / 激活 3B，基于 Qwen3.6-35B-A3B 骨干）和 MemT-1.0-Flash（总参数 288B / 激活 17B，基于 DeepSeek-V4-Flash 骨干）。

## 主要特性

- 原生记忆模块（Native Memory Block）与骨干注意力并行运行，包含动态局部记忆块和可训练的超记忆块（query/key/value 投影及擦除、写入、遗忘、输出门控）
- 持久记忆状态大小恒定，在 128K 历史长度下相比全量上下文 KV 缓存约节省 66 倍存储
- 混合存储（Mixture-of-Storage, MoS）设计，支持记忆容量可扩展
- 两阶段训练流水线，基于 340 亿 token 数据与专用训练基础设施
- 经验引导的智能体编程框架：将检索到的过程性经验存入原生记忆并通过记忆注意力读取，不增加任务上下文负担
- 基于 SGLang 的推理服务栈，提供 `memt_sglang` Python 客户端，支持带记忆提交与调用的多轮对话

## 使用场景

- 需要跨轮次回忆早期事实、又不能回放明文上下文的长期对话智能体
- 长时程智能体编程任务中的经验复用
- 以远低于全量上下文 KV 缓存的存储成本保留历史交互记忆的应用

## 技术特点

- 生成阶段由记忆注意力从当前记忆状态读取，对读出结果归一化并门控后加到骨干注意力输出上
- 每轮或每个片段结束时，由 GDN-2 网络执行 token 级记忆更新，供后续步骤使用
- 局部记忆块维护动态多通道记忆矩阵并跨交互步骤演化；超记忆块参数可训练而状态本身动态变化
- 可训练记忆参数规模：Nano 为 451M（动态状态 10M），Flash 为 3.61B（动态状态 336M）
- 在 11 项记忆基准上，Flash 与 Nano 在受评的参数化记忆方法中分列第一、第二；在需要精确证据检索的长历史场景下，文本化记忆系统整体仍领先
- 模型权重发布于 Hugging Face，仓库内提供 SGLang 部署脚本与 Python 客户端
