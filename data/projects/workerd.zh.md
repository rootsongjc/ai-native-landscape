---
name: workerd
slug: workerd
homepage: null
repo: https://github.com/cloudflare/workerd
license: Apache-2.0
category: platform-infra
subCategory: deployment-operations
tags:
  - Deployment
  - Dev Tools
description: workerd 是 Cloudflare 提供的开源 JavaScript/Wasm 服务器运行时，旨在本地或自托管环境运行与 Cloudflare Workers 兼容的 nanoservices 与边缘应用。
author: Cloudflare
ossDate: '2022-09-15T15:15:16.000Z'
featured: false
status: tracked
---

## 简介

workerd 是 Cloudflare 的 JavaScript/Wasm 运行时，基于支持 Cloudflare Workers 的内部组件打造，可在本地或自托管环境运行 Workers 兼容的应用与 nanoservices。它既可作为开发调试工具，也可用于自托管的边缘式应用服务。

## 主要特性

- 兼容 Workers API 的运行时设计，支持 `fetch()` 等标准 Web API。
- 支持 JavaScript/TypeScript、WebAssembly，并可通过 Bazel 构建和发布二进制包。
- 提供配置化的 Cap'n Proto 格式配置与能力绑定（capability bindings），提高可组合性与安全性。
- 可与 Wrangler、Miniflare 等工具协同，用于本地开发与测试。

## 使用场景

- 在本地或私有云中自托管 Workers 兼容服务以满足合规或离线运行需求。
- 将 workerd 作为可编程 HTTP 代理或应用服务器运行，替代某些传统微服务场景。
- 用作开发工具链的一部分，快速迭代和测试 Edge 应用。

## 技术特点

- 单线程事件循环模型，适合高并发 I/O 场景。
- 基于 Web 标准的 API，便于将浏览器/Worker 代码迁移到服务器端运行。
- 与 Cloudflare 的 KV、Durable Objects 等云概念在设计上兼容，便于迁移与混合部署。
- 项目采用 Apache-2.0 许可证，社区活跃，持续更新。
