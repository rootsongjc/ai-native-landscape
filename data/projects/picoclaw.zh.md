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
logo: ''
author: Sipeed
ossDate: '2026-02-04T12:32:35Z'
featured: false
status: tracked
---

## 简介

PicoClaw 是一个用 Go 编写的超轻量 AI 智能体，可在极低成本的硬件上以极小资源开销运行。它在约 10 美元的单板计算机上实现约 1 秒启动、常驻内存低于 10 MB，同时仍可连接主流 LLM 提供商，是边缘部署 AI 助手的理想选择。

## 主要特性

- 超小资源占用：常驻内存低于 10 MB，在弱单核 CPU 上约 1 秒即可启动。
- 单二进制跨架构构建，支持 RISC-V、ARM 和 x86，可部署在 IoT 设备到服务器等各种环境。
- 可配置的多 LLM 提供商和网页搜索适配器，并提供网关和守护进程模式以支持嵌入式或无头运行。

## 使用场景

爱好者和创客可以在廉价单板机上运行自托管的个人助理。边缘部署可利用 PicoClaw 的低资源消耗，在 IoT 节点上执行监控、告警和自动化任务。研究人员可将它作为极端模型压缩和自举式智能体设计的参考实现。

## 技术特点

PicoClaw 使用 Go 语言实现，注重最小化二进制体积和运行时开销。其模块化适配器系统允许开发者切换不同的 LLM 后端和检索工具，精巧的可组合组件即使在资源极其受限的环境中也能方便地扩展。
