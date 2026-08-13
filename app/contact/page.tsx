import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contact et demande de devis" };

export default function ContactPage() {
  return (
    <div className="site-shell contact-page">
      <SiteHeader />
      <main>
        <PageHero eyebrow="Contact et prise de rendez-vous" title="Commençons par votre contexte" intro="Quelques renseignements essentiels permettent de qualifier la demande avant de choisir un créneau de 45 minutes." />
        <section className="contact-introduction" aria-label="Déroulement du premier échange">
          <div>
            <p className="eyebrow">Premier échange</p>
            <h2>Un parcours simple, clair et confidentiel.</h2>
          </div>
          <ol className="contact-steps">
            <li><span>01</span><strong>Présenter</strong><small>Le contact et l’entité juridique</small></li>
            <li><span>02</span><strong>Qualifier</strong><small>Le contexte et le besoin</small></li>
            <li><span>03</span><strong>Planifier</strong><small>Un échange de 45 minutes</small></li>
          </ol>
        </section>
        <section className="contact-layout">
          <aside className="contact-aside">
            <p className="eyebrow">Cadre de l’échange</p>
            <h2>Qualifier avant de proposer</h2>
            <p>Le formulaire occupe volontairement la place principale. Il permet de préparer un échange utile, sans demander de données individuelles de salariés.</p>
            <div className="contact-facts">
              <p><span>45 min</span><strong>Temps d’échange</strong><small>puis 15 minutes de respiration</small></p>
              <p><span>1</span><strong>Entité juridique</strong><small>un périmètre et un devis distincts</small></p>
              <p><span>100 %</span><strong>Confidentiel</strong><small>aucune donnée médicale ou de paie ici</small></p>
            </div>
          </aside>
          <div className="contact-form-panel">
            <div className="contact-form-heading">
              <span>01 · Qualification</span>
              <h2>Renseignements préalables</h2>
              <p>Les champs marqués d’un astérisque sont nécessaires pour préparer le premier échange.</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
