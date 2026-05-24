// Intent detection + templated answer strings.
// The local provider walks intents top to bottom; first match wins.
// Each intent returns an `Intent` object the provider uses to search + format the answer.

import { searchContent, findByKeywords, topInCategory, toRecommendedLink } from './search';
import { getContentIndex } from './contentIndex';
import type { AssistantResponse, RecommendedLink, ContentIndexItem } from './types';
import { ALL_COOKIES } from '@/data/cookieData';

export interface Intent {
  name: string;
  /** Matches against the lowercased user message. */
  match: (msg: string) => boolean;
  /** Produces the AssistantResponse for the matched message. */
  build: (msg: string) => AssistantResponse;
}

function containsAny(msg: string, terms: string[]): boolean {
  return terms.some(t => msg.includes(t));
}

function joinLinks(links: RecommendedLink[]): string {
  if (links.length === 0) return '';
  return links.slice(0, 3).map(l => `- **[${l.title}](${l.href})** — ${l.summary}`).join('\n');
}

function answerOpener(): string {
  // Small rotating set of openers so the assistant doesn't sound robotic.
  const openers = [
    "Here's what I found in our content for that.",
    "Based on what's on Mythras right now, these guides look closest.",
    "Going off what's live on the site, here's where I'd point you.",
  ];
  return openers[Math.floor(Math.random() * openers.length)];
}

function detectCookieMention(msg: string): ContentIndexItem | undefined {
  // Try to match cookie name substrings. Prefer the longest match.
  const candidates = ALL_COOKIES
    .map(c => ({ name: c.name.toLowerCase(), short: c.name.replace(/ Cookie$/i, '').toLowerCase(), slug: c.slug }))
    .filter(c => msg.includes(c.name) || msg.includes(c.short));
  if (candidates.length === 0) return undefined;
  // Pick the longest match (so "dark enchantress cookie" beats "dark").
  candidates.sort((a, b) => b.name.length - a.name.length);
  const best = candidates[0];
  return getContentIndex().find(i => i.id === `cookie:${best.slug}`);
}

// ---------- Intent builders ----------

function intentCodes(): Intent {
  return {
    name: 'codes',
    match: msg => containsAny(msg, ['code', 'codes', 'redeem', 'free crystal', 'coupon', 'free reward']),
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

function intentTierList(): Intent {
  return {
    name: 'tier-list',
    match: msg => containsAny(msg, ['tier list', 'tier', 'best cookies', 'meta cookies', 'top cookies', 'who is the best']),
    build: () => {
      const links = findByKeywords(['tier list', 'meta', 'best cookies', 'investment priority']).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} The May 2026 tier list ranks every Cookie for PvE, Arena, and Guild Battle after the Timeline of Fate patch. The S+ picks anchor the current meta — Dark Enchantress, Timekeeper, Sugar Swan, Millennial Tree, Aegis Hollyberry.\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['tier-lists', 'meta'],
        confidence: 0.9,
        source: 'local',
      };
    },
  };
}

