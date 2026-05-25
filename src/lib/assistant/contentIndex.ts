// Builds the searchable content index from existing site data at module-load time.
// No build-step required — the data is already typed and in memory.
import type { ContentIndexItem } from './types';
import { ALL_COOKIES } from '@/data/cookieData';
import { ALL_POSTS } from '@/data/blog/blogIndex';
import { GEAR_CATEGORIES } from '@/data/gearData';
import { channels } from '@/data/mockData';

const SITE_ORIGIN = 'https://gamertagmythras.com';

function makeBlogItems(): ContentIndexItem[] {
  return ALL_POSTS.map(p => ({
    id: `blog:${p.slug}`,
    title: p.title,
    href: `/blog/${p.game}/${p.slug}`,
    category: 'blog',
    topicCluster: p.topicCluster,
    summary: p.excerpt,
    keywords: [
      p.primaryKeyword,
      ...p.secondaryKeywords,
      p.category,
      p.topicCluster,
    ],
    lastUpdated: p.lastUpdated,
    priority: p.evergreen ? 0.8 : 0.9, // time-sensitive ranks slightly higher when fresh
    relatedSlugs: p.internalLinks.map(l => l.href),
  }));
}

function makeCookieItems(): ContentIndexItem[] {
  return ALL_COOKIES.map(c => {
    const buildKeywords: string[] = [];
    if (c.build) {
      if (c.build.toppings) buildKeywords.push(c.build.toppings, 'toppings');
      if (c.build.beascuit) buildKeywords.push(c.build.beascuit, 'beascuit');
      if (c.build.tart) buildKeywords.push(c.build.tart, 'tart');
    }
    const summary = c.build
      ? `${c.rarity} ${c.type} Cookie. Best build: ${c.build.toppings} toppings, ${c.build.beascuit} beascuit.`
      : `${c.rarity} ${c.type} Cookie. Build guide in progress.`;
    return {
      id: `cookie:${c.slug}`,
      title: `${c.name} — Gear Guide`,
      href: `/gear-guide/${c.slug}`,
      category: 'cookie',
      topicCluster: `cookie-${c.rarity.toLowerCase().replace(/\s+/g, '-')}`,
      summary,
      keywords: [
        c.name,
        c.name.replace(' Cookie', ''),
        c.rarity,
        c.type,
        `${c.type} cookie`,
        `${c.rarity} cookie`,
        'gear guide',
        'build',
        ...buildKeywords,
      ],
      priority: c.build ? 0.6 : 0.3,
    };
  });
}

function makeGearCategoryItems(): ContentIndexItem[] {
  return GEAR_CATEGORIES.map(cat => ({
    id: `gear-category:${cat.slug}`,
    title: `${cat.name} Guide — Cookie Run: Kingdom`,
    href: `/gear-guide/${cat.slug}`,
    category: 'gear-category',
    topicCluster: 'gear',
    summary: cat.description,
    keywords: [
      cat.name,
      cat.slug,
      ...cat.types.map(t => t.name),
      ...cat.types.map(t => t.fullName),
      'gear',
      'cookie run kingdom',
    ],
    priority: 0.7,
  }));
}

function makeGearTypeItems(): ContentIndexItem[] {
  const items: ContentIndexItem[] = [];
  for (const cat of GEAR_CATEGORIES) {
    for (const t of cat.types) {
      items.push({
        id: `gear-type:${cat.slug}:${t.slug}`,
        title: `${t.fullName} — ${cat.name}`,
        href: `/gear-guide/${cat.slug}/${t.slug}`,
        category: 'gear-type',
        topicCluster: `gear-${cat.slug}`,
        summary: `${t.fullName} ${cat.name.slice(0, -1).toLowerCase()} — boosts ${t.stat}. ${t.description ?? ''}`.trim(),
        keywords: [t.name, t.fullName, t.stat, cat.name, `${t.name} ${cat.name.slice(0, -1).toLowerCase()}`],
        priority: 0.5,
      });
    }
  }
  return items;
}

