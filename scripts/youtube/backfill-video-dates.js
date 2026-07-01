/**
 * Backfill uploadDate for the videos currently mapped in src/data/blog/videoMap.ts.
 *
 * Reads the mapped video IDs, fetches each video's snippet.publishedAt via one
 * cheap videos.list call (1 quota unit per 50 IDs — NOT captions, so it survives
 * even after the daily caption quota is spent), and merges the results into a
 * persistent cache at scripts/youtube/video-dates.json (id -> ISO date).
 *
 * The matcher (match-videos-to-posts.js) reads that cache and stamps uploadDate
 * onto each VIDEO_MAP entry, which makes the on-post VideoObject rich-result
 * eligible. Re-run this whenever the matcher maps new videos.
 *
 * Run: node scripts/youtube/backfill-video-dates.js   (then re-run the matcher)
 */
const fs = require('fs');
const path = require('path');

const MAP = path.join(__dirname, '..', '..', 'src', 'data', 'blog', 'videoMap.ts');
const CACHE = path.join(__dirname, 'video-dates.json');

function loadEnv() {
  const env = {};
  for (const line of fs.readFileSync(path.join(__dirname, '.env'), 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '').trim();
  }
  return env;
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
  const mapSrc = fs.readFileSync(MAP, 'utf8');
  const ids = [...new Set([...mapSrc.matchAll(/"id":\s*"([A-Za-z0-9_-]+)"/g)].map(m => m[1]))];
  if (!ids.length) { console.error('No video IDs found in videoMap.ts'); process.exit(1); }

  const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, 'utf8')) : {};
  const todo = ids.filter(id => !cache[id]); // only fetch dates we don't already have
  console.log(`Mapped IDs: ${ids.length} | already cached: ${ids.length - todo.length} | to fetch: ${todo.length}`);
  if (!todo.length) { console.log('Nothing to fetch — cache already covers every mapped video.'); return; }

  const env = loadEnv();
  const t = await token(env);
  const auth = { headers: { Authorization: `Bearer ${t}` } };

  let added = 0;
  for (let i = 0; i < todo.length; i += 50) {
    const batch = todo.slice(i, i + 50).join(',');
    const r = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${batch}`, auth);
    const data = await r.json();
    if (!r.ok) {
      const reason = JSON.stringify(data).slice(0, 200);
      if (reason.includes('quota')) { console.error('⚠ YouTube API quota exhausted — retry after reset (~midnight Pacific).'); break; }
      throw new Error('videos.list ' + r.status + ': ' + reason);
    }
    for (const it of data.items || []) {
      cache[it.id] = (it.snippet.publishedAt || '').slice(0, 10); // YYYY-MM-DD is enough for uploadDate
      added++;
    }
  }
  fs.writeFileSync(CACHE, JSON.stringify(cache, null, 2), 'utf8');
  console.log(`Fetched ${added} dates → wrote ${path.relative(path.join(__dirname, '..', '..'), CACHE)} (${Object.keys(cache).length} total cached).`);
  console.log('Now re-run: node scripts/youtube/match-videos-to-posts.js');
}
main().catch(e => { console.error(e.message || e); process.exit(1); });
