/* ==========================================================================
   WOOF — CATALOGUE DES PRODUITS
   --------------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour ajouter, retirer ou changer un produit.
   La page d'accueil et les fiches produits se mettent à jour toutes seules.

   RÈGLES SIMPLES :
   - Le texte se met toujours entre guillemets "comme ceci".
   - Chaque bloc { ... } se termine par une virgule.
   - Pour une apostrophe dans un texte, écrivez-la normalement : "dog's".
   - Prix : laissez "" (vide) tant qu'il n'est pas connu → le site affiche « Coming soon ».
     Quand il est connu, écrivez par ex. "€45".
   ========================================================================== */

/* ---------- LES COLLECTIONS (modèles) ---------- */
window.WOOF_COLLECTIONS = [
  {
    id: "rodeo-kid",                 // identifiant (minuscules, tirets, pas d'espace)
    name: "Rodeo Kid",
    fabric: "Red bandana",
    tagline: "A little wild, always charming.",
    image: "images/rodeo-kid-collier-1.jpg",
    alt: "Red paisley bandana dog collar with a gold Woof medallion"
  },
  {
    id: "park-avenue-girl",
    name: "Park Avenue Girl",
    fabric: "Tweed",
    tagline: "Tweed, gold and very good manners.",
    image: "images/collection-park-avenue-girl.jpg",
    alt: "Woman kissing her spaniel wearing a burgundy tweed collar"
  },
  {
    id: "denim-club",
    name: "Denim Club",
    fabric: "Denim",
    tagline: "Your favourite jeans, for both of you.",
    image: "images/collection-denim-club.jpg",
    alt: "Woman with her curly dog, both wearing matching denim accessories"
  },
  {
    id: "the-diva",
    name: "The Diva",
    fabric: "Velvet",
    tagline: "Burgundy velvet for main characters.",
    image: "images/collection-the-diva.jpg",
    alt: "Woman hugging her spaniel wearing a burgundy velvet collar"
  }
];

/* ---------- LES PRODUITS ----------
   type : "collar" (collier) ou "scrunchie"
   collection : l'identifiant d'une collection ci-dessus
   images : la 1re photo est celle des vignettes ; ajoutez-en autant que vous voulez */
