---
name: BlenderMCP
slug: blender-mcp
homepage: null
repo: https://github.com/ahujasid/blender-mcp
license: MIT
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - Utility
description: BlenderMCP 将 Blender 与 Claude AI 通过 MCP 协议集成，支持 AI 驱动的 3D 建模与场景操作。
author: Siddharth Ahuja
ossDate: '2025-03-07T09:58:58.000Z'
featured: false
status: tracked
---
BlenderMCP 是一个面向 Blender 的 MCP 服务器，允许 AI 智能体控制 Blender 进行 3D 建模与渲染任务。它通过 Model Context Protocol 将 Blender 与 Claude AI 连接，支持通过自然语言或结构化指令进行 AI 驱动的场景创建与交互式操作。

## 实时场景控制

- 双向实时通信，AI 可读取场景信息并下发操作指令
- 支持创建、修改与删除 3D 对象并同步材质与场景元数据
- 可执行 Blender Python 脚本以实现复杂操作与批量自动化

## 素材集成

- 集成 Poly Haven 等第三方素材库以加速场景构建
- 通过 AI 指令直接导入和操作纹理、HDRI 与 3D 模型
- 加速原型制作并自动化重复性 3D 工作流

## AI 辅助工作流

- 通过自然语言控制 3D 建模，无需手动操作工具
- 交互式场景搭建，AI 驱动建议与修改
- 批量场景生成，适用于渲染管线与演示场景

## 技术基础

- 基于 MCP 协议通过 TCP/JSON 进行命令交互，支持跨平台运行
- 完全开源，便于扩展和集成自定义工具链
- 与 Blender 插件生态兼容，适合作为 AI 驱动的创作工具链入口
