'use client';

import { useEffect } from 'react';

/**
 * Global GA4 event tracking. One capture-phase click listener fires named gtag
 * events for the actions we care about — outbound affiliate clicks, merch, tip,
 * Discord, email, and shop/support navigation — so monetization is measurable.
 *
 * In GA4: Admin → Events → toggle these to "Mark as key event" to count them as
 * conversions: affiliate_click, merch_click, tip_click, discord_click, email_click.
 * (Page views for /shop & /support are already captured by GA4 enhanced measurement.)
 */
const AFFILIATE_HOSTS = ['amzn.to', 'amazon.com', 'tcgplayer.pxf.io', 'yourplaymat.com'];

export default function AnalyticsEvents() {
  useEffect(() => {
    function track(name: string, params: Record<string, string>) {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === 'function') w.gtag('event', name, params);
    }
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement | null)?.closest?.('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (!href) return;
      const text = (a.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 100);
      const params: Record<string, string> = { link_url: href, link_text: text, page_path: window.location.pathname };
      let event: string | null = null;

      if (href.startsWith('mailto:')) {
        event = 'email_click';
      } else if (/^https?:\/\//i.test(href)) {
        let host = '';
        try { host = new URL(href).hostname.replace(/^www\./, ''); } catch { /* keep '' */ }
        params.link_domain = host;
        if (host.includes('discord')) event = 'discord_click';
        else if (host.includes('streamlabs') && /\/tip/.test(href)) event = 'tip_click';
        else if (host.includes('creator-spring') || (host.includes('streamlabs') && /merch/.test(href))) event = 'merch_click';
        else if (AFFILIATE_HOSTS.some(h => host === h || host.endsWith('.' + h) || host.includes(h))) event = 'affiliate_click';
        else event = 'outbound_click';
      } else if (href.startsWith('/shop') || href.startsWith('/support')) {
        event = 'shop_nav_click';
      }

      if (event) track(event, params);
    }
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
