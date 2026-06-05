import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const LEGACY_CATEGORIES = new Set([
  'agents_orchestration', 'applications_products', 'data_retrieval',
  'dev_tools_sdk', 'evaluation_monitoring', 'ai_gateways',
  'inference_serving', 'models_foundation', 'training_finetuning',
  'vibe_coding', 'ui_integration',
]);

/**
 * Assign changefreq and priority based on page type.
 * - Homepage & category pages change frequently → weekly, priority 0.8
 * - Project detail pages change less → monthly, priority 0.6
 * - Static pages (about, methodology) → monthly, priority 0.5
 * - Tomb/archive pages → yearly, priority 0.3
 */
function sitemapPriority(pathname) {
  // Homepage
  if (pathname === '/' || pathname.match(/^\/(en|zh)\/?$/)) {
    return { changefreq: 'weekly', priority: 1.0 };
  }
  // Category pages
  if (pathname.includes('/categories/')) {
    return { changefreq: 'weekly', priority: 0.8 };
  }
  // Project pages
  if (pathname.includes('/projects/')) {
    return { changefreq: 'monthly', priority: 0.6 };
  }
  // Tomb pages
  if (pathname.includes('/tomb')) {
    return { changefreq: 'yearly', priority: 0.3 };
  }
  // Submit page
  if (pathname.includes('/submit')) {
    return { changefreq: 'monthly', priority: 0.4 };
  }
  // Static pages (about, methodology)
  return { changefreq: 'monthly', priority: 0.5 };
}

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
      serialize(item) {
        const url = new URL(item.url);
        const { changefreq, priority } = sitemapPriority(url.pathname);
        return {
          ...item,
          changefreq,
          priority,
          lastmod: new Date(),
        };
      },
    }),
  ],
});
