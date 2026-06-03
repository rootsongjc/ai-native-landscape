---
name: CSGHub
slug: csghub
homepage: https://opencsg.com
repo: https://github.com/opencsgs/csghub
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - Deployment
  - LLM
  - ML Platform
  - SDK
description: 一个开源的 LLM 资产与生命周期管理平台，支持 SaaS 与本地部署并兼容 Python SDK。
author: OpenCSG
ossDate: '2024-01-12T09:44:48Z'
featured: false
status: tracked
---
CSGHub 是由 OpenCSG 团队开发的开源平台，用于管理大语言模型及相关 AI 资产（模型、数据集、代码等）。它提供类似 Hugging Face 的功能体验，同时支持 SaaS 和本地部署，满足企业级 LLM 生命周期管理需求。

## 资产管理

- 集中化管理，支持模型和数据集的上传、下载、版本控制和权限管理
- 广泛的模型格式兼容性，支持主流框架和推理运行时
- 空间管理和资产索引，便于大规模组织团队资源
- 面向多租户企业环境的细粒度权限控制

## 可扩展性与安全

- 可扩展的微服务框架和插件机制，便于集成训练与推理流水线
- 面向本地部署和离线环境的企业级安全特性
- 可插拔的存储后端，适配现有基础设施
- 标准化 OpenAPI 接口，支持编程式访问和自动化

## 使用场景

- 企业和团队的内部模型仓库、模型分发与审计
- 满足数据主权严格要求的离线推理部署
- 基于私有数据的微调流水线，敏感数据不出域
- 需要统一治理多模型、多服务的生产化平台

## 部署架构

- 微服务架构，支持 Docker Compose 开发环境和 Kubernetes/Helm 生产部署
- 高可用部署模式，支持水平扩展和负载均衡
- 兼容 Python SDK，便于无缝集成到现有 ML 工作流
