# Brief de Conception — AVisual App

## 1. Contexte & Problématique

Les recruteurs et clients en Suisse romande qui repèrent un jeune créatif ratent souvent ses nouvelles publications, car les algorithmes d'Instagram et de LinkedIn les cachent. Personne n'a le temps de vérifier plusieurs profils chaque jour, et le parcours de la personne est éparpillé sur plusieurs réseaux. AVisual App rassemble mes projets du plus récent au plus ancien, signale les nouveautés avec un badge « Nouveau » et présente mon profil sur une seule page.

## 2. Profil de l'Utilisateur Cible (Persona)

- **Prénom & Âge :** Sarah Meier, 32 ans, recruteuse dans une agence de communication à Lausanne (détail : `design/persona.md`)
- **Contexte d'utilisation :** sessions de 1 à 3 minutes entre deux rendez-vous, smartphone 390 px
- **Besoins clés :** voir tout de suite ce qui est nouveau, ouvrir le post original en un tap, résumer mon profil à sa directrice

## 3. Fonctionnalités Essentielles (Périmètre MVP)

1. Affichage des projets (≥ 30 fiches dans `data.json`, chargées avec `fetch`) sous forme de cartes, du plus récent au plus ancien.
2. Badge « NOUVEAU » si le post a moins de 7 jours (écrit en texte, pas seulement en couleur).
3. Recherche par mot-clé et filtres par puces : Tout, Nouveau, Instagram, LinkedIn.
4. Fiche détaillée d'un projet, avec un bouton qui ouvre le post sur Instagram ou LinkedIn.
5. Écran « Qui je suis » : photo, description, compétences, parcours, et formulaire **Me contacter** validé (messages d'erreur sous les champs, sans `alert`).
6. Au moins 3 micro-interactions : carte qui s'enfonce au tap, puce active animée, bouton « Envoyé ✓ », skeleton pendant le chargement.

**Bonus, à valider avec le prof :** notification « Alexis a posté un nouveau projet ! » envoyée à la main via OneSignal (offre gratuite). C'est la seule exception à la règle « JavaScript sans bibliothèque » et elle demande un script externe. Si le prof refuse, l'app reste complète grâce au badge « Nouveau ».

**Hors périmètre :** comptes utilisateurs, base de données, serveur à coder, connexion aux API Instagram ou LinkedIn (les posts sont saisis à la main dans `data.json`), commentaires et likes.

## Écrans

- Écran 1 : Actus — liste des projets avec recherche et filtres (`design/wireframes/01-accueil-mobile.png`)
- Écran 2 : Vue filtrée — résultats d'une recherche ou d'un filtre (`design/wireframes/02-recherche-filtre.png`)
- Écran 3 : Fiche projet — détail et lien vers le post (`design/wireframes/03-detail-mobile.png`)
- Écran 4 : Qui je suis — profil et contact (`design/wireframes/04-qui-je-suis.png`)

## Contenu de chaque écran

### Écran 1 — Actus
- On y voit : le titre « Actus », la recherche, les puces Tout / Nouveau / Instagram / LinkedIn, les cartes (miniature, badge éventuel, titre, date, réseau), la barre d'onglets.
- On peut y faire : chercher, filtrer, ouvrir un projet, passer à « Qui je suis ».
- Bouton principal : la carte du projet le plus récent

### Écran 2 — Vue filtrée
- On y voit : le mot recherché, la puce active, le nombre de résultats (« 2 projets trouvés »), les cartes correspondantes.
- On peut y faire : changer de filtre, effacer la recherche, ouvrir un projet.
- Bouton principal : **Effacer les filtres**

### Écran 3 — Fiche projet
- On y voit : grande image, badge, titre, date, réseau, étiquettes (catégorie, outil), description.
- On peut y faire : revenir aux actus, ouvrir le post original.
- Bouton principal : **Voir le post sur Instagram ↗** (ou LinkedIn)

### Écran 4 — Qui je suis
- On y voit : photo, nom, « Médiamaticien · Lausanne », description, compétences en étiquettes, parcours chronologique.
- On peut y faire : lire le profil, ouvrir le formulaire de contact.
- Bouton principal : **Me contacter**

## 4. Charte éditoriale & Ambiance visuelle

- **Ton :** simple et direct, en « vous ». Des titres courts.
- **3 adjectifs :** dynamique, urbain, professionnel.
- **Identité :** ma charte graphique « Alexis Visual » (`design/direction-artistique.md`) : logo étoile graffiti, bleu technologie, typo Gantari Bold + Baskerville.
- **Analogie :** comme une enseigne de studio créatif : un bleu fort, un logo bien visible, et les projets mis en avant sur un fond calme.

## Palette

- Fond : #efefef (clair)
- Texte : #121212 (noir)
- Accent : #006fd3 (bleu) — badge « Nouveau », onglet actif, boutons, en-têtes
- Attention / erreur : rouge #c62828, toujours accompagné d'un texte

Polices : Gantari Bold (titres, interface) et Baskerville (sous-titres, descriptions).

## 5. Contraintes Techniques & Ergonomiques

- **Approche :** Mobile First (largeur de référence 390 px).
- **Technologie :** Vanilla HTML5 sémantique, CSS moderne avec variables, JavaScript natif sans bibliothèque (exception possible : script OneSignal, si validé).
- **Accessibilité :** Ratios de contraste WCAG AA (≥ 4,5:1), navigation clavier assurée, texte ≥ 16 px, cibles tactiles ≥ 48 px, `alt` sur toutes les images, le badge n'est jamais signalé uniquement par la couleur.
- **Hébergement :** GitHub Pages, repo public `m291-alexis`.

## Interdits

- pas de Bootstrap, pas de React, pas de compte obligatoire pour consulter
- pas plus d'une ou deux notifications par semaine
- pas d'`alert()` pour les messages
- pas de service payant

## Revue croisée (à remplir avec mon binôme avant le commit)

| Question du binôme | Réponse / correction |
|---|---|
| La tâche principale est-elle claire ? | |
| Le périmètre est-il réaliste en 4 semaines ? | |
| Manque-t-il un cas limite ? | |
| Autre remarque | |
