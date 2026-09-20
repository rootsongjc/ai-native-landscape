---
name: YYLO
slug: yylo
homepage: https://www.npmjs.com/package/@yylo/cli
repo: https://github.com/yylo-dev/yylo
license: MIT
category: agents
subCategory: agent-orchestration
tags:
  - CLI
  - Agent Orchestration
  - Coding Agents
  - Workflow
  - Worktree
  - Merge Queue
  - Receipts
description: 面向编码智能体的命令行编排器，为开发者提供快速智能体循环，为项目运营者提供类型化的任务、验证、合并与发布就绪边界，并以回执提供不可变证据。
author: yylo-dev
ossDate: '2026-01-06'
featured: false
status: tracked
---

## 简介

YYLO（读 "why-lo"）是面向编码智能体、可重复工作流与带回执仓库变更的命令行编排器。它同时服务两类人群：开发者获得快速智能体循环（`yy pi`、限迭代次数的运行、终端实时会话），项目运营者获得类型化的任务、验证、合并与发布就绪边界——每个任务在独立分支/worktree 中执行，合并队列负责单任务组合，声明的回执哈希与终端清单为智能体运行提供不可变证据。

## 主要特性

- 等价的 `yylo` 与 `yy` 启动器，`ypl`（`yy pi --live`）交互式终端智能体会话；每次运行后打印迭代数、工具调用、成本与会话 ID 的执行摘要
- 类型化任务生命周期（`task start|run|status|checkpoint|preflight|finish`），每个任务在专属分支/worktree 中执行，受保护目标 SHA 在启动时冻结
- 单任务合并组合（`merge status|land|project`）基于原生 Git 与 expected-old ref 保护；目标移动强制重新组合，冲突只停留在自己的任务内
- 可观测的命令执行（`watch exec|status|await`）带边界日志与终端状态，无需终端回滚条重建，另有内容寻址的验证证据（`evidence run|status|await`）
- 由经评审 YAML 驱动的可重复工作流运行器，每步注入循环元数据（`YYLO_LOOP_ID`、`YYLO_ITERATION` 等），支持 dry-run lint 与 recover-attempt 只恢复第一个无效步骤
- 版本化的机器输出契约（`--format json|ndjson --raw`），覆盖 task、merge 与 integration 命令

## 使用场景

- 以限迭代次数的方式运行编码智能体，外层再套命令工作流（`yy loop -n 5 --step 'yy pi …' --step 'npm test'`）
- 把智能体驱动的功能交付结构化为类型化任务，经保护性合并队列逐个落地
- 为智能体运行保留不可变审计证据——每次运行留存回执、终端清单、stdout/stderr 与会话 ID
- 按项目选择 Simple（单一检出）或 Advanced（controller + 隔离 worktree + 托管合并）工作区模式

## 技术特点

- npm 包 `@yylo/cli`（稳定版 0.2.x 在 `@latest`，预发布在 `@next`）；要求 Node.js 20.10+ 与 Git；`yy init` 引导 `.juno_task/`，不会提交或重排已存在的脏仓库
- 安全不变量：`finish` 独立执行范围、脏字节、运行时、依赖水合、需求、所有权与选定验证检查，并要求干净已提交的 tip 才入队——merge 不启动任何模型、不挑选评审者、不调度测试套件
- `merge land` 选取一个不可变任务源，在私有分离候选 worktree 中组合，并使用 Git expected-old ref 更新；Git 成功与 Ledger 投影分离，投影重试绝不重复集成
- 技能内容在 `yylo-dev/yylo-skills` 仓库独立版本化，按需安装（`skills install|update|status`），先经 `npx skills add` 暂存、失败时回退浅层精确标签 Git 克隆；规范目录不一致时无 `--force` 即拒绝
- 记录与评测委派给独立安装的规范包——YYLO Ledger（Git 原生记录/任务存储）与 YYLO Benchmark——而非捆绑替代实现
- controller 代际升级自动迁移并配套 `doctor` 诊断命令；整个工作区迁移走 plan/apply/verify 脚本，绑定 Git common 目录、HEAD/ref、任务状态哈希与新旧物理根，拒绝脏、过期、篡改或重放的输入
- 首跑金丝雀（`yy watch exec pwd`）不联系任何模型提供商即可完成；`doctor workspace` 发现可操作拓扑问题时故意返回非零，且从不改动工作区
