import { getRoot, loadProjectDocuments, resolveProjectTaxonomy, syncLocalizedProjectMarkdown } from './lib.mjs';

const root = getRoot();
const projects = loadProjectDocuments();

let changed = 0;
const reasonCount = new Map();

for (const project of projects) {
  const beforeCategory = project.category;
  const beforeSubCategory = project.subCategory;

  const resolved = resolveProjectTaxonomy({
    ...project,
    category: '',
    subCategory: '',
  });
  project.category = resolved.category;
  project.subCategory = resolved.subCategory;

  reasonCount.set(resolved.reason, (reasonCount.get(resolved.reason) || 0) + 1);

  if (beforeCategory !== project.category || beforeSubCategory !== project.subCategory) {
    syncLocalizedProjectMarkdown(project);
    changed += 1;
  }
}

console.log(`Migrated taxonomy for ${projects.length} projects.`);
console.log(`Updated files: ${changed}`);
console.log('Resolution reasons:', Object.fromEntries(reasonCount));
