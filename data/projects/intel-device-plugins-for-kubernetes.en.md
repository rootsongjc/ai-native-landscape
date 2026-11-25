---
name: Intel Device Plugins for Kubernetes
slug: intel-device-plugins-for-kubernetes
homepage: https://intel.github.io/intel-device-plugins-for-kubernetes/
repo: https://github.com/intel/intel-device-plugins-for-kubernetes
license: Apache-2.0
category: platform-infra
subCategory: heterogeneous-compute-scheduling
tags:
  - Device Plugin
  - Heterogeneous Computing
  - Kubernetes
description: 'A collection of Kubernetes device plugins and an operator that expose Intel GPUs, FPGAs, QAT, and other accelerators as schedulable resources.'
author: Intel
ossDate: '2018-05-14T22:30:06.000Z'
featured: false
status: tracked
---

## Overview

This project provides device plugins for Intel hardware so Kubernetes workloads can request Intel GPUs and other accelerators. An operator manages plugin deployment, and the GPU plugin supports sharing a device among multiple containers.

## Key Features

- Device plugins for Intel GPU, FPGA, QAT, SGX, DSA, DLB, and IAA
- Operator for declarative deployment and lifecycle management
- Shared-device mode for the GPU plugin
- Integration with Node Feature Discovery for node labeling

## Use Cases

- Running inference or media workloads on Intel GPUs in Kubernetes
- Managing mixed-vendor accelerator clusters

## Technical Details

- Go implementations of the Kubernetes device plugin API
- Each plugin runs as a DaemonSet on nodes with matching hardware
