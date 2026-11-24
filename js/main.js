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

  /* ---------- 4. Panier factice ----------
     Le panier est gardé dans le navigateur du visiteur.
     Il sera remplacé par le panier Shopify une fois le « Buy Button » installé. */
  var CART_KEY = "woof-cart-v1";
  var cart = [];
  try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch (e) { cart = []; }
  function saveCart() { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { /* navigation privée : on ignore */ } }

  function money(n) { return "€" + (n % 1 ? n.toFixed(2) : String(n)); }
  function parsePrice(text) {
    var n = parseFloat(String(text).replace(/[^\d,.]/g, "").replace(",", "."));
    return isNaN(n) ? 0 : n;
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  var drawer = $("#cart-drawer");
  var overlay = $("#cart-overlay");

  function renderCart() {
    var count = cart.reduce(function (s, i) { return s + i.qty; }, 0);
    var total = cart.reduce(function (s, i) { return s + i.qty * i.price; }, 0);
    $$("[data-cart-count]").forEach(function (el) {
      el.textContent = count;
      el.classList.toggle("has-items", count > 0);
    });
    $$("[data-cart-count-text]").forEach(function (el) { el.textContent = count; });
    if (!drawer) return;
    var body = $("[data-cart-body]", drawer);
    var totalEl = $("[data-cart-total]", drawer);
    if (totalEl) totalEl.textContent = money(total);
    if (!cart.length) {
      body.innerHTML =
        '<div class="cart-empty"><svg class="icon icon--bow" aria-hidden="true"><use href="#i-bow"/></svg>' +
        "<p>Your bag is empty — for now.</p>" +
        '<a class="btn btn--outline" href="index.html#shop">Discover the pieces</a></div>';
      return;
    }
    body.innerHTML = cart.map(function (item, idx) {
      return (
        '<div class="cart-item">' +
        (item.image ? '<img src="' + esc(item.image) + '" alt="" loading="lazy">' : "<span></span>") +
        "<div><h3>" + esc(item.name) + "</h3>" +
        (item.variant ? '<p class="cart-item__variant">' + esc(item.variant) + "</p>" : '<p class="cart-item__variant"></p>') +
        '<div class="qty"><button type="button" data-qty="-1" data-idx="' + idx + '" aria-label="Decrease quantity"><svg class="icon"><use href="#i-minus"/></svg></button>' +
        "<span>" + item.qty + "</span>" +
        '<button type="button" data-qty="1" data-idx="' + idx + '" aria-label="Increase quantity"><svg class="icon"><use href="#i-plus"/></svg></button></div></div>' +
        '<div class="cart-item__side"><span>' + money(item.price * item.qty) + "</span>" +
        '<button type="button" class="cart-item__remove" data-remove="' + idx + '">Remove</button></div>' +
        "</div>"
      );
    }).join("");
  }

  function openCart() {
    if (!drawer) return;
    closeMenu();
    lastFocus = document.activeElement;
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    if (overlay) overlay.classList.add("is-open");
    document.body.classList.add("is-locked");
    var c = $("[data-cart-close]", drawer);
    if (c) setTimeout(function () { c.focus(); }, 50);
  }
  function closeCart() {
    if (!drawer || !drawer.classList.contains("is-open")) return;
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    if (overlay) overlay.classList.remove("is-open");
    document.body.classList.remove("is-locked");
    if (lastFocus) lastFocus.focus();
  }
  $$("[data-cart-open]").forEach(function (b) { b.addEventListener("click", function (e) { e.preventDefault(); openCart(); }); });
  $$("[data-cart-close]").forEach(function (b) { b.addEventListener("click", closeCart); });
  if (overlay) overlay.addEventListener("click", closeCart);

  if (drawer) {
    drawer.addEventListener("click", function (e) {
      var q = e.target.closest("[data-qty]");
      var r = e.target.closest("[data-remove]");
      if (q) {
        var i = +q.getAttribute("data-idx");
        cart[i].qty += +q.getAttribute("data-qty");
        if (cart[i].qty < 1) cart.splice(i, 1);
      } else if (r) {
        cart.splice(+r.getAttribute("data-remove"), 1);
      } else return;
      saveCart(); renderCart();
    });
  }

  var toast = $("#toast");
  var toastTimer;
  function showToast(msg) {
    if (!toast) return;
    $("[data-toast-text]", toast).textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("is-visible"); }, 2600);
  }

  /* Bouton « Add to cart » : lit le nom, le prix et la photo directement
     dans la fiche (vous n'avez donc qu'un seul endroit à modifier). */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-add-to-cart]");
    if (!btn) return;
    e.preventDefault();
    var box = btn.closest("[data-product]");
    if (!box) return;
    var nameEl = $("[data-product-name]", box);
    var priceEl = $("[data-product-price]", box);
    var imgEl = $("[data-product-image]", box);
    var variant = $$("input[type=radio]:checked", box).map(function (i) { return i.value; }).join(" · ");
    var item = {
      name: nameEl ? nameEl.textContent.trim() : "WOOF piece",
      price: priceEl ? parsePrice(priceEl.textContent) : 0,
      image: imgEl ? imgEl.getAttribute("src") : "",
      variant: variant,
      qty: 1
    };
    var existing = cart.filter(function (c) { return c.name === item.name && c.variant === item.variant; })[0];
    if (existing) existing.qty += 1; else cart.push(item);
    saveCart(); renderCart();
    $$("[data-cart-count]").forEach(function (el) {
      el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump");
    });
    showToast(item.name + " — added to your bag");
  });
  renderCart();

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeMenu(); closeCart(); }
  });

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

  /* ---------- 7. Newsletter (visuel seulement pour l'instant) ---------- */
  $$("[data-newsletter]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = $("input[type=email]", form);
      var msg = form.parentNode.querySelector("[data-newsletter-msg]");
      if (!input.value || !input.checkValidity()) {
        if (msg) msg.textContent = "Please enter a valid e-mail address.";
        input.focus();
        return;
      }
      if (msg) msg.textContent = "Welcome to the pack. Something lovely is on its way.";
      form.reset();
    });
  });

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
