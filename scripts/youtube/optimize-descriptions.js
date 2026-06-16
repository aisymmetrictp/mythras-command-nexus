/**
 * YouTube description optimizer (LOCAL TOOL — not part of the static site).
 *
 * For each recent upload on a channel:
 *   1. Download the caption transcript via the YouTube API (OAuth, owner).
 *   2. Ask an LLM for a concise, keyword-rich summary (search/AI-optimized).
 *   3. PREPEND that summary above the creator's existing description.
 *
 * Modes:
 *   - DRY RUN (default): writes OLD vs NEW proposals to a markdown file. No writes to YouTube.
 *   - --write --video=<id> --yes: push the new description for ONE video.
 *   - --write --all --yes: push for every fetched video (after reviewing the dry run).
 *
 * videos.update overwrites the whole snippet, so we re-send the existing
 * title / categoryId / tags / language and only change the description.
 * Idempotent: the summary is fenced by a divider, so re-running replaces it.
 *
 * .env (scripts/youtube/.env, gitignored): CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN,
 *   CHANNEL, ANTHROPIC_API_KEY, optional LLM_MODEL.
 *
 * Usage (from mythras-command-nexus/):
 *   node scripts/youtube/optimize-descriptions.js --limit=5
 *   node scripts/youtube/optimize-descriptions.js --write --video=<id> --yes
 *   node scripts/youtube/optimize-descriptions.js --write --all --yes
 */
const fs = require('fs');
const path = require('path');

const UPLOADS = {
  cookierun: 'UUGp83Usm4riRWlAYa9F2diQ',
  gamertag: 'UUZwCXcKKgjxNDSe9mY1_TWQ',
  'mythras-gaming': 'UU-tDHOeoDgUaXxIkQBFffAg',
  pokemon: 'UUwI4EHyFi-z8Nrxh4ckr47Q',
  lorcana: 'UUfvLejQsZnBEtQsn5h0SD3Q',
};

// Divider between the prepended summary and the creator's original description.
// Used to keep re-runs idempotent (we strip everything before it, then re-add).
const DIVIDER = '──────────';
// Start of the creator's standard footer (Subscribe/links/tags). Used to detect
// whether a video already has the modern footer, and as the slice point when
// lifting the canonical footer from the freshest video to upgrade older ones.
const FOOTER_MARKER = '📡 Subscribe';

function durSec(iso) {
  const m = (iso || '').match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return 0;
  return (+m[1] || 0) * 3600 + (+m[2] || 0) * 60 + (+m[3] || 0);
}

function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (!fs.existsSync(envPath)) { console.error('Missing scripts/youtube/.env'); process.exit(1); }
  const env = {};
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '').trim();
  }
  return env;
}

function arg(name, def) {
  const hit = process.argv.find(a => a === `--${name}` || a.startsWith(`--${name}=`));
  if (!hit) return def;
  const eq = hit.indexOf('=');
  return eq === -1 ? true : hit.slice(eq + 1);
}

async function getAccessToken(env) {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: env.CLIENT_ID, client_secret: env.CLIENT_SECRET, refresh_token: env.REFRESH_TOKEN, grant_type: 'refresh_token' }),
  });
  const j = await res.json();
  if (!j.access_token) throw new Error('Token refresh failed: ' + JSON.stringify(j));
  return j.access_token;
}

