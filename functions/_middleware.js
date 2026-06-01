// Cloudflare Pages Function — Markdown for Agents
// Intercepts requests with Accept: text/markdown, converts HTML to markdown
// Works on Free plan — no platform-level feature needed

const VOID_ELEMENTS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr',
]);

const BLOCK_ELEMENTS = new Set([
  'address', 'article', 'aside', 'blockquote', 'details', 'dialog', 'dd',
  'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'li',
  'main', 'nav', 'ol', 'p', 'pre', 'section', 'summary', 'table', 'ul',
]);

const SKIP_ELEMENTS = new Set([
  'script', 'style', 'noscript', 'iframe', 'svg', 'canvas', 'template',
  'head', 'button', 'input', 'select', 'textarea', 'form',
]);

function escapeHtml(text) {
  return text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}

function decodeHtmlEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCharCode(parseInt(code, 16)));
}

function stripTags(html) {
  return html.replace(/<[^>]*>/g, '');
}

function getAttr(tag, name) {
  const re = new RegExp(`${name}=["']([^"']*)["']`, 'i');
  const m = tag.match(re);
  return m ? m[1] : '';
}

function convertTable(html) {
  const rows = [];
  const rowRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  const cellRe = /<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi;

  let rowMatch;
  while ((rowMatch = rowRe.exec(html)) !== null) {
    const cells = [];
    let cellMatch;
    cellRe.lastIndex = 0;
    while ((cellMatch = cellRe.exec(rowMatch[1])) !== null) {
      cells.push(convertInline(cellMatch[1].trim()));
    }
    if (cells.length > 0) rows.push(cells);
  }

  if (rows.length === 0) return '';

  let md = '';
  const maxCols = Math.max(...rows.map(r => r.length));

  // Header row
  md += '| ' + rows[0].concat(Array(maxCols - rows[0].length).fill('')).join(' | ') + ' |\n';
  md += '| ' + rows[0].map(() => '---').join(' | ') + ' |\n';

  // Data rows
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].concat(Array(maxCols - rows[i].length).fill(''));
    md += '| ' + row.join(' | ') + ' |\n';
  }

  return md;
}

function convertInline(html) {
  let text = html;

  // Links
  text = text.replace(/<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, href, content) => {
    const label = convertInline(content).trim();
    return label ? `[${label}](${href})` : '';
  });

  // Images
  text = text.replace(/<img[^>]*alt=["']([^"']*)["'][^>]*src=["']([^"']*)["'][^>]*\/?>/gi, '![$1]($2)');
  text = text.replace(/<img[^>]*src=["']([^"']*)["'][^>]*alt=["']([^"']*)["'][^>]*\/?>/gi, '![$2]($1)');
  text = text.replace(/<img[^>]*src=["']([^"']*)["'][^>]*\/?>/gi, '![]($1)');

  // Bold
  text = text.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag, content) => {
    const t = convertInline(content);
    return t ? `**${t}**` : '';
  });

  // Italic
  text = text.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag, content) => {
    const t = convertInline(content);
    return t ? `*${t}*` : '';
  });

  // Inline code
  text = text.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_, content) => {
    const t = stripTags(content).trim();
    return t ? `\`${t}\`` : '';
  });

  // Line breaks
  text = text.replace(/<br\s*\/?>/gi, '\n');

  // Strip remaining tags
  text = stripTags(text);
  text = decodeHtmlEntities(text);

  return text;
}

function htmlToMarkdown(html) {
  // Extract metadata from <meta> and <title> tags
  const frontmatter = {};
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (titleMatch) {
    frontmatter.title = decodeHtmlEntities(stripTags(titleMatch[1]).trim());
  }
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)
    || html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  if (descMatch) {
    frontmatter.description = decodeHtmlEntities(descMatch[1]);
  }
  const ogImageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i)
    || html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*property=["']og:image["']/i);
  if (ogImageMatch) {
    frontmatter.image = ogImageMatch[1];
  }

  // Extract body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : html;

  // Remove nav, header, footer, sidebar elements (keep main content)
  let content = body.replace(/<(nav|header|footer)[^>]*>[\s\S]*?<\/\1>/gi, '');

  // Remove skip elements
  for (const tag of SKIP_ELEMENTS) {
    const re = new RegExp(`<${tag}[^>]*>[\\s\\S]*?<\\/${tag}>`, 'gi');
    content = content.replace(re, '');
  }

  // Process elements
  let md = '';

  // Headings
  for (let level = 1; level <= 6; level++) {
    const re = new RegExp(`<h${level}[^>]*>([\\s\\S]*?)<\\/h${level}>`, 'gi');
    content = content.replace(re, (_, inner) => {
      const text = convertInline(inner).trim();
      return text ? `\n\n${'#'.repeat(level)} ${text}\n\n` : '';
    });
  }

  // Tables
  content = content.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_, inner) => {
    return '\n\n' + convertTable(inner) + '\n\n';
  });

  // Lists
  content = content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, inner) => {
    const text = convertInline(inner).trim();
    return `\n- ${text}`;
  });
  content = content.replace(/<\/?[uo]l[^>]*>/gi, '\n');

  // Blockquotes
  content = content.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, inner) => {
    const text = convertInline(inner).trim();
    return text ? `\n\n> ${text.replace(/\n/g, '\n> ')}\n\n` : '';
  });

  // Pre/code blocks
  content = content.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, inner) => {
    return `\n\n\`\`\`\n${stripTags(inner).trim()}\n\`\`\`\n\n`;
  });
  content = content.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_, inner) => {
    return `\n\n\`\`\`\n${stripTags(inner).trim()}\n\`\`\`\n\n`;
  });

  // Paragraphs
  content = content.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, inner) => {
    const text = convertInline(inner).trim();
    return text ? `\n\n${text}\n\n` : '';
  });

  // Horizontal rules
  content = content.replace(/<hr\s*\/?>/gi, '\n\n---\n\n');

  // Convert remaining inline elements
  content = convertInline(content);

  // Clean up whitespace
  content = content
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]+$/gm, '')
    .trim();

  md = content;

  // Prepend frontmatter
  const fmKeys = Object.keys(frontmatter);
  if (fmKeys.length > 0) {
    const fm = fmKeys
      .filter(k => frontmatter[k])
      .map(k => `${k}: ${frontmatter[k]}`)
      .join('\n');
    md = `---\n${fm}\n---\n\n${md}`;
  }

  return md;
}

