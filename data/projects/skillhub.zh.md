---
name: SkillHub
slug: skillhub
homepage: null
repo: https://github.com/iflytek/skillhub
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Application
  - CLI
  - Dev Tools
description: SkillHub 是由科大讯飞开源的企业级智能体技能注册中心，支持技能包的发布、版本管理、团队命名空间与 RBAC 权限治理，可私有化部署于 Docker 或 Kubernetes 环境。
logo: ''
author: iFlytek
ossDate: '2026-03-11T12:17:05Z'
featured: false
status: tracked
---

## 详细介绍

SkillHub 是一个面向企业的开源智能体技能注册中心，由科大讯飞（iFlytek）开发并开源。它为团队提供了一个私有化、可治理的平台，用于发布、发现和管理可复用的智能体技能包。SkillHub 支持语义化版本控制、团队命名空间、RBAC 权限管理以及审计日志，可部署在企业防火墙后的 Docker 或 Kubernetes 环境中，确保数据主权与合规性。

## 主要特性

- 私有化部署：支持 Docker 和 Kubernetes 部署，可将技能包存储在企业防火墙内，保障数据主权。
- 发布与版本管理：支持语义化版本号、自定义标签（beta、stable）及自动 latest 追踪。
- 技能发现：全文搜索，支持按命名空间、下载量、评分和更新时间过滤。
- 团队命名空间：在团队或全局范围内组织技能，每个命名空间拥有独立的成员与角色（Owner/Admin/Member）。
- 审核与治理：团队管理员在命名空间内审核，平台管理员控制全局晋升策略，所有治理操作均有审计日志。
- CLI 工具：原生 REST API 以及兼容 ClawHub 风格注册中心的 CLI 客户端。
- 插件化存储：开发环境使用本地文件系统，生产环境支持 S3/MinIO，通过配置切换。
- 国际化：基于 i18next 的多语言支持。

## 使用场景

- 企业内部智能体技能的统一管理与分发，确保技能质量与合规性。
- 面向 OpenClaw、AstronClaw、Loomy 等智能体平台的技能注册与安装后端。
- 团队协作中通过命名空间与权限体系实现技能的分级治理。
- 在 Kubernetes 环境中大规模部署，为多个团队提供独立的技能仓库。

## 技术特点

- 后端采用 Spring Boot 3.2.3 + Java 21，多模块 Maven 项目，使用 PostgreSQL 16 与 Redis 7。
- 前端基于 React 19 + TypeScript + Vite，使用 TanStack Router/Query、Tailwind CSS 与 Radix UI。
- 提供 Prometheus + Grafana 监控栈，支持 Kubernetes 部署清单。
- 开源协议为 Apache License 2.0。
