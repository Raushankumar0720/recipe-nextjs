import { Cuisine } from "@/types/recipe";

export const cuisinesData: Cuisine[] = [
  {
    id: "japanese",
    name: "Japanese Cuisine",
    recipeCount: 14,
    description: "Dashi bases, mirin, miso, and seasonal preservation techniques.",
    focus: "Kombu",
    focusLabel: "Primary base"
  },
  {
    id: "chinese",
    name: "Chinese Regional Styles",
    recipeCount: 22,
    description: "Wok aromatics, Sichuan peppercorn, and delicate dim sum techniques.",
    focus: "Wok Hei",
    focusLabel: "Focus"
  },
  {
    id: "korean",
    name: "Korean Traditions",
    recipeCount: 11,
    description: "Gochujang ferments, toasted sesame oil, and balanced banchan side dishes.",
    focus: "Fermentation",
    focusLabel: "Focus"
  },
  {
    id: "taiwanese",
    name: "Taiwanese Night Market",
    recipeCount: 8,
    description: "Braised broths, scallion crisps, and fragrant five-spice oil infusions.",
    focus: "Five-Spice",
    focusLabel: "Base"
  }
];
