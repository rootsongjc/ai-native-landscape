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

## 简介

CSGHub 是由 OpenCSG 团队开发的开源平台，用于管理大语言模型及相关 AI 资产（模型、数据集、代码等）。它提供类似 Hugging Face 的功能体验，同时支持 SaaS 和本地部署，满足企业级 LLM 生命周期管理需求。

## 主要特性

CSGHub 提供集中化的资产管理，支持模型和数据集的上传、下载、版本控制和权限管理。它具备可扩展的微服务框架和插件机制，便于集成训练与推理流水线，并提供企业级安全与本地部署能力以合规需求。

## 使用场景

CSGHub 适用于需要集中管理模型和数据资产的企业和团队，包括内部模型仓库、模型分发与审计等场景。它支持离线推理部署、基于私有数据的微调流水线，以及需要对接多模型、多服务的生产化平台。

## 技术特点

CSGHub 采用微服务架构与标准化 OpenAPI，支持 Docker Compose 和 Kubernetes/Helm 部署。它集成模型版本管理、空间管理和资产索引，具备可插拔的存储后端和高可用部署能力，便于企业实现端到端的 LLM 生命周期管理。
