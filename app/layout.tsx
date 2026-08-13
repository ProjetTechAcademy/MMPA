import type { Metadata } from "next";
import { Cormorant_Garamond, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ variable: "--font-sans", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const indexingEnabled = process.env.NEXT_PUBLIC_SITE_INDEXING === "enabled";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  || (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PAÏA by MMPA — Traitement des Absences Maladie en Paie",
    template: "%s | PAÏA by MMPA",
  },
  description: "Analyse et sécurisation du traitement des absences maladie en paie : IJSS, subrogation, maintien de salaire, prévoyance et rapprochement des données.",
  keywords: [
    "traitement des absences maladie en paie",
    "contrôle IJSS",
    "subrogation employeur",
    "rapprochement IJSS et paie",
    "consultante Paie SIRH",
  ],
  openGraph: {
    title: "PAÏA by MMPA",
    description: "Paie · Absences · Indemnisation · Analyse",
    images: ["/brand/open-graph.png"],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/brand/favicon.png",
    apple: "/brand/apple-touch-icon.png",
  },
  robots: indexingEnabled
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${outfit.variable} ${cormorant.variable} ${jetbrains.variable}`}>
        {children}
      </body>
    </html>
  );
}
