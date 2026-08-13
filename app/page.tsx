import Link from "next/link";
import { CtaBand, SiteFooter, SiteHeader } from "./components/SiteChrome";

const experienceMarkers = [
  ["Depuis 2004", "une expertise exercée en Paie, ADP, droit social appliqué et SIRH"],
  ["250 à 1 200", "salariés sur les périmètres de paie et d’administration du personnel pratiqués"],
  ["Jusqu’à 30 sites", "des pratiques recueillies, rapprochées et formalisées dans des environnements multisites"],
  ["Paie · GTA · SIRH", "une lecture fonctionnelle des règles, des données, des outils et des usages"],
];

const businessSituations = [
  {
    number: "01",
    title: "Déclarer l’événement",
    text: "Relier l’arrêt reçu, l’absence saisie, la GTA et la DSN événementielle liée à l’arrêt maladie.",
    tags: ["Arrêt", "GTA", "DSN événementielle"],
  },
  {
    number: "02",
    title: "Indemniser correctement",
    text: "Mettre en regard le maintien de salaire, la subrogation, les IJSS et les mécanismes de prévoyance.",
    tags: ["Maintien", "IJSS", "Prévoyance"],
  },
  {
    number: "03",
    title: "Expliquer les écarts",
    text: "Identifier les remboursements manquants, les montants restant à traiter et les régularisations à documenter.",
    tags: ["Rapprochement", "Écarts", "Trésorerie"],
  },
  {
    number: "04",
    title: "Organiser la suite",
    text: "Prioriser les actions, sécuriser la traçabilité et transmettre un cadre réellement exploitable par les équipes.",
    tags: ["Plan d’action", "Suivi", "Transmission"],
  },
];

const outcomes = [
  {
    number: "01",
    title: "Une situation lisible",
    text: "Les sources disponibles, les limites et les écarts sont rapprochés dans une lecture commune.",
  },
  {
    number: "02",
    title: "Des priorités posées",
    text: "Les actions nécessaires sont ordonnées selon leurs effets, leurs dépendances et les responsabilités.",
  },
  {
    number: "03",
    title: "Une trace transmissible",
    text: "Les constats, preuves attendues et méthodes de suivi sont formalisés pour permettre une reprise autonome.",
  },
];

const method = [
  ["01", "Qualifier", "Comprendre le contexte, l’entité et le résultat attendu."],
  ["02", "Cadrer", "Définir les sources disponibles, les limites et les responsabilités."],
  ["03", "Rapprocher", "Mettre en regard les règles, les données et les traitements."],
  ["04", "Prioriser", "Distinguer les écarts, leurs effets et les actions à mener."],
  ["05", "Transmettre", "Restituer une méthode et des supports propres à l’entité."],
];

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader current="Accueil" />
      <main>
        <section className="hero home-hero home-hero-refined">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span>Expertise de terrain depuis 2004</span>
              Traitement des Absences Maladie en Paie
            </p>
            <h1 className="kinetic-title">
              <span><i>Sécuriser le traitement</i></span>
              <span><i>des absences maladie</i></span>
              <span><i>en paie</i></span>
            </h1>
            <p className="hero-lead">
              PAÏA by MMPA rapproche les pratiques, les données et les flux
              d’indemnisation pour rendre les écarts lisibles et les actions
              réellement pilotables.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/contact">
                Demander un premier échange <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-secondary" href="/simulateur">
                Situer votre besoin <span aria-hidden="true">→</span>
              </Link>
            </div>
            <p className="hero-proof">
              Une approche spécialisée, fondée sur une pratique réelle de la paie,
              de l’administration du personnel, du droit social appliqué et des
              systèmes d’information RH.
            </p>
          </div>

          <div className="hero-visual hero-data-card" aria-label="Chaîne de rapprochement PAÏA">
            <div className="data-card-heading">
              <p className="eyebrow">De l’arrêt au suivi</p>
              <h2>Une absence.<br />Toutes les données à réconcilier.</h2>
              <p>
                Pour faire apparaître les écarts, mesurer leurs effets et remettre
                les actions dans le bon ordre.
              </p>
            </div>
            <div className="flow-card">
              <div className="flow-sequence" aria-label="Absence, Paie et GTA, DSN événementielle, IJSS, Prévoyance, Suivi">
                <span>Absence</span>
                <span>Paie &amp; GTA</span>
                <span>DSN évén.</span>
                <span>IJSS</span>
                <span>Prévoyance</span>
                <span>Suivi</span>
              </div>
              <p className="flow-caption">Comprendre · rapprocher · documenter · prioriser · transmettre</p>
            </div>
          </div>
        </section>

        <section className="experience-proof" aria-label="Repères de l’expérience professionnelle">
          <div className="experience-proof-heading">
            <p className="eyebrow">L’expérience derrière la méthode</p>
            <p>Des repères issus du parcours professionnel qui fonde PAÏA.</p>
          </div>
          <div className="experience-proof-grid">
            {experienceMarkers.map(([value, label]) => (
              <article key={value}>
                <strong>{value}</strong>
                <p>{label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-intro home-situations">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Un sujet transversal</p>
              <h2>Une seule absence peut traverser plusieurs outils, acteurs et temporalités.</h2>
            </div>
            <div className="section-side-copy">
              <p>
                L’enjeu n’est pas de regarder chaque donnée séparément, mais de
                comprendre ce qu’elles racontent ensemble.
              </p>
              <Link className="text-link" href="/expertise">
                Voir le périmètre d’expertise <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="business-situation-grid">
            {businessSituations.map((situation) => (
              <article className="business-situation-card" key={situation.number}>
                <span className="card-index">{situation.number}</span>
                <h3>{situation.title}</h3>
                <p>{situation.text}</p>
                <div>{situation.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-dark home-outcomes">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow eyebrow-gold">À l’issue de l’intervention</p>
              <h2>Des constats exploitables, pas une analyse laissée dans un dossier.</h2>
            </div>
            <p>
              PAÏA identifie, documente et priorise. Les équipes clientes conservent
              la maîtrise de leurs outils et la responsabilité des corrections.
            </p>
          </div>
          <div className="outcome-grid">
            {outcomes.map((outcome) => (
              <article key={outcome.number}>
                <span>{outcome.number}</span>
                <h3>{outcome.title}</h3>
                <p>{outcome.text}</p>
              </article>
            ))}
          </div>
          <div className="outcome-actions">
            <Link className="text-link text-link-light" href="/livrables">
              Découvrir les livrables <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-gold" href="/simulateur">
              Situer votre besoin <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="section method-preview home-method">
          <div className="section-heading centered-heading">
            <p className="eyebrow">Une méthode lisible</p>
            <h2>Du contexte à une reprise autonome</h2>
            <p>Cinq étapes, un périmètre défini et des responsabilités clairement posées.</p>
          </div>
          <ol className="home-method-grid">
            {method.map(([number, title, text]) => (
              <li key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <div className="centered-action">
            <Link className="button button-secondary" href="/methode">
              Découvrir la méthode complète <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <CtaBand
          title="Commençons par comprendre votre situation."
          text="Le premier échange permet de qualifier votre contexte, les données disponibles et le résultat attendu, sans présumer du périmètre de la mission."
          label="Demander un premier échange"
          href="/contact"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
