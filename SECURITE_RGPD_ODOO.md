# Sécurité, RGPD, pixels et futur raccordement Odoo

Ce document sert de feuille de route opérationnelle. Il ne remplace pas une validation juridique adaptée à la forme définitive de l’entreprise.

## 1. Ce qui protège déjà cette version

- aucun compte utilisateur, aucun paiement, aucun dépôt de documents et aucune base de prospects ;
- formulaire préparé localement avant l’ouverture volontaire de la messagerie ;
- aucun pixel publicitaire ni outil de reciblage ;
- HTTPS automatiquement géré lors du déploiement Vercel ;
- en-têtes de sécurité dans `next.config.ts` : CSP, HSTS, protection contre les iframes, limitation des permissions, anti-sniffing et politique de référent ;
- technologie serveur masquée ;
- site non indexé tant que `NEXT_PUBLIC_SITE_INDEXING` n’est pas réglé sur `enabled` ;
- `.gitignore` renforcé ;
- recherche locale de secrets avec `npm run security:check` ;
- contrôle GitHub hebdomadaire et à chaque changement : secrets courants, audit des dépendances, construction ;
- suivi hebdomadaire des mises à jour de dépendances par Dependabot ;
- canal public de signalement dans `public/.well-known/security.txt`.

Une sécurité absolue n’existe pas. L’objectif est de réduire la surface d’attaque, détecter les erreurs tôt et savoir réagir.

## 2. `.gitignore` : ce qu’il fait et ce qu’il ne fait pas

`.gitignore` empêche Git d’ajouter par erreur certains fichiers locaux : `.env.local`, clés privées, exports SQL, bases locales et fichiers Vercel. Il ne protège pas :

- un secret déjà envoyé dans l’historique Git ;
- une variable commençant par `NEXT_PUBLIC_`, car elle est volontairement envoyée au navigateur ;
- une clé écrite directement dans le code ;
- une donnée rendue publique dans le dossier `public`.

Si un secret est un jour publié, il faut d’abord le révoquer et le remplacer. Le supprimer du dernier commit ne suffit pas.

Avant chaque envoi GitHub :

```bash
npm run security:check
git status
```

## 3. Réglages à activer dans Vercel

Vercel fournit automatiquement le HTTPS et l’atténuation DDoS. Dans le tableau de bord du projet :

1. activer la protection des déploiements Preview ;
2. vérifier le Firewall et son trafic avant de créer des règles ;
3. activer les alertes de disponibilité et d’erreurs disponibles sur le forfait ;
4. conserver les variables secrètes uniquement dans Project Settings > Environment Variables ;
5. séparer Production, Preview et Development ;
6. n’autoriser que les personnes nécessaires dans l’équipe ;
7. activer l’authentification multifacteur sur GitHub, Vercel, Gmail et, plus tard, Odoo.
8. avant le lancement, renseigner `NEXT_PUBLIC_SITE_URL` avec le domaine public définitif.

Règles WAF à envisager en mode journalisation avant blocage :

- requêtes vers `/.env`, `/.git/config`, `/wp-admin` ou `/phpmyadmin` ;
- trafic automatisé anormal ;
- lorsqu’une vraie route `/api/contact` existera, limitation des requêtes `POST` par adresse IP et protection anti-robot.

Ne pas appliquer une règle de blocage directement sans phase d’observation : une mauvaise règle peut aussi bloquer des prospects légitimes.

Documentation officielle :

- https://vercel.com/docs/security
- https://vercel.com/docs/vercel-firewall
- https://vercel.com/docs/production-checklist

## 4. Pixel, cookies et mesure d’audience

Un pixel publicitaire est un traceur qui informe une plateforme qu’une page ou une conversion a été vue. Il peut servir au ciblage et au reciblage.

Décision actuelle : ne pas installer Meta Pixel, Google Ads ou un outil équivalent. Avant une future activation :

1. choisir une finalité précise ;
2. documenter le fournisseur, les données et la durée ;
3. bloquer le traceur tant que la personne n’a pas accepté ;
4. rendre le refus aussi simple que l’acceptation ;
5. permettre le retrait du consentement ;
6. conserver la preuve du choix et actualiser les politiques.

