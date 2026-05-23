export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mythras // The Multiverse',
    url: 'https://gamertagmythras.com',
    logo: 'https://gamertagmythras.com/images/mythras-logo-new.png',
    sameAs: [
      'https://www.youtube.com/@cookierunmythras',
      'https://www.youtube.com/@gamertagmythras',
      'https://www.youtube.com/@mythrasgaming',
      'https://www.youtube.com/@pokemonmythras',
      'https://www.youtube.com/@lorcanamythras',
    ],
    description: 'The ultimate gaming multiverse — CookieRun Kingdom gear guides, MTG, Pokemon, Lorcana, and more.',
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
