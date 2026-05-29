---
name: Unity Catalog
slug: unitycatalog
homepage: https://unitycatalog.io/
repo: https://github.com/unitycatalog/unitycatalog
license: Unknown
category: rag-knowledge
subCategory: data-connectors
tags:
  - Connector
  - Data
description: 面向数据与 AI 的开放多模态目录，提供统一的治理、元数据管理与访问控制。
logo: ''
author: Unity Catalog Community
ossDate: '2023-01-01T00:00:00.000Z'
featured: false
status: tracked
---

## 简介

Unity Catalog 是一个开放的、多模态的数据与 AI 目录，旨在统一管理表格、文件、模型与其他数据资产的元数据与访问控制。它提供统一的治理、审计与策略机制，方便跨引擎（如 Spark、DuckDB、Trino 等）访问数据与 AI 资产。

该项目强调互操作性和企业级治理能力，支持对数据与模型的访问控制、审计日志以及策略执行，从而帮助团队在复杂的多租户环境中实现合规与协作。Unity Catalog 同时支持通过 REST API、CLI 与 SDK 进行自动化管理，便于将目录功能纳入 CI/CD 与数据平台流水线。

## 主要特性

- 多格式与多引擎支持，兼容 Delta Lake、Iceberg、Hudi 等存储格式。
- 统一的访问控制、审计与合规能力。
- 提供 CLI、SDK 与 REST API，便于集成与自动化管理。

## 使用场景

在实际应用中，Unity Catalog 可作为控制面用于统一索引数据湖中的资产，帮助数据工程师、数据科学家与治理团队共享相同的元数据信息和策略定义，降低不同引擎之间的数据不一致风险，并简化数据资产的发现与权限管理流程。

## 技术特点

基于开放规范实现，提供 OpenAPI、SDK 与文档。项目采用多语言实现（Java/Python/TypeScript），并在 LF AI & Data Foundation 社区中协同发展，适用于需要集中治理和跨引擎互操作的场景。
