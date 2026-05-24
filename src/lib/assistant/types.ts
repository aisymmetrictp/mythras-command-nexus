// Public types for the Mythras website assistant.
// Both the local-retrieval provider and the future AI-API provider implement
// the same AssistantRequest -> AssistantResponse contract so the UI is provider-agnostic.

export type ContentCategory =
  | 'blog'
  | 'cookie'
  | 'gear-category'
  | 'gear-type'
  | 'cake-tower'
  | 'channel'
  | 'page';

export interface ContentIndexItem {
  /** Stable unique id within the index (e.g. "blog:timekeeper-toppings"). */
  id: string;
  title: string;
  /** Absolute path on the site (e.g. "/blog/cookie-run-kingdom/timekeeper-toppings"). */
  href: string;
  category: ContentCategory;
  /** Free-form sub-grouping for related-content suggestions. */
  topicCluster?: string;
  /** 1-2 sentence preview shown in suggestions / chat. */
  summary: string;
  /** Searchable terms. Heavily weighted in fuzzy matching. */
  keywords: string[];
  /** ISO date if known. Used for recency boosting. */
  lastUpdated?: string;
  /** Higher = more prominent. Used as a tiebreaker. */
  priority: number;
  /** Related content ids (or hrefs) for "you might also like" suggestions. */
  relatedSlugs?: string[];
}

export interface RecommendedLink {
  title: string;
  href: string;
  summary: string;
  /** Search score 0-1 (1 = perfect match). */
  score: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  /** Server-attached structured payload (links, topics, confidence). */
  recommendedLinks?: RecommendedLink[];
  matchedTopics?: string[];
  confidence?: number;
  timestamp: number;
}

export interface AssistantRequest {
  message: string;
  /** Most recent first OR full history; provider chooses. */
  history: ChatMessage[];
  /** Current page path so the provider can ground recommendations contextually. */
  currentPath?: string;
}

export interface AssistantResponse {
  /** Plain-text reply. May include markdown-style bold (`**foo**`) and inline links. */
  answer: string;
  recommendedLinks: RecommendedLink[];
  /** Topics/intents the provider detected in the user message. */
  matchedTopics: string[];
  /** 0-1, how confident the provider is in its answer. */
  confidence: number;
  /** Which provider produced this answer (for debugging / transparency). */
  source: 'local' | 'api';
}

export interface AssistantProvider {
  name: 'local' | 'api';
  answer(req: AssistantRequest): Promise<AssistantResponse>;
}
