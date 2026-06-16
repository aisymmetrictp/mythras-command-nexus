/**
 * Ensure public/sitemap.xml contains every blog post + game hub that is NOT
 * currently hidden (HIDDEN_GAME_SLUGS). Preserves all existing non-blog URLs.
 * Adds any missing /blog/<game> hub and /blog/<game>/<slug> post URL; never
 * removes existing entries. Keeps the file well-formed (single </urlset>).
 *
 * Run from mythras-command-nexus/:  node scripts/seo/sync-sitemap.js [--lastmod=YYYY-MM-DD]
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const BLOG = path.join(ROOT, 'src', 'data', 'blog');
const SITEMAP = path.join(ROOT, 'public', 'sitemap.xml');
const BASE = 'https://gamertagmythras.com';

// Keep in sync with HIDDEN_GAME_SLUGS in src/data/blog/games.ts.
const HIDDEN = new Set([]);
const GAMES = ['cookie-run-kingdom', 'cookie-run-braverse-tcg', 'magic-the-gathering', 'minecraft', 'roblox', 'fortnite', 'pubg-battlegrounds'];

const lastmodArg = (process.argv.find(a => a.startsWith('--lastmod=')) || '').split('=')[1];
const LASTMOD = lastmodArg || new Date().toISOString().slice(0, 10);

let xml = fs.readFileSync(SITEMAP, 'utf8').replace(/\s*<\/urlset>\s*$/, '').trimEnd();
const have = new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim()));

const toAdd = [];
for (const g of GAMES) {
  if (HIDDEN.has(g)) continue;
  const hub = `${BASE}/blog/${g}`;
  if (!have.has(hub)) toAdd.push(hub);
  const dir = path.join(BLOG, g, 'posts');
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.ts'))) {
    const head = fs.readFileSync(path.join(dir, f), 'utf8').split(/\n\s*content:/)[0];
    const m = head.match(/\n\s*slug:\s*['"`]([^'"`]+)['"`]/);
    if (!m) continue;
    const url = `${BASE}/blog/${g}/${m[1]}`;
    if (!have.has(url)) toAdd.push(url);
  }
}

const blocks = toAdd.map(u =>
  `  <url>\n    <loc>${u}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`
).join('\n');
xml = xml + (blocks ? '\n' + blocks : '') + '\n</urlset>\n';
fs.writeFileSync(SITEMAP, xml, 'utf8');
console.log(`Added ${toAdd.length} URLs → total <url>: ${(xml.match(/<url>/g) || []).length} | </urlset>: ${(xml.match(/<\/urlset>/g) || []).length}`);
