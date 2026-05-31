---
name: Keploy
slug: keploy
homepage: https://keploy.io/
repo: https://github.com/keploy/keploy
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Dev Tools
  - RAG
description: 基于真实流量自动生成 API 和集成测试的开发者工具，支持记录并回放 API 调用、数据库操作与消息流，生成可重复运行的测试与 mocks。
logo: ''
author: Keploy
ossDate: '2022-01-19T10:40:31.000Z'
featured: false
status: tracked
---

## 简介

Keploy 是一个面向开发者的 API 与集成测试平台，它通过在网络层（使用 eBPF 等技术）无侵入地记录真实运行时的 API 调用、数据库查询与消息流，然后将这些录制内容转换为可重复执行的测试用例和数据 mock，从而大幅缩短测试构建时间并提高覆盖率。

## 主要特性

- 无需修改代码：通过网络层捕获流量，支持多语言和任意框架。
- 录制并回放：将真实流量转换为测试用例与 mocks，支持数据库、队列和外部 API 的完整重放。
- 基于流量生成覆盖率：计算语句与分支覆盖，帮助扩展 API 覆盖面。
- CI/CD 集成：可在本地、CI（如 GitHub Actions）或 Kubernetes 环境中作为测试套件运行。

## 使用场景

- 将真实生产/测试流量转换为回归测试与集成测试。
- 在 CI 中替代复杂的环境依赖，通过 mocks 与 infra-virtualization 运行测试。
- 快速生成高覆盖率的接口测试以发现边界值和异常情况。

## 技术特点

- 网络层捕获：使用 eBPF 等技术在网络层拦截流量，做到无 SDK、无入侵的录制。
- Infra‑Virtualization：支持数据库（Postgres、MySQL、MongoDB）、消息队列（Kafka、RabbitMQ）等的确定性回放。
- 多语言兼容：因在网络层工作，对语言与框架无依赖，主要实现为 Go 项目。
