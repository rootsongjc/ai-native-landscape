---
name: Shapash
slug: shapash
homepage: https://maif.github.io/shapash/
repo: https://github.com/maif/shapash
license: Apache-2.0
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Application
  - Dev Tools
  - Visualization
description: 用于将机器学习模型的预测解释为交互式可视化报告，帮助业务人员与决策者理解模型决策。
author: MAIF
ossDate: '2020-04-29T07:34:23Z'
featured: false
status: tracked
---

Shapash 是由 MAIF 维护的开源 Python 库，通过交互式可视化报告让机器学习模型变得可解释。它基于 SHAP 等解释后端，将复杂的模型预测转化为清晰、可分享的说明，弥合数据科学团队与业务决策者之间的沟通鸿沟。

## 主要特性

- 生成基于浏览器的交互式报告，将全局特征重要性与单次预测的局部解释相结合
- 支持从数据集整体趋势到个体预测的任意粒度探索模型行为
- 与 scikit-learn、XGBoost、LightGBM 等主流 ML 框架无缝集成
- 提供简洁易用的 API，大幅降低可解释性分析的上手门槛
- 渲染自包含的 HTML 报告，无需额外基础设施即可分享

## 使用场景

- 金融、医疗等受监管行业的合规审计和模型透明度需求
- 信贷审批和风险评估场景中向利益相关者清晰解释每笔预测
- 数据科学家在模型部署前进行验证和质量把关
- 向产品经理、法务团队等非技术人员传达预测依据

## 技术特点

- 完全基于 Python 实现，封装 SHAP 等底层解释库计算特征贡献
- 输出自包含的 HTML 报告，并支持导出静态报告用于归档和审计
- 设计为轻量集成到现有特征工程流水线中，代码改动极小
- 通过版本化、可分享的报告产物支持长期可追溯性
