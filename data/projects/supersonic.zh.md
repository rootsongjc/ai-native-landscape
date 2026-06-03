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
author: Tencent Music
ossDate: '2023-06-12T07:23:28Z'
featured: false
status: tracked
---

SuperSonic 是新一代 AI+BI 平台，将聊天式 BI（基于大语言模型的对话式分析）与无头 BI（基于语义层的分析）统一为一个可生产化的系统。它结合自然语言理解与受治理的语义层，使业务用户和分析师都能通过对话方式查询数据，同时保持指标的准确性与一致性。

## 主要特性

- 对话式分析界面，通过大语言模型推理将自然语言问题精准转换为 SQL 查询
- 语义层将业务指标、维度和数据模型标准化，确保所有查询结果的一致性
- 端到端的管道自动化，覆盖数据接入、指标建模和可视化输出
- 内置多租户与基于角色的访问控制，满足企业级部署需求
- 通过可插拔后端将 LLM 推理与语义层查询解耦

## 使用场景

- 非技术背景的业务人员通过自然语言提问即可获得即时数据洞察，无需编写 SQL
- 数据团队构建受治理的语义层，确保各部门指标定义统一
- 将对话式问答能力嵌入现有仪表盘，为报表添加智能的按需分析功能
- 用交互式 AI 驱动的数据探索替代传统 BI 报表请求

## 技术特点

- 采用 Java 实现的服务化架构，专为集成到企业数据平台而设计
- 支持容器化部署，具备可插拔的数据源和模型后端
- 团队可以自由更换模型或数据库而无需修改分析界面
- 开源项目，欢迎社区贡献适配器与插件
