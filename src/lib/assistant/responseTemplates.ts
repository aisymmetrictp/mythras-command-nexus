// Intent detection + templated answer strings.
// The local provider walks intents top to bottom; first match wins.
// Each intent returns an `Intent` object the provider uses to search + format the answer.

import { searchContent, findByKeywords, topInCategory, toRecommendedLink } from './search';
import { getContentIndex } from './contentIndex';
import type { AssistantResponse, RecommendedLink, ContentIndexItem } from './types';
import { ALL_COOKIES } from '@/data/cookieData';
import { GAMES } from '@/data/blog/games';

export interface Intent {
  name: string;
  /** Matches against the lowercased user message; optional path for context-aware routing. */
  match: (msg: string, path?: string) => boolean;
  /** Produces the AssistantResponse for the matched message. */
  build: (msg: string, path?: string) => AssistantResponse;
}

function containsAny(msg: string, terms: string[]): boolean {
  return terms.some(t => msg.includes(t));
}

function joinLinks(links: RecommendedLink[]): string {
  if (links.length === 0) return '';
  return links.slice(0, 3).map(l => `- **[${l.title}](${l.href})** — ${l.summary}`).join('\n');
}

function answerOpener(): string {
  const openers = [
    "Here's what I found in our content for that.",
    "Based on what's on Mythras right now, these guides look closest.",
    "Going off what's live on the site, here's where I'd point you.",
  ];
  return openers[Math.floor(Math.random() * openers.length)];
}

/**
 * Path → canonical game slug, derived from the game registry so every game in
 * games.ts gets context-aware routing automatically. CRK-adjacent sections
 * (/gear-guide, /cake-tower) and short aliases (/mtg, /pubg) map explicitly.
 */
function pathGame(path?: string): string | undefined {
  if (!path) return undefined;
  if (path.startsWith('/gear-guide') || path.startsWith('/cake-tower')) return 'cookie-run-kingdom';
  if (path.includes('/mtg')) return 'magic-the-gathering';
  if (path.includes('/pubg')) return 'pubg-battlegrounds';
  return GAMES.find(g => path.includes(`/${g.slug}`))?.slug;
}

function gameName(slug: string | undefined): string | undefined {
  return GAMES.find(g => g.slug === slug)?.shortName;
}

// True when the message clearly references a non-CRK game, so the generic CRK
// intents below stand down and the query falls through to search (which finds
// the right indexed post). Game names/shortNames come from the registry; the
// extra words are game-specific vocab strongly implying a title.
const OTHER_GAME_WORDS: RegExp = (() => {
  const registry = GAMES
    .filter(g => g.slug !== 'cookie-run-kingdom' && g.slug !== 'cookie-run-braverse-tcg')
    .flatMap(g => [g.name, g.shortName])
    .map(n => n.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim());
  const vocab = ['robux', 'battlegrounds', 'redstone', 'enchantment', 'tarnished', 'hyrule', 'gwent', 'artifact farming', 'spiral abyss'];
  const words = [...new Set([...registry, ...vocab])].filter(Boolean);
  return new RegExp(`\\b(${words.map(w => w.replace(/ /g, '\\s+')).join('|')})\\b`, 'i');
})();
function mentionsOtherGame(msg: string): boolean {
  return OTHER_GAME_WORDS.test(msg);
}
function isNonCrkGame(game: string | undefined): boolean {
  return game !== undefined && game !== 'cookie-run-kingdom';
}

function detectCookieMention(msg: string): ContentIndexItem | undefined {
  function escapeRegex(s: string): string {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  const candidates = ALL_COOKIES
    .map(c => {
      const name = c.name.toLowerCase();
      const short = c.name.replace(/ Cookie$/i, '').toLowerCase();
      const fullMatch = msg.includes(name);
      const shortBoundary = new RegExp(`\\b${escapeRegex(short)}\\b`, 'i');
      const shortMatch = !fullMatch && shortBoundary.test(msg);
      return { name, short, slug: c.slug, hit: fullMatch || shortMatch, scoreLen: fullMatch ? name.length : short.length };
    })
    .filter(c => c.hit);
  if (candidates.length === 0) return undefined;
  candidates.sort((a, b) => b.scoreLen - a.scoreLen);
  return getContentIndex().find(i => i.id === `cookie:${candidates[0].slug}`);
}

// ===================== CRK INTENTS =====================

function intentCodes(): Intent {
  return {
    name: 'codes',
    match: msg => containsAny(msg, ['crk code', 'cookie run code', 'cookie run kingdom code', 'redeem code crk', 'free crystal', 'coupon'])
      || (containsAny(msg, ['code', 'codes', 'redeem']) && !containsAny(msg, ['mtg', 'magic', 'standard'])),
    build: () => {
      const links = findByKeywords(['cookie run kingdom codes', 'crk codes', 'redeem']).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} Our running CRK codes list is refreshed weekly with every active code, what it gives, and how to redeem on the DevPlay portal.\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['codes', 'events-updates'],
        confidence: 0.92,
        source: 'local',
      };
    },
  };
}

