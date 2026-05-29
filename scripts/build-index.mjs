import { buildLandscapeIndex, writeJson } from './lib.mjs';

const index = buildLandscapeIndex();
writeJson('public/data/index.json', index);
console.log(`Built public/data/index.json with ${index.projectCount} projects.`);
