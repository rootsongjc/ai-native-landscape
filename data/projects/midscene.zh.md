---
name: Midscene.js
slug: midscene
homepage: https://midscenejs.com
repo: https://github.com/web-infra-dev/midscene
license: Unknown
category: models-modalities
subCategory: multimodal
tags:
  - Automation
  - Browser Automation
  - Framework
  - Multimodal
  - SDK
description: 一个使用视觉语言模型驱动的跨平台 UI 自动化框架，用截图为主的纯视觉定位与操作来编写自动化脚本。
logo: ''
author: web-infra-dev
ossDate: '2024-07-23T04:03:50Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Midscene.js 是一个以视觉语言模型为核心的跨平台 UI 自动化框架，采用以截图为主的纯视觉定位与操作方式，旨在让人更自然地用类人语言或脚本描述自动化目标与步骤。项目既提供 JavaScript SDK 与 YAML 脚本接口，也能与 Puppeteer / Playwright 集成，或通过 Bridge Mode 控制桌面浏览器，此外还提供零代码的 Chrome 扩展与移动 playground，降低上手门槛。

## 主要特性

- 使用视觉语言模型进行元素定位与交互，减少对 DOM 的依赖。
- 支持 Web、Android、iOS 等多平台，提供统一的 JS SDK 与脚本格式。
- 内置回放与可视化调试工具，便于定位与复现自动化流程。
- 支持缓存重放与 MCP 集成，提升执行效率并便于上层智能体编排。

## 使用场景

Midscene 适用于端到端 UI 测试、自动化运营（如自动化表单填写、示例操作）、跨平台演示脚本、以及需要视觉理解的 RPA 场景。对希望用自然语言或轻量脚本描述复杂交互的团队尤其有价值，可用于降低自动化脚本维护成本并加速迭代。

## 技术特点

项目强调纯视觉路径（可选 DOM 模式用于数据抽取），并兼容多种视觉语言模型（如 Qwen-VL、UI-TARS 等），以减小 token 成本并提升跨平台健壮性。架构上提供可自托管选项和开放生态的 SDK，使团队可以在本地或云端部署并与现有测试框架集成。
