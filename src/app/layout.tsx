import type { Metadata, Viewport } from "next";
import { Newsreader, Inter } from "next/font/google";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/shared/json-ld";
import { CookieConsent } from "@/components/shared/cookie-consent";
import "./globals.css";

// Refined editorial serif for headlines — restrained stroke contrast reads
// authoritative and executive rather than theatrical.
const serif = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "avocat paris",
    "cabinet d'avocats",
    "droit des affaires",
    "fusions acquisitions",
    "contentieux commercial",
    "droit des sociétés",
    "avocat d'affaires",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/opengraph-image.svg",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/opengraph-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Legal Services",
};

export const viewport: Viewport = {
  themeColor: "#0a1120",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${serif.variable} ${inter.variable}`}
    >
      <body className="antialiased">
        <JsonLd />
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
        >
          Aller au contenu principal
        </a>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
