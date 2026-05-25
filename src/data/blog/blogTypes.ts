export type BlogCategorySlug =
  // Cookie Run: Kingdom specific
  | 'cookie-guides'
  | 'team-builds'
  | 'events-updates'
  // Magic: The Gathering specific
  | 'deck-guides'
  | 'card-guides'
  | 'format-guides'
  | 'set-releases'
  // Game-agnostic
  | 'beginner-guides'
  | 'advanced-strategy'
  | 'tier-lists';

export type UpdateFrequency = 'weekly' | 'monthly' | 'quarterly' | 'evergreen';

export type SchemaType = 'BlogPosting' | 'FAQPage' | 'HowTo' | 'Article';

export type BlogCategory = {
  slug: BlogCategorySlug;
  name: string;
  description: string;
  icon: string;
};

export type Game = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  accentColor: string;
  active: boolean;
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogInternalLink = {
  href: string;
  anchor: string;
};

export type BlogExternalSource = {
  url: string;
  title: string;
};

export type BlogTocEntry = {
  id: string;
  label: string;
  level: 2 | 3;
};

export type BlogPost = {
  slug: string;
  game: string;
  category: BlogCategorySlug;
  topicCluster: string;

  title: string;
  metaDescription: string;
  excerpt: string;
  featuredImagePrompt: string;

  publishDate: string;
  lastUpdated: string;

  primaryKeyword: string;
  secondaryKeywords: string[];

  schemaType: SchemaType;
  updateFrequency: UpdateFrequency;
  evergreen: boolean;
  readingTimeMin: number;

  toc: BlogTocEntry[];
  content: string;
  faq: BlogFaq[];

  internalLinks: BlogInternalLink[];
  externalSources: BlogExternalSource[];

  /**
   * Optional 1-3 sentence direct-answer summary rendered above the TOC.
   * Critical for AI Overview / Perplexity / ChatGPT citation extraction.
   * If present, also emitted as `speakable` schema.
   */
  tldr?: string;

  /**
   * Optional structured ranking/list payload for "best X" or tier-list posts.
   * Rendered as `ItemList` JSON-LD so Google rich results and AI systems can
   * extract the ranked entries verbatim.
   */
  itemList?: {
    name: string;
    items: { name: string; url?: string; description?: string }[];
  };
};

export type BlogPostListItem = Pick<
  BlogPost,
  | 'slug'
  | 'game'
  | 'category'
  | 'title'
  | 'excerpt'
  | 'publishDate'
  | 'lastUpdated'
  | 'readingTimeMin'
  | 'primaryKeyword'
  | 'featuredImagePrompt'
>;
