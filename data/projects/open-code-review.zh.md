---
name: Open Code Review
slug: open-code-review
homepage: https://alibaba.github.io/open-code-review/
repo: https://github.com/alibaba/open-code-review
license: Apache-2.0
category: coding-devtools
subCategory: coding-agents
tags:
  - Code Review
  - AI Agent
description: >-
  开源混合架构代码审查工具，结合确定性流水线与 LLM 智能体，输出精准的行级评审意见，在阿里大规模生产环境验证，内置 NPE、线程安全、
  XSS、SQL 注入等微调规则集。
author: Alibaba
ossDate: '2026-05-18T02:16:36Z'
featured: false
status: tracked
---
## 简介

Open Code Review（OCR）是阿里巴巴开源的代码审查工具，采用确定性分析流水线与 LLM 智能体相结合的混合架构。规则引擎先拦截常见缺陷模式，再由 LLM 智能体基于仓库级上下文进行深度推理，输出精准的行级评审意见。兼容 OpenAI 与 Anthropic 风格 API，团队可接入自选模型。

## 主要特性

- 确定性规则与 LLM 智能体结合的混合流水线，高精度输出行级评审意见
- 内置微调规则集，覆盖 NPE、线程安全、XSS、SQL 注入等常见缺陷类型
- 仓库级上下文理解，评审基于完整代码库而非单一 diff
- 兼容 OpenAI 与 Anthropic 协议，支持自带模型与本地部署

## 使用场景

为希望以确定性缺陷检测叠加 LLM 推理的研发团队提供自动化代码审查。可接入 Pull Request 流程，在合并前拦截安全与正确性问题。适合需要可自部署、模型灵活的评审助手的超大规模组织。

## 技术特点

Apache 2.0 协议开源，已在阿里内部大规模生产环境验证。定位为编排框架（harness），将确定性静态检查与 LLM 智能体串联：可预期的检查保持确定性，细微推理交由模型完成。API 兼容 OpenAI 与 Anthropic 提供商，模型选择灵活。
