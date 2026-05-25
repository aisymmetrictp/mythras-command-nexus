// One-time TOC verifier for all CRK blog posts.
// Mirrors the slugify() in src/components/blog/BlogMarkdown.tsx so the
// auto-generated heading IDs match what react-markdown actually emits.
//
// Reports per post:
//   - {#anchor-id} markers in content (react-markdown does NOT parse these;
//     they render as literal text and pollute the auto-id)
//   - TOC entries with no matching heading
//   - H2 headings in content with no TOC entry
//
// Run: node scripts/verify-blog-toc.js
const fs = require('fs');
const path = require('path');

const BLOG_ROOT = path.join(__dirname, '..', 'src', 'data', 'blog');
// Scan every game folder's posts/ subdirectory.
const POSTS_DIRS = fs.readdirSync(BLOG_ROOT, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => path.join(BLOG_ROOT, d.name, 'posts'))
  .filter(p => fs.existsSync(p));

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function stripAnchorMarker(text) {
  return text.replace(/\s*\{#[^}]+\}\s*/g, '').trim();
}

function extractToc(fileContent) {
  const tocMatch = fileContent.match(/toc:\s*\[([\s\S]*?)\],\s*\n\s*content:/);
  if (!tocMatch) return [];
  const tocBlock = tocMatch[1];
  const entries = [];
  // Allow escaped quotes (\\', \\") inside label.
  const entryRegex = /\{\s*id:\s*['"]([^'"]+)['"]\s*,\s*label:\s*['"]((?:\\['"]|[^'"])+)['"]\s*,\s*level:\s*(\d+)\s*\}/g;
  let m;
  while ((m = entryRegex.exec(tocBlock)) !== null) {
    entries.push({ id: m[1], label: m[2], level: parseInt(m[3], 10) });
  }
  return entries;
}

function extractHeadings(fileContent) {
  const contentMatch = fileContent.match(/content:\s*`([\s\S]*?)`,\s*\n\s*faq:/);
  if (!contentMatch) return { headings: [], anchorMarkerCount: 0 };
  const content = contentMatch[1];
  const lines = content.split('\n');
  const headings = [];
  let anchorMarkerCount = 0;
  let inCodeBlock = false;
  for (const line of lines) {
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;
    const m = line.match(/^(#{2,3})\s+(.+?)\s*$/);
    if (!m) continue;
    const level = m[1].length;
    const rawText = m[2];
    if (/\{#[^}]+\}/.test(rawText)) anchorMarkerCount++;
    const cleanText = stripAnchorMarker(rawText);
    headings.push({
      level,
      raw: rawText,
      text: cleanText,
      // Two slug variants: what react-markdown would currently emit
      // (with the {#anchor} marker baked into the text) vs what it would
      // emit if the marker were stripped (the desired state).
      currentAutoId: slugify(rawText),
      cleanAutoId: slugify(cleanText),
    });
  }
  return { headings, anchorMarkerCount };
}

function verifyPost(filePath) {
  const fileName = path.basename(filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  const toc = extractToc(content);
  const { headings, anchorMarkerCount } = extractHeadings(content);

  const issues = [];

  if (anchorMarkerCount > 0) {
    issues.push(`HAS ${anchorMarkerCount} {#anchor-id} marker(s) in headings — these render as literal text and break the auto-generated id. Strip them.`);
  }

  // Each TOC entry should match some heading's cleanAutoId (the desired state).
  // Exception: `faq` is provided by the BlogFAQ component (id="faq"), not the markdown.
  const COMPONENT_PROVIDED_IDS = new Set(['faq']);
  const headingCleanIds = new Set(headings.map(h => h.cleanAutoId));
  for (const entry of toc) {
    if (COMPONENT_PROVIDED_IDS.has(entry.id)) continue;
    if (!headingCleanIds.has(entry.id)) {
      const candidates = headings.map(h => h.cleanAutoId);
      issues.push(`TOC id="${entry.id}" (label="${entry.label}") has NO matching heading after strip. Available heading ids: [${candidates.join(', ')}]`);
    }
  }

  // Every H2 heading should be in the TOC.
  const tocIds = new Set(toc.map(e => e.id));
  for (const h of headings) {
    if (h.level === 2 && !tocIds.has(h.cleanAutoId)) {
      issues.push(`H2 "${h.text}" (cleanAutoId="${h.cleanAutoId}") is NOT in TOC`);
    }
  }

  return { fileName, tocCount: toc.length, headingCount: headings.length, anchorMarkerCount, issues };
}

let totalIssues = 0;
let totalAnchorMarkers = 0;
const summary = [];
for (const postsDir of POSTS_DIRS) {
  const game = path.basename(path.dirname(postsDir));
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.ts')).sort();
  console.log(`\n### Game: ${game} (${files.length} posts) ###`);
  for (const file of files) {
    const result = verifyPost(path.join(postsDir, file));
    console.log(`\n=== ${game}/${result.fileName} ===`);
    console.log(`  TOC entries: ${result.tocCount} | Headings (H2/H3): ${result.headingCount} | Anchor-markers: ${result.anchorMarkerCount}`);
    if (result.issues.length === 0) {
      console.log('  PASS — all TOC entries match headings, no anchor-marker leaks.');
    } else {
      totalIssues += result.issues.length;
      for (const issue of result.issues) {
        console.log(`  ISSUE: ${issue}`);
      }
    }
    totalAnchorMarkers += result.anchorMarkerCount;
    summary.push(result);
  }
}
console.log(`\n========`);
console.log(`Total issues: ${totalIssues}`);
console.log(`Total anchor-marker leaks: ${totalAnchorMarkers}`);
console.log(`Posts checked: ${summary.length}`);
