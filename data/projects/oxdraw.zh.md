---
name: oxdraw
slug: oxdraw
homepage: null
repo: https://github.com/rohanadwankar/oxdraw
license: MIT
category: applications-products
subCategory: productivity-tools
tags:
  - Dev Tools
  - Visualization
description: oxdraw 是一个以声明式语法驱动、可拖拽编辑的 Diagram-as-Code 工具，旨在将 Mermaid 的可复现性与可视化编辑结合。
author: Rohan Adwankar
ossDate: '2025-10-07T19:59:40.000Z'
featured: false
status: tracked
---

## 简介

oxdraw 是一款以声明式（Mermaid）为源、同时提供可视化拖拽编辑界面的 Diagram-as-Code 工具。它通过将视觉调整持久化回原始的 `.mmd` 源文件，保证图表既能被自动生成又可被精细编辑，从而实现可版本化、可复现的图形创作流程。

## 主要特性

- 声明式与可视化结合：以 Mermaid 作为结构描述，同时支持拖拽微调并写回注释；
- 多格式渲染：支持生成 SVG/PNG 等输出，包含 CLI 渲染与编辑两种模式；
- 编辑器交互丰富：网格吸附、对齐参考、边线控制点与颜色选择等；
- 可编程与可集成：提供命令行工具，可嵌入流程化图表生成与渲染。

## 使用场景

- 架构图、流程图的声明式生成与视觉修饰；
- 将 AI 或自动化工具生成的 Mermaid 源文件快速修整为可展示的图像；
- 在文档、设计与研发流程中实现图表的版本化管理；
- 将图表渲染集成到 CI/CD 或静态站点生成流程中。

## 技术特点

- Rust 实现的高性能渲染与 CLI 支持；
- 前端基于 React 的可视化编辑器，实现拖拽与细粒度样式控制；
- 将视觉调整以注释形式持久化到 Mermaid 源，保证兼容性与可追溯性；
- 适配多输出格式，便于集成到不同发布渠道。
