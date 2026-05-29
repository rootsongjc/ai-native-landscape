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

## 详细介绍

Magika 是由 Google 安全研究团队发布的开源工具，使用轻量级深度学习模型在单 CPU 上也能实现毫秒级的文件类型识别。它在约 1 亿个样本、200+ 内容类型上训练与评估，旨在为大规模应用（如 Gmail、Drive、安全扫描流水线）提供高准确率的内容类型判断，从而把文件路由到合适的检测或处理器。

## 主要特性

- 小体积、高性能：模型只有几 MB，加载后每个文件推理耗时在毫秒级，适合批量并发识别。
- 多绑定支持：提供 Rust CLI、Python API、JavaScript/TypeScript 绑定（用于网页演示）以及正在开发的 Go 绑定。
- 高覆盖与高精度：覆盖 200+ 内容类型，并通过每类阈值机制控制置信度，支持 `high-confidence`、`medium-confidence` 等模式。
- 易用性：支持命令行、Python 库安装以及网页 demo 无需部署即可试用。

## 使用场景

- 安全和内容审查：在上传或传输环节将文件路由到相应的安全扫描器或策略引擎。
- 大规模离线处理：对海量文件进行快速预分类与分发，适合日志、邮件归档、存储系统等场景。
- 自动化管道：结合 CI/CD、取样服务或取证工具做文件类型抽取与统计分析。

## 技术特点

Magika 使用定制化的轻量级深度学习模型及按内容类型设定的置信度阈值策略，既能保持高精度（在测试集上平均 ~99%），又能保证低延迟和低资源消耗。它采用批量推理优化与有限输入抽样技术，保证推理时间近乎与文件大小无关，从而适合在 CPU 环境下进行大规模部署。
