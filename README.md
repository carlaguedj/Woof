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
