import type { Metadata } from "next";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "La méthode d’intervention" };

const steps = [
  ["Qualification du besoin", "Définition du périmètre, de l’entité juridique, des populations, des outils, des événements concernés, des données disponibles et des résultats attendus."],
  ["Collecte sécurisée", "Accès aux données et documents nécessaires dans l’environnement sécurisé proposé par le client : poste de travail, VPN, accès nominatif ou extractions contrôlées."],
  ["État des lieux", "Analyse rétrospective recommandée sur 36 mois, sous réserve de la disponibilité et de la qualité des données fournies."],
  ["Analyse détaillée", "Rapprochement des absences, rubriques de paie, déclarations, IJSS, remboursements, prévoyance, régularisations et compteurs de congés payés."],
  ["Restitution & transfert opérationnel", "Présentation des constats, risques, priorités, actions et responsabilités. Explication de la méthode aux équipes afin de faciliter la reprise autonome des contrôles."],
];

export default function MethodePage() {
  return (
    <div className="site-shell">
      <SiteHeader current="La méthode" />
      <main>
        <PageHero eyebrow="La méthode d’intervention" title="Un cadre structuré, du besoin à la reprise autonome" intro="Une intervention lisible, fondée sur la qualité des données, la traçabilité des constats et le respect des responsabilités de chacun." />
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
