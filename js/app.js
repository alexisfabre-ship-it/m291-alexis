// =========================================================
// AVisual App — js/app.js (e3-3, semaine 11)
// Charge data.json avec fetch() et pilote les 4 états de l'interface :
// 1. Chargement · 2. Succès · 3. Vide · 4. Erreur
// Pas de framework, pas de type="module" : DOM pur.
// =========================================================

const JOURS_NOUVEAU = 7; // badge « NOUVEAU » si le post a moins de 7 jours

// Sécurité : on n'injecte jamais du texte brut dans innerHTML
// (un titre avec < ou & casserait la page).
function echapper(texte) {
  return String(texte)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// "2026-09-22" -> "22.09.2026"
function formaterDate(dateIso) {
  const morceaux = dateIso.split("-");
  return morceaux[2] + "." + morceaux[1] + "." + morceaux[0];
}

// Le badge est calculé avec la date du jour, jamais écrit à la main.
// Une date dans le futur n'a pas de badge.
function estNouveau(dateIso) {
  const aujourdHui = new Date();
  const datePost = new Date(dateIso + "T00:00:00");
  const ecartJours = (aujourdHui - datePost) / (1000 * 60 * 60 * 24);
  return ecartJours >= 0 && ecartJours < JOURS_NOUVEAU;
}

function creerCarte(projet) {
  const nouveau = estNouveau(projet.date);
  const icone = projet.reseau === "Instagram" ? "Instagram" : "LinkedIn";
  return `
    <article class="carte${nouveau ? " est-nouveau" : ""}">
      <img class="carte-image" src="${echapper(projet.image)}" alt="" width="84" height="84" loading="lazy">
      <div>
        ${nouveau ? '<span class="badge">NOUVEAU</span>' : ""}
        <h3>
          <a href="${echapper(projet.lien)}" target="_blank" rel="noopener">
            ${echapper(projet.titre)}<span class="sr-only"> (ouvre ${icone} dans un nouvel onglet)</span>
          </a>
        </h3>
        <p class="commune">${echapper(projet.categorie)} · ${echapper(projet.commune)}</p>
        <p class="meta"><time datetime="${echapper(projet.date)}">${formaterDate(projet.date)}</time> · ${icone}</p>
      </div>
      <span class="carte-fleche" aria-hidden="true">›</span>
    </article>
  `;
}

async function chargerProjets() {
  const conteneur = document.getElementById("liste-cartes");
  if (!conteneur) return;

  // État 1 — Chargement
  conteneur.setAttribute("aria-busy", "true");
  conteneur.innerHTML = "<p class='etat etat-chargement'>Chargement des projets en cours…</p>";

  try {
    const reponse = await fetch("./data.json");
    if (!reponse.ok) {
      throw new Error("Erreur de chargement : code HTTP " + reponse.status);
    }
    const projets = await reponse.json();

    // État 3 — Vide
    if (!Array.isArray(projets) || projets.length === 0) {
      conteneur.innerHTML = "<p class='etat etat-vide'>Aucun projet publié pour le moment. Revenez bientôt !</p>";
      return;
    }

    // État 2 — Succès : du plus récent au plus ancien
    projets.sort(function (a, b) {
      return b.date.localeCompare(a.date);
    });
    conteneur.innerHTML = projets.map(creerCarte).join("");
  } catch (erreur) {
    // État 4 — Erreur
    console.error("Détail technique :", erreur);
    conteneur.innerHTML =
      "<p class='etat etat-erreur' role='alert'>⚠️ Impossible de charger les projets. " +
      "Vérifiez votre connexion, puis rafraîchissez la page.</p>";
  } finally {
    conteneur.removeAttribute("aria-busy");
  }
}

chargerProjets();
