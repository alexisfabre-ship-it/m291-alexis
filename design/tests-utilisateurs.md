# Tests utilisateurs & audit d'accessibilité — e2-7

**App testée :** AVisual App (maquette `design/maquette-finale.png`, écrans `design/wireframes/01` à `04`)
**Auteur :** Alexis Fabre · **Date :** 09.10.2026
**Norme visée :** WCAG 2.2 niveau AA

---

## Partie A — Audit d'accessibilité

### A1. Contrastes (WCAG AA : ≥ 4,5:1 texte courant · ≥ 3:1 grand texte ≥ 24 px ou ≥ 19 px gras)

Ratios calculés avec la formule officielle WCAG (même calcul que WebAIM Contrast Checker), sur les couleurs exactes de la maquette.

| Élément | Taille | Couleurs | Ratio | Exigé | Verdict |
|---|---|---|---|---|---|
| **Bouton principal** « Voir le post » / « Me contacter » | 16 px gras | #ffffff sur #006fd3 | **4,98:1** | 4,5:1 | ✅ |
| Badge « NOUVEAU » | 11 px gras | #ffffff sur #006fd3 | 4,98:1 | 4,5:1 | ✅ |
| Titre « Actus » (en-tête) | 40 px | #efefef sur #006fd3 | 4,33:1 | 3:1 | ✅ |
| « Alexis Visual » (en-tête) | 15 px gras | #efefef sur #006fd3 | 4,33:1 | 4,5:1 | ❌ → corrigé |
| Sous-titre « Les derniers projets d'Alexis » | 15 px italique | #efefef sur #006fd3 (opacité 95 %) | < 4,33:1 | 4,5:1 | ❌ → corrigé |
| Texte indicatif de la recherche | 15 px | #5a5a5a sur #ffffff | 6,90:1 | 4,5:1 | ✅ |
| Puce active / inactive | 14 px gras | #efefef sur #121212 / inverse | 16,29:1 | 4,5:1 | ✅ |
| Titre de carte | 17 px gras | #121212 sur #ffffff | 18,73:1 | 4,5:1 | ✅ |
| Date et réseau | 13 px | #5a5a5a sur #ffffff | 6,90:1 | 4,5:1 | ✅ |
| Lien « Effacer les filtres » | 15 px | #006fd3 sur #efefef | 4,33:1 | 4,5:1 | ❌ → corrigé |
| Étiquettes (Identité visuelle…) | 13 px gras | #006fd3 sur #ffffff | 4,98:1 | 4,5:1 | ✅ |
| Description du projet | 15 px | #2a2a2a sur #efefef | 12,48:1 | 4,5:1 | ✅ |
| « Médiamatique · Lausanne » | 15 px gras | #006fd3 sur #efefef | 4,33:1 | 4,5:1 | ❌ → corrigé |
| Onglet actif / inactif | 12 px gras | #006fd3 / #5a5a5a sur #ffffff | 4,98:1 / 6,90:1 | 4,5:1 | ✅ |
| Bouton retour « Actus » | 14 px gras | #efefef sur #121212 | 16,29:1 | 4,5:1 | ✅ |

**Bilan :** 15 éléments mesurés, **4 échecs**, tous avec le même problème : du petit texte en bleu de marque sur le fond clair, ou du texte clair sur le bleu (4,33:1).

**Corrections appliquées dans la maquette et les écrans :**

| Problème | Avant | Après | Nouveau ratio |
|---|---|---|---|
| Petit texte sur l'en-tête bleu | #efefef (+ opacité 95 %) | **#ffffff**, sans opacité | **4,98:1** ✅ |
| Petit texte bleu sur fond clair | #006fd3 | **#0063bd** (nouveau « bleu texte ») | **5,19:1** ✅ |

Le bleu de marque #006fd3 reste utilisé pour les aplats (en-têtes, boutons, badge), où le texte blanc passe à 4,98:1.

Éléments non textuels (WCAG 1.4.11, ≥ 3:1) : contour bleu de la carte « nouveau » 4,98:1 ✅ · bord des puces 16,29:1 ✅ · carte blanche sur fond #efefef 1,15:1 ⚠️ (acceptable, car la carte n'est pas le seul indice : titre, image et chevron la signalent).

### A2. Cibles tactiles (WCAG 2.2 AA : ≥ 24 × 24 px · objectif du cours : 48 × 48 px)

| Élément | Avant | Après | Verdict |
|---|---|---|---|
| Puces de filtre | 38 px de haut | **48 px** | ✅ |
| Bouton retour « Actus » | 44 px de haut | **48 px** | ✅ |
| Lien « Effacer les filtres » | ~20 px (texte seul) | zone cliquable de **48 px** de haut | ✅ |
| Barre de recherche | 48 px | 48 px | ✅ |
| Cartes de projet | ~104 px | ~104 px | ✅ |
| Boutons principaux | 54 px | 54 px | ✅ |
| Onglets | 80 px | 80 px | ✅ |

### A3. Navigation au clavier (Tab · Shift+Tab · Entrée · Espace)

⚠️ La maquette est une image : on ne peut pas encore la parcourir avec Tab. Je fixe ici **l'ordre et le style de focus** à respecter quand je coderai l'app (s9), puis je referai ce test sur la vraie page.

**Ordre de tabulation prévu — écran Actus :**

1. Lien d'évitement « Aller aux projets » (visible au focus)
2. Champ de recherche
3. Bouton « effacer » de la recherche (quand du texte est saisi)
4. Puces : Tout → Nouveau → Instagram → LinkedIn (Entrée / Espace pour activer)
5. Lien « Effacer les filtres » (vue filtrée)
6. Cartes de projet, de haut en bas (Entrée ouvre la fiche)
7. Onglets : Qui je suis → Actus

