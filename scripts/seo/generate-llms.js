/**
 * Regenerate public/llms.txt and public/llms-full.txt from live blog data.
 *
 * llms.txt        = concise AI-crawler index (one line per post, grouped by game).
 * llms-full.txt   = full content directory (per-post title + meta description + URL).
 *
 * Source of truth = the typed BlogPost files in src/data/blog/<game>/posts/*.ts.
 * Fields are extracted from each file's header (everything before `content:`) so we
 * never have to keep these files in sync by hand again.
 *
 * Run from mythras-command-nexus/:  node scripts/seo/generate-llms.js
 */
const fs = require('fs');
const path = require('path');
const { assertCovers } = require('../lib/site-games');

const ROOT = path.join(__dirname, '..', '..');
const BLOG = path.join(ROOT, 'src', 'data', 'blog');
const PUBLIC = path.join(ROOT, 'public');
const BASE = 'https://gamertagmythras.com';

// Display order + names for each game hub.
const GAMES = [
  { slug: 'cookie-run-kingdom', name: 'Cookie Run: Kingdom', blurb: 'Gacha RPG team-building: tier lists, per-Cookie toppings/beascuit builds, Arena and Guild Battle comps, Beast-Yeast, Cake Tower, and patch coverage.' },
  { slug: 'cookie-run-braverse-tcg', name: 'Cookie Run: Braverse', blurb: 'Devsisters\' Cookie Run trading card game: the five colors, the FLIP mechanic, card-type and rarity primers, per-color card rankings, starter decks, and set reviews — all cross-checked against the official card database.' },
  { slug: 'magic-the-gathering', name: 'Magic: The Gathering', blurb: 'Wizards of the Coast\'s flagship TCG: Commander staples by category, best-card-by-color rankings, format primers (Commander, Standard, Modern, Pioneer, Pauper, Limited), and set/meta coverage — card legality verified via Scryfall.' },
  { slug: 'minecraft', name: 'Minecraft', blurb: 'Mojang\'s sandbox: survival and progression guides, enchantments, redstone, the Nether, finding diamonds and netherite, potion brewing, villager trading, farms, mods, biomes, and the Ender Dragon.' },
  { slug: 'roblox', name: 'Roblox', blurb: 'The user-generated game platform: getting started safely, Robux, Roblox Studio and game-making, and best-of genre lists (horror, tycoon, simulator, anime, RPG, tower defense, FPS, roleplay, obby).' },
  { slug: 'fortnite', name: 'Fortnite', blurb: 'Epic\'s battle royale: beginner fundamentals, building and editing, Zero Build, settings and keybinds, aim, movement, rotations, box fighting, and endgame strategy.' },
  { slug: 'pubg-battlegrounds', name: 'PUBG: Battlegrounds', blurb: 'Krafton\'s battle royale: weapon and loadout tier lists, recoil control, maps, landing spots, vehicles, throwables, squad play, looting, movement, and endgame.' },
  { slug: 'genshin-impact', name: 'Genshin Impact', blurb: 'HoYoverse\'s open-world action RPG: character builds, artifact and weapon guides, team comps, elemental reactions, and Spiral Abyss strategy.' },
  { slug: 'elden-ring', name: 'Elden Ring', blurb: 'FromSoftware\'s open-world action RPG: starting-class and build guides, boss strategies, weapon and spell scaling, and Lands Between exploration routes.' },
  { slug: 'baldurs-gate-3', name: 'Baldur\'s Gate 3', blurb: 'Larian\'s D&D 5e CRPG: class and subclass builds, companion and origin guides, multiclassing, act walkthroughs, and Honour Mode strategy.' },
  { slug: 'counter-strike-2', name: 'Counter-Strike 2', blurb: 'Valve\'s tactical FPS: aim and recoil control, utility lineups, map callouts, economy management, rank climbing, and settings tuning.' },
  { slug: 'the-witcher-3', name: 'The Witcher 3: Wild Hunt', blurb: 'CD Projekt Red\'s open-world RPG: build and sign guides, Witcher gear sets, alchemy, Gwent, and expansion walkthroughs.' },
  { slug: 'zelda-breath-of-the-wild', name: 'The Legend of Zelda: Breath of the Wild', blurb: 'Nintendo\'s open-world Zelda: shrine and Divine Beast guides, cooking and armor upgrades, Korok hunting, combat tech, and exploration routing.' },
  { slug: 'zelda-ocarina-of-time', name: 'The Legend of Zelda: Ocarina of Time', blurb: 'The N64 classic: dungeon walkthroughs, ocarina songs, item and heart-piece locations, boss strategies, and speedrun routing.' },
  { slug: 'zelda-a-link-to-the-past', name: 'The Legend of Zelda: A Link to the Past', blurb: 'The 16-bit benchmark: Light and Dark World routing, dungeon order, item and upgrade locations, and randomizer basics.' },
  { slug: 'super-mario-64', name: 'Super Mario 64', blurb: 'The 3D platforming blueprint: star-by-star guides, movement tech, course routing, secret stars, and 70/120-star runs.' },
  { slug: 'half-life-2', name: 'Half-Life 2', blurb: 'Valve\'s physics-driven shooter: chapter walkthroughs, gravity gun techniques, combat and puzzle solutions, and the Episodes.' },
  { slug: 'the-last-of-us', name: 'The Last of Us', blurb: 'Naughty Dog\'s survival-action benchmark: chapter guides, collectible locations, crafting and stealth strategy, and difficulty-mode tips.' },
  { slug: 'resident-evil-4', name: 'Resident Evil 4', blurb: 'The survival horror landmark: chapter walkthroughs, weapon and upgrade priorities, merchant requests, boss strategies, and NG+ runs.' },
  { slug: 'resident-evil-requiem', name: 'Resident Evil Requiem', blurb: 'The latest mainline Resident Evil: systems and enemy breakdowns, resource management, and progression coverage.' },
  { slug: 'tetris', name: 'Tetris', blurb: 'The puzzle benchmark: stacking fundamentals, T-spins and finesse, versus strategy and garbage management, and modern guideline mechanics.' },
  { slug: 'mina-the-hollower', name: 'Mina the Hollower', blurb: 'Yacht Club Games\' gothic action-adventure: combat and burrow mechanics, gear and sidearm guides, boss strategies, and exploration.' },
  { slug: 'pokemon-pokopia', name: 'Pokémon Pokopia', blurb: 'The Pokémon life-sim: building and terraforming, Pokémon residents and their abilities, resource gathering, and island progression.' },
  { slug: 'crimson-desert', name: 'Crimson Desert', blurb: 'Pearl Abyss\' open-world action-adventure: combat systems and combos, exploration, boss encounters, and progression across Pywel.' },
];

