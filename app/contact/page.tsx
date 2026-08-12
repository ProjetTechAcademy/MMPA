import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contact et demande de devis" };

export default function ContactPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <PageHero eyebrow="Contact et prise de rendez-vous" title="Parlons de votre situation" intro="Présentez le contexte sans transmettre de données individuelles. Les modalités d’échange sécurisé seront définies après le premier contact." />
        <section className="contact-layout">
          <aside className="contact-aside"><p className="eyebrow">Premier échange</p><h2>Qualifier avant de proposer</h2><p>Ce premier échange permet de comprendre le périmètre, les outils, la disponibilité des données et le résultat attendu.</p><div className="contact-facts"><p><strong>Une entité juridique</strong><span>Un devis distinct</span></p><p><strong>Données sensibles</strong><span>Échange sécurisé défini ensuite</span></p><p><strong>Rendez-vous</strong><span>Le choix direct d’un créneau sera activé avec le lien Google Agenda professionnel</span></p></div></aside>
          <ContactForm />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
