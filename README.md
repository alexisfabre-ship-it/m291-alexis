# M291 — Alexis

Je suis **médiamaticien** en 3e année CFC.

## Ce que j'aime
- le design
- le web
- parler aux IA
- faire de la video 

## Mon site
https://alexisfabre-ship-it.github.io/m291-alexis/

## Mon app : AVisual

Portfolio mobile qui montre mes derniers projets (Instagram, LinkedIn), avec un badge « NOUVEAU » calculé automatiquement.

| Fichier | Rôle |
|---|---|
| `index.html` | écran Actus (HTML5 sémantique) |
| `style.css` | variables de ma charte Alexis Visual, mobile first, grille CSS |
| `js/app.js` | charge `data.json` avec `fetch()` et gère les 4 états (chargement, succès, vide, erreur) |
| `data.json` | 31 projets (base de données JSON) |
| `profil.html` | onglet « Qui je suis » (ma page profil de la semaine 1) |
| `design/` | persona, user flow, wireframes, maquette, critique, tests utilisateurs |

**Tester en local :** ouvrir le dossier dans VS Code → clic droit sur `index.html` → **Open with Live Server** (l'adresse doit commencer par `http://127.0.0.1`, pas `file://`, sinon `fetch` ne marche pas).

Les liens des projets pointent pour l'instant vers l'accueil d'Instagram et de LinkedIn : à remplacer par les vrais posts.
