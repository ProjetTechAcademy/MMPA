import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Sécurité" };

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "mathilde.martine.paisley@gmail.com";

export default function SecurityPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Sécurité"
          title="Une protection par couches"
          intro="Moins de données collectées, des secrets séparés du code et des contrôles à chaque mise à jour."
        />
        <section className="legal-content">
          <h2>Mesures intégrées</h2>
          <p>
            Le site applique des en-têtes de sécurité, refuse son affichage dans une iframe tierce, limite les fonctions
            du navigateur, masque la technologie serveur et reste hors indexation tant que son ouverture n’est pas décidée.
            Les dépendances et les fichiers sensibles font l’objet de contrôles automatisés dans le projet.
          </p>

          <h2>Surface d’exposition actuelle</h2>
          <p>
            Le site ne contient actuellement ni espace client, ni dépôt de documents, ni base de données de prospects,
            ni paiement en ligne. Cette sobriété réduit fortement l’exposition, sans permettre de promettre un risque nul.
          </p>

          <h2>Signaler une vulnérabilité</h2>
          <p>
            Pour signaler de manière responsable un problème de sécurité, écrivez à
            {" "}<a href={`mailto:${contactEmail}?subject=Signalement%20de%20sécurité`}>{contactEmail}</a> sans joindre
            de données personnelles, de documents de paie ou de secret exploitable dans le premier message.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
