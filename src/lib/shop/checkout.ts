/**
 * MYTHRAS ARMORY — checkout integration point (placeholder).
 *
 * ⚠️ ARCHITECTURE NOTE: this site is a Next.js **static export** (`output: 'export'`)
 * deployed to Netlify as plain files (`netlify deploy --dir=out --no-build`).
 * There is NO running server, so you CANNOT create a Stripe Checkout Session from
 * a Next route handler / server action here. Two realistic paths to enable real
 * checkout, in order of effort:
 *
 *   1. Stripe Payment Links (recommended, zero backend):
 *      - Create a Payment Link per product/tier in the Stripe dashboard.
 *      - Drop the URL into `ctaHref` in shopProducts.ts / membershipTiers.ts.
 *      - Done. No code, works on a static site, supports subscriptions.
 *
 *   2. Netlify Function (serverless) for a custom Checkout Session:
 *      - Add a function under `netlify/functions/` and switch the deploy to build it.
 *      - Implement `createCheckoutSession` there using STRIPE_SECRET_KEY.
 *      - Point the client at that function URL.
 *
 * Until one of those exists, product/tier CTAs route to Discord, email,
 * Streamlabs, Creator-Spring, or affiliate links. The helper below is the single
 * place to flip behavior on once checkout is live.
 *
 * Env vars (see .env.example):
 *   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY — inlined client-side at build (safe to expose).
 *   STRIPE_SECRET_KEY                  — SERVER-ONLY; inert until a serverless fn exists.
 *   STRIPE_WEBHOOK_SECRET              — SERVER-ONLY; for verifying Stripe webhooks.
 */

export const CHECKOUT_ENABLED = false; // flip to true once Payment Links / a function are wired.

export const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '';

/**
 * Resolve the href a "buy" button should use for a given product/tier.
 * Today: returns the configured fallback (Discord/email/affiliate/Payment Link).
 * Future: when CHECKOUT_ENABLED and a Payment Link is set, return that instead.
 *
 * TODO(stripe): when you create Stripe Payment Links, either put them directly in
 * the data files' `ctaHref`, or map id -> paymentLinkUrl here and prefer it.
 */
export function resolveCheckoutHref(opts: { id: string; fallbackHref: string }): string {
  // const PAYMENT_LINKS: Record<string, string> = { 'mythras-cookie-card': 'https://buy.stripe.com/...' };
  // if (CHECKOUT_ENABLED && PAYMENT_LINKS[opts.id]) return PAYMENT_LINKS[opts.id];
  return opts.fallbackHref;
}
