---
name: AWS MCP
slug: mcp
homepage: https://awslabs.github.io/mcp/
repo: https://github.com/awslabs/mcp
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
  - MCP
description: MCP 提供一套标准化协议，帮助模型与外部工具、服务和主机安全、高效地交换上下文信息。
logo: ''
author: Amazon Web Services
ossDate: '2025-03-21T00:39:00Z'
featured: false
status: tracked
---

## 详细介绍

模型上下文协议（MCP, Model Context Protocol）是一套由 AWS Labs 提出，用于在模型、工具和主机之间安全、可扩展地交换上下文与能力描述的标准化协议。MCP 旨在让模型可以发现并调用外部工具、访问运行时上下文并进行能力协商，从而在受控环境下实现更强的工具化推理和可审计的任务执行。更多官方文档请参阅[项目主页](https://awslabs.github.io/mcp/)。

## 主要特性

- 标准化的能力描述与发现机制，便于模型与外部服务互操作。
- 支持安全的上下文交换与权限界定，适用于受管理的执行环境。
- 提供参考实现与客户端库，便于在现有系统中集成与验证。

## 使用场景

- 将 LLM 与外部检索、数据库或计算服务对接，构建可审计的工具调用流水线。
- 在多主机或边缘环境中统一模型能力描述，简化能力发现与授权管理。
- 作为研究与工程样例，用于验证模型与工具协作的最佳实践与安全边界。

## 技术特点

- 协议驱动：采用结构化能力与上下文描述，支持动态能力协商与发现。
- 可组合实现：提供服务端与客户端参考实现，支持多种语言与运行时。
- 面向生产：关注权限、审计与可观测性，便于在企业级场景落地。
