# PAÏA by MMPA

Site vitrine de PAÏA by MMPA — Paie · Absences · Indemnisation · Analyse.

Cette version est préparée pour GitHub et Vercel. Elle contient :

- la page d’accueil éditoriale ;
- les pages Expertise, Méthode, Livrables et À propos ;
- le simulateur de besoin sans affichage de tarifs ;
- le formulaire de préparation du premier échange ;
- les mentions légales et la politique de confidentialité ;
- les logos et éléments graphiques officiels PAÏA fournis par Mathilde Martine PAISLEY.

## Démarrage local

Prérequis : Node.js 22 ou une version compatible avec Next.js 16.

```bash
npm install
npm run dev
```

Ouvrir ensuite `http://localhost:3000`.

## Vérification de production

```bash
npm run build
npm start
```

## Mise sur GitHub

1. Créer un dépôt vide nommé `paia-by-mmpa`.
2. Décompresser cette archive.
3. Depuis le dossier décompressé :

```bash
git init
git add .
git commit -m "Création du site PAÏA by MMPA"
git branch -M main
git remote add origin URL_DU_DEPOT_GITHUB
git push -u origin main
```

## Déploiement sur Vercel

1. Dans Vercel, choisir **Add New > Project**.
2. Importer le dépôt GitHub `paia-by-mmpa`.
3. Laisser Vercel détecter **Next.js**.
4. Ajouter la variable facultative `NEXT_PUBLIC_SITE_URL` avec l’adresse publique finale du site.
5. Cliquer sur **Deploy**.

Les modifications poussées ensuite sur la branche `main` pourront déclencher automatiquement un nouveau déploiement Vercel.

## Important

Les fichiers présents dans `public/brand` sont les éléments graphiques officiels. Ils ne doivent pas être redessinés, déformés, recolorés ou recomposés.

Le formulaire actuel prépare un récapitulatif localement. Il n’envoie aucune donnée vers une boîte mail ou un CRM tant qu’un service de destination n’a pas été configuré.
