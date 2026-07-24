---
name: Lupine
slug: lupine
homepage: https://lupine.sh
repo: https://github.com/lupinemachines/lupine
license: Apache-2.0
category: inference-serving
subCategory: gpu-acceleration
tags:
  - GPU
  - CUDA
  - Networking
description: A GPU over IP bridge that lets CPU-only machines attach and use GPUs hosted on remote machines over the network.
author: Lupine Machines
ossDate: '2024-08-28T04:02:43Z'
featured: false
status: tracked
---

## Overview

Lupine is a GPU over IP bridge that exposes GPUs on remote machines as if they were locally installed. CPU-only workstations and servers can transparently attach and drive remote GPUs over the network, decoupling compute capacity from the machine running the workload.

## Key Features

- GPU over IP bridge transparently attaching remote GPUs to local machines.
- CUDA runtime interception covering cuBLAS, cuDNN, and NVML so existing GPU code runs unmodified.
- Network-transparent acceleration without code changes or specialized drivers on the client.
- Built for MLOps and inference workloads needing elastic, disaggregated GPU access.

## Use Cases

- Giving CPU-only developer machines and CI runners access to shared GPU pools.
- Disaggregating GPU capacity across hosts for bursty inference and training jobs.
- Running GPU-backed workloads on edge or on-prem nodes without local accelerators.

## Technical Details

- Intercepts the CUDA software stack to redirect compute to remote GPUs, requiring no application rewrites.
- Supports core CUDA libraries (cuBLAS, cuDNN) and management APIs (NVML) for compatibility.
- Designed around standard networking, making remote GPUs appear local to the host operating system.
