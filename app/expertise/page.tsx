import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Nos services" };

const services = [
  { acronym: "TAMP", title: "Traitement des absences maladie en paie", intro: "Comprendre et analyser le traitement des absences, de l’événement jusqu’à l’indemnisation.", examples: ["Absences et paie", "DSN événementielle", "IJSS, maintien et subrogation", "Prévoyance et rapprochements"] },
  { acronym: "PDP", title: "Production de paie", intro: "Répondre à un besoin ponctuel ou récurrent de production selon votre calendrier et votre environnement.", examples: ["Périmètre de paie défini", "Organisation et calendrier", "Outils et données disponibles", "Durée et rythme souhaités"] },
  { acronym: "TADP", title: "Traitement de l’administration du personnel", intro: "Prendre en charge les opérations d’administration du personnel retenues dans le périmètre.", examples: ["Entrées et sorties", "Contrats et avenants", "Suivi des absences", "Dossiers et échéances administratives"] },
];

export default function ServicesPage() {
  return <div className="site-shell"><SiteHeader current="Nos services" /><main>
    <PageHero eyebrow="Nos services" title="Trois services, clairement définis" intro="TAMP, PDP et TADP sont proposés au même niveau. Le périmètre exact est ensuite adapté à votre organisation et à votre besoin." />
    <section className="content-section service-detail-list">
      {services.map((service, index) => <article className="service-detail" key={service.acronym}>
        <div className="service-detail-head"><span>0{index + 1}</span><strong>{service.acronym}</strong></div>
        <div className="service-detail-copy"><h2>{service.title}</h2><p>{service.intro}</p><div className="service-example-list">{service.examples.map(example => <span key={example}>{example}</span>)}</div><Link className="text-link" href={`/contact?service=${service.acronym}`}>Présenter mon besoin <span aria-hidden="true">→</span></Link></div>
      </article>)}
    </section>
    <section className="custom-project"><p className="eyebrow eyebrow-gold">Un autre projet ?</p><h2>Votre besoin ne rentre pas dans une case ?</h2><p>Décrivez librement votre projet, les outils concernés et le résultat attendu. Nous vous indiquerons si PAÏA by MMPA peut y répondre.</p><Link className="button button-gold" href="/contact?service=AUTRE">Décrire mon projet</Link></section>
    <CtaBand title="Vous savez déjà ce qu’il vous faut ?" text="Passez directement à la qualification de votre demande." label="Commencer ma demande" href="/contact" />
  </main><SiteFooter /></div>;
}
