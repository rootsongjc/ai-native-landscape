---
name: Serena
slug: serena
homepage: null
repo: https://github.com/oraios/serena
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: Serena 是一个强大的开源编码智能体工具包，提供语义检索与代码编辑能力，能将 LLM 转变为可在代码库中高效工作的智能体。
logo: ''
author: Oraios AI
ossDate: '2025-03-23T22:35:24.000Z'
featured: false
status: tracked
---

## 简介

Serena 是一个开源的编码智能体工具包，旨在将任意大语言模型 (LLM) 转变为能够在真实代码库中执行分析与编辑任务的高效智能体。通过整合语言服务器协议 (LSP) 与一组面向代码的语义工具，Serena 能够以符号级别定位代码实体、执行精确的插入/替换操作，并显著提升基于 LLM 的编码工作流的准确性与效率。

## 主要特性

- 语义检索与编辑：基于符号（symbol）级别的查找与变更工具，如 find_symbol、insert_after_symbol 等，可在大型代码库中精确定位上下文。
- 多语言支持：原生支持 Python、TypeScript/JavaScript、Go、Rust、Java 等多种语言，并可扩展更多语言服务器。
- 灵活集成：支持通过 MCP（Model Context Protocol）与 Claude Code、Claude Desktop、各类终端客户端及 IDE 集成，亦可通过 Docker/Nix/uvx 启动。
- 仪表盘与日志：内置本地仪表盘用于查看会话日志、工具运行情况与诊断信息。

## 使用场景

Serena 适用于需要在真实项目中进行代码分析、重构、自动化修复或大规模代码搜索与编辑的情形。典型场景包括：在代码库中定位并修复错误、协助自动化重构、与 Claude Code 等工具配合以降低 tokens 成本、以及为 IDE 或自研代理提供符号级别的编辑能力。

## 技术特点

- 基于 LSP 的符号化理解：利用语言服务器的语义信息获得可靠的代码实体边界与引用关系。
- 面向代理的工具集：将常用编辑操作封装为可组合的工具（如查找引用、插入/替换符号体、运行测试等），便于在 agent 循环中调用。
- 可配置的上下文与模式：支持多种运行模式（如 ide-assistant、desktop-app、agent）与自定义配置，适配不同集成场景。
