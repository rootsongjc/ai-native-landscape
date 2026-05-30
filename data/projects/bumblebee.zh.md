---
name: Bumblebee
slug: bumblebee
homepage: null
repo: https://github.com/perplexityai/bumblebee
license: Apache-2.0
category: coding-devtools
subCategory: developer-utilities
tags:
  - Golang
  - Supply Chain Security
  - Package Inventory
description: 面向开发者终端的只读扫描工具，扫描磁盘上的包、扩展和开发工具元数据，用于检测已知软件供应链漏洞的暴露情况。
logo: ''
author: Perplexity AI
ossDate: '2026-05-20T18:11:37Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

Bumblebee 是一个只读的清单收集器，用于扫描 macOS 和 Linux 开发者终端上的包、扩展和开发工具元数据。它回答一个精准的供应链响应问题：当安全公告指出某个包或版本存在漏洞时，哪些开发者机器上的本地元数据存在匹配？

## 主要特性

- 单一静态二进制文件，零外部依赖（Go 1.25+）
- 三种扫描模式（`baseline`、`project`、`deep`），适配不同场景和频率
- 结构化 NDJSON 输出，支持可选的暴露目录匹配
- 覆盖 npm、pnpm、Yarn、Bun、PyPI、Go modules、RubyGems、Composer、MCP 配置、编辑器和浏览器扩展、Homebrew

## 使用场景

- 供应链安全事件响应：快速识别哪些开发者终端暴露于受 compromised 的包
- 持续的开发者终端清单管理，满足安全和合规需求
- 跨 AI 编程工具的 MCP 主机配置审计

## 技术特点

- 只读扫描 lockfile、包管理器元数据、扩展清单和 MCP JSON 配置
- 不执行包管理器命令，不读取源代码文件
- 支持暴露目录匹配，实现快速定向检查
- 按生态系统提供结构化标识符
