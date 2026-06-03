---
name: cuDF
slug: cudf
homepage: https://docs.rapids.ai/api/cudf/stable/
repo: https://github.com/rapidsai/cudf
license: Apache-2.0
category: platform-infra
subCategory: data-platforms
tags:
  - Data
  - Dev Tools
description: A GPU DataFrame library for accelerating data analysis and tabular computing with GPU acceleration.
author: RAPIDS (NVIDIA)
ossDate: '2017-05-07T03:43:37.000Z'
featured: false
status: tracked
---
## Overview

cuDF is a GPU DataFrame library within the RAPIDS ecosystem designed to move tabular compute from CPU to GPU, significantly accelerating common analysis tasks such as data cleaning, aggregation, and transformations. It's widely used in data science, ETL, and real-time analytics workloads.

## Key Features

- GPU acceleration: Leverages CUDA to parallelize DataFrame operations.
- Pandas-compatible: Provides a Pandas-like API to lower migration costs.
- Large-scale analytics: Optimized for high-throughput, large-data scenarios.

## Use Cases

- Data preprocessing: Speed up large-scale data cleaning and transformation in ETL pipelines.
- Real-time analytics: Fast aggregations and statistics for low-latency data streams.
- Research & engineering: Accelerate pre-processing and feature engineering for model training.

## Technical Details

- Stack: C++/CUDA core with Python bindings for ease of use and performance.
- Extensibility: Integrates with other RAPIDS components (cuML, cuGraph) for end-to-end GPU workflows.
- License: Apache-2.0, suitable for enterprise and academic adoption.
