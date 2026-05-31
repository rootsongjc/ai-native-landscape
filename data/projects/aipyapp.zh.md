---
name: AIPyApp
slug: aipyapp
homepage: https://aipy.app/
repo: https://github.com/knownsec/aipyapp
license: Unknown
category: platform-infra
subCategory: data-platforms
tags:
  - Data
  - Dev Tools
description: 面向交互式 Python 执行与任务自动化的开源工具，结合 LLM 实现自然语言驱动的 Python 交互。
logo: ''
author: knownsec
ossDate: '2025-04-06T07:04:34.000Z'
featured: false
status: tracked
---

## 简介

AIPyApp（AIPython / aipy）是一个将 Python 运行环境与大模型结合的开源工具，支持以自然语言驱动的 Python 命令输入与自动执行。它可作为命令行交互式助手或任务模式运行，适合数据处理、分析与自动化脚本场景。

## 主要特性

- 自然语言驱动的 Python 执行：在交互式 Python 会话中用自然语言描述任务，由模型生成并执行代码。
- 任务与 Python 双模式：提供简易的任务模式与更灵活的 Python 模式。
- 丰富的示例与服务器模板：内置示例、测试套件与部署脚本（支持 pip 安装与 uv 运行）。

## 使用场景

- 数据工程与分析：通过自然语言快速运行数据清洗、聚合与可视化流程。
- 自动化脚本与原型：快速将需求转为可执行 Python 步骤并自动化运行。
- 教学与演示：以交互方式展示 Python 指令与模型辅助编程。

## 技术特点

- 使用 Python 编写，模块化设计并配套示例服务器与测试用例。
- 提供配置文件（`~/.aipyapp/aipyapp.toml`）与插件能力，支持自动安装第三方依赖提示。
- MIT/开源许可，社区活跃并有多次发布与持续维护。
