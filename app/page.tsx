import Link from "next/link";
import { CtaBand, SiteFooter, SiteHeader } from "./components/SiteChrome";

const services = [
  { acronym: "TAMP", title: "Traitement des absences maladie en paie", text: "Analyser les absences, les IJSS, le maintien de salaire, la subrogation et les données associées pour rendre les écarts lisibles.", tone: "navy" },
  { acronym: "PDP", title: "Production de paie", text: "Prendre en charge un besoin de production de paie, ponctuel ou récurrent, selon votre organisation, votre calendrier et vos outils.", tone: "gold" },
  { acronym: "TADP", title: "Traitement de l’administration du personnel", text: "Traiter les opérations d’administration du personnel selon le périmètre, la période et les priorités définis ensemble.", tone: "violet" },
];

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader current="Accueil" />
      <main>
        <section className="offer-hero">
          <div className="offer-hero-copy">
            <p className="eyebrow">Paie · Absences · Indemnisation · Analyse</p>
            <h1>Votre besoin est précis.<br /><em>Notre réponse aussi.</em></h1>
            <p className="offer-lead">PAÏA by MMPA intervient sur trois services clairement définis et s’adapte au contexte réel de votre organisation.</p>
            <div className="button-row">
              <Link className="button button-primary" href="/simulateur">Estimer mon besoin <span aria-hidden="true">↗</span></Link>
              <Link className="button button-secondary" href="/contact">Décrire mon projet <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="offer-hero-brand">
            <img src="/brand/logo-principal.png" alt="PAÏA by MMPA — Paie, Absences, Indemnisation, Analyse" />
            <p>Une expertise métier de terrain depuis 2004.</p>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="services-heading">
            <div><p className="eyebrow">Nos services</p><h2>Trois réponses.<br />Un même niveau d’exigence.</h2></div>
            <p>Sélectionnez le service qui correspond à votre besoin. Si votre projet sort de ces trois périmètres, décrivez-le librement dans le formulaire.</p>
          </div>
          <div className="service-card-grid">
            {services.map((service, index) => (
              <article className={`service-card service-card-${service.tone}`} key={service.acronym}>
                <span className="service-number">0{index + 1}</span>
                <strong className="service-acronym">{service.acronym}</strong>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href={`/contact?service=${service.acronym}`}>Présenter ce besoin <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
          <div className="other-need">
            <div><span>Votre besoin est différent ?</span><strong>Migration, recette, changement d’outil ou autre projet : expliquez-nous votre contexte.</strong></div>
            <Link className="button button-secondary" href="/contact?service=AUTRE">Décrire un autre besoin</Link>
          </div>
        </section>

        <section className="fast-path-section">
          <div className="fast-path-copy"><p className="eyebrow eyebrow-gold">Un parcours sans détour</p><h2>Vous êtes pressé.<br />Allons à l’essentiel.</h2><p>Quelques informations structurées nous permettent de comprendre votre contexte et de revenir vers vous avec une réponse utile.</p></div>
          <ol className="fast-path-steps">
            <li><span>01</span><div><strong>Choisissez</strong><p>TAMP, PDP, TADP ou un autre besoin.</p></div></li>
            <li><span>02</span><div><strong>Précisez</strong><p>Effectif, organisation, outils, période et résultat attendu.</p></div></li>
            <li><span>03</span><div><strong>Échangeons</strong><p>Nous confirmons la faisabilité et la suite la plus adaptée.</p></div></li>
          </ol>
        </section>

        <CtaBand title="Quel besoin souhaitez-vous nous confier ?" text="Décrivez votre contexte en quelques minutes. Aucun document ni donnée concernant un salarié ne doit être transmis." label="Commencer ma demande" href="/contact" />
      </main>
      <SiteFooter />
    </div>
  );
}