**Fiche projet :** bouton retour « Actus » → bouton « Voir le post sur Instagram » → onglets.
**Qui je suis :** bouton « Me contacter » → champs du formulaire → bouton Envoyer → onglets.

**Style de focus prévu (visible partout) :**

```css
:focus-visible { outline: 3px solid #121212; outline-offset: 3px; }   /* sur fond clair : 16,29:1 */
.entete :focus-visible { outline-color: #ffffff; }                     /* sur l'en-tête bleu : 4,98:1 */
```

**Règles HTML pour que le clavier fonctionne :**

- puces, onglets et boutons en vrais `<button>` (pas des `<div>` cliquables) ;
- cartes en `<a href>` vers la fiche ;
- puce active signalée par `aria-pressed="true"`, pas seulement par la couleur ;
- aucun piège de focus : Échap ferme le formulaire de contact.

**Vérification à faire en s9 sur la vraie page :**

| Contrôle | Résultat |
|---|---|
| Tous les éléments interactifs sont atteints avec Tab | ☐ |
| L'ordre suit la lecture (haut → bas, gauche → droite) | ☐ |
| Le contour de focus est visible sur chaque élément | ☐ |
| Entrée / Espace activent puces, cartes et boutons | ☐ |
| Aucun piège de focus | ☐ |

### A4. Images et textes alternatifs

- Photo de profil : `alt="Photo d'Alexis Fabre"`.
- Logo dans l'en-tête : `alt="Alexis Visual"`.
- Logo en filigrane (décoratif) : `alt=""`.
- Miniatures de projets : `alt` = titre du projet (ex. « Logo du café, tasse dessinée d'un seul trait »).
- Icônes Instagram / LinkedIn : toujours accompagnées du mot écrit, donc l'icône est décorative.

---

## Partie B — Test utilisateur

### B1. Scénario (1 phrase)

> « Vous êtes recruteuse : trouvez le projet le plus récent publié sur Instagram et ouvrez le post original. »

Tâche secondaire si le temps le permet :

> « Vous voulez contacter Alexis : montrez où vous appuieriez. »

### B2. Protocole

- **Support :** maquette sur écran ou téléphone (`design/wireframes/01` → `04`).
- **Durée :** chronomètre de 5 minutes maximum.
- **Observateur :** silence absolu. Je ne montre rien, je n'explique rien, je ne justifie rien. Si le testeur demande « je clique où ? », je réponds seulement : « Faites comme vous feriez seul. »
- **Le testeur pense à voix haute** (Think Aloud) : il dit ce qu'il cherche et ce qu'il comprend.
- **Je note :** hésitations (regard perdu, mauvais endroit touché), phrases dites à voix haute, temps mis.

**Ce que je surveille en particulier :**

- le badge « NOUVEAU » est-il repéré tout de suite ?
- la puce « Instagram » est-elle comprise comme un filtre ?
- le testeur comprend-il qu'il faut ouvrir la fiche avant de voir le post ?
- le bouton « Me contacter » est-il trouvé sans chercher ?

### B3. Fiche d'observation

> ✏️ À remplir **pendant** le test avec mon camarade. Je n'écris que ce que j'ai vu et entendu.

**Testeur :** _(prénom du camarade)_
**Observateur :** Alexis Fabre
**Tâche donnée :** trouver le projet Instagram le plus récent et ouvrir le post original

#### Test 5 secondes

J'affiche l'écran Actus 5 secondes, puis je le cache.

« C'est une appli pour… » (phrase du testeur) : _
Écart avec l'intention (« portfolio qui montre les derniers projets d'Alexis ») : _

#### Test de localisation (sur image)

Consigne dite : « Montrez où vous tapoteriez pour **ne voir que les projets Instagram**. »

Le doigt est allé au **bon** contrôle (puce « Instagram ») : oui / non / à côté
Hésitation : _
Dit à voix haute : _
J'ai aidé : oui / non

#### Déroulé de la tâche complète

| Étape | Ce que le testeur a fait | Hésitation ? (oui / non + durée) | Dit à voix haute |
|---|---|---|---|
| 1. Repérer le projet récent | | | |
| 2. Filtrer « Instagram » | | | |
| 3. Ouvrir la fiche | | | |
| 4. Trouver « Voir le post » | | | |
| 5. (bonus) Trouver « Me contacter » | | | |

**Temps total :** _ min _ s · **Tâche réussie :** oui / non / avec aide

**Constats d'hésitation (au moins 2) :**

1. _
2. _

---

## Partie C — Actions correctives

### C1. Déjà appliquées (audit d'accessibilité)

1. **Contraste de l'en-tête :** texte #efefef (4,33:1) → #ffffff (4,98:1), et suppression de l'opacité du sous-titre.
2. **Contraste du petit texte bleu :** #006fd3 (4,33:1) → #0063bd (5,19:1) pour « Effacer les filtres » et « Médiamatique · Lausanne ».
3. **Cibles tactiles :** puces 38 → 48 px, bouton retour 44 → 48 px, zone de 48 px pour « Effacer les filtres ».

### C2. Deux correctifs ergonomiques prioritaires (déduits du test)

> ✏️ À formuler **après** le test, à partir des constats de la fiche. Format : avant → après, avec un chiffre.

1. **Avant :** _ → **Après (prévu) :** _
2. **Avant :** _ → **Après (prévu) :** _

*(La réussite d'un flow complet se reteste en s16, sur l'app en ligne.)*
