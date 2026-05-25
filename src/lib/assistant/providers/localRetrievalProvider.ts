// Local retrieval provider — runs entirely client-side. No API key required.
// Walks intent matchers first, falls back to fuzzy search across the content index.
import type { AssistantProvider, AssistantRequest, AssistantResponse } from '../types';
import { matchIntent, buildSearchFallback, buildGreeting } from '../responseTemplates';

const GREETING_PATTERNS = [
  /^(hi|hey|hello|yo|sup)\b/i,
  /^(good (morning|afternoon|evening))\b/i,
];

function isGreeting(msg: string): boolean {
  return GREETING_PATTERNS.some(p => p.test(msg.trim()));
}

export const localRetrievalProvider: AssistantProvider = {
  name: 'local',

  async answer(req: AssistantRequest): Promise<AssistantResponse> {
    const raw = req.message.trim();
    if (raw.length === 0) {
      return {
        answer: 'Ask me a question — toppings, team comps, tier list, codes, anything Cookie Run: Kingdom.',
        recommendedLinks: [],
        matchedTopics: [],
        confidence: 1,
        source: 'local',
      };
    }

    if (isGreeting(raw) && raw.length < 30) {
      return buildGreeting();
    }

    const lower = raw.toLowerCase();
    const intent = matchIntent(lower, req.currentPath);
    if (intent) {
      const res = intent.build(lower, req.currentPath);
      // Tag with the matched intent name for transparency / future analytics.
      res.matchedTopics = Array.from(new Set([...res.matchedTopics, intent.name]));
      return res;
    }

    return buildSearchFallback(raw);
  },
};
