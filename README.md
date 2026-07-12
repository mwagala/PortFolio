# PortFolio - Morel Wagala

Portfolio web de Morel Wagala pour présenter ses projets personnels lors de
candidatures de stage en génie logiciel.

## Stack

- Next.js
- React
- CSS natif
- Déploiement prévu sur Vercel

## Contenu

- Présentation professionnelle orientée recruteur.
- Cartes de projets personnels.
- Filtres par type de projet.
- Section compétences.
- Parcours de formation et expériences.
- CV téléchargeable depuis `public/cv-morel-wagala.pdf`.

## Développement local

```bash
npm install
npm run dev
```

URL locale:

```text
http://127.0.0.1:3000
```

## Vérification

```bash
npm test
```

Cette commande lance `next build`, puis vérifie que le contenu principal et la
configuration Vercel sont présents.

## Déploiement Vercel

1. Pousser ce dépôt sur GitHub.
2. Aller sur [Vercel](https://vercel.com).
3. Choisir `Add New...` puis `Project`.
4. Importer le dépôt GitHub `PortFolio`.
5. Garder les paramètres détectés par Vercel:
   - Framework: `Next.js`
   - Install command: `npm install`
   - Build command: `npm run build`
6. Déployer.

Après le premier déploiement, Vercel redéploiera automatiquement à chaque push
sur la branche principale.
