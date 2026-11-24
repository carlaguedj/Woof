/* ==========================================================================
   WOOF — AVIS CLIENTS (section « They're talking about us » de l'accueil)
   --------------------------------------------------------------------------
   ⚠️ Les avis actuels sont des EXEMPLES : WOOF n'a pas encore de vrais avis.
   Tant que   isPlaceholder: true , une petite mention « Sample reviews »
   s'affiche pour ne pas les présenter comme de vrais avis clients.

   - Les TEXTES des avis sont dans les fichiers de langue :
     js/i18n/en.js et js/i18n/fr.js, clés "review.1", "review.2"… (dans l'ordre ci-dessous).
   - Ici : prénom et nombre d'étoiles de chaque avis.

   Quand vous aurez de vrais avis :
   1. remplacez prénoms (ici) et textes (fichiers de langue) ;
   2. mettez   isPlaceholder: false ;
   3. indiquez la note réelle, par ex.   rating: "4.8"
      (laissez null tant qu'elle n'est pas calculée à partir de vrais avis).
   ========================================================================== */
window.WOOF_REVIEWS = {
  isPlaceholder: true,

  rating: null,                       // ex. "4.8" — uniquement si basé sur de vrais avis
  ratingOutOf: "5",

  items: [
    { name: "Salomé", stars: 5 },     // texte : review.1
    { name: "Paloma", stars: 5 },     // review.2
    { name: "Valentina", stars: 5 },  // review.3
    { name: "Salma", stars: 5 },      // review.4
    { name: "Karina", stars: 5 },     // review.5
    { name: "Ilona", stars: 5 },      // review.6
    { name: "Sophia", stars: 5 },     // review.7
    { name: "Sasha", stars: 5 }       // review.8
  ]
};
