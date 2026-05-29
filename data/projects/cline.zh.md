---
name: Cline
slug: cline
homepage: https://cline.bot/
repo: https://github.com/cline/cline
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: 基于多模型的智能编程代理，支持 Plan/Act 双模式，使用 API Key 时要悠着点。
logo: ''
author: Cline Team
ossDate: '2024-07-06T07:28:10.000Z'
featured: true
thumbnail: ''
source: ''
status: tracked
---

Cline 是我在 VS Code 中最喜欢用的 AI 编程代理之一。我没有把它当成一个补全工具，而是把它当成一个“可指挥的编程助手”：告诉它要做什么，它会先构建计划，再一步步执行，还能在终端跑命令、开浏览器、监控输出。

![Cline 在 VS Code 中的界面](https://assets.jimmysong.io/images/ai/cline/cline.webp)
{width=3000 height=1637}

## 我的使用印象

Cline 拥有“Plan ↔ Act”双模式，能够根据用户提示构建任务计划，逐步拆解多步骤的复杂流程，并执行相应操作，如创建文件、编辑代码、运行终端命令、调试程序、滚动浏览器等，同时实时展示执行进度和 diff 结果。它与 VS Code 的终端深度集成，支持命令执行和实时输出监控，还可以开启自动回复按钮，让任务自动推进。借助 Claude 3.5 Sonnet 的 Computer Use 能力，Cline 具备 headless 浏览器自动化操作的能力，适用于端到端测试和界面调试。此外，Cline 支持 MCP 协议，允许用户动态添加工具（如 JIRA、AWS EC2、PagerDuty 等）扩展其功能。在安全控制方面，所有操作都需用户确认，并自动保存在快照中，方便回滚与对比，确保操作可控、安全。

## 注意事项

- Token 使用量要留意，如果任务拆得细，调用模型频率高，很容易一会儿就消耗几美元。
- 它处理工作区上下文的时候需要 warm up，每次新 session 首次扫描仓库，可能运行速度有差距。
- 有时它完成 plan 后就 wrap up，不会继续分支处理，需要你主动要求“继续”或改 plan。

## 适合什么样的开发者

如果你喜欢主动控制流程、需要自动化执行脚本或端到端测试，不介意为 context richness 付出 token 成本，Cline 是非常好的选择。

如果你习惯快速补全、轻量交互，或者对 token 成本特别敏感，可能会觉得它“重了一些”。
