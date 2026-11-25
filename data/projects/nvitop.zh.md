---
name: nvitop
slug: nvitop
homepage: https://nvitop.readthedocs.io
repo: https://github.com/XuehaiPan/nvitop
license: Apache-2.0
category: platform-infra
subCategory: gpu-observability-cost
tags:
  - GPU Monitoring
  - CLI
  - Python
description: '交互式 NVIDIA GPU 进程查看器与监控工具集，提供终端界面、Python API 和 Prometheus 导出器。'
author: Xuehai Pan
ossDate: '2021-01-25T12:17:02.000Z'
status: tracked
---

## 简介

nvitop 是 NVIDIA GPU 监控与进程管理的一站式工具。它把类似 htop 的交互式终端监控器、用于查询设备与进程状态的 Python 库，以及向 Prometheus 和 Grafana 输出指标的导出器结合在一起。

## 主要特性

- 交互式终端界面，按进程展示 GPU、CPU 与内存占用
- 支持过滤、树状视图、发送信号等进程管理操作
- 提供查询设备与进程、在训练代码中采集资源数据的 Python API
- 附带 Prometheus 导出器与 Grafana 仪表盘

## 使用场景

- 查看共享 GPU 服务器上的资源占用者
- 在训练脚本中记录 GPU 使用情况

## 技术特点

- 基于 NVML 绑定的纯 Python 实现
- 支持 Linux 与 Windows
