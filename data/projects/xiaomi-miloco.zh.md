---
name: Xiaomi Miloco
slug: xiaomi-miloco
homepage: null
repo: https://github.com/XiaoMi/xiaomi-miloco
license: Unknown
category: applications-products
subCategory: workflow-automation
tags:
  - AI Agent
  - Smart Home
  - Home Automation
description: >-
  小米面向全屋智能的开源 AI 解决方案，以米家摄像头音视频作为全模态感知入口、自研 MiMo 大模型为大脑，以 Agent 插件形式运行于 OpenClaw 之上，
  编排全屋设备，提供主动式个性化智能体验。
author: Xiaomi
ossDate: '2025-11-06T13:01:59Z'
featured: false
status: tracked
---
## 简介

Xiaomi Miloco 是小米面向全屋智能未来的开源 AI 解决方案。以米家摄像头的音视频流作为全模态感知入口，以自研 MiMo 大模型为大脑，以 Agent 插件形式运行于 OpenClaw 之上，编排全屋设备。Miloco 2.0 能感知家中发生的事情，基于常识做出主动决策，将"模糊且长期"的目标拆解为可追踪的家务任务，识别家庭成员，并基于家庭记忆为每位成员提供个性化服务。

## 主要特性

- 通用常识，无需预设规则——自动检测危险并分级告警（如小孩玩刀、老人摔倒）
- 身份识别融合人脸与体态信号，支持主动注册新成员及基于身份的个性化操作
- 家庭记忆，从感知与交互中提炼家庭成员长期习惯与偏好，辅助主动决策
- 家务任务，将单一"条件触发规则"升级为复杂长效自动化（条件自动化、定时提醒、习惯追踪）
- 主动智能，像了解家庭、能提前规划的管家一样观察、推理并在恰当时机介入
- 家庭仪表盘 Web 界面，实时查看家庭、设备、成员画像与事件历史

## 使用场景

主动式全屋自动化：有人进入即开灯、提醒家人按时服药、追踪每日锻炼、按成员舒适度调节家居。通过摄像头感知对老人与儿童进行安全监测与分级告警。基于学习到的习惯为每位被识别的家庭成员提供个性化服务。

## 技术特点

以 Agent 插件形式运行于 OpenClaw 智能体平台，编排米家设备。通过米家摄像头流实现多模态感知，推理使用小米 MiMo 模型（MiMo-v2.5 负责感知，MiMo-v2.5-pro 负责 Agent）。建议 7×24 小时运行、≥4GB 内存、≥256GB 存储的宿主机（推荐 Mac mini），系统为 macOS 或 Linux。采用小米自定义非商用许可证开源。
