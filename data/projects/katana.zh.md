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

## 简介

Katana 是 ProjectDiscovery 开发的下一代爬虫与蜘蛛框架，专注于自动化 Web 数据提取。它采用模块化架构与并发驱动引擎，提供灵活的抓取策略、动态渲染支持与丰富的输出选项，可实现高效且可扩展的网站爬取。

## 主要特性

Katana 提供高吞吐量的并发爬取能力与任务队列管理，支持 Headless 浏览器与 JavaScript 渲染以处理复杂现代页面。插件化的抓取规则配合 JSON/CSV 等可扩展输出格式，并与 ProjectDiscovery 生态（如 Nuclei、HTTPx）紧密集成，支持联合检测与自动化流水线。

## 使用场景

Katana 非常适合 Web 安全扫描前期的资产发现，包括被动/主动爬取、目录枚举和站点映射。安全研究员、渗透测试团队与漏洞响应团队可将其作为高效的资产发现与数据收集组件，配合其他安全工具链完成检测与验证流程。

## 技术特点

Katana 使用 Go 语言实现，提供命令行工具与可编程接口，支持高并发协程、可配置爬取速率与重试策略。输出结果可轻松集成到 CI 流水线及其他 ProjectDiscovery 工具中，便于构建端到端的发现与验证工作流。
