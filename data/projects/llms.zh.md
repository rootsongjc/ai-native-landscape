---
name: llms.py
slug: llms
homepage: https://servicestack.net/posts/llms-py-ui
repo: https://github.com/servicestack/llms
license: BSD-3-Clause
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - CLI
  - Dev Tools
  - UI
description: 轻量的多提供商 LLM 客户端，提供兼容 OpenAI 的服务器 API 与可选的聊天 UI。
author: ServiceStack
ossDate: '2025-09-23T11:04:23Z'
featured: false
status: tracked
---

## 简介

llms.py 是一个轻量级的多提供商 LLM 客户端和服务端，集成了命令行接口、与 OpenAI 兼容的 HTTP API 以及可选的浏览器聊天界面。它允许开发者将本地模型与远程提供商混合使用，同时将分析数据和用户数据保留在本地，便于在隐私、延迟和成本之间灵活平衡。

## 主要特性

- 多提供商支持：可接入 OpenRouter、Ollama、Anthropic、Google、OpenAI、Grok、Groq、Qwen、Mistral 等多家模型提供商，并支持自定义模型映射。
- OpenAI 兼容 API：对外暴露与 OpenAI Chat Completion 兼容的接口，便于与现有客户端和工具无缝集成。
- 本地优先的混合路由：优先使用本地或免费提供商以降低成本，并在需要时自动回退到付费替代方案。
- 内置分析仪表盘：可视化展示费用、请求量和 token 用量，同时提供可选的 ChatGPT 风格网页 UI。

## 使用场景

- 开发团队通过统一网关整合多个 LLM 的访问，用于模型测试、对比和跨提供商的成本优化。
- 企业内部署受控的 OpenAI 兼容 API 端点，以管理访问权限、执行策略并监控使用情况。
- 对隐私敏感的应用需要本地优先推理，同时在复杂查询时可选回退到云端服务。

## 技术特点

- 紧凑的 Python 单文件实现，包含可配置的提供商路由、自动重试和跨端点的故障切换逻辑。
- 支持图像和音频等多模态输入，自动处理图片缩放和格式转换以适配不同模型的要求。
- 提供 Docker 镜像和预置配置，支持在开发和生产环境中快速部署。
