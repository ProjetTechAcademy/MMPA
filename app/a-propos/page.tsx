import type { Metadata } from "next";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "À propos de PAÏA" };

const foundations = [
  {
    number: "01",
    title: "L’expérience du terrain",
    text: "Une pratique métier construite depuis 2004 en paie, administration du personnel, droit social appliqué et systèmes d’information RH.",
  },
  {
    number: "02",
    title: "Une spécialisation claire",
    text: "La gestion et le traitement des absences maladie en paie, de l’événement initial jusqu’à l’indemnisation et au suivi des écarts.",
  },
  {
    number: "03",
    title: "Une méthode transmissible",
    text: "Comprendre, rapprocher, documenter, prioriser et transmettre pour rendre chaque constat exploitable par l’organisation.",
  },
];

const principles = [
  ["Rigueur & traçabilité", "Des constats vérifiés, documentés et reliés aux sources utiles."],
  ["Confidentialité", "Un cadre de travail qui protège les informations confiées."],
  ["Transparence & pédagogie", "Des explications claires sur les constats, les limites et les décisions."],
  ["Responsabilités & résultat", "Le rôle de chacun est posé et chaque action vise un effet concret."],
];

export default function AboutPage() {
  return (
    <div className="site-shell">
      <SiteHeader current="À propos" />
      <main className="about-page about-page-compact">
        <PageHero
          eyebrow="À propos de PAÏA"
          title="Une expertise construite dans la pratique"
          intro="PAÏA by MMPA est une approche spécialisée dans la gestion et le traitement des absences maladie en paie."
        />
        <section className="about-foundation">
          <div className="about-foundation-copy">
            <p className="eyebrow">Le socle de PAÏA</p>
            <h2>Une lecture métier, structurée et concrète.</h2>
            <p>
              L’approche s’appuie sur une expertise exercée depuis 2004 en Paie,
              Administration du Personnel, droit social appliqué et systèmes RH.
              Elle relie les règles, les opérations, les données et les outils afin
              de produire des constats clairs et des actions réalisables.
            </p>
          </div>
          <div className="about-foundation-grid">
            {foundations.map((foundation) => (
              <article key={foundation.number}>
                <span>{foundation.number}</span>
                <h3>{foundation.title}</h3>
                <p>{foundation.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="about-principles">
          <div>
            <p className="eyebrow">Le cadre de travail</p>
            <h2>Exigeant, humain et lisible.</h2>
          </div>
          <div className="about-principles-grid">
            {principles.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <CtaBand
          title="Parlons de votre contexte"
          text="Le premier échange vise à comprendre votre situation, sans présumer du périmètre de la mission."
          label="Demander un premier échange"
          href="/contact"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
