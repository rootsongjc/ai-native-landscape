---
name: AIO Sandbox
slug: agent-infra-sandbox
homepage: https://sandbox.agent-infra.com
repo: https://github.com/agent-infra/sandbox
license: Apache-2.0
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Agents
  - MCP
  - Sandbox
description: 面向 AI 智能体的一体化沙箱环境，组合浏览器、Shell、文件系统、MCP 与 VSCode 服务，便于开发与测试。
author: Agent Infra
ossDate: '2025-08-06T14:51:05.000Z'
featured: false
status: tracked
---
## 详细介绍

AIO Sandbox 是一个面向 AI 智能体与开发者的一体化沙箱环境，将浏览器、Shell、文件系统、Jupyter、VSCode Server 与 MCP（Model Context Protocol）服务整合到单个可运行的容器内。它为多模态代理、浏览器自动化、代码运行与数据处理提供统一且受控的执行环境，支持快速启动（Docker 镜像或容器化部署）与本地开发调试，适合构建、测试和演示需要跨界协作的智能体工作流。

## 主要特性

- 统一文件系统：浏览器下载的文件可即时在 Shell/文件操作中访问，简化数据流转。
- 多界面支持：内置浏览器（VNC/CDP）、VSCode Server、终端、Jupyter 等多种访问方式。
- MCP 集成：提供 Browser、File、Shell、Markitdown 等 MCP 服务接口，便于智能体与工具协同。
- 安全隔离：沙箱化执行环境，可控制资源与权限，降低运行不可信代码的风险。

## 使用场景

- 智能体开发与调试：为多步骤代理、浏览器驱动任务与工具调用提供可重复的执行环境。
- 教学与演示：快速搭建带 IDE 与交互界面的演示环境，展示端到端工作流。
- 自动化测试：在受控容器内运行网页自动化、脚本执行与集成测试，保证可复现性。
- 研究与原型：搭建包含 Jupyter 与浏览器的实验环境，加速原型验证。

## 技术特点

- 多组件合一：容器内预装浏览器、VSCode Server、Jupyter 与 MCP 服务，开箱即用。
- 丰富 SDK 与示例：提供 Python、TypeScript/JavaScript、Go 等 SDK 与示例代码，方便集成。
- 部署灵活：支持 Docker、Kubernetes、docker-compose 等多种部署方式。
- 开源许可：基于 Apache-2.0 许可证，便于社区使用与扩展。
