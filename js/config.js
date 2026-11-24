/* ==========================================================================
   WOOF — RÉGLAGES DU SITE
   ========================================================================== */

/* ---------- 1. LISTE D'ATTENTE ----------
   Adresse du service qui reçoit les inscriptions (Formspree, par exemple).
   Remplacez REMPLACER_PAR_MON_URL par l'adresse fournie par le service,
   en gardant les guillemets. Exemple :
     var WAITLIST_ENDPOINT = "https://formspree.io/f/abcdwxyz";
   Tant que la valeur n'est pas remplacée, le formulaire n'envoie rien
   et affiche un petit message « Mode test ». */
var WAITLIST_ENDPOINT = "REMPLACER_PAR_MON_URL";


/* ---------- 2. LANGUES ----------
   Langues disponibles : code (2 lettres) et libellé affiché dans le sélecteur.
   Pour ajouter une langue : créez js/i18n/<code>.js (copie de en.js traduite),
   puis ajoutez une ligne ici, par ex.   it: "IT",  */
var WOOF_LANGUAGES = {
  en: "EN",
  fr: "FR"
};
var WOOF_DEFAULT_LANGUAGE = "en";   // langue affichée si celle du navigateur n'est pas disponible


window.WOOF_CONFIG = {
  WAITLIST_ENDPOINT: WAITLIST_ENDPOINT,
  LANGUAGES: WOOF_LANGUAGES,
  DEFAULT_LANGUAGE: WOOF_DEFAULT_LANGUAGE
};
