---
name: Katana
slug: katana
homepage: https://projectdiscovery.io/open-source
repo: https://github.com/projectdiscovery/katana
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
description: 一款由 ProjectDiscovery 开发的开源爬虫与蜘蛛框架，侧重高并发、模块化与与安全工具链集成。
logo: ''
author: ProjectDiscovery
ossDate: '2021-01-02T16:56:05Z'
featured: false
status: tracked
---

## 详细介绍

Katana 是 ProjectDiscovery 开源的下一代爬虫与蜘蛛框架，设计用于高效、可扩展的网站爬取与主动/被动探测。它采用模块化架构与并发驱动引擎，提供灵活的抓取策略、动态渲染支持与丰富的输出选项，以满足安全研究与大规模资源发现的需求。

## 主要特性

- 高吞吐量并发爬取与任务队列管理。
- 支持 Headless 浏览器与 JavaScript 渲染，适配复杂页面。
- 插件化抓取规则与可扩展的输出格式（JSON/CSV）。
- 与 ProjectDiscovery 生态（如 Nuclei、HTTPx）集成，便于联合检测与自动化流水线。

## 使用场景

适用于 Web 安全扫描的前期资产发现、被动/主动爬取、目录与路径枚举以及网站映射。安全研究员、渗透测试团队与漏洞响应团队可将 Katana 作为高效的资产发现与数据收集组件，配合其他安全工具链完成检测与验证流程。

## 技术特点

Katana 基于 Go 语言实现，提供命令行工具与可编程接口，支持高并发协程、可配置爬取速率与重试策略；输出结果易于与自动化流水线、CI 或其他 ProjectDiscovery 工具整合，便于构建端到端发现与验证流程。
