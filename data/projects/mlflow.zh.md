---
name: MLflow
slug: mlflow
homepage: https://mlflow.org/
repo: https://github.com/mlflow/mlflow
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Dev Tools
  - ML Platform
description: MLflow 是一个开源的机器学习生命周期平台，用于实验追踪、模型管理和部署。
logo: ''
author: MLflow
ossDate: '2018-06-05T16:05:58.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

MLflow 是一个旨在简化机器学习生命周期管理的开源平台，提供实验追踪（Tracking）、项目打包（Projects）、模型注册（Model Registry）和模型部署等功能。它能够与主流框架（如 TensorFlow、PyTorch、scikit-learn）集成，支持多种后端存储与部署方案，适合研发与生产环境的模型管理需求。

## 主要特性

- 实验追踪：记录参数、指标与模型工件，便于比较与复现。
- 模型注册：集中管理模型版本、元数据与生命周期（阶段迁移）。
- 项目封装：使用可复现的运行环境和入口脚本打包实验。
- 部署集成：支持本地、云端与第三方平台的部署适配。

## 使用场景

- 机器学习实验管理与结果复现。
- 模型版本控制与审核流程。
- 将训练好的模型部署到推理服务或生产流水线。

## 技术特点

- 与主流 ML 框架无缝集成，提供 Python API 与 CLI。
- 支持多种存储后端（如文件系统、S3、数据库）和跟踪后端（如 MLflow Tracking Server）。
- 社区活跃、插件生态丰富，且采用 Apache-2.0 许可，适合企业和开源协作。
