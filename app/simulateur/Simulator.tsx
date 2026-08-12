"use client";

import { FormEvent, useState } from "react";

type Result = {
  profile: "cible" | "a-qualifier" | "etendu";
  label: string;
  title: string;
  text: string;
  points: string[];
};

function scoreValue(value: FormDataEntryValue | null) {
  return Number(value || 0);
}

export default function Simulator() {
  const [result, setResult] = useState<Result | null>(null);

  function simulate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const score = ["size", "entities", "period", "systems", "agreements", "scope", "quality"]
      .reduce((total, key) => total + scoreValue(data.get(key)), 0);

    if (score <= 4) {
      setResult({
        profile: "cible",
        label: "Périmètre ciblé",
        title: "Votre besoin semble pouvoir être circonscrit rapidement",
        text: "Le premier échange devra confirmer la disponibilité des données et les situations réellement concernées avant toute proposition.",
        points: ["Périmètre apparemment limité", "Sources peu nombreuses", "Qualification initiale indispensable"],
      });
    } else if (score <= 9) {
      setResult({
        profile: "a-qualifier",
        label: "Périmètre à qualifier",
        title: "Votre situation nécessite une qualification structurée",
        text: "Plusieurs facteurs peuvent modifier la charge : organisation, règles applicables, outils, historique et qualité des rapprochements disponibles.",
        points: ["Plusieurs dimensions à rapprocher", "Échantillonnage ou priorisation à définir", "Échange de cadrage recommandé"],
      });
    } else {
      setResult({
        profile: "etendu",
        label: "Périmètre étendu",
        title: "Votre contexte présente plusieurs facteurs de complexité",
        text: "Une approche progressive et priorisée sera probablement nécessaire afin de sécuriser le périmètre, les sources et les responsabilités.",
        points: ["Périmètre multi-dimensionnel", "Priorités à définir par entité ou population", "Mission à construire par étapes"],
      });
    }

    requestAnimationFrame(() => document.getElementById("simulation-result")?.scrollIntoView({ behavior: "smooth", block: "center" }));
  }

  return (
    <div className="simulator-wrap">
      <form className="simulator-form" onSubmit={simulate}>
        <fieldset>
          <legend>1. Structure du périmètre</legend>
          <div className="simulator-grid">
            <label><span>Effectif approximatif</span><select name="size" defaultValue="0"><option value="0">Jusqu’à 100 salariés</option><option value="1">De 101 à 500 salariés</option><option value="2">Plus de 500 salariés</option></select></label>
            <label><span>Nombre d’entités juridiques</span><select name="entities" defaultValue="0"><option value="0">1 entité</option><option value="1">2 à 3 entités</option><option value="2">Plus de 3 entités</option></select></label>
            <label><span>Conventions ou accords applicables</span><select name="agreements" defaultValue="0"><option value="0">1 convention principale</option><option value="1">2 conventions ou plusieurs accords</option><option value="2">Environnement conventionnel multiple</option></select></label>
          </div>
        </fieldset>
        <fieldset>
          <legend>2. Données et historique</legend>
          <div className="simulator-grid">
            <label><span>Période à examiner</span><select name="period" defaultValue="1"><option value="0">12 mois</option><option value="1">24 mois</option><option value="2">36 mois ou davantage</option></select></label>
            <label><span>Nombre de sources ou outils</span><select name="systems" defaultValue="1"><option value="0">1 source principale</option><option value="1">2 à 3 sources</option><option value="2">Plus de 3 sources</option></select></label>
            <label><span>Qualité apparente des données</span><select name="quality" defaultValue="1"><option value="0">Structurées et rapprochées</option><option value="1">Partiellement structurées</option><option value="2">Incertaines ou dispersées</option></select></label>
          </div>
        </fieldset>
        <fieldset>
          <legend>3. Nature du besoin</legend>
          <div className="simulator-grid simulator-grid-last">
            <label><span>Étendue des contrôles recherchés</span><select name="scope" defaultValue="1"><option value="0">Un sujet ciblé</option><option value="1">Plusieurs sujets à rapprocher</option><option value="2">État des lieux transversal</option></select></label>
          </div>
        </fieldset>
        <div className="simulator-notice"><strong>Cette simulation n’est ni un devis ni un tarif.</strong><p>Elle constitue un premier repère de cadrage fondé uniquement sur les informations sélectionnées.</p></div>
        <button className="button button-primary" type="submit">Découvrir le profil du besoin</button>
      </form>

      {result && (
        <section className={`simulation-result simulation-result-${result.profile}`} id="simulation-result" aria-live="polite">
          <p className="simulation-label">{result.label}</p>
          <h2>{result.title}</h2>
          <p>{result.text}</p>
          <ul>{result.points.map((point) => <li key={point}>{point}</li>)}</ul>
          <div className="button-row">
            <a className="button button-gold" href={`/contact?simulation=${result.profile}`}>Échanger sur ce résultat</a>
            <button className="button button-ghost-light" type="button" onClick={() => { setResult(null); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Recommencer</button>
          </div>
        </section>
      )}
    </div>
  );
}
