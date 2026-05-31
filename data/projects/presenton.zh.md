---
name: Presenton
slug: presenton
homepage: https://presenton.ai
repo: https://github.com/presenton/presenton
license: Unknown
category: applications-products
subCategory: productivity-tools
tags:
  - Application
  - UI
  - Visualization
description: Presenton 是一个开源的 AI 演示文稿生成器与 API，支持本地运行与多模型接入。
logo: ''
author: Presenton
ossDate: '2025-05-10T14:12:46Z'
featured: false
status: tracked
---

## 详细介绍

Presenton 是一个开源的 AI 演示文稿生成器与 API，允许用户从提示或上传的文档生成专业的 PPTX 与 PDF。项目支持本地运行（包括 Ollama 本地模型）、多供应商模型接入（OpenAI、Google、Anthropic 等），并提供模板、主题与导出功能，方便团队在保证数据隐私的同时自动化制作演示材料。

## 主要特性

- 模板与主题：支持自定义 HTML 与 Tailwind CSS 模板以满足品牌需求。
- 多模型支持：可接入 OpenAI、Google Gemini、Anthropic、Ollama 等模型，或使用自托管模型。
- 导出与兼容：生成的内容可导出为 PPTX 与 PDF，保留专业格式。
- 本地与云部署：提供 Docker 一键部署，支持本地 GPU 加速与云端服务。

## 使用场景

适用于需要快速将内容转为演示文稿的场景：课程与培训材料自动化制作、产品演示快速产出、以及数据报告生成等。对于关注隐私的团队，Presenton 的本地运行能力能避免将敏感数据传输至第三方云服务。

## 技术特点

- 开源许可：采用 Apache-2.0 许可，便于审计与二次开发。
- API 与自动化：提供完整的 REST API 与示例，支持以编程方式生成与管理演示文稿。
- 可扩展的生成管道：支持从 Markdown、PPTX 或上传文件生成模板并批量生成演示内容。
- 工程化部署：支持 Docker、GPU 加速与多供应商模型集成，便于生产化部署。
