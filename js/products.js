/* ==========================================================================
   WOOF — CATALOGUE DES PRODUITS
   --------------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour ajouter, retirer ou changer un produit.
   La page d'accueil, la boutique et les fiches produits se mettent à jour toutes seules.

   LANGUES : chaque produit et chaque collection a un bloc « fr: { … } » avec les textes
   en français. Pour ajouter une langue (ex. italien), ajoutez un bloc « it: { … } » sur le même modèle.

   LANGUES : chaque produit et chaque collection a un bloc « fr: { … } » avec les textes
   en français. Pour ajouter une langue (ex. italien), ajoutez un bloc « it: { … } » sur le même modèle.

   LANGUES : chaque produit et chaque collection a un bloc « fr: { … } » avec les textes
   en français. Pour ajouter une langue (ex. italien), ajoutez un bloc « it: { … } » sur le même modèle.

   RÈGLES SIMPLES :
   - Le texte se met toujours entre guillemets "comme ceci".
   - Chaque bloc { ... } se termine par une virgule.
   - Pour mettre un mot en gras dans une description : **comme ceci**.
   - Prix : écrivez par ex. "€29". Laissez "" (vide) si le prix n'est pas encore connu.
   ========================================================================== */

/* ---------- LES COLLECTIONS ----------
   L'ordre ici = l'ordre d'affichage sur le site (accueil, page Shop, menus).
   status   : "coming-soon"   → affiche « Coming soon » (le prix reste visible)
              "released-soon" → affiche « Released soon »
              "available"     → en vente
   setPrice : prix du set collier + scrunchie */
