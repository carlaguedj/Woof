/* ==========================================================================
   WOOF — scripts du site
   - Icônes dessinées (SVG)
   - Menu mobile
   - Panier factice (en attendant Shopify)
   - Carrousel « The Matching Edit », galerie produit, newsletter
   Vous n'avez normalement rien à modifier ici.
   ========================================================================== */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* ---------- 1. Icônes (petits dessins SVG fins) ---------- */
  var S = 'fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"';
  var sprite =
    '<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">' +
    '<symbol id="i-paw" viewBox="0 0 32 32"><g fill="currentColor"><ellipse cx="9" cy="13" rx="2.6" ry="3.3" transform="rotate(-18 9 13)"/><ellipse cx="13.6" cy="8.4" rx="2.6" ry="3.4" transform="rotate(-6 13.6 8.4)"/><ellipse cx="18.4" cy="8.4" rx="2.6" ry="3.4" transform="rotate(6 18.4 8.4)"/><ellipse cx="23" cy="13" rx="2.6" ry="3.3" transform="rotate(18 23 13)"/><path d="M16 14.5c-3.6 0-7 4.6-7 7.6 0 2.2 1.8 3.2 3.6 3.2 1.4 0 2.3-.8 3.4-.8s2 .8 3.4.8c1.8 0 3.6-1 3.6-3.2 0-3-3.4-7.6-7-7.6z"/></g></symbol>' +
    '<symbol id="i-bow" viewBox="0 0 48 32"><g ' + S + '><path d="M24 12C20 7 13 3 9 5c-3 1.5-2.5 6 0 8 3 2.5 10 1.5 15-1"/><path d="M24 12c4-5 11-9 15-7 3 1.5 2.5 6 0 8-3 2.5-10 1.5-15-1"/><path d="M12 7.5c3 .5 6 2 9 4M36 7.5c-3 .5-6 2-9 4"/><ellipse cx="24" cy="12.5" rx="2.6" ry="2.4"/><path d="M22.5 14.6c-2 4.2-5 9.2-8 13.8l3.1-.7 1.2 2.7c2.6-5 4.6-10 5.7-15"/><path d="M25.5 14.6c2 4.2 5 9.2 8 13.8l-3.1-.7-1.2 2.7c-2.6-5-4.6-10-5.7-15"/></g></symbol>' +
    '<symbol id="i-flower" viewBox="0 0 24 24"><g ' + S + '><circle cx="12" cy="7.4" r="2.7"/><circle cx="16.4" cy="10.6" r="2.7"/><circle cx="14.7" cy="15.7" r="2.7"/><circle cx="9.3" cy="15.7" r="2.7"/><circle cx="7.6" cy="10.6" r="2.7"/><circle cx="12" cy="12" r="1.4"/></g></symbol>' +
    '<symbol id="i-heart" viewBox="0 0 24 24"><path ' + S + ' d="M12 19.5s-7-4.3-7-9.2A3.8 3.8 0 0 1 12 8.1a3.8 3.8 0 0 1 7 2.2c0 4.9-7 9.2-7 9.2z"/></symbol>' +
    '<symbol id="i-arrow" viewBox="0 0 24 24"><path ' + S + ' d="M4 12h15M14 7l5 5-5 5"/></symbol>' +
    '<symbol id="i-arrow-left" viewBox="0 0 24 24"><path ' + S + ' d="M20 12H5M10 7l-5 5 5 5"/></symbol>' +
    '<symbol id="i-chevron" viewBox="0 0 24 24"><path ' + S + ' d="M9 5l7 7-7 7"/></symbol>' +
    '<symbol id="i-chevron-down" viewBox="0 0 24 24"><path ' + S + ' d="M5 9l7 7 7-7"/></symbol>' +
    '<symbol id="i-bag" viewBox="0 0 24 24"><g ' + S + '><path d="M5 8h14l-1.2 12.5H6.2z"/><path d="M9 10V6.5a3 3 0 0 1 6 0V10"/></g></symbol>' +
    '<symbol id="i-search" viewBox="0 0 24 24"><g ' + S + '><circle cx="10.5" cy="10.5" r="6"/><path d="M20 20l-5-5"/></g></symbol>' +
    '<symbol id="i-user" viewBox="0 0 24 24"><g ' + S + '><circle cx="12" cy="8" r="3.8"/><path d="M4.5 20c1.4-3.8 4.3-5.6 7.5-5.6s6.1 1.8 7.5 5.6"/></g></symbol>' +
    '<symbol id="i-close" viewBox="0 0 24 24"><path ' + S + ' d="M6 6l12 12M18 6L6 18"/></symbol>' +
    '<symbol id="i-menu" viewBox="0 0 24 24"><path ' + S + ' d="M3 8h18M3 16h12"/></symbol>' +
    '<symbol id="i-plus" viewBox="0 0 24 24"><path ' + S + ' d="M12 6v12M6 12h12"/></symbol>' +
    '<symbol id="i-minus" viewBox="0 0 24 24"><path ' + S + ' d="M6 12h12"/></symbol>' +
    '<symbol id="i-c-heart" viewBox="0 0 40 40"><g ' + S + '><circle cx="20" cy="20" r="18"/><path d="M20 27s-7-4.3-7-9.2A3.8 3.8 0 0 1 20 15.6a3.8 3.8 0 0 1 7 2.2c0 4.9-7 9.2-7 9.2z"/></g></symbol>' +
    '<symbol id="i-c-check" viewBox="0 0 40 40"><g ' + S + '><circle cx="20" cy="20" r="18"/><path d="M13.5 20.5l4.5 4.5 9-10"/></g></symbol>' +
    '<symbol id="i-c-paw" viewBox="0 0 40 40"><g ' + S + '><circle cx="20" cy="20" r="18"/><ellipse cx="13.5" cy="17" rx="2" ry="2.6"/><ellipse cx="17.6" cy="13" rx="2" ry="2.6"/><ellipse cx="22.4" cy="13" rx="2" ry="2.6"/><ellipse cx="26.5" cy="17" rx="2" ry="2.6"/><path d="M20 19c-3 0-5.6 3.7-5.6 6 0 1.7 1.4 2.5 2.8 2.5 1.1 0 1.8-.6 2.8-.6s1.7.6 2.8.6c1.4 0 2.8-.8 2.8-2.5 0-2.3-2.6-6-5.6-6z"/></g></symbol>' +
    '<symbol id="i-c-flower" viewBox="0 0 40 40"><g ' + S + '><circle cx="20" cy="20" r="18"/><circle cx="20" cy="14.6" r="3"/><circle cx="25.2" cy="18.4" r="3"/><circle cx="23.2" cy="24.4" r="3"/><circle cx="16.8" cy="24.4" r="3"/><circle cx="14.8" cy="18.4" r="3"/><circle cx="20" cy="20" r="1.4"/></g></symbol>' +
    '<symbol id="i-truck" viewBox="0 0 24 24"><g ' + S + '><path d="M2.5 6.5h11v9.5h-11zM13.5 9.5h4l3 3.2V16h-7"/><circle cx="6.5" cy="17.5" r="1.7"/><circle cx="17" cy="17.5" r="1.7"/></g></symbol>' +
    '<symbol id="i-gift" viewBox="0 0 24 24"><g ' + S + '><path d="M4.5 11h15v9h-15zM3.5 7.5h17V11h-17zM12 7.5V20"/><path d="M12 7.5C10.5 4 7 4 7 6s3 1.5 5 1.5zM12 7.5c1.5-3.5 5-3.5 5-1.5s-3 1.5-5 1.5z"/></g></symbol>' +
    '<symbol id="i-instagram" viewBox="0 0 24 24"><g ' + S + '><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.9"/><circle cx="17" cy="7" r=".5" fill="currentColor"/></g></symbol>' +
    '<symbol id="i-tiktok" viewBox="0 0 24 24"><path ' + S + ' d="M13.5 4v10.8a3.3 3.3 0 1 1-3.3-3.3M13.5 4c.5 2.6 2.4 4.3 5 4.5"/></symbol>' +
    '<symbol id="i-pinterest" viewBox="0 0 24 24"><g ' + S + '><circle cx="12" cy="12" r="8.5"/><path d="M10.6 8.3c3.3-1.2 6 .8 5.3 3.6-.5 2.1-2.6 2.8-4 1.8M12.2 10.6 10 19.8"/></g></symbol>' +
    "</svg>";
  document.body.insertAdjacentHTML("afterbegin", sprite);

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ---------- 1b. Langues (textes dans js/i18n/<langue>.js) ---------- */
  var I18N = window.WOOF_I18N || { lang: "en", languages: { en: "EN" }, t: function (k, f) { return f; }, apply: function () {}, setLang: function () {} };
  var t = function (key, fallback) { return I18N.t(key, fallback); };
  I18N.apply(document);
  $$("[data-lang-switch]").forEach(function (box) {
    var codes = Object.keys(I18N.languages);
    if (codes.length < 2) { box.hidden = true; return; }
    box.setAttribute("role", "group");
    box.setAttribute("aria-label", t("lang.label", "Language"));
    box.innerHTML = codes.map(function (code, i) {
      return (i ? '<span class="lang-switch__sep" aria-hidden="true">|</span>' : "") +
        '<button type="button" lang="' + code + '" data-set-lang="' + code + '" aria-pressed="' + (code === I18N.lang) + '">' + I18N.languages[code] + "</button>";
    }).join("");
  });
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-set-lang]");
    if (b) I18N.setLang(b.getAttribute("data-set-lang"));
  });

  /* ---------- 2. En-tête : ombre légère au défilement ---------- */
  var header = $(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 3. Menu mobile ---------- */
  var menu = $("#mobile-menu");
  var lastFocus = null;
  function openMenu() {
    if (!menu) return;
    lastFocus = document.activeElement;
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    $$("[data-menu-open]").forEach(function (b) { b.setAttribute("aria-expanded", "true"); });
    document.body.classList.add("is-locked");
    var close = $("[data-menu-close]", menu);
    if (close) setTimeout(function () { close.focus(); }, 50);
  }
  function closeMenu() {
    if (!menu || !menu.classList.contains("is-open")) return;
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    $$("[data-menu-open]").forEach(function (b) { b.setAttribute("aria-expanded", "false"); });
    document.body.classList.remove("is-locked");
    if (lastFocus) lastFocus.focus();
  }
  $$("[data-menu-open]").forEach(function (b) { b.addEventListener("click", openMenu); });
  $$("[data-menu-close]").forEach(function (b) { b.addEventListener("click", closeMenu); });
  if (menu) $$("a", menu).forEach(function (a) { a.addEventListener("click", closeMenu); });

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------- 4b. Catalogue : affichage des collections et produits (données dans js/products.js) ---------- */
  var PRODUCTS = window.WOOF_PRODUCTS || [];
  var COLLECTIONS = window.WOOF_COLLECTIONS || [];
  var TYPE_LABEL = { collar: "Dog collar", scrunchie: "Scrunchie", bracelet: "Bracelet" };
  var STATUS_LABEL = { "coming-soon": t("status.coming-soon", "Coming soon"), "released-soon": t("status.released-soon", "Released soon"), available: "" };
  function collectionOf(p) { return COLLECTIONS.filter(function (c) { return c.id === p.collection; })[0] || { name: "", fabric: "", status: "coming-soon" }; }
  function productsOf(c) {
    var order = { collar: 1, scrunchie: 2, bracelet: 3 };
    return PRODUCTS.filter(function (p) { return p.collection === c.id; })
      .sort(function (a, b) { return (order[a.type] || 9) - (order[b.type] || 9); });
  }
  function statusOf(p) {
    var st = collectionOf(p).status;
    if (st === "available") return p.price ? "" : STATUS_LABEL["coming-soon"];
    return STATUS_LABEL[st] || STATUS_LABEL["coming-soon"];
  }
  // Prix affiché (même pendant « Coming soon ») ; sinon le statut
  function priceOf(p) { return p.price ? esc(p.price) : (statusOf(p) || ""); }
  // **gras** dans les descriptions
  function rich(text) { return esc(text).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"); }
  function productUrl(p) { return "product.html?id=" + encodeURIComponent(p.id); }
  function readFilter() {
    try { return new URLSearchParams(window.location.search).get("filter") || "all"; } catch (e) { return "all"; }
  }
  function collectionUrl(c) { return "shop.html?filter=" + encodeURIComponent(c.id); }

  function cardHTML(p) {
    var c = collectionOf(p), img = (p.images && p.images[0]) || { src: "", alt: "" }, st = statusOf(p);
    return (
      '<article class="product-card">' +
      '<a href="' + productUrl(p) + '" class="media"><img src="' + esc(img.src) + '" alt="' + esc(img.alt) + '" loading="lazy">' +
      (st ? '<span class="product-card__tag">' + st + "</span>" : "") + "</a>" +
      '<div class="product-card__info"><h3 class="product-card__name"><a href="' + productUrl(p) + '">' + esc(p.name) + "</a></h3>" +
      '<p class="product-card__price">' + priceOf(p) + "</p></div>" +
      '<p class="product-card__meta">' + esc(TYPE_LABEL[p.type] || "") + " · " + esc(c.fabric) + "</p>" +
      '<a class="btn btn--small btn--outline" href="' + productUrl(p) + (st ? '#notify">' + t("nav.waitlist", "Join the waitlist") : '">Discover') + "</a>" +
      "</article>"
    );
  }

  // Boutique par collection (page d'accueil)
  var shop = $("[data-collection-shop]");
  if (shop) {
    shop.innerHTML = COLLECTIONS.map(function (c, i) {
      var st = STATUS_LABEL[c.status] || "";
      return (
        '<article class="coll' + (i % 2 ? " coll--reverse" : "") + '" id="' + esc(c.id) + '">' +
        '<figure class="coll__cover"><img src="' + esc(c.image) + '" alt="' + esc(c.alt) + '" loading="lazy">' +
        (st ? '<span class="coll__status">' + st + "</span>" : "") + "</figure>" +
        '<div class="coll__side"><div class="coll__head">' +
        '<p class="eyebrow">' + esc(c.fabric) + " collection</p>" +
        '<h3 class="coll__name">' + esc(c.name) + "</h3>" +
        '<p class="coll__tagline">' + esc(c.tagline) + "</p>" +
        (c.setPrice ? '<p class="coll__set">The set <span>collar + scrunchie</span> <strong>' + esc(c.setPrice) + "</strong></p>" : "") +
        "</div>" +
        '<div class="coll__products">' + productsOf(c).map(cardHTML).join("") + "</div></div>" +
        "</article>"
      );
    }).join("");
    // Si l'adresse vise une collection (#diva…), on y descend une fois la page remplie
    if (window.location.hash) {
      var target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (target) setTimeout(function () { target.scrollIntoView(); }, 60);
    }
  }

  // Raccourcis vers les collections (« Shop by collection »)
  var colGrid = $("[data-collection-grid]");
  if (colGrid) {
    colGrid.innerHTML = COLLECTIONS.map(function (c) {
      var st = STATUS_LABEL[c.status] || "";
      return (
        '<li class="cat-card"><a href="' + collectionUrl(c) + '">' +
        '<div class="media"><img src="' + esc(c.image) + '" alt="' + esc(c.alt) + '" loading="lazy">' +
        (c.status === "released-soon" ? '<span class="product-card__tag">' + st + "</span>" : "") + "</div>" +
        '<span class="cat-card__label"><span>' + esc(c.name) + "<small>" + esc(t("collection." + c.id + ".tagline", c.tagline)) + "</small>" + (c.setPrice ? '<em class="cat-card__price">' + t("home.set", "Set") + " " + esc(c.setPrice) + "</em>" : (STATUS_LABEL[c.status] ? '<em class="cat-card__price">' + STATUS_LABEL[c.status] + "</em>" : "")) + '</span><svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg></span></a></li>'
      );
    }).join("");
  }

  // Liens vers les collections (menu Shop, menu mobile, pied de page)
  $$("[data-collection-links]").forEach(function (el) {
    var mode = el.getAttribute("data-collection-links");
    el.innerHTML = COLLECTIONS.map(function (c) {
      var href = mode === "home" ? collectionUrl(c) : "shop.html?filter=" + encodeURIComponent(c.id);
      var link = '<a href="' + href + '">' + esc(c.name) + "</a>";
      return mode === "shop-mobile" ? link : "<li>" + link + "</li>";
    }).join("");
  });

  // Page Shop : une collection = bannière cliquable + ses produits
  function shopProductHTML(p) {
    var img = (p.images && p.images[0]) || { src: "", alt: "" }, st = statusOf(p), url = productUrl(p);
    return (
      '<article class="spc">' +
      '<a class="spc__img" href="' + url + '" tabindex="-1" aria-hidden="true"><img src="' + esc(img.src) + '" alt="" loading="lazy"></a>' +
      '<div class="spc__body">' +
      '<p class="spc__type">' + esc(TYPE_LABEL[p.type] || "") + "</p>" +
      '<h3 class="spc__name"><a href="' + url + '">' + esc(p.name) + "</a></h3>" +
      '<p class="spc__short">' + esc(p.short || "") + "</p>" +
      '<p class="spc__price">' + (p.price ? '<span class="spc__amount">' + esc(p.price) + "</span>" : "") + (st ? '<span class="badge-soon">' + st + "</span>" : "") + "</p>" +
      '<a class="btn btn--small" href="' + url + (st ? '#notify">' + t("nav.waitlist", "Join the waitlist") : '">Discover') + "</a>" +
      "</div></article>"
    );
  }
  function shopCollectionHTML(c, asLink) {
    var st = STATUS_LABEL[c.status] || "", tag = asLink ? "a" : "div";
    var href = asLink ? ' href="shop.html?filter=' + encodeURIComponent(c.id) + '"' : "";
    return (
      '<section class="shop-coll" id="c-' + esc(c.id) + '" aria-label="' + esc(c.name) + '">' +
      "<" + tag + ' class="shop-coll__banner' + (asLink ? " is-link" : "") + '"' + href + ">" +
      '<img src="' + esc(c.banner || c.image) + '" alt="' + esc(c.bannerAlt || c.alt) + '" style="object-position:' + esc(c.bannerFocus || "center") + '" loading="lazy">' +
      '<span class="shop-coll__text">' +
      '<span class="shop-coll__eyebrow">' + esc(c.fabric) + " collection</span>" +
      '<span class="shop-coll__name">' + esc(c.name) + "</span>" +
      '<span class="shop-coll__tagline">' + esc(t("collection." + c.id + ".tagline", c.tagline)) + "</span>" +
      (asLink ? '<span class="shop-coll__cta btn btn--olive btn--small">' + t("shop.discover", "Discover the collection") + ' <svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg></span>' : "") +
      "</span>" +
      (st ? '<span class="shop-coll__status">' + st + "</span>" : "") +
      "</" + tag + ">" +
      (c.setPrice ? '<p class="shop-coll__set">' + t("home.set", "Set") + " — " + productsOf(c).map(function (p) { return esc((TYPE_LABEL[p.type] || "").toLowerCase()); }).join(" + ") + " <strong>" + esc(c.setPrice) + "</strong></p>" : "") +
      '<div class="shop-coll__products">' + productsOf(c).map(shopProductHTML).join("") + "</div>" +
      "</section>"
    );
  }

  // Page Boutique : filtres par catégorie, « for you / for your dog » et par collection
  var shopPage = $("[data-shop]");
  if (shopPage) {
    var FILTERS = {
      all: { eyebrow: "Shop", title: "The collections", intro: window.WOOF_TAGLINE || "Little details. Big personality." },
      collar: { eyebrow: "By category", title: "Dog collars", intro: "Every collar has its match." },
      scrunchie: { eyebrow: "By category", title: "Scrunchies", intro: "Cut from the same fabrics as our dog collars." },
      "for-you": { eyebrow: "For who?", title: "For you", intro: "Scrunchies and bracelets, made to match your dog." },
      "for-dog": { eyebrow: "For who?", title: "For your dog", intro: "Collars for good dogs — tweed, denim, velvet, bandana and gold chain." }
    };
    COLLECTIONS.forEach(function (c) {
      FILTERS[c.id] = { eyebrow: c.fabric + " collection", title: c.name, intro: c.tagline + (c.setPrice ? " — The set (collar + scrunchie): " + c.setPrice : "") };
    });
    var matches = function (p, f) {
      if (f === "all") return true;
      if (f === "for-dog") return p.type === "collar";
      if (f === "for-you") return p.type !== "collar";
      if (f === "collar" || f === "scrunchie" || f === "bracelet") return p.type === f;
      return p.collection === f;
    };
    var ordered = [];
    COLLECTIONS.forEach(function (c) { ordered = ordered.concat(productsOf(c)); });
    var colBox = $("[data-shop-collections]", shopPage);
    if (colBox) {
      colBox.innerHTML = COLLECTIONS.map(function (c) {
        return '<a class="filter" href="shop.html?filter=' + encodeURIComponent(c.id) + '" data-shop-filter="' + esc(c.id) + '">' + esc(c.name) + "</a>";
      }).join("");
    }
    var showShop = function (f) {
      if (!FILTERS[f]) f = "all";
      var info = FILTERS[f];
      var list = ordered.filter(function (p) { return matches(p, f); });
      $("[data-shop-eyebrow]", shopPage).textContent = info.eyebrow;
      $("[data-shop-title]", shopPage).textContent = info.title;
      $("[data-shop-intro]", shopPage).textContent = info.intro;
      var grid = $("[data-shop-grid]", shopPage), coll = COLLECTIONS.filter(function (c) { return c.id === f; })[0];
      var countEl = $("[data-shop-count]", shopPage);
      if (f === "all") {
        // Vue principale : les collections l'une après l'autre
        grid.className = "shop-colls";
        grid.innerHTML = COLLECTIONS.map(function (c) { return shopCollectionHTML(c, true); }).join("");
        countEl.hidden = true;
      } else if (coll) {
        // Page d'une collection : sa bannière + ses produits
        grid.className = "shop-colls shop-colls--single";
        grid.innerHTML = shopCollectionHTML(coll, false);
        countEl.hidden = true;
      } else {
        grid.className = "product-grid";
        grid.innerHTML = list.map(cardHTML).join("");
        countEl.hidden = false;
        countEl.textContent = list.length + (list.length > 1 ? " pieces" : " piece");
      }
      $$("[data-shop-filter]", shopPage).forEach(function (a) {
        if (a.getAttribute("data-shop-filter") === f) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
      document.title = (f === "all" ? "Shop" : info.title) + " — WOOF";
    };
    showShop(readFilter());
    shopPage.addEventListener("click", function (e) {
      var a = e.target.closest("[data-shop-filter]");
      if (!a) return;
      e.preventDefault();
      var f = a.getAttribute("data-shop-filter");
      showShop(f);
      try { history.replaceState(null, "", f === "all" ? "shop.html" : "shop.html?filter=" + encodeURIComponent(f)); } catch (err) { /* ignore */ }
    });
  }

  // Carrousel « The Matching Edit » : un set par collection
  var editTrack = $("[data-edit-track]");
  if (editTrack) {
    editTrack.innerHTML = COLLECTIONS.map(function (c) {
      var pair = productsOf(c).slice(0, 2);
      return (
        '<figure class="edit__slide" style="margin:0"><div class="edit__pair">' +
        pair.map(function (p) { return '<a href="' + productUrl(p) + '"><img src="' + esc(p.images[0].src) + '" alt="' + esc(p.images[0].alt) + '" loading="lazy"></a>'; }).join("") +
        '</div><figcaption class="edit__caption"><h3>' + esc(c.name) + "</h3><p>" +
        pair.map(function (p) { return esc(TYPE_LABEL[p.type]); }).join(" + ") + "</p></figcaption></figure>"
      );
    }).join("");
  }

  // Fiche produit
  var page = $("[data-product-page]");
  if (page && PRODUCTS.length) {
    var pid = "";
    try { pid = new URLSearchParams(window.location.search).get("id") || ""; } catch (e) { pid = ""; }
    var p = PRODUCTS.filter(function (x) { return x.id === pid; })[0] || PRODUCTS[0];
    var c = collectionOf(p), st = statusOf(p);
    var set = function (sel, html) { var el = $(sel, page); if (el) el.innerHTML = html; };
    document.title = p.name + " — WOOF";
    var md = $('meta[name="description"]'); if (md) md.setAttribute("content", p.short);
    set("[data-p-crumb]", esc(p.name));
    set("[data-p-crumb-type]", '<a href="shop.html?filter=' + encodeURIComponent(c.id) + '">' + esc(c.name) + "</a>");
    set("[data-p-collection]", esc(c.name) + " collection · " + esc(c.fabric));
    set("[data-p-name]", esc(p.name));
    set("[data-p-price]", (p.price ? '<span class="pdp__amount">' + esc(p.price) + "</span>" : "") + (st ? '<span class="badge-soon">' + st + "</span>" : ""));
    set("[data-p-set]", c.setPrice ? "Complete the set — collar + scrunchie for <strong>" + esc(c.setPrice) + "</strong>" : "");
    set("[data-p-short]", esc(p.short));
    set("[data-p-description]", "<p>" + rich(p.description) + "</p>");
    set("[data-p-details]", '<ul class="dash-list">' + (p.details || []).map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("") + "</ul>");
    set("[data-p-wl-text]", esc(t("product.wl.text", "Join the waitlist to be the first to know when {name} is available.")).replace("{name}", "<strong>" + esc(p.name) + "</strong>"));
    set("[data-p-status]", st || "Coming soon");
    var hidden = $("[data-p-notify-field]", page);
    if (hidden) hidden.value = p.name;
    var sizeBox = $("[data-p-sizes]", page);
    if (sizeBox) {
      if (p.sizes && p.sizes.length) {
        var SZ = window.WOOF_SIZES || {};
        sizeBox.innerHTML = '<legend>Size <span data-size-chosen></span></legend><div class="sizes sizes--big">' + p.sizes.map(function (s) {
          var d = SZ[s] ? SZ[s].width + " × " + SZ[s].length : "";
          return '<label class="size"><input type="radio" name="size" value="Size ' + esc(s) + '" required><span><strong>' + esc(s) + "</strong>" + (d ? "<small>" + esc(d) + "</small>" : "") + "</span></label>";
        }).join("") + '</div><a class="size-guide-link" href="#size-guide" data-open-size>Size guide</a>';
        sizeBox.addEventListener("change", function () {
          var ch = $("input[name=size]:checked", sizeBox), lab = $("[data-size-chosen]", sizeBox);
          if (ch && lab) lab.textContent = "— " + ch.value.replace("Size ", "");
          sizeBox.classList.remove("is-missing");
        });
        var guide = $("[data-size-table]", page);
        if (guide) {
          guide.innerHTML = "<tr><th>Size</th><th>Width</th><th>Length (adjustable)</th></tr>" + p.sizes.map(function (s) {
            return SZ[s] ? "<tr><td>" + esc(s) + "</td><td>" + esc(SZ[s].width) + "</td><td>" + esc(SZ[s].length) + "</td></tr>" : "";
          }).join("");
        }
      } else {
        sizeBox.innerHTML = '<legend>Size</legend><p class="option__note">One size — fits all.</p>';
      }
    }
    var sg = $("#size-guide", page);
    if (sg && p.type !== "collar") sg.parentNode.removeChild(sg);
    page.addEventListener("click", function (e) {
      if (e.target.closest("[data-open-size]")) { var d = $("#size-guide"); if (d) d.open = true; }
    });
    var imgs = p.images || [];
    var mainImg = $("[data-gallery-main]", page);
    if (mainImg && imgs[0]) { mainImg.src = imgs[0].src; mainImg.alt = imgs[0].alt; }
    var thumbs = $("[data-gallery-thumbs]", page);
    if (thumbs) {
      thumbs.innerHTML = imgs.length > 1 ? imgs.map(function (im, i) {
        return '<button type="button" data-gallery-thumb aria-current="' + (i === 0) + '" aria-label="View photo ' + (i + 1) + '"><img src="' + esc(im.src) + '" alt="' + esc(im.alt) + '" loading="lazy"></button>';
      }).join("") : "";
      if (imgs.length < 2) page.querySelector(".gallery").classList.add("gallery--single");
    }
    // Complete the look : l'autre pièce de la collection, puis d'autres collections
    var look = $("[data-p-look]");
    if (look) {
      var twin = productsOf(c).filter(function (x) { return x.id !== p.id; });
      var others = PRODUCTS.filter(function (x) { return x.collection !== p.collection && x.type === p.type; });
      look.innerHTML = twin.concat(others).slice(0, 3).map(cardHTML).join("");
    }
  }

  /* ---------- 5. Carrousel « The Matching Edit » ---------- */
  $$("[data-slider]").forEach(function (slider) {
    var track = $("[data-slider-track]", slider);
    if (!track) return;
    function go(dir) {
      var w = track.clientWidth;
      var max = track.scrollWidth - w - 2;
      if (dir > 0 && track.scrollLeft >= max) track.scrollTo({ left: 0 });
      else if (dir < 0 && track.scrollLeft <= 2) track.scrollTo({ left: track.scrollWidth });
      else track.scrollBy({ left: dir * w });
    }
    var p = $("[data-slider-prev]", slider), n = $("[data-slider-next]", slider);
    if (p) p.addEventListener("click", function () { go(-1); });
    if (n) n.addEventListener("click", function () { go(1); });
  });

  /* ---------- 6. Galerie de la fiche produit ---------- */
  $$("[data-gallery]").forEach(function (g) {
    var main = $("[data-gallery-main]", g);
    $$("[data-gallery-thumb]", g).forEach(function (t) {
      t.addEventListener("click", function () {
        var img = $("img", t);
        $$("[data-gallery-thumb]", g).forEach(function (o) { o.setAttribute("aria-current", "false"); });
        t.setAttribute("aria-current", "true");
        main.classList.add("is-fading");
        setTimeout(function () {
          main.src = img.getAttribute("src");
          main.alt = img.getAttribute("alt");
          main.classList.remove("is-fading");
        }, 200);
      });
    });
  });

  /* ---------- 7. Liste d'attente (adresse d'envoi : WAITLIST_ENDPOINT dans js/config.js) ---------- */
  var WL_ENDPOINT = String((window.WOOF_CONFIG || {}).WAITLIST_ENDPOINT || "").trim();
  var WL_READY = /^https:\/\//.test(WL_ENDPOINT) && WL_ENDPOINT.indexOf("REMPLACER") === -1;
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  $$("[data-waitlist]").forEach(function (form) {
    var msg = $("[data-wl-msg]", form);
    var btn = $("button[type=submit]", form);
    var say = function (text, kind) { msg.textContent = text; msg.className = "wl-msg" + (kind ? " is-" + kind : ""); };
    var success = function () {
      var box = document.createElement("div");
      box.className = "wl-success";
      box.setAttribute("role", "status");
      box.setAttribute("tabindex", "-1");
      box.innerHTML = '<svg class="icon icon--bow" aria-hidden="true"><use href="#i-bow"/></svg>' +
        '<p class="wl-success__title">' + t("form.success.title", "You\u2019re on the list.") + "</p>" +
        '<p class="wl-success__text">' + t("form.success.text", "Thank you \u2014 we\u2019ll let you know as soon as WOOF launches.") + "</p>";
      form.parentNode.insertBefore(box, form);
      form.hidden = true;
      box.focus();
    };
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.elements.email, consent = form.elements.consent, hp = form.elements._gotcha;
      var val = email.value.trim();
      if (!val || !email.checkValidity() || !EMAIL_RE.test(val)) {
        email.setAttribute("aria-invalid", "true");
        say(t("form.error.email", "Please enter a valid email address."), "error");
        email.focus();
        return;
      }
      email.removeAttribute("aria-invalid");
      if (!consent.checked) {
        say(t("form.error.consent", "Please tick the box to confirm your consent."), "error");
        consent.focus();
        return;
      }
      if (hp && hp.value) { success(); return; }          // robot : on fait semblant, rien n'est envoyé
      if (!WL_READY) { say(t("form.test", "Test mode: the form is not connected yet, nothing was sent."), "test"); return; }

      var data = new FormData(form);
      data.set("email", val);
      data.set("language", I18N.lang);
      data.set("page", window.location.pathname.split("/").pop() || "index.html");
      var size = document.querySelector("[data-p-sizes] input[name=size]:checked");
      if (form.elements.product && size) data.set("size", size.value);
      btn.disabled = true;
      say(t("form.sending", "Sending\u2026"), "");
      fetch(WL_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); success(); })
        .catch(function () { say(t("form.error.send", "Something went wrong and your sign-up wasn\u2019t sent. Please try again in a moment."), "error"); })
        .then(function () { btn.disabled = false; });
    });
  });

  /* ---------- 7b. Avis clients (accueil) — données dans js/reviews.js ---------- */
  var REV = window.WOOF_REVIEWS;
  var revBox = $("[data-reviews]");
  if (revBox && REV) {
    var starsHTML = function (n) {
      var out = "";
      for (var i = 0; i < 5; i++) out += '<span class="' + (i < n ? "is-on" : "") + '">★</span>';
      return '<span class="stars" aria-hidden="true">' + out + "</span>";
    };
    if (REV.rating) {
      var rb = $("[data-reviews-rating]", revBox);
      rb.innerHTML = starsHTML(Math.round(parseFloat(REV.rating))) +
        '<p class="talk__score"><strong>' + esc(REV.rating) + "</strong>/" + esc(REV.ratingOutOf || "5") + "</p>" +
        '<p class="talk__caption">' + t("talk.caption", "Based on customer reviews") + "</p>" +
        '<p class="talk__motto">' + t("talk.motto", "For them. For you. For us.") + "</p>";
    }
    $("[data-reviews-list]", revBox).innerHTML = (REV.items || []).map(function (r, i) {
      var text = t("review." + (i + 1), r.text || "");
      if (!text || text === "review." + (i + 1)) return "";
      return (
        '<li class="talk-card"><figure>' +
        (r.stars ? starsHTML(r.stars) + '<span class="visually-hidden">' + r.stars + " out of 5</span>" : "") +
        "<blockquote><p>" + esc(text) + "</p></blockquote>" +
        "<figcaption>— " + esc(r.name) + "</figcaption></figure></li>"
      );
    }).join("");
    var revList = $("[data-reviews-list]", revBox);
    var cards = revList.innerHTML;
    // Copie de la ligne pour un défilement sans fin (copie ignorée par les lecteurs d'écran)
    revList.innerHTML = cards + cards.replace(/<li class="talk-card">/g, '<li class="talk-card" aria-hidden="true">');
    var marquee = $("[data-marquee]", revBox);
    if (marquee) {
      var n = (REV.items || []).length || 1;
      marquee.style.setProperty("--marquee-duration", Math.max(30, n * 9) + "s");
      var pause = $("[data-marquee-toggle]", revBox);
      if (pause) {
        var label = function () {
          var paused = marquee.classList.contains("is-paused");
          pause.setAttribute("aria-pressed", String(paused));
          pause.textContent = paused ? t("talk.play", "Play") : t("talk.pause", "Pause");
        };
        label();
        pause.addEventListener("click", function () { marquee.classList.toggle("is-paused"); label(); });
      }
    }
    var revNote = $("[data-reviews-note]", revBox);
    if (revNote) revNote.hidden = !REV.isPlaceholder;
  }

  /* ---------- 7c. FAQ : accordéon accessible + contenus tirés du catalogue ---------- */
  var faq = $("[data-faq]");
  if (faq) {
    $$(".faq-item", faq).forEach(function (item, i) {
      var btn = $(".faq-q", item), panel = $(".faq-a", item);
      var qid = "faq-q-" + i, pid = "faq-a-" + i;
      btn.id = qid;
      panel.id = pid;
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-controls", pid);
      panel.setAttribute("role", "region");
      panel.setAttribute("aria-labelledby", qid);
      btn.insertAdjacentHTML("beforeend", '<span class="faq-q__sign" aria-hidden="true"></span>');
    });
    var setOpen = function (item, open) {
      item.classList.toggle("is-open", open);
      $(".faq-q", item).setAttribute("aria-expanded", String(open));
    };
    faq.addEventListener("click", function (e) {
      var btn = e.target.closest(".faq-q");
      if (!btn) return;
      var item = btn.closest(".faq-item");
      setOpen(item, !item.classList.contains("is-open"));
    });
    var openById = function (id) {
      var item = document.getElementById(id);
      if (item && item.classList.contains("faq-item")) {
        setOpen(item, true);
        setTimeout(function () { item.scrollIntoView({ behavior: "smooth", block: "start" }); }, 50);
      }
    };
    document.addEventListener("click", function (e) {
      var a = e.target.closest("[data-faq-open]");
      if (!a) return;
      e.preventDefault();
      openById(a.getAttribute("data-faq-open"));
    });
    if (window.location.hash) openById(decodeURIComponent(window.location.hash.slice(1)));

    // Tailles (WOOF_SIZES dans js/products.js)
    var SZ2 = window.WOOF_SIZES || {};
    var sizeTable = $("[data-faq-sizes]", faq);
    if (sizeTable) {
      sizeTable.innerHTML = "<tr><th>" + t("faq.sizes.size", "Collar size") + "</th><th>" + t("faq.sizes.width", "Width") + "</th><th>" + t("faq.sizes.length", "Length (adjustable)") + "</th></tr>" +
        Object.keys(SZ2).map(function (k) { return "<tr><td>" + esc(k) + "</td><td>" + esc(SZ2[k].width) + "</td><td>" + esc(SZ2[k].length) + "</td></tr>"; }).join("");
    }
    var adj = $("[data-faq-adjust]", faq);
    if (adj) {
      adj.innerHTML = Object.keys(SZ2).map(function (k) {
        return "<li>" + esc(t("faq.adjust.item", "Size {s}: {w} wide, {l} adjustable length").replace("{s}", k).replace("{w}", SZ2[k].width).replace("{l}", SZ2[k].length)) + "</li>";
      }).join("");
    }
    // Collections et leurs pièces
    var fc = $("[data-faq-collections]", faq);
    if (fc) {
      fc.innerHTML = COLLECTIONS.map(function (c) {
        var st = STATUS_LABEL[c.status];
        return '<li><a href="shop.html?filter=' + encodeURIComponent(c.id) + '"><strong>' + esc(c.name) + "</strong></a> — " +
          productsOf(c).map(function (p) { return esc(t("type." + p.type, (TYPE_LABEL[p.type] || "").toLowerCase())); }).join(" + ") +
          (st ? " · <em>" + st + "</em>" : "") + "</li>";
      }).join("");
    }
  }

  /* ---------- 8. Page « Coming soon » : titre selon le lien cliqué ---------- */
  var soonTitle = $("[data-soon-title]");
  if (soonTitle) {
    var names = { journal: "The Journal", account: "Your account", collections: "Collections", search: "Search", contact: "Contact", legal: "Legal notice", privacy: "Privacy", terms: "Terms of sale", delivery: "Delivery & returns", care: "Care guide", sizes: "Size guide" };
    var key = "";
    try { key = new URLSearchParams(window.location.search).get("p") || ""; } catch (e) { key = ""; }
    if (names[key]) {
      soonTitle.textContent = names[key];
      document.title = names[key] + " — Coming soon | WOOF";
    }
  }

  /* ---------- 9. Apparition douce au défilement ---------- */
  var reveals = $$(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- 10. Année du copyright ---------- */
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
