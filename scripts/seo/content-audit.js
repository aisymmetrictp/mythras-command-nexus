/**
 * Content audit — two jobs in one pass over the typed BlogPost files:
 *
 *   1. COVERED-TOPICS INVENTORY  → so future batches go straight to net-new
 *      ideas instead of discovering collisions agent-side. Writes a per-game
 *      list (title · slug · topicCluster · primaryKeyword · lastUpdated) to
 *      scripts/seo/content-inventory.md (human) and .json (for writer agents).
 *
 *   2. REFRESH QUEUE  → flags posts whose freshness window has lapsed, so the
 *      "Last updated" date and the meta actually get revisited:
 *        - SOON  : 6–12 months since lastUpdated (refresh offer window)
 *        - STALE : > 12 months since lastUpdated (refresh now)
 *      Posts marked evergreen are still listed but tagged so you can deprioritize.
 *
 * Source of truth = src/data/blog/<game>/posts/*.ts headers (everything before
 * `content:`), parsed the same way generate-llms.js does.
 *
 * Run from mythras-command-nexus/:
 *   node scripts/seo/content-audit.js [--today=YYYY-MM-DD]
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const BLOG = path.join(ROOT, 'src', 'data', 'blog');
const OUT_MD = path.join(__dirname, 'content-inventory.md');
const OUT_JSON = path.join(__dirname, 'content-inventory.json');

const { getGames } = require('../lib/site-games');
const GAMES = getGames(); // [{ slug, name }] — always in sync with src/data/blog/games.ts

const todayArg = (process.argv.find(a => a.startsWith('--today=')) || '').split('=')[1];
const TODAY = todayArg ? new Date(todayArg + 'T00:00:00Z') : new Date();
const DAY = 86400000;
const SOON_DAYS = 182;   // ~6 months
const STALE_DAYS = 365;  // 12 months

// Extract a JS string-literal field from a file header (honors \-escapes + any quote style).
function extractString(src, field) {
  const re = new RegExp('(^|\\n)\\s*' + field + '\\s*:\\s*');
  const m = re.exec(src);
  if (!m) return null;
  let i = m.index + m[0].length;
  const q = src[i];
  if (q !== "'" && q !== '"' && q !== '`') return null;
  i++;
  let out = '';
  while (i < src.length) {
    const c = src[i];
    if (c === '\\') { out += src[i + 1]; i += 2; continue; }
    if (c === q) break;
    out += c;
    i++;
  }
  return out.replace(/\s+/g, ' ').trim();
}

function readPosts(gameSlug) {
  const dir = path.join(BLOG, gameSlug, 'posts');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.ts'))
    .map(f => {
      const head = fs.readFileSync(path.join(dir, f), 'utf8').split(/\n\s*content:/)[0];
      const date = extractString(head, 'lastUpdated') || extractString(head, 'publishDate') || '';
      const ageDays = date ? Math.floor((TODAY - new Date(date)) / DAY) : null;
      return {
        slug: extractString(head, 'slug'),
        title: extractString(head, 'title'),
        topicCluster: extractString(head, 'topicCluster') || '',
        primaryKeyword: extractString(head, 'primaryKeyword') || '',
        category: extractString(head, 'category') || '',
        publishDate: (extractString(head, 'publishDate') || '').slice(0, 10),
        lastUpdated: (extractString(head, 'lastUpdated') || '').slice(0, 10),
        updateFrequency: extractString(head, 'updateFrequency') || '',
        evergreen: /\n\s*evergreen:\s*true/.test(head),
        ageDays,
        bucket: ageDays == null ? 'unknown' : ageDays > STALE_DAYS ? 'STALE' : ageDays >= SOON_DAYS ? 'SOON' : 'FRESH',
      };
    })
    .filter(p => p.slug && p.title)
    .sort((a, b) => (a.title || '').localeCompare(b.title || ''));
}

const byGame = GAMES.map(g => ({ ...g, posts: readPosts(g.slug) }));
const total = byGame.reduce((n, g) => n + g.posts.length, 0);
const all = byGame.flatMap(g => g.posts.map(p => ({ game: g.slug, ...p })));
const refreshQueue = all.filter(p => p.bucket === 'SOON' || p.bucket === 'STALE')
  .sort((a, b) => (b.ageDays || 0) - (a.ageDays || 0));

// ---------- content-inventory.md ----------
let md = `# Content Inventory & Refresh Queue\n\n`;
md += `_Generated ${TODAY.toISOString().slice(0, 10)} · ${total} posts across ${byGame.length} games._\n\n`;
md += `Freshness windows (by \`lastUpdated\`, fallback \`publishDate\`): **FRESH** <${SOON_DAYS}d · **SOON** ${SOON_DAYS}–${STALE_DAYS}d (refresh-offer window) · **STALE** >${STALE_DAYS}d.\n\n`;

md += `## Refresh queue (${refreshQueue.length})\n\n`;
if (!refreshQueue.length) {
  md += `Nothing past the 6-month mark yet — the whole library is FRESH.\n\n`;
} else {
  md += `| Age (days) | Bucket | Evergreen | Game | Post | Cadence |\n|---:|---|---|---|---|---|\n`;
  for (const p of refreshQueue) {
    md += `| ${p.ageDays} | ${p.bucket} | ${p.evergreen ? 'yes' : 'no'} | ${p.game} | [${p.title}](https://gamertagmythras.com/blog/${p.game}/${p.slug}) | ${p.updateFrequency} |\n`;
  }
  md += `\n`;
}

md += `## Covered topics by game\n\n`;
for (const g of byGame) {
  md += `### ${g.name} (${g.posts.length})\n\n`;
  for (const p of g.posts) {
    md += `- **${p.title}** — \`${p.slug}\` · cluster: ${p.topicCluster || '—'} · kw: ${p.primaryKeyword || '—'} · upd ${p.lastUpdated || '?'} (${p.bucket})\n`;
  }
  md += `\n`;
}
fs.writeFileSync(OUT_MD, md, 'utf8');

// ---------- content-inventory.json (for writer agents to dedupe against) ----------
fs.writeFileSync(OUT_JSON, JSON.stringify({
  generated: TODAY.toISOString().slice(0, 10),
  total,
  byGame: Object.fromEntries(byGame.map(g => [g.slug, g.posts.map(p => ({
    slug: p.slug, title: p.title, topicCluster: p.topicCluster, primaryKeyword: p.primaryKeyword, bucket: p.bucket, lastUpdated: p.lastUpdated,
  }))])),
  refreshQueue: refreshQueue.map(p => ({ game: p.game, slug: p.slug, title: p.title, ageDays: p.ageDays, bucket: p.bucket, evergreen: p.evergreen })),
}, null, 1), 'utf8');

// ---------- console summary ----------
console.log(`Content audit — ${total} posts · today ${TODAY.toISOString().slice(0, 10)}`);
for (const g of byGame) {
  const f = g.posts.filter(p => p.bucket === 'FRESH').length;
  const s = g.posts.filter(p => p.bucket === 'SOON').length;
  const st = g.posts.filter(p => p.bucket === 'STALE').length;
  console.log(`  ${g.name.padEnd(22)} ${String(g.posts.length).padStart(3)} posts  | FRESH ${f}  SOON ${s}  STALE ${st}`);
}
console.log(`Refresh queue (SOON+STALE): ${refreshQueue.length}`);
console.log(`Wrote ${path.relative(ROOT, OUT_MD)} and ${path.relative(ROOT, OUT_JSON)}`);
