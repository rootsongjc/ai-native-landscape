import { loadProjectDocuments, syncLocalizedProjectMarkdown } from './lib.mjs';

const projects = loadProjectDocuments();

let migrated = 0;

for (const project of projects) {
  syncLocalizedProjectMarkdown(project);
  migrated += 1;
}

console.log(`Project markdown migration complete.`);
console.log(`Migrated projects into localized markdown pairs: ${migrated}`);
