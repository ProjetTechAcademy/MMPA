import type { Metadata } from "next";
import type React from "react";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Méthode & livrables" };

const steps = [
  ["Qualification du besoin", "Définition du périmètre, de l’entité juridique, des populations, des outils, des événements concernés, des données disponibles et des résultats attendus."],
  ["Collecte sécurisée", "Accès aux données et documents nécessaires dans l’environnement sécurisé proposé par le client : poste de travail, VPN, accès nominatif ou extractions contrôlées."],
  ["État des lieux", "Analyse rétrospective recommandée sur 36 mois : absences, DSN événementielle liée aux arrêts maladie, IJSS et impacts en paie, sous réserve de la qualité des données fournies."],
  ["Analyse détaillée", "Rapprochement des absences, rubriques de paie, DSN événementielle liée aux arrêts maladie, IJSS, remboursements, prévoyance, régularisations et compteurs de congés payés."],
  ["Restitution & transfert opérationnel", "Présentation des constats, risques, priorités, actions et responsabilités. Explication de la méthode aux équipes afin de faciliter la reprise autonome des contrôles."],
];

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
    question: "Les données de GTA, de paie, de DSN événementielle liée à l’arrêt maladie, d’IJSS et de prévoyance sont-elles cohérentes ?",
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
    question: "Le dossier peut-il être repris avec une chronologie, des preuves et des actions clairement documentées ?",
    insight: "Une méthode utile doit rester compréhensible, vérifiable et réutilisable.",
  },
];

export default function MethodePage() {
  return (
    <div className="site-shell">
      <SiteHeader current="Méthode & livrables" />
      <main>
        <PageHero eyebrow="Méthode & livrables" title="Un cadre structuré, du besoin à la reprise autonome" intro="Une intervention lisible, fondée sur la qualité des données, la traçabilité des constats et le respect des responsabilités de chacun." />
        <section className="content-section">
          <div className="timeline">
            {steps.map(([title, text], index) => (
              <article className="timeline-step" key={title}>
                <div className="timeline-number">{String(index + 1).padStart(2, "0")}</div>
                <div><h2>{title}</h2><p>{text}</p></div>
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
                  <small>Point de contrôle</small>
                  <p>{verb.question}</p>
                  <em>{verb.insight}</em>
                </div>
              </details>
            ))}
          </div>
        </section>
        <section className="content-section method-deliverables-preview">
          <div className="content-intro">
            <p className="eyebrow">Livrables utiles</p>
            <h2>Des constats transformés en trajectoire d’action</h2>
            <p>Le format est adapté au périmètre analysé : rapport d’état des lieux, registre de suivi des écarts, priorités, responsabilités et preuves attendues.</p>
          </div>
          <div className="method-deliverables-actions">
            <a className="button button-secondary" href="/livrables">Découvrir les livrables</a>
            <a className="button button-primary" href="/contact">Échanger sur le périmètre</a>
          </div>
        </section>
        <section className="content-section content-section-tinted prerequisites-layout">
          <div className="content-intro">
            <p className="eyebrow">Préparer la mission</p>
            <h2>Les prérequis</h2>
            <p>La qualité de l’état des lieux dépend d’un accès clair au contexte, aux règles et aux sources utiles.</p>
          </div>
          <ul className="prerequisite-list">
            <li>Désignation d’un référent projet</li>
            <li>Désignation d’un référent métier Paie</li>
            <li>Accès aux données nécessaires</li>
            <li>Mise à disposition des règles conventionnelles et internes</li>
            <li>Accès aux éléments de paie, GTA, indemnisation et prévoyance utiles</li>
          </ul>
        </section>
        <section className="content-section simulation-invite">
          <div className="content-intro">
            <p className="eyebrow">Estimer avant d’échanger</p>
            <h2>Chaque périmètre doit être qualifié</h2>
            <p>Le volume, les entités juridiques, les conventions, les outils, la période et la qualité des données déterminent l’ampleur de l’intervention. Une simulation permet de préparer le premier échange sans afficher un tarif déconnecté de la réalité.</p>
          </div>
          <div className="simulation-points">
            <p><strong>Une entité juridique</strong><span>Un périmètre et un devis distincts</span></p>
            <p><strong>Aucun forfait automatique</strong><span>Une proposition construite après qualification</span></p>
            <p><strong>Un budget maîtrisé</strong><span>Le besoin réel guide l’intervention</span></p>
          </div>
          <a className="button button-primary" href="/simulateur">Simuler votre besoin</a>
        </section>
        <CtaBand title="Besoin d’échanger après la simulation ?" text="Le premier rendez-vous permet de confirmer le périmètre et les données nécessaires." label="Prendre rendez-vous" href="/contact" />
      </main>
      <SiteFooter />
    </div>
  );
}
