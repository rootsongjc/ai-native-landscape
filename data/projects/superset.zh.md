---
name: Apache Superset
slug: superset
homepage: https://superset.apache.org/
repo: https://github.com/apache/superset
license: Apache-2.0
category: platform-infra
subCategory: data-platforms
tags:
  - Application
  - Data
  - Deployment
  - UI
description: 一个开源的数据可视化与数据探索平台，支持交互式仪表盘、SQL 查询与多种数据源连接。
author: Apache Software Foundation
ossDate: '2015-07-21T18:55:34Z'
featured: false
status: tracked
---

Apache Superset 是一个快速、轻量且企业就绪的开源数据可视化与探索平台，面向数据分析师与工程师设计。它提供丰富的交互式仪表盘、灵活的 SQL IDE 以及广泛的可视化插件，能够对接几乎所有数据源，是商业智能和自助分析工作流的热门选择。

## 主要特性

- 丰富的预置可视化组件和拖拽式仪表盘构建器，支持交互过滤、联动筛选和下钻分析
- 功能完善的 SQL IDE，具备查询历史、表元数据浏览和结果缓存等能力
- 基于角色的访问控制，支持 LDAP、OAuth、SAML 等多种认证后端
- 可扩展的安全模型，满足企业级部署需求
- 插件化架构允许开发者基于定义良好的 API 创建自定义可视化组件

## 使用场景

- 自助 BI 门户，让业务团队自主构建和共享仪表盘，减少对工程团队的依赖
- 基础设施和应用运维监控面板，呈现时序与性能数据
- 数据平台的展示层，对 ETL 管道和数据湖的产出进行可视化
- 数据工程团队的即席分析和探索性数据分析

## 技术特点

- Python/Flask 后端和 React 前端，支持 Docker、Kubernetes、Helm Charts 或传统方式部署
- 通过 SQLAlchemy 驱动连接 40 余种数据源
- 提供缓存层（Redis、Memcached）以加速查询性能
- 插件化架构支持自定义可视化组件开发
