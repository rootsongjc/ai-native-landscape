---
name: Newton
slug: newton
homepage: https://newton-physics.github.io/newton/
repo: https://github.com/newton-physics/newton
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Framework
  - Simulator
description: 基于 NVIDIA Warp 的 GPU 加速物理仿真引擎，面向机器人与仿真研究。
logo: ''
author: Newton Project
ossDate: '2025-04-22T04:12:07.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

Newton 是一个基于 NVIDIA Warp 的 GPU 加速物理仿真引擎，专为机器人学与仿真研究设计，强调可扩展性、可微分仿真与 OpenUSD 支持，便于大规模实验与快速迭代。

## 主要特性

- GPU 优化的物理内核与多种示例（机器人、布料、流体、MPM 等）。
- 与 MuJoCo Warp 集成，提供高性能后端与可扩展示例集合。
- 支持 USD 输出、可微分仿真和多设备（CPU/GPU）运行选项。

## 使用场景

- 机器人控制与仿真研究的快速原型与性能测试。
- 大规模物理仿真、材料与布料建模、逆运动学与动力学评估。
- 需要 GPU 加速与可微分能力的科研或工程工作流。

## 技术特点

- 使用 Warp 框架构建，提供 Python 接口与示例驱动的运行方式（uv 管理）。
- 文档齐全、示例丰富，社区活跃并采用 Apache-2.0 许可。
- 可通过 uv/Helm 等工具配置运行环境与示例演示。
