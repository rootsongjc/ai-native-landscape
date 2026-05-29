---
name: MAI-UI
slug: mai-ui
homepage: https://tongyi-mai.github.io/MAI-UI-blog
repo: https://github.com/tongyi-mai/mai-ui
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Application
  - Chat UI
  - Multimodal
  - UI
description: 一个面向图形界面交互的智能体框架，支持从 2B 到 235B 不同规模的模型以构建真实世界任务的代理体验。
logo: ''
author: Tongyi-MAI
ossDate: '2025-12-15T07:53:22Z'
featured: false
status: tracked
---

## 详细介绍

MAI-UI 是一个以图形界面（GUI）为中心的智能体框架，目标是在真实世界场景下将基础模型能力落地为可交互的智能体体验。它覆盖从小型到超大规模模型（约 2B 至 235B），并在设备 - 云协同、界面事件感知与多模态输入上提供工程化支持，使模型能通过可视化控件与外围系统协作完成任务。

## 主要特性

- 支持多尺度模型：适配 2B 到 235B 模型以满足不同算力与延迟需求。
- GUI 感知：将界面事件和控件状态作为上下文输入，提升交互准确性。
- 设备 - 云协作：设计用于本地设备与云端模型协同工作，兼顾响应速度与能力边界。
- 多模态支持：结合文本、图像与界面操作信息进行决策。

## 使用场景

- 智能桌面助理：在桌面或 Web 应用中通过界面行为理解用户意图并自动化重复操作。
- 监督式内置助手：为行业应用嵌入可解释的操作型智能体，提升业务流程效率。
- 设备联动场景：在物联网或边缘设备上协调界面与模型完成交互式任务。

## 技术特点

- 以事件与界面状态为一等输入，优化上下文构造与提示工程。
- 支持多模态上下文融合，提高对视觉与文本混合场景的理解能力。
- 注重工程化部署与运行时适配，包含延迟/算力分层方案和模型路由策略。
