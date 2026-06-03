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
author: CNCF
ossDate: '2024-02-02T18:53:31Z'
featured: false
status: tracked
---

KitOps 是 CNCF 支持的开源 DevOps 工具，用于标准化打包和版本管理 AI/ML 模型、数据集、代码和配置，将其封装为 OCI 工件（ModelKit）。通过将模型交付物作为一等受管资产，KitOps 让团队能够将 AI 工件的打包、签名、溯源和版本管理直接集成到现有 DevOps 流水线中。

## 主要特性

- 标准化的打包格式（ModelKit）和声明式描述文件（Kitfile），确保 AI 工件可复现
- 跨平台 CLI 支持工件的打包、推送与拉取，并内置签名与校验机制以确保可审计性
- 完全兼容 OCI 标准，可与容器注册表、CI/CD 系统和 Kubernetes 无缝集成
- 支持私有化部署与企业级合规需求，包括离线环境
- 不可变工件配合增量拉取与细粒度版本控制

## 使用场景

- 需要受控、签名和可审计模型交付的企业级模型发布流程
- 欧盟 AI 法规等要求模型版本化和可追溯性的监管合规场景
- 在离线或内网环境中安全管理模型与数据的私有化部署
- ML 工程团队需要跨训练、测试和生产阶段追踪模型溯源

## 技术特点

- 基于 OCI 标准构建，使用不可变工件（ModelKit）和声明式 Kitfile 描述工件内容
- 核心采用 Go 语言实现，提供跨平台 CLI，并为 Kubernetes、容器注册表和现有 CI 工具链提供适配层
- 设计目标是无缝嵌入 ML 工程化流程，不干扰现有 DevOps 实践
