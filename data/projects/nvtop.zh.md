---
name: NVTOP
slug: nvtop
repo: https://github.com/Syllo/nvtop
license: GPL-3.0
category: platform-infra
subCategory: gpu-observability-cost
tags:
  - GPU Monitoring
  - Heterogeneous Computing
  - CLI
description: '类似 htop 的 GPU 与加速器任务监视器，支持 AMD、Apple、华为、Intel、NVIDIA 和高通设备。'
author: Maxime Schmitt
ossDate: '2017-06-16T09:52:13.000Z'
featured: false
status: tracked
---

## 简介

NVTOP（Neat Videocard TOP）是面向 GPU 及其他加速器的终端任务监视器。与厂商专用工具不同，它能在同一视图中展示多家厂商的设备，包括华为昇腾，适合异构机器。

## 主要特性

- 统一展示 AMD、Apple、华为昇腾、Intel、NVIDIA 与高通设备
- 按进程显示 GPU 与显存占用，支持交互式排序与终止进程
- 在终端中实时绘制利用率与显存历史曲线
- 可同时处理多块设备

## 使用场景

- 监控混合加速器的工作站或服务器
- 快速交互式查看 GPU 进程

## 技术特点

- 使用 C 语言与 ncurses 编写
- 通过各厂商后端实现设备支持
