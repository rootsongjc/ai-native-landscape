import { marked } from 'marked';
import { buildLandscapeIndex, loadCategories, loadProjects, loadTaxonomy } from '../../scripts/lib.mjs';

marked.use({
  gfm: true,
});

export const SITE = {
  title: 'AI Native Landscape',
  description: 'The ecosystem map for building AI Native systems.',
  image: '/og-wide.jpg',
  imageSquare: '/og.jpg',
  url: 'https://landscape.jimmysong.io',
  copyrightStartYear: 2017,
  license: 'Apache-2.0',
  mainSite: 'https://jimmysong.io',
  scoreApiBase: 'https://ai-oss-rank-worker.jimmysong.io',
  repo: 'https://github.com/rootsongjc/ai-native-landscape',
  starRepo: 'https://github.com/rootsongjc/ai-native-landscape',
  issueNew: 'https://github.com/rootsongjc/ai-native-landscape/issues/new?template=add-project.yml',
};

export const UI = {
  zh: {
    htmlLang: 'zh-CN',
    homePageTitle: 'AI 原生全景图',
    landscapeTitle: 'AI 原生全景图',
    subsiteLabel: 'jimmysong.io 出品',
    navMainSite: '主站',
    navLandscape: '全景图',
      navCategories: '分类',
    navMethodology: '评分体系',
    navSubmit: '提交项目',
    navAbout: '关于',
      navGithub: 'GitHub',
    navRepository: '开源仓库',
    footer: '© jimmysong.io',
    heroDescription: '探索 AI Native 时代经过人工精选与多维评分的开源工具、Agent、运行时、平台与基础设施生态。',
    scopeFeatureEngineering: 'AI Native',
    scopeFeatureOpenSource: '完全开源',
    scopeFeatureCurated: '人工精选',
    scopeFeatureScored: '评分推荐',
    scopeFeatureNoModels: '不含基础模型',
    scopeFeatureMaintained: '持续更新',
    scopeBoundary: '面向 AI Native 时代的工具、Agent、运行时、平台与基础设施生态地图。',
    metaDescription: '面向 AI Native 时代的工具、Agent、运行时、平台与基础设施生态地图。',
    projects: '项目',
    categories: '分类',
    featured: '精选',
    search: '搜索',
    searchPlaceholder: '搜索项目、标签、分类、子类...',
    searchModalPlaceholder: '搜索项目名称、标签、分类...',
    searchModalNoResults: '没有匹配的项目',
    searchModalHint: '按 ESC 关闭  ·  Enter 跳转',
    category: '分类',
    allCategories: '全部分类',
    status: '状态',
    allStatus: '全部状态',
    sort: '排序',
    score: '评分',
    scoreLabels: {
      mustWatch: '重点关注',
      strongRecommendation: '强烈推荐',
      worthTrying: '值得尝试',
      monitorProgress: '持续观察',
      exploreCarefully: '谨慎评估',
    },
    name: '名称',
    ossDate: '开源时间',
    downloadJson: '下载 JSON',
    submitProject: '提交项目',
    details: '详情',
    noProjects: '没有项目匹配当前筛选条件。',
    back: '返回全景图',
    website: '官网',
    projectFacts: '项目信息',
    license: '许可证',
    author: '作者',
    openSourced: '开源时间',
    repository: '仓库',
    source: '数据来源',
    scoreBreakdown: '评分拆解',
    scoreLoading: '评分加载中',
    scoreUnavailable: '评分暂不可用',
    overallHealth: '综合健康度',
    activity: '活跃度',
    community: '社区参与度',
    quality: '影响力',
    sustainability: '持续性',
    unknown: '未知',
    statuses: {
      tracked: '已跟踪',
      sandbox: '观察中',
      incubating: '已验证',
      graduated: '代表项目',
      recommended: '推荐使用',
      worthWatching: '值得关注',
      newlyAdded: '新收录',
      inactive: '不活跃',
      archived: '已归档',
    },
    githubMetrics: 'GitHub 指标',
    stars: 'Stars',
    forks: 'Forks',
    openIssues: 'Open Issues',
    contributors: '贡献者',
    owner: '所属组织',
    primaryLanguage: '主语言',
    lastCommit: '最近提交',
    commitsLastYear: '年度提交',
    repoCreatedAt: '创建时间',
    daysAgo: '天前',
    hoursAgo: '小时前',
    justNow: '刚刚',
    submitTitle: '提交开源 AI 项目',
    submitDescription: '欢迎提交缺失项目、修正分类、补充链接或改进评分信号。数据通过 YAML 维护，Issue 会引导贡献者提供可验证信息。',
    addProject: '新增项目',
    addProjectDescription: '如果项目还没有收录，请使用项目提交 Issue 表单。',
    openIssueForm: '打开 Issue 表单',
    updateProject: '更新项目数据',
    updateProjectDescription: '结构化 YAML 修改建议通过 Pull Request 提交。提交前请运行校验。',
    dataRules: '数据规则',
    dataRulesDescription: '每个项目需要 GitHub 仓库、中英文描述、大类与子类 key、标签与状态。评分通过运行时网络请求获取。',
    languageLabel: 'English',
    themeToggleAria: '切换主题',
    themeSystem: '跟随系统',
    themeDark: '深色模式',
    themeLight: '浅色模式',
    directoryTitle: '分类导航',
      directoryTitle: '分类浏览',
      directoryDescription: '按技术领域探索 AI Native 生态。',
      curatedBy: 'Curated by Jimmy Song',
    browseByCategory: '按分类浏览',
      featuredDiscover: '项目全景',
    projectLandscapeDescription: '浏览并导出 AI Native 生态中的项目分布与代表项目。',
    topScore: '高评分',
    newest: '最新加入',
    searchResults: '搜索结果',
    browseFilterTitle: '浏览与筛选',
    searchSectionDescription: '优先搜索、排序、筛选并切换视图，而不是先阅读长介绍。',
    skillGuideTitle: '用 AI 智能搜索发现项目',
    skillGuideDescription: '一行命令安装，支持 Claude Code、Cursor、Copilot、Codex 等主流 AI 编程工具。安装后用自然语言描述你想找的开源 AI 项目即可。',
    skillGuideCmd1: 'npx skills add rootsongjc/ai-native-landscape --skill landscape-search',
    skillGuideCmd1Label: 'Claude Code',
    skillGuideCmd2: 'npx landscape-search',
    skillGuideCmd2Label: 'Cursor / Copilot / Codex / Cline / Aider',
    skillGuideExample1: '"帮我找一个支持 MCP 协议的 Agent 框架"',
    skillGuideExample2: '"推荐一些轻量级 RAG 工具"',
    skillGuideCta: '查看 GitHub',
    toolbarSearchLabel: 'Search',
    toolbarSortLabel: 'Sort',
    toolbarFilterLabel: 'Filter',
    toolbarViewLabel: 'View',
    toolbarExportLabel: '导出',
    toolbarSearchPlaceholder: '搜索项目...',
    toolbarSortDefault: '默认排序',
    toolbarSortScore: '按分数',
    toolbarSortName: '按名称',
    toolbarSortAdded: '按收录时间',
    toolbarSortOssDate: '按开源时间',
    toolbarAllStatus: '全部状态',
    toolbarStatusRecommended: '推荐使用',
    toolbarStatusWorthWatching: '值得关注',
    toolbarStatusNewlyAdded: '新收录',
    toolbarStatusInactive: '不活跃',
    toolbarStatusArchived: '已归档',
    viewCategory: '进入分类',
    filterByTag: '标签筛选',
    allTags: '全部标签',
    subCategory: '子类',
    allSubCategories: '全部子类',
    resetFilters: '重置筛选',
    legacyCategoryNotice: '这是旧分类兼容页，结果已按新分类体系聚合。',
    createdBy: '由 Jimmy Song 长期维护',
    scopeStatement: '这是一个长期维护的 AI Native 技术生态地图。',
    authorityStatement: '关注 Agent、MCP、Context Engineering、RAG、AI Runtime、AI Infrastructure 与 AI Native Tooling。',
    whatIsTitle: '这是一个什么网站',
    whatIsBody: 'AI Native Landscape 是一个长期维护的 AI Native 技术生态地图，帮助开发者理解 AI Native 技术栈，并发现值得关注的项目。',
    whatNotTitle: '这不是什么网站',
    whatNotBody: '它不是 AI 新闻站、AI 工具导航站、AI 产品排行榜，也不是大模型目录。',
    whyTrustTitle: '为什么值得信任',
    whyTrustBody: '全部项目要求可追溯仓库与双语描述，评分维度公开，导出数据可复核，并持续进行人工精选维护。',
    howToUseTitle: '如何开始',
    howToUseStep1: '先使用搜索、排序与筛选快速收敛候选项目。',
    howToUseStep2: '再按分类浏览理解 AI Native 技术栈和相邻工具关系。',
    howToUseStep3: '最后进入项目详情页查看评分、状态与辅助事实信息。',
    methodologyTitle: '评分体系与收录标准',
    methodologyDescription: 'AI Native Landscape 使用 4 维评分模型对开源项目进行综合评估，并遵循严格的收录与维护标准，确保数据可验证、可追溯。',
    methodologyPageTitle: '评分体系与收录标准',
    methodologyPageDescription: '了解 AI Native Landscape 的评分体系、收录标准以及项目参考状态管理方式。',
    scoringModel: '评分维度',
    scoringModelDescription: '综合健康度为 0-100 分，由以下四个维度加权计算得出。',
    activity: '活跃度',
    activityDescription: '衡量项目的近期开发活跃程度，包括提交频率、Issue 响应速度、Release 节奏等。活跃度越高说明项目在持续迭代。',
    community: '社区参与度',
    communityDescription: '评估社区贡献者数量、PR 合并速度、讨论活跃度以及生态插件/工具数量。反映项目的社区活力。',
    quality: '影响力',
    qualityDescription: '综合评估 GitHub Star 数、Fork 数、被依赖关系和引用情况。体现项目在整个生态中的实际使用价值。',
    sustainability: '持续性',
    sustainabilityDescription: '分析项目的维护年限、核心团队稳定性、商业支持和长期路线图。判断项目能否持续健康发展。',
    curationStandards: '收录标准',
    curationStandardsDescription: '所有收录项目必须满足以下基本条件。',
    curationRule1: '必须有可访问的 GitHub 仓库与基础项目信息。',
    curationRule2: '必须具备中英文描述，支持跨语言检索与理解。',
    curationRule3: '必须映射到稳定分类 key，便于长期统计与外部集成。',
    curationRule4: '优先纳入工程可落地、维护活跃、生态可验证的项目。',
    projectLifecycle: '参考状态',
    projectLifecycleDescription: '参考状态只用于帮助社区理解项目在本 Landscape 中的可参考程度，不代表孵化、认证或基金会治理。',
    statusSandbox: '观察中',
    statusSandboxDescription: '新收录或信号仍需继续观察的项目，适合进一步调研和验证。',
    statusIncubating: '已验证',
    statusIncubatingDescription: '项目已有较清晰的工程价值和社区信号，可作为同类方案的候选参考。',
    statusGraduated: '代表项目',
    statusGraduatedDescription: '项目在对应领域具备较高可见度、使用信号或社区活跃度，可作为重点参考对象。',
    statusArchived: '已归档',
    statusArchivedDescription: '项目已停止维护或不再活跃，从主视图中淡化但仍保留数据以供参考。',
    howToSubmit: '如何提交项目',
    howToSubmitDescription: '如果你发现一个值得收录的开源 AI 项目，可以通过以下步骤提交。',
    submitStep1: '确认项目不在当前列表中（使用搜索功能检查）。',
    submitStep2: '点击「提交项目」，通过 GitHub Issue 表单填写项目信息。',
    submitStep3: '维护者会审核提交信息，符合标准的项目将在下一轮更新中被收录。',
    howToUpdate: '如何变更项目',
    howToUpdateDescription: '如果项目信息需要更新（分类调整、地址变更等），可以按以下方式操作。',
    updateStep1: '通过 GitHub Pull Request 直接修改 data/projects/ 目录下的 YAML 文件。',
    updateStep2: '提交前运行 npm run validate 确保数据格式正确。',
    updateStep3: '维护者审核通过后会自动生效。',
    howToArchive: '如何归档项目',
    howToArchiveDescription: '项目可能因以下原因被归档。',
    archiveReason1: '项目仓库已被归档或删除。',
    archiveReason2: '项目连续 6 个月以上无任何提交或 Release。',
    archiveReason3: '项目明确声明已停止维护或推荐用户迁移。',
    archiveReason4: '归档的项目仍保留数据，可随时恢复活跃状态。',
    scoringRange: '评分等级',
    scoreRange90: '重点关注',
    scoreRange90Desc: '综合评分 ≥ 90，代表项目在各维度表现优异。',
    scoreRange80: '强烈推荐',
    scoreRange80Desc: '综合评分 ≥ 80，项目成熟度高、社区活跃。',
    scoreRange70: '值得尝试',
    scoreRange70Desc: '综合评分 ≥ 70，项目有潜力但仍有提升空间。',
    scoreRange60: '持续观察',
    scoreRange60Desc: '综合评分 ≥ 60，项目在早期阶段或有波动。',
    scoreRangeBelow: '谨慎评估',
    scoreRangeBelowDesc: '综合评分 < 60，建议充分测试后再采用。',
    aboutPageTitle: '关于 AI Native Landscape',
    aboutPageDescription: 'AI Native Landscape 是一个长期维护的 AI Native 技术生态地图。',
    aboutHeroTitle: '关于 AI Native Landscape',
    aboutHeroDescription: 'AI Native Landscape 是一个长期维护的 AI Native 技术生态地图，帮助开发者理解 AI Native 技术栈，并发现值得关注的项目。',
    aboutFocusTitle: '我们关注',
    aboutFocusItems: ['Agent 系统', 'MCP', '上下文工程', 'RAG', 'AI 运行时', 'AI 基础设施', 'AI Native 工具链'],
    aboutExcludeTitle: '我们不收录',
    aboutExcludeItems: ['闭源产品', '单纯的大模型', '纯学术论文'],
    aboutGoalTitle: '目标',
    aboutGoalBody: '帮助开发者理解 AI Native 技术栈，并发现值得关注的项目。',
    aboutTrustItems: ['仅收录可验证的开源仓库与基础项目元数据', '提供双语描述、分类体系与结构化导出', '评分模型公开，维护标准透明', '持续精选与维护，而非一次性聚合抓取'],
    aboutJimmyTitle: '关于 Jimmy Song',
    aboutJimmyRoles: ['《Kubernetes Handbook》作者', 'CNCF Ambassador', '云原生社区创始人', 'AI 基础设施与平台工程实践者'],
    aboutJimmyDescription: 'Jimmy Song 长期关注云原生、平台工程与 AI 基础设施，是 AI Native Landscape 的发起者与持续维护者。这个项目延续了他一贯的开源策展方式：用结构化数据、明确分类和可验证信号，帮助开发者理解快速演进的 AI Native 技术生态。',
    aboutCtaMethodology: '查看评分体系',
    aboutCtaSubmit: '提交项目',
    footerTitle: 'AI Native Landscape',
    footerDescription: '面向 AI 原生时代的工具、平台与基础设施生态地图。',
    footerCuratedBy: '由 Jimmy Song 长期维护',
    footerResources: '资源',
    footerCommunity: '社区',
    footerBlog: '博客',
    footerBook: '图书',
    footerMethodology: '评分体系',
    footerSubmit: '提交项目',
    footerLandscape: '全景图',
    footerCategories: '分类浏览',
    footerAbout: '关于',
    footerMainSite: 'jimmysong.io',
    viewGrid: '卡片',
    viewHeatmap: '热力图',
    starCta: '在 GitHub 上关注',
    starCtaRepo: 'rootsongjc/ai-native-landscape',
    heatmapTitle: 'Project Landscape',
    heatmapSubtitle: '按分类 × 评分等级展示项目分布',
    share: '分享',
    shareCard: '分享卡片',
    shareCardTitle: '分享此项目',
    downloadPng: '下载 PNG',
    copyLink: '复制链接',
    linkCopied: '链接已复制',
    generating: '生成中...',
    relatedProjects: '相关项目',
  },
  en: {
    htmlLang: 'en',
    homePageTitle: 'AI Native Landscape',
    landscapeTitle: 'AI Native Landscape',
    subsiteLabel: 'by jimmysong.io',
    navMainSite: 'Main Site',
    navLandscape: 'Landscape',
      navCategories: 'Categories',
    navMethodology: 'Methodology',
    navSubmit: 'Submit',
    navAbout: 'About',
      navGithub: 'GitHub',
    navRepository: 'Repository',
    footer: '© jimmysong.io',
    heroDescription: 'Explore the ecosystem of open source tools, agents, runtimes, platforms, and infrastructure for the AI Native era, curated by hand and evaluated across multiple dimensions.',
    scopeFeatureEngineering: 'AI Native',
    scopeFeatureOpenSource: 'Open Source Only',
    scopeFeatureCurated: 'Human Curated',
    scopeFeatureScored: 'Scored & Recommended',
    scopeFeatureNoModels: 'No Model Listings',
    scopeFeatureMaintained: 'Continuously Updated',
    scopeBoundary: 'The ecosystem map for building AI Native systems.',
    metaDescription: 'Explore the ecosystem of tools, agents, runtimes, platforms and infrastructure for the AI Native era.',
    projects: 'Projects',
    categories: 'Categories',
    featured: 'Featured',
    search: 'Search',
    searchPlaceholder: 'Search projects, tags, categories, subcategories...',
    searchModalPlaceholder: 'Search project names, tags, categories...',
    searchModalNoResults: 'No matching projects',
    searchModalHint: 'ESC to close  ·  Enter to open',
    category: 'Category',
    allCategories: 'All categories',
    status: 'Status',
    allStatus: 'All status',
    sort: 'Sort',
    score: 'Score',
    scoreLabels: {
      mustWatch: 'Must Watch',
      strongRecommendation: 'Strong Recommendation',
      worthTrying: 'Worth Trying',
      monitorProgress: 'Monitor Progress',
      exploreCarefully: 'Explore Carefully',
    },
    name: 'Name',
    ossDate: 'OSS date',
    downloadJson: 'Download JSON',
    submitProject: 'Submit Project',
    details: 'Details',
    noProjects: 'No projects match the current filters.',
    back: 'Back to Landscape',
    website: 'Website',
    projectFacts: 'Project Facts',
    license: 'License',
    author: 'Author',
    openSourced: 'Open Sourced',
    repository: 'Repository',
    source: 'Source',
    scoreBreakdown: 'Score Breakdown',
    scoreLoading: 'Loading score',
    scoreUnavailable: 'Score unavailable',
    overallHealth: 'Overall health',
    activity: 'Activity',
    community: 'Community',
    quality: 'Impact',
    sustainability: 'Sustainability',
    unknown: 'Unknown',
    statuses: {
      tracked: 'Tracked',
      sandbox: 'Tracking',
      incubating: 'Verified',
      graduated: 'Established',
      recommended: 'Recommended',
      worthWatching: 'Worth Watching',
      newlyAdded: 'Newly Added',
      inactive: 'Inactive',
      archived: 'Archived',
    },
    githubMetrics: 'GitHub Metrics',
    stars: 'Stars',
    forks: 'Forks',
    openIssues: 'Open Issues',
    contributors: 'Contributors',
    owner: 'Owner',
    primaryLanguage: 'Language',
    lastCommit: 'Last Commit',
    commitsLastYear: 'Commits/Year',
    repoCreatedAt: 'Created',
    daysAgo: 'days ago',
    hoursAgo: 'hours ago',
    justNow: 'just now',
    submitTitle: 'Submit an Open Source AI Project',
    submitDescription: 'Submit missing projects, fix categories, add links, or improve score signals. Data is maintained as YAML and issues should include verifiable sources.',
    addProject: 'Add a project',
    addProjectDescription: 'Use the project submission issue form when the project is not listed yet.',
    openIssueForm: 'Open Issue Form',
    updateProject: 'Update project data',
    updateProjectDescription: 'Use a pull request for structured YAML updates. Run validation before opening the PR.',
    dataRules: 'Data rules',
    dataRulesDescription: 'Each project needs a GitHub repository, bilingual descriptions, stable category/subCategory keys, tags, and status. Scores are loaded at runtime over the network.',
    languageLabel: '中文',
    themeToggleAria: 'Toggle theme',
    themeSystem: 'System theme',
    themeDark: 'Dark mode',
    themeLight: 'Light mode',
    directoryTitle: 'Browse by Category',
    directoryDescription: 'Explore the AI Native ecosystem by technical domain.',
    curatedBy: 'Curated by Jimmy Song',
    browseByCategory: 'Browse by Category',
    featuredDiscover: 'Project Landscape',
    projectLandscapeDescription: 'Browse, switch views, and export the project landscape across the AI Native ecosystem.',
    topScore: 'Top Score',
    newest: 'Newly Added',
    searchResults: 'Search Results',
    browseFilterTitle: 'Browse & Filter',
    searchSectionDescription: 'Search, sort, filter, switch views, and export before you browse deeper.',
    skillGuideTitle: 'Discover Projects with AI Search',
    skillGuideDescription: 'One command to install. Works with Claude Code, Cursor, Copilot, Codex, and more. After installing, describe the open-source AI project you need in natural language.',
    skillGuideCmd1: 'npx skills add rootsongjc/ai-native-landscape --skill landscape-search',
    skillGuideCmd1Label: 'Claude Code',
    skillGuideCmd2: 'npx landscape-search',
    skillGuideCmd2Label: 'Cursor / Copilot / Codex / Cline / Aider',
    skillGuideExample1: '"find me an MCP-compatible agent framework"',
    skillGuideExample2: '"lightweight RAG tools for production"',
    skillGuideCta: 'View on GitHub',
    toolbarSearchLabel: 'Search',
    toolbarSortLabel: 'Sort',
    toolbarFilterLabel: 'Filter',
    toolbarViewLabel: 'View',
    toolbarExportLabel: 'Export',
    toolbarSearchPlaceholder: 'Search projects...',
    toolbarSortDefault: 'Default',
    toolbarSortScore: 'By Score',
    toolbarSortName: 'By Name',
    toolbarSortAdded: 'By Date Added',
    toolbarSortOssDate: 'By OSS Date',
    toolbarAllStatus: 'All Status',
    toolbarStatusRecommended: 'Recommended',
    toolbarStatusWorthWatching: 'Worth Watching',
    toolbarStatusNewlyAdded: 'Newly Added',
    toolbarStatusInactive: 'Inactive',
    toolbarStatusArchived: 'Archived',
    viewCategory: 'Open category',
    filterByTag: 'Filter by tag',
    allTags: 'All tags',
    subCategory: 'Subcategory',
    allSubCategories: 'All subcategories',
    resetFilters: 'Reset filters',
    legacyCategoryNotice: 'This is a legacy category URL. Results are aggregated using the new taxonomy.',
    createdBy: 'Long-term curated by Jimmy Song',
    scopeStatement: 'AI Native Landscape is a long-term curated ecosystem map for AI Native systems.',
    authorityStatement: 'Focused on agents, MCP, context engineering, RAG, runtimes, infrastructure, and AI native tooling.',
    whatIsTitle: 'What This Site Is',
    whatIsBody: 'AI Native Landscape is a long-term curated ecosystem map for AI Native systems, built to help developers understand the AI Native stack and discover projects worth tracking.',
    whatNotTitle: 'What This Site Is Not',
    whatNotBody: 'It is not an AI news site, an AI tools directory, a product leaderboard, or a foundation-model catalog.',
    whyTrustTitle: 'Why You Can Trust It',
    whyTrustBody: 'Every project requires a verifiable repository and bilingual metadata, with exportable data, transparent scoring dimensions, and ongoing manual curation.',
    howToUseTitle: 'How To Navigate',
    howToUseStep1: 'Start with search, sort, and filters to narrow down candidate projects.',
    howToUseStep2: 'Use category browsing to understand the AI Native stack and adjacent tooling.',
    howToUseStep3: 'Open project details to inspect score, status, and supporting signals.',
    methodologyTitle: 'Methodology & Inclusion Standards',
    methodologyDescription: 'AI Native Landscape uses a 4-dimension scoring model with strict inclusion criteria to ensure data is verifiable and traceable.',
    methodologyPageTitle: 'Methodology & Inclusion Standards',
    methodologyPageDescription: 'Learn about the scoring methodology, inclusion criteria, and reference status model in AI Native Landscape.',
    scoringModel: 'Scoring Dimensions',
    scoringModelDescription: 'Overall health is scored 0-100, calculated as a weighted sum of the following dimensions.',
    activity: 'Activity',
    activityDescription: 'Measures recent development momentum — commit frequency, issue response time, and release cadence. Higher activity indicates continuous iteration.',
    community: 'Community',
    communityDescription: 'Evaluates contributor count, PR merge speed, discussion volume, and ecosystem plugins/tools. Reflects community vitality.',
    quality: 'Impact',
    qualityDescription: 'Assesses GitHub stars, forks, dependency graph, and external references. Measures real-world adoption and influence.',
    sustainability: 'Sustainability',
    sustainabilityDescription: 'Analyzes maintenance history, core team stability, commercial backing, and long-term roadmap. Judges whether a project can sustain healthy growth.',
    curationStandards: 'Inclusion Standards',
    curationStandardsDescription: 'All listed projects must meet the following baseline requirements.',
    curationRule1: 'A valid GitHub repository and baseline project metadata are required.',
    curationRule2: 'Bilingual descriptions are required for cross-language discoverability.',
    curationRule3: 'Projects must map to stable category keys for long-term analytics.',
    curationRule4: 'Priority goes to projects with practical engineering value, active maintenance, and verifiable ecosystem signals.',
    projectLifecycle: 'Reference Status',
    projectLifecycleDescription: 'Reference status helps the community understand how much signal a listed project currently has. It is not incubation, certification, or foundation governance.',
    statusSandbox: 'Tracking',
    statusSandboxDescription: 'Newly listed or still-observed projects that need more community and maintenance signal before being treated as stronger references.',
    statusIncubating: 'Verified',
    statusIncubatingDescription: 'Projects with clear engineering value and enough community signal to be considered as candidates in the category.',
    statusGraduated: 'Established',
    statusGraduatedDescription: 'Projects with strong visibility, adoption signal, or community activity in their category.',
    statusArchived: 'Archived',
    statusArchivedDescription: 'Project has stopped maintenance or is no longer active. Dimmed in the main view but data is retained for reference.',
    howToSubmit: 'How to Submit a Project',
    howToSubmitDescription: 'If you find an open source AI project worth including, follow these steps.',
    submitStep1: 'Confirm the project is not already listed (use the search function).',
    submitStep2: 'Click "Submit Project" and fill in the GitHub issue form with project details.',
    submitStep3: 'Maintainers will review the submission. Approved projects are added in the next update cycle.',
    howToUpdate: 'How to Update a Project',
    howToUpdateDescription: 'To update project information (category changes, URL changes, etc.), follow these steps.',
    updateStep1: 'Edit the YAML file under data/projects/ via a GitHub Pull Request.',
    updateStep2: 'Run npm run validate before submitting to ensure correct data format.',
    updateStep3: 'Changes take effect after maintainer review and approval.',
    howToArchive: 'How Projects Get Archived',
    howToArchiveDescription: 'A project may be archived for the following reasons.',
    archiveReason1: 'The project repository has been archived or deleted.',
    archiveReason2: 'No commits or releases for 6+ consecutive months.',
    archiveReason3: 'The project has explicitly announced end-of-life or recommends migration.',
    archiveReason4: 'Archived projects retain their data and can be restored to active status at any time.',
    scoringRange: 'Score Labels',
    scoreRange90: 'Must Watch',
    scoreRange90Desc: 'Overall score ≥ 90 — outstanding performance across all dimensions.',
    scoreRange80: 'Strong Recommendation',
    scoreRange80Desc: 'Overall score ≥ 80 — mature project with active community.',
    scoreRange70: 'Worth Trying',
    scoreRange70Desc: 'Overall score ≥ 70 — promising project with room to grow.',
    scoreRange60: 'Monitor Progress',
    scoreRange60Desc: 'Overall score ≥ 60 — early stage or showing volatility.',
    scoreRangeBelow: 'Explore Carefully',
    scoreRangeBelowDesc: 'Overall score < 60 — thorough testing recommended before adoption.',
    aboutPageTitle: 'About AI Native Landscape',
    aboutPageDescription: 'AI Native Landscape is a long-term curated ecosystem map for AI Native systems.',
    aboutHeroTitle: 'About AI Native Landscape',
    aboutHeroDescription: 'AI Native Landscape is a long-term curated ecosystem map focused on helping developers understand the AI Native stack and discover projects worth tracking.',
    aboutFocusTitle: 'What We Track',
    aboutFocusItems: ['Agents', 'MCP', 'Context Engineering', 'RAG', 'AI Runtime', 'AI Infrastructure', 'AI Native Tooling'],
    aboutExcludeTitle: 'What We Do Not Track',
    aboutExcludeItems: ['Closed-source products', 'Foundation models by themselves', 'Pure academic papers'],
    aboutGoalTitle: 'Goal',
    aboutGoalBody: 'Help developers understand the AI Native stack and discover projects worth tracking.',
    aboutTrustItems: ['Only verifiable open-source repositories with baseline metadata are included', 'Bilingual descriptions, taxonomy, and structured exports improve discoverability', 'Scoring methodology and maintenance standards are transparent', 'Projects are continuously curated rather than dumped into a static directory'],
    aboutJimmyTitle: 'About Jimmy Song',
    aboutJimmyRoles: ['Author of Kubernetes Handbook', 'CNCF Ambassador', 'AI Infrastructure Practitioner', 'Founder of Cloud Native Community China'],
    aboutJimmyDescription: 'Jimmy Song is a long-time practitioner in cloud native, platform engineering, and AI infrastructure, and the curator behind AI Native Landscape. The project extends his long-term approach to open ecosystem curation with structured data, explicit taxonomy, and verifiable signals for developers tracking a fast-moving AI Native stack.',
    aboutCtaMethodology: 'View Methodology',
    aboutCtaSubmit: 'Submit a Project',
    footerTitle: 'AI Native Landscape',
    footerDescription: 'Ecosystem map for AI Native tools, platforms, and infrastructure.',
    footerCuratedBy: 'Curated by Jimmy Song',
    footerResources: 'Resources',
    footerCommunity: 'Community',
    footerBlog: 'Blog',
    footerBook: 'Books',
    footerMethodology: 'Methodology',
    footerSubmit: 'Submit Project',
    footerLandscape: 'Landscape',
    footerCategories: 'Categories',
    footerAbout: 'About',
    footerMainSite: 'jimmysong.io',
    viewGrid: 'Grid',
    viewHeatmap: 'Heatmap',
    heatmapTitle: 'Project Landscape',
    heatmapSubtitle: 'Project distribution by category × score tier',
    starCta: 'Follow on GitHub',
    starCtaRepo: 'rootsongjc/ai-native-landscape',
    share: 'Share',
    shareCard: 'Share Card',
    shareCardTitle: 'Share This Project',
    downloadPng: 'Download PNG',
    copyLink: 'Copy Link',
    linkCopied: 'Link Copied',
    generating: 'Generating...',
    relatedProjects: 'Related Projects',
  },
};

