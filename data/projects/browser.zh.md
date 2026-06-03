---
name: Lightpanda Browser
slug: browser
homepage: https://lightpanda.io
repo: https://github.com/lightpanda-io/browser
license: AGPL-3.0
category: coding-devtools
subCategory: browser-automation
tags:
  - Dev Tools
  - UI
description: 为 AI 与自动化场景设计的无头浏览器，提供与 CDP/Playwright/Puppeteer 兼容的自动化能力。
author: Lightpanda IO
ossDate: '2023-02-07T15:19:34Z'
featured: false
status: tracked
---
Lightpanda Browser 是为 AI 与自动化场景设计的无头浏览器，是智能体驱动网页浏览的轻量快速替代方案。它兼容 CDP 协议并与 Playwright、Puppeteer 等工具链互操作，旨在为模型驱动的自动化任务提供低延迟、高可靠性的运行时。

## 协议与工具链兼容

- 兼容 CDP 协议，AI 智能体可无缝控制浏览器
- 与 Playwright / Puppeteer 测试与自动化框架完全互操作
- 可作为现有自动化流水线中 Chromium 无头浏览器的直接替代

## 性能与隔离

- 优化的无头执行流程，适合大规模自动化任务与模型驱动的浏览器操作
- 隔离运行环境，降低自动化任务中的风险与资源占用
- 低延迟运行时，专为网页数据抓取与浏览器内上下文执行设计

## 自动化使用场景

- 在 RAG 或数据抓取流程中作为受控的浏览器执行引擎
- 将浏览器自动化能力嵌入到智能体工作流中实现网页自动化任务
- 在测试与 CI 环境中替代传统浏览器提供更稳定的无头运行体验

## 技术基础

- 使用 Zig 等高性能语言实现，运行时开销极低
- 定位为面向自动化与 AI 的浏览器网络堆栈
- 采用 AGPL-3.0 许可证，适合注重开源共享与协作的团队与研究用途
