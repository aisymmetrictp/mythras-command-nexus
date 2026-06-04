/**
 * Audit the FULL uploads catalog (no caption downloads → cheap quota) to answer:
 * how many total uploads, how many are long-form (>= min-duration), and how many
 * long-form videos are already optimized (description contains our DIVIDER).
 *
 * Walks the ENTIRE uploads playlist (paginated), not a --pool window, so it sees
 * videos older than the most-recent 400. Uses only playlistItems.list +
 * videos.list (1 unit each per page/batch) — no captions.* calls.
 *
 * Run: node scripts/youtube/audit-descriptions.js [--min-duration=120] [--channel=cookierun]
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
const DIVIDER = '──────────';

function durSec(iso) {
  const m = (iso || '').match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return 0;
  return (+m[1] || 0) * 3600 + (+m[2] || 0) * 60 + (+m[3] || 0);
}
function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  const env = {};
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
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
async function token(env) {
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: env.CLIENT_ID, client_secret: env.CLIENT_SECRET, refresh_token: env.REFRESH_TOKEN, grant_type: 'refresh_token' }),
  });
  const j = await r.json();
  if (!j.access_token) throw new Error('token refresh failed: ' + JSON.stringify(j));
  return j.access_token;
}

async function main() {
  const env = loadEnv();
  const slug = String(arg('channel', env.CHANNEL || 'cookierun'));
  const minDur = parseInt(arg('min-duration', 120), 10);
  const playlist = UPLOADS[slug];
  const t = await token(env);
  const auth = { headers: { Authorization: `Bearer ${t}` } };

  // 1) Walk the ENTIRE uploads playlist.
  const ids = [];
  let pageToken = '';
  do {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&playlistId=${playlist}${pageToken ? `&pageToken=${pageToken}` : ''}`;
    const r = await fetch(url, auth);
    const data = await r.json();
    if (!r.ok) throw new Error('playlistItems ' + r.status + ': ' + JSON.stringify(data).slice(0, 200));
    for (const it of data.items || []) ids.push(it.contentDetails.videoId);
    pageToken = data.nextPageToken || '';
  } while (pageToken);

  // 2) Fetch duration + description for every video (batches of 50).
  const vids = [];
  for (let i = 0; i < ids.length; i += 50) {
    const batch = ids.slice(i, i + 50).join(',');
    const r = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${batch}`, auth);
    const data = await r.json();
    if (!r.ok) throw new Error('videos.list ' + r.status + ': ' + JSON.stringify(data).slice(0, 200));
    for (const it of data.items || []) vids.push({
      id: it.id,
      title: it.snippet.title,
      dur: durSec(it.contentDetails.duration),
      optimized: (it.snippet.description || '').includes(DIVIDER),
    });
  }

  const longform = vids.filter(v => v.dur >= minDur);
  const lfDone = longform.filter(v => v.optimized);
  const lfTodo = longform.filter(v => !v.optimized);
  const shorts = vids.filter(v => v.dur < minDur);
  const shortsDone = shorts.filter(v => v.optimized);

  console.log(`Channel ${slug}: ${vids.length} total uploads`);
  console.log(`Long-form (>= ${minDur}s): ${longform.length}  | optimized ${lfDone.length} | NOT optimized ${lfTodo.length}`);
  console.log(`Shorts   (<  ${minDur}s): ${shorts.length}  | optimized ${shortsDone.length} | NOT optimized ${shorts.length - shortsDone.length}`);
  if (lfTodo.length) {
    console.log(`\n--- Long-form NOT yet optimized (${lfTodo.length}) ---`);
    for (const v of lfTodo) console.log(`  ${v.id}  ${Math.round(v.dur)}s  ${v.title}`);
  } else {
    console.log('\nAll long-form videos are optimized.');
  }
}
main().catch(e => { console.error(e.message || e); process.exit(1); });
