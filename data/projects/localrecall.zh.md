---
name: LocalRecall
slug: localrecall
homepage: https://quay.io/mudler/localrecall
repo: https://github.com/mudler/localrecall
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Data
  - Memory
  - RAG
description: LocalRecall 提供本地化的记忆层与知识库管理，便于与智能体集成的 RAG 功能。
logo: ''
author: mudler
ossDate: '2025-02-12T21:07:04Z'
featured: false
status: tracked
---

## 详细介绍

LocalRecall 是一个轻量级的本地记忆层和知识库管理服务，提供 RESTful API 来管理集合、上传文件、索引与检索，旨在为智能体与 RAG 场景提供本地化、可控的长期与短期记忆功能。

## 主要特性

- 简单的 REST API，支持文件上传与集合管理。
- 本地向量存储与检索，兼容多种向量引擎。
- 与 LocalAGI、LocalAI 等生态集成，支持多格式文件（Markdown、PDF 等）。
- 支持 Docker/Compose 快速部署。

## 使用场景

用于为智能体、聊天机器人或 RAG 应用提供内部知识库與记忆存储，适合离线或私有部署的团队。

## 技术特点

注重简洁的 API 设计与可插拔的向量存储后端，方便在不同运行环境中作为长期记忆存储层使用。
