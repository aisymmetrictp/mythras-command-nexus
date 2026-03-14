import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mythras // The Multiverse — Streams. Strategy. Community.",
  description: "The ultimate gaming multiverse for Mythras. YouTube, Twitch, Discord — all channels, one elite hub. CookieRun, MTG, Pokemon, Lorcana, and more.",
  keywords: "Mythras, gaming, streams, YouTube, Twitch, CookieRun, MTG, Pokemon, Lorcana, Multiverse",
  openGraph: {
    title: "Mythras // The Multiverse",
    description: "Elite Gameplay. Live Energy. Full Ecosystem.",
    type: "website",
    url: "https://gamertagmythras.com",
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
        {children}
      </body>
    </html>
  );
}
