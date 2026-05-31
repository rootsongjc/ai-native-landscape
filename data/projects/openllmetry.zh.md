---
name: OpenLLMetry
slug: openllmetry
homepage: https://traceloop.github.io/openllmetry
repo: https://github.com/traceloop/openllmetry
license: Unknown
category: training-optimization
subCategory: observability-monitoring
tags:
  - Monitoring
  - Observation
description: 基于 OpenTelemetry 思想的 LLM/AI 可观测性工具，提供模型请求的跟踪与指标聚合，用于诊断与监控。
logo: ''
author: traceloop
ossDate: '2023-09-02T14:42:59.000Z'
featured: false
status: tracked
---

## 简介

OpenLLMetry 将 OpenTelemetry 的观测理念应用到大模型与生成式 AI 场景，旨在捕获模型请求链路、响应质量与延迟等指标，帮助开发与运维团队定位推理流程中的问题并提升可观测性。

## 主要特性

- 分布式追踪：记录生成请求的调用链与时间线。
- 指标聚合：采集延迟、错误率、响应质量等关键指标。
- 可插拔采集器：支持在推理服务或代理中嵌入采集逻辑。

## 使用场景

- LLM 服务的性能与质量监控。  
- 模型推理请求的端到端诊断与根因分析。  
- 与 Prometheus/Grafana 等生态集成，构建 AI 专用监控面板。

## 技术特点

- 基于开放标准，兼容 OpenTelemetry 数据模型与导出器。  
- 轻量采集代理，适合集成到微服务与推理网关中。  
- 面向可扩展性设计，支持高并发模型请求的指标收集与采样。
