---
name: Tabby
slug: tabby
homepage: https://tabby.tabbyml.com
repo: https://github.com/tabbyml/tabby
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Dev Tools
description: Tabby 是一个可自托管的 AI 编程助手，提供企业级与社区级的本地部署方案，适合在私有网络或对数据隐私有要求的场景中使用。
logo: ''
author: TabbyML
ossDate: '2023-03-16T09:18:01.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Tabby 是一款开源且可自托管的 AI 编程助手，旨在为开发团队提供在本地或私有云中运行的替代方案，减少对第三方云服务的依赖并保护代码与数据隐私。它集成了代码浏览、上下文搜索、聊天与答案引擎等功能，支持在团队内部构建知识库与回答引擎。

## 主要特性

- 可自托管：无需外部云服务或数据库，便于企业在内网部署。
- 丰富的集成：提供 IDE 插件、Docker 镜像与 REST API，方便与现有开发流程对接。
- 支持多模型与硬件：兼容多种后端模型与消费级 GPU。

## 使用场景

- 企业内部知识库与问答引擎，保护敏感仓库和文档。
- 开发辅助：代码补全、仓库级上下文检索与自动化代码审查场景。
- 教育与研究：便于在受控环境中对模型与工具进行实验和评估。

## 技术特点

- 采用模块化架构，包含 Answer Engine、Code Browser 与后台作业系统。
- 提供 Docker 与源码构建流程，支持 Rust/Cargo 构建链与子模块管理。
- 支持通过 REST API 扩展外部数据源与自定义模型。
