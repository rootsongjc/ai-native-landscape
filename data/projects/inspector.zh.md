---
name: Inspector
slug: inspector
homepage: https://modelcontextprotocol.io
repo: https://github.com/modelcontextprotocol/inspector
license: MIT
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Dev Tools
  - Evaluation
description: Inspector 是一款用于 MCP（Model Context Protocol）服务器的可视化测试工具，帮助开发者验证与展示 MCP 服务的行为与可视化输出。
author: Model Context Protocol
ossDate: '2024-10-03T21:47:42.000Z'
featured: false
status: tracked
---
## 详细介绍

Inspector 是面向 MCP（Model Context Protocol）服务器的可视化测试与验证工具。它通过可交互的界面展示模型上下文响应、请求 - 响应流程与行为差异，便于开发者在局部环境或 CI 流程中直观地调试与回归测试 MCP 服务。

## 主要特性

- 可视化请求与响应：以结构化视图展示上下文内容、响应差异与时间线。
- 集成测试支持：可嵌入到 CI 流水线进行自动化回归验证。
- 多格式展示：支持 JSON、表格与文本等多种展示形式，便于对比与分析。
- 开源许可：采用 MIT 许可，便于社区扩展与集成。

## 使用场景

- MCP 服务开发调试：本地或远程调试 MCP 服务的请求与响应行为。
- 自动化回归测试：在 CI 中对关键行为进行可视化验证，快速定位回归问题。
- 示例展示与教学：作为模型服务交互的可视化示例，便于团队内部分享与教学演示。

## 技术特点

- 前端可视化组件：基于现代前端技术构建的交互式展示层，支持大规模响应的高效渲染。
- 轻量集成：可通过 API 与现有 MCP 服务或测试框架对接，支持插件化扩展。
- 社区驱动：活跃的开源社区与 MIT 许可，利于与其他 MCP 工具生态协同发展。
