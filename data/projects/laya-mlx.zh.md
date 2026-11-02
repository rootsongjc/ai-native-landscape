---
name: laya-mlx
slug: laya-mlx
homepage: https://pypi.org/project/laya-mlx/
repo: https://github.com/mizorewww/laya-mlx
license: Apache-2.0
category: inference-serving
subCategory: edge-local-inference
tags:
  - MLX
  - Apple Silicon
  - Decision Model
  - Local Inference
description: >-
  Laya 类型化决策模型的原生 MLX 运行时：用一次双向前向传播回答受约束的问题（选项选择、量表评分、真假判断）
  并输出校准概率——M3 Max 上 7–14 毫秒，无文本生成、不依赖 PyTorch 或云 API。
author: mizorewww
ossDate: '2026-09-19'
featured: false
status: tracked
---

## 简介

laya-mlx 让开源权重的 Laya 类型化决策模型通过 MLX 在 Apple Silicon 上原生运行。Laya 不生成 token，而是用一次双向前向传播回答受约束的问题——选一个选项、按量表评分、判断命题真假——并给出校准概率，因此无需解析 JSON。该移植版运行原始 Laya 权重，不依赖 PyTorch、Transformers 或云 API；M3 Max FP16 下英文短决策中位延迟 13.4 毫秒（421M 检查点），多语种检查点为 7.4 毫秒。

## 主要特性

- 类型化决策：`choice`（每个选项的概率）、`score`（量表各级概率及期望级别）、`noul`（P(true)），均带校准概率与置信度字段
- 毫秒级本地延迟：M3 Max FP16 下英文短决策中位 13.4 毫秒、多语种 7.4 毫秒，50 题吞吐约 147–395 q/s
- `Router()` 语言路由：自动检测语言、选择检查点并最多常驻两个；也可注册自定义检查点
- 置信度门控（`min_confidence=`）把低置信答案标记送审；`predict_shortlist`（嵌入预筛）与 `predict_tournament` 支撑大选项集
- 附带 CLI（`laya-mlx predict`）、HTTP 服务（`laya-mlx-serve`）、MCP 服务器，以及以 extras 安装的 LangChain/LlamaIndex/CrewAI/Agno 集成；`laya-mlx convert` 可导出独立检查点

## 使用场景

- Agent 流水线内的路由、分类、量表评分与真假判断——这类任务调用完整 LLM 并不划算
- 高频本地决策——内置贪吃蛇演示每步询问三个问题，实测达 75.4 步/秒且零死亡
- 长文档批量评分，并保留答案归因

## 技术特点

- 上游 Laya（锁定 v0.4.17）的编码器与决策头用 Apple MLX 框架重新实现；提示词格式化、校准、路由与输出结构均遵循上游，移植一致性在 FP32 与 FP16 下均通过 63/63 道验证题（378/378 次比对）
- 每组问题一次双向前向传播直接返回校准概率——无自回归 token 生成、无 JSON 解析；检查点为发布在 Hugging Face 的 322M/421M 参数 MLX FP16 权重，附固定版本与校验和
- 吞吐选项包括 `compile=True`、`pad_to_multiple=16` 与 `cache_prompts=True`；`predict_batch` 在相同问题结构间共享前向传播，长文本扫描保留答案归因
- 边界明确：CUDA、ONNX、PyTorch 后端控制与训练留在上游；RLCD 训练与微调不在本移植范围内
