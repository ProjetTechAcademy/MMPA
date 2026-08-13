import type { Metadata } from "next";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Les livrables" };

const reportItems = ["Périmètre analysé", "Données disponibles et limites", "Constats et montants identifiés", "Remboursements reçus et montants restant à traiter", "Risques et priorités", "Recommandations et responsabilités", "Méthodes et procédures utiles"];
const registerItems = ["Identifiant du dossier ou du cas", "Nature de l’absence", "Anomalie constatée et source", "Montant concerné", "Action recommandée", "Responsable et échéance", "Preuve attendue", "Statut du traitement"];

function DeliverableCard({ number, title, intro, items }: { number: string; title: string; intro: string; items: string[] }) {
  return <article className="deliverable-card"><span className="deliverable-number">{number}</span><h2>{title}</h2><p>{intro}</p><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>;
}

export default function LivrablesPage() {
  return (
    <div className="site-shell">
      <SiteHeader current="Méthode & livrables" />
      <main>
        <PageHero eyebrow="Les livrables" title="Des constats exploitables et une trajectoire d’action" intro="Chaque document est construit pour l’entité cliente, son périmètre, ses outils et ses responsabilités. Il ne s’agit pas de simples modèles génériques." />
        <section className="content-section deliverable-grid">
          <DeliverableCard number="01" title="Rapport d’état des lieux et d’analyse rétrospective" intro="Une lecture structurée de la situation, des limites observées et des décisions à prendre." items={reportItems} />
          <DeliverableCard number="02" title="Registre d’analyse, de rapprochement et de suivi des écarts" intro="Un support opérationnel pour organiser les cas, les actions et les preuves attendues." items={registerItems} />
        </section>
        <section className="content-section content-section-tinted">
          <div className="content-intro"><p className="eyebrow">Pendant et après la mission</p><h2>Les documents de suivi</h2><p>Une documentation régulière permet de conserver une vision commune de l’avancement et des prochaines étapes.</p></div>
          <div className="followup-grid">
            <article><span>01</span><h3>Comptes rendus</h3><p>Pour les réunions organisées par MMPA.</p></article>
            <article><span>02</span><h3>Synthèse hebdomadaire</h3><p>Une lecture claire de l’avancement, des points ouverts et des arbitrages.</p></article>
            <article><span>03</span><h3>Note de suivi</h3><p>Produite après le rendez-vous offert de deux heures, organisé trois mois après la fin de la mission.</p></article>
          </div>
        </section>
        <section className="specific-note"><p>Chaque livrable est spécifique à l’entité cliente et n’a pas vocation à être transféré à une autre entité.</p></section>
        <CtaBand title="Quels livrables seraient utiles à votre situation ?" text="Le contenu final est défini à partir du périmètre réellement analysable." label="Échanger sur vos besoins" href="/contact" />
      </main>
      <SiteFooter />
    </div>
  );
}