function intentArenaTeam(): Intent {
  return {
    name: 'arena-team',
    match: msg => containsAny(msg, ['arena', 'pvp', 'kingdom arena', 'arena team', 'arena comp', 'defense team']),
    build: msg => {
      const isF2P = containsAny(msg, ['f2p', 'free to play', 'no legendary', 'budget', 'cheap']);
      const queries = isF2P
        ? ['best f2p arena team', 'reroll', 'kingdom arena']
        : ['kingdom arena meta team', 'arena meta', 'timekeeper', 'dark enchantress'];
      const links = findByKeywords(queries).map(toRecommendedLink);
      const angle = isF2P
        ? "We have an F2P arena comp that clears Diamond without a single Legendary pull — Hollyberry + Pavlova + Pure Vanilla + Ash Salt + Black Sapphire."
        : "The current meta arena comp runs Aegis Hollyberry + Pure Vanilla + Dark Enchantress + Timekeeper + Sugar Swan. The full breakdown covers per-slot reasoning, treasures, and F2P swaps.";
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
    match: msg => containsAny(msg, ['guild battle', 'gb', 'red velvet dragon', 'avatar of destiny', 'machine god', 'machine-god', 'living abyss', 'boss']),
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

function intentBeginner(): Intent {
  return {
    name: 'beginner',
    match: msg => containsAny(msg, ['beginner', 'new player', 'just started', 'starter', 'reroll', 'first cookie', 'where do i start', 'getting started']),
    build: () => {
      const links = findByKeywords(['reroll', 'beginner', 'starting cookies', 'progression']).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} For new accounts in 2026, rerolling for one of the S+ Legendaries (Dark Enchantress, Timekeeper, Sugar Swan, Millennial Tree, Aegis Hollyberry) is genuinely worth 25 minutes. Once you've locked in your account, claim every active code from the codes list — that alone is roughly 18,000 Crystals on a fresh save.\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['beginner-guides', 'reroll'],
        confidence: 0.92,
        source: 'local',
      };
    },
  };
}

function intentToppings(): Intent {
  return {
    name: 'toppings',
    match: msg => containsAny(msg, ['topping', 'toppings', 'substat', 'searing raspberry', 'swift chocolate', 'solid almond']),
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
    match: msg => containsAny(msg, ['cake tower', 'decadent choco', 'endless strawberry', 'tower']),
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
    match: msg => containsAny(msg, ['cookiechat', 'cookie chat', 'affection', 'favorability', 'gift', 'favorite gift']),
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
    name: 'treasures',
    match: msg => containsAny(msg, ['treasure', 'treasures', 'squishy jelly watch', 'old pilgrim']),
    build: () => {
      const links = findByKeywords(['treasures', 'treasure guide']).map(toRecommendedLink);
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

function intentPatchUpdate(): Intent {
  return {
    name: 'patch-update',
    match: msg => containsAny(msg, ['timeline of fate', 'v7.4', '7.4', 'latest update', 'new update', 'patch', 'what changed', 'ash salt', 'timekeeper release']),
    build: () => {
      const links = findByKeywords(['timeline of fate', 'patch', 'update', 'timekeeper']).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} The Timeline of Fate update (v7.4, 2026-05-07) added Timekeeper Cookie (Legendary anti-revive), Ash Salt (Epic debuffer), the 6-Star Legendary growth system, Arcade Arena seasons, and bumped Choco Cake Tower to 55 trays. Big patch — the breakdown explains what actually matters for your account level.\n\n${joinLinks(links)}`,
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

function intentWhatToRead(): Intent {
  return {
    name: 'what-to-read',
    match: msg => containsAny(msg, ['what should i read', 'what next', 'recommend', 'suggest', 'show me guides', 'latest']),
    build: () => {
      const links = topInCategory('blog', 5).map(toRecommendedLink);
      return {
        answer: `${answerOpener()} These are the most recent guides on the blog, freshest first.\n\n${joinLinks(links)}`,
        recommendedLinks: links,
        matchedTopics: ['blog', 'navigation'],
        confidence: 0.85,
        source: 'local',
      };
    },
  };
}

const INTENTS: Intent[] = [
  intentCodes(),
  intentTierList(),
  intentArenaTeam(),
  intentGuildBattle(),
  intentBeginner(),
  intentToppings(),
  intentBeascuits(),
  intentCakeTower(),
  intentCookieChat(),
  intentTreasures(),
  intentPatchUpdate(),
  intentSpecificCookie(),
  intentWhatToRead(),
];

export function matchIntent(msg: string): Intent | undefined {
  return INTENTS.find(i => i.match(msg));
}

// ---------- Fallback responses ----------

export function buildSearchFallback(message: string): AssistantResponse {
  const links = searchContent(message, 5).map(toRecommendedLink);
  if (links.length === 0) return buildMissingContent(message);
  const high = links[0].score > 0.6;
  return {
    answer: high
      ? `${answerOpener()} I'm not 100% sure I caught your exact question, but these guides look like a strong match.\n\n${joinLinks(links)}`
      : `I don't have a perfect match for that on the site yet, but these are the closest guides I can point you at:\n\n${joinLinks(links)}\n\nIf this isn't what you're after, try asking about Cookies by name, team comps (Arena / Guild Battle), or systems (toppings, beascuits, Cake Tower).`,
    recommendedLinks: links,
    matchedTopics: ['search'],
    confidence: high ? 0.6 : 0.35,
    source: 'local',
  };
}

export function buildMissingContent(_message: string): AssistantResponse {
  const links = topInCategory('blog', 3).map(toRecommendedLink);
  return {
    answer: `I don't have content on that yet. I won't guess at current patch details, codes, or release info that aren't on the site — but here's where to browse for what we do have:\n\n- **[Mythras Blog](/blog)** — every published guide, fresh-first\n- **[Gear Guide](/gear-guide)** — builds for 167+ Cookies\n- **[Cake Tower](/cake-tower)** — tower strategy and comps\n\n${links.length > 0 ? '**Latest:**\n' + joinLinks(links) : ''}`,
    recommendedLinks: [
      { title: 'Mythras Blog', href: '/blog', summary: 'All published guides, freshest first.', score: 0.5 },
      { title: 'Gear Guide', href: '/gear-guide', summary: 'Build guides for 167+ Cookies.', score: 0.5 },
      ...links,
    ],
    matchedTopics: ['missing-content'],
    confidence: 0.2,
    source: 'local',
  };
}

export function buildGreeting(): AssistantResponse {
  return {
    answer: `Hey! I'm the Mythras assistant. I answer from what's actually on the site — Cookie Run: Kingdom guides, builds, team comps, tier lists, codes. Ask me anything, or try one of the suggested prompts below.`,
    recommendedLinks: [],
    matchedTopics: ['greeting'],
    confidence: 1,
    source: 'local',
  };
}