window.WOOF_COLLECTIONS = [
  {
    id: "the-diva",                  // identifiant (minuscules, tirets, pas d'espace)
    name: "The Diva",
    fr: {                            // textes en français (sinon l'anglais ci-dessus s'affiche)
      fabric: "Velours",
      alt: "Gros plan d'un cavalier king charles portant le collier à nœud en velours bordeaux The Diva, boucle dorée",
      bannerAlt: "Une femme embrasse son épagneul qui porte le collier en velours The Diva, avec le chouchou en velours assorti dans les cheveux, en terrasse de café"
    },
    fabric: "Velvet",
    tagline: "Made for dogs who love a little drama.",
    status: "coming-soon",
    setPrice: "€42",
    image: "images/couverture-the-diva.jpg",   // couverture de la collection (format portrait 3:4)
    alt: "Close-up of a Cavalier King Charles spaniel wearing The Diva burgundy velvet bow collar with golden buckle",
    banner: "images/banniere-the-diva.jpg",       // bannière de la page Shop (format large 3:1)
    bannerFocus: "55% 35%",            // point à garder visible sur mobile (horizontal vertical)
    bannerAlt: "A woman kissing her spaniel wearing The Diva velvet collar, with the matching velvet scrunchie in her hair, on a café terrace"
  },
  {
    id: "denim-club",
    name: "Denim Club",
    fr: {                            // textes en français (sinon l'anglais ci-dessus s'affiche)
      fabric: "Denim",
      alt: "Couverture du magazine WOOF : Denim Club, la collection denim — un shiba inu portant un collier en denim bleu marine à boucle dorée",
      bannerAlt: "Un shiba inu portant le collier Denim Club lors d'un pique-nique, face à une femme portant le chouchou en denim assorti"
    },
    fabric: "Denim",
    tagline: "Everyday cool, made to match.",
    status: "coming-soon",
    setPrice: "€39",
    image: "images/couverture-denim-club.jpg",
    alt: "WOOF magazine cover: Denim Club, the denim collection — a Shiba Inu wearing a navy denim collar with golden buckle",
    banner: "images/banniere-denim-club.jpg",       // bannière de la page Shop (format large 3:1)
    bannerFocus: "55% 40%",            // point à garder visible sur mobile (horizontal vertical)
    bannerAlt: "A Shiba Inu wearing the Denim Club collar at a picnic, facing a woman with the matching denim scrunchie"
  },
  {
    id: "park-avenue-girl",
    name: "Park Avenue Girl",
    fr: {                            // textes en français (sinon l'anglais ci-dessus s'affiche)
      fabric: "Tweed",
      alt: "Couverture du magazine WOOF : Park Avenue Girl, la collection tweed — un cocker portant un collier en tweed crème à carreaux noirs et bordeaux, boucle dorée",
      bannerAlt: "Un whippet portant le collier en tweed Park Avenue Girl sur un lit, à côté d'une femme portant le chouchou en tweed assorti"
    },
    fabric: "Tweed",
    tagline: "Classic charm, with a playful twist.",
    status: "coming-soon",
    setPrice: "€45",
    image: "images/couverture-park-avenue-girl.jpg",
    alt: "WOOF magazine cover: Park Avenue Girl, tweed collection — a cocker spaniel wearing a cream tweed collar checked in black and burgundy, with golden buckle",
    banner: "images/banniere-park-avenue-girl.jpg",       // bannière de la page Shop (format large 3:1)
    bannerFocus: "55% 40%",            // point à garder visible sur mobile (horizontal vertical)
    bannerAlt: "A whippet wearing the Park Avenue Girl tweed collar on a bed, next to a woman with the matching tweed scrunchie"
  },
  {
    id: "rodeo-kid",
    name: "Rodeo Kid",
    fr: {                            // textes en français (sinon l'anglais ci-dessus s'affiche)
      fabric: "Bandana rouge",
      alt: "Couverture du magazine WOOF : Rodeo Kid, le collier bandana — un berger australien portant un collier bandana paisley rouge",
      bannerAlt: "Un berger australien portant le bandana Rodeo Kid, à côté d'une femme portant le chouchou assorti au poignet"
    },
    fabric: "Red bandana",
    tagline: "For little rebels with a Parisian heart.",
    status: "coming-soon",
    setPrice: "€39",
    image: "images/couverture-rodeo-kid.jpg",
    alt: "WOOF magazine cover: Rodeo Kid, the bandana collar — an Australian shepherd wearing a red paisley bandana collar",
    banner: "images/banniere-rodeo-kid.jpg",       // bannière de la page Shop (format large 3:1)
    bannerFocus: "45% 40%",            // point à garder visible sur mobile (horizontal vertical)
    bannerAlt: "An Australian shepherd wearing the Rodeo Kid bandana, next to a woman wearing the matching scrunchie on her wrist"
  },
  {
    id: "the-spoiled-one",
    name: "The Spoiled One",
    fr: {                            // textes en français (sinon l'anglais ci-dessus s'affiche)
      fabric: "Chaîne",
      alt: "Couverture du magazine WOOF : The Spoiled One, la collection chaîne — un lévrier portant un collier chaîne dorée",
      bannerAlt: "Un dalmatien portant le collier chaîne The Spoiled One, à côté d'une femme portant le bracelet chaîne assorti"
    },
    fabric: "Chain",
    tagline: "Because being spoiled looks good on you.",
    status: "released-soon",          // pas au lancement : prix après devis
    setPrice: "",
    image: "images/couverture-the-spoiled-one.jpg",
    alt: "WOOF magazine cover: The Spoiled One, the chain collection — a greyhound wearing a gold chain collar",
    banner: "images/banniere-the-spoiled-one.jpg",       // bannière de la page Shop (format large 3:1)
    bannerFocus: "60% 40%",            // point à garder visible sur mobile (horizontal vertical)
    bannerAlt: "A Dalmatian wearing The Spoiled One chain collar, next to a woman wearing the matching chain bracelet"
  }
];

/* ---------- TAILLES DES COLLIERS ----------
   Affichées dans le choix de taille et dans le guide des tailles des fiches produits. */
window.WOOF_SIZES = {
  S: { width: "2.0 cm", length: "28–43 cm" },
  M: { width: "2.5 cm", length: "38–56 cm" }
};

/* Phrase de la marque (page Boutique « All pieces ») */
window.WOOF_TAGLINE = "Little details. Big personality.";

/* ---------- LES PRODUITS ----------
   type : "collar" (collier), "scrunchie" ou "bracelet"
   collection : l'identifiant d'une collection ci-dessus
   images : la 1re photo est celle des vignettes ; ajoutez-en autant que vous voulez */
