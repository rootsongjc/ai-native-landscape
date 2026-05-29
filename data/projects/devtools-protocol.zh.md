---
name: Chrome DevTools Protocol
slug: devtools-protocol
homepage: https://chromedevtools.github.io/devtools-protocol/
repo: https://github.com/chromedevtools/devtools-protocol
license: Unknown
category: coding-devtools
subCategory: developer-utilities
tags:
  - Dev Tools
description: Chrome DevTools Protocol 是用于浏览器与调试工具之间通信的开放协议，定义了 DevTools 的命令、事件与类型。
logo: ''
author: Google
ossDate: '2017-03-28T18:01:17.000Z'
featured: false
status: tracked
---

## 简介

Chrome DevTools Protocol（CDP）是一个开放且稳定的协议规范，定义了浏览器和调试工具之间交换命令、事件与数据的结构。它为 DevTools、自动化脚本、调试代理和第三方工具提供统一的接口，使得开发者可以以编程方式访问页面元素、网络层、性能分析、DOM/JS 调试等功能，从而构建诊断、测试和自动化工具。

## 主要特性

- 定义清晰的命令与事件模型，覆盖页面控制、网络、DOM、CSS、性能、Runtime、Debugger 等域。
- 提供类型定义（TypeScript）和多语言绑定，便于在不同环境中集成与调用。
- 持续维护并与 Chromium/Chrome 的调试功能保持同步，具有高可用性与广泛的生态支持。

## 使用场景

- 自动化测试：通过脚本控制浏览器执行端到端测试、截屏、性能采样等。
- 性能与调试工具：构建页面性能分析器、内存快照工具和 JS 调试器。
- 监控与采集：在 CI 环境中采集页面加载时间、资源请求与错误信息用于质量检测。

## 技术特点

- 基于明确的域（Domain）与类型定义组织协议，便于扩展与版本管理。
- 发布为 npm 包并提供 JSON/PDL 描述与自动生成的类型声明，支持多种语言绑定与工具链。
- 拥有成熟的社区与长期维护者（Chrome DevTools 团队），适合用于生产级别的浏览器自动化与调试集成。
