---
name: Proton
slug: proton
homepage: https://timeplus.com
repo: https://github.com/timeplus-io/proton
license: Unknown
category: platform-infra
subCategory: data-platforms
tags:
  - Application
  - Database
description: >-
  Proton is a single-binary C++ high-performance SQL stream processing engine designed for real-time analytics and
  stream ETL.
logo: ''
author: TimePlus
ossDate: '2023-08-14T03:11:43.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

Proton is a high-performance SQL stream processing engine developed by TimePlus and delivered as a single C++ binary. It focuses on low-latency, high-throughput stream processing and real-time analytics in resource-constrained environments. Proton combines stream processing, metric aggregation, and observability capabilities in one runtime, supporting SQL-like query syntax, windowing, and stateful computations to enable engineering teams to build real-time data pipelines and analytical tasks with familiar SQL semantics.

## Key Features

- Single-binary deployment with minimal runtime dependencies for easy delivery and upgrades.
- Native SQL support for streaming queries, window functions, and aggregations to lower the learning curve.
- Optimized parallel execution and serialization for low latency and high throughput.
- Integrations with Kafka, Iceberg, ClickHouse and other common components to fit existing data platforms.

## Use Cases

- Real-time metrics and alerting: process logs and metrics streams online and trigger alerts.
- Stream ETL: clean, aggregate and route data before persisting to storage.
- Unified observability and log analytics: combine real-time streams with offline data for rapid investigation and analysis.

## Technical Highlights

- Implemented in C++ for execution efficiency and low resource usage, suitable for high-performance scenarios.
- Provides multiple input/output connectors to integrate with Kafka, Iceberg and other ecosystems.
- Licensed under Apache-2.0, making it suitable for production use and extension in enterprise environments.
