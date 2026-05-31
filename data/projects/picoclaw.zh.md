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

## 详细介绍

PicoClaw 是一个用 Go 重构的超轻量级个人 AI 助手，目标是在极低资源的设备上提供实用的对话与自动化能力。项目声称可在近乎 $10 的单板硬件上运行，常驻内存小于 10MB 并实现约 1 秒的启动时间，通过一份自举式的实现将核心功能高度精简，同时保留与主流模型提供商（例如 OpenRouter、Zhipu、Brave Search 等）的适配能力。

## 主要特性

- 超轻量：面向低内存、低功耗设备的二进制实现，内存占用 <10MB。
- 快速启动：在弱 CPU 单核环境下约 1s 启动，适合边缘与离线场景。
- 多平台构建：单一可执行文件支持 RISC-V、ARM 与 x86 架构的跨平台部署。
- CLI 与集成：提供命令行工具与 gateway/daemon 模式，便于在嵌入式或服务器上集成。

## 使用场景

- 家庭或个人的自托管助理，运行在廉价单板或国产开发板上。
- 边缘监控与低成本 IoT 节点的自动化与告警助手。
- 教学与研究中用于演示极端模型压缩、部署与自举的小型案例。

## 技术特点

- 用 Go 编写，工程上注重二进制体积与运行时低开销。
- 支持通过配置接入多家 LLM 提供商与网络检索工具，配置样例见 README。
- 项目采用小而精的模块化设计，便于在资源受限环境下扩展工具与技能。
