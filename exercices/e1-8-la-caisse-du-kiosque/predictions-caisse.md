# e1-8 — La caisse du kiosque : prédictions

Fichier d'origine : la caisse livrée par l'IA. F5 entre chaque scénario.

| N° | Scénario | Je pense que Total va montrer | Résultat réel | Juste ? |
|---|---|---|---|---|
| 1 | Frites | `06 CHF` | `06 CHF` | ✅ |
| 2 | Frites puis Boisson | `064 CHF` | `064 CHF` | ✅ |
| 3 | Frites, code `PALEO`, Appliquer | toujours `06 CHF` (pas de retour à 0) | `06 CHF` | ✅ |
| 4 | Frites, Vider, Frites | `066 CHF` | `066 CHF` | ✅ |

## Les 3 pièges expliqués (boîte, vitrine, texte entre guillemets)

1. **Texte entre guillemets** — `total + "6"` : `"6"` est un **texte**, pas un nombre. JavaScript **colle** les deux : `0` + `"6"` = `"06"`, puis `"06"` + `"4"` = `"064"`. Ce n'est pas une addition. (Dans la console : `typeof total` → `"string"`.)
2. **Majuscules** — le code compare avec `"paleo"` en minuscules, mais l'affiche dit `PALEO`. `===` est strict : `"PALEO" === "paleo"` est faux, donc rien ne se passe.
3. **Boîte contre vitrine** — « Vider » efface la vitrine (`0 CHF` à l'écran) mais **pas la boîte** `total`, qui vaut encore `"06"`. Au clic suivant sur Frites : `"06"` + `"6"` = `"066"`.

## Pour les rapides : la caisse réparée

Fichier `caisse.html` de ce dossier (script exécuté **et** script affiché mis à jour) :

| Piège | Avant | Après |
|---|---|---|
| Nombres | `total = total + "6";` | `total = total + 6;` |
| Code promo | `if (code === "paleo")` | `if (code.trim().toUpperCase() === "PALEO")` |
| Vider | efface seulement l'écran | `total = 0;` puis `montrer();` |

**Vérification des 4 scénarios sur la version réparée :** `6 CHF` · `10 CHF` · `0 CHF` · `6 CHF`. ✅
