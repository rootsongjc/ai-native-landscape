---
name: Shapash
slug: shapash
homepage: https://maif.github.io/shapash/
repo: https://github.com/maif/shapash
license: Unknown
category: applications-products
subCategory: productivity-tools
tags:
  - Application
  - Dev Tools
  - Visualization
description: 用于将机器学习模型的预测解释为交互式可视化报告，帮助业务人员与决策者理解模型决策。
logo: ''
author: MAIF
ossDate: '2020-04-29T07:34:23Z'
featured: false
status: tracked
---

## 详细介绍

Shapash 是由 MAIF 维护的开源可解释性工具，旨在将机器学习模型的预测以易懂的交互式可视化形式呈现给业务方和非技术受众。它支持与常见 Python 机器学习生态（例如 scikit-learn、XGBoost、LightGBM 等）集成，通过将模型输出与特征重要性、局部解释（基于 SHAP）等信息组合为报告，缩短模型洞察与业务沟通的距离。

## 主要特性

以下是 Shapash 的核心能力：

- 交互式报告：生成可在浏览器中查看的图形化报告，便于分享与审阅。
- 多模型兼容：兼容常见的监督学习模型与管道，便于在现有项目中接入。
- 易用性：提供面向用户的 API 与示例，降低解释性分析的门槛。
- 本地解释与全局视图：同时支持全局特征重要性与单次预测的局部解释。

## 使用场景

Shapash 适用于需要向业务团队展示模型决策依据的场景，例如金融风控、信贷审批、营销效果分析和合规审计等。通过直观的可视化报告，数据科学家可以更高效地与产品/风控/法务等角色沟通，支持模型验证、问题定位和模型上线前的可解释性审查。

## 技术特点

技术上，Shapash 基于 Python 实现，借助 SHAP 等底层解释库计算特征贡献，并封装成交互组件与 HTML 报告。它强调轻量集成、与主流特征工程管道兼容，并提供可导出的静态报告以便归档与审计。