function stripLanguagePrefix(path) {
  const normalized = path || '/';
  return normalized
    .replace(/^\/en(?=\/|$)/, '')
    .replace(/^\/zh(?=\/|$)/, '') || '/';
}

export function ui(lang = 'en') {
  return UI[lang] || UI.en;
}

export function localizedPath(path, lang = 'en') {
  const normalized = stripLanguagePrefix(path);
  if (lang === 'zh') {
    if (normalized === '/') return '/zh/';
    return `/zh${normalized}`;
  }
  return normalized;
}

export function alternatePath(path, lang = 'en') {
  const normalized = stripLanguagePrefix(path);
  return lang === 'zh' ? normalized : localizedPath(normalized, 'zh');
}

export function getLandscape() {
  return buildLandscapeIndex();
}

export function getProjects() {
  return loadProjects();
}

export function getCategories() {
  return loadCategories();
}

export function getTaxonomy() {
  return loadTaxonomy();
}

export function getCategoryByKey(key) {
  const taxonomy = getTaxonomy();
  return taxonomy.categoryMap.get(key);
}

export function getSubCategoryByKey(key) {
  const taxonomy = getTaxonomy();
  return taxonomy.subCategoryMap.get(key);
}

export function legacyCategoryTargets(key) {
  const taxonomy = getTaxonomy();
  return taxonomy.legacyAliases[key] || [];
}

