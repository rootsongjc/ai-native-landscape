---
name: Flox
slug: flox
homepage: https://flox.dev
repo: https://github.com/flox/flox
license: Unknown
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Dev Tools
  - Sandbox
description: 一个以 Nix 为核心、可复现且可分享的开发环境与包管理工具。
logo: ''
author: Flox
ossDate: '2022-12-22T15:52:43Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Flox 是一个以 Nix 为核心的可移植开发环境与包管理工具，旨在为开发者提供可复现、可分享、跨生命周期的一致环境。通过环境分层与依赖替换，Flox 允许在本地开发、CI 管道与镜像构建之间保持同一套运行时，从而减少“在我电脑上能跑”的问题。更多信息请见 [官网](https://flox.dev) 与 [文档](https://flox.dev/docs)。

## 主要特性

- 可复现的环境构建：使用分层（layering）机制管理依赖，确保不同机器上得到相同环境。
- 环境分享：支持将环境打包并与他人共享，便于协作与复现场景。
- 多场景镜像支持：能将环境导出为容器镜像或其它可部署工件，便于 CI/CD 集成。
- 友好的开发者体验：提供命令行工具 `flox`，简化环境创建、安装与激活流程。

## 使用场景

Flox 适用于需要环境一致性与可分享能力的项目，例如多模块微服务开发、CI 构建流水线、教学镜像与企业级开发平台。它尤其适合想要在不依赖传统容器层的前提下，实现可移植开发环境的团队。若需示例与教程，请参考 [文档](https://flox.dev/docs/tutorials/creating-environments)。

## 技术特点

Flox 借助 Nix 包生态实现软件包管理与环境隔离，采用层化的环境模型来替换或覆盖依赖。项目以 Rust 编写，支持将环境构建成镜像，同时保留对 Nixpkgs 的访问以获取海量开源包。许可证为 GPL-2.0。
