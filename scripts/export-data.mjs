import { loadProjects, writeJson, writeText } from './lib.mjs';

const projects = loadProjects();
writeJson('exports/projects.json', projects);
writeJson('public/exports/projects.json', projects);

const headers = [
  'name',
  'slug',
  'category',
  'subCategory',
  'categoryNameZh',
  'categoryNameEn',
  'subCategoryNameZh',
  'subCategoryNameEn',
  'license',
  'homepage',
  'repo',
  'status',
  'totalScore',
  'scorePercent',
];
const rows = [headers.join(',')].concat(
  projects.map((project) => headers.map((header) => `"${String(project[header] ?? '').replaceAll('"', '""')}"`).join(',')),
);

writeText('exports/projects.csv', `${rows.join('\n')}\n`);
writeText('public/exports/projects.csv', `${rows.join('\n')}\n`);
console.log('Exported JSON and CSV.');
