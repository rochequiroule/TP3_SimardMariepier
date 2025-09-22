# Travail pratique 3 / Technique d'intégration des interfaces Web 2

Travail final réalisé dans le cadre du cours **Technique d'intégration des interfaces Web 2**.  
Ce projet met en pratique l'utilisation de **Git**, **SASS**, **Tailwind CSS** (grille et composants).

---

## Structure du projet

- `index.html` : page d’accueil
- `realisation.html` : page affichant les réalisations
- `contact.html` : page de contact
- `confirmation-form` : page de confirmation de soumission du formulaire de contact
- `confirmation-infolettre` : page de confirmation d'inscription à l'infolettre
- `image/` : fichiers images
- `image/video` : fichier vidéo
- `style` : fichier de styles sass et css compilé
- `scripts/` : fichiers javascript fonctionnels
- `js/` : contient le fichier d'installation du service worker
- `README.md` : ce fichier
- `service-worker.js/` : page cache de service-worker et installation

---

## Technologies utilisées

- HTML5
- Tailwind (css, grille et composants)
- SASS
- Animation titre Animejs (source: https://animejs.com/documentation/text)
- Animation pendant le défilement AOS (source: https://michalsnik.github.io/aos/)

---

## Installation locale

- Clonez le projet :
  ```bash
  git clone https://github.com/rochequiroule/TP3_SimardMariepier.git
  ```

## Validation HTML

> ⚠️ À Noter : lors de la validation HTML, deux erreurs apparaissent pour le composant du menu Tailwind.

Voici les deux erreurs en question concernant le menu mobile :

- `command` : Attribute not allowed on element `button`.
- `commandfor` : Attribute not allowed on element `button`.

Ces attributs sont utilisés pour le fonctionnement du menu mobile avec Tailwind, mais ils n’affectent pas l’utilisation du site.
Source menu mobile: https://tailwindcss.com/plus/ui-blocks/marketing/elements/headers
