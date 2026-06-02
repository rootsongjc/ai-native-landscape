---
name: AReaL
slug: areal
homepage: https://inclusionai.github.io/AReaL/
repo: https://github.com/inclusionai/areal
license: Unknown
category: training-optimization
subCategory: finetuning-alignment
tags:
  - Framework
  - RLHF
  - Training
description: 一个面向大规模推理与智能体模型的全异步强化学习训练系统，强调可扩展性与工程复现能力。
logo: ''
author: 蚂蚁集团
ossDate: '2025-02-24T07:23:43Z'
featured: false
status: tracked
---

## 简介

AReaL 是一个面向大规模推理模型与智能体训练的全异步强化学习系统，由 inclusionAI 社区维护并与蚂蚁集团、清华等学术机构合作开发。项目提供从算法到系统的协同设计，使训练在单节点到千卡级集群间平滑扩展，并公开论文、训练数据与复现实验细节以促进研究透明性。

## 主要特性

AReaL 采用完全异步的训练流水线以显著提升吞吐与可伸缩性，提供丰富的算法与示例（如 GRPO、GSPO、LitePPO）便于复现实验，并支持多种模型与后端（包括大规模参数分布式训练与 LoRA 微调方案）。项目采用 Apache-2.0 开源许可，提供完整文档与示例以便工程化集成。

## 使用场景

研究与工程团队在大规模集群上训练推理与智能体模型时，可使用 AReaL 作为高效训练框架。构建多回合智能体或搜索/检索集成的代理时，可利用其异步回放与工具集成能力加速迭代。快速试验新算法或在受限资源下可使用 AReaL-lite 进行原型验证。

## 技术特点

AReaL 采用算法与系统协同设计优化异步训练稳定性与效率，支持 Ray、Megatron、PyTorch FSDP 等训练后端。项目支持可组合的智能体回放与工具调用用于多步推理与检索增强训练（RAG），注重可复现性与开源实践，公开数据集、模型与训练方案。