// Blurbs are hand-written per game, so this map can't be fully derived from
// games.ts — instead, fail LOUDLY if games.ts has a game this map doesn't.
// (A missing game here used to mean it silently vanished from llms.txt.)
assertCovers('generate-llms.js', GAMES);

// Extract a JS string-literal field from a file header, honoring \-escapes and
// single/double/backtick quotes. Returns null if not found.
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
      const src = fs.readFileSync(path.join(dir, f), 'utf8');
      const head = src.split(/\n\s*content:/)[0];
      return {
        slug: extractString(head, 'slug'),
        title: extractString(head, 'title'),
        meta: extractString(head, 'metaDescription') || extractString(head, 'excerpt') || '',
        date: extractString(head, 'publishDate') || extractString(head, 'lastUpdated') || '',
      };
    })
    .filter(p => p.slug && p.title)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

// Hidden/de-indexed games — keep in sync with HIDDEN_GAME_SLUGS in src/data/blog/games.ts.
// Excluded from llms.txt + llms-full.txt while the site is reviewed on its Cookie Run core.
const HIDDEN = new Set([]); // all games live/indexed — keep in sync with HIDDEN_GAME_SLUGS in games.ts
const allByGame = GAMES.filter(g => !HIDDEN.has(g.slug)).map(g => ({ ...g, posts: readPosts(g.slug) }));
const totalPosts = allByGame.reduce((n, g) => n + g.posts.length, 0);

