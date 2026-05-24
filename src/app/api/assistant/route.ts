// Placeholder route handler for the assistant API.
//
// v1 of the assistant runs ENTIRELY client-side via the local retrieval provider —
// the chat UI calls `lib/assistant/index.ts#ask()` directly, no HTTP round-trip.
// This file exists so the aiApiProvider has a target when AI mode is enabled.
//
// Static-export limitations:
//   - Next.js `output: 'export'` can only serve pre-rendered route handlers via GET.
//   - A real LLM-backed POST endpoint needs one of:
//       (a) switch off `output: 'export'` and deploy with a Node runtime, OR
//       (b) move this logic into a Netlify Function at `netlify/functions/assistant.ts`,
//           OR an edge function, then point ASSISTANT_CONFIG.apiPath at that URL.
//
// When you wire AI mode:
//   1. Pick a deployment path (a) or (b).
//   2. Implement the POST handler here (or in the Netlify Function) by reading
//      env vars (OPENAI_API_KEY etc.) server-side and forwarding to the LLM.
//   3. Set NEXT_PUBLIC_ASSISTANT_PROVIDER=api in your environment.
//   4. The same UI contract (AssistantRequest -> AssistantResponse) flows through
//      unchanged.

export const dynamic = 'force-static';

export function GET() {
  return Response.json(
    {
      status: 'not-active',
      provider: 'local',
      message:
        'Assistant API mode is not active in this build. The site currently uses the local retrieval provider client-side. To enable AI mode, see the comment in src/app/api/assistant/route.ts.',
    },
    { status: 200, headers: { 'Cache-Control': 'public, max-age=3600' } }
  );
}
