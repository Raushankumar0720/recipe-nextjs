"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { recipesData } from "@/data/recipes";

export default function RecipeDetailPage() {
  const params = useParams();
  const idOrSlug = params?.id as string;

  const recipe = recipesData.find(
    (r) => r.slug === idOrSlug || r.id === idOrSlug
  );

  if (!recipe) {
    notFound();
  }

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleIngredient = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex items-center justify-between text-xs text-stone-500 mb-6">
        <div className="flex items-center gap-2">
          <Link href="/recipes" className="hover:text-stone-800">Recipes</Link>
          <span>/</span>
          <Link href="/cuisines" className="hover:text-stone-800">{recipe.cuisine}</Link>
          <span>/</span>
          <span className="text-stone-900 font-medium">{recipe.title}</span>
        </div>
        <Link
          href="/recipes"
          className="text-stone-600 hover:text-[#C2410C] inline-flex items-center gap-1 font-medium"
        >
          <span>←</span>
          <span>Back to recipes</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        <div className="lg:col-span-8">
          <div className="text-[11px] font-mono tracking-wider uppercase text-stone-500 mb-2">
            <span className="px-2 py-0.5 bg-stone-100 border border-stone-200 rounded text-stone-700 font-medium mr-2">
              {recipe.entryNumber || "Entry #042"}
            </span>
            <span>CULINARY NOTEBOOK</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-stone-900 mb-3">
            {recipe.title}
          </h1>

          <p className="text-sm text-stone-600 leading-relaxed max-w-2xl mb-6">
            {recipe.description}
          </p>

          <div className="pt-4 border-t border-dashed border-stone-200 flex flex-wrap items-center gap-4 text-xs text-stone-600">
            <div>
              <span className="text-stone-400">Cuisine:</span>{" "}
              <strong className="text-stone-800 font-medium">{recipe.cuisine}</strong>
            </div>
            <span className="text-stone-300">•</span>
            <div>
              <span className="text-stone-400">Prep time:</span>{" "}
              <strong className="text-stone-800 font-medium">{recipe.prepTime}</strong>
            </div>
            <span className="text-stone-300">•</span>
            <div>
              <span className="text-stone-400">Difficulty:</span>{" "}
              <strong className="text-stone-800 font-medium">{recipe.difficulty}</strong>
            </div>
            <span className="text-stone-300">•</span>
            <div>
              <span className="text-stone-400">Servings:</span>{" "}
              <strong className="text-stone-800 font-medium">{recipe.servings}</strong>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="border border-stone-200 p-2 bg-white rounded-lg shadow-xs">
            <div className="relative h-60 w-full overflow-hidden rounded bg-stone-100">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px] text-stone-500 font-mono px-1">
              <span>FIG 1.0 — Plated Prep</span>
              <span>1080×810</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 bg-white border border-stone-200 rounded-lg p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-stone-900">Ingredients</h2>
            <span className="text-xs text-stone-500">{recipe.ingredients.length} Items</span>
          </div>

          <div className="flex items-center justify-between py-1.5 px-3 bg-stone-50 border border-stone-200 rounded text-xs text-stone-600 mb-4">
            <span className="font-medium text-stone-800">{recipe.yieldInfo}</span>
            <span className="text-stone-500 font-mono">Scale: 1.0x</span>
          </div>

          <div className="space-y-3 mb-6">
            {recipe.ingredients.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <label
                  key={item.id}
                  className="flex items-start gap-3 cursor-pointer group select-none text-xs leading-relaxed"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleIngredient(item.id)}
                    className="mt-0.5 rounded border-stone-300 text-[#C2410C] focus:ring-[#C2410C] h-4 w-4 accent-[#C2410C] cursor-pointer"
                  />
                  <span className={`${isChecked ? "line-through text-stone-400" : "text-stone-700"}`}>
                    <strong className="font-semibold text-stone-900">{item.quantity}</strong>{" "}
                    {item.name}
                  </span>
                </label>
              );
            })}
          </div>

          <div className="pt-3 border-t border-dashed border-stone-200 text-[11px] text-stone-500 italic">
            Tip: Check off items as you mis-en-place.
          </div>
        </div>

        <div className="lg:col-span-8 bg-white border border-stone-200 rounded-lg p-6 shadow-xs">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-100">
            <h2 className="text-lg font-semibold text-stone-900">Methodology &amp; Execution</h2>
            <span className="text-xs text-stone-500">{recipe.steps.length} Sequential Steps</span>
          </div>

          <div className="divide-y divide-stone-100">
            {recipe.steps.map((step, index) => {
              const isLast = index === recipe.steps.length - 1;
              return (
                <div key={step.stepNumber} className="py-5 first:pt-0 last:pb-6 flex items-start gap-4">
                  <div
                    className={`w-7 h-7 shrink-0 rounded flex items-center justify-center text-xs font-mono font-bold ${
                      isLast
                        ? "bg-[#C2410C] text-white"
                        : "bg-stone-100 text-stone-600 border border-stone-200"
                    }`}
                  >
                    {step.stepNumber}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-stone-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-600"></span>
              <span>Execution verified in home test kitchen</span>
            </div>
            <Link
              href="/create-recipe"
              className="text-[#C2410C] hover:underline font-medium inline-flex items-center gap-1"
            >
              <span>Edit formulation</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
