'use client';

import { useEffect, useRef } from 'react';

const AD_CLIENT = 'ca-pub-4585749746768234';

let scriptLoaded = false;
function ensureAdScript() {
  if (scriptLoaded || typeof window === 'undefined') return;
  scriptLoaded = true;
  const s = document.createElement('script');
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`;
  s.async = true;
  s.crossOrigin = 'anonymous';
  document.head.appendChild(s);
}

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: boolean;
  className?: string;
}

export default function AdUnit({ slot, format = 'auto', responsive = true, className = '' }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    ensureAdScript();
    if (pushed.current) return;
    try {
      const adsbygoogle = (window as any).adsbygoogle || [];
      adsbygoogle.push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded yet or blocked
    }
  }, []);

  return (
    <div className={`ad-container my-6 flex justify-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
        ref={adRef as any}
      />
    </div>
  );
}

export function AdBanner({ className = '' }: { className?: string }) {
  return <AdUnit slot="auto" format="horizontal" className={className} />;
}

export function AdSidebar({ className = '' }: { className?: string }) {
  return <AdUnit slot="auto" format="rectangle" className={className} />;
}

export function AdInFeed({ className = '' }: { className?: string }) {
  return <AdUnit slot="auto" format="auto" className={className} />;
}
