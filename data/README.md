# Données AVisual — schéma et validation (S10-AV1)

## Pourquoi un schéma ?

Avec 30 projets ou plus, une faute de frappe (`categori` au lieu de `categorie`) ou un mauvais type (`"id": "3"` au lieu de `3`) peut casser l'affichage sans message clair. `schema.json` décrit **la forme exacte** d'un projet, et un validateur signale l'erreur avant qu'elle n'arrive dans l'app.

## Ce que le schéma impose (JSON Schema draft-07)

| Champ | Type | Règle |
|---|---|---|
| `id` | entier | ≥ 1, obligatoire |
| `titre` | texte | ≥ 3 caractères, **ne commence pas par « Nouveau »** (règle du brief) |
| `date` | texte | format `AAAA-MM-JJ` |
| `annee` | entier | entre 2020 et 2100 |
| `reseau` | texte | `Instagram` ou `LinkedIn` uniquement |
| `categorie` | texte | une des 7 catégories des filtres |
| `commune`, `description` | texte | description entre 10 et 200 caractères |
| `outils`, `tags` | tableaux de textes | sans doublon, au moins 1 tag |
| `misEnAvant` | booléen | `true` / `false` |
| `image` | texte | chemin `images/…` en .svg, .jpg, .png ou .webp |
| `lien` | texte | URL en `https://` |

`additionalProperties: false` : un champ inconnu (faute de frappe dans un nom de clé) est refusé.

## Comment valider

1. **Dans VS Code** : ajouter en haut de `data.json` rien du tout, mais dans les réglages (`settings.json`) :
   ```json
   "json.schemas": [{ "fileMatch": ["data.json"], "url": "./data/schema.json" }]
   ```
   VS Code souligne alors en rouge toute fiche qui ne respecte pas le schéma.
2. **En ligne** : coller `schema.json` et `data.json` sur jsonschemavalidator.net.

## Résultat de la validation

`data.json` (31 projets) a été validé avec la bibliothèque Python `jsonschema` (draft-07) : **0 erreur**.
Contre-épreuve : une fiche avec `"id": "3"` et une avec le titre « Nouveau logo » sont bien **refusées**.
