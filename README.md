# PAÏA by MMPA

Site vitrine de PAÏA by MMPA — Paie · Absences · Indemnisation · Analyse.

Cette version complète est préparée pour le dépôt GitHub
`ProjetTechAcademy/MMPA` et pour Vercel. Elle contient notamment le dossier
`app`, indispensable au fonctionnement de Next.js :

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

1. Décompresser cette archive sur l’ordinateur.
2. Vérifier que les dossiers `app` et `public` sont visibles à côté de
   `package.json`.
3. Envoyer le contenu du dossier décompressé vers le dépôt
   `ProjetTechAcademy/MMPA`. Ne pas envoyer seulement le fichier ZIP.
4. Depuis le dossier décompressé, la méthode Terminal est :

```bash
git init
git add .
git commit -m "Création du site PAÏA by MMPA"
git branch -M main
git remote add origin https://github.com/ProjetTechAcademy/MMPA.git
git push -u origin main
```

## Déploiement sur Vercel

1. Dans Vercel, choisir **Add New > Project**.
2. Importer le dépôt GitHub `ProjetTechAcademy/MMPA`.
3. Laisser Vercel détecter **Next.js**.
4. Laisser le **répertoire racine** vide ou sur `./` : Vercel doit voir
   `app` et `package.json` au même niveau.
5. Aucune variable d’environnement n’est obligatoire pour le premier
   déploiement. La variable facultative `NEXT_PUBLIC_SITE_URL` pourra être
   ajoutée avec l’adresse publique finale du site.
6. Cliquer sur **Deploy**.

Les modifications poussées ensuite sur la branche `main` pourront déclencher automatiquement un nouveau déploiement Vercel.

## Important

Les fichiers présents dans `public/brand` sont les éléments graphiques officiels. Ils ne doivent pas être redessinés, déformés, recolorés ou recomposés.

Le formulaire actuel prépare un récapitulatif localement. Il n’envoie aucune donnée vers une boîte mail ou un CRM tant qu’un service de destination n’a pas été configuré.
