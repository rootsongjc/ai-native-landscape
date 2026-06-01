---
name: Valkey
slug: valkey
homepage: https://valkey.io
repo: https://github.com/valkey-io/valkey
license: Unknown
category: platform-infra
subCategory: data-platforms
tags:
  - Database
description: 一个为缓存和实时工作负载优化的高性能分布式键值数据库。
logo: ''
author: Valkey Project
ossDate: '2024-03-22T00:42:17Z'
featured: false
status: archived
---

## 详细介绍

Valkey 是一个面向缓存与其它实时工作负载的高性能分布式键值数据库。它保留了与 Redis 兼容的使用习惯，同时通过原生数据结构、模块化插件系统和多样的持久化与复制策略，满足高并发、低延迟场景的要求。项目由 Valkey 社区维护，并托管在 GitHub 与官方站点上以便获取文档与二进制发布。

## 主要特性

- 与 Redis 协议兼容，便于迁移与生态互操作。
- 丰富的原生数据结构与模块扩展点，支持自定义数据结构与访问模式。
- 优化的执行路径与可选内存分配器以提高吞吐与降低延迟。
- 支持 TLS、RDMA 等企业级部署选项与跨平台构建（Linux、macOS、*BSD）。

## 使用场景

- 高并发缓存与会话存储，要求极低的访问延迟与高吞吐。
- 实时计数、排行榜与短期状态管理场景。
- 需要与 Redis 工具链兼容但追求可扩展性能的系统迁移。
- 在需要模块扩展或特殊传输（如 RDMA）优化的分布式环境中部署。

## 技术特点

- 模块化架构与插件系统，便于扩展新命令与数据结构。
- 多种构建方式（Makefile / CMake）与平台支持，方便集成到 CI/CD 流程。
- 提供完整测试与基准套件，以及针对生产环境的运行时调优选项。
- 社区驱动开发，源代码托管在 GitHub（创建时间见 `oss_date` 字段），拥有活跃的贡献者网络。

## 总结

Valkey 是一个面向工程化与生产级部署的开源键值数据库，适合对延迟和吞吐有严格要求的缓存与实时系统。要了解更多，请访问项目主页或仓库。
