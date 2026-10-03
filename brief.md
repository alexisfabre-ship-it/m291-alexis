# Brief de Conception — Alexis Studio

## 1. Contexte & Problématique

Mes projets de médiamaticien (vidéos, designs, sites, photos) sont éparpillés entre Instagram, YouTube et mes dossiers d'école. Une personne qui veut me confier un projet en Suisse romande doit fouiller pour trouver un exemple proche de son besoin, et ne sait pas comment me contacter. Alexis Studio est un portfolio mobile qui range mes projets, permet de les filtrer et de me contacter en quelques secondes.

## 2. Profil de l'Utilisateur Cible (Persona)

- **Prénom & Âge :** Léa Martin, 34 ans, responsable communication dans une PME à Lausanne (détail : `design/persona.md`)
- **Contexte d'utilisation :** dans le train, smartphone 390 px tenu d'une main, lien reçu par e-mail ou Instagram
- **Besoins clés :** voir vite des projets du même style, comprendre pour qui et quand ils ont été faits, me contacter sans créer de compte

## 3. Fonctionnalités Essentielles (Périmètre MVP)

1. Affichage de mes projets (≥ 30 fiches dans `data.json`, chargées avec `fetch`) sous forme de cartes.
2. Filtre par catégorie (Vidéo, Design, Web, Photo) et recherche par mot-clé.
3. Consultation d'une fiche détaillée par projet (image, année, durée, outils, description).
4. Formulaire de contact validé (nom, e-mail, message), avec messages d'erreur sous les champs, sans `alert`.
5. Bandeau « Nouveau post Instagram » : affiche mon dernier post (texte + date, lus dans `data.json`) et un lien vers mon compte pro.

**Hors périmètre :** notifications push, connexion à l'API Instagram, comptes utilisateurs. Ces fonctions demandent un serveur, et GitHub Pages ne sert que des fichiers statiques.

## Écrans

- Écran 1 : Accueil — présentation + liste des projets
- Écran 2 : Vue filtrée — résultats d'un filtre ou d'une recherche
- Écran 3 : Fiche projet — détail + bouton de contact

## Contenu de chaque écran

### Écran 1 — Accueil
- On y voit : mon nom, une phrase de présentation, le bandeau du dernier post Instagram, la barre de recherche, les puces de catégories, les cartes de projets (miniature, titre, catégorie, année).
- On peut y faire : chercher, filtrer, ouvrir un projet, ouvrir mon Instagram.
- Bouton principal : **Me contacter**

### Écran 2 — Vue filtrée
- On y voit : la puce active (ex. Vidéo), le mot recherché, le nombre de résultats (« 4 projets »), les cartes correspondantes.
- On peut y faire : changer de catégorie, effacer la recherche, ouvrir un projet.
- Bouton principal : **Effacer les filtres**

### Écran 3 — Fiche projet
- On y voit : grande image, titre, catégorie, année, durée, outils utilisés, description, client.
- On peut y faire : revenir à la liste, ouvrir le formulaire de contact avec le projet déjà indiqué.
- Bouton principal : **Un projet comme ça ? Me contacter**

## 4. Charte éditoriale & Ambiance visuelle

- **Ton :** direct, simple, en « vous ». Des phrases courtes.
- **3 adjectifs :** sobre, cinématographique, professionnel.
- **Analogie :** comme le générique de fin d'un film : fond sombre, texte clair, une seule couleur d'accent.

## Palette

- Fond : noir doux (presque noir, pas noir pur)
- Texte : blanc cassé
- Accent : orange chaud (comme un voyant « REC »)
- Attention / erreur : rouge clair, toujours accompagné d'un texte

(Couleurs en mots pour l'instant ; hex en s7-s9.)

## 5. Contraintes Techniques & Ergonomiques

- **Approche :** Mobile First (largeur de référence 390 px).
- **Technologie :** Vanilla HTML5 sémantique, CSS moderne avec variables, JavaScript natif sans bibliothèque.
- **Accessibilité :** Ratios de contraste WCAG AA (≥ 4,5:1), navigation clavier assurée, textes alternatifs (`alt`) sur toutes les images, cibles tactiles ≥ 48 px.
- **Hébergement :** GitHub Pages, repo public `m291-alexis`.

## Interdits

- pas de Bootstrap, pas de React, pas de compte obligatoire pour consulter
- pas de vidéo en lecture automatique
- pas d'`alert()` pour les messages
- pas de service payant ni d'API externe
