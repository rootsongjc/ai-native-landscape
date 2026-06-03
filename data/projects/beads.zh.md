---
name: Beads
slug: beads
homepage: https://steveyegge.github.io/beads/
repo: https://github.com/steveyegge/beads
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
  - Memory
description: 为代码智能体提供持久化记忆和高效检索的轻量化框架。
author: Steve Yegge
ossDate: '2025-10-12T03:09:46Z'
featured: false
status: tracked
---
Beads 是一个面向代码智能体的轻量级记忆层，为 AI 辅助开发提供持久化上下文与高效检索能力。它通过将重要上下文转换为嵌入并保存在高效索引中，帮助智能体在多轮交互或长期会话中保持连贯性和历史感知。

## 持久化记忆

- 跨会话存储关键对话片段、代码片段与元数据
- 代理重启与上下文窗口重置后记忆仍然保留
- 将记忆管理与模型推理解耦，保持架构清晰
- 轻量存储设计，针对代码助手工作负载优化

## 基于嵌入的检索

- 向量索引，支持跨存储记忆的快速语义搜索
- 元数据过滤，按文件、语言或主题缩小结果范围
- 低延迟查询，针对实时编码助手交互优化
- 返回紧凑的相关上下文，可直接注入提示词

## 集成设计

- 简单可扩展的 API，便于接入现有智能体运行时与工具链
- 与任意 LLM 协同工作，将检索结果拼接到模型输入中
- 模块化架构，分离记忆管理与推理逻辑
- 兼容主流编码智能体框架与 IDE 扩展

## 适用场景

- 需要跨会话保持对话状态的编码助手
- 恢复相关历史变更、注释与调试记录
- 用项目历史上下文增强代码生成与调试质量
- 降低长期运行智能体工作流中的上下文工程复杂度
