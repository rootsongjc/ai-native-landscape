---
name: PyTorch Lightning
slug: pytorch-lightning
homepage: https://lightning.ai/pytorch-lightning/
repo: https://github.com/lightning-ai/pytorch-lightning
license: Apache-2.0
category: training-optimization
subCategory: training-frameworks
tags:
  - Framework
  - Training
description: PyTorch Lightning 是一个简化 PyTorch 训练流程的开源框架，帮助用户高效构建、训练和部署深度学习模型。
author: Lightning AI
ossDate: '2019-03-31T00:45:57.000Z'
featured: false
status: tracked
---

## 简介

PyTorch Lightning 是一个高层训练框架，将训练循环、分布式配置、日志记录和检查点等工程样板代码抽象化，使研究人员和工程师能够专注于模型设计本身。它支持从单 GPU 到超过 10,000 个 GPU 的多节点集群无缝扩展，且无需修改代码。

## 主要特性

- 开箱即用的训练循环、混合精度、早停、检查点和实验追踪自动化处理。
- 从 CPU 到多节点多 GPU 或 TPU 集群的透明扩展，零代码修改。
- 与 TensorBoard、Weights & Biases、MLflow、Hugging Face、TorchServe 和 ONNX 深度集成，覆盖端到端 ML 工作流。
- 高度解耦的 Trainer 和 LightningModule 抽象，支持预训练、微调和自动化实验管理。

## 使用场景

PyTorch Lightning 广泛应用于学术研究中的可复现大规模实验，以及工业界的生产模型训练和部署。团队利用它进行基础模型预训练、领域数据微调，以及在分布式基础设施上管理自动化的超参数搜索和实验管道。

## 技术特点

该框架基于 PyTorch 构建，提供简洁、模块化的代码库，拥有活跃的开源社区和完善的文档。其核心抽象将研究逻辑与工程关注点分离，支持从快速原型直接过渡到生产环境。架构支持包括 FSDP、DeepSpeed 和 DDP 在内的多种分布式训练策略，适用于在任何规模的基础设施上训练任意大小的模型。
