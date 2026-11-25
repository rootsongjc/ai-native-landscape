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
description: 'An htop-like task monitor for GPUs and accelerators from AMD, Apple, Huawei, Intel, NVIDIA, and Qualcomm.'
author: Maxime Schmitt
ossDate: '2017-06-16T09:52:13.000Z'
status: tracked
---

## Overview

NVTOP (Neat Videocard TOP) is a terminal task monitor for GPUs and other accelerators. Unlike vendor-specific tools it reports on devices from many vendors in one view, including Huawei Ascend, which makes it useful on heterogeneous machines.

## Key Features

- Single view across AMD, Apple, Huawei Ascend, Intel, NVIDIA, and Qualcomm devices
- Per-process GPU and memory usage with interactive sorting and kill
- Live utilization and memory history plots in the terminal
- Handles multiple devices at once

## Use Cases

- Monitoring workstations or servers with mixed accelerators
- Quick interactive inspection of GPU processes

## Technical Details

- Written in C with ncurses
- Vendor support is implemented through per-vendor backends
