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

export const metadata: Metadata = {
  title: {
    default: "PAÏA by MMPA — TAMP, PDP et TADP",
    template: "%s | PAÏA by MMPA",
  },
  description: "PAÏA by MMPA propose trois services : traitement des absences maladie en paie, production de paie et traitement de l’administration du personnel.",
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
