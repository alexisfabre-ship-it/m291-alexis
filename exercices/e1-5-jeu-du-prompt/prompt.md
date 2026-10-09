# e1-5 — Le jeu du prompt

**But :** le bouton gris `#magic` passe à l'orange `#e36414` **au clic**, sans coder à la main.

## Prompt raté (avant)

> change le bouton

Pourquoi ça casse : l'IA ne sait pas quel fichier, quel bouton, quelle couleur, ni ce qui est interdit. Elle risque de réécrire toute la page ou d'ajouter Bootstrap.

## Prompt utilisé (après) — les 3 règles : contexte, précision, explication

> Voici mon fichier index.html (je le colle en entier).
> Je débute. Pas de framework, pas de Bootstrap, pas de JS compliqué.
> Tâche unique : le bouton d'id "magic" doit passer au orange #e36414 quand on clique dessus.
> Ne touche à rien d'autre.
> Ensuite, explique la ligne ajoutée, comme à quelqu'un qui débute.

## Code ajouté (en bas de `index.html`, avant `</body>`)

```js
const bouton = document.getElementById("magic");
bouton.addEventListener("click", function () {
  bouton.style.backgroundColor = "#e36414";
});
```

## Explication ligne par ligne

1. `document.getElementById("magic")` va chercher dans la page le bouton qui a l'id `magic` et le range dans la boîte `bouton`.
2. `addEventListener("click", …)` : **quand** on clique sur ce bouton, **fais** la fonction qui suit (déclencheur → machine).
3. `bouton.style.backgroundColor = "#e36414"` change la couleur de fond du bouton en orange.

## Vérification

Double-clic sur `index.html`, clic sur « Cliquez-moi » : le fond passe de `rgb(217, 208, 195)` (gris) à `rgb(227, 100, 20)` = `#e36414`. ✅ Rien d'autre n'a changé dans la page.
