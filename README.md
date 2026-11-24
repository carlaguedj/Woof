# WOOF — site e-commerce

Site en ligne : https://carlaguedj.github.io/Woof/

## Les fichiers

| Fichier | Contenu |
|---|---|
| `js/products.js` | **Le catalogue : tous les produits et collections** (c'est ici qu'on ajoute un produit) |
| `index.html` | Page d'accueil (illustration : `images/accueil-illustration-paris.jpg`) |
| `shop.html` | Boutique : par catégorie, « for you / for your dog » et par collection |
| `product.html` | Fiche produit (une seule page qui affiche le produit choisi) |
| `about.html` | About us |
| `js/config.js` | **Réglages** : adresse de la liste d'attente (`WAITLIST_ENDPOINT`) et langues |
| `js/i18n/en.js`, `js/i18n/fr.js` | **Tous les textes** du site, en anglais et en français |
| `legal-notice.html`, `privacy-policy.html`, `terms-of-sale.html`, `cookies.html` | Pages légales (brouillons à compléter) |
| `faq.html` | FAQ (réponses à compléter : cherchez « À COMPLÉTER ») |
| `js/reviews.js` | Avis clients et note de l'accueil (exemples pour l'instant) |
| `contact.html` | Contact (adresses e-mail à compléter) |
| `coming-soon.html` | Page « bientôt disponible » (pages légales…) |
| `css/style.css` | Apparence : couleurs, polices, mise en page |
| `js/main.js` | Fonctionnement du site (rien à modifier) |
| `images/` | Toutes les photos (`couverture-….jpg` = couvertures des collections, `menu-dalmatien.png` = illustration du menu mobile) |

## Ajouter ou modifier une collection ou un produit

Tout se passe dans **`js/products.js`** (sur GitHub : ouvrir le fichier → crayon ✏️ → « Commit changes »).
Le site est organisé **par collection** : chaque collection contient un collier et sa pièce assortie
(scrunchie, ou bracelet pour The Spoiled One).

- **Ordre des collections** : celui de la liste `WOOF_COLLECTIONS`, en haut du fichier.
- **Statut d'une collection** (ligne `status`) :
  - `"coming-soon"` → affiche « Coming soon »
  - `"released-soon"` → affiche « Released soon »
  - `"available"` → en vente : le prix des produits s'affiche
- **Nouvelle collection** : copiez un bloc de `WOOF_COLLECTIONS` (du `{` au `},`), changez son `id`, son nom…
- **Nouveau produit** : copiez un bloc de `WOOF_PRODUCTS`, changez son `id`, et indiquez dans `collection`
  l'`id` de sa collection. `type` vaut `"collar"`, `"scrunchie"` ou `"bracelet"`.
- **Prix** : `price: "€29"` sur chaque produit, et `setPrice: "€39"` (prix du set) sur chaque collection.
  Les prix restent visibles pendant « Coming soon ». Laissez `""` si un prix n'est pas encore connu.
- **Tailles des colliers** : S et M, définies une seule fois dans `WOOF_SIZES` (largeur et longueur).
  Elles s'affichent dans le choix de taille et le guide des tailles de chaque collier.
  Sur un produit, `sizes: ["S", "M"]` = choix de taille obligatoire ; `sizes: []` = one size (scrunchies).
- **Gras** dans une description : entourez le mot de `**` (ex. `**The Diva**`).

La page d'accueil, la boutique, le menu Shop, le pied de page et les fiches produits se mettent à jour tout seuls.

Adresses utiles de la boutique : `shop.html?filter=collar` (dog collars), `?filter=scrunchie`,
`?filter=for-you`, `?filter=for-dog`, ou l'`id` d'une collection (ex. `shop.html?filter=the-diva`).

## Remplacer une photo

Déposez votre photo dans `images/` avec **exactement le même nom** que celle à remplacer (en `.jpg`).
Pour une nouvelle photo, déposez-la dans `images/` puis indiquez son nom dans `js/products.js`.
Les photos actuelles sont découpées dans le catalogue : remplacez-les dès que possible
par les originaux en haute qualité (au moins 1200 px de large).

