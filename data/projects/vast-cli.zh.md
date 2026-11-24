---
name: Vast.ai CLI
slug: vast-cli
homepage: https://vast.ai
repo: https://github.com/vast-ai/vast-cli
license: MIT
category: platform-infra
subCategory: gpu-cloud-marketplaces
tags:
  - GPU Marketplace
  - GPU Rental
  - CLI
description: 'Vast.ai 的开源 Python 命令行与 API 客户端。Vast.ai 是撮合机主与按需、可中断租户的 GPU 租赁市场。'
author: Vast.ai
ossDate: '2019-01-29T00:44:09.000Z'
featured: false
status: tracked
---

## 简介

vast-cli 是 Vast.ai GPU 算力市场的官方命令行与 Python 客户端。租户可用它搜索报价、创建和管理实例，机主可用它上架机器并设置价格。市场服务本身为商业平台，本仓库是其开源客户端。

## 主要特性

- 以查询语法按 GPU 型号、显存、价格和可靠性搜索市场报价
- 创建、管理和销毁按需或可中断（竞价）实例
- 机主侧的机器上架与定价命令
- 可脚本化的 JSON 输出，便于自动化

## 使用场景

- 在脚本或 CI 中自动化租用 GPU
- 管理在市场上托管的机器

## 技术特点

- 基于 Vast.ai REST API 的 Python 客户端
- 客户端采用 MIT 许可证，市场后端为闭源
