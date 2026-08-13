import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Cookies et traceurs" };

export default function CookiesPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Traceurs"
          title="Cookies & pixels : la règle est simple"
          intro="Aucun suivi publicitaire tant qu’il n’est pas utile, expliqué et correctement consenti."
        />
        <section className="legal-content">
          <h2>État actuel du site</h2>
          <p>
            PAÏA by MMPA n’utilise actuellement aucun pixel Meta, Google Ads ou autre outil de reciblage,
            et ne dépose aucun cookie marketing. Aucun bandeau décoratif ou consentement fictif n’est donc affiché.
          </p>

          <h2>Qu’est-ce qu’un pixel ?</h2>
          <p>
            Un pixel est un traceur presque invisible qui peut signaler à une plateforme publicitaire qu’une page a été
            consultée ou qu’une action a été réalisée. Il peut servir à mesurer une campagne, créer des audiences ou
            recibler des visiteurs. Ce fonctionnement ne doit jamais être confondu avec une simple image du site.
          </p>

          <h2>Si une campagne est lancée plus tard</h2>
          <p>
            Le traceur restera bloqué avant le choix de la personne. La finalité, le fournisseur et la durée seront expliqués ;
            refuser sera aussi simple qu’accepter ; le retrait du consentement restera possible à tout moment.
            La politique de confidentialité et le registre interne seront mis à jour avant l’activation.
          </p>

          <h2>Mesure d’audience</h2>
          <p>
            Une mesure d’audience respectueuse de la vie privée pourra être envisagée séparément. Elle ne sera activée
            qu’après vérification de sa configuration, de la minimisation des données et des critères d’exemption applicables.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
