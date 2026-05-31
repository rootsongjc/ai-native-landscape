---
name: Xiaohongshu MCP
slug: xiaohongshu-mcp
homepage: https://www.haha.ai/xiaohongshu-mcp
repo: https://github.com/xpzouying/xiaohongshu-mcp
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - AI Agent
  - MCP
description: 面向小红书内容运营的开源 MCP 服务，支持登录检测、图文发布、推荐与搜索、帖子详情与评论等自动化操作，便于在多种 AI 客户端中统一调用。
logo: ''
author: xpzouying
ossDate: '2025-08-03T09:08:45.000Z'
featured: false
status: tracked
---

xiaohongshu-mcp 是一个针对小红书平台的 Model Context Protocol（MCP）服务，实现从登录状态检查、内容发布到推荐列表与搜索、帖子详情获取及评论操作的自动化能力，可在 Claude Code、Cursor、VSCode 等支持 MCP 的客户端中统一接入，辅助创作者进行规模化、规范化的内容运营。

## 主要特性

- 登录与状态校验，支持 Cookies 续用
- 发布图文内容（标题、正文、图片）
- 获取首页推荐与搜索内容
- 帖子详情、互动指标与评论抓取
- 发表评论到指定帖子
- 标准 HTTP + MCP 协议接口，易于集成
- 支持无头与可视模式运行

## 使用场景

- 自媒体 / 品牌内容批量运营
- 生成式 AI 辅助创作与自动分发
- 私有或企业内部增长工具接入
- 多 MCP 工具编排的自动化代理

## 技术特点

- 基于 Go 实现，结构清晰可扩展
- 标准 MCP 工具定义：check_login_status、publish_content 等
- HTTP 接入与多客户端兼容（Claude、Cursor、Inspector）
- 支持无头模式提升资源利用率
- 开源可审计，便于二次开发与合规控制
