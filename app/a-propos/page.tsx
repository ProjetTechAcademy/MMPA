import type { Metadata } from "next";
import type React from "react";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "À propos de Mathilde" };

const verbs = [
  { name: "Comprendre", detail: "Écouter le contexte avant de traiter le symptôme." },
  { name: "Analyser", detail: "Croiser les règles, les données et les pratiques." },
  { name: "Formaliser", detail: "Rendre le diagnostic lisible et exploitable." },
  { name: "Sécuriser", detail: "Prioriser les actions qui protègent la paie." },
  { name: "Transmettre", detail: "Laisser une méthode que les équipes s’approprient." },
];

const journey = [
  {
    period: "Hier · depuis 2004",
    title: "Le métier appris au contact du réel",
    text: "Des environnements, des conventions collectives et des organisations multiples : le terrain a construit une compréhension concrète de la paie, des absences et de leurs conséquences.",
  },
  {
    period: "Aujourd’hui · 22 ans de pratique",
    title: "Une expertise consolidée",
    text: "L’expérience s’est enrichie d’une certification de Manager RH en 2023, d’une formation en stratégie digitale et conduite de projet, puis de la certification Gestionnaire de paie obtenue le 26 février 2026.",
  },
  {
    period: "Demain · 1er mars 2027",
    title: "PAÏA prend son indépendance",
    text: "PAÏA prépare son lancement pour accompagner les organisations avec une parole directe, une analyse exigeante et une seule priorité : résoudre les problèmes de façon utile et transmissible.",
  },
];
const values = ["Rigueur", "Confidentialité", "Transparence", "Pédagogie", "Traçabilité", "Respect des responsabilités", "Résultat utile et mesurable"];

export default function AboutPage() {
  return (
    <div className="site-shell">
      <SiteHeader current="À propos" />
      <main className="about-page">
        <PageHero eyebrow="À propos de Mathilde" title="Une expertise construite dans la pratique" intro="Une lecture simultanée des règles, des opérations, des données, des outils et de leurs conséquences sur la paie." />
        <section className="about-story">
          <div className="about-year"><strong>2004</strong><span>Début du parcours métier</span></div>
          <div className="about-copy">
            <p className="eyebrow">Un parcours hors des cadres</p>
            <h2>La pratique d’abord.<br />L’exigence toujours.</h2>
            <p className="about-lead">
              Depuis 2004, Mathilde Martine PAISLEY construit son expertise au contact
              direct de la paie, de l’administration du personnel, du droit social
              appliqué et des systèmes d’information RH.
            </p>
            <p className="about-detail">
              Autodidacte, elle a appris en cherchant, en vérifiant et en traitant des
              situations réelles. Son parcours n’est pas linéaire : il est transversal.
              Cette diversité lui permet de repérer les écarts, de poser les questions
              que d’autres évitent et de transformer une situation complexe en décisions
              concrètes.
            </p>
            <blockquote>
              « Je ne prétends pas tout savoir. Je sais chercher, vérifier, relier et résoudre. »
            </blockquote>
          </div>
        </section>
        <section className="journey-section" aria-labelledby="journey-title">
          <div className="journey-heading">
            <p className="eyebrow">Hier · Aujourd’hui · Demain</p>
            <h2 id="journey-title">Une trajectoire qui devient une méthode.</h2>
          </div>
          <div className="journey-grid">
            {journey.map((step, index) => (
              <article key={step.period}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step.period}</p>
                <h3>{step.title}</h3>
                <div>{step.text}</div>
              </article>
            ))}
          </div>
        </section>
        <section className="verb-section">
          <p className="eyebrow eyebrow-gold">La démarche PAÏA</p>
          <div className="verb-row">
            {verbs.map((verb, index) => (
              <div key={verb.name} style={{ "--step": index } as React.CSSProperties}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{verb.name}</strong>
                <p>{verb.detail}</p>
              </div>
            ))}
          </div>
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
