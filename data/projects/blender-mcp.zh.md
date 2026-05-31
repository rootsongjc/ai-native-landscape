---
name: BlenderMCP
slug: blender-mcp
homepage: null
repo: https://github.com/ahujasid/blender-mcp
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - Utility
description: BlenderMCP 将 Blender 与 Claude AI 通过 MCP 协议集成，支持 AI 驱动的 3D 建模与场景操作。
logo: ''
author: Siddharth Ahuja
ossDate: '2025-03-07T09:58:58.000Z'
featured: false
status: tracked
---

## 详细介绍

BlenderMCP 通过 Model Context Protocol (MCP) 将 Blender 与 Claude AI 连接，实现对 3D 场景的 AI 驱动创建与交互式操作。项目旨在让创作者通过自然语言或结构化指令操控场景与对象，从而加速原型制作与重复任务的自动化。

## 主要特性

- 双向实时通信，AI 可读取场景信息并下发操作指令。
- 支持创建、修改与删除 3D 对象并同步材质与场景元数据。
- 支持执行 Blender Python 脚本以实现复杂操作。
- 集成第三方素材库（如 Poly Haven）以加速场景构建。

## 使用场景

- AI 辅助 3D 建模与场景搭建，提升创作效率。
- 智能化美术流程与批量场景生成。
- 快速生成与编辑复杂场景用于渲染与演示。
- 教学示例与自动化课程演示。

## 技术特点

- 基于 MCP 协议，通过 TCP/JSON 进行命令交互，支持跨平台运行。
- 完全开源，便于扩展和集成自定义工具链。
- 适合作为 AI 驱动的创作工具链入口，与 Blender 插件生态兼容。
