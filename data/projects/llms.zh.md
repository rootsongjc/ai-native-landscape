---
name: llms.py
slug: llms
homepage: https://servicestack.net/posts/llms-py-ui
repo: https://github.com/servicestack/llms
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - CLI
  - Dev Tools
  - UI
description: 轻量的多提供商 LLM 客户端，提供兼容 OpenAI 的服务器 API 与可选的聊天 UI。
logo: ''
author: ServiceStack
ossDate: '2025-09-23T11:04:23Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

llms.py 是一个由 ServiceStack 开发的轻量级 LLM 客户端与服务端实现，集成了 CLI、OpenAI 兼容的 HTTP API 与可选的浏览器聊天界面。它支持将本地模型与远程提供商混合使用，并在本地保存数据与统计信息，便于在隐私与成本之间做平衡。项目同时提供 Docker 镜像与一套默认配置，使得在本地或生产环境中快速部署变得更加简单。

## 主要特性

1. 多提供商支持：可接入 OpenRouter、Ollama、Anthropic、Google、OpenAI、Grok、Groq、Qwen、Z.ai、Mistral 等多家模型提供商，并支持自定义模型映射。
2. OpenAI 兼容 API：对外暴露与 OpenAI Chat Completion 兼容的接口，便于与现有客户端和工具集成。
3. 本地与云端混合：支持本地模型（如 Ollama）与云端 API 混合路由，优先使用免费或本地提供商以节省成本。
4. 内置分析与 UI：提供费用、请求与 token 使用的可视化分析界面，以及可选的 ChatGPT 风格网页 UI。

## 使用场景

llms.py 适合需要统一接入多源 LLM 的场景，例如研发环境中快速测试不同模型、在企业内部署一个受控的 OpenAI 兼容网关，或构建本地优先的聊天型应用以保证数据隐私。它同样适合在边缘或资源受限环境中使用 Docker 镜像快速启动服务。

## 技术特点

技术上，llms.py 提供轻量的单文件实现（以 Python/JS 为主）、可配置的 provider 路由、请求重试与故障切换机制，以及对图像与音频等多模态输入的支持。它还支持 GitHub OAuth 作为可选认证方式、自动图片大小与格式转换，以及一组用于运行与调试的 CLI 命令。