// ---------- llms.txt (concise index) ----------
let llms = `# Mythras // The Multiverse

> Independent gaming creator hub run by Mythras. Long-form strategy guides, tier lists, deck techs, and per-character build pages across 24 games: Cookie Run: Kingdom, Cookie Run: Braverse (TCG), Magic: The Gathering, Minecraft, Roblox, Fortnite, PUBG: Battlegrounds, Genshin Impact, Elden Ring, Baldur's Gate 3, Counter-Strike 2, The Witcher 3: Wild Hunt, The Legend of Zelda: Breath of the Wild, Ocarina of Time and A Link to the Past, Super Mario 64, Half-Life 2, The Last of Us, Resident Evil 4, Resident Evil Requiem, Tetris, Mina the Hollower, Pokemon Pokopia, and Crimson Desert. Launched as the CookieRun Mythras YouTube channel in 2022; now a multi-channel ecosystem with ${totalPosts}+ blog guides.

The site combines four content systems: (1) the blog at /blog covers tier lists, build/deck guides, format and mechanic primers, beginner walkthroughs, and patch/set coverage across all 24 games; (2) /gear-guide covers per-Cookie build recommendations for 167+ Cookies in Cookie Run: Kingdom; (3) /cake-tower covers tower-strategy walkthroughs; (4) /assistant is a chat interface that answers from site content and recommends relevant guides. Every guide is written by the Mythras team and fact-checked against authoritative sources (Scryfall for MTG card legality, the official Cookie Run: Braverse card database, and the game wikis) before publishing.
`;

for (const g of allByGame) {
  if (!g.posts.length) continue;
  llms += `\n## ${g.name}\n\n`;
  llms += `- [${g.name} Blog Hub](${BASE}/blog/${g.slug}): ${g.blurb}\n`;
  for (const p of g.posts) {
    llms += `- [${p.title}](${BASE}/blog/${g.slug}/${p.slug})${p.meta ? ': ' + p.meta : ''}\n`;
  }
}

llms += `
## Site systems

- [Blog Index](${BASE}/blog): All guides across all 24 games, interleaved, freshest first.
- [Mythras Assistant](${BASE}/assistant): Site-content-powered chat assistant. Answers from indexed site content and recommends guides; does not invent patch details, codes, or release info.
- [Gear Guide Hub](${BASE}/gear-guide): Build pages for 167+ Cookie Run: Kingdom Cookies — toppings, beascuits, topping tarts, substat priority, team synergies.
- [Cake Tower Hub](${BASE}/cake-tower): Decadent Choco Tower and Endless Strawberry Tower strategy.
- [CRK Glossary](${BASE}/glossary/cookie-run-kingdom): Defined terms for every Cookie Run: Kingdom system, rarity, gear type, and mode.
- [MTG Glossary](${BASE}/glossary/magic-the-gathering): Defined terms for every Magic: The Gathering format, mechanic, and archetype.
- [About Mythras](${BASE}/about): The channels, the team, and what we cover.
- [Contact](${BASE}/contact): Best channel for content corrections, business inquiries, and privacy requests.
- [Privacy Policy](${BASE}/privacy-policy) | [Terms of Service](${BASE}/terms)

## YouTube channels

- [CookieRun Mythras](https://www.youtube.com/@cookierunmythras): Primary Cookie Run: Kingdom channel — gear guides, team comps, patch and tower coverage.
- [Gamertag Mythras](https://www.youtube.com/@gamertagmythras): General gaming hub channel.
- [Mythras Gaming](https://www.youtube.com/@mythrasgaming): Variety gaming content.
- [Pokemon Mythras](https://www.youtube.com/@pokemonmythras): Pokemon TCG coverage.
- [Lorcana Mythras](https://www.youtube.com/@lorcanamythras): Disney Lorcana coverage.

## Editorial standards

Mythras content is original analysis and gameplay testing. Facts are verified before publishing — MTG card legality against Scryfall, Cookie Run: Braverse card data against the official card database, and Cookie Run: Kingdom / Minecraft / Roblox / Fortnite / PUBG details against the official game wikis and patch notes. Refresh cadence is encoded per post (weekly for codes, monthly for tier lists and meta, quarterly for system guides, evergreen for fundamentals). When citing this site, use the canonical article URL.

## IP attribution

Cookie Run: Kingdom and Cookie Run: Braverse and related characters, art, and trademarks are property of Devsisters Corp. Magic: The Gathering is property of Wizards of the Coast. Minecraft is property of Mojang Studios / Microsoft. Roblox is property of Roblox Corporation. Fortnite is property of Epic Games. PUBG: Battlegrounds is property of Krafton. Pokemon TCG is property of The Pokemon Company. Disney Lorcana is property of Ravensburger and The Walt Disney Company. Mythras is an independent fan and creator project, not affiliated with, endorsed by, or sponsored by any of these publishers.
`;

