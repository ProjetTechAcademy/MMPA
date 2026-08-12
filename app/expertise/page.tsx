import type { Metadata } from "next";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "L’expertise PAÏA" };

const events = [
  "Maladie non professionnelle",
  "Maladie professionnelle",
  "Accident du travail",
  "Accident de trajet",
  "Rechute",
  "Maternité",
  "Paternité",
  "Adoption",
  "Temps partiel thérapeutique",
  "Invalidité",
  "Décès & prévoyance",
];

const controls = [
  "Cohérence entre les arrêts reçus et les absences enregistrées",
  "Rapprochement entre paie, GTA, déclarations, décomptes d’IJSS et encaissements",
  "Contrôle du maintien de salaire et de la subrogation",
  "Identification des remboursements manquants ou incomplets",
  "Contrôle des régularisations et des mécanismes de prévoyance",
  "Acquisition et report des congés payés pendant les arrêts maladie ou accident",
  "Alimentation des compteurs de congés payés",
  "Traçabilité de l’information remise au salarié après sa reprise",
  "Identification des besoins de courrier explicatif adressé au salarié",
];

export default function ExpertisePage() {
  return (
    <div className="site-shell">
      <SiteHeader current="L’expertise PAÏA" />
      <main>
        <PageHero
          eyebrow="L’expertise PAÏA"
          title="Analyser le traitement complet de l’absence"
          intro="Une lecture métier qui relie l’événement, les règles applicables, les données, les déclarations, les remboursements et leurs conséquences en paie."
        />
        <section className="content-section">
          <div className="content-intro">
            <p className="eyebrow">Périmètre d’intervention</p>
            <h2>Les événements concernés</h2>
            <p>
              PAÏA peut examiner tout événement directement associé aux absences,
              à leur indemnisation par la Sécurité sociale ou la prévoyance, et à
              leur traitement en paie. Cette liste n’est pas exhaustive.
            </p>
          </div>
          <div className="tag-grid">
            {events.map((event, index) => (
              <div className="tag-card" key={event}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{event}</strong>
              </div>
            ))}
          </div>
        </section>
        <section className="content-section content-section-tinted">
          <div className="content-intro">
            <p className="eyebrow">Lecture croisée</p>
            <h2>Les contrôles possibles</h2>
            <p>Le périmètre exact est défini en fonction des enjeux, des outils et des données réellement disponibles.</p>
          </div>
          <div className="check-list">
            {controls.map((control) => (
              <div key={control}><span aria-hidden="true">✓</span><p>{control}</p></div>
            ))}
          </div>
        </section>
        <section className="responsibility-note">
          <p className="eyebrow eyebrow-gold">Responsabilités clairement posées</p>
          <h2>Identifier et documenter, sans se substituer aux équipes</h2>
          <p>
            PAÏA by MMPA identifie, documente et priorise les irrégularités et les
            corrections nécessaires. Les équipes du client conservent la responsabilité
            de vérifier l’historique individuel et d’effectuer les corrections dans leurs
            propres outils.
          </p>
        </section>
        <CtaBand title="Un écart d’IJSS, de subrogation ou de maintien vous interroge ?" text="Un premier échange permet de qualifier le périmètre et les données nécessaires." label="Parler de votre situation" href="/contact" />
      </main>
      <SiteFooter />
    </div>
  );
}
