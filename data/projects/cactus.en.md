---
name: Cactus
slug: cactus
homepage: https://cactuscompute.com/docs
repo: https://github.com/cactus-compute/cactus
license: Unknown
category: applications-products
subCategory: productivity-tools
tags:
  - Dev Tools
  - LLM
  - Product
description: >-
  An energy-efficient inference engine and numerical computing framework for phones, optimized for ARM CPUs to run large
  models with low power and memory footprint.
logo: ''
author: cactus-compute
ossDate: '2025-04-23T14:33:43.000Z'
featured: false
status: tracked
---

## Overview

Cactus is a low-latency AI inference engine and numerical computing framework designed for mobile devices and wearables. Developed by cactus-compute, it is optimized for ARM CPUs to run large language models with minimal power consumption and memory footprint, enabling on-device AI without relying on cloud connectivity.

## Key Features

CPU-first optimization tuned for ARM processors to reduce battery drain and heat generation. Unified Cactus Graph and Cactus Kernels providing zero-copy computation graphs and SIMD-optimized kernels for high throughput. Cross-platform SDKs for Flutter, React Native, and Kotlin make it straightforward to integrate on-device inference into any mobile application.

## Use Cases

Running lightweight or hybrid LLM inference directly on phones and wearables for chatbots, assistants, and quick generation tasks without network latency. Embedding efficient deep learning inference into mobile apps to deliver real-time, privacy-preserving AI experiences. Converting and benchmarking Hugging Face models for mobile deployment to validate performance before shipping.

## Technical Details

OpenAI-compatible C API with FFI bindings for integration across multiple programming languages. Demonstrates higher CPU-only throughput and smaller model footprints compared to Llama.cpp on certain workloads. Includes Python utilities for model conversion, testing scripts, and comprehensive build instructions for rapid onboarding.
