// AI API provider — proxies to /api/assistant which would call OpenAI/Anthropic/Groq/etc.
// Inactive in v1 (static-export builds; the API route returns a placeholder).
// Activate by:
//   1. Switching the site off `output: 'export'` in next.config.ts (or adding a Netlify Function).
//   2. Implementing the server-side LLM call in src/app/api/assistant/route.ts.
//   3. Setting NEXT_PUBLIC_ASSISTANT_PROVIDER=api and the relevant *_API_KEY server-side.
//
// API keys are NEVER read in this file. The browser fetches the endpoint;
// the server reads keys from process.env inside the route handler.

import type { AssistantProvider, AssistantRequest, AssistantResponse } from '../types';
import { ASSISTANT_CONFIG } from '../config';

export const aiApiProvider: AssistantProvider = {
  name: 'api',

  async answer(req: AssistantRequest): Promise<AssistantResponse> {
    const res = await fetch(ASSISTANT_CONFIG.apiPath, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => res.statusText);
      throw new Error(`Assistant API ${res.status}: ${text}`);
    }
    const data = (await res.json()) as AssistantResponse;
    return { ...data, source: 'api' };
  },
};
