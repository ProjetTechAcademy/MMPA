"use client";

import { FormEvent, useEffect, useState } from "react";

export default function ContactForm() {
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState(false);
  const [simulation, setSimulation] = useState("");

  useEffect(() => {
    const profile = new URLSearchParams(window.location.search).get("simulation");
    const labels: Record<string, string> = {
      cible: "Périmètre ciblé",
      "a-qualifier": "Périmètre à qualifier",
      etendu: "Périmètre étendu",
    };
    if (profile && labels[profile]) setSimulation(labels[profile]);
  }, []);

  function prepareRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "DEMANDE DE PREMIER ÉCHANGE — PAÏA BY MMPA",
      "",
      `Nom et prénom : ${data.get("name") || ""}`,
      `Entreprise : ${data.get("company") || ""}`,
      `Fonction : ${data.get("role") || ""}`,
      `Adresse électronique : ${data.get("email") || ""}`,
      `Téléphone : ${data.get("phone") || "Non renseigné"}`,
      `Effectif approximatif : ${data.get("size") || ""}`,
      `Nombre d’entités : ${data.get("entities") || ""}`,
      `Outils de paie et GTA : ${data.get("tools") || ""}`,
      `Période concernée : ${data.get("period") || ""}`,
      `Accompagnement recherché : ${data.get("support") || ""}`,
      `Disponibilité souhaitée : ${data.get("availability") || ""}`,
      `Résultat de la simulation : ${simulation || "Non réalisée"}`,
      "",
      "Problématique :",
      String(data.get("problem") || ""),
    ];
    setSummary(lines.join("\n"));
    setCopied(false);
  }

  async function copySummary() {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
  }

  return (
    <>
      {simulation && <div className="simulation-recall"><span>Résultat transmis depuis le simulateur</span><strong>{simulation}</strong><p>Ce repère sera repris lors du premier échange.</p></div>}
      <form className="contact-form" onSubmit={prepareRequest}>
        <div className="field"><label htmlFor="name">Nom et prénom *</label><input id="name" name="name" required /></div>
        <div className="field"><label htmlFor="company">Entreprise *</label><input id="company" name="company" required /></div>
        <div className="field"><label htmlFor="role">Fonction *</label><input id="role" name="role" required /></div>
        <div className="field"><label htmlFor="email">Adresse électronique professionnelle *</label><input id="email" name="email" type="email" required /></div>
        <div className="field"><label htmlFor="phone">Téléphone <span>facultatif</span></label><input id="phone" name="phone" type="tel" /></div>
        <div className="field"><label htmlFor="size">Nombre approximatif de salariés *</label><input id="size" name="size" inputMode="numeric" required /></div>
        <div className="field"><label htmlFor="entities">Nombre d’entités juridiques *</label><input id="entities" name="entities" inputMode="numeric" required /></div>
        <div className="field"><label htmlFor="tools">Outils de paie et de GTA *</label><input id="tools" name="tools" required /></div>
        <div className="field field-wide"><label htmlFor="problem">Problématique rencontrée *</label><textarea id="problem" name="problem" rows={6} required /></div>
        <div className="field"><label htmlFor="period">Période concernée *</label><input id="period" name="period" required /></div>
        <div className="field"><label htmlFor="support">Type d’accompagnement recherché *</label><select id="support" name="support" required defaultValue=""><option value="" disabled>Sélectionner</option><option>État des lieux</option><option>Analyse rétrospective</option><option>Rapprochement et suivi des écarts</option><option>Transfert opérationnel de compétences</option><option>À qualifier lors du premier échange</option></select></div>
        <div className="field"><label htmlFor="availability">Disponibilité souhaitée *</label><input id="availability" name="availability" required /></div>
        <label className="consent"><input type="checkbox" name="consent" required /><span>J’accepte que les informations saisies soient utilisées pour préparer ma demande, conformément à la politique de confidentialité.</span></label>
        <div className="form-warning"><strong>Important</strong><p>Ne transmettez aucune donnée médicale, aucun bulletin de paie, aucun arrêt de travail et aucune information personnelle concernant un salarié dans ce formulaire.</p></div>
        <button className="button button-primary" type="submit">Préparer ma demande</button>
        <p className="form-status">Cette première version prépare votre demande localement. Aucune donnée n’est transmise tant que l’adresse professionnelle de contact n’est pas renseignée.</p>
      </form>
      {summary && <section className="request-summary" aria-live="polite"><h2>Votre demande est prête</h2><p>Relisez puis copiez ce récapitulatif. L’envoi direct sera activé lorsque l’adresse professionnelle PAÏA sera renseignée.</p><pre>{summary}</pre><button className="button button-secondary" type="button" onClick={copySummary}>{copied ? "Copié !" : "Copier le récapitulatif"}</button></section>}
    </>
  );
}
