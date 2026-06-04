---
name: Presenton
slug: presenton
homepage: https://presenton.ai
repo: https://github.com/presenton/presenton
license: Apache-2.0
category: applications-products
subCategory: productivity-tools
tags:
  - Application
  - UI
  - Visualization
description: Presenton 是一个开源的 AI 演示文稿生成器与 API，支持本地运行与多模型接入。
author: Presenton
ossDate: '2025-05-10T14:12:46Z'
featured: false
status: tracked
---

## 简介

Presenton 是一个开源的 AI 演示文稿生成器与 API，可根据文本提示或上传文档自动生成专业的 PPTX 和 PDF 幻灯片。它支持通过 Ollama 本地运行，同时集成了 OpenAI、Google、Anthropic 等多家模型供应商，是 Gamma、Beautiful AI 等商业工具的灵活替代方案。

## 主要特性

- 支持自定义 HTML 和 Tailwind CSS 模板，提供可配置主题以满足品牌一致性需求。
- 多模型供应商支持，涵盖 OpenAI、Google Gemini、Anthropic、Ollama 及自托管端点。
- 直接导出为 PPTX 和 PDF 格式，保留专业排版，开箱即用。
- 基于 Docker 的部署方案，支持可选 GPU 加速以规模化运行本地模型。

## 使用场景

团队可利用 Presenton 自动化生成课程材料、培训幻灯片、产品演示和数据报告，无需手动设计幻灯片。对数据隐私要求严格的组织可以通过完全本地化执行，避免将敏感内容传输至第三方云服务。

## 技术特点

Presenton 采用 Apache-2.0 开源许可，提供 REST API 用于编程式演示文稿生成与管理。其可扩展的生成管道支持从 Markdown、PPTX 或上传文件作为输入源，并支持批量生成工作流。生产环境部署可借助 Docker 容器与 GPU 加速，配合多模型供应商路由实现可靠、可扩展的幻灯片自动化。
