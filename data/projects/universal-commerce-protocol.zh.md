---
name: Universal Commerce Protocol (UCP)
slug: universal-commerce-protocol
homepage: https://ucp.dev
repo: https://github.com/universal-commerce-protocol/ucp
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Application
  - MCP
description: 一个标准化协议，促进智能体、平台与支付与身份等服务提供方之间的安全互操作。
author: Universal Commerce Protocol
ossDate: '2025-12-31T02:17:21Z'
featured: false
status: tracked
---

Universal Commerce Protocol（UCP）是一个面向开放生态的标准化协议，为智能体、平台、商家、支付提供方与身份提供方建立了统一的通信语言与交互原语。通过将商务操作建模为可发现的能力（Capabilities）与可选扩展（Extensions），UCP 支持跨异构系统的自主与半自主交易流程。该协议旨在通过通用接口消除定制化集成，推动智能体驱动的商务场景标准化。

## 能力驱动架构

- Checkout、Identity Linking、Order 等商务操作抽象为可复用单元
- 可扩展的能力模型保持核心定义简洁，同时允许通过扩展覆盖特定需求
- 商家发布能力配置文件后，平台可自动发现并完成对接
- 标准化接口大幅降低逐个集成的工程成本

## 传输与互操作

- 传输无关的设计支持 REST、MCP 与智能体间（A2A）通信
- 实现者可灵活选择部署拓扑
- 优先复用支付、身份与安全领域的现有标准，避免重复造轮子
- 标准化令牌流程简化身份与支付集成

## 智能体驱动的商务

- AI 智能体可代为发现商品、填充购物车并完成支付
- 第三方平台调用多家商户的统一能力，构建跨商户购物与预订工作流
- 支付服务提供方与凭证交换方通过标准化流程简化集成
- 配套规范文档、示例实现与 SDK 加速开发者落地
