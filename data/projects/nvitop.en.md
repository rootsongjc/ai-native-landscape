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
description: 'An interactive NVIDIA GPU process viewer and monitoring toolkit with a terminal UI, a Python API, and a Prometheus exporter.'
author: Xuehai Pan
ossDate: '2021-01-25T12:17:02.000Z'
status: tracked
---

## Overview

nvitop is a one-stop tool for NVIDIA GPU monitoring and process management. It combines an htop-style interactive terminal monitor with a Python library for querying device and process state, and an exporter for feeding metrics into Prometheus and Grafana.

## Key Features

- Interactive terminal UI with per-process GPU, CPU, and memory usage
- Process management such as filtering, tree view, and sending signals
- Python API for device and process queries and resource collection in training code
- Prometheus exporter with a Grafana dashboard

## Use Cases

- Inspecting who is using a shared GPU server
- Logging GPU usage from training scripts

## Technical Details

- Pure Python on top of NVML bindings
- Supports Linux and Windows
