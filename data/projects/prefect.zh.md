---
name: Prefect
slug: prefect
homepage: https://prefect.io
repo: https://github.com/prefecthq/prefect
license: Unknown
category: applications-products
subCategory: workflow-automation
tags:
  - Dev Tools
  - Workflow
description: Prefect 是用于构建弹性数据管道的工作流编排框架。
author: Prefect
ossDate: '2018-06-29T21:59:26.000Z'
featured: false
status: tracked
---

## 简介

Prefect 是一个面向 Python 的工作流编排框架，专注于构建弹性、可观测的数据管道。它将任务定义、调度、重试与监控等能力整合到可编程的工作流中，让数据工程和数据科学团队能够以更工程化的方式管理复杂的数据作业。

Prefect 的设计目标包括提高任务的可靠性、简化错误处理与重试策略、并提供丰富的可观测性（日志与指标），从而让开发者能够迅速定位失败并恢复任务。其灵活的运行模式既支持云端托管服务，也支持在企业自托管环境中运行，适应不同规模与治理要求。

此外，Prefect 提供与 Kubernetes、Airflow 等生态的集成能力，支持参数化工作流、动态任务生成以及与 CI/CD 的结合，便于将数据管道纳入软件工程实践与自动化部署流程。

## 主要特性

- 编排与调度：支持复杂依赖、参数化和动态工作流。
- 可观察性：内置监控、日志与重试机制，便于运维与告警。
- 部署灵活：云托管与自托管选项，适配企业扩展。

## 使用场景

- 定期 ETL 作业与事件驱动的数据处理流程。
- 机器学习训练与推理流水线编排。
- 替换分散脚本与临时调度方案，提升可靠性与可维护性。

## 技术特点

- 技术栈：Python 原生，易于与现有数据生态集成。
- 可扩展性：任务插件与自定义执行器支持多样化扩展。
- 许可：Apache-2.0，便于企业采用与社区协作。
