// Stable @id values so other schema types can reference Organization + Person
// without re-declaring the full entity each time.
export const MYTHRAS_ORG_ID = 'https://gamertagmythras.com/#organization';
export const MYTHRAS_PERSON_ID = 'https://gamertagmythras.com/#person-mythras';

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
    knowsAbout: [
      'Cookie Run: Kingdom',
      'Magic: The Gathering',
      'Pokemon Trading Card Game',
      'Disney Lorcana',
      'Trading card game strategy',
      'Mobile gacha games',
    ],
    description: 'Independent gaming creator brand. Long-form strategy guides, tier lists, deck techs, and per-Cookie gear builds for Cookie Run: Kingdom and Magic: The Gathering.',
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
    description: 'Gaming creator behind the Mythras // The Multiverse brand. Covers Cookie Run: Kingdom, Magic: The Gathering, Pokemon TCG, and Disney Lorcana across five YouTube channels plus the gamertagmythras.com blog. Posts are written from actual gameplay testing, not aggregated.',
    sameAs: [
      'https://www.youtube.com/@cookierunmythras',
      'https://www.youtube.com/@gamertagmythras',
      'https://www.youtube.com/@mythrasgaming',
      'https://www.youtube.com/@pokemonmythras',
      'https://www.youtube.com/@lorcanamythras',
      'https://www.twitch.tv/3mythras3',
      'https://twitter.com/MythrasCookie',
    ],
    knowsAbout: [
      'Cookie Run: Kingdom',
      'Magic: The Gathering',
      'Commander format',
      'MTG Standard',
      'Pokemon Trading Card Game',
      'Disney Lorcana',
    ],
    worksFor: { '@id': MYTHRAS_ORG_ID },
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
