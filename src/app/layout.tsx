import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mythras // Command Nexus — Streams. Clips. Strategy.",
  description: "The ultimate gaming command center for Mythras. YouTube, Twitch, Discord — all channels, one elite hub. CookieRun, MTG, Pokemon, Lorcana, and more.",
  keywords: "Mythras, gaming, streams, YouTube, Twitch, CookieRun, MTG, Pokemon, Lorcana",
  openGraph: {
    title: "Mythras // Command Nexus",
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
