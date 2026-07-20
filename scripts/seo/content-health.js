/**
 * CONTENT-HEALTH AUDIT — score every blog post on the quality signals that drive
 * Google's "low value / scaled content" judgment, so we can fix/merge/enrich/noindex
 * the weakest posts (Phase 0 of the post-AdSense-rejection plan).
 *
 * Per post it measures:
 *   - body word count (markdown stripped)
 *   - inline images (![...]) + whether a hero image is set
 *   - in-body internal links (](/blog/...) — interlinking strength
 *   - FAQ count, TL;DR present, itemList present
 *   - hasVideo: an embedded first-hand channel video (src/data/blog/videoMap.ts) — the
 *     strongest E-E-A-T signal; most posts lack one (flywheel targets).
 *
 * A "thinness score" sums quality misses; higher = weaker. Emits:
 *   scripts/seo/content-health.md   (human report: weakest posts + per-game + video coverage)
 *   scripts/seo/content-health.json (machine: every post's metrics, for batch follow-up)
 *
 * Run from mythras-command-nexus/:  node scripts/seo/content-health.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const BLOG = path.join(ROOT, 'src', 'data', 'blog');
const { getGameSlugs } = require('../lib/site-games');
const GAMES = getGameSlugs(); // always in sync with src/data/blog/games.ts

// Quality thresholds (tunable).
const T = { thinWords: 1200, veryThinWords: 900, minInlineImg: 2, minInternal: 3, minFaq: 3 };

// --- which posts embed a first-hand video? (videoMap.ts keys) ---
const videoMapSrc = fs.readFileSync(path.join(BLOG, 'videoMap.ts'), 'utf8');
const VIDEO_SLUGS = new Set([...videoMapSrc.matchAll(/"([a-z0-9-]+)":\s*\{/g)].map(m => m[1]));

function extractString(src, field) {
  const re = new RegExp('(^|\\n)\\s*' + field + '\\s*:\\s*');
  const m = re.exec(src); if (!m) return null;
  let i = m.index + m[0].length; const q = src[i];
  if (q !== "'" && q !== '"' && q !== '`') return null;
  i++; let out = '';
  while (i < src.length) { const c = src[i]; if (c === '\\') { out += src[i + 1]; i += 2; continue; } if (c === q) break; out += c; i++; }
  return out.trim();
}
function extractContent(src) {
  const m = /\n\s*content:\s*`/.exec(src); if (!m) return '';
  let i = m.index + m[0].length, out = '';
  while (i < src.length) { const c = src[i]; if (c === '\\') { out += src[i + 1]; i += 2; continue; } if (c === '`') break; out += c; i++; }
  return out;
}
function wordCount(md) {
  const t = md.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[#>*_~|]/g, ' ').replace(/`+/g, ' ').replace(/\s+/g, ' ').trim();
  return t ? t.split(' ').length : 0;
}

const DAY = 86400000, today = new Date();
const posts = [];
for (const game of GAMES) {
  const dir = path.join(BLOG, game, 'posts');
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.ts'))) {
    const src = fs.readFileSync(path.join(dir, f), 'utf8');
    const slug = extractString(src.split(/\n\s*content:/)[0], 'slug');
    if (!slug) continue;
    const content = extractContent(src);
    const words = wordCount(content);
    const inlineImg = (content.match(/!\[/g) || []).length;
    const internal = (content.match(/\]\(\/blog\//g) || []).length;
    const faq = (src.match(/\n\s*question:/g) || []).length;
    const hasHero = /\n\s*heroImage:\s*['"`]/.test(src);
    const hasTldr = /\n\s*tldr:\s*['"`]/.test(src);
    const hasItemList = /\n\s*itemList:\s*\{/.test(src);
    const hasVideo = VIDEO_SLUGS.has(slug);
    const date = extractString(src.split(/\n\s*content:/)[0], 'lastUpdated') || extractString(src.split(/\n\s*content:/)[0], 'publishDate') || '';
    const ageDays = date ? Math.floor((today - new Date(date)) / DAY) : null;

    let score = 0; const flags = [];
    if (words < T.veryThinWords) { score += 3; flags.push('very-thin-body'); }
    else if (words < T.thinWords) { score += 2; flags.push('thin-body'); }
    if (inlineImg < T.minInlineImg) { score += 1; flags.push('few-images'); }
    if (internal < T.minInternal) { score += 1; flags.push('few-internal-links'); }
    if (faq < T.minFaq) { score += 1; flags.push('few-faq'); }
    if (!hasHero) { score += 1; flags.push('no-hero'); }
    if (!hasVideo) { score += 1; flags.push('no-video'); }

    posts.push({ game, slug, words, inlineImg, hasHero, internal, faq, hasTldr, hasItemList, hasVideo, ageDays, score, flags });
  }
}

posts.sort((a, b) => b.score - a.score || a.words - b.words);
const total = posts.length;
const withVideo = posts.filter(p => p.hasVideo).length;
const thin = posts.filter(p => p.flags.includes('thin-body') || p.flags.includes('very-thin-body'));

// ---------- report ----------
let md = `# Content-Health Audit\n\n_Generated ${today.toISOString().slice(0, 10)} · ${total} posts_\n\n`;
md += `**Original video embeds: ${withVideo}/${total} (${(withVideo / total * 100).toFixed(0)}%)** — the rest are flywheel targets.\n`;
md += `**Thin bodies (<${T.thinWords} words): ${thin.length}** · **Posts with no hero image: ${posts.filter(p => !p.hasHero).length}**\n\n`;

md += `## Per-game health\n\n| Game | Posts | Avg words | Thin | No video | Median internal links |\n|---|--:|--:|--:|--:|--:|\n`;
for (const g of GAMES) {
  const gp = posts.filter(p => p.game === g); if (!gp.length) continue;
  const avg = Math.round(gp.reduce((n, p) => n + p.words, 0) / gp.length);
  const med = gp.map(p => p.internal).sort((a, b) => a - b)[Math.floor(gp.length / 2)];
  md += `| ${g} | ${gp.length} | ${avg} | ${gp.filter(p => p.words < T.thinWords).length} | ${gp.filter(p => !p.hasVideo).length} | ${med} |\n`;
}

md += `\n## Weakest 30 posts (fix / enrich / merge / noindex candidates)\n\n| Score | Game | Slug | Words | Img | Int | FAQ | Vid | Flags |\n|--:|---|---|--:|--:|--:|--:|:-:|---|\n`;
for (const p of posts.slice(0, 30)) {
  md += `| ${p.score} | ${p.game} | ${p.slug} | ${p.words} | ${p.inlineImg} | ${p.internal} | ${p.faq} | ${p.hasVideo ? 'Y' : '—'} | ${p.flags.join(', ')} |\n`;
}
fs.writeFileSync(path.join(__dirname, 'content-health.md'), md, 'utf8');
fs.writeFileSync(path.join(__dirname, 'content-health.json'), JSON.stringify({ generated: today.toISOString().slice(0, 10), total, withVideo, thresholds: T, posts }, null, 1), 'utf8');

// ---------- console summary ----------
console.log(`Content-health audit — ${total} posts`);
console.log(`Original video embeds: ${withVideo}/${total} (${(withVideo / total * 100).toFixed(0)}%)`);
console.log(`Thin bodies (<${T.thinWords}w): ${thin.length} | no hero: ${posts.filter(p => !p.hasHero).length} | score>=4: ${posts.filter(p => p.score >= 4).length}`);
console.log('Per game (posts | avg words | thin | no-video):');
for (const g of GAMES) {
  const gp = posts.filter(p => p.game === g); if (!gp.length) continue;
  console.log(`  ${g.padEnd(24)} ${String(gp.length).padStart(3)} | ${String(Math.round(gp.reduce((n, p) => n + p.words, 0) / gp.length)).padStart(5)}w | thin ${gp.filter(p => p.words < T.thinWords).length} | no-vid ${gp.filter(p => !p.hasVideo).length}`);
}
console.log(`\nWeakest 12:`);
for (const p of posts.slice(0, 12)) console.log(`  [${p.score}] ${p.game}/${p.slug} — ${p.words}w, img ${p.inlineImg}, int ${p.internal}, faq ${p.faq} (${p.flags.join(',')})`);
console.log(`\nWrote scripts/seo/content-health.md + .json`);
