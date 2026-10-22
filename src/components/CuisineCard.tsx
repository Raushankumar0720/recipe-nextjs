import Link from "next/link";
import { Cuisine } from "@/types/recipe";

type CuisineCardProps = {
  cuisine: Cuisine;
};

export default function CuisineCard({ cuisine }: CuisineCardProps) {
  return (
    <div className="bg-white border border-stone-200 rounded-lg p-5 flex flex-col justify-between hover:border-stone-400 transition-all shadow-xs">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] tracking-wider uppercase font-semibold px-1.5 py-0.5 bg-rose-50 text-rose-800 border border-rose-200 rounded">
            {cuisine.recipeCount} RECIPES
          </span>
          <span className="text-stone-400 text-sm">↗</span>
        </div>

        <h3 className="text-base font-semibold text-stone-900 mb-2">
          {cuisine.name}
        </h3>

        <p className="text-xs text-stone-600 leading-relaxed mb-6">
          {cuisine.description}
        </p>
      </div>

      <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
        <span className="text-stone-500">
          {cuisine.focusLabel}: <strong className="text-stone-700 font-medium">{cuisine.focus}</strong>
        </span>
        <Link
          href={`/recipes`}
          className="text-[#C2410C] font-medium hover:underline inline-flex items-center gap-1"
        >
          <span>Explore</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
