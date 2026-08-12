import type { Metadata } from "next";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";
import Simulator from "./Simulator";

export const metadata: Metadata = { title: "Simuler votre besoin" };

export default function SimulatorPage() {
  return (
    <div className="site-shell">
      <SiteHeader current="Simuler le besoin" />
      <main>
        <PageHero
          eyebrow="Simulateur de cadrage"
          title="Situer votre besoin avant le premier échange"
          intro="Quelques informations générales permettent d’identifier les principaux facteurs de complexité, sans transmettre aucune donnée relative à un salarié."
        />
        <section className="content-section simulator-section">
          <div className="content-intro">
            <p className="eyebrow">Une première lecture indicative</p>
            <h2>Évaluer le périmètre, pas afficher un prix automatique</h2>
            <p>Une mission PAÏA ne se résume pas à un effectif. Les entités, les règles, les outils, l’historique et la qualité des données doivent être examinés ensemble.</p>
          </div>
          <Simulator />
        </section>
        <CtaBand title="Vous préférez présenter directement votre situation ?" text="Le formulaire permet de préparer le rendez-vous sans transmettre de données individuelles." label="Préparer un premier échange" href="/contact" />
      </main>
      <SiteFooter />
    </div>
  );
}
