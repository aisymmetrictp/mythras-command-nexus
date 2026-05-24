// Assistant runtime config.
// In static-export builds, environment variables are baked in at `npm run build` time.
// Public-readable vars must be prefixed with NEXT_PUBLIC_ to be available client-side.
//
// Provider selection:
//   NEXT_PUBLIC_ASSISTANT_PROVIDER=local   (default — no API key required)
//   NEXT_PUBLIC_ASSISTANT_PROVIDER=api     (calls /api/assistant — requires server runtime + API key)
//
// AI provider (only used when ASSISTANT_PROVIDER=api):
//   AI_PROVIDER=openai|anthropic|groq|openrouter
//   AI_MODEL=<model id>
//   OPENAI_API_KEY=<server-only>
//   ANTHROPIC_API_KEY=<server-only>
//   GROQ_API_KEY=<server-only>
//   OPENROUTER_API_KEY=<server-only>

export type ProviderName = 'local' | 'api';

export interface AssistantConfig {
  provider: ProviderName;
  /** Endpoint the client posts to when provider === 'api'. */
  apiPath: string;
  /** Max conversation turns kept client-side. */
  historyLimit: number;
  /** localStorage key for chat persistence. */
  storageKey: string;
}

function readProvider(): ProviderName {
  const raw = process.env.NEXT_PUBLIC_ASSISTANT_PROVIDER?.toLowerCase().trim();
  if (raw === 'api') return 'api';
  return 'local';
}

export const ASSISTANT_CONFIG: AssistantConfig = {
  provider: readProvider(),
  apiPath: '/api/assistant',
  historyLimit: 20,
  storageKey: 'mythras-assistant-history-v1',
};
