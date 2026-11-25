// Project levels. A level is computed from public signals only: nobody assigns it by hand.
//
// Health is what a level measures. The overall health score carries the most weight; the
// other dimensions check that the score rests on a real contributor base, ongoing work and
// some history. Star count, foundation membership and vendor neutrality play no part.
//
// A tier applies when all of its conditions hold, and the first matching tier wins. The
// methodology page renders these same numbers, so the published standard and the
// computation cannot drift.
export const DIMENSIONS = [
  {
    key: 'health',
    tiers: [
      { points: 4, minHealth: 85 },
      { points: 3, minHealth: 80 },
      { points: 2, minHealth: 70 },
      { points: 1, minHealth: 60 },
    ],
  },
  {
    key: 'contributors',
    tiers: [
      { points: 2, minContributors: 150 },
      { points: 1, minContributors: 30 },
    ],
  },
  {
    key: 'activity',
    tiers: [
      { points: 2, minCommitsLastYear: 300, maxInactiveDays: 30 },
      { points: 1, minCommitsLastYear: 50, maxInactiveDays: 90 },
    ],
  },
  {
    key: 'trackRecord',
    tiers: [
      { points: 2, minAgeDays: 730 },
      { points: 1, minAgeDays: 365 },
    ],
  },
];

export const MAX_POINTS = DIMENSIONS.reduce((sum, { tiers }) => sum + tiers[0].points, 0);

// A level needs `minPoints` in total and the listed minimum in each `required` dimension.
// Mature means full marks on every dimension.
export const LEVELS = [
  { key: 'mature', minPoints: MAX_POINTS, required: {} },
  { key: 'growing', minPoints: 5, required: { health: 2, activity: 1 } },
  { key: 'emerging', minPoints: 0, required: {} },
];

const CONDITIONS = {
  minHealth: (signals, value) => signals.health >= value,
  minContributors: (signals, value) => signals.contributors >= value,
  minCommitsLastYear: (signals, value) => signals.commitsLastYear >= value,
  maxInactiveDays: (signals, value) => signals.daysSinceLastCommit <= value,
  minAgeDays: (signals, value) => signals.ageDays >= value,
};

const SIGNAL_KEYS = ['health', 'contributors', 'commitsLastYear', 'daysSinceLastCommit', 'ageDays'];
const dayMs = 86400000;

// Reduces a score API entry to the signals the levels depend on. Returns null when any
// of them is missing, so an incomplete collection never promotes or demotes a project.
export function toSignals(entry) {
  const metrics = entry?.metrics || {};
  const signals = {
    health: entry?.scores?.health,
    contributors: metrics.contributors,
    commitsLastYear: metrics.commitsLastYear,
    daysSinceLastCommit: metrics.daysSinceLastCommit,
    ageDays: Math.floor((Date.parse(entry?.analyzedAt) - Date.parse(metrics.createdAt)) / dayMs),
  };
  return SIGNAL_KEYS.every((key) => Number.isFinite(signals[key])) ? signals : null;
}

// `signals` is the project's entry in data/signals.json, or null before the first sync.
export function evaluateLevel(signals) {
  const points = Object.fromEntries(DIMENSIONS.map(({ key, tiers }) => {
    const tier = signals && tiers.find(({ points: _points, ...conditions }) => (
      Object.entries(conditions).every(([name, value]) => CONDITIONS[name](signals, value))
    ));
    return [key, tier ? tier.points : 0];
  }));
  const total = Object.values(points).reduce((sum, value) => sum + value, 0);
  const level = LEVELS.find(({ minPoints, required }) => (
    total >= minPoints && Object.entries(required).every(([key, minimum]) => points[key] >= minimum)
  ));
  return { level: level.key, points, total };
}

export function levelRank(level) {
  const index = LEVELS.findIndex(({ key }) => key === level);
  return index === -1 ? 0 : LEVELS.length - 1 - index;
}

// Catalog order: level, then level points, then health score, then name.
export function compareProjects(a, b) {
  return levelRank(b.level) - levelRank(a.level)
    || (b.levelTotal ?? 0) - (a.levelTotal ?? 0)
    || (b.signals?.health ?? -1) - (a.signals?.health ?? -1)
    || a.name.localeCompare(b.name);
}

const CONDITION_TEXT = {
  minHealth: { zh: (value) => `综合健康度 ≥ ${value}`, en: (value) => `Overall health score ≥ ${value}` },
  minContributors: { zh: (value) => `贡献者 ≥ ${value} 人`, en: (value) => `≥ ${value} contributors` },
  minCommitsLastYear: { zh: (value) => `最近一年提交 ≥ ${value} 次`, en: (value) => `≥ ${value} commits in the last year` },
  maxInactiveDays: { zh: (value) => `最近 ${value} 天内有提交`, en: (value) => `a commit in the last ${value} days` },
  minAgeDays: { zh: (value) => `仓库创建已满 ${value} 天`, en: (value) => `repository created ≥ ${value} days ago` },
};

// The wording of one tier, e.g. "≥ 300 commits in the last year, and a commit in the last 30 days".
export function tierText(dimensionKey, points, lang = 'en') {
  const tier = DIMENSIONS.find(({ key }) => key === dimensionKey)?.tiers.find((entry) => entry.points === points);
  if (!tier) return '';
  const locale = lang === 'zh' ? 'zh' : 'en';
  const { points: _points, ...conditions } = tier;
  return Object.entries(conditions)
    .map(([name, value]) => CONDITION_TEXT[name][locale](value))
    .join(locale === 'zh' ? '，且' : ', and ');
}
