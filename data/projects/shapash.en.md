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
description: Generates interactive visual reports to explain machine learning model predictions for stakeholders.
logo: ''
author: MAIF
ossDate: '2020-04-29T07:34:23Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

Shapash is an open-source explainability toolkit maintained by MAIF that helps present machine learning model predictions as interactive visual reports for business stakeholders and non-technical audiences. It integrates with common Python ML libraries (e.g., scikit-learn, XGBoost, LightGBM) and combines outputs such as feature importance and local explanations (based on SHAP) into shareable reports to bridge model insights and business understanding.

## Main Features

Key capabilities of Shapash include:

- Interactive reports: generate browser-viewable graphical reports for sharing and review.
- Multi-model compatibility: works with common supervised models and pipelines for easy integration.
- Ease of use: provides user-oriented APIs and examples to lower the barrier for interpretability analysis.
- Local and global views: supports both global feature importance and per-prediction local explanations.

## Use Cases

Shapash is suitable for scenarios where model decisions must be explained to business teams, such as financial risk, credit scoring, marketing analysis, and compliance audits. Clear visual reports enable data scientists to communicate findings efficiently to product, risk, and legal stakeholders and support model validation and pre-deployment explainability checks.

## Technical Features

Technically, Shapash is built in Python and leverages underlying explanation libraries like SHAP to compute feature contributions. It packages interactive components and HTML reports, emphasizes lightweight integration with mainstream feature-engineering pipelines, and provides exportable static reports for archiving and auditing.
