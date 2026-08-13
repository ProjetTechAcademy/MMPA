import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Décrire votre besoin" };

export default function ContactPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <PageHero eyebrow="Contact et premier échange" title="Décrivez votre besoin, simplement" intro="TAMP, PDP, TADP ou autre projet : transmettez les informations utiles pour que nous puissions comprendre votre contexte et vous apporter une première réponse." />
        <section className="contact-layout">
          <aside className="contact-aside"><p className="eyebrow">Votre demande</p><h2>Tout ce qu’il faut.<br />Rien de superflu.</h2><p>Le formulaire organise votre besoin pour permettre une lecture rapide et une réponse utile.</p><div className="contact-facts"><p><strong>Choisir</strong><span>TAMP, PDP, TADP ou autre</span></p><p><strong>Préciser</strong><span>Organisation, outils, durée et résultat attendu</span></p><p><strong>Échanger</strong><span>Faisabilité et prochaine étape confirmées ensemble</span></p></div></aside>
          <ContactForm />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
