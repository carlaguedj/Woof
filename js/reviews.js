/* ==========================================================================
   WOOF — AVIS CLIENTS (section « They're talking about us » de l'accueil)
   --------------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour les avis.

   ⚠️ Les avis ci-dessous sont des EXEMPLES : WOOF n'a pas encore de vrais avis.
   Tant que   isPlaceholder: true , une petite mention « Sample reviews » s'affiche
   pour ne pas les présenter comme de vrais avis clients.

   Quand vous aurez de vrais avis :
   1. remplacez les textes et prénoms dans "items" ;
   2. mettez   isPlaceholder: false ;
   3. indiquez la note réelle, par ex.   rating: "4.8"   (laissez null tant
      qu'elle n'est pas calculée à partir de vrais avis : la note ne s'affiche pas).
   ========================================================================== */
window.WOOF_REVIEWS = {
  isPlaceholder: true,

  rating: null,                       // ex. "4.8" — uniquement si basé sur de vrais avis
  ratingOutOf: "5",
  ratingCaption: "Based on customer reviews",

  items: [
    { text: "Beautiful quality and even prettier in person. My dog has never looked so chic.", name: "Salomé", stars: 5 },
    { text: "The matching collar and scrunchie are adorable without being too much. We love them.", name: "Paloma", stars: 5 },
    { text: "Finally, dog accessories that actually feel like fashion.", name: "Valentina", stars: 5 },
    { text: "Such a beautiful little detail for our everyday walks. The quality is amazing.", name: "Salma", stars: 5 }
  ]
};
