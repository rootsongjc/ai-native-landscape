---
name: Magika
slug: magika
homepage: https://securityresearch.google/magika/
repo: https://github.com/google/magika
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Tool
description: Magika 是 Google 安全研究推出的基于深度学习的高效文件类型识别工具。
logo: ''
author: Google
ossDate: '2023-08-22T09:36:55Z'
featured: false
status: tracked
---

## 简介

Magika 是由 Google 安全研究团队开发的 AI 驱动文件内容类型检测工具，使用轻量级深度学习模型在单个 CPU 上以毫秒级延迟识别超过 200 种文件类型。该模型在约 1 亿个样本上训练，准确率接近 99%，已被 Google 的 Gmail 和 Drive 等大规模产品用于将文件路由到正确的安全扫描器和内容处理器。

## 主要特性

- 轻量模型仅需几 MB 存储空间，加载后每个文件推理耗时在毫秒级，适用于高吞吐量的批量处理。
- 多语言绑定支持，包括 Rust CLI、Python API、JavaScript/TypeScript 绑定以及正在开发中的 Go 绑定。
- 覆盖超过 200 种内容类型，提供按类型设定的置信度阈值和可配置模式（高置信度、中置信度、最佳猜测）。
- 支持通过 pip、pipx 或 NPM 简单安装，并提供无需任何设置的浏览器演示。

## 使用场景

- 安全和内容审查管道，需要将上传或传输的文件路由到适当的扫描器和策略引擎。
- 大规模离线处理日志、邮件归档和存储系统，通过快速文件预分类实现高效的下游分发。
- CI/CD 和取证自动化工作流，在构建或调查过程中需要可靠的文件类型提取和分析能力。

## 技术特点

- 定制化的轻量级深度学习模型配合按类型置信度阈值策略，在基准测试集上实现约 99% 的准确率，同时保持低延迟和最小资源消耗。
- 优化的批量推理和有限输入采样技术确保分类速度几乎不受文件大小影响。
- 专为可扩展的 CPU 部署设计，无需 GPU，适用于服务端和边缘环境。
