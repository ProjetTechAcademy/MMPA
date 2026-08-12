import type { Metadata } from "next";
import type React from "react";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "À propos de Mathilde" };

const verbs = [
  {
    name: "Comprendre",
    detail: "Écouter le contexte avant de traiter le symptôme.",
    question: "Pouvez-vous reconstituer la chronologie complète d’une absence, de l’événement initial jusqu’au dernier remboursement ?",
    insight: "Une chronologie incomplète peut conduire à corriger le bon montant au mauvais endroit.",
  },
  {
    name: "Analyser",
    detail: "Croiser les règles, les données et les pratiques.",
    question: "Les données de GTA, de paie, de DSN, d’IJSS et de prévoyance racontent-elles exactement la même histoire ?",
    insight: "Un résultat cohérent dans un seul outil ne garantit pas la cohérence de toute la chaîne.",
  },
  {
    name: "Formaliser",
    detail: "Rendre le diagnostic lisible et exploitable.",
    question: "Chaque écart est-il documenté avec sa cause, son impact, sa priorité et l’action attendue ?",
    insight: "Un écart compris mais non documenté reste difficile à piloter et à transmettre.",
  },
  {
    name: "Sécuriser",
    detail: "Prioriser les actions qui protègent la paie.",
    question: "Savez-vous distinguer ce qui doit être corrigé immédiatement de ce qui peut être traité dans un second temps ?",
    insight: "La priorité dépend du risque, de l’impact financier et de la capacité réelle de correction.",
  },
  {
    name: "Transmettre",
    detail: "Laisser une méthode que les équipes s’approprient.",
    question: "Le dossier peut-il être repris sans dépendre de la mémoire de la personne qui l’a traité ?",
    insight: "Une méthode utile doit rester compréhensible, vérifiable et réutilisable.",
  },
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
    period: "Demain · PAÏA",
    title: "L’expertise devient une offre indépendante",
    text: "PAÏA a été pensée pour accompagner les organisations avec une parole directe, une analyse exigeante et une seule priorité : résoudre les problèmes de façon utile et transmissible.",
  },
];
const values = [
  { name: "Rigueur", text: "Vérifier les faits, les règles et les calculs avant de conclure." },
  { name: "Confidentialité", text: "Protéger les informations confiées à chaque étape de la mission." },
  { name: "Transparence", text: "Rendre visibles les constats, les limites et les arbitrages nécessaires." },
  { name: "Pédagogie", text: "Transformer la complexité en explications compréhensibles et actionnables." },
  { name: "Traçabilité", text: "Documenter les écarts, les décisions et les actions réalisées." },
  { name: "Responsabilité", text: "Clarifier le rôle de chacun sans déplacer ni diluer les décisions." },
  { name: "Résultat utile", text: "Produire une amélioration concrète, observable et durable." },
];

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
              Cette diversité lui permet de repérer les écarts, de relier les données
              utiles et de transformer une situation complexe en décisions concrètes.
            </p>
            <blockquote>
              « Je ne prétends pas tout savoir. Je sais chercher, vérifier, relier et résoudre. »
            </blockquote>
          </div>
        </section>
        <section className="journey-section" aria-labelledby="journey-title">
          <div className="journey-heading">
            <p className="eyebrow">Hier · Aujourd’hui · Demain</p>
            <h2 id="journey-title">Une expertise qui devient une méthode.</h2>
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
              <details name="paia-method" key={verb.name} style={{ "--step": index } as React.CSSProperties}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{verb.name}</strong>
                  <span className="verb-detail">{verb.detail}</span>
                  <span className="verb-toggle">Question repère <b aria-hidden="true">+</b></span>
                </summary>
                <div className="verb-reveal">
                  <small>À vous de jouer</small>
                  <p>{verb.question}</p>
                  <em>{verb.insight}</em>
                </div>
              </details>
            ))}
          </div>
        </section>
        <section className="content-section values-section">
          <div className="content-intro">
            <p className="eyebrow">Les valeurs</p>
            <h2>Un cadre de travail exigeant et humain</h2>
            <p>Des principes simples pour cadrer la mission, sécuriser les échanges et produire un résultat réellement utile.</p>
          </div>
          <div className="values-list">
            {values.map((value, index) => (
              <article key={value.name} style={{ "--value": index } as React.CSSProperties}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{value.name}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>
        <div className="about-banner"><img src="/brand/banner-paia.png" alt="PAÏA, Paie, Absences, Indemnisation, Analyse, by MMPA" /></div>
        <CtaBand title="Parlons de votre contexte" text="Le premier échange vise à comprendre votre situation, sans présumer du périmètre de la mission." label="Demander un premier échange" href="/contact" />
      </main>
      <SiteFooter />
    </div>
  );
}
