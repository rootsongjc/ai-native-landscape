---
name: KitOps
slug: kitops
homepage: https://kitops.org
repo: https://github.com/kitops-ml/kitops
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Deployment
  - Dev Tools
description: KitOps 是 CNCF 支持的开源项目，提供将 AI/ML 项目封装为可签名、可版本化的 OCI 工件的标准化方案。
logo: ''
author: CNCF
ossDate: '2024-02-02T18:53:31Z'
featured: false
status: tracked
---

## 详细介绍

KitOps 是一个由 CNCF 托管的开源标准与工具集合，旨在把 AI/ML 项目（包括模型权重、数据集、代码、配置与实验元数据）封装为可在 OCI 注册表中存储的不可变工件（ModelKit）。通过将模型交付物提升为一等受管资产，KitOps 让模型的打包、签名、溯源与版本管理可以像软件包管理一样被集成到常规 DevOps 流水线中，从而降低模型部署与审计的复杂度。

## 主要特性

KitOps 通过 ModelKit 与 Kitfile 提供标准化描述和打包能力，配套的 CLI 支持本地打包、推送与拉取工件；工件可被签名与校验以保证可审计性。项目兼容 OCI 生态，可与现有容器注册表、CI/CD 与 Kubernetes 集成，支持私有化部署与企业级合规要求。

## 使用场景

KitOps 适用于需要严格治理和可审计模型交付的场景，例如：企业级模型发布流程、需要保留模型版本与可追溯性的监管合规场景（如欧盟 AI 法规）、以及在离线或内网环境中管理模型与数据的私有化部署。

## 技术特点

KitOps 基于 OCI 标准，采用不可变工件（ModelKit）和声明式 Kitfile 来描述工件组成，支持签名、增量拉取与细粒度版本控制。实现包含 Go 语言的核心实现与跨平台 CLI，并提供与 Kubernetes、容器注册表以及现有 CI 工具链的适配层，易于嵌入现有机器学习工程化流程。
