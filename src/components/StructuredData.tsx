// Stable @id values so other schema types can reference Organization + Person
// without re-declaring the full entity each time.
import { GAMES } from '@/data/blog/games';

export const MYTHRAS_ORG_ID = 'https://gamertagmythras.com/#organization';
export const MYTHRAS_PERSON_ID = 'https://gamertagmythras.com/#person-mythras';
export const MYTHRAS_WEBSITE_ID = 'https://gamertagmythras.com/#website';

// knowsAbout derives from the game registry (every covered game) plus the
// TCG/channel topics that aren't blog verticals — stays current automatically.
const KNOWS_ABOUT = [
  ...GAMES.map(g => g.name),
  'Pokemon Trading Card Game',
  'Disney Lorcana',
  'Trading card game strategy',
  'Mobile gacha games',
];

export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': MYTHRAS_ORG_ID,
    name: 'Mythras // The Multiverse',
    alternateName: ['Mythras', 'GamertagMythras', 'CookieRun Mythras'],
    url: 'https://gamertagmythras.com',
    logo: 'https://gamertagmythras.com/images/mythras-logo-new.png',
    foundingDate: '2022',
    sameAs: [
      'https://www.youtube.com/@cookierunmythras',
      'https://www.youtube.com/@gamertagmythras',
      'https://www.youtube.com/@mythrasgaming',
      'https://www.youtube.com/@pokemonmythras',
      'https://www.youtube.com/@lorcanamythras',
      'https://www.twitch.tv/3mythras3',
      'https://twitter.com/MythrasCookie',
      'https://discord.gg/mFg8mbxtTS',
    ],
    knowsAbout: KNOWS_ABOUT,
    description: 'Independent gaming creator brand. Long-form strategy guides, tier lists, deck techs, and per-Cookie gear builds across 24 games — from Cookie Run: Kingdom and Magic: The Gathering to Elden Ring, Baldur\'s Gate 3, and Zelda.',
    founder: { '@id': MYTHRAS_PERSON_ID },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': MYTHRAS_PERSON_ID,
    name: 'Mythras',
    alternateName: 'GamertagMythras',
    url: 'https://gamertagmythras.com/about',
    image: 'https://gamertagmythras.com/images/mythras-logo-new.png',
    jobTitle: 'Gaming Creator & Strategy Writer',
    description: 'Gaming creator behind the Mythras // The Multiverse brand. Covers 24 games — Cookie Run: Kingdom, Magic: The Gathering, Elden Ring, Baldur\'s Gate 3, Zelda, and more — across five YouTube channels plus the gamertagmythras.com blog. Posts are written from actual gameplay testing, not aggregated.',
    sameAs: [
      'https://www.youtube.com/@cookierunmythras',
      'https://www.youtube.com/@gamertagmythras',
      'https://www.youtube.com/@mythrasgaming',
      'https://www.youtube.com/@pokemonmythras',
      'https://www.youtube.com/@lorcanamythras',
      'https://www.twitch.tv/3mythras3',
      'https://twitter.com/MythrasCookie',
    ],
    knowsAbout: [...KNOWS_ABOUT, 'Commander format', 'MTG Standard'],
    worksFor: { '@id': MYTHRAS_ORG_ID },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Sitewide WebSite entity — tells search/answer engines the site's identity and
 * who publishes it. Emitted once from the root layout next to Organization.
 */
export function WebSiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': MYTHRAS_WEBSITE_ID,
    name: 'GamerTag Mythras',
    alternateName: 'Mythras // The Multiverse',
    url: 'https://gamertagmythras.com',
    description: 'Strategy guides, tier lists, and build guides across 24 games, written from actual gameplay by the Mythras team.',
    publisher: { '@id': MYTHRAS_ORG_ID },
    inLanguage: 'en-US',
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url?: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebPageSchema({ name, description, url }: { name: string; description: string; url: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    publisher: {
      '@type': 'Organization',
      name: 'Mythras // The Multiverse',
      url: 'https://gamertagmythras.com',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function DefinedTermSetSchema({
  name,
  description,
  url,
  terms,
}: {
  name: string;
  description: string;
  url: string;
  terms: { id: string; term: string; definition: string }[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': url + '#termset',
    name,
    description,
    url,
    hasDefinedTerm: terms.map(t => ({
      '@type': 'DefinedTerm',
      '@id': `${url}#${t.id}`,
      name: t.term,
      description: t.definition,
      inDefinedTermSet: url + '#termset',
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function HowToSchema({
  name,
  description,
  steps,
  url,
}: {
  name: string;
  description: string;
  url: string;
  steps: { name: string; text: string; url?: string }[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    url,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url && { url: s.url }),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ItemListSchema({
  name,
  description,
  url,
  items,
}: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url?: string; description?: string }[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    url,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      ...(it.url && { url: it.url }),
      ...(it.description && { description: it.description }),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function VideoSchema({ name, description, thumbnailUrl, uploadDate, contentUrl }: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    contentUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Mythras // The Multiverse',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
