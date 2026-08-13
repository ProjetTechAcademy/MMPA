# PAÏA by MMPA — version GitHub et Vercel

Site vitrine de PAÏA by MMPA — Paie · Absences · Indemnisation · Analyse.

Cette archive est la version Next.js native destinée à GitHub et Vercel. Elle
ne dépend pas des fichiers techniques `.openai/hosting.json`, Vinext, Vite,
Wrangler ou Cloudflare utilisés uniquement par l’environnement d’aperçu.

Elle contient notamment :

- la page d’accueil éditoriale ;
- les pages Expertise, Méthode, Livrables et À propos ;
- le simulateur de besoin sans affichage de tarifs ;
- le formulaire de préparation du premier échange ;
- les mentions légales, les pages RGPD et les en-têtes de sécurité ;
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

## Remplacement du dépôt avec GitHub Desktop

1. Décompresser cette archive sur l’ordinateur.
2. Ouvrir avec GitHub Desktop le dossier local du dépôt
   `ProjetTechAcademy/MMPA`.
3. Supprimer l’ancien contenu du dossier local, sans supprimer son dossier
   caché `.git`.
4. Copier à la racine du dépôt tout le contenu de cette archive. Les dossiers
   `app` et `public` doivent être au même niveau que `package.json`.
5. Vérifier dans GitHub Desktop que les anciens fichiers `vite.config.ts`,
   `.openai`, `worker`, `build`, `db`, `drizzle` et les scripts Vinext sont
   indiqués comme supprimés.
6. Valider (commit) puis publier (push) les modifications sur `main`.

Ne pas déposer le fichier ZIP lui-même dans GitHub : il faut déposer son
contenu décompressé.

## Déploiement sur Vercel

1. Dans Vercel, ouvrir le projet déjà relié au dépôt GitHub.
2. Laisser Vercel détecter **Next.js**.
3. Le **répertoire racine** doit rester vide ou sur `./` : Vercel doit voir
   `app` et `package.json` au même niveau.
4. Le script exécuté doit être `next build`, et non `vinext build`.
5. Aucune variable d’environnement n’est obligatoire pour le premier
   déploiement.

Le push sur `main` lance normalement un nouveau déploiement. Dans
**Settings > Build & Deployment**, supprimer toute commande personnalisée
Vinext/Vite et conserver les valeurs détectées par Vercel.

## Important

Les fichiers présents dans `public/brand` sont les éléments graphiques
officiels. Ils ne doivent pas être redessinés, déformés, recolorés ou
recomposés.

Le formulaire actuel prépare un récapitulatif localement. Il n’envoie aucune
donnée vers une boîte mail ou un CRM tant qu’un service de destination n’a pas
été configuré.
