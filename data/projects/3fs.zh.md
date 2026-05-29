---
name: 3FS
slug: 3fs
homepage: null
repo: https://github.com/deepseek-ai/3fs
license: Unknown
category: platform-infra
subCategory: data-platforms
tags:
  - Database
description: 面向 AI 训练与推理负载的高性能分布式文件系统，优化数据并行与 I/O 性能以支撑大规模训练任务。
logo: ''
author: DeepSeek
ossDate: '2025-02-27T13:36:53.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

3FS 是为 AI 训练与推理工作负载设计的高性能分布式文件系统，着重于提升并行读写与数据局部性，从而降低 I/O 成本并加速大规模训练任务。它通过合理的数据布局与并发调度来优化吞吐与延迟表现。

## 主要特性

- 面向并行训练优化的数据分布与访问策略。
- 支持高并发读写与可扩展的集群部署。
- 提供容错与可观察性能力以满足生产环境需求。

## 使用场景

- 大规模模型训练需要高吞吐数据加载和分布式 I/O 的场景。
- 推理集群中对模型文件和特征存取有严格性能要求的场景。
- 作为后端存储支持数据并行训练与数据集分片策略。

## 技术特点

- 优化的分布式 I/O 协议和数据布局以减少网络与磁盘瓶颈。
- 注重扩展性与容错设计，支持横向扩展的集群部署。
- 提供监控与诊断工具以便运维与性能调优。