window.WOOF_PRODUCTS = [

  /* ===== VELVET — THE DIVA ===== */
  {
    id: "the-diva-collar",
    name: "The Diva Velvet Collar",
    fr: {                            // textes en français (sinon l'anglais ci-dessus s'affiche)
      name: "Collier en velours The Diva",
      short: "Pour les chiens nés pour être remarqués.",
      description: "Pour les chiens nés pour être remarqués. **The Diva** est réalisé dans un velours bordeaux profond, doux au toucher et d'une couleur intense, rehaussé d'élégantes finitions dorées. Luxueux sans se prendre trop au sérieux, c'est le genre de collier qui transforme une simple balade en petit événement.",
      details: ["Velours bordeaux profond", "Finitions dorées, boucle gravée WOOF", "Médaille Woof gravée", "Ajustement réglable", "Taille S : 2,0 cm de large, longueur réglable de 28 à 43 cm", "Taille M : 2,5 cm de large, longueur réglable de 38 à 56 cm", "Conçu en France"],
      alts: ["Le collier The Diva en velours bordeaux froncé, finitions dorées", "Gros plan du collier en velours The Diva et de son anneau doré", "Un whippet portant le collier en velours bordeaux The Diva en terrasse de café"]
    },
    collection: "the-diva",
    type: "collar",
    price: "€32",
    short: "For dogs who were born to be noticed.",
    description: "For dogs who were born to be noticed. **The Diva** is made from rich burgundy velvet, soft to the touch and beautifully deep in colour, finished with refined golden hardware. Luxurious without taking itself too seriously, it is the kind of collar that turns an ordinary walk into a little occasion.",
    details: [
      "Rich burgundy velvet",
      "Golden hardware, buckle engraved WOOF",
      "Engraved Woof medallion",
      "Adjustable fit",
      "Size S: 2.0 cm wide, 28–43 cm adjustable length",
      "Size M: 2.5 cm wide, 38–56 cm adjustable length",
      "Designed in France"
    ],
    sizes: ["S", "M"],
    images: [
      { src: "images/the-diva-collier-1.jpg", alt: "The Diva collar in ruched burgundy velvet with golden hardware" },
      { src: "images/the-diva-collier-2.jpg", alt: "Close-up of The Diva velvet collar and its golden D-ring" },
      { src: "images/the-diva-collier-3.jpg", alt: "Whippet wearing The Diva burgundy velvet collar on a café terrace" }
    ]
  },
  {
    id: "the-diva-scrunchie",
    name: "The Diva Scrunchie",
    fr: {                            // textes en français (sinon l'anglais ci-dessus s'affiche)
      name: "Chouchou The Diva",
      short: "Un peu de velours, rien que pour vous.",
      description: "Un peu de velours, rien que pour vous. Le chouchou **The Diva** est réalisé dans le même somptueux velours bordeaux que le collier, pour apporter la riche texture de la collection à votre propre look. Doux, élégant et légèrement théâtral — exactement comme il se doit.",
      details: ["Somptueux velours bordeaux", "Élastique doux, tient sans tirer", "Taille unique"],
      alts: ["Le chouchou The Diva en velours bordeaux", "Le chouchou en velours The Diva porté au poignet en terrasse de café"]
    },
    collection: "the-diva",
    type: "scrunchie",
    price: "€15",
    short: "A little bit of velvet, just for you.",
    description: "A little bit of velvet, just for you. **The Diva** scrunchie is made in the same sumptuous burgundy velvet as the collar, bringing the collection's rich texture into your own look. Soft, elegant and slightly dramatic — exactly as it should be.",
    details: [
      "Sumptuous burgundy velvet",
      "Gentle elastic, holds without pulling",
      "One size"
    ],
    sizes: [],                         // [] = one size
    images: [
      { src: "images/the-diva-scrunchie-1.jpg", alt: "The Diva scrunchie in burgundy velvet" },
      { src: "images/the-diva-scrunchie-2.jpg", alt: "The Diva velvet scrunchie worn on the wrist on a café terrace" }
    ]
  },

  /* ===== TWEED — PARK AVENUE GIRL ===== */
  {
    id: "park-avenue-girl-collar",
    name: "Park Avenue Girl Tweed Collar",
    fr: {                            // textes en français (sinon l'anglais ci-dessus s'affiche)
      name: "Collier en tweed Park Avenue Girl",
      short: "Un peu d'élégance parisienne à quatre pattes.",
      description: "Un peu d'élégance parisienne à quatre pattes. **Park Avenue Girl** est réalisé dans un tweed raffiné bordeaux, noir et crème, rehaussé d'élégantes finitions dorées. Inspiré du tailleur classique et du chic citadin d'antan, il apporte une touche soignée à chaque balade — du parc au café.",
      details: ["Tweed bordeaux, noir et crème", "Finitions dorées, boucle gravée WOOF", "Médaille Woof gravée", "Ajustement réglable, anneau pour la laisse", "Taille S : 2,0 cm de large, longueur réglable de 28 à 43 cm", "Taille M : 2,5 cm de large, longueur réglable de 38 à 56 cm", "Conçu en France"],
      alts: ["Le collier Park Avenue Girl en tweed rose à carreaux, boucle et anneau dorés, sur du lin crème", "Gros plan du collier en tweed rose Park Avenue Girl et de sa boucle dorée", "Un cavalier king charles portant le collier en tweed rose Park Avenue Girl près d'hortensias roses"]
    },
    collection: "park-avenue-girl",
    type: "collar",
    price: "€34",
    short: "A little Parisian elegance for four paws.",
    description: "A little Parisian elegance for four paws. **Park Avenue Girl** is crafted in a refined burgundy, black and cream tweed, finished with elegant golden hardware. Inspired by classic tailoring and old-school city style, it brings a polished touch to every walk — from the park to the café.",
    details: [
      "Burgundy, black and cream tweed",
      "Golden hardware, buckle engraved WOOF",
      "Engraved Woof medallion",
      "Adjustable fit, D-ring for a leash",
      "Size S: 2.0 cm wide, 28–43 cm adjustable length",
      "Size M: 2.5 cm wide, 38–56 cm adjustable length",
      "Designed in France"
    ],
    sizes: ["S", "M"],
    images: [
      { src: "images/park-avenue-girl-collier-1.jpg", alt: "Park Avenue Girl collar in pink checked tweed with golden buckle and D-ring, on cream linen" },
      { src: "images/park-avenue-girl-collier-2.jpg", alt: "Close-up of the pink tweed Park Avenue Girl collar and its golden buckle" },
      { src: "images/park-avenue-girl-collier-3.jpg", alt: "Cavalier King Charles spaniel wearing the pink tweed Park Avenue Girl collar next to pink hydrangeas" }
    ]
  },
  {
    id: "park-avenue-girl-scrunchie",
    name: "Park Avenue Girl Scrunchie",
    fr: {                            // textes en français (sinon l'anglais ci-dessus s'affiche)
      name: "Chouchou Park Avenue Girl",
      short: "La touche finale du look.",
      description: "La touche finale du look. **Park Avenue Girl** apporte le même tweed joliment texturé à votre garde-robe avec un chouchou assorti. Le bordeaux, le crème et le noir se réunissent dans une pièce intemporelle, chic et juste un peu espiègle.",
      details: ["Tweed bordeaux, noir et crème", "Élastique doux, tient sans tirer", "Taille unique"],
      alts: ["Le chouchou Park Avenue Girl en tweed rose à carreaux", "Le chouchou en tweed rose Park Avenue Girl porté au poignet avec un pull crème"]
    },
    collection: "park-avenue-girl",
    type: "scrunchie",
    price: "€16",
    short: "The finishing touch to the look.",
    description: "The finishing touch to the look. **Park Avenue Girl** brings the same beautifully textured tweed into your wardrobe with a matching scrunchie. Burgundy, cream and black come together in a piece that feels timeless, chic and just a little bit playful.",
    details: [
      "Burgundy, black and cream tweed",
      "Gentle elastic, holds without pulling",
      "One size"
    ],
    sizes: [],                         // [] = one size
    images: [
      { src: "images/park-avenue-girl-scrunchie-1.jpg", alt: "Park Avenue Girl scrunchie in pink checked tweed" },
      { src: "images/park-avenue-girl-scrunchie-2.jpg", alt: "Pink tweed Park Avenue Girl scrunchie worn on the wrist with a cream sweater" }
    ]
  },

  /* ===== DENIM — DENIM CLUB ===== */
  {
    id: "denim-club-collar",
    name: "Denim Club Denim Collar",
    fr: {                            // textes en français (sinon l'anglais ci-dessus s'affiche)
      name: "Collier en denim Denim Club",
      short: "Pour les aventures du quotidien, avec un peu d'attitude.",
      description: "Pour les aventures du quotidien, avec un peu d'attitude. **Denim Club** apporte le denim bleu classique dans la garde-robe de votre chien, avec des surpiqûres soignées et des finitions dorées. Décontracté, intemporel et naturellement cool, il ressemble à votre jean préféré — mais pour quatre pattes.",
      details: ["Denim bleu classique aux surpiqûres soignées", "Finitions dorées, boucle gravée WOOF", "Médaille Woof gravée", "Ajustement réglable, anneau pour la laisse", "Taille S : 2,0 cm de large, longueur réglable de 28 à 43 cm", "Taille M : 2,5 cm de large, longueur réglable de 38 à 56 cm", "Conçu en France"],
      alts: ["Le collier Denim Club en denim bleu marine à surpiqûres dorées, boucle et anneau dorés", "Gros plan du collier Denim Club et de sa boucle dorée", "Un shiba inu portant le collier Denim Club en terrasse de café"]
    },
    collection: "denim-club",
    type: "collar",
    price: "€29",
    short: "For everyday adventures, with a little attitude.",
    description: "For everyday adventures, with a little attitude. **Denim Club** brings classic blue denim to your dog's wardrobe, finished with refined stitching and golden hardware. Casual, timeless and effortlessly cool, it feels like your favourite pair of jeans — only made for four paws.",
    details: [
      "Classic blue denim with refined stitching",
      "Golden hardware, buckle engraved WOOF",
      "Engraved Woof medallion",
      "Adjustable fit, D-ring for a leash",
      "Size S: 2.0 cm wide, 28–43 cm adjustable length",
      "Size M: 2.5 cm wide, 38–56 cm adjustable length",
      "Designed in France"
    ],
    sizes: ["S", "M"],
    images: [
      { src: "images/denim-club-collier-1.jpg", alt: "Denim Club collar in navy denim with golden stitching, golden buckle and D-ring" },
      { src: "images/denim-club-collier-2.jpg", alt: "Close-up of the Denim Club collar and its golden buckle" },
      { src: "images/denim-club-collier-3.jpg", alt: "Shiba Inu wearing the Denim Club collar on a café terrace" }
    ]
  },
  {
    id: "denim-club-scrunchie",
    name: "Denim Club Scrunchie",
    fr: {                            // textes en français (sinon l'anglais ci-dessus s'affiche)
      name: "Chouchou Denim Club",
      short: "Votre essentiel denim du quotidien.",
      description: "Votre essentiel denim du quotidien. **Denim Club** est assorti au collier de votre chien, dans le même denim bleu décontracté, pour créer un lien subtil entre vous sans jamais paraître trop coordonné. Attachez-le dans vos cheveux et partez ensemble.",
      details: ["Denim bleu décontracté", "Confortable toute la journée", "Taille unique"],
      alts: ["Le chouchou Denim Club en denim bleu marine à surpiqûres dorées", "Le chouchou Denim Club porté au poignet en terrasse de café"]
    },
    collection: "denim-club",
    type: "scrunchie",
    price: "€14",
    short: "Your everyday denim essential.",
    description: "Your everyday denim essential. **Denim Club** is made to match your dog's collar in the same easy-going blue denim, creating a subtle connection between you without ever feeling too coordinated. Throw it in your hair and head out together.",
    details: [
      "Easy-going blue denim",
      "Comfortable for all-day wear",
      "One size"
    ],
    sizes: [],                         // [] = one size
    images: [
      { src: "images/denim-club-scrunchie-1.jpg", alt: "Denim Club scrunchie in navy denim with golden stitching" },
      { src: "images/denim-club-scrunchie-2.jpg", alt: "Denim Club scrunchie worn on the wrist on a café terrace" }
    ]
  },

  /* ===== BANDANA ROUGE — RODEO KID ===== */
  {
    id: "rodeo-kid-collar",
    name: "Rodeo Kid Bandana Collar",
    fr: {                            // textes en français (sinon l'anglais ci-dessus s'affiche)
      name: "Collier bandana Rodeo Kid",
      short: "Un brin d'esprit western, pour les balades en ville.",
      description: "Un brin d'esprit western, pour les balades en ville. **Rodeo Kid** associe un riche tissu paisley bordeaux à des détails raffinés et des finitions dorées, pour un look à la fois ludique et chic sans effort. Inspiré des bandanas vintage et de la nonchalance parisienne, il est fait pour les chiens qui ont un peu de caractère — et beaucoup de charme.",
      details: ["Tissu bandana paisley bordeaux", "Finitions dorées", "Médaille Woof gravée", "Ajustement réglable, anneau pour la laisse", "Taille S : 2,0 cm de large, longueur réglable de 28 à 43 cm", "Taille M : 2,5 cm de large, longueur réglable de 38 à 56 cm", "Conçu en France"],
      alts: ["Le collier bandana Rodeo Kid en paisley bordeaux avec boucle dorée, sur du lin crème", "Gros plan du collier bandana Rodeo Kid : boucle et anneaux dorés", "Un cavalier king charles portant le collier bandana Rodeo Kid"]
    },
    collection: "rodeo-kid",
    type: "collar",
    price: "€29",
    short: "A little Western spirit, made for city walks.",
    description: "A little Western spirit, made for city walks. **Rodeo Kid** combines a rich burgundy paisley fabric with refined details and golden hardware for a look that feels both playful and effortlessly chic. Inspired by vintage bandanas and Parisian nonchalance, it was made for dogs with a little personality — and a lot of charm.",
    details: [
      "Burgundy paisley bandana fabric",
      "Golden hardware",
      "Engraved Woof medallion",
      "Adjustable fit, D-ring for a leash",
      "Size S: 2.0 cm wide, 28–43 cm adjustable length",
      "Size M: 2.5 cm wide, 38–56 cm adjustable length",
      "Designed in France"
    ],
    sizes: ["S", "M"],
    images: [
      { src: "images/rodeo-kid-collier-1.jpg", alt: "Rodeo Kid bandana collar in burgundy paisley with golden buckle, on cream linen" },
      { src: "images/rodeo-kid-collier-2.jpg", alt: "Close-up of the Rodeo Kid bandana collar: golden buckle and D-rings" },
      { src: "images/rodeo-kid-collier-3.jpg", alt: "Cavalier King Charles spaniel wearing the Rodeo Kid bandana collar" }
    ]
  },
  {
    id: "rodeo-kid-scrunchie",
    name: "Rodeo Kid Scrunchie",
    fr: {                            // textes en français (sinon l'anglais ci-dessus s'affiche)
      name: "Chouchou Rodeo Kid",
      short: "Le même paisley bordeaux, pensé pour vous.",
      description: "Le même paisley bordeaux, pensé pour vous. **Rodeo Kid** apporte l'imprimé bandana signature à votre garde-robe du quotidien avec un chouchou doux et facile à porter. Portez-le dans vos cheveux, nouez-le à votre poignet, et laissez votre chien faire de même à sa façon.",
      details: ["Imprimé bandana paisley bordeaux", "Doux et facile à porter, dans les cheveux ou au poignet", "Taille unique"],
      alts: ["Le chouchou Rodeo Kid à imprimé bandana paisley bordeaux", "Gros plan du chouchou Rodeo Kid au poignet"]
    },
    collection: "rodeo-kid",
    type: "scrunchie",
    price: "€14",
    short: "The same burgundy paisley, made for you.",
    description: "The same burgundy paisley, made for you. **Rodeo Kid** brings the signature bandana print into your everyday wardrobe with a soft, easy-to-wear scrunchie. Wear it in your hair, tie it around your wrist, and let your dog do the same in their own way.",
    details: [
      "Burgundy paisley bandana print",
      "Soft and easy to wear, in your hair or on your wrist",
      "One size"
    ],
    sizes: [],                         // [] = one size
    images: [
      { src: "images/rodeo-kid-scrunchie-1.jpg", alt: "Rodeo Kid scrunchie in burgundy paisley bandana print" },
      { src: "images/rodeo-kid-scrunchie-2.jpg", alt: "Close-up of the Rodeo Kid scrunchie on a wrist" }
    ]
  },

  /* ===== THE SPOILED ONE — CHAIN (pas au lancement : prix après devis) ===== */
  {
    id: "the-spoiled-one-collar",
    name: "The Spoiled One Chain Collar",
    fr: {                            // textes en français (sinon l'anglais ci-dessus s'affiche)
      name: "Collier chaîne The Spoiled One",
      short: "Pour le chien qui sait exactement ce qu'il mérite.",
      description: "Pour le chien qui sait exactement ce qu'il mérite. **The Spoiled One** associe un riche cuir noir à d'audacieux maillons dorés pour un look assuré, soigné et résolument glamour. Remarquable sans être tapageur, il a été pensé pour le petit compagnon qui est, tout simplement, gâté — et fier de l'être.",
      details: ["Riche cuir noir tressé de maillons dorés", "Boucle dorée, ajustement réglable", "Taille S : 2,0 cm de large, longueur réglable de 28 à 43 cm", "Taille M : 2,5 cm de large, longueur réglable de 38 à 56 cm", "Conçu en France"],
      alts: ["Le collier The Spoiled One : cuir noir tressé de maillons dorés, boucle dorée", "Gros plan des maillons dorés et du cuir noir du collier The Spoiled One", "Un cocker portant le collier chaîne The Spoiled One dans une rue parisienne"]
    },
    collection: "the-spoiled-one",
    type: "collar",
    price: "",
    short: "For the dog who knows exactly what they deserve.",
    description: "For the dog who knows exactly what they deserve. **The Spoiled One** combines rich black leather with bold golden chain links for a look that is confident, polished and unapologetically glamorous. Statement-making without being loud, it was designed for the little one who is, quite simply, spoiled — and proud of it.",
    details: [
      "Rich black leather woven with golden chain links",
      "Golden buckle, adjustable fit",
      "Size S: 2.0 cm wide, 28–43 cm adjustable length",
      "Size M: 2.5 cm wide, 38–56 cm adjustable length",
      "Designed in France"
    ],
    sizes: ["S", "M"],
    images: [
      { src: "images/the-spoiled-one-collier-1.jpg", alt: "The Spoiled One collar: black leather woven with golden chain links, golden buckle" },
      { src: "images/the-spoiled-one-collier-2.jpg", alt: "Close-up of the golden chain links and black leather of The Spoiled One collar" },
      { src: "images/the-spoiled-one-collier-3.jpg", alt: "Cocker spaniel wearing The Spoiled One chain collar in a Parisian street" }
    ]
  },
  {
    id: "the-spoiled-one-bracelet",
    name: "The Spoiled One Bracelet",
    fr: {                            // textes en français (sinon l'anglais ci-dessus s'affiche)
      name: "Bracelet The Spoiled One",
      short: "Un peu d'or, un peu d'attitude.",
      description: "Un peu d'or, un peu d'attitude. Le bracelet **The Spoiled One** apporte l'esprit de la collection à votre propre look, avec une élégante finition noire et une allure audacieuse et mode. L'accessoire parfait pour l'humaine qui sait que son chien est le mieux habillé de la pièce.",
      details: ["Cuir noir tressé de maillons dorés", "Chaînette d'extension réglable", "Taille unique"],
      alts: ["Le bracelet The Spoiled One : chaîne dorée tressée de cuir noir, chaînette d'extension réglable", "Le bracelet The Spoiled One porté au poignet avec une veste en tweed noir"]
    },
    collection: "the-spoiled-one",
    type: "bracelet",
    price: "",
    short: "A little gold, a little attitude.",
    description: "A little gold, a little attitude. **The Spoiled One** bracelet brings the spirit of the collection into your own look with an elegant black finish and a bold, fashion-forward feel. The perfect accessory for the human who knows their dog is the best-dressed one in the room.",
    details: [
      "Black leather woven with golden chain links",
      "Adjustable extension chain",
      "One size"
    ],
    sizes: [],                         // [] = one size
    images: [
      { src: "images/the-spoiled-one-bracelet-1.jpg", alt: "The Spoiled One bracelet: golden chain woven with black leather, adjustable extension chain" },
      { src: "images/the-spoiled-one-bracelet-2.jpg", alt: "The Spoiled One bracelet worn on the wrist with a black tweed jacket" }
    ]
  }

];
