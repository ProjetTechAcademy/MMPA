"use client";

import { FormEvent, useEffect, useState } from "react";

const services: Record<string, string> = {
  TAMP: "TAMP — Traitement des absences maladie en paie",
  PDP: "PDP — Production de paie",
  TADP: "TADP — Traitement de l’administration du personnel",
  AUTRE: "Autre besoin",
};

export default function ContactForm() {
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState(false);
  const [service, setService] = useState("");

  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("service") || "";
    if (services[selected]) setService(selected);
  }, []);

  function prepareRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const toolCategories = ["paie", "gta", "adp", "recrutement", "formation", "comptabilite"];
    const lines = [
      "DEMANDE DE CONTACT — PAÏA BY MMPA", "",
      `Service : ${services[String(data.get("service"))] || "Autre besoin"}`,
      `Entreprise : ${data.get("company") || ""}`,
      `SIREN / SIRET : ${data.get("identifier") || ""}`,
      `Contact : ${data.get("name") || ""}`,
      `Fonction : ${data.get("role") || ""}`,
      `E-mail : ${data.get("email") || ""}`,
      `Téléphone : ${data.get("phone") || ""}`,
      `Effectif : ${data.get("size") || ""}`,
      `Entités juridiques : ${data.get("entities") || ""}`,
      `Période / durée : ${data.get("period") || ""}`, "",
      "OUTILS CONCERNÉS",
      ...toolCategories.map(key => `${key.toUpperCase()} : ${data.get(key) || "Non renseigné"}`),
      `Autres outils : ${data.get("otherTools") || "Non renseigné"}`, "",
      "PROJET ET RÉSULTAT ATTENDU", String(data.get("project") || ""), "",
      `Disponibilité souhaitée : ${data.get("availability") || ""}`,
    ];
    setSummary(lines.join("\n"));
    setCopied(false);
    requestAnimationFrame(() => document.getElementById("request-summary")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  async function copySummary() {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
  }

  return <>
    <form className="contact-form qualification-form" onSubmit={prepareRequest}>
      <div className="form-section-title"><span>01</span><div><strong>Votre besoin</strong><p>Choisissez un service ou décrivez un autre projet.</p></div></div>
      <div className="field field-wide"><label htmlFor="service">Service recherché *</label><select id="service" name="service" value={service} onChange={e => setService(e.target.value)} required><option value="" disabled>Sélectionner un service</option>{Object.entries(services).map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></div>
      <div className="form-section-title"><span>02</span><div><strong>Votre organisation</strong><p>Les informations nécessaires pour situer le contexte.</p></div></div>
      <div className="field"><label htmlFor="company">Nom de l’entité *</label><input id="company" name="company" required /></div>
      <div className="field"><label htmlFor="identifier">SIREN ou SIRET *</label><input id="identifier" name="identifier" required /></div>
      <div className="field"><label htmlFor="name">Nom et prénom du contact *</label><input id="name" name="name" required /></div>
      <div className="field"><label htmlFor="role">Fonction *</label><input id="role" name="role" required /></div>
      <div className="field"><label htmlFor="email">Adresse électronique professionnelle *</label><input id="email" name="email" type="email" required /></div>
      <div className="field"><label htmlFor="phone">Téléphone *</label><input id="phone" name="phone" type="tel" required /></div>
      <div className="field"><label htmlFor="size">Effectif concerné *</label><select id="size" name="size" required defaultValue=""><option value="" disabled>Sélectionner</option><option>1 à 49 salariés</option><option>50 à 249 salariés</option><option>250 à 499 salariés</option><option>500 à 999 salariés</option><option>1 000 à 2 499 salariés</option><option>2 500 salariés et plus</option></select></div>
      <div className="field"><label htmlFor="entities">Nombre d’entités juridiques *</label><input id="entities" name="entities" inputMode="numeric" required /></div>
      <div className="form-section-title"><span>03</span><div><strong>Votre environnement</strong><p>Renseignez uniquement les outils concernés. « Autre » peut être précisé librement.</p></div></div>
      {[["paie","Outil de paie"],["gta","Outil de GTA"],["adp","Outil ADP / SIRH"],["recrutement","Outil de recrutement"],["formation","Outil de formation"],["comptabilite","Outil comptable / finance"]].map(([name,label]) => <div className="field" key={name}><label htmlFor={name}>{label}</label><input id={name} name={name} placeholder="Nom de l’outil ou Non concerné" /></div>)}
      <div className="field field-wide"><label htmlFor="otherTools">Autres outils concernés</label><input id="otherTools" name="otherTools" placeholder="Précisez librement" /></div>
      <div className="form-section-title"><span>04</span><div><strong>Votre projet</strong><p>Expliquez le besoin, le contexte et le résultat que vous attendez.</p></div></div>
      <div className="field field-wide"><label htmlFor="project">Description du projet *</label><textarea id="project" name="project" rows={8} required placeholder="Quel est votre besoin ? Quel résultat recherchez-vous ? Quels sont vos délais ou contraintes ?" /></div>
      <div className="field"><label htmlFor="period">Période ou durée envisagée *</label><input id="period" name="period" required placeholder="Ex. 20 jours, 3 mois, besoin récurrent…" /></div>
      <div className="field"><label htmlFor="availability">Date de démarrage souhaitée *</label><input id="availability" name="availability" required /></div>
      <label className="consent field-wide"><input type="checkbox" name="consent" required /><span>J’accepte que ces informations soient utilisées pour étudier ma demande, conformément à la politique de confidentialité.</span></label>
      <div className="form-warning field-wide"><strong>Confidentialité</strong><p>Ne transmettez aucun bulletin, arrêt de travail, donnée médicale ou information concernant un salarié dans ce formulaire.</p></div>
      <button className="button button-primary field-wide" type="submit">Préparer ma demande <span aria-hidden="true">↗</span></button>
    </form>
    {summary && <section className="request-summary" id="request-summary" aria-live="polite"><p className="eyebrow eyebrow-gold">Demande préparée</p><h2>Votre récapitulatif est prêt</h2><p>Relisez et copiez cette synthèse. Elle permettra de préparer un premier échange, sans constituer un devis ni un engagement de faisabilité.</p><pre>{summary}</pre><button className="button button-gold" type="button" onClick={copySummary}>{copied ? "Récapitulatif copié" : "Copier le récapitulatif"}</button></section>}
  </>;
}
