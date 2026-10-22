import Link from "next/link";
import { Recipe } from "@/types/recipe";

type RecipeCardProps = {
  recipe: Recipe;
  showSubtitleFormat?: boolean;
};

export default function RecipeCard({ recipe, showSubtitleFormat = false }: RecipeCardProps) {
  return (
    <div className="bg-white border border-stone-200 rounded-lg overflow-hidden flex flex-col hover:border-stone-400 transition-all shadow-xs group">
      <div className="relative h-44 w-full overflow-hidden bg-stone-100">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="text-[11px] uppercase tracking-wide text-stone-500 mb-1.5 font-medium">
          {showSubtitleFormat ? (
            <span>{recipe.cuisine.toUpperCase()} TRADITION • {recipe.prepTime.toUpperCase()}</span>
          ) : (
            <span>{recipe.prepTime} • {recipe.difficulty}</span>
          )}
        </div>

        <h3 className="text-base font-semibold text-stone-900 mb-1.5 line-clamp-1 group-hover:text-[#C2410C] transition-colors">
          {recipe.title}
        </h3>

        <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4 flex-1">
          {recipe.description}
        </p>

        <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
          <span>{recipe.yieldInfo}</span>
          <Link
            href={`/recipes/${recipe.slug}`}
            className="text-[#C2410C] font-medium hover:underline inline-flex items-center gap-1"
          >
            <span>View recipe</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
