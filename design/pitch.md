# Pitch — mon app M291

**Nom de l'app :** AVisual App

**En une phrase, elle sert à :** me présenter en détail et montrer mes derniers projets publiés sur mes réseaux pro, avec un badge « Nouveau » (et une notification si le prof valide le service).

**À qui (prénom + âge + situation) :** Sarah, 32 ans, recruteuse dans une agence de communication à Lausanne. Elle a repéré mon travail et veut le suivre sans vérifier mes réseaux tous les jours.

**La tâche n°1 (celle du flow) :** Sarah ouvre l'app, repère le projet marqué « Nouveau », ouvre sa fiche puis le post original sur Instagram ou LinkedIn.

**Les données (inventées) ressemblent à :** fiches de posts (titre, date, réseau, catégorie, image, description, lien) + un profil (photo, description, compétences, parcours).
Ex. : « Nouveau logo café — 22.09.2026 — Instagram — Identité visuelle — lien »

**Pourquoi ce n'est pas trop grand pour 4 semaines de code :**
- 4 écrans simples : Actus (liste), vue filtrée, fiche projet, Qui je suis.
- Les posts sont dans `data.json` (30 fiches ou plus), chargés avec `fetch`, sans base de données.
- Le badge « Nouveau » se calcule avec la date du post (moins de 7 jours).
- Pas de comptes utilisateurs, pas de serveur à coder, pas de connexion aux API Instagram ou LinkedIn.
- Les notifications sont un bonus : si le service n'est pas accepté, le badge « Nouveau » suffit.

## Pour qui ? Quel besoin ? Quelle réponse ?

- **Pour qui :** les recruteurs et clients qui ont repéré mon travail.
- **Besoin non satisfait :** les algorithmes d'Instagram et LinkedIn cachent mes posts, et personne n'a le temps de vérifier plusieurs profils chaque jour.
- **Réponse UI :** une app mobile où mes projets sont rangés du plus récent au plus ancien, avec un badge « Nouveau », une recherche, des filtres par réseau et une page « Qui je suis » lisible en une minute.
