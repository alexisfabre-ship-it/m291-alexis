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

### B3. Fiche d'observation — test réel avec Léo

**App testée :** AVisual App (écrans `01` à `04`, version corrigée après le pré-test B4)
**Testeur :** Léo (camarade de classe, ne connaissait pas le projet)
**Observateur :** Alexis Fabre
**Date :** 09.10.2026
**Tâche donnée :** « Trouve le projet Instagram le plus récent et ouvre le post. »

#### Test 5 secondes

« C'est une appli pour… » (phrase de Léo) : « C'est une application qui présente les projets d'un graphiste, comme des logos, des affiches et des créations pour les réseaux sociaux. »
Écart avec l'intention : très faible. Léo a compris que c'est un portfolio de projets récents. Il dit « un graphiste » sans nommer Alexis : le nom « Alexis Visual » est moins retenu que le contenu.

#### Test de localisation (sur image)

Consigne dite : « Montre-moi où tu appuierais pour ne voir que les projets Instagram. »

Le doigt est allé au **bon** contrôle (puce « Instagram », sous la recherche) : **oui**
Hésitation : aucune observée
Dit à voix haute : il a compris que les puces filtrent par catégorie ou par réseau
J'ai aidé : non

#### Déroulé de la tâche complète

| Étape | Ce que Léo a fait | Hésitation ? | Remarque |
|---|---|---|---|
| 1. Filtrer « Instagram » | Touche la puce Instagram → écran 02 (2 projets) | non | |
| 2. Repérer le projet récent | Repère « Logo Café du Marché », daté du 22.09.2026 | non | La date l'aide à choisir le plus récent |
| 3. Ouvrir la fiche | Touche la carte → écran 03 | non | La flèche › ajoutée après le pré-test n'a pas posé de question |
| 4. Trouver « Voir le post » | Touche « Voir le post sur Instagram » | non | Le bouton dit clairement où il mène |
| 5. Bonus : contacter Alexis | Répond : « J'irais dans l'onglet “Qui je suis” pour consulter son profil et chercher ses coordonnées ou un moyen de le contacter. » | **oui** (il « cherche ») | Il ne sait pas d'avance où se trouve le contact |

**Temps total :** environ **30 secondes** · **Tâche réussie :** **oui, sans aide**

#### Constats

1. **Tâche principale fluide :** filtre, date, carte et bouton Instagram ont été compris sans hésitation. Les correctifs du pré-test (flèche sur les cartes, titre sans « Nouveau ») n'ont plus provoqué de question.
2. **Le contact n'est pas visible depuis Actus :** pour contacter Alexis, Léo doit deviner qu'il faut aller dans « Qui je suis » et y « chercher » un moyen de contact. Le bouton « Me contacter » n'existe que sur cet écran, en bas.
3. **La marque est peu retenue :** au test 5 secondes, Léo parle d'« un graphiste » sans citer Alexis ni « Alexis Visual ».

### B4. Pré-test simulé par IA (avant le test avec Léo)

> ⚠️ **Test simulé, pas un vrai test utilisateur.** Faute de camarade disponible, le rôle du testeur a été tenu par une IA (Claude), qui a découvert les écrans `01` à `04` sans connaître le projet et a dit à voix haute ce qu'elle comprenait. Ces constats sont des hypothèses : **ils doivent être confirmés par un test avec un vrai camarade** (fiche ci-dessous à remplir à nouveau). Le temps n'a pas été chronométré, car une IA ne lit pas un écran à la vitesse d'un humain.

**Testeur :** Claude (IA, test simulé)
**Observateur :** Alexis Fabre
**Tâche donnée :** trouver le projet Instagram le plus récent et ouvrir le post original
**Support :** écrans 01 à 04, version avant correctifs (titre « Nouveau logo café », cartes sans flèche)

##### Test 5 secondes

« C'est une appli pour… » (phrase du testeur) : « voir les derniers projets d'un créatif, Alexis Visual ; on peut les filtrer par réseau. »
Écart avec l'intention : faible. Le mot « Actus » fait d'abord penser à des actualités (news) ; c'est le sous-titre « Les derniers projets d'Alexis » qui lève le doute.

##### Test de localisation (sur image)

Consigne dite : « Montrez où vous tapoteriez pour **ne voir que les projets Instagram**. »

