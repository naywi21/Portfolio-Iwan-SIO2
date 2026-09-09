# Portfolio BTS SIO — Iwan Jacquin

Site statique (HTML / CSS / JavaScript, sans dépendance à installer).

## Ouvrir le site

Double-cliquer sur **`index.html`**. Tout fonctionne en local.
Les polices viennent de Google Fonts : sans connexion, une police système prend le relais.

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil + présentation des rubriques |
| `cv.html` | CV : formation, expériences, compétences animées |
| `certifications.html` | MOOC / certifications (ANSSI, PIX, Cisco) |
| `projets.html` | Projets lycée + personnels (emplacements réservés) |
| `veille.html` | Veille technologique : méthode, sources, synthèses |
| `experiences.html` | Stages détaillés (contexte, missions, bilan) |
| `passions.html` | Escalade, jeux vidéo, lecture, voyages |
| `assets/css/style.css` | Styles, thèmes clair/sombre, animations |
| `assets/js/main.js` | Menu mobile, bascule de thème, animations au scroll |
| `CV Iwan Jacquin.pdf` | CV téléchargeable (lié dans le pied de page) |

## Fonctionnalités

- Navigation par menu (fixe en haut, menu déroulant sur mobile)
- Pied de page complet sur toutes les pages
- Thème clair / sombre mémorisé (bouton ☀ / ☾)
- Animations : apparition au défilement, barres de compétences, frises
- Responsive (ordinateur, tablette, mobile)
- Respecte `prefers-reduced-motion`

## À compléter (cherche les blocs « Emplacement réservé » et « À compléter »)

1. **Certifications** : passer les badges sur « Validé » + date dès qu'un module est fini.
2. **Projets** : remplir les fiches (contexte, outils, étapes, livrable, compétences BTS).
3. **Veille** : au moins une synthèse d'article par mois.
4. **Expériences** : ajouter le bilan des stages Brademont et Evole Energies après coup.
5. **Passions** : ajouter des photos et une anecdote par centre d'intérêt.
6. Vérifier l'**option** (SISR / SLAM) — actuellement indiquée SISR partout.
7. Vérifier les **lycées** (Bac Pro : Saint-Bénigne ; BTS : Louis Pergaud) et les villes.

## Mettre en ligne (optionnel)

Déposer le dossier sur **GitHub Pages**, **Netlify** ou l'espace web fourni par le lycée.
Aucune étape de build : ce sont des fichiers statiques.

## Modifier les couleurs

Dans `assets/css/style.css`, bloc `:root` (thème sombre) et `:root[data-theme="light"]`
(thème clair) : variables `--accent`, `--accent-2`, `--bg`, etc.
