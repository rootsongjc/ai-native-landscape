---
name: Universal Commerce Protocol (UCP)
slug: universal-commerce-protocol
homepage: https://ucp.dev
repo: https://github.com/universal-commerce-protocol/ucp
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Application
  - MCP
description: 一个标准化协议，促进智能体、平台与支付与身份等服务提供方之间的安全互操作。
logo: ''
author: Universal Commerce Protocol
ossDate: '2025-12-31T02:17:21Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Universal Commerce Protocol（UCP）是一个面向开放生态的标准化协议，旨在为智能体（agent）、平台、商家、支付服务提供方与身份提供方建立统一的通信语言与功能原语。UCP 通过定义能力（Capabilities）与扩展（Extensions），使平台能够自动发现商家支持的功能并安全地发起结算与订单流，支持有或无人工干预的交易场景。

## 主要特性

- 能力驱动的可组合架构：将商务操作拆分为可实现的能力（如 Checkout、Identity Linking、Order），并允许针对性扩展以增强体验。
- 动态发现与配置：商家声明能力与配置文件，平台可自动发现并配置交互方式，降低一次性集成成本。
- 传输无关性：协议设计为传输层不可知，支持 REST、MCP（模型上下文协议）或智能体间（A2A）等多种传输方式。

## 使用场景

- 智能体购物：智能体代表用户发现商品、填充购物车并完成支付，适用于代理式购物与助手场景。
- 平台整合：第三方平台通过统一能力调用多家商户的结账与身份链接能力，实现跨商户的无缝体验。
- PSP 与凭证提供方对接：标准化的令牌与凭证交换流程降低支付与身份集成复杂度。

## 技术特点

- 基于开放标准：优先复用现有支付、身份与安全标准，避免重复发明。
- 可扩展的能力与扩展机制：保留核心能力定义的简洁性，同时允许通过扩展增加个性化功能。
- 面向开发者：提供规范文档、示例与 SDK，便于快速实现与合规测试。
