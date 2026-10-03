# User flow — tâche principale

**Tâche :** trouver une vidéo de présentation d'entreprise et demander un devis.

**Début :** Léa ouvre le lien du portfolio reçu par e-mail, sur son téléphone, dans le train.  
**Fin réussie :** Léa a envoyé une demande de contact et voit le message « Merci, je vous réponds sous 48 h ».

## Chemin

1. **Accueil (liste)** — Léa voit mon nom, une phrase de présentation, le bandeau « Nouveau post Instagram » et la liste des projets en cartes. *Feedback : les 30 projets sont chargés.*
2. **Filtre / recherche** — Elle touche la puce **Vidéo**, puis tape « entreprise » dans la recherche. *Feedback : « 4 projets trouvés ».*
3. **Fiche détaillée** — Elle ouvre « Clip de présentation — Boulangerie du Flon ». Elle voit l'image, l'année, la durée, les outils (DaVinci Resolve) et une description. *Feedback : bouton « ← Retour aux projets » visible.*
4. **Contact** — Elle touche **« Un projet comme ça ? Me contacter »**. Le formulaire s'ouvre avec le projet déjà indiqué.
5. **Envoi** — Elle remplit nom, e-mail et message, puis touche **Envoyer**. *Feedback : le bouton affiche « Envoyé ✓ » et un message de remerciement s'affiche.*

## Variante d'échec

- **Recherche sans résultat :** l'écran dit « Aucun projet pour “drone”. Essayez Vidéo ou Photo. » avec un bouton **Effacer la recherche**.
- **E-mail invalide :** sous le champ, en rouge et en texte : « L'adresse e-mail doit contenir un @. » (pas d'`alert`).
