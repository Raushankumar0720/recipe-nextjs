import Link from "next/link";
import { cuisinesData } from "@/data/cuisines";
import { recipesData } from "@/data/recipes";
import CuisineCard from "@/components/CuisineCard";
import RecipeCard from "@/components/RecipeCard";

export default function CuisinesPage() {
  const featuredRecipes = recipesData.filter((r) =>
    ["vegetable-noodles", "miso-glazed-eggplant", "scallion-pancakes"].includes(r.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex items-center justify-between text-xs text-stone-500 mb-6">
        <div className="flex items-center gap-2">
          <Link href="/cuisines" className="hover:text-stone-800">Cuisines</Link>
          <span>/</span>
          <span className="hover:text-stone-800">Asian</span>
          <span>/</span>
          <span className="text-stone-800 font-medium">East Asian</span>
        </div>
        <div className="font-mono text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded border border-stone-200">
          &lt;&gt; /cuisines/[...slug]
        </div>
      </div>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded">
            REGIONAL DOMAIN
          </span>
          <span className="text-xs text-stone-500">
            55 Cataloged Formulas
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900">
            East Asian Cuisines
          </h1>

          <div className="flex items-center gap-2 text-xs">
            <button className="px-3 py-1.5 bg-white border border-stone-200 rounded text-stone-700 hover:bg-stone-50 transition-colors">
              ↑ Parent: Asian Cuisines
            </button>
            <button className="px-3 py-1.5 bg-white border border-stone-200 rounded text-stone-700 hover:bg-stone-50 transition-colors">
              Root: All Cuisines
            </button>
          </div>
        </div>

        <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
          Traditional cooking traditions and foundational flavor profiles originating from East Asia, centered on fermented seasonings, umami broths, and quick heat techniques.
        </p>
      </div>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-stone-900">
            Sub-Regional Traditions
          </h2>
          <span className="text-xs text-stone-500">
            4 Active Classifications
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cuisinesData.map((cuisine) => (
            <CuisineCard key={cuisine.id} cuisine={cuisine} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-semibold text-stone-900">
              Featured East Asian Formulas
            </h2>
            <p className="text-xs text-stone-500">
              Validated lab entries calibrated for domestic stoves and clean kitchen workflows.
            </p>
          </div>
          <span className="text-xs text-stone-400">
            Sorted by: Foundation
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} showSubtitleFormat={true} />
          ))}
        </div>
      </section>

      <div className="bg-stone-50 border border-stone-200 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] tracking-wider uppercase font-semibold text-stone-500 block mb-1">
            PANTRY STANDARD
          </span>
          <h3 className="text-sm font-semibold text-stone-900 mb-1">
            Foundational Umami Index
          </h3>
          <p className="text-xs text-stone-600 max-w-2xl leading-relaxed">
            All East Asian recipes in Everyday Recipes adhere to pure unadulterated shoyu weights (15ml / 1 tbsp = ~900mg sodium) and natural fermentation without artificial caramel coloring.
          </p>
        </div>
        <button className="text-xs text-stone-700 hover:text-[#C2410C] font-medium underline shrink-0">
          Read Pantry Guide
        </button>
      </div>
    </div>
  );
}
