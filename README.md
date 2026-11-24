# WOOF — site e-commerce

Site statique (HTML, CSS, JavaScript simples), prêt pour GitHub Pages :
`https://carlaguedj.github.io/Woof/`

## Les fichiers

| Fichier | Contenu |
|---|---|
| `index.html` | Page d'accueil |
| `product.html` | Fiche produit (modèle : Cherry Charm Collar) |
| `about.html` | Notre histoire |
| `coming-soon.html` | Page « bientôt disponible » (Journal, Account, Collections…) |
| `css/style.css` | Toute l'apparence (couleurs, polices, mise en page) |
| `js/main.js` | Menu mobile, panier factice, carrousel, galerie (rien à modifier) |
| `images/` | Toutes les photos (des emplacements pour l'instant) |

## Remplacer une photo

1. Chaque emplacement indique sur lui-même le **nom du fichier** et la **taille conseillée**
   (ex. `images/accueil-hero-cafe-dalmatien.jpg · 1800×1200`).
2. Renommez votre photo **exactement** avec ce nom (en `.jpg`) et déposez-la dans `images/`
   en remplaçant l'ancienne. C'est tout.
3. Si possible, compressez vos photos avant (ex. sur squoosh.app) : moins de 400 Ko chacune.

## Changer un texte ou un prix

Ouvrez le fichier `.html` (sur GitHub : bouton crayon ✏️), cherchez le texte avec Ctrl+F
(Cmd+F sur Mac), modifiez-le, puis « Commit changes ».
Les prix se trouvent dans les balises qui contiennent `data-product-price` (ex. `€85`).
Le panier lit le nom et le prix directement à cet endroit.

## Changer les couleurs

Dans `css/style.css`, tout en haut, bloc `:root` : chaque couleur a une ligne
(ex. `--bordeaux: #7D101C;`). Changez le code couleur, tout le site suit.

## Brancher Shopify (plus tard)

Dans le code, chaque produit contient un bloc repéré par
`SHOPIFY BUY BUTTON — nom du produit`. Supprimez le bouton « Add to cart » factice
de ce bloc et collez à sa place le code « Buy Button » fourni par Shopify.
