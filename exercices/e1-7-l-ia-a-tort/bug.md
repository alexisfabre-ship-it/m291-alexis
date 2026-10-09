# Bug du compteur

**Ce que je vois :** je clique plusieurs fois sur +1, le chiffre à l'écran reste à 0. Dans la console (F12), on lit pourtant « n vaut maintenant 1 », « 2 », « 3 ».

**Ce que j'attendais :** le chiffre à l'écran suit les clics : 1, 2, 3…

**La boîte qui change :** `n` (la mémoire). Elle augmente bien à chaque clic.

**Ce qui ne se met pas à jour :** la vitrine, le paragraphe `#affiche`. Personne ne recopie `n` vers l'écran : l'IA a oublié cette ligne.

## Correction (une ligne ajoutée dans le déclencheur du clic)

```js
document.getElementById("affiche").textContent = n;
```

**Explication à un camarade :** la mémoire et l'écran sont deux mondes séparés. Changer la boîte `n` ne change pas ce que le navigateur dessine. Il faut, après `n = n + 1`, recopier la nouvelle valeur dans l'élément `#affiche` avec `textContent`. C'est comme une ardoise de magasin : le prix a changé en caisse, mais tant qu'on ne réécrit pas l'ardoise, le client voit l'ancien.

**Vérification :** 3 clics → l'écran affiche 3. ✅

## Pour les rapides : bouton Reset

Ajout d'un bouton `Reset` qui remet **la boîte et l'écran** à zéro :

```js
document.getElementById("reset").addEventListener("click", function () {
  n = 0;
  document.getElementById("affiche").textContent = n;
});
```

**Vérification :** 3 clics puis Reset → l'écran affiche 0, et un nouveau clic donne 1 (la boîte est bien revenue à 0). ✅
