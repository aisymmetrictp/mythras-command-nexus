/**
 * Video flow (LOCAL TOOL): drop a recording in, get an upload-ready package out.
 *
 *   1. Put your raw recording(s) in scripts/youtube/inbox/   (mp4/mov/mkv/webm/avi)
 *   2. Run:  node scripts/youtube/video-flow.js
 *   3. For each video it produces scripts/youtube/out/<name>/ containing:
 *        - transcript.txt        (faster-whisper, local)
 *        - titles.txt            (3 AI title options)
 *        - description.txt       (AI-search-optimized summary + divider + channel footer,
 *                                 same format as the optimized back-catalog)
 *        - thumbnail-brief.txt   (punchy hook + brief for the Canva step)
 *        - frames/frame-1..5.jpg (candidate thumbnail stills, 1280px)
 *   4. Ask Claude to "make the Canva thumbnail for <name>" — it builds an on-brand
 *      youtube_thumbnail in Canva from the hook + your brand kit, exports a PNG,
 *      and gives you the editable link to drop a gameplay frame in.
 *   5. Upload to YouTube, paste the title + description, set the thumbnail.
 *
 * Env (scripts/youtube/.env): ANTHROPIC_API_KEY, optional LLM_MODEL, WHISPER_MODEL.
 * Needs ffmpeg/ffprobe on PATH (present) and `pip install faster-whisper` (done).
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const HERE = __dirname;
const INBOX = path.join(HERE, 'inbox');
const OUT = path.join(HERE, 'out');
const BACKUPS = path.join(HERE, 'backups');
const VIDEO_EXT = new Set(['.mp4', '.mov', '.mkv', '.webm', '.avi', '.m4v']);
const DIVIDER = '──────────';
const FOOTER_MARKER = '📡 Subscribe';
const DEFAULT_FOOTER = `${FOOTER_MARKER} for daily Cookie Run: Kingdom guides, tier lists, and gear builds.\n\n🔗 Guides & gear database: https://gamertagmythras.com\n💬 Discord: https://discord.gg/mFg8mbxtTS`;

function loadEnv() {
  const p = path.join(HERE, '.env');
  const env = {};
  if (fs.existsSync(p)) {
    for (const line of fs.readFileSync(p, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '').trim();
    }
  }
  return env;
}

function sh(cmd, args, opts = {}) {
  return execFileSync(cmd, args, { encoding: 'utf8', maxBuffer: 1 << 26, ...opts });
}

function durationSec(video) {
  try {
    const out = sh('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=nw=1:nk=1', video]);
    return Math.floor(parseFloat(out.trim()) || 0);
  } catch { return 0; }
}

// Reuse the canonical Subscribe/links footer from the freshest optimized video so
// new uploads match the back-catalog exactly. Falls back to DEFAULT_FOOTER.
function canonicalFooter() {
  try {
    const files = fs.readdirSync(BACKUPS).filter(f => f.endsWith('.json')).sort().reverse();
    for (const f of files) {
      const arr = JSON.parse(fs.readFileSync(path.join(BACKUPS, f), 'utf8'));
      for (const v of arr) {
        const d = v.description || '';
        const i = d.indexOf(FOOTER_MARKER);
        if (i !== -1) return d.slice(i).split(DIVIDER)[0].trim();
      }
    }
  } catch {}
  return DEFAULT_FOOTER;
}

async function generate(env, title, transcript) {
  const prompt = `You are packaging a YouTube video for the Mythras gaming channel (Cookie Run: Kingdom focus). Based on the filename and transcript, produce JSON with:
- "titles": array of 3 punchy, accurate YouTube title options (<= 70 chars each, no fake clickbait, lead with the game/cookie/topic).
- "description": 2-3 sentences (max ~400 chars), optimized for YouTube search and AI answer engines. Lead with the most important search terms (game name, specific cookies/cards/characters, topic/format). Factual, natural, no hype, no emojis, no hashtags, no "In this video", no first person.
- "thumbnailHook": 3-5 word punchy phrase for the thumbnail text (UPPERCASE-friendly, no period).

Filename: ${title}
Transcript:
${(transcript || '(no transcript available — infer from the filename)').slice(0, 16000)}

Output ONLY valid JSON, nothing else.`;
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({ model: env.LLM_MODEL || 'claude-haiku-4-5-20251001', max_tokens: 700, messages: [{ role: 'user', content: prompt }] }),
  });
  const j = await res.json();
  if (!res.ok || !j.content) throw new Error('LLM error: ' + JSON.stringify(j).slice(0, 300));
  const text = j.content.map(c => c.text || '').join('');
  const m = text.match(/\{[\s\S]*\}/);
  if (!m) throw new Error('No JSON in LLM response: ' + text.slice(0, 200));
  return JSON.parse(m[0]);
}

async function processVideo(env, file, footer) {
  const name = path.basename(file, path.extname(file));
  const slug = name.replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/^-+|-+$/g, '');
  const outDir = path.join(OUT, slug);
  const framesDir = path.join(outDir, 'frames');
  fs.mkdirSync(framesDir, { recursive: true });
  console.log(`\n▶ ${name}`);

  const dur = durationSec(file);
  console.log(`  duration: ${dur}s`);

  // 1) audio → 2) transcript
  const wav = path.join(outDir, 'audio.wav');
  console.log('  extracting audio…');
  sh('ffmpeg', ['-y', '-i', file, '-vn', '-ac', '1', '-ar', '16000', '-f', 'wav', wav], { stdio: ['ignore', 'ignore', 'ignore'] });
  console.log('  transcribing (faster-whisper)…');
  let transcript = '';
  try {
    transcript = sh('python', [path.join(HERE, 'transcribe.py'), wav], { stdio: ['ignore', 'pipe', 'inherit'] }).trim();
  } catch (e) { console.log('  ⚠ transcription failed: ' + (e.message || e)); }
  fs.writeFileSync(path.join(outDir, 'transcript.txt'), transcript || '(no transcript)', 'utf8');
  fs.unlinkSync(wav); // don't keep the big wav

  // 3) titles + description + hook
  console.log('  generating titles + description…');
  const g = await generate(env, name, transcript);
  const description = `${g.description}\n\n${DIVIDER}\n\n${footer}`;
  fs.writeFileSync(path.join(outDir, 'titles.txt'), (g.titles || []).map((t, i) => `${i + 1}. ${t}`).join('\n'), 'utf8');
  fs.writeFileSync(path.join(outDir, 'description.txt'), description, 'utf8');
  fs.writeFileSync(path.join(outDir, 'thumbnail-brief.txt'),
    `Hook: ${g.thumbnailHook || ''}\nTitle: ${(g.titles || [])[0] || name}\nGame: Cookie Run: Kingdom\nBrand kit: kAGp0PZ4kMU\nFrames: out/${slug}/frames/\n\nAsk Claude: "make the Canva thumbnail for ${slug}"`, 'utf8');

  // 4) candidate thumbnail frames at smart spots (skip the dead start/end)
  const pcts = [0.12, 0.28, 0.44, 0.60, 0.76];
  console.log('  grabbing thumbnail frames…');
  pcts.forEach((p, i) => {
    const t = Math.max(1, Math.floor(dur * p));
    try {
      sh('ffmpeg', ['-y', '-ss', String(t), '-i', file, '-frames:v', '1', '-q:v', '2', '-vf', 'scale=1280:-1', path.join(framesDir, `frame-${i + 1}.jpg`)], { stdio: ['ignore', 'ignore', 'ignore'] });
    } catch {}
  });

  console.log(`  ✓ done → out/${slug}/  (titles, description, ${pcts.length} frames, thumbnail brief)`);
  return { slug, name };
}

async function main() {
  const env = loadEnv();
  if (!env.ANTHROPIC_API_KEY) { console.error('ANTHROPIC_API_KEY missing in scripts/youtube/.env'); process.exit(1); }
  fs.mkdirSync(INBOX, { recursive: true });
  fs.mkdirSync(OUT, { recursive: true });
  const vids = fs.readdirSync(INBOX).filter(f => VIDEO_EXT.has(path.extname(f).toLowerCase()));
  if (!vids.length) { console.log(`No videos in ${path.relative(process.cwd(), INBOX)}/ — drop a recording there and re-run.`); return; }
  console.log(`Found ${vids.length} video(s) in inbox.`);
  const footer = canonicalFooter();
  const done = [];
  for (const v of vids) {
    try { done.push(await processVideo(env, path.join(INBOX, v), footer)); }
    catch (e) { console.error(`✗ ${v}: ${e.message || e}`); }
  }
  console.log(`\nDone. ${done.length}/${vids.length} packaged. Next: ask Claude to make the Canva thumbnails:`);
  for (const d of done) console.log(`   • make the Canva thumbnail for ${d.slug}`);
}

main().catch(e => { console.error(e.message || e); process.exit(1); });
