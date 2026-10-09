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

**Règle de données :** aucun titre de projet ne commence par « Nouveau » (c'est le badge, calculé sur la date, qui signale la nouveauté).

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

## Revue croisée

### Relecture 1 — par l'IA (Claude), le 09.10.2026

> ⚠️ Relecture faite par une IA, pas par un binôme. Elle sert de premier contrôle ; **la revue par un camarade (tableau suivant) reste à faire**.

| Question | Réponse / correction |
|---|---|
| La tâche principale est-elle claire ? | Oui : repérer le projet récent, ouvrir sa fiche, puis le post original. Le test simulé (`design/tests-utilisateurs.md`) l'a confirmé. Correction faite : le titre « Nouveau logo café » répétait le badge → renommé « Logo Café du Marché », et règle ajoutée : aucun titre ne commence par « Nouveau ». |
| Le périmètre est-il réaliste en 4 semaines ? | Oui, **si les notifications restent un bonus**. Point d'attention : 30 fiches demandent 30 images. Prévoir des miniatures légères (≤ 100 Ko, 400 × 400 px) et réutiliser les vrais visuels de mes projets plutôt que d'en créer de nouveaux. |
| Manque-t-il un cas limite ? | Oui, trois : (1) **où part le formulaire de contact ?** Un site GitHub Pages ne peut pas envoyer d'e-mail seul → décider : message de confirmation seulement, lien `mailto:`, ou service gratuit (ex. Formspree, à valider avec le prof) ; (2) **image manquante** dans `data.json` → afficher une miniature de remplacement grise avec le logo ; (3) **puces combinables ou non** (Nouveau + Instagram ?) → règle à fixer en s12. |
| Autre remarque | Le petit texte bleu doit utiliser `#0063bd` (audit s8). Le mot « Actus » peut faire penser à des actualités : le sous-titre « Les derniers projets d'Alexis » doit rester visible. |
| Compléments (2e passage IA) | (4) le bouton « Envoyé ✓ » ne doit **pas** faire croire qu'un e-mail est parti si le formulaire n'envoie rien : afficher « Message prêt » + lien `mailto:` tant qu'aucun service n'est validé ; (5) badge « Nouveau » calculé avec la **date du jour** (`new Date()`), jamais une date écrite à la main ; une date future n'affiche pas de badge ; (6) recherche sans résultat : message « Aucun projet pour “…”. Essayez Tout. » + bouton Effacer (déjà dans `design/user-flow.md`). |

### Relecture 2 — par mon binôme

**Relu par :** Léo · **Date :** 09.10.2026

Léo a lu le brief et la Relecture 1. **Il est d'accord avec tous les points et n'a rien à modifier.**

| Question du binôme | Réponse de Léo |
|---|---|
| La tâche principale est-elle claire ? | Oui, d'accord avec la Relecture 1. |
| Le périmètre est-il réaliste en 4 semaines ? | Oui, d'accord avec la Relecture 1 (notifications en bonus). |
| Manque-t-il un cas limite ? | D'accord avec les cas listés dans la Relecture 1, rien à ajouter. |
| Autre remarque | Rien à modifier. |