function intentCrkTierList(): Intent {
  return {
    name: 'crk-tier-list',
    match: (msg, path) => {
      const game = pathGame(path);
      const generic = containsAny(msg, ['tier list', 'best cookies', 'meta cookies', 'top cookies', 'who is the best cookie']);
      return generic && !isNonCrkGame(game) && !mentionsOtherGame(msg);
    },
    build: () => {
      const links = findByKeywords(['cookie run kingdom tier list', 'crk meta', 'best cookies']).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} The May 2026 CRK tier list ranks every Cookie for PvE, Arena, and Guild Battle after the Timeline of Fate patch. The S+ picks anchor the current meta — Dark Enchantress, Timekeeper, Sugar Swan, Millennial Tree, Aegis Hollyberry.\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['tier-lists', 'crk-meta'],
        confidence: 0.9,
        source: 'local',
      };
    },
  };
}

function intentArenaTeam(): Intent {
  return {
    name: 'arena-team',
    match: msg => containsAny(msg, ['kingdom arena', 'arena team', 'arena comp', 'pvp team cookie', 'arena defense cookie']) ||
      (msg.includes('arena') && (msg.includes('cookie') || msg.includes('crk'))),
    build: msg => {
      const isF2P = containsAny(msg, ['f2p', 'free to play', 'no legendary', 'budget', 'cheap']);
      const queries = isF2P
        ? ['best f2p arena team', 'reroll', 'kingdom arena']
        : ['kingdom arena meta team', 'arena meta', 'timekeeper', 'dark enchantress'];
      const links = findByKeywords(queries).map(toRecommendedLink);
      const angle = isF2P
        ? "We have an F2P CRK arena comp that clears Diamond without a single Legendary pull — Hollyberry + Pavlova + Pure Vanilla + Ash Salt + Black Sapphire."
        : "The current CRK meta arena comp runs Aegis Hollyberry + Pure Vanilla + Dark Enchantress + Timekeeper + Sugar Swan. The full breakdown covers per-slot reasoning, treasures, and F2P swaps.";
      return {
        answer: `${answerOpener()} ${angle}\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['team-builds', 'arena-meta'],
        confidence: 0.9,
        source: 'local',
      };
    },
  };
}

function intentGuildBattle(): Intent {
  return {
    name: 'guild-battle',
    match: msg => containsAny(msg, ['guild battle', 'red velvet dragon', 'avatar of destiny', 'machine god', 'machine-god', 'living abyss', 'crk boss']),
    build: () => {
      const links = findByKeywords(['guild battle', 'guild battle teams', 'red velvet dragon', 'machine god']).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} Our Guild Battle guide breaks down the strongest comp for each of the 4 bosses — Red Velvet Dragon (Poison stack), Avatar of Destiny (Sugar Swan sustain), Machine-God (Stinging Fizz with Seltzer + Menthol), Living Abyss (Dark Enchantress + Timekeeper).\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['team-builds', 'guild-battle'],
        confidence: 0.92,
        source: 'local',
      };
    },
  };
}

function intentCrkBeginner(): Intent {
  return {
    name: 'crk-beginner',
    match: (msg, path) => {
      const game = pathGame(path);
      const generic = containsAny(msg, ['beginner', 'new player', 'just started', 'starter', 'reroll', 'where do i start', 'getting started']);
      return generic && !isNonCrkGame(game) && !mentionsOtherGame(msg);
    },
    build: () => {
      const links = findByKeywords(['reroll', 'beginner', 'starting cookies', 'progression']).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} For new CRK accounts in 2026, rerolling for one of the S+ Legendaries (Dark Enchantress, Timekeeper, Sugar Swan, Millennial Tree, Aegis Hollyberry) is genuinely worth 25 minutes. Once you've locked in your account, claim every active code from the codes list — that alone is roughly 18,000 Crystals on a fresh save.\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['beginner-guides', 'reroll'],
        confidence: 0.9,
        source: 'local',
      };
    },
  };
}

function intentToppings(): Intent {
  return {
    name: 'toppings',
    match: msg => containsAny(msg, ['topping', 'toppings', 'searing raspberry', 'swift chocolate', 'solid almond', 'substat']),
    build: msg => {
      const cookieMention = detectCookieMention(msg);
      if (cookieMention) {
        return {
          answer: `${answerOpener()} The full ${cookieMention.title.replace(' — Gear Guide', '')} build (toppings, beascuit, topping tart, substat priority) lives on its gear page.\n\n- **[${cookieMention.title}](${cookieMention.href})** — ${cookieMention.summary}`,
          recommendedLinks: [{ title: cookieMention.title, href: cookieMention.href, summary: cookieMention.summary, score: 0.95 }],
          matchedTopics: ['cookie-guides', 'toppings'],
          confidence: 0.93,
          source: 'local',
        };
      }
      const links = findByKeywords(['toppings', 'gear guide', 'substat priority']).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} If you tell me which Cookie, I can point you at the exact build. Otherwise the Gear Guide indexes every Cookie's recommended toppings, beascuit, and substat priority.\n\nGeneral rule of thumb: Searing Raspberry x5 for burst DPS, Swift Chocolate x5 for supports and debuffers, Solid Almond x5 for tanks. Substat priority almost always starts with Cooldown.\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['gear', 'toppings'],
        confidence: 0.78,
        source: 'local',
      };
    },
  };
}

function intentBeascuits(): Intent {
  return {
    name: 'beascuits',
    match: msg => containsAny(msg, ['beascuit', 'beascuits']),
    build: () => {
      const links = findByKeywords(['beascuit', 'gear guide']).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} Beascuits are cookie-type-locked gear pieces with Legendary and Tainted tiers. Each Cookie type has a corresponding beascuit type (Charge → Chewy, Magic → Chewy, Ambush → Crispy, etc). Tainted versions add a 20% elemental damage bonus — only put them on elemental-attuned Cookies.\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['gear', 'beascuits'],
        confidence: 0.87,
        source: 'local',
      };
    },
  };
}

function intentCakeTower(): Intent {
  return {
    name: 'cake-tower',
    match: msg => containsAny(msg, ['cake tower', 'decadent choco', 'endless strawberry']) || (msg.includes('tower') && msg.includes('crk')),
    build: () => {
      const links = findByKeywords(['cake tower', 'decadent choco', 'endless strawberry']).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} Decadent Choco Tower expanded to 55 trays in v7.4. Most players bounce at floor 30 because their comp is glass cannon — late floors punish anything without 2 sustain slots. Our walkthrough breaks down comps by floor tier (F2P → endgame) and the treasure swaps that push you past the wall.\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['cake-tower', 'advanced-strategy'],
        confidence: 0.9,
        source: 'local',
      };
    },
  };
}

function intentCookieChat(): Intent {
  return {
    name: 'cookiechat',
    match: msg => containsAny(msg, ['cookiechat', 'cookie chat', 'affection', 'favorability', 'favorite gift']),
    build: () => {
      const links = findByKeywords(['cookiechat', 'affection', 'favorite gift']).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} CookieChat shipped in v7.2 with the Affection system — 10 favorability levels per Cookie, raised through chats, gifting Favorite-tier items, and co-deployment. Favorite gifts give roughly 3-4x the affection of Neutral ones, so matching the right gift is everything.\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['advanced-strategy', 'cookiechat'],
        confidence: 0.88,
        source: 'local',
      };
    },
  };
}

function intentTreasures(): Intent {
  return {
    name: 'crk-treasures',
    match: msg => containsAny(msg, ['squishy jelly watch', 'old pilgrim']) ||
      (msg.includes('treasure') && !msg.includes('mtg') && !msg.includes('magic')),
    build: () => {
      const links = findByKeywords(['treasures', 'crk treasures']).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} Treasures are the second-biggest damage multiplier after Cookies themselves. The 8-treasure priority list covers what to build first, which treasures swap per game mode, and the F2P upgrade order (Squishy Jelly Watch first, always).\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['beginner-guides', 'systems'],
        confidence: 0.9,
        source: 'local',
      };
    },
  };
}

function intentCrkPatchUpdate(): Intent {
  return {
    name: 'crk-patch-update',
    match: msg => containsAny(msg, ['timeline of fate', 'v7.4', 'crk update', 'ash salt', 'timekeeper release', 'cookie run kingdom update']),
    build: () => {
      const links = findByKeywords(['timeline of fate', 'crk patch', 'timekeeper']).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} The Timeline of Fate update (v7.4, 2026-05-07) added Timekeeper Cookie (Legendary anti-revive), Ash Salt (Epic debuffer), the 6-Star Legendary growth system, Arcade Arena seasons, and bumped Choco Cake Tower to 55 trays.\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['events-updates', 'patch-overview'],
        confidence: 0.9,
        source: 'local',
      };
    },
  };
}

function intentSpecificCookie(): Intent {
  return {
    name: 'specific-cookie',
    match: msg => !!detectCookieMention(msg),
    build: msg => {
      const cookie = detectCookieMention(msg)!;
      const askingWorth = containsAny(msg, ['worth pulling', 'should i pull', 'worth it']);
      const askingBuild = containsAny(msg, ['build', 'topping', 'beascuit', 'tart', 'gear']);
      const angle = askingWorth
        ? "The Investment & Pull Priority section on the Cookie's gear page covers F2P viability and Magic Candy outlook by rarity tier."
        : askingBuild
        ? "The full build (toppings, beascuit, tart, substat priority) plus team synergy notes are on the Cookie's gear page."
        : "Here's the Cookie's gear page with build, role, mode fit, and pull priority all in one spot.";
      return {
        answer: `${answerOpener()} ${angle}\n\n- **[${cookie.title}](${cookie.href})** — ${cookie.summary}`,
        recommendedLinks: [{ title: cookie.title, href: cookie.href, summary: cookie.summary, score: 0.95 }],
        matchedTopics: ['cookie-guides'],
        confidence: 0.9,
        source: 'local',
      };
    },
  };
}

// ===================== MTG INTENTS =====================

const MTG_COLORS = ['white', 'blue', 'black', 'red', 'green'] as const;
type MtgColor = typeof MTG_COLORS[number];

function intentMtgColorCards(): Intent {
  return {
    name: 'mtg-color-cards',
    match: msg => MTG_COLORS.some(c => new RegExp(`\\b(best|top|good)\\s+${c}\\s+(cards?|commander|deck|removal|counterspells?|wheels?|burn|ramp|tutors?|staples?)\\b`, 'i').test(msg)
      || new RegExp(`\\b${c}\\s+(commander|edh|staples?)\\b`, 'i').test(msg)
      || new RegExp(`\\bbest\\s+${c}\\b`, 'i').test(msg)),
    build: msg => {
      const color = MTG_COLORS.find(c => new RegExp(`\\b${c}\\b`, 'i').test(msg))!;
      const slug = `best-${color}-cards-magic-the-gathering`;
      const item = getContentIndex().find(i => i.id === `blog:${slug}`);
      if (!item) {
        return buildSearchFallback(msg);
      }
      return {
        answer: `${answerOpener()} The full ${color}-color staples writeup (Commander + Standard) covers removal, card draw, ramp/utility, creatures, and budget alternatives. Each entry calls out format legality where it matters (e.g. Fierce Guardianship is Commander-only).\n\n- **[${item.title}](${item.href})** — ${item.summary}`,
        recommendedLinks: [{ title: item.title, href: item.href, summary: item.summary, score: 0.95 }],
        matchedTopics: ['mtg', 'card-guides', `mtg-${color}`],
        confidence: 0.92,
        source: 'local',
      };
    },
  };
}

function intentMtgStandardMeta(): Intent {
  return {
    name: 'mtg-standard-meta',
    match: msg => containsAny(msg, ['standard meta', 'standard deck', 'best standard', 'post-ban', 'post ban', 'cori-steel', 'cori steel', 'standard tier list', 'standard 2026', 'mtg standard'])
      || (msg.includes('standard') && containsAny(msg, ['mtg', 'magic the gathering', 'meta', 'ban'])),
    build: () => {
      const links = findByKeywords(['standard post ban', 'standard meta', 'cori-steel', 'selesnya landfall']).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} The May 18 2026 Standard ban wave hit 10 cards in one shot — biggest swing since Affinity. Izzet Prowess is dead, Selesnya Landfall (the Pro Tour Strixhaven winner) is the new benchmark, and Mono-Green Landfall surged. Our breakdown covers what survived, what to brew, and which sideboard slots are suddenly free.\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['mtg', 'format-guides', 'standard'],
        confidence: 0.93,
        source: 'local',
      };
    },
  };
}

function intentMtgProTour(): Intent {
  return {
    name: 'mtg-pro-tour',
    match: msg => containsAny(msg, ['pro tour', 'selesnya landfall', 'nathan steuer', 'landfall deck', 'pro tour deck', 'tournament winner mtg']),
    build: () => {
      const links = findByKeywords(['selesnya landfall', 'pro tour strixhaven', 'nathan steuer']).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} Nathan Steuer took Pro Tour Strixhaven with Selesnya Landfall in a meta where 49% of the field was on Izzet shells. The deck guide covers the core engine, sideboarding plan, why landfall beat the Izzet wall, and how to tune it for paper Standard now that the bans wiped the field.\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['mtg', 'deck-guides', 'pro-tour'],
        confidence: 0.93,
        source: 'local',
      };
    },
  };
}

function intentMtgSet(): Intent {
  return {
    name: 'mtg-set',
    match: msg => containsAny(msg, ['secrets of strixhaven', 'strixhaven', 'new mtg set', 'latest mtg set', 'ssh tier list', 'best strixhaven', 'flow state'])
      || (msg.includes('set') && containsAny(msg, ['mtg', 'magic the gathering', 'tier list', 'review'])),
    build: () => {
      const links = findByKeywords(['secrets of strixhaven', 'strixhaven', 'set tier list']).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} Secrets of Strixhaven (April 24, 2026) shipped 270+ cards but only ~20 actually matter for Standard. The tier list calls out the real S-tier picks (Flow State is the uncommon that defines half the format), which mythics flopped, and how the May 18 bans reshaped the answer.\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['mtg', 'set-releases', 'strixhaven'],
        confidence: 0.92,
        source: 'local',
      };
    },
  };
}

function intentMtgCommander(): Intent {
  return {
    name: 'mtg-commander',
    match: msg => containsAny(msg, ['commander format', 'edh format', 'commander deck', 'edh deck', 'best commander', 'commander brackets', 'game changers', 'bracket system']),
    build: () => {
      const links = findByKeywords(['commander', 'edh', 'bracket system']).map(toRecommendedLink);
      const glossary = getContentIndex().find(i => i.id === 'page:glossary-mtg');
      const allLinks = glossary
        ? [{ title: glossary.title, href: glossary.href, summary: glossary.summary, score: 0.9 }, ...links]
        : links;
      return {
        answer: `${answerOpener()} Commander (EDH) is MTG's largest format. As of 2025 the Commander Rules Committee was replaced by the **Commander Format Panel** under WotC, and the new **Bracket System (1-5)** plus the **Game Changers list** are the official way to gauge deck power. Our color guides cover the eternal Commander staples; the MTG glossary defines Bracket System, Game Changers, Partner, Companion, and more.\n\n${joinLinks(allLinks)}`,
        recommendedLinks: allLinks,
        matchedTopics: ['mtg', 'format-guides', 'commander'],
        confidence: 0.88,
        source: 'local',
      };
    },
  };
}

