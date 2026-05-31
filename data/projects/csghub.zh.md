---
name: CSGHub
slug: csghub
homepage: https://opencsg.com
repo: https://github.com/opencsgs/csghub
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - Deployment
  - LLM
  - ML Platform
  - SDK
description: 一个开源的 LLM 资产与生命周期管理平台，支持 SaaS 与本地部署并兼容 Python SDK。
logo: ''
author: OpenCSG
ossDate: '2024-01-12T09:44:48Z'
featured: false
status: tracked
---

## 详细介绍

CSGHub 是由 OpenCSG 团队开发的开源平台，用于集中管理大语言模型（LLM）及其相关资产（模型、数据集、Space、代码等）。它同时提供免费 SaaS 服务与可部署于私有云/本地的数据管理与分发能力，兼容常见的 Python SDK 并支持通过 Web、命令行和 OpenAPI 进行操作。

## 主要特性

- 统一的大模型与资产管理，支持上传、下载、版本控制与权限管理。
- 可扩展的插件与微服务框架，便于集成训练、微调与推理流水线。
- 企业级安全与访问控制，支持本地部署满足合规需求。
- 提供类似 Hugging Face 的体验，并兼容多种模型格式与部署方式。

## 使用场景

CSGHub 适用于需要集中管理模型和数据资产的企业或团队：内部模型仓库、模型分发与审计、离线部署的推理服务、基于私有数据的微调/训练流水线，以及需要对接多模型、多服务的生产化平台场景。

## 技术特点

CSGHub 采用微服务架构与标准化 OpenAPI，支持 Docker Compose 与 Kubernetes/Helm 部署。它集成模型版本管理、空间（Space）管理与资产索引，具备可扩展的存储后端与高可用部署能力，便于在企业环境实现端到端的 LLM 生命周期管理。
