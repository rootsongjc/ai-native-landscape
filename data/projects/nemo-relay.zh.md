---
name: NeMo Relay
slug: nemo-relay
homepage: https://docs.nvidia.com/nemo/relay/latest/about-nemo-relay/overview
repo: https://github.com/NVIDIA/NeMo-Relay
license: Apache-2.0
category: training-optimization
subCategory: observability-monitoring
tags:
  - Observability
  - Agents
  - Tracing
  - OpenTelemetry
  - Middleware
description: >-
  NVIDIA NeMo Relay 是开源的多语言智能体运行时与开发库，用于观测和控制 AI 智能体的执行过程。它记录智能体活动，对模型和工具调用应用中间件，管理执行作用域与生命周期事件，并导出 ATOF
  事件、ATIF 轨迹或 OpenTelemetry 追踪、日志与指标——无需改动现有智能体技术栈。
author: NVIDIA
ossDate: '2026-03-31'
featured: false
status: tracked
---
## 详细介绍

NVIDIA NeMo Relay 在不改动现有智能体技术栈的前提下，提供对智能体运行的观测与控制能力。它为编程智能体、应用、框架集成、中间件和可观测性后端提供共享运行时，统一作用域、策略、插件与生命周期事件。CLI 可以在本地观测 Codex 或 Claude Code；应用开发者可以直接插桩自有的 LLM 与工具调用；框架用户可获得 LangChain、LangGraph、Deep Agents、Google ADK 和 OpenClaw 的现成集成。

Relay 定位为 OpenTelemetry GenAI 规范及可观测性、评测产品的补充，通过可观测性插件导出 ATOF 事件、ATIF 轨迹和 OTel 追踪、日志、指标。

## 主要特性

- **智能体执行观测**：通过 Relay CLI 本地包裹 Codex 或 Claude Code 记录运行，或直接插桩应用自有的 LLM 与工具调用
- **模型与工具调用中间件**：对 LLM 和工具调用应用一致的控件与变换，横跨现有技术栈
- **执行作用域管理**：作用域、策略与生命周期事件是框架和后端共享的运行时概念
- **可观测性导出**：通过可配置插件导出 ATOF 事件、ATIF 轨迹或 OpenTelemetry 追踪、日志与指标
- **框架集成**：现成支持 LangChain、LangGraph、Deep Agents、Google ADK 与 OpenClaw
- **插件架构**：可将可复用中间件与导出器打包为插件；Relay 也内置于 Hermes Agent

## 使用场景

- **排查智能体行为**：把真实智能体运行记录到磁盘——原始事件加归一化轨迹文件——检查智能体实际做了什么
- **一致的智能体控制**：通过单一运行时对多个框架的工具和 LLM 调用应用中间件策略
- **智能体遥测管线**：将智能体执行接入基于 OpenTelemetry 的后端，与既有追踪、日志、指标并列
- **构建框架集成**：为框架或提供商添加智能体支持时，以 Relay 作为共享执行层

## 技术特点

- **多语言运行时**：以 Python（PyPI `nemo-relay`）、Node（npm `nemo-relay-node`）、Rust crate（crates.io `nemo-relay`、`nemo-relay-adaptive`、`nemo-relay-cli`）三种形态发布，CI 带 codecov 覆盖率追踪
- **本地优先记录**：CLI 快速入门用本地导出器运行 Codex 或 Claude Code，将原始事件与归一化轨迹文件写入磁盘供检查
- **作用域 + 生命周期模型**：执行作用域管理与生命周期事件是一等运行时概念，而非由各消费方自行约定的规范
- **可观测性插件面**：ATOF 事件、ATIF 轨迹与 OTel 追踪/日志/指标经插件配置层导出，补充 OTel GenAI 语义规范
- **按入口区分的集成路径**：为 CLI 观测既有智能体、应用自有调用、框架用户与框架构建者提供各自独立的快速上手路径
