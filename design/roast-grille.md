# Grille de roast — e2-1

**Nom :** Alexis  
**Date :** 03.10.2026

Barème : 1 = cassé · 3 = moyen · 5 = ça va

| Capture | Lisibilité | Navigation | Feedback | Cohérence | Accessibilité | Phrase précise |
| --- | --- | --- | --- | --- | --- | --- |
| 01 mur de texte | 1 | 2 | 3 | 2 | 1 | Le titre, le sous-titre et le paragraphe ont tous la même taille (11 px) et sont collés sur une seule ligne : on ne sait pas où commence l'article. |
| 02 labyrinthe | 3 | 1 | 2 | 2 | 2 | Le texte demande de passer par 6 menus (« Menu > Espace > Plus > Options > Avancé > Liste ») et le bouton principal n'existe pas sur la page. |
| 03 silence | 2 | 3 | 1 | 3 | 1 | Le bouton « ok » est gris clair sur gris clair et le clic ne déclenche rien : aucun message ne dit si le compte est créé. |
| 04 carnaval | 2 | 3 | 2 | 1 | 1 | La page utilise 5 polices (Comic Sans, Impact, Georgia, Courier…) et le vert sur jaune est presque illisible ; la promo n'est indiquée que par la couleur rouge. |

## Fautes visuelles repérées (hiérarchie, typo, espacement, alignement)

- **01 mur de texte — hiérarchie :** aucun titre n'est plus grand que le texte ; le menu, le titre et le paragraphe se suivent sans espace.
- **02 labyrinthe — alignement :** le lien « Aide? » est collé à 70 % à droite et le bloc principal commence à 40 % : rien n'est aligné sur la même ligne gauche.
- **03 silence — espacement :** la phrase « en cliquant vous acceptez tout » est en 11 px gris pâle, collée sous le bouton.
- **04 carnaval — typographie :** 5 polices sur une seule page, alors que la règle est 2 maximum.

## La pire, pour la présentation

Capture n° **04 carnaval** parce que tous les critères sont touchés en même temps : le contraste vert sur jaune empêche de lire, les trois boutons « CLICK », « BUY » et « info » ont des styles et des rôles flous, et l'information « en promo » n'existe que par la couleur, donc une personne daltonienne ne la voit pas.

## Une correction mesurable par capture

- **01 :** le titre passe à 28 px en gras, le texte à 16 px en #333 sur blanc, et chaque bloc est séparé de 24 px.
- **02 :** un seul bouton « Voir la liste » de 48 px de haut, placé directement sous « Bienvenue ».
- **03 :** le bouton passe en texte blanc sur bleu foncé (contraste ≥ 4,5:1) et affiche « Compte créé ✓ » pendant 2 secondes après le clic.
- **04 :** 2 polices maximum (une pour les titres, une pour le texte), texte noir sur fond blanc, et un badge « PROMO » écrit en toutes lettres à côté du prix.
