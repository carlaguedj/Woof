/* ==========================================================================
   WOOF — Moteur de traduction (rien à modifier ici)
   - Choisit la langue : choix mémorisé > langue du navigateur > anglais.
   - Charge le fichier js/i18n/<langue>.js.
   - Remplace les textes marqués data-i18n="clé" et les attributs data-i18n-attr.
   ========================================================================== */
(function () {
  "use strict";
  var cfg = window.WOOF_CONFIG || {};
  var langs = cfg.LANGUAGES || { en: "EN" };
  var def = langs[cfg.DEFAULT_LANGUAGE] ? cfg.DEFAULT_LANGUAGE : "en";
  var STORE = "woof-lang";
  var lang = null;

  try { var saved = localStorage.getItem(STORE); if (saved && langs[saved]) lang = saved; } catch (e) { /* stockage bloqué */ }
  if (!lang) {
    var list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ""];
    for (var i = 0; i < list.length && !lang; i++) {
      var code = String(list[i] || "").toLowerCase().split("-")[0];
      if (langs[code]) lang = code;
    }
  }
  if (!lang) lang = def;

  var root = document.documentElement;
  root.lang = lang;
  if (lang !== "en") {
    root.classList.add("i18n-pending");
    setTimeout(function () { root.classList.remove("i18n-pending"); }, 1500); // sécurité
  }

  var dicts = {};
  function t(key, fallback) {
    var d = dicts[lang];
    if (d && d[key] != null) return d[key];
    return fallback !== undefined ? fallback : key;
  }
  function apply(scope) {
    scope = scope || document;
    var d = dicts[lang];
    if (d) {
      var els = scope.querySelectorAll("[data-i18n]");
      for (var i = 0; i < els.length; i++) {
        var key = els[i].getAttribute("data-i18n");
        if (d[key] == null) continue;
        if (els[i].tagName === "TITLE") els[i].textContent = d[key];
        else els[i].innerHTML = d[key];
      }
      var attrs = scope.querySelectorAll("[data-i18n-attr]");
      for (var j = 0; j < attrs.length; j++) {
        attrs[j].getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
          var p = pair.split(":");
          if (p.length === 2 && d[p[1].trim()] != null) attrs[j].setAttribute(p[0].trim(), d[p[1].trim()]);
        });
      }
    }
    root.classList.remove("i18n-pending");
  }
  function setLang(l) {
    if (!langs[l] || l === lang) return;
    try { localStorage.setItem(STORE, l); } catch (e) { /* ignoré */ }
    window.location.reload();
  }

  window.WOOF_I18N = {
    lang: lang,
    languages: langs,
    register: function (l, dict) { dicts[l] = dict; },
    t: t,
    apply: apply,
    setLang: setLang
  };

  // Chargement du fichier de la langue choisie (avant la suite de la page)
  document.write('<script src="js/i18n/' + lang + '.js"><\/script>');
})();
