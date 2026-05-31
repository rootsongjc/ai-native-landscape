---
name: Flyte
slug: flyte
homepage: https://flyte.org/
repo: https://github.com/flyteorg/flyte
license: Unknown
category: applications-products
subCategory: workflow-automation
tags:
  - Deployment
  - ML Platform
  - Workflow
description: 可扩展且可重复的开源工作流编排平台，适用于数据、ML 与分析管道的生产化部署。
logo: ''
author: Flyte 社区
ossDate: '2019-10-21T17:40:04.000Z'
featured: false
status: tracked
---

## 简介

Flyte 是一个面向生产环境的开源工作流编排与调度平台，专注于可扩展性、类型化接口与可重复性，支持在 Kubernetes 上运行复杂的数据与机器学习工作流。

## 主要特性

- 强类型接口与数据守卫（Flyte types）以提升数据质量与可维护性。
- 多语言 SDK 支持（Python、Java 等），并通过容器化实现依赖隔离。
- 支持动态工作流、MapTasks、任务级缓存和失败恢复等高级功能。
- 提供本地 sandbox、命令行工具和可视化控制面板，便于开发与调试。

## 使用场景

- 生产化数据/ML 管道调度与编排，在云或本地 Kubernetes 集群上运行。
- 将研究代码迁移为可重复运行的生产工作流，并管理版本与数据血缘。
- 在大规模并行任务（MapReduce 风格）或长时运行任务中优化资源利用与恢复策略。

## 技术特点

- 以 Go 实现核心组件，结合 SDK（如 Python 的 flytekit）简化开发体验。
- 深度集成 Kubernetes，支持容器化任务、动态资源调度与多租户场景。
- 丰富的文档与社区支持（<https://docs.flyte.org/>），并被多家大型企业采用。