function intentMtgFormat(): Intent {
  return {
    name: 'mtg-format',
    match: msg => containsAny(msg, ['what is modern', 'modern format', 'what is pioneer', 'pioneer format', 'what is pauper', 'pauper format', 'what is limited', 'limited format', 'draft format', 'sealed format', 'what is standard'])
      || (msg.includes('mtg') && containsAny(msg, ['modern', 'pioneer', 'pauper', 'limited', 'draft', 'sealed'])),
    build: () => {
      const glossary = getContentIndex().find(i => i.id === 'page:glossary-mtg');
      const mtgBlog = getContentIndex().find(i => i.id === 'page:mtg-blog');
      const links: RecommendedLink[] = [];
      if (glossary) links.push({ title: glossary.title, href: glossary.href, summary: glossary.summary, score: 0.95 });
      if (mtgBlog) links.push({ title: mtgBlog.title, href: mtgBlog.href, summary: mtgBlog.summary, score: 0.85 });
      return {
        answer: `${answerOpener()} Every MTG format has its own legality rules, ban list, and power level. The MTG glossary defines Standard, Modern, Pioneer, Pauper, Commander, Legacy, Vintage, Limited, Draft, and Sealed in one place. For Standard specifically, see the current meta post.\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['mtg', 'format-guides'],
        confidence: 0.85,
        source: 'local',
      };
    },
  };
}

function intentMtgBans(): Intent {
  return {
    name: 'mtg-bans',
    match: msg => containsAny(msg, ['banned cards', 'ban list', 'banned and restricted', 'recent bans', 'cori-steel ban'])
      || (msg.includes('ban') && containsAny(msg, ['mtg', 'magic the gathering', 'standard', 'modern', 'pioneer', 'pauper'])),
    build: () => {
      const links = findByKeywords(['standard post ban', 'ban', 'banned']).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} The most recent B&R was **May 18, 2026** — 10 Standard bans (Abuelo's Awakening, Cori-Steel Cutter, Heartfire Hero, Hopeless Nightmare, Monstrous Rage, Proft's Eidetic Memory, Screaming Nemesis, This Town Ain't Big Enough, Up the Beanstalk, Vivi Ornitier), plus Cori-Steel Cutter in Pioneer and Modern moves (Phlage banned, Violent Outburst and Umezawa's Jitte unbanned). [Verify current with Wizards' official list.]\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['mtg', 'events-updates', 'ban-list'],
        confidence: 0.9,
        source: 'local',
      };
    },
  };
}

// ===================== SHARED / META INTENTS =====================

function intentGlossary(): Intent {
  return {
    name: 'glossary',
    match: msg => /^what\s+(is|are|does)\s+/i.test(msg) || /^define\s+/i.test(msg) || msg.includes('what does') || msg.includes('what means'),
    build: (msg, path) => {
      const game = pathGame(path);
      const mtgTerms = ['commander', 'edh', 'standard', 'modern', 'pioneer', 'pauper', 'mulligan', 'sideboard', 'planeswalker', 'counterspell', 'mill', 'reanimator', 'aggro', 'midrange', 'tempo', 'ramp', 'tutor', 'wheel', 'board wipe', 'lifelink', 'deathtouch', 'flash', 'haste', 'trample', 'ward', 'hexproof', 'cantrip', 'stack', 'etb', 'foil', 'reserved list', 'universes beyond'];
      const crkTerms = ['cookie', 'beascuit', 'topping', 'tart', 'soulstone', 'crystal', 'magic candy', 'awakened', 'beast', 'legendary', 'ancient', 'charge', 'magic', 'ambush', 'defense', 'healing', 'support', 'bomber', 'arena', 'guild battle', 'cake tower', 'beast-yeast', 'cookiechat', 'affection', 'treasure'];

      const matchesMtg = mtgTerms.some(t => msg.includes(t));
      const matchesCrk = crkTerms.some(t => msg.includes(t));
      const preferMtg = game === 'magic-the-gathering' || (matchesMtg && !matchesCrk);
      const preferCrk = game === 'cookie-run-kingdom' || (matchesCrk && !matchesMtg);

      const glossaryMtg = getContentIndex().find(i => i.id === 'page:glossary-mtg')!;
      const glossaryCrk = getContentIndex().find(i => i.id === 'page:glossary-crk')!;

      const links: RecommendedLink[] = preferMtg
        ? [{ title: glossaryMtg.title, href: glossaryMtg.href, summary: glossaryMtg.summary, score: 0.95 }]
        : preferCrk
        ? [{ title: glossaryCrk.title, href: glossaryCrk.href, summary: glossaryCrk.summary, score: 0.95 }]
        : [
            { title: glossaryMtg.title, href: glossaryMtg.href, summary: glossaryMtg.summary, score: 0.85 },
            { title: glossaryCrk.title, href: glossaryCrk.href, summary: glossaryCrk.summary, score: 0.85 },
          ];

      const fallback = searchContent(msg.replace(/^(what\s+(is|are|does)\s+|define\s+|what\s+means\s+)/i, ''), 3).map(toRecommendedLink);
      const allLinks = [...links, ...fallback].slice(0, 4);

      return {
        answer: `${answerOpener()} Our glossary pages define every major term in plain English with cross-links to the relevant guides. If your question is more specific, the search below probably caught it.\n\n${joinLinks(allLinks)}`,
        recommendedLinks: allLinks,
        matchedTopics: ['glossary', preferMtg ? 'mtg' : preferCrk ? 'crk' : 'both'],
        confidence: 0.85,
        source: 'local',
      };
    },
  };
}

function intentWhatToRead(): Intent {
  return {
    name: 'what-to-read',
    match: msg => containsAny(msg, ['what should i read', 'what next', 'recommend', 'suggest a guide', 'show me guides', 'latest']),
    build: (_msg, path) => {
      // pathGame returns the canonical slug; display name comes from the registry.
      const slug = pathGame(path);
      const all = topInCategory('blog', 8);
      const filtered = slug ? all.filter(r => r.item.href.includes(`/blog/${slug}/`)) : all;
      const links = (filtered.length > 0 ? filtered : all).slice(0, 5).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} ${slug ? `Latest ${gameName(slug)} guides on the blog` : 'Latest guides across all our games'}, freshest first.\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['blog', 'navigation'],
        confidence: 0.85,
        source: 'local',
      };
    },
  };
}

const INTENTS: Intent[] = [
  // MTG first when message has unambiguous MTG signal — these matchers are narrow.
  intentMtgColorCards(),
  intentMtgProTour(),
  intentMtgSet(),
  intentMtgStandardMeta(),
  intentMtgBans(),
  intentMtgCommander(),
  intentMtgFormat(),
  // CRK
  intentCodes(),
  intentCrkTierList(),
  intentArenaTeam(),
  intentGuildBattle(),
  intentCrkBeginner(),
  intentToppings(),
  intentBeascuits(),
  intentCakeTower(),
  intentCookieChat(),
  intentTreasures(),
  intentCrkPatchUpdate(),
  intentSpecificCookie(),
  // Shared
  intentGlossary(),
  intentWhatToRead(),
];

export function matchIntent(msg: string, path?: string): Intent | undefined {
  return INTENTS.find(i => i.match(msg, path));
}

// ---------- Fallback responses ----------

export function buildSearchFallback(message: string): AssistantResponse {
  const links = searchContent(message, 5).map(toRecommendedLink);
  if (links.length === 0) return buildMissingContent(message);
  const high = links[0].score > 0.6;
  return {
    answer: high
      ? `${answerOpener()} I'm not 100% sure I caught your exact question, but these guides look like a strong match.\n\n${joinLinks(links)}`
      : `I don't have a perfect match for that on the site yet, but these are the closest guides I can point you at:\n\n${joinLinks(links)}\n\nIf this isn't what you're after, try asking about a specific game — a Cookie or build (CRK), a color or format (MTG), a boss or build (Elden Ring, BG3), or any of the other games we cover — or browse the blog.`,
    recommendedLinks: links,
    matchedTopics: ['search'],
    confidence: high ? 0.6 : 0.35,
    source: 'local',
  };
}

export function buildMissingContent(_message: string): AssistantResponse {
  const links = topInCategory('blog', 3).map(toRecommendedLink);
  return {
    answer: `I don't have content on that yet. I won't guess at current patch details, codes, card prices, ban statuses, or release info that aren't on the site — but here's where to browse for what we do have:\n\n- **[Mythras Blog](/blog)** — every published guide across all ${GAMES.length} games we cover, fresh-first\n- **[CRK Gear Guide](/gear-guide)** — builds for 167+ Cookies\n- **[CRK Glossary](/glossary/cookie-run-kingdom)** and **[MTG Glossary](/glossary/magic-the-gathering)** — term definitions\n\n${links.length > 0 ? '**Latest:**\n' + joinLinks(links) : ''}`,
    recommendedLinks: [
      { title: 'Mythras Blog', href: '/blog', summary: 'All published guides across every game we cover.', score: 0.5 },
      { title: 'CRK Gear Guide', href: '/gear-guide', summary: 'Build guides for 167+ Cookies.', score: 0.5 },
      { title: 'MTG Blog Hub', href: '/blog/magic-the-gathering', summary: 'All MTG guides, freshest first.', score: 0.5 },
      ...links,
    ],
    matchedTopics: ['missing-content'],
    confidence: 0.2,
    source: 'local',
  };
}

export function buildGreeting(): AssistantResponse {
  return {
    answer: `Hey! I'm the Mythras assistant. I answer from what's actually on the site, across all ${GAMES.length} games we cover — from **Cookie Run: Kingdom** and **Magic: The Gathering** to **Elden Ring**, **Baldur's Gate 3**, and **Zelda**. Builds, tier lists, beginner guides, meta, and more. Ask me anything, or try one of the suggested prompts below.`,
    recommendedLinks: [],
    matchedTopics: ['greeting'],
    confidence: 1,
    source: 'local',
  };
}
