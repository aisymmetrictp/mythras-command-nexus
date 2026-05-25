import type { Metadata } from "next";
import { OrganizationSchema, PersonSchema } from "@/components/StructuredData";
import CookieConsent from "@/components/CookieConsent";
import ChatWidget from "@/components/assistant/ChatWidget";
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
        {/* Google AdSense — site-wide script so reviewers + auto-ads see it on every page */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4585749746768234"
          crossOrigin="anonymous"
        />
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0NF282ERV6" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0NF282ERV6');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <OrganizationSchema />
        <PersonSchema />
        {/* Hidden form for Netlify build-time form detection */}
        <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input name="bot-field" />
          <input name="name" />
          <input name="email" />
          <input name="subject" />
          <textarea name="message" />
        </form>
        {children}
        <CookieConsent />
        <ChatWidget />
      </body>
    </html>
  );
}
