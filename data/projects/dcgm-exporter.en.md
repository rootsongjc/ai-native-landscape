---
name: NVIDIA DCGM Exporter
slug: dcgm-exporter
homepage: https://docs.nvidia.com/datacenter/dcgm/latest/gpu-telemetry/dcgm-exporter.html
repo: https://github.com/NVIDIA/dcgm-exporter
license: Apache-2.0
category: platform-infra
subCategory: gpu-observability-cost
tags:
  - GPU Monitoring
  - GPU Telemetry
  - Prometheus
description: 'A Prometheus exporter for NVIDIA GPU telemetry, built on NVIDIA Data Center GPU Manager (DCGM).'
author: NVIDIA
ossDate: '2021-08-11T15:40:37.000Z'
featured: false
status: tracked
---

## Overview

DCGM Exporter exposes NVIDIA GPU metrics in Prometheus format using DCGM. In Kubernetes it attributes GPU metrics to the pods and containers using each device, making it the de facto source of GPU utilization data for dashboards, alerting, and autoscaling.

## Key Features

- Metrics for utilization, memory, temperature, power, and hardware errors
- Per-pod and per-container attribution in Kubernetes
- Configurable metric sets through a CSV collector file
- Ships with the NVIDIA GPU Operator and has reference Grafana dashboards

## Use Cases

- Monitoring GPU fleets with Prometheus and Grafana
- Driving autoscaling or chargeback from GPU utilization

## Technical Details

- Go exporter using the DCGM Go bindings
- Runs as a DaemonSet or standalone container
