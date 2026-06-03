---
name: PicoClaw
slug: picoclaw
homepage: null
repo: https://github.com/sipeed/picoclaw
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Application
  - CLI
  - Dev Tools
description: PicoClaw 是一个用 Go 编写的超轻量 AI 助手，面向低成本硬件场景，具备低内存占用与快速启动能力。
author: Sipeed
ossDate: '2026-02-04T12:32:35Z'
featured: false
status: tracked
---

PicoClaw 是一个用 Go 编写的超轻量 AI 智能体，可在极低成本的硬件上以极小资源开销运行。它在约 10 美元的单板计算机上实现约 1 秒启动、常驻内存低于 10 MB，同时仍可连接主流 LLM 提供商，是边缘部署 AI 助手的理想选择。

## 超轻量运行时

- 常驻内存低于 10 MB，在弱单核 CPU 上约 1 秒即可启动
- 单二进制跨架构构建，支持 RISC-V、ARM 和 x86
- 极小的运行时开销，适合 IoT 设备、单板机和嵌入式环境

## 连接与运行模式

- 可配置的多 LLM 提供商和网页搜索适配器
- 网关模式，作为嵌入式部署中的轻量 AI 代理
- 守护进程模式，支持边缘设备的无头常驻运行

## 可扩展性

- 模块化适配器系统，支持切换不同的 LLM 后端和检索工具
- 精巧的可组合组件，在资源极其受限的环境中仍可扩展
- 作为极端模型压缩和自举式智能体设计的参考实现
