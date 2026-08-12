import Link from "next/link";
import { CtaBand, SiteFooter, SiteHeader } from "./components/SiteChrome";

const consequences = [
  ["Maintien de salaire", "Application des règles légales, conventionnelles et internes."],
  ["Subrogation", "Suivi des avances employeur et des remboursements attendus."],
  ["IJSS", "Rapprochement des décomptes, encaissements et montants portés en paie."],
  ["Prévoyance", "Lecture des mécanismes d’indemnisation et des versements associés."],
  ["DSN & attestations", "Cohérence des événements déclarés et des attestations de salaire."],
  ["Régularisations", "Identification des écarts à expliquer, documenter et prioriser."],
  ["Congés payés", "Contrôle de l’acquisition, du report et de l’alimentation des compteurs."],
  ["Information salarié", "Traçabilité des explications et des éléments transmis après la reprise."],
  ["Charges", "Lecture des conséquences sociales et comptables des traitements appliqués."],
  ["Trésorerie", "Vision des montants avancés, remboursés et restant à traiter."],
];

const benefits = [
  "Obtenir une vision claire de la situation",
  "Repérer les incohérences entre les différentes sources",
  "Identifier les montants avancés, remboursés et restant à traiter",
  "Prioriser les actions correctives",
  "Améliorer les contrôles et la traçabilité",
  "Faciliter la transmission des connaissances",
];

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader current="Accueil" />
      <main>
        <section className="hero home-hero">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span>Expertise de terrain depuis 2004</span> Traitement des Absences Maladie en Paie</p>
            <h1 className="kinetic-title">
              <span><i>Sécuriser le traitement</i></span>
              <span><i>des absences maladie</i></span>
              <span><i>en paie</i></span>
            </h1>
            <p className="hero-lead">
              PAÏA by MMPA analyse vos pratiques, rapproche les données de paie et
              d’indemnisation, identifie les écarts et formalise les actions à mener.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/simulateur">
                Simuler votre besoin <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-secondary" href="/methode">
                Découvrir la méthode <span aria-hidden="true">→</span>
              </Link>
            </div>
            <p className="hero-proof">
              Une expertise métier pratiquée depuis 2004 en Paie, Administration du
              personnel, droit social appliqué et systèmes d’information RH.
            </p>
          </div>

          <div className="hero-visual" aria-label="Chaîne de rapprochement PAÏA">
            <img
              className="hero-logo"
              src="/brand/logo-principal.png"
              alt="PAÏA, Paie, Absences, Indemnisation, Analyse, by MMPA"
            />
            <div className="flow-card">
              <p className="flow-title">Une lecture croisée des données</p>
              <div className="flow-sequence" aria-label="Absence, Paie et GTA, IJSS, Prévoyance, Indemnisation, Suivi">
                <span>Absence</span>
                <span>Paie &amp; GTA</span>
                <span>IJSS</span>
                <span>Prévoyance</span>
                <span>Indemnisation</span>
                <span>Suivi</span>
              </div>
              <p className="flow-caption">Rapprocher · expliquer · prioriser · transmettre</p>
            </div>
          </div>
        </section>

        <figure className="brand-banner-showcase">
          <img
            src="/brand/banner-paia.png"
            alt="PAÏA by MMPA — Paie, Absences, Indemnisation, Analyse"
          />
        </figure>

        <div className="editorial-marquee" aria-label="Les piliers de l’intervention PAÏA">
          <div>
            <span>Comprendre</span><i>•</i><span>Rapprocher</span><i>•</i><span>Documenter</span><i>•</i><span>Prioriser</span><i>•</i><span>Transmettre</span><i>•</i>
            <span aria-hidden="true">Comprendre</span><i aria-hidden="true">•</i><span aria-hidden="true">Rapprocher</span><i aria-hidden="true">•</i><span aria-hidden="true">Documenter</span><i aria-hidden="true">•</i><span aria-hidden="true">Prioriser</span><i aria-hidden="true">•</i><span aria-hidden="true">Transmettre</span><i aria-hidden="true">•</i>
          </div>
        </div>

        <section className="section section-intro">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Un sujet transversal</p>
              <h2>Une absence maladie ne se limite pas à une ligne sur un bulletin de paie</h2>
            </div>
            <p>
              Elle traverse plusieurs outils, acteurs et temporalités. Une incohérence
              isolée peut produire des conséquences financières, sociales et
              opérationnelles durables.
            </p>
          </div>
          <div className="consequence-grid">
            {consequences.map(([title, text], index) => (
              <article className="consequence-card" key={title}>
                <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-dark">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow eyebrow-gold">Ce que l’intervention apporte</p>
              <h2>Comprendre la situation pour agir au bon endroit</h2>
            </div>
            <p>
              PAÏA documente les écarts et les actions nécessaires. Les équipes du
              client conservent la maîtrise de leurs outils et la responsabilité des
              corrections.
            </p>
          </div>
          <div className="benefit-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-item" key={benefit}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
          <Link className="text-link text-link-light" href="/expertise">
            Explorer le périmètre d’expertise <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section className="section method-preview">
          <div className="section-heading centered-heading">
            <p className="eyebrow">Une méthode lisible</p>
            <h2>De la qualification du besoin à la transmission</h2>
            <p>Cinq étapes, un périmètre défini et des responsabilités clairement posées.</p>
          </div>
          <ol className="step-row">
            {[
              "Qualification",
              "Collecte sécurisée",
              "État des lieux",
              "Analyse détaillée",
              "Restitution & transfert",
            ].map((step, index) => (
              <li key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
          <div className="centered-action">
            <Link className="button button-secondary" href="/methode">
              Voir la méthode d’intervention
            </Link>
          </div>
        </section>

        <CtaBand
          title="Vous avez besoin de comprendre où se situent les écarts ?"
          text="Parlons de votre périmètre, des données disponibles et des actions à engager."
          label="Échanger sur votre situation"
          href="/contact"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
