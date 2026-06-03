---
name: Magentic-UI
slug: magentic-ui
homepage: null
repo: https://github.com/microsoft/magentic-ui
license: Unknown
category: applications-products
subCategory: chat-interfaces
tags:
  - AI Agent
description: 以人为本的网页智能体研究原型，可在网页上浏览和执行操作、生成和执行代码，以及生成和分析文件。
author: Microsoft
ossDate: '2025-05-05T20:24:30.000Z'
featured: false
status: tracked
---

Magentic-UI 是一个人机协作网页智能体的研究原型，由多智能体系统提供支持，可以在网页上浏览和执行操作、生成和执行代码，以及生成和分析文件。

## 核心功能

1. **以人为本的设计**：与传统智能体不同，Magentic-UI 将人类纳入循环中，允许用户实时监控、控制和调整任务。

2. **多智能体系统**：基于 AutoGen 构建，Magentic-UI 利用专门的智能体团队来处理 Web 任务的不同方面。

3. **可控的网页自动化**：在保持用户监督的情况下自动化网页任务，并通过操作审批机制确保安全。

4. **文件操作**：作为任务执行的一部分，可以上传、生成和分析文件。

5. **代码生成和执行**：生成和执行代码以完成复杂任务。

6. **计划学习和检索**：从以前的运行中学习以改进未来的自动化，并将计划保存在库中以供重用。

## 使用场景

- **网页任务自动化**：在保持人工监督的同时，自动化重复性网页任务，如表单填写、数据提取和在线订购。

- **复杂网页导航**：处理需要深度导航非搜索引擎索引网站的任务。

- **集成网页和代码任务**：执行需要网页导航和代码执行的任务，例如从在线数据生成图表。

- **研究和实验**：在受控环境中研究人机交互并试验网页智能体。

## 技术细节

Magentic-UI 基于微软发布的强大智能体团队 Magentic-One 构建，并由微软领先的智能体框架 AutoGen 提供支持。其主要特性包括：

- **协同规划**：使用聊天和计划编辑器协作创建和批准逐步计划
- **协同任务执行**：直接通过网页浏览器或聊天中断和指导任务执行
- **操作保护**：敏感操作只有在用户明确批准后才会执行
- **并行任务执行**：并行运行多个任务，并通过状态指示器显示进度

## 安装方式

Magentic-UI 可通过 PyPI 安装：

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install magentic-ui --upgrade

# 设置 API 密钥
export OPENAI_API_KEY="your-api-key-here"

# 启动 Magentic-UI
magentic-ui --port 8081
```

有关包括 Docker 要求和自定义 LLM 配置在内的更详细安装说明，请访问 GitHub 仓库。
