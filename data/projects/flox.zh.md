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
status: tracked
---

## 简介

Flox 为软件开发生命周期提供确定性基础，以 Nix 为核心驱动可复现、可分享的开发环境。它通过环境分层与依赖替换，确保本地开发、CI 管道与镜像构建之间的运行时一致性，从根本上消除”在我电脑上能跑”的问题。

## 主要特性

Flox 通过分层机制实现可复现的环境构建，确保不同机器上依赖的一致性。它支持环境打包与分享以简化团队协作与上手流程，可将环境导出为容器镜像或其他可部署工件以便 CI/CD 集成，并提供友好的命令行工具简化环境创建、安装与激活。

## 使用场景

Flox 适用于需要环境一致性与可分享能力的项目，例如多模块微服务开发、CI 构建流水线、教学环境和企业级开发平台。它特别适合希望在不依赖传统容器层的前提下实现可移植开发环境的团队。

## 技术特点

Flox 借助 Nix 包生态实现软件包管理与环境隔离，采用层化的环境模型来替换或覆盖依赖。项目以 Rust 编写，支持将环境构建为可部署镜像，同时保留对 Nixpkgs 的访问以获取海量开源包。许可证为 GPL-2.0。
