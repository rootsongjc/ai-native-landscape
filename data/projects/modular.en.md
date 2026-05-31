---
name: Modular Platform
slug: modular
homepage: https://www.modular.com/
repo: https://github.com/modular/modular
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - ML Platform
  - Product
description: >-
  An open, production-grade AI platform including the MAX inference server and Mojo libraries to accelerate model
  deployment across hardware.
logo: ''
author: Modular
ossDate: '2023-04-28T22:17:24.000Z'
featured: false
status: tracked
---

## Overview

The Modular Platform bundles the MAX inference server, Mojo standard library, and a large collection of kernels and tools to streamline production model deployment. It provides production-ready containers, examples, and documentation to help teams run high-performance inference across diverse hardware.

## Key Features

- MAX inference: an OpenAI-compatible serving layer supporting multiple models and runtime configurations.
- Mojo and high-performance kernels: Mojo standard library plus optimized GPU/CPU kernels.
- Tooling and deployment: container images, deployment examples, and CI tooling for production workflows.

## Use Cases

- Deploying low-latency, high-throughput inference services in cloud or datacenter environments.
- Building portable inference pipelines across GPUs, CPUs, and accelerators.
- Using as an industry-grade reference for kernel development and performance tuning.

## Technical Details

- Large mono-repo with multi-language components (Mojo, Python, Starlark) focused on high-performance workloads.
- Provides containerized deployment and example configurations to accelerate adoption in production.
- Uses Bazel and CI for reproducible builds and scalable collaboration.