export function categoryName(category, lang = 'en') {
  return category?.name?.[lang] || category?.name?.en || category?.key || 'Unknown';
}

export function categoryDescription(category, lang = 'en') {
  return category?.description?.[lang] || category?.description?.en || '';
}

export function subCategoryName(value, lang = 'en') {
  const subCategory = getSubCategoryByKey(value);
  return subCategory?.name?.[lang] || subCategory?.name?.en || value;
}

export function projectDescription(project, lang = 'en') {
  return project.description?.[lang] || project.description?.en || project.description?.zh || '';
}

export function projectContent(project, lang = 'en') {
  return project.content?.[lang] || project.content?.en || project.content?.zh || projectDescription(project, lang);
}

export function githubAvatarUrl(project, size = 96) {
  const owner = project.repoSlug?.split('/')[0];
  return owner ? `https://github.com/${encodeURIComponent(owner)}.png?size=${size}` : '';
}

export function projectIconUrl(project, size = 96) {
  const githubAvatar = githubAvatarUrl(project, size);
  if (githubAvatar) return githubAvatar;
  if (project.homepage) {
    return `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(project.homepage)}&sz=${size}`;
  }
  return '';
}

export function markdownToHtml(markdown) {
  return marked.parse(markdown || '');
}

export function scoreLabel(scorePercent, lang = 'en') {
  if (!Number.isFinite(scorePercent)) return ui(lang).scoreLoading;
  const labels = ui(lang).scoreLabels;
  if (scorePercent >= 90) return labels.mustWatch;
  if (scorePercent >= 80) return labels.strongRecommendation;
  if (scorePercent >= 70) return labels.worthTrying;
  if (scorePercent >= 60) return labels.monitorProgress;
  return labels.exploreCarefully;
}

export function scoreTier(scorePercent) {
  if (!Number.isFinite(scorePercent)) return 'loading';
  if (scorePercent >= 90) return 'tier90';
  if (scorePercent >= 80) return 'tier80';
  if (scorePercent >= 70) return 'tier70';
  if (scorePercent >= 60) return 'tier60';
  return 'tierBelow';
}

export const SCORE_TIERS = [
  { key: 'tier90', min: 90, color: '#22c55e', order: 0 },
  { key: 'tier80', min: 80, color: '#84cc16', order: 1 },
  { key: 'tier70', min: 70, color: '#eab308', order: 2 },
  { key: 'tier60', min: 60, color: '#f97316', order: 3 },
  { key: 'tierBelow', min: 0, color: '#ef4444', order: 4 },
];

function formatStatusFallback(status, lang = 'en') {
  const normalized = String(status || '').trim();
  if (!normalized) return ui(lang).unknown;
  const words = normalized
    .replace(/[_-]+/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

  if (lang === 'zh') return normalized;

  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function statusLabel(status, lang = 'en') {
  return ui(lang).statuses[status] || formatStatusFallback(status, lang);
}
