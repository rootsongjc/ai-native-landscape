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
author: xpzouying
ossDate: '2025-08-03T09:08:45.000Z'
featured: false
status: tracked
---

xiaohongshu-mcp 是一个专为小红书内容运营打造的开源 Model Context Protocol（MCP）服务。它将登录验证、内容发布、推荐列表、搜索、帖子详情和评论互动封装为标准 MCP 工具，可在 Claude Code、Cursor、VSCode 等任何支持 MCP 的客户端中直接调用。

## 内容运营能力

- **发布**图文内容（标题、正文、图片）
- **获取**首页推荐与搜索结果
- **提取**帖子详情及互动指标
- **发表评论**到指定帖子，管理互动

## 登录与会话管理

- 登录状态检查，支持 Cookie 续用
- 支持无头模式和可视模式运行
- 会话持久化减少重复认证开销

## 集成与扩展

- 标准 **HTTP + MCP** 协议接口，轻松对接 AI 客户端
- 使用 **Go** 语言实现，代码结构清晰可扩展、便于审计
- 兼容 Claude Code、Cursor、VSCode、MCP Inspector 等主流客户端
- 开源可审计，便于二次开发与合规控制