window.WOOF_PRODUCTS = [

  /* ===== RODEO KID — bandana rouge ===== */
  {
    id: "rodeo-kid-collar",
    name: "Rodeo Kid Bandana Collar",
    collection: "rodeo-kid",
    type: "collar",
    price: "",
    short: "A red paisley bandana collar with a gold-tone Woof medallion.",
    description: "For dogs who were born for adventure. Rodeo Kid pairs a classic red paisley bandana with a sturdy adjustable collar, so the bandana always sits just right — no slipping, no untying. Finished with our gold-tone buckle and signature Woof medallion.",
    details: [
      "Cotton bandana in red paisley print",
      "Adjustable collar with gold-tone metal buckle",
      "Signature engraved Woof medallion",
      "D-ring to attach a leash",
      "Designed in Paris"
    ],
    sizes: ["S", "M", "L"],
    images: [
      { src: "images/rodeo-kid-collier-1.jpg", alt: "Red paisley bandana dog collar with a gold Woof medallion" }
    ]
  },
  {
    id: "rodeo-kid-scrunchie",
    name: "Rodeo Kid Scrunchie",
    collection: "rodeo-kid",
    type: "scrunchie",
    price: "",
    short: "The same red paisley, for your hair.",
    description: "Cut from the same red bandana as the Rodeo Kid collar, this scrunchie is your half of the matching look. Soft on hair, easy to wear on the wrist, with a little gold-tone Woof charm.",
    details: [
      "Cotton in red paisley print",
      "Gentle elastic, holds without pulling",
      "Gold-tone Woof charm",
      "One size"
    ],
    sizes: [],
    images: [
      { src: "images/rodeo-kid-scrunchie-1.jpg", alt: "Red paisley scrunchie with a gold Woof charm" }
    ]
  },

  /* ===== PARK AVENUE GIRL — tweed ===== */
  {
    id: "park-avenue-girl-collar",
    name: "Park Avenue Girl Collar",
    collection: "park-avenue-girl",
    type: "collar",
    price: "",
    short: "Burgundy, black and cream tweed with gold-tone hardware.",
    description: "A little jacket for the neck. Park Avenue Girl is woven in a textured burgundy, black and cream tweed, finished with a polished gold-tone buckle engraved with WOOF and our signature medallion. Chic on a morning walk, perfect on a café terrace.",
    details: [
      "Premium tweed, soft and resistant",
      "Signature buckle with WOOF engraving",
      "Engraved Woof medallion",
      "Adjustable fit, D-ring for a leash",
      "Designed in Paris"
    ],
    sizes: ["S", "M", "L"],
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
    price: "",
    short: "Same tweed, same love — for you.",
    description: "The perfect match to the Park Avenue Girl collar: a generous scrunchie in the same burgundy, black and cream tweed. Wear it in a messy bun, a low ponytail or around the wrist.",
    details: [
      "Premium tweed",
      "Gentle elastic, holds without pulling",
      "Gold-tone Woof charm",
      "One size"
    ],
    sizes: [],
    images: [
      { src: "images/park-avenue-girl-scrunchie-1.jpg", alt: "Burgundy tweed scrunchie" },
      { src: "images/park-avenue-girl-scrunchie-2.jpg", alt: "Tweed scrunchie worn in a bun" },
      { src: "images/park-avenue-girl-detail-tweed.jpg", alt: "Close-up of the tweed" }
    ]
  },

  /* ===== DENIM CLUB — denim ===== */
  {
    id: "denim-club-collar",
    name: "Denim Club Collar",
    collection: "denim-club",
    type: "collar",
    price: "",
    short: "Navy denim with gold stitching and an engraved buckle.",
    description: "Your favourite pair of jeans, reimagined for your dog. Denim Club is made from a deep navy denim with golden flecks and contrast stitching, finished with strong gold-tone hardware built to last through every walk.",
    details: [
      "Premium denim, soft and durable",
      "Secure buckle with WOOF engraving",
      "Engraved Woof medallion",
      "Strong adjustable hardware, D-ring for a leash",
      "Designed in Paris"
    ],
    sizes: ["S", "M", "L"],
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
    price: "",
    short: "Same denim, same love — for you.",
    description: "Made from the same navy denim as the Denim Club collar, with its little golden flecks. Comfortable all day long, in your hair or on your wrist, with a gold-tone Woof charm.",
    details: [
      "Premium denim",
      "Comfortable for all-day wear",
      "Gold-tone Woof charm",
      "One size"
    ],
    sizes: [],
    images: [
      { src: "images/denim-club-scrunchie-1.jpg", alt: "Navy denim scrunchie with a gold Woof charm" },
      { src: "images/denim-club-scrunchie-2.jpg", alt: "Gold Woof charm on the denim scrunchie" },
      { src: "images/denim-club-scrunchie-3.jpg", alt: "Close-up of the denim fabric" }
    ]
  },

  /* ===== THE DIVA — velours ===== */
  {
    id: "the-diva-collar",
    name: "The Diva Collar",
    collection: "the-diva",
    type: "collar",
    price: "",
    short: "Ruched burgundy velvet and gold-tone hardware.",
    description: "For the main character of every walk. The Diva is a softly ruched collar in deep burgundy velvet, finished with our gold-tone engraved buckle and signature medallion. Elegant, plush and impossible to ignore.",
    details: [
      "Premium velvet, soft and elegant",
      "Signature buckle with WOOF engraving",
      "Engraved Woof medallion",
      "Adjustable fit for perfect comfort",
      "Designed in Paris"
    ],
    sizes: ["S", "M", "L"],
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
    price: "",
    short: "Burgundy velvet, for a perfect match.",
    description: "A plush burgundy velvet scrunchie, the twin of The Diva collar. Soft on hair and beautifully elegant — the easiest way to match your dog.",
    details: [
      "Soft velvet",
      "Gentle elastic, holds without pulling",
      "One size"
    ],
    sizes: [],
    images: [
      { src: "images/the-diva-scrunchie-1.jpg", alt: "Burgundy velvet scrunchie" },
      { src: "images/the-diva-scrunchie-2.jpg", alt: "Velvet scrunchie worn in a bun" }
    ]
  }

];
