/* ==========================================================================
   WOOF — CATALOGUE DES PRODUITS
   --------------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour ajouter, retirer ou changer un produit.
   La page d'accueil, la boutique et les fiches produits se mettent à jour toutes seules.

   RÈGLES SIMPLES :
   - Le texte se met toujours entre guillemets "comme ceci".
   - Chaque bloc { ... } se termine par une virgule.
   - Pour mettre un mot en gras dans une description : **comme ceci**.
   - Prix : écrivez par ex. "€29". Laissez "" (vide) si le prix n'est pas encore connu.
   ========================================================================== */

/* ---------- LES COLLECTIONS ----------
   L'ordre ici = l'ordre d'affichage sur le site.
   status   : "coming-soon"   → affiche « Coming soon » (le prix reste visible)
              "released-soon" → affiche « Released soon »
              "available"     → en vente
   setPrice : prix du set collier + scrunchie */
window.WOOF_COLLECTIONS = [
  {
    id: "the-diva",                  // identifiant (minuscules, tirets, pas d'espace)
    name: "The Diva",
    fabric: "Velvet",
    tagline: "Made for dogs who love a little drama.",
    status: "coming-soon",
    setPrice: "€42",
    image: "images/couverture-the-diva.jpg",   // couverture de la collection (format portrait 3:4)
    alt: "WOOF magazine cover: The Diva, velvet collection — a spaniel wearing a burgundy velvet collar"
  },
  {
    id: "park-avenue-girl",
    name: "Park Avenue Girl",
    fabric: "Tweed",
    tagline: "Classic charm, with a playful twist.",
    status: "coming-soon",
    setPrice: "€45",
    image: "images/couverture-park-avenue-girl.jpg",
    alt: "WOOF magazine cover: Park Avenue Girl, tweed collection — a cocker spaniel wearing a tweed collar"
  },
  {
    id: "denim-club",
    name: "Denim Club",
    fabric: "Denim",
    tagline: "Everyday cool, made to match.",
    status: "coming-soon",
    setPrice: "€39",
    image: "images/couverture-denim-club.jpg",
    alt: "WOOF magazine cover: Denim Club — a curly dog wearing a denim collar"
  },
  {
    id: "rodeo-kid",
    name: "Rodeo Kid",
    fabric: "Red bandana",
    tagline: "For little rebels with a Parisian heart.",
    status: "coming-soon",
    setPrice: "€39",
    image: "images/couverture-rodeo-kid.jpg",
    alt: "WOOF magazine cover: Rodeo Kid, the bandana collar — an Australian shepherd wearing a red paisley bandana collar"
  },
  {
    id: "the-spoiled-one",
    name: "The Spoiled One",
    fabric: "Chain",
    tagline: "Because being spoiled looks good on you.",
    status: "released-soon",          // pas au lancement : prix après devis
    setPrice: "",
    image: "images/couverture-the-spoiled-one.jpg",
    alt: "WOOF magazine cover: The Spoiled One, the chain collection — a greyhound wearing a gold chain collar"
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
      { src: "images/the-diva-collier-1.jpg", alt: "Ruched burgundy velvet dog collar with Woof medallion" },
      { src: "images/the-diva-detail-boucle.jpg", alt: "Gold-tone buckle engraved WOOF on velvet" },
      { src: "images/the-diva-detail-velours.jpg", alt: "Close-up of the burgundy velvet" },
      { src: "images/the-diva-detail-medaille.jpg", alt: "Gold-tone Woof medallion" },
      { src: "images/the-diva-detail-attache.jpg", alt: "Gold-tone adjuster on the velvet collar" }
    ]
  },
  {
    id: "the-diva-scrunchie",
    name: "The Diva Scrunchie",
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
      { src: "images/the-diva-scrunchie-1.jpg", alt: "Burgundy velvet scrunchie" },
      { src: "images/the-diva-scrunchie-2.jpg", alt: "Velvet scrunchie worn in a bun" }
    ]
  },

  /* ===== TWEED — PARK AVENUE GIRL ===== */
  {
    id: "park-avenue-girl-collar",
    name: "Park Avenue Girl Tweed Collar",
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
      { src: "images/park-avenue-girl-collier-1.jpg", alt: "Burgundy tweed dog collar with gold buckle and Woof medallion" },
      { src: "images/park-avenue-girl-collier-3.jpg", alt: "Spaniel wearing the Park Avenue Girl tweed collar" },
      { src: "images/park-avenue-girl-collier-2.jpg", alt: "Tweed collar resting on stone in warm light" },
      { src: "images/park-avenue-girl-detail-boucle.jpg", alt: "Gold-tone buckle engraved WOOF" },
      { src: "images/park-avenue-girl-detail-tweed.jpg", alt: "Close-up of the burgundy, black and cream tweed" },
      { src: "images/park-avenue-girl-detail-medaille.jpg", alt: "Gold-tone Woof medallion" }
    ]
  },
  {
    id: "park-avenue-girl-scrunchie",
    name: "Park Avenue Girl Scrunchie",
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
      { src: "images/park-avenue-girl-scrunchie-1.jpg", alt: "Burgundy tweed scrunchie" },
      { src: "images/park-avenue-girl-scrunchie-2.jpg", alt: "Tweed scrunchie worn in a bun" },
      { src: "images/park-avenue-girl-detail-tweed.jpg", alt: "Close-up of the tweed" }
    ]
  },

  /* ===== DENIM — DENIM CLUB ===== */
  {
    id: "denim-club-collar",
    name: "Denim Club Denim Collar",
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
      { src: "images/denim-club-collier-1.jpg", alt: "Navy denim dog collar with gold buckle and Woof medallion" },
      { src: "images/denim-club-detail-boucle.jpg", alt: "Gold-tone buckle engraved WOOF on denim" },
      { src: "images/denim-club-detail-denim.jpg", alt: "Close-up of the navy denim and gold stitching" },
      { src: "images/denim-club-detail-medaille.jpg", alt: "Gold-tone Woof medallion" },
      { src: "images/denim-club-detail-attache.jpg", alt: "Gold-tone adjuster on the denim collar" }
    ]
  },
  {
    id: "denim-club-scrunchie",
    name: "Denim Club Scrunchie",
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
      { src: "images/denim-club-scrunchie-1.jpg", alt: "Navy denim scrunchie with a gold Woof charm" },
      { src: "images/denim-club-scrunchie-2.jpg", alt: "Gold Woof charm on the denim scrunchie" },
      { src: "images/denim-club-scrunchie-3.jpg", alt: "Close-up of the denim fabric" }
    ]
  },

  /* ===== BANDANA ROUGE — RODEO KID ===== */
  {
    id: "rodeo-kid-collar",
    name: "Rodeo Kid Bandana Collar",
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
      { src: "images/rodeo-kid-scrunchie-1.jpg", alt: "Rodeo Kid burgundy paisley scrunchie worn on the wrist with a cream sweater" },
      { src: "images/rodeo-kid-scrunchie-2.jpg", alt: "Close-up of the Rodeo Kid scrunchie on a wrist" }
    ]
  },

  /* ===== THE SPOILED ONE — CHAIN (pas au lancement : prix après devis) ===== */
  {
    id: "the-spoiled-one-collar",
    name: "The Spoiled One Chain Collar",
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
