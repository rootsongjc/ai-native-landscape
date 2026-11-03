---
name: YYLO Benchmark
slug: yylo-benchmark
homepage: https://www.npmjs.com/package/@yylo/benchmark
repo: https://github.com/yylo-dev/yylo-benchmark
license: MIT
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Benchmark
  - Evaluation
  - AI Agent
  - Sandbox
  - LLM Judge
description: >-
  YYLO Benchmark 是 YYLO 编排器的评测伴侣——一个运行于可信主机的实验运行器，面向历史 Ledger 任务、给定编程提示词与工作流。每个候选尝试在全新仓库中运行，默认排除携带答案的文件；输出被留存，之后可用新的检查或评审器重新评测；冻结的项目/任务清单加确定性损失函数给出可复现的对比行。它刻意不评选获胜者，也不把评审意见与测试结果合并。
author: yylo-dev
ossDate: '2026-08-17'
featured: false
status: tracked
---
## 详细介绍

YYLO Benchmark 是一个轻量的可信主机实验运行器，用于在历史 Ledger 任务、给定编程提示词和工作流上对比模型、框架与配置。经过评审的用例产生相互独立的尝试，其输出被留存；新的检查或 LLM 评审器可以随时作用于这些留存输出，无需重跑尝试即可得到对比行。它是已收录的 YYLO 编排器的独立评测条目，作为单独工具而非编排器条目的扩展收录。

该工具对"自己不是什么"划了硬边界：不评选获胜者、不把评审意见与测试结果合并，也不实现工作流引擎、生产权限、提供商目录、修复循环或自动重试。

## 主要特性

- **全新仓库尝试**：每次独立尝试都从包含经评审预解决方案文件的全新仓库开始——不是链接 worktree，也不是克隆的未来历史
- **留存输出随时重评**：尝试输出被留存，不同的检查或评审器（A、B、以后新增）随时可作用于留存输出，无需重跑候选
- **冻结清单**：项目级与任务级标准放在显式 YAML/JSON 文件中——无注册表、无发现机制、无权重、无继承、无覆盖——配合确定性损失函数
- **答案卫生排除**：参考解决方案、完成响应、隐藏检查和其他尝试绝不作为候选上下文；默认排除 `.juno_task`、隐藏评审器和参考解决方案
- **带出处的用例**：`--reference` 与 `--ledger-task` 是可选出处；参考必须从 base 降序而来，且绝不复制进候选输入
- **不评获胜者**：产出对比行，而非排名或认证

## 使用场景

- **真实任务上的模型对比**：把同一个经评审用例跑在多个模型或框架上，对比留存输出
- **回溯评测**：对历史尝试应用新的检查或评审器，无需重跑
- **清单驱动的质量度量**：按可复用的冻结项目/任务标准为尝试打分，配确定性损失
- **工作流运行器评测**：通过委托在同一套用例机制上评测普通 Workflow Runner YAML

## 技术特点

- **v3 记录模型**：0.2.x 源码采用 case/attempt/evaluation 三类记录；旧 v1/v2 API、plan/recover/doctor/regrade 命令与受控生产边界已移除，历史计划与证据保留在各自锁定的实现上不做迁移
- **尝试工作区卫生**：每次尝试全新仓库；符号链接与 gitlink 除非排除或在经评审的输入仓库中物化，否则拒绝；安装与生成依赖必须进忽略规则；留存输出包含被跟踪文件与未忽略的新文件
- **显式上下文边界**：工作区/上下文卫生，而非文件系统/账号/网络隔离——进程继承主机认证；路由/Git/Pi 覆盖环境变量被丢弃，避免意外继承会话
- **用例准备流程**：`yylo-benchmark case draft` 向 Ledger 请求只读辅助提案；`case create` 接受 `--source`、`--base`（预解决方案提交）、`--prompt`、`--exclude`、`--reviewed`，用例存储在源仓库之外
- **冻结标准文件**：`--project-criteria` / `--criteria` 接受显式 YAML/JSON，含名称、版本、假设与标准——刻意不做注册表与权重系统
- **运行要求**：Node 20.10+、Git、tar 与 POSIX 进程组；测试无需付费提供商调用；不支持 Windows；以 npm 包 `@yylo/benchmark` 分发
