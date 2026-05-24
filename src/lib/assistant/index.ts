// Public entrypoint for the assistant. Picks the provider based on env config
// and exposes one `ask()` function the UI calls.
import { ASSISTANT_CONFIG } from './config';
import { localRetrievalProvider } from './providers/localRetrievalProvider';
import { aiApiProvider } from './providers/aiApiProvider';
import type { AssistantRequest, AssistantResponse, AssistantProvider } from './types';

function pickProvider(): AssistantProvider {
  switch (ASSISTANT_CONFIG.provider) {
    case 'api':
      return aiApiProvider;
    case 'local':
    default:
      return localRetrievalProvider;
  }
}

const provider = pickProvider();

export async function ask(req: AssistantRequest): Promise<AssistantResponse> {
  try {
    return await provider.answer(req);
  } catch (err) {
    // Fail soft: if the configured provider blows up (e.g. API route not yet
    // implemented in production), fall back to local retrieval so the UX
    // doesn't go blank on the user.
    if (provider.name === 'api') {
      console.warn('[assistant] API provider failed, falling back to local:', err);
      return localRetrievalProvider.answer(req);
    }
    throw err;
  }
}

export const activeProviderName = provider.name;

export type { AssistantRequest, AssistantResponse, ChatMessage, RecommendedLink } from './types';
