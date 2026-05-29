import fs from 'node:fs';
import path from 'node:path';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { listProjectFiles, loadProjectDocuments, loadTaxonomy, normalizeRepoSlug, resolveProjectTaxonomy } from './lib.mjs';

const root = process.cwd();
const schema = JSON.parse(fs.readFileSync(path.join(root, 'data/schema.project.json'), 'utf8'));
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
const validate = ajv.compile(schema);
const taxonomy = loadTaxonomy();
const categoryKeys = new Set(taxonomy.categories.map((category) => category.key));
const subCategoryKeys = new Set(
  taxonomy.categories.flatMap((category) => (category.subcategories || []).map((subCategory) => subCategory.key)),
);
const categoryCount = new Map();
const subCategoryCount = new Map();

for (const key of categoryKeys) categoryCount.set(key, 0);
for (const key of subCategoryKeys) subCategoryCount.set(key, 0);

for (const [legacyKey, mapped] of Object.entries(taxonomy.legacyAliases || {})) {
  if (categoryKeys.has(legacyKey)) {
    console.error(`legacy alias key conflicts with category key: ${legacyKey}`);
    process.exit(1);
  }
  for (const mappedCategory of mapped) {
    if (!categoryKeys.has(mappedCategory)) {
      console.error(`legacy alias ${legacyKey} points to unknown category: ${mappedCategory}`);
      process.exit(1);
    }
  }
}

const projectDir = path.join(root, 'data/projects');
const files = listProjectFiles();
const projects = loadProjectDocuments();
const slugs = new Set();
const repos = new Set();

for (const doc of projects) {
  const file = doc.slug;
  const ok = validate(doc);
  if (!ok) {
    console.error(file, validate.errors);
    process.exit(1);
  }
  if (slugs.has(doc.slug)) {
    console.error(`Duplicate slug: ${doc.slug}`);
    process.exit(1);
  }
  const resolved = resolveProjectTaxonomy(doc);
  if (!categoryKeys.has(resolved.category)) {
    console.error(`${file}: unknown category "${resolved.category}"`);
    process.exit(1);
  }
  if (!subCategoryKeys.has(resolved.subCategory)) {
    console.error(`${file}: unknown subCategory "${resolved.subCategory}"`);
    process.exit(1);
  }
  const parent = taxonomy.parentBySubCategory.get(resolved.subCategory);
  if (parent !== resolved.category) {
    console.error(`${file}: subCategory "${resolved.subCategory}" does not belong to category "${resolved.category}"`);
    process.exit(1);
  }
  if (!doc.description?.zh || !doc.description?.en) {
    console.error(`${file}: description.zh and description.en are required`);
    process.exit(1);
  }
  const repoSlug = normalizeRepoSlug(doc.repo);
  if (!repoSlug) {
    console.error(`${file}: repo must be a valid GitHub repository URL`);
    process.exit(1);
  }
  if (repos.has(repoSlug)) {
    console.error(`Duplicate repository: ${repoSlug}`);
    process.exit(1);
  }
  slugs.add(doc.slug);
  repos.add(repoSlug);
  categoryCount.set(resolved.category, (categoryCount.get(resolved.category) || 0) + 1);
  subCategoryCount.set(resolved.subCategory, (subCategoryCount.get(resolved.subCategory) || 0) + 1);
}

const projectTotal = projects.length;
for (const [categoryKey, count] of categoryCount.entries()) {
  const ratio = projectTotal === 0 ? 0 : count / projectTotal;
  if (ratio > 0.35) {
    console.warn(`[warn] category concentration high: ${categoryKey} has ${count}/${projectTotal} projects (${(ratio * 100).toFixed(1)}%)`);
  }
}

for (const [subCategoryKey, count] of subCategoryCount.entries()) {
  if (count === 0) {
    console.warn(`[warn] subCategory has no projects: ${subCategoryKey}`);
  }
}

const categoriesByCount = [...categoryCount.entries()].sort((left, right) => right[1] - left[1]);
const subCategoriesByCount = [...subCategoryCount.entries()].sort((left, right) => right[1] - left[1]);

for (const [categoryKey, count] of categoriesByCount) {
  const ratio = projectTotal === 0 ? 0 : count / projectTotal;
  if (ratio >= 0.25) {
    console.warn(`[warn] category concentration severe: ${categoryKey} has ${count}/${projectTotal} projects (${(ratio * 100).toFixed(1)}%)`);
  }
}

for (const [subCategoryKey, count] of subCategoriesByCount) {
  const ratio = projectTotal === 0 ? 0 : count / projectTotal;
  if (ratio >= 0.12) {
    console.warn(`[warn] subCategory concentration high: ${subCategoryKey} has ${count}/${projectTotal} projects (${(ratio * 100).toFixed(1)}%)`);
  }
}

console.log('Category distribution:', JSON.stringify(categoriesByCount));
console.log('Top subCategory distribution:', JSON.stringify(subCategoriesByCount.slice(0, 20)));

console.log(`Validated ${projects.length} projects from ${files.length} files.`);