## Changer les couleurs

`css/style.css`, tout en haut, bloc `:root` : une ligne par couleur (ex. `--bordeaux: #7D101C;`).

## Instagram

Le site renvoie vers @woof_clubb (en-tête, menu, galerie, pied de page, page Contact).
Pour afficher le vrai fil Instagram en direct : créer un compte gratuit sur un service comme
Behold (behold.so) ou LightWidget, s'y connecter **vous-même** avec Instagram, puis coller le
code fourni à la place de la grille `insta-grid` dans `index.html`.
Ne mettez jamais de mot de passe dans le site.

## Alertes « Notify me » et newsletter

Les formulaires sont visuels pour l'instant : les adresses ne sont pas encore enregistrées.
Pour les recevoir, il faut les relier à un service d'e-mails (Shopify, Mailchimp, Brevo ou Formspree).

## Shopify (plus tard)

Le jour de la vente : renseigner les prix dans `js/products.js` et remplacer le bloc « Coming soon »
de la fiche produit par le bouton d'achat Shopify (bloc commenté `SHOPIFY` dans `product.html`).

## Avis clients (accueil)

Dans `js/reviews.js`. Les avis actuels sont des **exemples** : une mention « Sample reviews » s'affiche
tant que `isPlaceholder: true`. Avec de vrais avis : remplacez les textes, mettez `isPlaceholder: false`,
et indiquez la note réelle (ex. `rating: "4.8"`). Tant que `rating` vaut `null`, aucune note n'est affichée.

## FAQ

Dans `faq.html`. Les réponses en italique marquées `À COMPLÉTER` dans le code attendent vos informations
(pays et délais de livraison, retours, échanges, annulation, suivi, entretien, emballage cadeau).
Les tailles, les collections et les matières sont reprises automatiquement de `js/products.js`.

## Langues (EN | FR)

- Les textes sont dans `js/i18n/en.js` (anglais) et `js/i18n/fr.js` (français) : même clé à gauche, texte à droite.
  Ne changez que le texte, jamais la clé.
- Le site choisit la langue du navigateur (anglais si elle n'existe pas), et retient le choix fait avec EN | FR.
- **Ajouter une langue** (ex. italien) : copiez `js/i18n/en.js` en `js/i18n/it.js`, remplacez `register("en"` par
  `register("it"`, traduisez les textes, puis ajoutez `it: "IT",` dans `WOOF_LANGUAGES` (fichier `js/config.js`).
- Pas encore traduits : les descriptions de produits (`js/products.js`) et le corps des pages Shop, fiche produit,
  About us et Contact (le menu et le pied de page sont traduits).

## Liste d'attente

Formulaires sur l'accueil (`#waitlist`), dans le pied de page et sur chaque fiche produit.
Ils envoient à l'adresse `WAITLIST_ENDPOINT` de `js/config.js`. Tant qu'elle vaut `REMPLACER_PAR_MON_URL`,
rien n'est envoyé et un petit message « Mode test » s'affiche.
Données envoyées : email, prénom, consentement, langue, page, et produit + taille depuis une fiche produit.
Le champ caché `_gotcha` sert de piège anti-spam (compatible Formspree).

## Pages légales

Brouillons : chaque `[À COMPLÉTER]` est à remplacer dans `js/i18n/en.js` et `js/i18n/fr.js` (clés `legal.…`).
Une fois la page complétée et relue, supprimez dans le fichier `.html` le bloc `<aside class="legal-draft">`.

## Page Shop

La page `shop.html` présente les collections l'une après l'autre : une grande bannière cliquable
(champ `banner` de chaque collection dans `js/products.js`, format large 3:1, ex. `images/banniere-the-diva.jpg`)
puis ses 2 produits. `bannerFocus` règle la partie de la photo gardée visible sur mobile (ex. "55% 40%").
Un clic sur la bannière ouvre la page de la collection (`shop.html?filter=the-diva`).