async function fetchVideos(token, slug, max) {
  const playlist = UPLOADS[slug];
  if (!playlist) throw new Error(`Unknown channel "${slug}". One of: ${Object.keys(UPLOADS).join(', ')}`);
  const auth = { headers: { Authorization: `Bearer ${token}` } };
  const ids = [];
  let pageToken = '';
  while (ids.length < max) {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&playlistId=${playlist}${pageToken ? `&pageToken=${pageToken}` : ''}`;
    const r = await fetch(url, auth);
    const data = await r.json();
    if (!r.ok && r.status === 403 && /quota/i.test(JSON.stringify(data))) throw new Error('QUOTA_EXCEEDED');
    if (!data.items) break;
    for (const it of data.items) ids.push(it.contentDetails.videoId);
    if (!data.nextPageToken) break;
    pageToken = data.nextPageToken;
  }
  const wanted = ids.slice(0, max);
  const videos = [];
  for (let i = 0; i < wanted.length; i += 50) {
    const batch = wanted.slice(i, i + 50).join(',');
    const r = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${batch}`, auth);
    const data = await r.json();
    if (!r.ok && r.status === 403 && /quota/i.test(JSON.stringify(data))) throw new Error('QUOTA_EXCEEDED');
    for (const it of data.items || []) videos.push({ id: it.id, snippet: it.snippet, durationSec: durSec(it.contentDetails && it.contentDetails.duration) });
  }
  return videos;
}

// Download the best English caption track and flatten it to plain text.
async function getTranscript(token, videoId) {
  const auth = { headers: { Authorization: `Bearer ${token}` } };
  const listRes = await fetch(`https://www.googleapis.com/youtube/v3/captions?part=snippet&videoId=${videoId}`, auth);
  const list = await listRes.json();
  if (!listRes.ok) {
    if (listRes.status === 403 && /quota/i.test(JSON.stringify(list))) throw new Error('QUOTA_EXCEEDED');
    return '';
  }
  if (!list.items || !list.items.length) return '';
  // Prefer a human/uploaded English track; fall back to ASR.
  const en = list.items.filter(t => (t.snippet?.language || '').startsWith('en'));
  const pick = en.find(t => t.snippet?.trackKind !== 'asr') || en[0] || list.items[0];
  const res = await fetch(`https://www.googleapis.com/youtube/v3/captions/${pick.id}?tfmt=srt`, auth);
  if (!res.ok) {
    const body = await res.text();
    if (res.status === 403 && /quota/i.test(body)) throw new Error('QUOTA_EXCEEDED');
    return '';
  }
  const srt = await res.text();
  // Strip indices + timestamps, dedupe rolling-caption repeats, join.
  const lines = srt.split(/\r?\n/)
    .filter(l => l.trim() && !/^\d+$/.test(l.trim()) && !l.includes('-->'));
  const out = [];
  for (const l of lines) { if (out[out.length - 1] !== l) out.push(l); }
  return out.join(' ').replace(/\s+/g, ' ').trim();
}

async function summarize(env, title, transcript) {
  const prompt = `You are writing the opening lines of a YouTube video description, optimized for YouTube search and AI answer engines (ChatGPT, Perplexity, Google AI Overviews).

Write 2-3 sentences (max ~400 characters) that state plainly what this video covers. Lead with the most important search terms — the game name, the specific cookies/cards/characters, and the topic or format. Be factual and natural. No hype, no emojis, no hashtags, no "In this video", no first person.

Video title: ${title}
Transcript:
${transcript.slice(0, 18000)}

Output ONLY the summary text, nothing else.`;
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({
      model: env.LLM_MODEL || 'claude-3-5-haiku-latest',
      max_tokens: 300,
      messages: [{ role: 'user', content: prompt }],
    }),
  });
  const j = await res.json();
  if (!res.ok || !j.content) throw new Error('LLM error: ' + JSON.stringify(j).slice(0, 400));
  return j.content.map(c => c.text || '').join('').trim();
}

async function buildDescription(token, env, video, canonicalFooter) {
  const current = video.snippet.description || '';
  const transcript = await getTranscript(token, video.id);
  // Strip any summary a prior run prepended (everything before our divider) for idempotency.
  let body = current.includes(DIVIDER) ? current.split(DIVIDER).slice(1).join(DIVIDER).trim() : current.trim();
  // Upgrade older videos that lack the modern footer by appending the canonical one.
  let footerAdded = false;
  if (canonicalFooter && !body.includes(FOOTER_MARKER)) {
    body = `${body}\n\n${canonicalFooter}`.trim();
    footerAdded = true;
  }
  let summary = null, next;
  if (transcript) {
    summary = await summarize(env, video.snippet.title, transcript);
    next = `${summary}\n\n${DIVIDER}\n\n${body}`.trim();
  } else {
    next = body; // no captions: at most the footer upgrade
  }
  // YouTube rejects descriptions containing angle brackets — strip them defensively.
  next = next.replace(/[<>]/g, '');
  const changed = next.trim() !== current.trim();
  const note = !transcript
    ? (footerAdded ? 'no captions (footer upgrade only)' : 'no captions — unchanged')
    : (footerAdded ? 'summary + footer upgrade' : 'summary prepended');
  return { summary, next, changed, footerAdded, note };
}

