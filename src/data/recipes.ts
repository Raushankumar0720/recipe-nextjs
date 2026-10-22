import { Recipe } from "@/types/recipe";

export const recipesData: Recipe[] = [
  {
    id: "1",
    slug: "vegetable-noodles",
    title: "Vegetable Noodles",
    category: "quick-meals",
    categoryLabel: "Quick Meals (<25m)",
    cuisine: "Asian",
    prepTime: "20 mins",
    difficulty: "Easy",
    servings: "2 portions",
    description: "A quick weeknight stir-fry utilizing tender flat noodles, crisp julienned seasonal vegetables, and a balanced savory soy-sesame reduction.",
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1080&q=80",
    tag: "Quick Prep",
    entryNumber: "Entry #042 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 2 portions",
    ingredients: [
      { id: "i1", quantity: "200g", name: "wheat noodles or soba" },
      { id: "i2", quantity: "1 tbsp", name: "toasted sesame oil" },
      { id: "i3", quantity: "1 small", name: "carrot, julienned" },
      { id: "i4", quantity: "1", name: "red bell pepper, thinly sliced" },
      { id: "i5", quantity: "2 cups", name: "shredded savoy cabbage" },
      { id: "i6", quantity: "2", name: "scallions, diagonally sliced" },
      { id: "i7", quantity: "2 tbsp", name: "low-sodium soy sauce" },
      { id: "i8", quantity: "1 tbsp", name: "dark soy sauce" },
      { id: "i9", quantity: "1 tsp", name: "grated ginger" },
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Par-boil & oil noodles",
        description: "Cook noodles in salted boiling water until al dente, drain and toss lightly with half the sesame oil."
      },
      {
        stepNumber: "02",
        title: "Preheat wok",
        description: "Heat a wide skillet or wok over medium-high heat with remaining oil until shimmering."
      },
      {
        stepNumber: "03",
        title: "Flash aromatics and root vegetables",
        description: "Add ginger, julienned carrot, and bell pepper; stir-fry briskly for 3 minutes until tender-crisp."
      },
      {
        stepNumber: "04",
        title: "Incorporate greens & seasoning reduction",
        description: "Fold in the shredded cabbage and noodles; pour in light and dark soy sauces."
      },
      {
        stepNumber: "05",
        title: "Glaze reduction and finish",
        description: "Toss continuously for 2 minutes to glaze evenly, finish with sliced scallions and remove from heat."
      }
    ]
  },
  {
    id: "2",
    slug: "brown-butter-garlic-noodles",
    title: "Brown Butter Garlic Noodles",
    category: "quick-meals",
    categoryLabel: "Quick Meals (<25m)",
    cuisine: "Pan-Asian",
    prepTime: "15 mins",
    difficulty: "Easy",
    servings: "2 servings",
    description: "Savory egg noodles emulsified with nut-browned butter, pulverized garlic, scallions, and toasted sesame seeds.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    tag: "Pan-Asian",
    entryNumber: "Entry #018 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 2 servings",
    ingredients: [
      { id: "b1", quantity: "250g", name: "fresh egg noodles" },
      { id: "b2", quantity: "3 tbsp", name: "unsalted butter" },
      { id: "b3", quantity: "5 cloves", name: "fresh garlic, finely minced" },
      { id: "b4", quantity: "1.5 tbsp", name: "oyster sauce or mushroom sauce" },
      { id: "b5", quantity: "1 tbsp", name: "parmesan or pecorino cheese" },
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Boil Noodles",
        description: "Boil egg noodles according to package instructions until chewy and tender."
      },
      {
        stepNumber: "02",
        title: "Brown the Butter",
        description: "Melt butter over medium heat until foamy and lightly golden brown with a nutty fragrance."
      },
      {
        stepNumber: "03",
        title: "Emulsify Sauce",
        description: "Add garlic, soy sauce, and noodles with a splash of pasta water, tossing vigorously."
      }
    ]
  },
  {
    id: "3",
    slug: "skillet-shakshuka-feta",
    title: "Skillet Shakshuka with Feta",
    category: "quick-meals",
    categoryLabel: "Quick Meals (<25m)",
    cuisine: "Levantine",
    prepTime: "20 mins",
    difficulty: "Medium",
    servings: "3 servings",
    description: "Gently poached farm eggs in a robust reduction of roasted peppers, crushed Roma tomatoes, and aromatic cumin topped with creamy feta.",
    image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80",
    tag: "Levantine",
    entryNumber: "Entry #029 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 3 servings",
    ingredients: [
      { id: "s1", quantity: "4 large", name: "pasture-raised eggs" },
      { id: "s2", quantity: "1 can (400g)", name: "crushed san marzano tomatoes" },
      { id: "s3", quantity: "1 large", name: "bell pepper, diced" },
      { id: "s4", quantity: "75g", name: "crumbled greek feta" },
      { id: "s5", quantity: "1 tsp", name: "ground cumin & smoked paprika" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Simmer Sauce",
        description: "Saute bell peppers, garlic, and spices, then pour in tomatoes and simmer until thick."
      },
      {
        stepNumber: "02",
        title: "Poach Eggs",
        description: "Create wells in sauce, crack in eggs, cover and cook gently for 5-7 minutes."
      },
      {
        stepNumber: "03",
        title: "Garnish",
        description: "Scatter crumbled feta, fresh cilantro, and warm crusty bread on the side."
      }
    ]
  },
  {
    id: "4",
    slug: "silken-tofu-wakame-miso",
    title: "Silken Tofu & Wakame Miso",
    category: "quick-meals",
    categoryLabel: "Quick Meals (<25m)",
    cuisine: "Japanese",
    prepTime: "12 mins",
    difficulty: "Easy",
    servings: "2 servings",
    description: "Fast restorative soup utilizing fermented white miso, kombu dashi stock, and delicate tender silken tofu cubes.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    tag: "Japanese",
    entryNumber: "Entry #005 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 2 servings",
    ingredients: [
      { id: "m1", quantity: "3 cups", name: "kombu dashi stock" },
      { id: "m2", quantity: "2 tbsp", name: "shiro white miso paste" },
      { id: "m3", quantity: "150g", name: "silken tofu, cubed" },
      { id: "m4", quantity: "1 tbsp", name: "dried wakame seaweed" },
      { id: "m5", quantity: "1", name: "green scallion, sliced thin" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Warm the Dashi",
        description: "Warm dashi stock over medium heat until steaming, without bringing to a rolling boil."
      },
      {
        stepNumber: "02",
        title: "Dissolve Miso",
        description: "Dissolve miso paste in a ladle with broth until smooth and whisk back into pot."
      },
      {
        stepNumber: "03",
        title: "Finish",
        description: "Add silken tofu and wakame. Heat for 1 minute and ladle into ceramic bowls."
      }
    ]
  },
  {
    id: "5",
    slug: "turmeric-chickpea-coconut-curry",
    title: "Turmeric Chickpea Coconut Curry",
    category: "plant-based",
    categoryLabel: "Plant-Based",
    cuisine: "South Asian",
    prepTime: "30 mins",
    difficulty: "Easy",
    servings: "4 servings",
    description: "Braised garbanzo beans with fresh ginger, baby spinach, cold-pressed coconut cream, and golden aromatic spices.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    tag: "South Asian",
    entryNumber: "Entry #051 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 servings",
    ingredients: [
      { id: "c1", quantity: "2 cans", name: "chickpeas, rinsed & drained" },
      { id: "c2", quantity: "1 can (400ml)", name: "full-fat coconut milk" },
      { id: "c3", quantity: "3 cups", name: "fresh baby spinach" },
      { id: "c4", quantity: "1 tbsp", name: "ground turmeric & cumin" },
      { id: "c5", quantity: "1 tbsp", name: "fresh grated ginger & garlic" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Bloom Spices",
        description: "Heat oil, add cumin, turmeric, ginger, and minced garlic until aromatic."
      },
      {
        stepNumber: "02",
        title: "Simmer Chickpeas",
        description: "Add chickpeas and coconut milk. Simmer gently for 15 minutes."
      },
      {
        stepNumber: "03",
        title: "Wilt Greens",
        description: "Stir in spinach until wilted. Squeeze fresh lime juice before serving with basmati rice."
      }
    ]
  },
  {
    id: "6",
    slug: "roasted-carrots-lemon-tahini",
    title: "Roasted Carrots with Lemon Tahini",
    category: "plant-based",
    categoryLabel: "Plant-Based",
    cuisine: "Middle Eastern",
    prepTime: "35 mins",
    difficulty: "Medium",
    servings: "4 servings",
    description: "High-heat caramelized young root vegetables rested over a whipped sesame-lemon puree with toasted pumpkin seeds.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    tag: "Middle Eastern",
    entryNumber: "Entry #033 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 servings",
    ingredients: [
      { id: "rc1", quantity: "500g", name: "heirloom rainbow carrots" },
      { id: "rc2", quantity: "3 tbsp", name: "pure sesame tahini" },
      { id: "rc3", quantity: "2 tbsp", name: "fresh lemon juice" },
      { id: "rc4", quantity: "1 tbsp", name: "maple syrup or date syrup" },
      { id: "rc5", quantity: "2 tbsp", name: "toasted pepitas" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Roast Carrots",
        description: "Toss carrots in olive oil and roast at 200°C for 25 minutes until caramelized and tender."
      },
      {
        stepNumber: "02",
        title: "Whip Tahini",
        description: "Whisk tahini with lemon juice, ice water, and salt until light and fluffy."
      },
      {
        stepNumber: "03",
        title: "Assemble",
        description: "Spread whipped tahini onto platter, arrange hot carrots on top, and scatter pepitas."
      }
    ]
  },
  {
    id: "7",
    slug: "warm-french-lentil-herb-salad",
    title: "Warm French Lentil & Herb Salad",
    category: "plant-based",
    categoryLabel: "Plant-Based",
    cuisine: "French Bistro",
    prepTime: "25 mins",
    difficulty: "Easy",
    servings: "2 servings",
    description: "Tender Puy lentils folded with Dijon vinaigrette, thinly shaved bulbs of fennel, capers, and tender leafy herbs.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    tag: "French Bistro",
    entryNumber: "Entry #064 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 2 servings",
    ingredients: [
      { id: "fl1", quantity: "1 cup", name: "french green puy lentils" },
      { id: "fl2", quantity: "2 tbsp", name: "extra virgin olive oil" },
      { id: "fl3", quantity: "1 tbsp", name: "dijon mustard" },
      { id: "fl4", quantity: "1 small", name: "fennel bulb, shaved thin" },
      { id: "fl5", quantity: "1/4 cup", name: "fresh dill and flat-leaf parsley" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Simmer Lentils",
        description: "Cook lentils in salted water with bay leaf for 20 minutes until tender with bite."
      },
      {
        stepNumber: "02",
        title: "Make Dressing",
        description: "Whisk olive oil, red wine vinegar, Dijon mustard, and cracked black pepper."
      },
      {
        stepNumber: "03",
        title: "Toss Warm",
        description: "Dress lentils while warm, fold in shaved fennel, capers, and herbs."
      }
    ]
  },
  {
    id: "8",
    slug: "overnight-country-sourdough",
    title: "Overnight Country Sourdough",
    category: "baking-grains",
    categoryLabel: "Baking & Grains",
    cuisine: "Artisanal",
    prepTime: "3 hrs",
    difficulty: "Advanced",
    servings: "1 loaf (850g)",
    description: "High-hydration formula using 80% unbleached bread flour and 20% stone-ground rye with a 16-hour cold overnight ferment.",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
    tag: "Artisanal",
    entryNumber: "Entry #001 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 1 loaf (850g)",
    ingredients: [
      { id: "sd1", quantity: "400g", name: "unbleached bread flour" },
      { id: "sd2", quantity: "100g", name: "whole rye flour" },
      { id: "sd3", quantity: "375ml", name: "tepid filtered water" },
      { id: "sd4", quantity: "100g", name: "active levain sourdough starter" },
      { id: "sd5", quantity: "10g", name: "fine sea salt" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Autolyse",
        description: "Mix flours and water, resting for 45 minutes to hydrate grains."
      },
      {
        stepNumber: "02",
        title: "Bulk Fermentation",
        description: "Incorporate starter and salt. Perform 4 sets of stretch-and-folds over 2 hours."
      },
      {
        stepNumber: "03",
        title: "Cold Retard & Bake",
        description: "Shape boule, refrigerate in banneton for 14 hours, bake in Dutch oven at 240°C."
      }
    ]
  },
  {
    id: "9",
    slug: "ligurian-olive-oil-focaccia",
    title: "Ligurian Olive Oil Focaccia",
    category: "baking-grains",
    categoryLabel: "Baking & Grains",
    cuisine: "Italian",
    prepTime: "1 hr 15m",
    difficulty: "Medium",
    servings: "8 portions",
    description: "Deep-dimpled dough brine-washed with unfiltered extra virgin olive oil, flaky Maldon sea salt, and fresh rosemary sprigs.",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
    tag: "Italian",
    entryNumber: "Entry #012 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 8 portions",
    ingredients: [
      { id: "fc1", quantity: "500g", name: "type 00 flour" },
      { id: "fc2", quantity: "400ml", name: "lukewarm water" },
      { id: "fc3", quantity: "7g", name: "instant dry yeast" },
      { id: "fc4", quantity: "50ml", name: "extra virgin olive oil" },
      { id: "fc5", quantity: "1 tbsp", name: "flaky sea salt and rosemary" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Mix High Hydration Dough",
        description: "Stir flour, yeast, salt, and water until a sticky dough forms. Rest for 1 hour."
      },
      {
        stepNumber: "02",
        title: "Dimple with Brine",
        description: "Pour brine (water, salt, olive oil) over dough and press fingers deep to create dimples."
      },
      {
        stepNumber: "03",
        title: "Bake Golden",
        description: "Bake at 220°C for 22 minutes until crust is crispy and golden brown."
      }
    ]
  },
  {
    id: "10",
    slug: "toasted-farro-wild-mushrooms",
    title: "Toasted Farro with Wild Mushrooms",
    category: "baking-grains",
    categoryLabel: "Baking & Grains",
    cuisine: "Nordic-Italian",
    prepTime: "40 mins",
    difficulty: "Easy",
    servings: "4 servings",
    description: "Nutty ancient emmer wheat simmered with shallot aromatics, seared maitake mushrooms, and aged parmesan shavings.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
    tag: "Nordic-Italian",
    entryNumber: "Entry #022 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 servings",
    ingredients: [
      { id: "tf1", quantity: "1.5 cups", name: "semi-pearled farro" },
      { id: "tf2", quantity: "300g", name: "mixed wild mushrooms (maitake, chanterelle)" },
      { id: "tf3", quantity: "2", name: "shallots, finely diced" },
      { id: "tf4", quantity: "3 cups", name: "vegetable broth" },
      { id: "tf5", quantity: "1/4 cup", name: "grated parmesan cheese" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Toast Farro",
        description: "Toast farro in dry pan for 3 minutes until smelling like roasted nuts."
      },
      {
        stepNumber: "02",
        title: "Sear Mushrooms",
        description: "Sear mushrooms in olive oil over high heat without disturbing for 4 minutes to get deep browning."
      },
      {
        stepNumber: "03",
        title: "Simmer & Fold",
        description: "Simmer farro in broth until tender. Fold in seared mushrooms and parmesan."
      }
    ]
  },
  {
    id: "11",
    slug: "miso-glazed-eggplant",
    title: "Miso Glazed Eggplant",
    category: "plant-based",
    categoryLabel: "Plant-Based",
    cuisine: "Japanese Tradition",
    prepTime: "25 mins",
    difficulty: "Easy",
    servings: "4 Servings",
    description: "Nasu Dengaku broiled with white awase miso, mirin, and unrefined cane sugar until blistered and caramelized.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    tag: "Umami Focus",
    entryNumber: "Entry #015 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 Servings",
    ingredients: [
      { id: "e1", quantity: "2 large", name: "japanese or globe eggplants" },
      { id: "e2", quantity: "3 tbsp", name: "red or white miso paste" },
      { id: "e3", quantity: "2 tbsp", name: "mirin" },
      { id: "e4", quantity: "1 tbsp", name: "raw cane sugar" },
      { id: "e5", quantity: "1 tbsp", name: "toasted white sesame seeds" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Score Eggplant",
        description: "Slice eggplants in half lengthwise, scoring flesh in diamond pattern."
      },
      {
        stepNumber: "02",
        title: "Prepare Glaze",
        description: "Whisk miso, mirin, sake, and sugar in small saucepan over low heat until glossy."
      },
      {
        stepNumber: "03",
        title: "Broil to Caramelize",
        description: "Pan-fry eggplant, brush generously with glaze, and broil 4 minutes until bubbling."
      }
    ]
  },
  {
    id: "12",
    slug: "scallion-pancakes",
    title: "Scallion Pancakes",
    category: "quick-meals",
    categoryLabel: "Quick Meals (<25m)",
    cuisine: "Taiwanese Tradition",
    prepTime: "40 mins",
    difficulty: "Medium",
    servings: "4 Discs",
    description: "Laminated hot-water dough rolled with toasted sesame oil and fine spring greens, pan-fried to shatteringly crisp layers.",
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=800&q=80",
    tag: "Technique Primer",
    entryNumber: "Entry #038 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 Discs",
    ingredients: [
      { id: "sp1", quantity: "300g", name: "all-purpose flour" },
      { id: "sp2", quantity: "180ml", name: "boiling water" },
      { id: "sp3", quantity: "2 cups", name: "finely chopped green scallions" },
      { id: "sp4", quantity: "2 tbsp", name: "toasted sesame oil" },
      { id: "sp5", quantity: "1 tsp", name: "chinese five-spice powder" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Knead Hot Water Dough",
        description: "Mix flour and boiling water to form tender pliable dough. Rest 20 minutes."
      },
      {
        stepNumber: "02",
        title: "Laminate Layers",
        description: "Roll thin, brush with sesame oil, scatter scallions, roll into coil and flatten."
      },
      {
        stepNumber: "03",
        title: "Pan-fry Golden",
        description: "Fry in hot skillet with shallow oil until flaky, crispy, and blistered."
      }
    ]
  },
  {
    id: "13",
    slug: "rustic-tomato-galette",
    title: "Rustic Tomato Galette",
    category: "baking-grains",
    categoryLabel: "Baking & Grains",
    cuisine: "French Country",
    prepTime: "55 mins",
    difficulty: "Medium",
    servings: "4 servings",
    description: "Flaky spelt crust, herbed ricotta, heirloom tomatoes, and freshly cracked black pepper baked into an open rustic tart.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    tag: "Baking",
    entryNumber: "Entry #049 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 servings",
    ingredients: [
      { id: "rg1", quantity: "200g", name: "flaky spelt pastry dough" },
      { id: "rg2", quantity: "3 large", name: "heirloom tomatoes, sliced" },
      { id: "rg3", quantity: "1/2 cup", name: "whole milk ricotta" },
      { id: "rg4", quantity: "2 tbsp", name: "fresh thyme and basil" },
      { id: "rg5", quantity: "1 tbsp", name: "drizzle of honey and olive oil" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Roll Pastry",
        description: "Roll pastry dough into a 12-inch circle on parchment paper."
      },
      {
        stepNumber: "02",
        title: "Layer Ricotta & Tomatoes",
        description: "Spread seasoned ricotta leaving a 2-inch border; shingle tomato slices over top."
      },
      {
        stepNumber: "03",
        title: "Pleat & Bake",
        description: "Fold crust edges over tomatoes and bake at 200°C for 35 minutes until golden."
      }
    ]
  }
];
