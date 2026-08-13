import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Politique de confidentialité" };

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "mathilde.martine.paisley@gmail.com";

export default function PrivacyPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Protection des données"
          title="Politique de confidentialité"
          intro="Une information claire sur les données utilisées pour répondre à une demande de contact ou de rendez-vous."
        />
        <section className="legal-content">
          <h2>Responsable du traitement</h2>
          <p>
            PAÏA by MMPA est responsable des données utilisées dans le cadre des prises de contact.
            L’identité juridique, l’adresse du siège et le numéro SIREN seront complétés avant
            l’ouverture commerciale. Contact provisoire : <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>

          <h2>Données concernées</h2>
          <p>
            Selon la démarche choisie, peuvent être demandés : nom, prénom, fonction, coordonnées
            professionnelles, entité, identifiant SIREN ou SIRET, objet de la demande et contexte général.
            Les champs obligatoires sont signalés dans le formulaire et limités à la qualification du besoin.
          </p>

          <h2>Données à ne jamais transmettre</h2>
          <p>
            N’adressez aucun bulletin de paie, arrêt de travail, donnée médicale, numéro de sécurité sociale
            ou information nominative concernant un salarié. Le premier échange ne nécessite aucun document de paie.
          </p>

          <h2>Finalités et bases juridiques</h2>
          <p>
            Les informations servent à répondre à la demande, organiser un rendez-vous, qualifier le besoin
            et préparer une éventuelle proposition. Ces traitements reposent sur les démarches précontractuelles
            demandées par le contact et, pour la sécurité technique du site, sur l’intérêt légitime de MMPA.
            Aucun consentement marketing n’est demandé dans cette version, car aucune prospection automatisée
            ni aucun pixel publicitaire n’est activé.
          </p>

          <h2>Fonctionnement actuel du formulaire</h2>
          <p>
            Le récapitulatif est d’abord généré localement dans le navigateur. Lorsque la personne choisit de
            l’envoyer par courrier électronique, le message est alors traité par son fournisseur de messagerie
            et par la messagerie de MMPA. Le site ne possède actuellement ni compte client, ni base de données de prospects.
          </p>

          <h2>Destinataires et prestataires</h2>
          <p>
            Les données sont accessibles à MMPA et aux seuls prestataires nécessaires au fonctionnement du service,
            notamment l’hébergeur et les fournisseurs de messagerie. Odoo ne recevra aucune donnée tant que son
            raccordement n’aura pas été activé et documenté.
          </p>

          <h2>Durées de conservation</h2>
          <p>
            Une demande de prospect sans suite sera supprimée au plus tard trois ans après sa collecte ou le dernier
            contact venant du prospect, sauf obligation légale ou nécessité probatoire. Les journaux techniques sont
            conservés selon les réglages de l’hébergeur et uniquement pendant la durée nécessaire à la sécurité et au diagnostic.
          </p>

          <h2>Vos droits</h2>
          <p>
            Vous pouvez demander l’accès, la rectification, l’effacement, la limitation ou l’opposition lorsque ce droit
            s’applique, en écrivant à <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. Vous pouvez également introduire
            une réclamation auprès de la CNIL.
          </p>

          <h2>Cookies et traceurs</h2>
          <p>
            Aucun pixel publicitaire, outil de reciblage ou traceur marketing n’est activé. La politique détaillée est
            disponible sur la page « Cookies &amp; traceurs ». Un mécanisme de consentement sera ajouté avant toute activation
            future d’un traceur qui l’exige.
          </p>

          <h2>Mise à jour avant lancement</h2>
          <p>
            Cette page constitue une base opérationnelle. Elle devra être complétée avec l’identité juridique définitive,
            les coordonnées du siège, la liste exacte des prestataires et les durées configurées avant l’ouverture publique.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
