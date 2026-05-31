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
description: Proton 是一个单文件 C++ 二进制的高性能 SQL 流处理引擎，适用于实时分析与流式 ETL。
logo: ''
author: TimePlus
ossDate: '2023-08-14T03:11:43.000Z'
featured: false
status: tracked
---

**Timeplus Proton** 是一个高性能、轻量级的开源流处理 SQL 引擎，旨在简化实时数据分析与历史数据查询的整合。它由 Timeplus 团队开发，基于 ClickHouse 构建，采用 C++ 编写，遵循 Apache 2.0 开源协议发布。

## 核心特性

- **统一查询引擎**：支持流式 SQL（如 Apache Flink）和历史数据查询（如 ClickHouse），可在同一平台上同时处理实时与批量数据。
- **高性能**：在 Apple MacBook Pro M2 Max 上，Proton 可实现每秒处理 9000 万事件（EPS），延迟低至 4 毫秒，支持高基数聚合（如 100 万唯一键）。
- **轻量部署**：单二进制文件，体积小于 500MB，无需 JVM 或 ZooKeeper，支持 Docker 和低资源实例（如 AWS t2.nano）部署。
- **强大的 SQL 支持**：支持多流 JOIN、增量物化视图、Python/JavaScript 用户自定义函数（UDF）、窗口函数、时间戳水印等高级功能。
- **与 Kafka 的原生集成**：支持 Kafka 流的读写，允许在流式查询中引用外部 Kafka 流。

## 使用场景

- **实时 ETL 与数据预处理**：从 Kafka 等流式数据源高效地摄取数据，进行实时转换和路由，支持增量更新和数据修复。
- **实时分析与仪表盘**：处理高吞吐量的流数据（如用户行为、IoT 传感器数据、应用日志），实时填充仪表盘，支持即时的操作洞察和数据驱动决策。
- **实时监控与告警**：定义复杂的事件模式和持续查询，实时监控关键性能指标（KPI），检测异常或阈值突破，并触发即时告警或自动化操作。
- **个性化与推荐引擎**：分析流式用户交互数据（点击、浏览、购买），动态更新用户画像，提供低延迟的个性化内容或产品推荐。
- **日志分析与可观察性**：实时处理和分析应用程序和系统日志，快速获取系统行为的洞察，排除故障，提高整体可观察性。

## 技术特点

- 以 C++ 实现，侧重执行效率与资源占用，适合对性能要求高的生产环境。
- 提供多种输入输出连接器，与主流数据平台对接良好。
- 使用 Apache-2.0 许可证，便于企业级采用和二次开发扩展。
