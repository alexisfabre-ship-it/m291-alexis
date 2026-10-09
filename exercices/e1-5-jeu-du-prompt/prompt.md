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

---

# e1-5b — Le même prompt, un autre outil

**Outil A :** Claude · **Outil B :** ChatGPT · **Prompt :** exactement le même (fichier `index.html` collé en entier + les 3 règles).

Fichiers : `index.html` (réponse de Claude) · `index-chatgpt.html` (réponse de ChatGPT).

## Code proposé

| | Claude | ChatGPT |
|---|---|---|
| Où ? | `<script>` juste avant `</body>` | `<script>` juste avant `</body>` |
| Code | stocke le bouton dans une boîte `bouton`, puis `bouton.style.backgroundColor = "#e36414"` | enchaîne tout en une ligne et utilise `this.style.backgroundColor = "#e36414"` |
| Lignes ajoutées | 8 (dont 2 commentaires) | 6 |
| Lignes du fichier d'origine modifiées ou supprimées | 0 | 0 |
| Framework / librairie ajoutée | non | non |

## Test (vérifié dans le navigateur)

| | Claude | ChatGPT |
|---|---|---|
| Au chargement | gris `rgb(217, 208, 195)` | gris `rgb(217, 208, 195)` |
| Après 1 clic | orange `rgb(227, 100, 20)` = `#e36414` ✅ | orange `rgb(227, 100, 20)` = `#e36414` ✅ |
| Après 2e clic | reste orange | reste orange |

## Explication

- **Claude** explique ligne par ligne avec les mots du cours (boîte, déclencheur).
- **ChatGPT** explique chaque morceau, introduit le mot `this` (« le bouton sur lequel on a cliqué ») et ajoute **pourquoi le script est placé à la fin** : le navigateur lit la page de haut en bas, donc le bouton doit déjà exister quand le script le cherche. C'est une explication en plus, utile.
- ChatGPT a renvoyé **tout le fichier** ; Claude seulement le bloc ajouté. Les deux ont respecté « ne touche à rien d'autre ».

## Conclusion

Avec le **même prompt précis** (fichier collé + tâche unique + interdits + demande d'explication), les deux outils donnent **le même résultat**, qui marche du premier coup. Seul le style change : Claude passe par une boîte nommée, ChatGPT utilise `this`. C'est la preuve que **le contexte fait la qualité** : avec le prompt raté « change le bouton », les deux auraient dû deviner le fichier, le bouton et la couleur.

Ce que je retiens : je garde mes prompts dans un fichier `.md`. Si un quota tombe, je recolle le même texte dans un autre outil et j'obtiens la même chose.
