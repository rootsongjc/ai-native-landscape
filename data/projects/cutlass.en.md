---
name: CUTLASS
slug: cutlass
homepage: null
repo: https://github.com/nvidia/cutlass
license: Unknown
category: inference-serving
subCategory: gpu-acceleration
tags:
  - Framework
description: >-
  CUDA Templates for Linear Algebra Subroutines (CUTLASS), a high-performance matrix computation template library
  provided by NVIDIA.
logo: ''
author: NVIDIA
ossDate: '2017-11-30T00:11:24.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Introduction

CUTLASS is a CUDA template library from NVIDIA for linear algebra subroutines (such as GEMM), designed to help developers build high-performance, reusable matrix computation kernels. It includes various optimization strategies and examples, making it easy to achieve efficient computation across different GPU architectures.

## Key Features

- Templated GEMM and linear algebra building blocks for easy customization and extension.
- Performance optimizations and example implementations targeting multiple GPU architectures.
- Comprehensive documentation and examples for easy integration and tuning.

## Use Cases

- Implementing custom high-performance matrix multiplication and linear algebra operators.
- Quickly building hardware-specific kernels using CUTLASS templates and examples.
- Replacing default operators in training and inference pipelines for better performance.

## Technical Highlights

- Highly customizable operator building blocks implemented with CUDA and template metaprogramming.
- Optimized paths for different data types and memory layouts.
