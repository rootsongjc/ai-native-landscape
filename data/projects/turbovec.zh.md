---
name: turbovec
slug: turbovec
homepage: https://pypi.org/project/turbovec/
repo: https://github.com/RyanCodrai/turbovec
license: MIT
category: rag-knowledge
subCategory: vector-databases
tags:
  - Vector Search
  - Quantization
  - SIMD
  - Rust
description: >-
  基于 Google Research TurboQuant 构建的进程内向量索引，提供 Python 和 Rust 双语言
  支持——每维 2 或 4 比特存储，直接用 SIMD 内核对压缩形态检索：比 float32 省
  7.8 倍内存，相同召回下比 FAISS 快至 4.4 倍。
author: RyanCodrai
ossDate: '2026-03-26'
featured: false
status: tracked
---

## 简介

turbovec 是一个面向 Python 和 Rust 的进程内向量索引：利用 Google Research 的 TurboQuant 把每个向量按每维 2 或 4 比特存储，并用 SIMD 内核直接在压缩形态上检索。1000 万条 768 维嵌入在 float32 下要占 31 GB，turbovec 只需 4 GB，检索速度可达 FAISS 的 4.4 倍且召回相当。它是库而不是服务：任何数据都不会离开你的进程。

## 主要特性

- 快：4 比特下为 FAISS FastScan 的 4.4 倍，2 比特下 2.2 倍，ARM 与 x86 皆然
- 省内存：4 比特下比 float32 小 7.8 倍，2 比特下 15.5 倍，召回与 FAISS 相当
- 在线操作：没有训练步骤、无需重建——向量加入即可检索，删除只需微秒级
- 增量持久化：`sync(path)` 只写自上次调用以来变化的部分，单次 fsync，原子改名保证崩溃安全
- 支持按 id 白名单或位掩码过滤检索；`IdMapIndex` 用自定义 uint64 id 作键，删除为 O(1)
- LangChain、LlamaIndex、Haystack、Agno 内存存储的即插即用替代

## 使用场景

- 在 31 GB float32 索引装不下的机器上做嵌入检索
- 与开源嵌入模型搭配，构建完全离线的本地 RAG 栈
- 频繁增删的索引（按用户、按会话），要求插入和删除都很廉价

## 技术特点

- 用 TurboQuant（arXiv:2504.19874）把每个向量量化到每维 2 或 4 比特；码本由数学推导而非训练数据得出，因此没有训练过程，单次 `add()` 在微秒级完成
- 分阶段检索先用经过调优的 SIMD 内核（x86 上 AVX-512，ARM 上 NEON）扫描单个比特平面，再对候选短名单做精确重打分——这正是它在相同比特率下胜过 FAISS IndexPQFastScan 的原因
- `sync(path)` 增量持久化——只写自上次调用以来变化的字节，单次 fsync、原子改名——无论索引多大，快照都在毫秒级；也支持整文件 `write()`/`load()`
- 打分是内积，做余弦相似度需先归一化向量；输入必须是 2 维 float32 数组，其他 dtype 直接报错而非静默转换；Rust crate 与 Python API 逐一对齐
