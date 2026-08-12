import type { Metadata } from "next";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "À propos de Mathilde" };

const verbs = ["Comprendre", "Analyser", "Formaliser", "Sécuriser", "Transmettre"];
const values = ["Rigueur", "Confidentialité", "Transparence", "Pédagogie", "Traçabilité", "Respect des responsabilités", "Résultat utile et mesurable"];

export default function AboutPage() {
  return (
    <div className="site-shell">
      <SiteHeader current="À propos" />
      <main>
        <PageHero eyebrow="À propos de Mathilde" title="Une expertise construite dans la pratique" intro="Une lecture simultanée des règles, des opérations, des données, des outils et de leurs conséquences sur la paie." />
        <section className="about-story">
          <div className="about-year"><strong>2004</strong><span>Début du parcours métier</span></div>
          <div className="about-copy">
            <p>
              Mathilde Martine PAISLEY accompagne les organisations sur des problématiques
              de paie, d’administration du personnel, de droit social appliqué et de
              systèmes d’information RH.
            </p>
            <p>
              Elle a traité les absences maladie dans des environnements, des conventions
              collectives et des organisations variés. Cette expérience lui permet
              d’identifier les situations qui nécessitent une analyse individualisée,
              au-delà d’une méthode théorique ou d’un contrôle automatisé.
            </p>
          </div>
        </section>
        <section className="verb-section">
          <p className="eyebrow eyebrow-gold">La démarche PAÏA</p>
          <div className="verb-row">{verbs.map((verb, index) => <div key={verb}><span>{index + 1}</span><strong>{verb}</strong></div>)}</div>
        </section>
        <section className="content-section values-section">
          <div className="content-intro"><p className="eyebrow">Les valeurs</p><h2>Un cadre de travail exigeant et humain</h2></div>
          <div className="values-list">{values.map(value => <span key={value}>{value}</span>)}</div>
        </section>
        <div className="about-banner"><img src="/brand/banner-paia.png" alt="PAÏA, Paie, Absences, Indemnisation, Analyse, by MMPA" /></div>
        <CtaBand title="Parlons de votre contexte" text="Le premier échange vise à comprendre votre situation, sans présumer du périmètre de la mission." label="Demander un premier échange" href="/contact" />
      </main>
      <SiteFooter />
    </div>
  );
}
