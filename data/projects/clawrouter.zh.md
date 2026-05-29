---
name: ClawRouter
slug: clawrouter
homepage: null
repo: https://github.com/blockrunai/clawrouter
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - Dev Tools
  - Inference
  - LLM Router
description: ClawRouter 是一个专为 AI 智能体设计的 LLM 路由器，支持智能路由、成本优化和微支付，由 BlockRunAI 为 OpenClaw 打造。
logo: ''
author: BlockRunAI
ossDate: '2026-02-03T00:00:00.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

ClawRouter 是一个专为 AI 智能体设计的原生 LLM 路由器，旨在为 OpenClaw 和其他 AI 应用提供强大的模型路由能力。该项目通过智能路由算法，自动将请求分发到最合适的 LLM 提供商，实现性能与成本的最佳平衡。ClawRouter 支持多家主流 LLM 提供商，包括 OpenAI、Anthropic、Gemini、DeepSeek 等，并集成了微支付功能，支持使用稳定币（如 USDC）进行支付。

## 主要特性

- **智能路由**：基于请求特性自动选择最优的 LLM 模型和提供商，实现性能与成本的最佳平衡。
- **成本优化**：通过智能路由和成本监控，显著降低 LLM 调用成本，提高资源利用效率。
- **多提供商支持**：集成 OpenAI、Anthropic、Gemini、DeepSeek 等多家主流 LLM 提供商，灵活切换。
- **微支付集成**：支持稳定币（USDC）支付，实现按使用量计费，为 AI 应用提供灵活的支付方案。
- **高可用性**：提供容错机制和负载均衡，确保服务的高可用性和稳定性。
- **易于集成**：提供简洁的 API 和 SDK，方便开发者快速集成到现有系统中。

## 使用场景

- **AI 智能体开发**：为 AI 智能体提供统一的 LLM 访问接口，简化开发流程。
- **多模型应用**：需要同时使用多个 LLM 模型的应用，通过路由器实现统一管理。
- **成本敏感项目**：对 LLM 调用成本敏感的项目，通过智能路由降低运营成本。
- **企业级部署**：企业内部部署 AI 应用，需要统一的模型管理和访问控制。
- **微支付场景**：需要按使用量计费的 AI 应用，支持稳定币支付。

## 技术特点

- 使用 TypeScript 开发，提供类型安全的 API 和良好的开发体验。
- 采用模块化架构，便于扩展新的 LLM 提供商和路由策略。
- 支持实时监控和日志记录，方便调试和性能优化。
- 提供丰富的配置选项，满足不同场景的需求。
- 活跃的社区支持，持续更新和改进功能。
