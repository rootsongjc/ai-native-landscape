---
name: OM1
slug: om1
homepage: null
repo: https://github.com/openmind/om1
license: Other
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - AI Agent
description: OpenMind 的模块化 AI 运行时，面向多模态代理与机器人应用，支持传感器、LIDAR、相机与动作执行
author: OpenMind
ossDate: '2025-01-08T21:23:40.000Z'
featured: false
status: tracked
---
## 简介

OM1 是 OpenMind 开发的模块化 AI 运行时，旨在让开发者将多模态代理部署在数字环境与物理机器人上（如 Humanoids、TurtleBot、四足机器人等）。它支持摄像头、LIDAR、社交媒体与 Web 数据输入，并能触发运动、导航与自然对话等物理动作。

## 主要特性

- 模块化架构：基于 Python，支持插件式硬件接口（ROS2、Zenoh、CycloneDDS）。
- 多模态输入与动作：处理视觉、语音与传感器数据，并驱动物理动作与导航。
- Web 调试与仿真：提供 WebSim 调试界面与示例配置，便于在本地模拟机器人行为。

## 使用场景

- 研究与教学：机器人与多模态智能体的研究平台与课程示例。
- 原型与开发：在实际机器人上快速搭建并验证感知→决策→执行的闭环系统。
- 仿真与调试：通过 WebSim 与容器化部署在本地或云端运行复杂示例。

## 技术特点

- 使用 Python/C++ 混合实现，支持跨平台部署与 Docker 化运行。
- 提供丰富的示例、配置文件与硬件适配层，包含 Jetson 和 macOS 推荐配置。
- MIT 许可证与活跃社区贡献，持续发布 beta 版本与文档（docs.openmind.org）。
