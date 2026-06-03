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
author: ProjectDiscovery
ossDate: '2021-01-02T16:56:05Z'
featured: false
status: tracked
---

Katana 是 ProjectDiscovery 开发的下一代爬虫与蜘蛛框架，专注于自动化 Web 数据提取。它采用模块化架构与并发驱动引擎，提供灵活的抓取策略、动态渲染支持与丰富的输出选项，可实现高效且可扩展的网站爬取。

## 主要特性

- 高吞吐量的并发爬取能力与任务队列管理，支持大规模数据提取
- Headless 浏览器与 JavaScript 渲染支持，可处理复杂的现代单页应用
- 插件化的抓取规则配合 JSON/CSV 等可扩展输出格式
- 与 ProjectDiscovery 生态（如 Nuclei、HTTPx）紧密集成，支持联合检测与自动化流水线
- 可配置的爬取速率、重试策略和范围控制，实现礼貌且精准的爬取

## 使用场景

- Web 安全扫描前期的资产发现，包括被动/主动爬取和站点映射
- 渗透测试和漏洞赏金侦察中的目录枚举与站点结构分析
- 自动化数据采集流水线，对接安全分析和漏洞检测工作流
- 集成到 CI 流水线中进行持续安全监控和变更检测

## 技术特点

- 使用 Go 语言实现，基于高并发协程实现高效的资源利用
- 提供命令行工具与可编程接口，支持灵活集成
- 输出结果可轻松与其他 ProjectDiscovery 工具对接，构建端到端的发现与验证工作流
