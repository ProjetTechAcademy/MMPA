"use client";

import { FormEvent, useState } from "react";

type Estimate = { label: string; title: string; text: string; points: string[]; service: string };

export default function Simulator() {
  const [estimate, setEstimate] = useState<Estimate | null>(null);

  function simulate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const service = String(data.get("service") || "AUTRE");
    const complexity = ["size", "entities", "duration", "tools", "frequency"].reduce((sum, key) => sum + Number(data.get(key) || 0), 0);
    const serviceLabels: Record<string,string> = { TAMP: "TAMP — Traitement des absences maladie en paie", PDP: "PDP — Production de paie", TADP: "TADP — Traitement de l’administration du personnel", AUTRE: "Autre besoin" };
    const base = complexity <= 3 ? { label: "Besoin ciblé", title: "Votre besoin paraît circonscrit", text: "Les informations indiquent un périmètre ciblé. La durée exacte et la faisabilité devront être confirmées ensemble.", points: ["Contexte à confirmer", "Organisation et outils à préciser", "Échange court recommandé"] } : complexity <= 7 ? { label: "Besoin structuré", title: "Votre demande mérite un cadrage précis", text: "Plusieurs paramètres influencent le volume d’intervention. Un échange permettra de définir une première fourchette de jours.", points: ["Plusieurs paramètres à combiner", "Période et rythme à confirmer", "Estimation personnalisée nécessaire"] } : { label: "Besoin étendu", title: "Votre projet présente plusieurs dimensions", text: "Une intervention progressive ou récurrente peut être adaptée. Le périmètre devra être priorisé avant toute proposition.", points: ["Périmètre étendu", "Priorités à organiser", "Découpage en étapes à envisager"] };
    setEstimate({ ...base, service: serviceLabels[service] || serviceLabels.AUTRE });
    requestAnimationFrame(() => document.getElementById("simulation-result")?.scrollIntoView({ behavior: "smooth", block: "center" }));
  }

  return <div className="simulator-wrap">
    <form className="simulator-form" onSubmit={simulate}>
      <fieldset><legend><span>01</span> Votre service</legend><div className="service-choice-grid">
        {[['TAMP','Traitement des absences maladie en paie'],['PDP','Production de paie'],['TADP','Traitement de l’administration du personnel'],['AUTRE','Autre besoin']].map(([value,label]) => <label className="service-choice" key={value}><input type="radio" name="service" value={value} required /><strong>{value === 'AUTRE' ? 'AUTRE' : value}</strong><span>{label}</span></label>)}
      </div></fieldset>
      <fieldset><legend><span>02</span> Votre organisation</legend><div className="simulator-grid">
        <label><span>Effectif concerné</span><select name="size" defaultValue="0"><option value="0">1 à 49 salariés</option><option value="1">50 à 249 salariés</option><option value="2">250 à 499 salariés</option><option value="3">500 à 999 salariés</option><option value="4">1 000 à 2 499 salariés</option><option value="5">2 500 salariés et plus</option></select></label>
        <label><span>Entités juridiques</span><select name="entities" defaultValue="0"><option value="0">1 entité</option><option value="1">2 à 3 entités</option><option value="2">4 entités ou plus</option></select></label>
        <label><span>Outils concernés</span><select name="tools" defaultValue="1"><option value="0">1 outil</option><option value="1">2 à 3 outils</option><option value="2">4 outils ou plus</option><option value="2">À préciser</option></select></label>
      </div></fieldset>
      <fieldset><legend><span>03</span> Votre besoin dans le temps</legend><div className="simulator-grid">
        <label><span>Durée envisagée</span><select name="duration" defaultValue="1"><option value="0">Moins de 5 jours</option><option value="1">5 à 20 jours</option><option value="2">Plus de 20 jours</option><option value="2">Plusieurs mois</option><option value="1">Je ne sais pas encore</option></select></label>
        <label><span>Rythme souhaité</span><select name="frequency" defaultValue="1"><option value="0">Intervention ponctuelle</option><option value="1">Quelques jours par mois</option><option value="2">Besoin récurrent</option><option value="1">À déterminer</option></select></label>
        <label><span>Nombre de jours envisagé</span><input name="days" placeholder="Facultatif — ex. 20 jours" /></label>
      </div></fieldset>
      <div className="simulator-notice"><strong>Une estimation, pas un devis</strong><p>Le résultat situe le niveau de cadrage nécessaire. Le nombre de jours et la faisabilité sont confirmés après échange.</p></div>
      <button className="button button-primary" type="submit">Obtenir ma première estimation <span aria-hidden="true">↗</span></button>
    </form>
    {estimate && <section className="simulation-result" id="simulation-result" aria-live="polite"><p className="simulation-label">{estimate.label}</p><small>{estimate.service}</small><h2>{estimate.title}</h2><p>{estimate.text}</p><ul>{estimate.points.map(p => <li key={p}>{p}</li>)}</ul><div className="button-row"><a className="button button-gold" href={`/contact?service=${estimate.service.split(' ')[0]}`}>Décrire ce besoin</a><button className="button button-ghost-light" type="button" onClick={() => setEstimate(null)}>Recommencer</button></div></section>}
  </div>;
}
