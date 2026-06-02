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

## 简介

KitOps 是 CNCF 支持的开源 DevOps 工具，用于标准化打包和版本管理 AI/ML 模型、数据集、代码和配置，将其封装为 OCI 工件（ModelKit）。通过将模型交付物作为一等受管资产，KitOps 让团队能够将 AI 工件的打包、签名、溯源和版本管理直接集成到现有 DevOps 流水线中。

## 主要特性

KitOps 提供标准化的打包格式（ModelKit）和声明式描述文件（Kitfile），配合跨平台 CLI 支持工件的打包、推送与拉取，并内置签名与校验机制以确保可审计性。项目完全兼容 OCI 标准，可与容器注册表、CI/CD 系统和 Kubernetes 无缝集成，支持私有化部署与企业级合规需求。

## 使用场景

KitOps 非常适合需要受控和可审计模型交付的企业级模型发布流程，以及欧盟 AI 法规等要求模型版本化和可追溯性的监管合规场景。同时也适用于在离线或内网环境中安全管理模型与数据的私有化部署。

## 技术特点

KitOps 基于 OCI 标准构建，使用不可变工件（ModelKit）和声明式 Kitfile 描述工件内容，支持签名、增量拉取与细粒度版本控制。核心采用 Go 语言实现，提供跨平台 CLI，并为 Kubernetes、容器注册表和现有 CI 工具链提供适配层，易于嵌入机器学习工程化流程。
