---
name: SuperSonic
slug: supersonic
homepage: null
repo: https://github.com/tencentmusic/supersonic
license: Unknown
category: applications-products
subCategory: productivity-tools
tags:
  - Application
  - LLM
  - Product
description: 一个面向企业的 AI+BI 平台，融合大语言模型与语义层，实现聊天式 BI 与无头 BI 的统一体验。
logo: ''
author: Tencent Music
ossDate: '2023-06-12T07:23:28Z'
featured: false
status: tracked
---

## 简介

SuperSonic 是新一代 AI+BI 平台，将聊天式 BI（基于大语言模型的对话式分析）与无头 BI（基于语义层的分析）统一为一个可生产化的系统。它结合自然语言理解与受治理的语义层，使业务用户和分析师都能通过对话方式查询数据，同时保持指标的准确性与一致性。

## 主要特性

平台提供对话式分析界面，通过大语言模型推理将自然语言问题精准转换为 SQL 查询。其语义层将业务指标、维度和数据模型标准化，确保所有查询结果的一致性。SuperSonic 还提供端到端的管道自动化，覆盖数据接入、指标建模和可视化输出，并内置多租户与基于角色的访问控制，满足企业级部署需求。

## 使用场景

非技术背景的业务人员使用 SuperSonic 进行自助分析，通过自然语言提问即可获得即时数据洞察，无需编写 SQL。数据团队利用它构建受治理的语义层，确保各部门指标定义统一。组织还可将对话式问答能力嵌入现有仪表盘，为报表添加智能的按需分析功能。

## 技术特点

SuperSonic 采用 Java 实现的服务化架构，专为集成到企业数据平台和容器化部署而设计。它通过可插拔的数据源和模型后端将大语言模型推理与语义层查询解耦，团队可以自由更换模型或数据库而无需修改分析界面。平台已开源，欢迎社区贡献适配器与插件。