Le doigt est allé au **bon** contrôle (puce « Instagram ») : **oui**
Hésitation : courte, sur le sens des puces : « Nouveau » est un état, « Instagram » et « LinkedIn » sont des réseaux, mais les quatre puces ont la même forme sur la même ligne.
Dit à voix haute : « Je peux choisir Nouveau ET Instagram en même temps, ou c'est l'un ou l'autre ? »
J'ai aidé : non

##### Déroulé de la tâche complète

| Étape | Ce que le testeur a fait | Hésitation ? | Dit à voix haute |
|---|---|---|---|
| 1. Repérer le projet récent | Va directement à la 1re carte (contour bleu + badge) | non | « Le premier a un badge NOUVEAU, c'est sûrement lui. » |
| 2. Filtrer « Instagram » | Touche la puce Instagram | courte | « Le filtre, c'est l'un ou l'autre ? » |
| 3. Ouvrir la fiche | Hésite avant de toucher la carte | **oui** | « La carte n'a pas de flèche : est-ce que ça ouvre une fiche, ou directement Instagram ? » |
| 4. Trouver « Voir le post » | Trouve le grand bouton bleu tout de suite | non | « Là c'est clair, le bouton dit où il m'emmène. » |
| 5. (bonus) Trouver « Me contacter » | Passe par l'onglet « Qui je suis » | courte | « Le contact n'est pas sur Actus, il faut deviner qu'il est dans le profil. » |

**Temps total :** non chronométré (test simulé) · **Tâche réussie :** oui, sans aide

**Constats d'hésitation :**

1. **Les cartes ne montrent pas qu'elles sont cliquables** : aucune flèche ni indice, le testeur ne sait pas si la carte ouvre une fiche ou Instagram (étape 3).
2. **Le titre « Nouveau logo café » répète le badge « NOUVEAU »** : on ne sait plus si « Nouveau » fait partie du nom du projet ou si c'est l'état (vu au test 5 secondes et dans la fiche projet).
3. Les puces mélangent un état (« Nouveau ») et des réseaux (« Instagram », « LinkedIn ») sans indiquer si on peut les combiner.
4. Détail visuel : dans la fiche projet, un arc bleu flottait au-dessus de la tasse et ressemblait à un bug d'affichage.

---

## Partie C — Actions correctives

### C1. Déjà appliquées (audit d'accessibilité)

1. **Contraste de l'en-tête :** texte #efefef (4,33:1) → #ffffff (4,98:1), et suppression de l'opacité du sous-titre.
2. **Contraste du petit texte bleu :** #006fd3 (4,33:1) → #0063bd (5,19:1) pour « Effacer les filtres » et « Médiamatique · Lausanne ».
3. **Cibles tactiles :** puces 38 → 48 px, bouton retour 44 → 48 px, zone de 48 px pour « Effacer les filtres ».

### C2. Deux correctifs ergonomiques prioritaires

1. **Cartes cliquables et titre sans « Nouveau »** *(constats du pré-test B4, appliqués avant le test avec Léo)*
   **Avant :** cartes sans indice d'action et titre « Nouveau logo café » qui répète le badge. → **Après :** flèche « › » de 30 px sur chaque carte et titre « Logo Café du Marché ». **Vérifié avec Léo :** aucune hésitation à l'étape 3.
2. **Contact visible partout** *(constat 2 du test avec Léo)*
   **Avant :** « Me contacter » uniquement en bas de l'écran « Qui je suis » ; Léo doit « chercher ». → **Après (prévu) :** (a) bouton « Me contacter » placé **juste sous le nom** dans « Qui je suis », visible sans défiler ; (b) lien « Un projet comme ça ? Me contacter » sous le bouton Instagram de **chaque fiche projet**. Objectif : contact atteint en **1 tap** depuis une fiche, au lieu de 2 écrans + recherche.

### C3. À traiter ensuite

- **Marque peu retenue (constat 3) :** envisager « Alexis Fabre » en toutes lettres dans l'en-tête (« Les derniers projets d'Alexis Fabre »).
- **Puces (pré-test, constat 3) :** décider en s12 si les filtres se combinent (« Nouveau » + « Instagram »).

### C4. À faire pour valider

- [x] Test avec un vrai camarade (Léo, B3) sur la maquette corrigée : plus d'hésitation à l'étape 3.
- [ ] Retester le contact après le correctif 2 (s16, sur l'app en ligne).
- [ ] Refaire l'audit clavier (A3) sur la page codée en s9.

*(La réussite d'un flow complet se reteste en s16, sur l'app en ligne.)*
