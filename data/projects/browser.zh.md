---
name: Lightpanda Browser
slug: browser
homepage: https://lightpanda.io
repo: https://github.com/lightpanda-io/browser
license: Unknown
category: coding-devtools
subCategory: browser-automation
tags:
  - Dev Tools
  - UI
description: 为 AI 与自动化场景设计的无头浏览器，提供与 CDP/Playwright/Puppeteer 兼容的自动化能力。
logo: ''
author: Lightpanda IO
ossDate: '2023-02-07T15:19:34Z'
featured: false
status: tracked
---

## 简介

Lightpanda Browser 是为 AI 与自动化场景设计的无头浏览器，是智能体驱动网页浏览的轻量快速替代方案。它兼容常见自动化协议如 CDP，并与 Playwright、Puppeteer 等工具链互操作，旨在为模型驱动的自动化任务、网页数据抓取和浏览器内上下文执行提供低延迟、高可靠性的运行时。

## 主要特性

Lightpanda 兼容 CDP 协议，能与 Playwright / Puppeteer 工具链协同使用。提供优化的无头执行流程，适合大规模自动化任务与模型驱动的浏览器操作，关注性能调优与隔离运行以降低自动化任务中的风险与资源占用。

## 使用场景

可在 RAG 或数据抓取流程中作为受控的浏览器执行引擎，支持网页上下文抽取与操作。也适合将浏览器自动化能力嵌入到智能体工作流中实现基于网页的自动化任务执行，以及在测试与 CI 环境中替代传统浏览器提供更稳定的无头运行体验。

## 技术特点

项目使用 Zig 等高性能语言实现，定位为面向自动化与 AI 的浏览器网络堆栈，仓库主题包括 browser-automation、cdp 与 headless。采用 AGPL-3.0 许可证，适合注重开源共享与协作的团队与研究用途。
