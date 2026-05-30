const body = `# AI Native Landscape — Agent Authentication

## Overview

The AI Native Landscape at [landscape.jimmysong.io](https://landscape.jimmysong.io) is a public catalog of cloud native and AI native projects. All data endpoints are publicly accessible — no authentication is required.

## Public Data Endpoints

| Endpoint | Format | Description |
|----------|--------|-------------|
| \`/data/projects.json\` | JSON | Full project catalog with metadata |
| \`/data/index.json\` | JSON | Complete landscape index |
| \`/exports/projects.csv\` | CSV | Project catalog in CSV format |

## Well-Known Discovery

| Path | Description |
|------|-------------|
|\`/.well-known/api-catalog\` | API catalog (RFC 9727) |
| \`/.well-known/mcp/server-card.json\` | MCP Server Card |
| \`/.well-known/agent-skills/index.json\` | Agent Skills Discovery Index |

## Rate Limits

No rate limits are currently enforced. Please be respectful of resources — avoid making more than 10 requests per second.

## Contact

- **Issues**: [GitHub Issues](https://github.com/rootsongjc/ai-native-landscape/issues)
- **Maintainer**: Jimmy Song ([@rootsongjc](https://github.com/rootsongjc))
`;

export async function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
