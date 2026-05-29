---
name: Daytona
slug: daytona
homepage: https://www.daytona.io/docs
repo: https://github.com/daytonaio/daytona
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - AI Terminal
  - Dev Tools
  - Sandbox
description: 用于安全执行 AI 生成代码的弹性基础设施，提供隔离沙箱、并发执行与持久化沙箱能力。
logo: ''
author: Daytona
ossDate: '2024-02-06T08:21:20.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

Daytona 是一个面向运行 AI 生成代码的安全且弹性的基础设施平台，提供快速创建隔离沙箱来执行代码、程序化控制以及持久化沙箱状态，适用于需要在受控环境中运行模型生成代码的产品与研究场景。

## 主要特性

- 低延时沙箱创建：Sub-90ms 的沙箱创建性能用于快速交互场景。
- 安全隔离：分离的运行时与文件系统，降低对主机的风险。
- 多语言 SDK：提供 Python 与 TypeScript SDK，支持程序化控制与集成。
- 并发与持久化：支持并行工作流、持久化沙箱与 OCI/Docker 镜像兼容部署。

## 使用场景

- 在产品中安全执行 AI 生成的代码片段或脚本。
- 构建自动化测试、代码评估或教学沙箱环境。
- 多用户并发的代码执行与实验平台。

## 技术特点

- 多语言实现与 SDK 支持，仓库为多语言 mono-repo（TypeScript、Go、Python 等）。
- 提供详尽的文档（<https://www.daytona.io/docs>）与示例，支持 Docker/OCI 部署。
- 许可证为 AGPL-3.0（请根据使用场景评估许可证影响），社区活跃且发布频繁。
