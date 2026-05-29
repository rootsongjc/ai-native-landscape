---
name: FastMCP
slug: fastmcp
homepage: https://gofastmcp.com/
repo: https://github.com/jlowin/fastmcp
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - Dev Tools
description: FastMCP 是一个面向生产环境的 Python MCP（Model Context Protocol）框架，提供企业级身份认证、部署工具与丰富的客户端/服务端功能。
logo: ''
author: jlowin / FastMCP 社区
ossDate: '2024-11-30T01:47:40.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

FastMCP 是一个用于构建 MCP（Model Context Protocol）服务器与客户端的生产级 Python 框架，覆盖认证、部署、工具转换与 OpenAPI/FastAPI 生成等能力。项目文档详见 gofastmcp.com，适合需要将 LLM 与后端系统安全、可扩展集成的团队与企业使用。

## 主要特性

- 完整的企业认证支持（Google、GitHub、Azure、Auth0、WorkOS 等）。
- 自动化的部署路径与工具链，支持本地开发、云端与 FastMCP Cloud 部署。
- 丰富的工具/资源/提示（tools/resources/prompts）抽象，支持自动从类型提示生成 schema。

## 使用场景

- 搭建企业级 MCP 服务以将内部数据、工具与 LLM 安全集成。
- 将现有 OpenAPI/FastAPI 应用快速转换为 MCP 服务。
- 在生产环境中实现复杂的代理、组合与可扩展 MCP 架构。

## 技术特点

- Pythonic 的 API，注重最小样板代码与高可测性。
- 支持多种传输协议（STDIO/HTTP/SSE）与客户端适配。
- Apache-2.0 开源许可，社区活跃、发布频繁，适合商业使用与二次开发。
