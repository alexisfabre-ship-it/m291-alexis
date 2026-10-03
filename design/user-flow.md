# User flow — tâche principale

**Tâche :** découvrir le dernier projet d'Alexis et ouvrir le post original.

**Début :** Sarah ouvre AVisual App sur son téléphone (depuis l'icône, ou en touchant la notification « Alexis a posté un nouveau projet ! » si les notifications sont activées).  
**Fin réussie :** Sarah a ouvert le post « Nouveau logo café » sur Instagram.

## Chemin

1. **Actus (accueil)** — L'app s'ouvre sur « Actus » : la liste des projets, du plus récent au plus ancien. *Feedback : le premier projet porte le badge « NOUVEAU ».* (wireframe `01-accueil-mobile.png`)
2. **Recherche / filtre** — Sarah tape « logo » et touche la puce **Instagram**. *Feedback : la puce devient foncée et « 2 projets trouvés » s'affiche.* (wireframe `02-recherche-filtre.png`)
3. **Fiche projet** — Elle touche la carte « Nouveau logo café ». *Feedback : la carte s'enfonce légèrement, puis la fiche s'ouvre avec la grande image, la date, le réseau, les étiquettes et la description.* (wireframe `03-detail-mobile.png`)
4. **Action** — Elle touche **« Voir le post sur Instagram ↗ »**. *Feedback : le post s'ouvre dans l'app Instagram (ou le navigateur).*
5. **Retour** — Elle revient dans AVisual. *Feedback : la liste est au même endroit, avec le filtre encore actif.*

### Flow secondaire : se renseigner sur Alexis

1. Elle touche l'onglet **« Qui je suis »**. *Feedback : l'onglet devient actif (gras).* (wireframe `04-qui-je-suis.png`)
2. Elle fait défiler : photo, description, compétences, parcours.
3. Elle touche **Me contacter** : le formulaire s'ouvre. Après envoi, le bouton affiche « Envoyé ✓ ».

## Variante d'échec

- **Aucun résultat :** l'écran dit « Aucun projet pour “drone”. Essayez Tout. » avec un bouton **Effacer la recherche**.
- **`data.json` ne charge pas :** l'écran dit « Les projets n'ont pas pu être chargés. Réessayez. » avec un bouton **Réessayer** (pas d'`alert`).
- **Lien cassé ou app du réseau absente :** le lien s'ouvre dans le navigateur.
- **Notifications refusées :** l'app fonctionne normalement ; le badge « Nouveau » suffit pour repérer les nouveautés.
