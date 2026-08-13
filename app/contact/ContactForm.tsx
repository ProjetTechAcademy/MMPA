"use client";

import { FormEvent, useEffect, useState } from "react";

export default function ContactForm() {
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState(false);
  const [simulation, setSimulation] = useState("");
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "mathilde.martine.paisley@gmail.com";
  const bookingUrl = process.env.NEXT_PUBLIC_GOOGLE_BOOKING_URL || "";

  useEffect(() => {
    const profile = new URLSearchParams(window.location.search).get("simulation");
    const labels: Record<string, string> = {
      cible: "Périmètre ciblé",
      "a-qualifier": "Périmètre à qualifier",
      etendu: "Périmètre étendu",
    };
    if (profile && labels[profile]) {
      queueMicrotask(() => setSimulation(labels[profile]));
    }
  }, []);

  function prepareRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "DEMANDE DE PREMIER ÉCHANGE — PAÏA BY MMPA",
      "",
      `Nom et prénom : ${data.get("name") || ""}`,
      `Nom de l’entité : ${data.get("company") || ""}`,
      `Forme juridique : ${data.get("legalForm") || ""}`,
      `SIREN : ${data.get("siren") || ""}`,
      `SIRET de l’établissement : ${data.get("siret") || "Non concerné"}`,
      `Fonction : ${data.get("role") || ""}`,
      `Adresse électronique : ${data.get("email") || ""}`,
      `Téléphone : ${data.get("phone") || ""}`,
      `Effectif approximatif : ${data.get("size") || ""}`,
      `Nombre d’entités : ${data.get("entities") || ""}`,
      `Outils de paie et GTA : ${data.get("tools") || ""}`,
      `Période concernée : ${data.get("period") || ""}`,
      `Accompagnement recherché : ${data.get("support") || ""}`,
      `Objet de la demande : ${data.get("requestType") || ""}`,
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

  const mailHref = summary
    ? `mailto:${contactEmail}?subject=${encodeURIComponent("Demande de premier échange — PAÏA by MMPA")}&body=${encodeURIComponent(summary)}`
    : "";

  return (
    <>
      {simulation && <div className="simulation-recall"><span>Résultat transmis depuis le simulateur</span><strong>{simulation}</strong><p>Ce repère sera repris lors du premier échange.</p></div>}
      <form className="contact-form" onSubmit={prepareRequest}>
        <fieldset className="form-group">
          <legend><span>01</span> Votre identité</legend>
          <div className="field"><label htmlFor="name">Nom et prénom du contact *</label><input id="name" name="name" autoComplete="name" required /></div>
          <div className="field"><label htmlFor="role">Fonction *</label><input id="role" name="role" required /></div>
          <div className="field"><label htmlFor="email">Adresse électronique professionnelle *</label><input id="email" name="email" type="email" required /></div>
          <div className="field"><label htmlFor="phone">Numéro de téléphone *</label><input id="phone" name="phone" type="tel" autoComplete="tel" required /></div>
        </fieldset>
        <fieldset className="form-group">
          <legend><span>02</span> L’entité juridique</legend>
          <div className="field"><label htmlFor="company">Nom de l’entité *</label><input id="company" name="company" autoComplete="organization" required /></div>
          <div className="field"><label htmlFor="legalForm">Forme juridique *</label><input id="legalForm" name="legalForm" placeholder="Ex. SAS, SARL, association…" required /></div>
          <div className="field"><label htmlFor="siren">Numéro SIREN *</label><input id="siren" name="siren" inputMode="numeric" pattern="[0-9 ]{9,11}" placeholder="9 chiffres" required /></div>
          <div className="field"><label htmlFor="siret">SIRET de l’établissement <span>si la demande cible un site précis</span></label><input id="siret" name="siret" inputMode="numeric" pattern="[0-9 ]{14,17}" placeholder="14 chiffres" /></div>
          <div className="field"><label htmlFor="size">Nombre approximatif de salariés *</label><input id="size" name="size" inputMode="numeric" required /></div>
          <div className="field"><label htmlFor="entities">Nombre d’entités juridiques *</label><input id="entities" name="entities" inputMode="numeric" required /></div>
        </fieldset>
        <fieldset className="form-group form-group-context">
          <legend><span>03</span> Votre contexte</legend>
          <div className="field"><label htmlFor="requestType">Objet de la demande *</label><select id="requestType" name="requestType" required defaultValue=""><option value="" disabled>Sélectionner</option><option>Demande de premier échange</option><option>Demande de devis</option><option>Question sur le périmètre PAÏA</option><option>Autre demande professionnelle</option></select></div>
          <div className="field"><label htmlFor="tools">Outils de paie et de GTA *</label><input id="tools" name="tools" required /></div>
          <div className="field field-wide"><label htmlFor="problem">Problématique rencontrée *</label><textarea id="problem" name="problem" rows={7} required /></div>
          <div className="field"><label htmlFor="period">Période concernée *</label><input id="period" name="period" required /></div>
          <div className="field"><label htmlFor="support">Type d’accompagnement recherché *</label><select id="support" name="support" required defaultValue=""><option value="" disabled>Sélectionner</option><option>État des lieux</option><option>Analyse rétrospective</option><option>Rapprochement et suivi des écarts</option><option>Transfert opérationnel de compétences</option><option>À qualifier lors du premier échange</option></select></div>
          <div className="field"><label htmlFor="availability">Disponibilité souhaitée *</label><input id="availability" name="availability" placeholder="Ex. matin, après-midi, jours à privilégier" required /></div>
        </fieldset>
        <label className="consent"><input type="checkbox" name="consent" required /><span>J’accepte que les informations saisies soient utilisées pour préparer ma demande, conformément à la politique de confidentialité.</span></label>
        <div className="form-warning"><span aria-hidden="true">!</span><div><strong>Important</strong><p>Ne transmettez aucune donnée médicale, aucun bulletin de paie, aucun arrêt de travail et aucune information personnelle concernant un salarié dans ce formulaire.</p></div></div>
        <button className="button button-primary" type="submit">Valider mes renseignements <span aria-hidden="true">→</span></button>
        <p className="form-status">Les renseignements sont préparés localement. La réservation Google sera activée après validation du lien public de prise de rendez-vous.</p>
      </form>
      {summary && <section className="request-summary" aria-live="polite"><p className="eyebrow">02 · Transmission et planification</p><h2>Votre demande est prête</h2><p>Relisez le récapitulatif, transmettez-le, puis choisissez un échange de 45 minutes lorsque la page Google Agenda est activée.</p><div className="booking-specs"><span><strong>45 min</strong> d’échange</span><span><strong>15 min</strong> de respiration</span><span><strong>08h–12h</strong> et <strong>14h–17h</strong></span></div><pre>{summary}</pre><div className="summary-actions"><a className="button button-primary" href={mailHref}>Envoyer mes renseignements <span aria-hidden="true">→</span></a><button className="button button-secondary" type="button" onClick={copySummary}>{copied ? "Copié !" : "Copier le récapitulatif"}</button></div>{bookingUrl ? <a className="booking-button" href={bookingUrl} target="_blank" rel="noreferrer">Choisir mon créneau de 45 minutes <span aria-hidden="true">↗</span></a> : <div className="booking-pending"><span aria-hidden="true">◌</span><div><strong>Prise de rendez-vous en préparation</strong><p>Le bouton de réservation sera activé dès que le lien public Google Agenda aura été ajouté.</p></div></div>}<p className="booking-opening">Réservation ouverte à compter du 1er mars 2027 · Fuseau Europe/Paris</p></section>}
    </>
  );
}
