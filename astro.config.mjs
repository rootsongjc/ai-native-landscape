import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const LEGACY_CATEGORIES = new Set([
  'agents_orchestration', 'applications_products', 'data_retrieval',
  'dev_tools_sdk', 'evaluation_monitoring', 'ai_gateways',
  'inference_serving', 'models_foundation', 'training_finetuning',
  'vibe_coding', 'ui_integration',
]);

export default defineConfig({
  site: 'https://landscape.jimmysong.io',
  output: 'static',
  integrations: [
    sitemap({
      filter(page) {
        // Exclude legacy category alias pages (301 redirected by middleware)
        const match = page.match(/\/categories\/([a-z_]+)\/$/);
        if (match && LEGACY_CATEGORIES.has(match[1])) return false;
        // Exclude 404 page
        if (page.endsWith('/404/')) return false;
        return true;
      },
    }),
  ],
});