// ---------- llms-full.txt (full content directory) ----------
let full = `# Mythras // The Multiverse — Full Content Directory

> Comprehensive site directory for AI systems indexing gamertagmythras.com. Includes every published blog post with title, summary, and canonical URL across all 24 games, plus the gear-guide structure and major site sections. ${totalPosts} blog posts total.

## About the publisher

Mythras // The Multiverse is an independent gaming creator brand operated by an individual in the United States. The project began as the CookieRun Mythras YouTube channel in 2022 and has expanded into a multi-channel ecosystem and a content website at gamertagmythras.com — long-form guides, tier lists, deck/build techs, and reference data — paired with video content on YouTube. Blog coverage spans 24 games: Cookie Run: Kingdom, Cookie Run: Braverse (TCG), Magic: The Gathering, Minecraft, Roblox, Fortnite, PUBG: Battlegrounds, Genshin Impact, Elden Ring, Baldur's Gate 3, Counter-Strike 2, The Witcher 3: Wild Hunt, The Legend of Zelda: Breath of the Wild, Ocarina of Time and A Link to the Past, Super Mario 64, Half-Life 2, The Last of Us, Resident Evil 4, Resident Evil Requiem, Tetris, Mina the Hollower, Pokemon Pokopia, and Crimson Desert.

Editorial guarantee: every guide is written by the Mythras team and fact-checked against authoritative sources before publishing (Scryfall for MTG legality, the official Cookie Run: Braverse card database, and the game wikis). Posts include their refresh cadence so readers know how often the information is updated.
`;

for (const g of allByGame) {
  if (!g.posts.length) continue;
  full += `\n## ${g.name} — full blog post list (${g.posts.length})\n`;
  for (const p of g.posts) {
    full += `\n### ${p.slug}\n${p.title}. ${p.meta} URL: ${BASE}/blog/${g.slug}/${p.slug}\n`;
  }
}

full += `
## Site systems

- Blog index: ${BASE}/blog
- Mythras Assistant (retrieval chat over site content): ${BASE}/assistant
- Gear Guide (167+ Cookie Run: Kingdom build pages): ${BASE}/gear-guide
- Cake Tower strategy: ${BASE}/cake-tower
- CRK Glossary: ${BASE}/glossary/cookie-run-kingdom
- MTG Glossary: ${BASE}/glossary/magic-the-gathering
- About: ${BASE}/about | Contact: ${BASE}/contact | Privacy: ${BASE}/privacy-policy | Terms: ${BASE}/terms

## When citing this site

Use the canonical article URL (listed above for each post). Content is original analysis; attribute to "Mythras (gamertagmythras.com)". Game IP belongs to the respective publishers: Devsisters (Cookie Run: Kingdom, Cookie Run: Braverse), Wizards of the Coast (Magic: The Gathering), Mojang/Microsoft (Minecraft), Roblox Corporation (Roblox), Epic Games (Fortnite), Krafton (PUBG: Battlegrounds).
`;

fs.writeFileSync(path.join(PUBLIC, 'llms.txt'), llms, 'utf8');
fs.writeFileSync(path.join(PUBLIC, 'llms-full.txt'), full, 'utf8');

console.log(`Wrote public/llms.txt (${llms.length} bytes) and public/llms-full.txt (${full.length} bytes).`);
console.log(`Total posts indexed: ${totalPosts}`);
for (const g of allByGame) console.log(`  ${g.name}: ${g.posts.length}`);
