# e1-6 — Prédis avant de cliquer

Fichier : `six-extraits.html`. Pour chaque extrait : prédiction, puis résultat réel après « Lancer ».

| N° | Extrait | Je pense que l'écran va montrer | Résultat réel | Juste ? |
|---|---|---|---|---|
| 1 | Afficher | `Bonjour la classe` | `Bonjour la classe` | ✅ |
| 2 | Calculer | `7` | `7` | ✅ |
| 3 | Compter | `3` | `3` | ✅ |
| 4 | Condition | `suffisant` | `suffisant` | ✅ |
| 5 | Boucle simple | `1 2 3 ` | `1 2 3 ` | ✅ |
| 6 | Clic | 1, puis 2, puis 3… (augmente à chaque clic) | 3 après 3 clics | ✅ |

## Pourquoi (avec les mots du cours)

1. **Afficher** — la machine `textContent` écrit le texte entre guillemets dans la vitrine `out1`.
2. **Calculer** — deux boîtes `a = 4` et `b = 3` sont des **nombres** (pas de guillemets), donc `+` additionne : 7.
3. **Compter** — `fruits` est une liste de 3 éléments ; `.length` compte les éléments : 3.
4. **Condition** — `note` vaut 5 ; 5 ≥ 4 est vrai, donc on prend la branche `if` : « suffisant ».
5. **Boucle** — la boucle tourne pour `i = 1`, `2`, `3` et colle chaque nombre suivi d'un espace : « 1 2 3 ». Elle s'arrête quand `i` vaut 4 (4 ≤ 3 est faux).
6. **Clic** — la boîte `n` est créée **une seule fois** hors du déclencheur ; chaque clic fait `n + 1` puis recopie `n` dans la vitrine. Le nombre monte : 1, 2, 3…

## 7e extrait (pour les rapides)

```js
let mot = "Paléo";
let texte = mot + " " + 2026;
document.getElementById("out7").textContent = texte.length;
```

Prédiction : `10` (« Paléo » = 5 lettres + 1 espace + « 2026 » = 4 caractères ; le nombre 2026 est collé comme du texte car on l'ajoute à une chaîne).
