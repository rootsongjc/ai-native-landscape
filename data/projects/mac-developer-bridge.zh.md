---
name: Mac Developer Bridge
slug: mac-developer-bridge
homepage: https://github.com/alexanderradahl/mac-developer-bridge
repo: https://github.com/alexanderradahl/mac-developer-bridge
license: MIT
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - macOS
  - ChatGPT
  - Terminal
  - Local-First
description: 面向 macOS 的本地优先 MCP 服务器，让 ChatGPT 把真实的 Mac 当作执行环境——shell、文件系统、PTY 会话、后台任务与只读 Codex 历史。
author: alexanderradahl
ossDate: '2026-08-15'
featured: false
status: tracked
---

## 简介

Mac Developer Bridge 通过 MCP 把 ChatGPT 的推理能力接入真实 Mac 的完整执行环境，中间不引入第二个模型或 agent 循环。桥接本身不发起任何 OpenAI 模型调用：它暴露确定性的本地工具（shell、文件系统、PTY 会话、后台任务、已存储的 Codex 线程），ChatGPT 始终是 agent，Mac 是执行环境。项目有意明示其非沙箱化的完全访问安全模型，而不是把 shell 访问伪装成沙箱。

## 主要特性

- 通过 `/bin/zsh -lc` 以登录 macOS 用户身份执行任意 shell 命令，刻意不维护命令白名单
- 真实 PTY 会话，让交互式 shell 与终端程序保持存活，而不是假装 stdin 是终端
- 分离式后台任务，带持久 stdout/stderr 日志、状态检查与进程组终止
- 不受限制的文件系统工具（读/写/追加/列目录/stat/复制/移动/chmod/符号链接/递归删除），并通过 `git apply` 应用 unified diff
- 基于只读 `codex app-server` 方法的已存 Codex 线程发现与分页读取，绝不恢复线程或发起模型轮次
- 可选的后台 Chrome 自动化，通过受管的 `MDB` 标签组操作真实登录配置文件，不抢占焦点

## 使用场景

- 找回已存的 Codex 线程，检查其对应仓库，然后从 ChatGPT 继续这项工作
- 由 ChatGPT 驱动运行 Mac 上已安装的测试、构建、Git、包管理器、数据库 CLI 与 AppleScript
- 让长时间运行的本地任务跨轮次存活，稍后检查日志
- 在登录态 Chrome 配置文件中后台操作已授权页面，用户同时继续手头工作

## 技术特点

- 传输层：OpenAI Secure MCP Tunnel（企业版用户），或由 Cloudflare Tunnel 将纯 HTTP 本地回环前端以 HTTPS 发布；菜单栏应用一键生成 ChatGPT 配置
- 安全姿态为 fail-closed：`bridge.mjs` 在每次工具调用前重读解锁文件，移除即拒绝下一次调用；本地 kill switch（`scripts/disable.sh`）停止前端、桥接、后台 Chrome native host、任务组、PTY 会话与联邦子 MCP server，并对其发出信号的目标逐一验证
- Strict 审批模式增加按站点的 `chrome-background` 授权，在所有已连接 ChatGPT 会话间共享并带过期时间；默认 relaxed 模式与无限制 shell/文件访问所对应的操作者信任级别保持一致
- Chrome 路由是结构性的：所有经由 shell 触达 Chrome 的路径（AppleScript、JXA、直接启动、`open` URL）一律以 `CHROME_BACKGROUND_REQUIRED` 拒绝，强制浏览器操作走 `chrome_*` 工具与自愈的 `MDB` 池（默认 8 个、上限 32 个标签，10 分钟空闲回收，容量目标只增不减）
- 本地 JSONL 审计日志并提供 `audit_tail` 工具；通过 macOS LaunchAgent 实现按用户持久化；要求 Node.js 18+
- Codex 历史工具只用只读方法——绝不调用 `turn/start`，读线程不会触发模型调用
