import type { Metadata } from "next";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "L’histoire de PAÏA" };

const verbs = ["Comprendre", "Analyser", "Formaliser", "Sécuriser", "Transmettre"];
const values = ["Rigueur", "Confidentialité", "Transparence", "Pédagogie", "Traçabilité", "Respect des responsabilités", "Résultat utile et mesurable"];

export default function AboutPage() {
  return (
    <div className="site-shell">
      <SiteHeader current="L’histoire de PAÏA" />
      <main>
        <PageHero eyebrow="L’histoire de PAÏA" title="Une expertise métier devenue une méthode" intro="PAÏA réunit une lecture simultanée des règles, des opérations, des données, des outils et de leurs conséquences sur la paie." />
        <section className="about-story">
          <div className="about-year"><strong>2004</strong><span>Début du parcours métier</span></div>
          <div className="about-copy">
            <p>
              PAÏA est née d’une expérience de terrain en paie, administration du
              personnel, droit social appliqué et systèmes d’information RH.
              Sa méthode aide les organisations à rendre lisible ce qui est dispersé,
              à rapprocher les données et à prioriser les actions utiles.
            </p>
            <p>
              PAÏA a été conçue par Mathilde Martine PAISLEY, professionnelle de la paie
              et des systèmes RH depuis 2004. Son expérience des absences maladie dans
              des environnements variés nourrit une approche concrète, individualisée
              et transmissible.
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
