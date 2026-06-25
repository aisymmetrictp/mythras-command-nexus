import type { Metadata } from "next";
import Script from "next/script";
import { OrganizationSchema, PersonSchema } from "@/components/StructuredData";
import { SiteAdSenseLoader } from "@/components/AdUnit";
import CookieConsent from "@/components/CookieConsent";
import ChatWidget from "@/components/assistant/ChatWidget";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import "./globals.css";

const SITE_URL = "https://gamertagmythras.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mythras // The Multiverse — Streams. Strategy. Community.",
    template: "%s | Mythras // The Multiverse",
  },
  description: "The ultimate gaming multiverse for Mythras. YouTube, Twitch, Discord — all channels, one elite hub. CookieRun Kingdom gear guides, MTG, Pokemon, Lorcana, and more.",
  keywords: ["Mythras", "Gamertag Mythras", "gaming", "streams", "YouTube", "Twitch", "CookieRun Kingdom", "Cookie Run Kingdom", "gear guide", "toppings guide", "beascuit guide", "MTG", "Pokemon", "Lorcana", "Multiverse"],
  authors: [{ name: "Mythras", url: SITE_URL }],
  creator: "Mythras",
  publisher: "Mythras // The Multiverse",
  openGraph: {
    title: "Mythras // The Multiverse",
    description: "Elite Gameplay. Live Energy. Full Ecosystem. The ultimate gaming multiverse — CookieRun Kingdom gear guides, MTG, Pokemon, Lorcana, and more.",
    type: "website",
    url: SITE_URL,
    siteName: "Mythras // The Multiverse",
    locale: "en_US",
    images: [
      {
        url: "/images/mythras-logo-new.png",
        width: 512,
        height: 512,
        alt: "Mythras // The Multiverse Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mythras // The Multiverse",
    description: "Elite Gameplay. Live Energy. Full Ecosystem.",
    images: ["/images/mythras-logo-new.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* Google AdSense — site-wide loader so reviewers + auto-ads see it on every page */}
        <SiteAdSenseLoader />
        {/* Google Analytics 4 */}
        <Script
          id="ga-loader"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0NF282ERV6"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0NF282ERV6');
          `}
        </Script>
        <AnalyticsEvents />
        <OrganizationSchema />
        <PersonSchema />
        {/* Hidden forms for Netlify build-time form detection (the real forms are client-rendered) */}
        <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input name="bot-field" />
          <input name="name" />
          <input name="email" />
          <input name="subject" />
          <textarea name="message" />
        </form>
        <form name="shop-reserve" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input name="bot-field" />
          <input name="name" />
          <input name="email" />
          <input name="discord" />
          <input name="product" />
          <textarea name="message" />
          <input type="checkbox" name="consent" />
        </form>
        {children}
        <CookieConsent />
        <ChatWidget />
      </body>
    </html>
  );
}