function estimateTokens(text) {
  // Rough estimate: ~4 chars per token for English, ~2 for CJK
  const cjk = (text.match(/[一-鿿぀-ゟ゠-ヿ]/g) || []).length;
  const rest = text.length - cjk;
  return Math.ceil(rest / 4 + cjk / 2);
}

function htmlToJson(html) {
  const data = {};

  // Title
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (titleMatch) {
    data.title = decodeHtmlEntities(stripTags(titleMatch[1]).trim());
  }

  // Meta description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)
    || html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  if (descMatch) {
    data.description = decodeHtmlEntities(descMatch[1]);
  }

  // OG image
  const ogImageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i)
    || html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*property=["']og:image["']/i);
  if (ogImageMatch) {
    data.image = ogImageMatch[1];
  }

  // Canonical URL
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  if (canonicalMatch) {
    data.url = canonicalMatch[1];
  }

  // Lang
  const langMatch = html.match(/<html[^>]*lang=["']([^"']*)["']/i);
  if (langMatch) {
    data.lang = langMatch[1];
  }

  // Extract main text content (strip all tags)
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : html;

  // Remove nav, header, footer, script, style
  let content = body.replace(/<(nav|header|footer|script|style|noscript|svg|canvas|template)[^>]*>[\s\S]*?<\/\1>/gi, '');
  content = stripTags(content).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
  content = content.replace(/\s+/g, ' ').trim();

  data.textContent = content;

  // Extract links
  const links = [];
  const linkRe = /<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let linkMatch;
  while ((linkMatch = linkRe.exec(body)) !== null) {
    const href = linkMatch[1];
    const text = stripTags(linkMatch[2]).trim();
    if (href && !href.startsWith('#') && !href.startsWith('javascript:') && text) {
      links.push({ href, text });
    }
  }
  if (links.length > 0) {
    data.links = links.slice(0, 100);
  }

  // Also generate markdown for convenience
  data.markdown = htmlToMarkdown(html);

  return data;
}

const WECHAT_UA_RE = /MicroMessenger|WeChat|WeChatBot/i;

export async function onRequest(context) {
  const accept = context.request.headers.get('accept') || '';
  const wantsMarkdown = accept.includes('text/markdown');
  const wantsJson = accept.includes('application/json');
  const ua = context.request.headers.get('user-agent') || '';
  const isWeChat = WECHAT_UA_RE.test(ua);

  // ── WeChat: rewrite og:image to square Chinese version ──
  if (isWeChat && !wantsMarkdown && !wantsJson) {
    const response = await context.next();
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('text/html')) return response;

    const html = await response.text();
    const rewritten = html
      .replace(
        /(<meta\s+property="og:image"\s+content=")[^"]*(")/i,
        '$1https://landscape.jimmysong.io/og.jpg$2',
      )
      .replace(
        /(<meta\s+property="og:image:width"\s+content=")[^"]*(")/i,
        '$1600$2',
      )
      .replace(
        /(<meta\s+property="og:image:height"\s+content=")[^"]*(")/i,
        '$1600$2',
      );

    return new Response(rewritten, {
      status: response.status,
      headers: response.headers,
    });
  }

  if (!wantsMarkdown && !wantsJson) {
    return context.next();
  }

  const response = await context.next();
  const contentType = response.headers.get('content-type') || '';

  if (!contentType.includes('text/html')) {
    return response;
  }

  const html = await response.text();

  if (wantsJson) {
    const data = htmlToJson(html);
    return new Response(JSON.stringify(data, null, 2), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  }

  // Markdown output
  const markdown = htmlToMarkdown(html);
  const tokens = estimateTokens(markdown);

  return new Response(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'X-Markdown-Tokens': String(tokens),
    },
  });
}
