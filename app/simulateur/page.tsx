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
          eyebrow="Première estimation"
          title="Situez rapidement votre besoin"
          intro="Choisissez TAMP, PDP, TADP ou un autre projet, puis renseignez quelques paramètres. Vous saurez immédiatement quel niveau de cadrage prévoir."
        />
        <section className="content-section simulator-section">
          <div className="content-intro">
            <p className="eyebrow">Rapide et sans tarif affiché</p>
            <h2>Une première estimation avant l’échange</h2>
            <p>L’effectif seul ne suffit pas. Le service, la durée, le rythme, les entités et les outils permettent de mieux situer votre demande.</p>
          </div>
          <Simulator />
        </section>
        <CtaBand title="Vous préférez présenter directement votre situation ?" text="Le formulaire permet de préparer le rendez-vous sans transmettre de données individuelles." label="Préparer un premier échange" href="/contact" />
      </main>
      <SiteFooter />
    </div>
  );
}