const STATIC_PAGE_ITEMS: ContentIndexItem[] = [
  {
    id: 'page:home',
    title: 'Mythras // The Multiverse',
    href: '/',
    category: 'page',
    summary: 'The Mythras gaming hub — guides, channels, schedule, and community.',
    keywords: ['mythras', 'home', 'hub', 'multiverse'],
    priority: 0.5,
  },
  {
    id: 'page:blog',
    title: 'Mythras Blog',
    href: '/blog',
    category: 'page',
    summary: 'Weekly Cookie Run: Kingdom guides, tier lists, codes, and meta analysis.',
    keywords: ['blog', 'guides', 'tier list', 'meta', 'cookie run kingdom blog'],
    priority: 0.7,
  },
  {
    id: 'page:gear-guide',
    title: 'CookieRun Kingdom Gear Guide',
    href: '/gear-guide',
    category: 'page',
    summary: 'Build guides for 167+ Cookies — toppings, beascuits, tarts, and substats.',
    keywords: ['gear guide', 'builds', 'toppings', 'beascuits', 'tarts', 'all cookies', 'cookie run kingdom builds'],
    priority: 0.9,
  },
  {
    id: 'page:cake-tower',
    title: 'Cake Tower Guide',
    href: '/cake-tower',
    category: 'cake-tower',
    summary: 'Strategy and team comps for Decadent Choco and Endless Strawberry Towers.',
    keywords: ['cake tower', 'decadent choco', 'endless strawberry', 'tower', 'tower guide'],
    priority: 0.75,
  },
  {
    id: 'page:cake-tower-decadent',
    title: 'Decadent Choco Tower',
    href: '/cake-tower/decadent-choco',
    category: 'cake-tower',
    summary: 'Floor-by-floor strategy for Decadent Choco Tower.',
    keywords: ['decadent choco tower', 'decadent choco', 'choco tower', 'tower strategy'],
    priority: 0.7,
  },
  {
    id: 'page:cake-tower-endless',
    title: 'Endless Strawberry Tower',
    href: '/cake-tower/endless-strawberry',
    category: 'cake-tower',
    summary: 'Strategy and team comps for the Endless Strawberry Tower.',
    keywords: ['endless strawberry tower', 'endless strawberry', 'strawberry tower'],
    priority: 0.7,
  },
  {
    id: 'page:about',
    title: 'About Mythras',
    href: '/about',
    category: 'page',
    summary: 'Who Mythras is — five YouTube channels, the team, the mission.',
    keywords: ['about', 'mythras', 'channels', 'team', 'who'],
    priority: 0.3,
  },
  {
    id: 'page:contact',
    title: 'Contact Mythras',
    href: '/contact',
    category: 'page',
    summary: 'Send the Mythras team a message via form, Discord, or email.',
    keywords: ['contact', 'email', 'support', 'feedback', 'discord'],
    priority: 0.3,
  },
  // MTG-specific top-level pages
  {
    id: 'page:mtg-blog',
    title: 'Magic: The Gathering Blog',
    href: '/blog/magic-the-gathering',
    category: 'page',
    summary: 'Magic: The Gathering guides, color staples, Standard meta, Pro Tour coverage, and set tier lists.',
    keywords: ['mtg blog', 'magic the gathering blog', 'mtg guides', 'commander guides', 'standard meta', 'mtg deck guides'],
    priority: 0.9,
  },
  {
    id: 'page:glossary-crk',
    title: 'Cookie Run: Kingdom Glossary',
    href: '/glossary/cookie-run-kingdom',
    category: 'page',
    summary: 'Every CRK term defined — rarities, types, gear, currencies, modes, and systems.',
    keywords: ['crk glossary', 'cookie run kingdom glossary', 'what is beascuit', 'what is topping', 'cookie run terms', 'crk dictionary'],
    priority: 0.75,
  },
  {
    id: 'page:glossary-mtg',
    title: 'Magic: The Gathering Glossary',
    href: '/glossary/magic-the-gathering',
    category: 'page',
    summary: 'Every MTG term defined — formats, card types, mechanics, archetypes, Commander.',
    keywords: ['mtg glossary', 'magic the gathering glossary', 'what is commander', 'what is standard', 'what is edh', 'mtg terms', 'mtg dictionary'],
    priority: 0.75,
  },
  {
    id: 'page:assistant',
    title: 'Mythras Assistant',
    href: '/assistant',
    category: 'page',
    summary: 'Chat assistant powered by site content. Ask about CRK or MTG and get guide recommendations.',
    keywords: ['assistant', 'chat', 'ask', 'mythras assistant', 'help'],
    priority: 0.5,
  },
];

function makeChannelItems(): ContentIndexItem[] {
  return channels.map(c => ({
    id: `channel:${c.slug}`,
    title: `${c.name} Channel`,
    href: `/channels/${c.slug}`,
    category: 'channel',
    summary: c.description || `The ${c.name} channel by Mythras.`,
    keywords: [c.name, c.slug, 'youtube channel', 'channel', c.game || ''].filter(Boolean) as string[],
    priority: 0.4,
  }));
}

let _cached: ContentIndexItem[] | null = null;

export function getContentIndex(): ContentIndexItem[] {
  if (_cached) return _cached;
  _cached = [
    ...makeBlogItems(),
    ...makeCookieItems(),
    ...makeGearCategoryItems(),
    ...makeGearTypeItems(),
    ...makeChannelItems(),
    ...STATIC_PAGE_ITEMS,
  ];
  return _cached;
}

export function absoluteUrl(href: string): string {
  return href.startsWith('http') ? href : `${SITE_ORIGIN}${href}`;
}
