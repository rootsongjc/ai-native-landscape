---
name: KCoral
slug: kcoral
homepage: https://kcoral.mlc.ai/
repo: https://github.com/mlc-ai/kcoral
license: Apache-2.0
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Sandbox
  - GPU
  - Benchmark
  - Remote Execution
  - Agentic Coding
description: >-
  MLC AI 出品的轻量级基准测试服务器，面向智能体 GPU 编程远程执行 GPU 程序。通过统一端点管理 GPU
  与节点资源，工作进程运行在沙箱中，并由 Rust 实现的 Router 支持多节点调度。
author: MLC AI
ossDate: '2026-07-16'
featured: false
status: tracked
---

## 简介

KCoral 是一个面向智能体 GPU 编程的轻量级基准测试服务器：远程执行 GPU 基准程序、管理 GPU 与节点资源，并通过统一端点对外服务。没有本地 GPU 的智能体（和人）可以像本地命令一样编译、运行和分析 GPU 代码，包括 `ncu`、`compute-sanitizer` 等 NVIDIA 工具。项目以 `pip install kcoral` 包形式发布，包含 Python 客户端、GPU 执行服务器和用于跨节点扩展的 Rust Router。

## 主要特性

- `kcoral run` 将远程工具封装为 CLI 命令：`python`、`compute-sanitizer`、`ncu`、`run-iket` 和 `shell`，支持 `--send`/`--out` 上传工作区与取回产物
- Python 客户端 API：用 `@client.function()` 装饰函数后调用 `.remote()` 即可在服务器上执行；`Program.return_file()`/`return_folder()` 取回工作区输出
- 通过 `client.execute(program, gpu_count=N)` 在 1–8 块 GPU 上运行多 GPU 程序，支持单进程控制全部 GPU 或每 GPU 一个 worker 两种布局
- Router 模式：Rust 实现的 Router 接收客户端请求并选择可用计算节点；节点向外连接 Router，客户端使用同一套执行 API
- 可配置容量的持久化文件上传缓存

## 使用场景

- 编码智能体在没有本地 GPU 的情况下迭代 GPU 核函数与基准测试
- 团队通过 Router 在多节点间共享 GPU 集群，运行智能体基准测试与分析工作流
- 远程运行 NVIDIA 分析与消毒工具，并将产物收集回智能体工作区
- 在远程构建-运行流水线中将 CPU 编译 worker 与 GPU 执行节点分离

## 技术特点

- 执行协议由四类指令构成 —— `upload`、`get_function`、`run`、`return`，定义了请求、结果、缓存与错误语义
- Worker 通过 bubblewrap 文件系统沙箱隔离，服务器启动时自检，可用 `--sandbox none` 显式关闭；由于客户端可执行任意代码，服务器设计为仅部署在可信的隔离网络
- Router 用 Rust 实现；每个节点运行一个管理其 Python 服务器的 supervisor，节点与 Router 均向外连接，无需暴露入站端口
- 单 GPU 与多 GPU 程序共享同一 worker，worker 会为 `cpu_only` 调用释放 GPU
- 包结构分离：`kcoral` 仅安装客户端依赖，`kcoral[server]` 附加 GPU 执行与 CPU 编译依赖（Python 3.10+）
