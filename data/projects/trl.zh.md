---
name: TRL
slug: trl
homepage: http://hf.co/docs/trl
repo: https://github.com/huggingface/trl
license: Unknown
category: training-optimization
subCategory: finetuning-alignment
tags:
  - RLHF
  - Training
description: TRL 是 Hugging Face 提供的用于在变换器模型上进行强化学习训练的开源工具包。
author: Hugging Face
ossDate: '2020-03-27T10:54:55Z'
featured: false
status: tracked
---

TRL（Transformer Reinforcement Learning）是 Hugging Face 提供的开源库，为使用强化学习训练 Transformer 语言模型提供端到端工具。它提供涵盖奖励建模、策略优化和评估的生产级流水线，与 Hugging Face 生态紧密集成，支持在任何预训练 Transformer 模型上实施 RLHF 等对齐技术。

## 训练策略

- 支持包括 PPO、DPO、KTO 和奖励建模在内的多种训练策略
- 通过可配置的训练循环实现对齐过程的精细控制
- 模块化架构允许自定义奖励函数、策略包装器和数据管道
- 接入自定义组件无需修改核心训练循环

## Hugging Face 集成

- 与 Hugging Face Hub 无缝集成，直接加载预训练模型和数据集
- 训练结果可推送回 Hub 进行分享与协作
- 基于 Transformers 和 Accelerate 库构建，兼容 Hub 支持的所有模型
- 内置训练脚本、评估工具和日志集成

## 对齐与评估

- AI 团队使用人类偏好数据集对对话和生成模型进行 RLHF 微调
- 安全与对齐研究人员在特定任务上优化模型行为，减少有害输出
- 学术研究者在标准化框架中评估新型训练策略、奖励函数和稳定性改进
- 简化实验的复现与对比
