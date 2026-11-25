---
name: Runpod Python SDK
slug: runpod-python
homepage: https://www.runpod.io
repo: https://github.com/runpod/runpod-python
license: MIT
category: platform-infra
subCategory: gpu-cloud-marketplaces
tags:
  - GPU Cloud
  - Serverless
  - SDK
description: 'Runpod GPU 云的开源 Python 库，涵盖平台 API 与 Serverless Worker SDK。'
author: Runpod
ossDate: '2022-12-09T21:35:48.000Z'
status: tracked
---

## 简介

runpod-python 是 Runpod 的官方 Python SDK。Runpod 是提供按需 Pod 与 Serverless GPU 端点的算力云。该库封装了管理 Pod 和端点的 Runpod API，并提供实现 Serverless 处理函数所需的 Worker SDK。云服务本身为商业平台，本仓库是其开源 SDK。

## 主要特性

- 用于创建和管理 GPU Pod 与端点的 API 客户端
- 基于 handler 的 Serverless Worker SDK
- 支持同步与异步调用端点
- 支持在本地测试 Serverless Worker

## 使用场景

- 将模型封装为 Serverless GPU 端点
- 用 Python 自动化管理 GPU Pod 生命周期

## 技术特点

- 以 `runpod` 包名发布在 PyPI
- SDK 采用 MIT 许可证，Runpod 平台为闭源
