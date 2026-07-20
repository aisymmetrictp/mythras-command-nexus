/**
 * Single source of truth for game slugs/names in Node scripts.
 *
 * Parses src/data/blog/games.ts at runtime so scripts can never drift from the
 * site again. History: sync-sitemap.js, generate-llms.js, content-health.js and
 * content-audit.js each carried their own hand-copied GAMES array; when 17 new
 * games launched (2026-07-20) all four silently skipped them — posts built and
 * deployed fine but were missing from sitemap.xml/llms.txt with zero errors.
 *
 * Usage:
 *   const { getGames, getGameSlugs, assertCovers } = require('../lib/site-games');
 *   const GAMES = getGames();          // [{ slug, name }, ...] in games.ts order
 *   assertCovers('generate-llms.js', myMap);  // throw if a games.ts slug is missing
 */
const fs = require('fs');
const path = require('path');

const GAMES_TS = path.join(__dirname, '..', '..', 'src', 'data', 'blog', 'games.ts');

let cache = null;

function getGames() {
  if (cache) return cache;
  const src = fs.readFileSync(GAMES_TS, 'utf8');
  // Each Game entry declares slug then name on their own lines; capture pairwise.
  const entryRe = /slug:\s*'([^']+)',\s*\n\s*name:\s*'((?:\\'|[^'])+)'/g;
  const games = [];
  let m;
  while ((m = entryRe.exec(src)) !== null) {
    games.push({ slug: m[1], name: m[2].replace(/\\'/g, "'") });
  }
  if (games.length === 0) {
    throw new Error(`site-games: parsed 0 games from ${GAMES_TS} — the games.ts format changed; fix the regex in scripts/lib/site-games.js`);
  }
  cache = games;
  return games;
}

function getGameSlugs() {
  return getGames().map(g => g.slug);
}

/**
 * Guard for scripts that keep per-game hand-written data (e.g. llms blurbs):
 * throws loudly if games.ts has a slug the map doesn't cover, so adding a game
 * without updating the map becomes a build-stopping error instead of a silent gap.
 */
function assertCovers(scriptName, mapOrArray) {
  const covered = new Set(
    Array.isArray(mapOrArray) ? mapOrArray.map(g => (typeof g === 'string' ? g : g.slug)) : Object.keys(mapOrArray)
  );
  const missing = getGameSlugs().filter(s => !covered.has(s));
  if (missing.length > 0) {
    throw new Error(
      `${scriptName}: games.ts has ${missing.length} game(s) this script does not cover: ${missing.join(', ')}. ` +
      `Add them (a new game touches every per-game map — see scripts/lib/site-games.js header).`
    );
  }
}

module.exports = { getGames, getGameSlugs, assertCovers };