async function updateDescription(token, video, newDescription) {
  const s = video.snippet;
  const body = { id: video.id, snippet: { title: s.title, categoryId: s.categoryId, description: newDescription, ...(s.tags ? { tags: s.tags } : {}), ...(s.defaultLanguage ? { defaultLanguage: s.defaultLanguage } : {}) } };
  const res = await fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet', {
    method: 'PUT', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify(body),
  });
  const j = await res.json();
  if (!res.ok) throw new Error(`update failed for ${video.id}: ${JSON.stringify(j).slice(0, 300)}`);
  return j;
}

async function main() {
  const env = loadEnv();
  const slug = String(arg('channel', env.CHANNEL || 'cookierun'));
  const limit = parseInt(arg('limit', 5), 10);
  const doWrite = !!arg('write', false);
  const oneVideo = arg('video', null);
  const all = !!arg('all', false);
  const confirmed = !!arg('yes', false);

  const transcriptsOnly = !!arg('transcripts', false);
  if (!env.REFRESH_TOKEN) { console.error('REFRESH_TOKEN empty in .env — do the OAuth Playground step.'); process.exit(1); }
  if (!transcriptsOnly && !env.ANTHROPIC_API_KEY) { console.error('ANTHROPIC_API_KEY empty in .env — add an Anthropic key, or use --transcripts to dump transcripts only (no LLM).'); process.exit(1); }

  const minDur = parseInt(arg('min-duration', 0), 10);
  console.log(`Channel: ${slug} | mode: ${doWrite ? 'WRITE' : 'DRY RUN'}${minDur ? ` | min-duration ${minDur}s (skip Shorts)` : ''}`);
  const token = await getAccessToken(env);
  const pool = parseInt(arg('pool', (doWrite && oneVideo) ? 50 : (minDur > 0 ? 120 : limit)), 10);
  let videos = await fetchVideos(token, slug, pool);
  if (doWrite && oneVideo) {
    videos = videos.filter(v => v.id === oneVideo);
  } else {
    if (minDur > 0) videos = videos.filter(v => v.durationSec >= minDur);
    videos = videos.slice(0, limit);
  }
  if (!videos.length) { console.error(`No matching videos${minDur ? ` over ${minDur}s — the recent uploads may all be Shorts.` : '.'}`); process.exit(1); }

  if (transcriptsOnly) {
    const outDir = path.join(__dirname, 'proposals');
    fs.mkdirSync(outDir, { recursive: true });
    const outFile = path.join(outDir, `${slug}-transcripts-${new Date().toISOString().replace(/[:.]/g, '-')}.md`);
    let md = `# Transcripts — ${slug} (${videos.length} videos)\n`;
    for (const v of videos) {
      const t = await getTranscript(token, v.id);
      md += `\n---\n## ${v.snippet.title}\nID: ${v.id}\n\n${(t || '(no captions)').slice(0, 4000)}\n`;
      console.log(`* ${v.id}: ${t ? t.length + ' chars' : 'no captions'}`);
      await new Promise(r => setTimeout(r, 150));
    }
    fs.writeFileSync(outFile, md, 'utf8');
    console.log(`\nWrote transcripts to ${path.relative(process.cwd(), outFile)}`);
    return;
  }

  // Lift the canonical footer (Subscribe/links/tags) from the freshest video that has it,
  // so we can bring older videos up to the same format.
  let canonicalFooter = '';
  for (const v of videos) {
    const d = v.snippet.description || '';
    const idx = d.indexOf(FOOTER_MARKER);
    if (idx !== -1) { canonicalFooter = d.slice(idx).split(DIVIDER)[0].trim(); break; }
  }

  if (doWrite) {
    if (!oneVideo && !all) { console.error('Refusing to write. Pass --video=<id> or --all.'); process.exit(1); }
    if (!confirmed) { console.error('Add --yes to confirm a real write.'); process.exit(1); }
    // Back up original descriptions before touching anything (recovery net).
    const backupDir = path.join(__dirname, 'backups');
    fs.mkdirSync(backupDir, { recursive: true });
    const backupFile = path.join(backupDir, `${slug}-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);
    fs.writeFileSync(backupFile, JSON.stringify(videos.map(v => ({ id: v.id, title: v.snippet.title, description: v.snippet.description })), null, 1));
    console.log(`Backed up ${videos.length} original descriptions to ${path.relative(process.cwd(), backupFile)}`);
    let n = 0;
    for (const v of videos) {
      // Already optimized on a prior day (our divider is in the live description) → skip cheaply, no transcript pull. Lets daily batches progress.
      if ((v.snippet.description || '').includes(DIVIDER)) { console.log(`– skipped ${v.id} (already optimized)`); continue; }
      let built;
      try { built = await buildDescription(token, env, v, canonicalFooter); }
      catch (e) { if (e.message === 'QUOTA_EXCEEDED') { console.error('⚠ YouTube API quota exhausted — stopping. Resume after it resets (~midnight Pacific).'); break; } throw e; }
      const { next, changed, note } = built;
      if (!changed) { console.log(`– skipped ${v.id} (${note})`); continue; }
      try {
        await updateDescription(token, v, next);
      } catch (e) {
        console.error(`✗ skipped ${v.id} — update rejected: ${(e.message || e).slice(0, 160)}`);
        continue;
      }
      console.log(`✓ updated ${v.id} [${note}] — ${v.snippet.title}`);
      n++;
      await new Promise(r => setTimeout(r, 300));
    }
    console.log(`Done. Updated ${n} of ${videos.length}.`);
    return;
  }

  const outDir = path.join(__dirname, 'proposals');
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, `${slug}-${new Date().toISOString().replace(/[:.]/g, '-')}.md`);
  let md = `# Proposed descriptions — ${slug} (${videos.length} videos)\n\nDRY RUN. Summary prepended; older videos missing the footer also get the standard one.\n`;
  for (const v of videos) {
    if ((v.snippet.description || '').includes(DIVIDER)) { console.log(`* ${v.id}: already optimized — skip`); continue; }
    let built;
    try { built = await buildDescription(token, env, v, canonicalFooter); }
    catch (e) { if (e.message === 'QUOTA_EXCEEDED') { console.error('⚠ YouTube API quota exhausted — stopping early; writing the proposals gathered so far.'); break; } throw e; }
    const { summary, next, changed, note } = built;
    const yr = (v.snippet.publishedAt || '').slice(0, 4);
    md += `\n---\n\n## ${v.snippet.title}  _(${yr}, ${v.durationSec}s)_\nhttps://youtube.com/watch?v=${v.id}\n_${note}${changed ? '' : ' — no change'}_\n`;
    if (summary) md += `\n### NEW SUMMARY\n${summary}\n`;
    md += `\n### FULL PROPOSED\n\`\`\`\n${next.slice(0, 1600)}${next.length > 1600 ? '\n…(truncated)' : ''}\n\`\`\`\n`;
    console.log(`* ${v.id} (${yr}): ${note}`);
    await new Promise(r => setTimeout(r, 200));
  }
  fs.writeFileSync(outFile, md, 'utf8');
  console.log(`\nWrote proposals to ${path.relative(process.cwd(), outFile)}`);
}

main().catch(e => {
  if (e.message === 'QUOTA_EXCEEDED') {
    console.error('⚠ YouTube API quota exhausted for today (resets ~midnight Pacific). Re-run after the reset.');
    process.exit(1);
  }
  console.error(e.message || e);
  process.exit(1);
});
