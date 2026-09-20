---
name: mcptoon
slug: mcptoon
homepage: https://activeing123.github.io/mcptoon/
repo: https://github.com/activeing123/mcptoon
license: Apache-2.0
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - CLI
  - Token Optimization
  - Agent Skills
description: 零依赖的 Python 命令行工具，将本机 MCP server 配置统一成一份并同步到各个 AI 客户端，还能把全部 server 聚合成单个 stdio MCP server，同时让工具 schema 与技能文件远离上下文窗口。
author: activeing123
ossDate: '2026-07-27'
featured: false
status: tracked
---

## 简介

mcptoon 是一个 189 KB、仅依赖 Python 标准库的命令行工具，充当本机 MCP 工具与 agent 技能的"管家"。它能发现各 AI 客户端里已安装的 MCP server，维护一份统一配置并同步到 Claude Desktop/Code、Cursor、Codex、opencode 等客户端，也可以把所有 server 聚合成一个 stdio MCP server 供 agent 调用。核心价值是 token 成本：工具清单默认只列工具名，JSON schema 按需拉取而非每轮注入。

## 主要特性

- 纯名称工具清单：列出 50 个 server 的 255 个工具只需 581 token，而原生 schema 需要 71,929 token（−99.2%，tiktoken `cl100k_base`），schema 仅在真正需要时获取
- 在 MCP server 之外同时管理技能目录——371 个技能原生全文 926,232 token，常驻指针集只需 39 token，离线 BM25 短名单约 501 token 即可定位目标技能
- MCP 配置单一事实来源，同步到每个 agent 客户端；后续新增工具或技能即时生效，无需重启 agent
- `mcptoon serve` 将全部已配置 MCP server 聚合到同一个 stdio 端点
- `mcptoon bench` 实测本机工具与技能目录的 token 开销，可选 tiktoken 校验的"measured"模式与估算模式区分
- 技能视图以链接（Windows 上为 junction）分发，源目录一次修改处处生效，并遵循"归档而非删除"的安全规则

## 使用场景

- 在 Claude Desktop、Claude Code、Cursor、Codex、opencode 之间维护多份 MCP 配置、希望只保留一份同步配置的开发者
- 上下文窗口被数百个工具 schema 在会话开始前塞满的 agent
- 在大型技能目录中找到合适技能，而不必将每个 `SKILL.md` 读入上下文
- 本地复现 token 成本数据——`mcptoon demo --quick` 启动官方 everything 参考服务器，约 30 秒打印 token 计算

## 技术特点

- 纯 Python 标准库实现，CI 强制零运行时依赖，wheel 仅 189 KB；Windows/macOS/Linux 同等支持，版本由 GitHub Actions 自动发布到 PyPI
- 清单分档换取 token：Compact（仅名称）节省 99.2%，Slim 节省 88.5%，Toon 结果压缩约 34%，以 JSON 为基线格式
- 技能检索用 BM25 排序，离线运行、无 LLM 调用、零 token；`--k 5` 针对"make a PDF"这类查询返回候选短名单
- 技能同步按真实路径去重，junction 指向的目录不会重复统计；`remove` 将技能移入带日期的归档而非直接删除
- 附带 Claude Code 插件（`/plugin marketplace add activeing123/mcptoon`），SessionStart hook 自动安装 CLI，通过 `.mcp.json` 接入 stdio 桥接，并教 agent 何时压缩
- 已进入 MCP 官方 Registry（`server.json` 随发版自动发布），并被 numtide/llm-agents.nix 打包、有自动跟版机器人
