---
name: Costrict
slug: costrict
homepage: https://costrict.ai
repo: https://github.com/zgsm-ai/costrict
license: Apache-2.0
category: coding-devtools
subCategory: coding-agents
tags:
  - Application
  - Code Agent
  - Vibe Coding
description: Costrict（前身为 Shenma）是深信服开源的企业级 AI 编程助手，以"严肃编程"为核心理念，提供严格模式、代码审查、代码补全等能力，支持私有化部署。
author: 深信服 (Sangfor)
ossDate: '2025-04-10T02:06:51Z'
featured: false
status: tracked
---
## 详细介绍

Costrict（前身为 Shenma）是深信服（Sangfor）推出的一款免费、开源的企业级 AI 编程助手，专为"内网开发 + 高质量要求"的严肃开发场景设计。项目自 2025 年 5 月上线以来，已在 GitHub 上获得广泛关注。Costrict 的核心目标是让企业安全、便捷地享受 AI 生产力，通过私有化部署确保代码资产安全，同时提供端到端的规范化 AI 开发流程。

## 主要特性

- **严格模式（Strict Mode）**：将单次需求系统化拆解为需求分析、架构设计、任务规划、测试生成等步骤，使 AI 生成代码的过程符合企业开发规范，确保输出高质量且高度可控。
- **代码审查（Code Review）**：支持对整个代码仓库进行索引和解析，实现企业级 RAG 编码知识库；采用"多专家模型专项检查 + 多模型交叉验证"策略，支持对函数、选中代码行、代码文件乃至整个项目进行检查。
- **代码补全（Code Completion）**：根据光标上下文自动生成后续代码，秒级快速输出。
- **Vibe Coding 模式**：专为快速开发和简单任务设计，支持多轮自然语言对话，实时迭代并精确生成代码。
- **MCP 服务集成**：无缝对接 MCP 开放生态，可接入外部 API、连接数据库、开发自定义工具。
- **API 与模型定制**：内置多种免费高级模型，支持接入 Anthropic、OpenAI 等第三方 API，兼容 OpenAI 格式的自定义 API，也可通过 LM Studio/Ollama 使用本地模型。
- **模式定制**：提供 Code、Orchestrator 等多种默认模式，支持用户自定义模式以适配不同场景。
- **上下文感知**：自动将大文件仓库数据纳入上下文，支持通过 @ 键添加文件/文件夹、终端、Issue 等上下文信息，还支持图片上传。
- **OpenSpec 集成**：与 OpenSpec 无缝集成，使 AI 智能体能够处理变更提案，提供标准化的功能规划、实现与审查流程。
- **隐私与安全**：通过物理隔离与端到端加密保障代码安全，提供全面的企业私有化部署方案。

## 使用场景

- 对代码安全有严格要求的企业内网开发环境，需要 AI 编程助手支持私有化部署。
- 大型团队需要规范化 AI 开发流程，确保代码质量与可追溯性。
- 需要对存量代码库进行大规模代码审查与质量治理。
- 多语言开发团队（Python、Go、Java、JavaScript/TypeScript、C/C++ 等）需要统一的 AI 编程工具。

## 技术特点

- 作为 VS Code 和 JetBrains IDE 插件运行，同时提供 CLI 命令行工具，覆盖主流开发环境。
- 采用 Apache 2.0 开源协议，支持企业自由定制与二次开发。
- 严格模式的"项目逆向"能力可快速理解已有项目结构，生成符合项目风格的代码。
- 多模型交叉验证机制有效降低 AI 生成代码中的幻觉与错误率。
