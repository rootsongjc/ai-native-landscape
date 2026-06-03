---
name: BentoML
slug: bentoml
homepage: https://bentoml.com
repo: https://github.com/bentoml/bentoml
license: Apache-2.0
category: inference-serving
subCategory: model-serving
tags:
  - Deployment
  - Dev Tools
  - Inference Service
description: BentoML：用于将机器学习模型打包、容器化并在生产环境中高效部署与服务化的开源框架。
author: BentoML
ossDate: '2019-04-02T01:39:27.000Z'
featured: false
status: tracked
---
## 详细介绍

BentoML 致力于将任意机器学习/AI 模型快速包装为可部署的服务（Bento），支持一键生成容器镜像、模型版本管理与多框架兼容，便于从开发到生产的交付与复用。

## 主要特性

- 一行代码将模型封装为 REST/gRPC API，支持异步与批量调用。
- 自动构建可复现的部署工件（Bento），并生成 Docker 镜像以简化发布流程。
- 支持自适应批处理（adaptive batching）、模型并行与多模型编排以提升吞吐与资源利用率。
- 丰富的示例、插件和社区集成，提供可插拔的运行时与扩展点。

## 使用场景

- 在线推理 API 与微服务化模型部署。
- 多模型组合的推理流水线与任务队列场景。
- 研究模型快速迁移到云端或边缘的生产环境中。

## 技术特点

- Python 原生开发体验，兼容 PyTorch、TensorFlow、Transformers 等主流框架。
- 提供 Model Store 与版本管理，支持可插拔的运行时优化（如 adaptive batching）。
- 与容器化工具、CI/CD 流水线及 BentoCloud 等云平台集成，支持生产级部署能力。
