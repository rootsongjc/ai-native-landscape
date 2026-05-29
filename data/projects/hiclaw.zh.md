---
name: HiClaw
slug: hiclaw
homepage: null
repo: https://github.com/higress-group/hiclaw
license: Unknown
category: agents
subCategory: agent-orchestration
tags:
  - Agents
  - Automation
  - Orchestration
  - Workflow
description: 基于即时通讯的开源 Agent Teams 系统，支持多 Agent 协作与人在回路监督
logo: ''
author: Higress Group
ossDate: '2026-02-21'
featured: false
status: tracked
---

## 详细介绍

HiClaw 是一个基于 OpenClaw 构建的开源 Agent Teams 系统。它采用 Manager-Worker 架构，Manager Agent 作为你的 AI 总管，负责创建 Worker、分配任务、监控进度并汇报结果。你只需做出决策，无需时刻照看 Agent。

所有的通信都在 Matrix Rooms 中进行，你可以看到所有对话，并随时介入——就像在群聊中指挥团队一样。

## 主要特性

**安全优先的设计**
- Worker 永不持有真实的 API 密钥或 GitHub PAT
- Worker 仅携带 consumer token（类似工牌）
- 即使 Worker 被攻破，也无法泄露你的凭证
- Higress AI Gateway 统一管理所有真实凭证

**真正的开放即时通讯**
- 内置 Matrix 服务器，无需 Slack/飞书机器人审批流程
- 在浏览器中打开 Element Web 即可使用
- 支持任何 Matrix 客户端（Element、FluffyChat）
- 跨平台支持：iOS、Android、Web

**一键快速启动**
- 单条 `curl | bash` 命令即可完成所有设置
- 自动部署 Higress AI Gateway、Matrix 服务器、文件存储、Web 客户端和 Manager Agent
- 最小化配置，开箱即用

**丰富的技能生态**
- Worker 可按需从 skills.sh 拉取 80,000+ 社区技能
- 使用安全，因为 Worker 无法访问真实凭证
- 支持动态技能加载与卸载

**人在回路监督**
- 每个 Matrix Room 都包含你、Manager 和相关 Worker
- 可随时跳入对话进行干预
- 无黑盒，无隐藏的 Agent-to-Agent 调用
- Manager 运行定期心跳检测，Worker 卡住时自动告警

## 使用场景

**软件开发团队**
- 前端开发自动化（UI 实现、组件开发）
- 后端开发自动化（API 开发、数据库设计）
- 代码审查与测试
- 多人协作开发任务分配

**DevOps 与运维**
- 自动化部署流程
- 监控告警处理
- 基础设施管理
- 故障排查与修复

**内容创作与生成**
- 文档编写
- 代码生成与优化
- 多语言翻译
- 技术文章创作

**数据分析与研究**
- 数据收集与处理
- 报告生成
- 研究任务分配
- 结果汇总与分析

## 技术特点

**架构设计**
- **Manager Agent**：基于 OpenClaw 构建，负责 Worker 生命周期管理
- **Higress AI Gateway**：LLM 代理、MCP Server 托管、凭证管理
- **Tuwunel (Matrix)**：所有 Agent 与人类通信的 IM 服务器
- **Element Web**：浏览器客户端，零配置
- **MinIO**：集中式文件存储，Worker 无状态
- **OpenClaw**：Agent 运行时，集成 Matrix 插件和技能系统

**部署模式**
- 分布式容器部署
- 一键安装脚本支持
- Docker Desktop / Docker Engine / Podman Desktop 兼容
- 资源要求：至少 2 CPU 核心和 4GB RAM

**安全模型**
- Worker 只能看到自己的 consumer token
- Gateway 处理所有真实凭证
- Manager 知道 Worker 在做什么，但从不接触实际密钥

**通信协议**
- 基于 Matrix 协议的即时通讯
- 支持端到端加密
- 开放标准，可使用任何 Matrix 客户端
- 支持移动端访问

**扩展性**
- 支持动态创建和销毁 Worker
- 技能生态系统（80,000+ 技能）
- MCP Server 集成
- 可通过 Matrix Room 直接与 Worker 交互