Une mesure d’audience limitée et respectueuse de la vie privée peut parfois être exemptée de consentement, mais uniquement si sa configuration respecte l’ensemble des critères de la CNIL. Elle doit tout de même être expliquée.

Référence : https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ

## 5. Données de contact et RGPD

Avant l’ouverture commerciale, compléter :

- identité juridique, forme, siège, SIREN, responsable de publication ;
- liste réelle des prestataires : Vercel, messagerie, agenda, puis Odoo ;
- contrats et clauses de sous-traitance ;
- registre des traitements ;
- durées configurées dans les outils ;
- procédure d’exercice des droits ;
- procédure de suppression et d’export ;
- sauvegarde et restauration des données futures.

Le formulaire doit continuer à interdire les bulletins, arrêts, données médicales, numéros de sécurité sociale et informations nominatives de salariés. Les données prospects à des fins commerciales ne doivent pas être conservées au-delà de trois ans après la collecte ou le dernier contact venant du prospect, sauf autre justification documentée.

Références :

- https://www.cnil.fr/fr/informer-les-personnes
- https://www.cnil.fr/fr/questions-reponses-sur-les-referentiels-relatifs-la-gestion-des-activites-commerciales-et-des

## 6. Procédure en cas d’incident

1. isoler le service touché sans effacer les preuves ;
2. révoquer et remplacer les secrets concernés ;
3. conserver les journaux et établir une chronologie ;
4. identifier les données, personnes et conséquences possibles ;
5. inscrire toute violation de données personnelles dans un registre interne ;
6. notifier la CNIL si la violation présente un risque, si possible sous 72 heures ;
7. informer aussi les personnes si le risque est élevé ;
8. corriger, vérifier, puis documenter les mesures prises.

Référence : https://www.cnil.fr/fr/services-en-ligne/notifier-une-violation-de-donnees-personnelles

## 7. Architecture recommandée avec Odoo

Conserver le site PAÏA actuel pour la présentation publique. Il est sur mesure, indépendant et peut garder son univers premium. Utiliser Odoo plus tard comme outil de gestion séparé : CRM, devis, factures, rendez-vous et portail client.

Progression recommandée :

1. lien sécurisé vers une page Odoo de rendez-vous ou de contact ;
2. éventuellement intégration du formulaire Odoo dans une page du site, si le rendu et le consentement conviennent ;
3. portail Odoo séparé, par exemple sur un sous-domaine `espace.votre-domaine.fr` ;
4. seulement si nécessaire, échange serveur à serveur avec l’API Odoo ; jamais de clé Odoo dans le navigateur.

Attention : l’API externe Odoo n’est pas disponible sur tous les forfaits. La documentation actuelle la réserve au plan Custom. Il ne faut donc pas concevoir maintenant une intégration qui imposerait ce forfait.

Documentation officielle :

- https://www.odoo.com/documentation/19.0/applications/sales/sales.html
- https://www.odoo.com/documentation/19.0/applications/websites/website.html
- https://www.odoo.com/documentation/19.0/developer/reference/external_rpc_api.html

## 8. Checklist avant le 1er mars 2027

- [ ] compléter les mentions légales et la politique de confidentialité ;
- [ ] décider du nom de domaine et de l’adresse professionnelle ;
- [ ] activer l’indexation avec `NEXT_PUBLIC_SITE_INDEXING=enabled` ;
- [ ] renseigner `NEXT_PUBLIC_SITE_URL` avec le domaine public définitif ;
- [ ] exécuter `npm run security:check` et `npm run build` ;
- [ ] tester les en-têtes sur le domaine de production ;
- [ ] tester le formulaire et la prise de rendez-vous sans données de salarié ;
- [ ] vérifier les accès GitHub, Vercel, Gmail et Odoo ;
- [ ] vérifier sauvegarde, export et suppression dans chaque outil ;
- [ ] n’activer aucun pixel sans décision documentée sur le consentement.
