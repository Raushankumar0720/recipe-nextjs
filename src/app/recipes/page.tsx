"use client";

import { useState } from "react";
import Link from "next/link";
import { recipesData } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";

export default function RecipesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredRecipes = selectedCategory === "all"
    ? recipesData
    : recipesData.filter((recipe) => recipe.category === selectedCategory);

  const quickMeals = recipesData.filter((r) => r.category === "quick-meals");
  const plantBased = recipesData.filter((r) => r.category === "plant-based");
  const bakingGrains = recipesData.filter((r) => r.category === "baking-grains");

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="text-xs text-stone-500 mb-3 flex items-center gap-2">
        <span className="text-stone-400">Recipes</span>
        <span>/</span>
        <span className="text-stone-700 font-medium">All Categories</span>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 mb-2">
          Recipe Catalog Index
        </h1>
        <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
          Complete taxonomy index of all cataloged everyday dishes. Displaying all recipes when no specific category or path segment is provided.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-8">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
            selectedCategory === "all"
              ? "bg-[#C2410C] text-white shadow-xs"
              : "bg-stone-100 text-stone-700 hover:bg-stone-200"
          }`}
        >
          All <span className="opacity-75 ml-1">20</span>
        </button>

        <button
          onClick={() => setSelectedCategory("quick-meals")}
          className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
            selectedCategory === "quick-meals"
              ? "bg-[#C2410C] text-white shadow-xs"
              : "bg-stone-100 text-stone-700 hover:bg-stone-200"
          }`}
        >
          Quick Meals (&lt;25m) <span className="opacity-75 ml-1">9</span>
        </button>

        <button
          onClick={() => setSelectedCategory("plant-based")}
          className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
            selectedCategory === "plant-based"
              ? "bg-[#C2410C] text-white shadow-xs"
              : "bg-stone-100 text-stone-700 hover:bg-stone-200"
          }`}
        >
          Plant-Based <span className="opacity-75 ml-1">8</span>
        </button>

        <button
          onClick={() => setSelectedCategory("baking-grains")}
          className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
            selectedCategory === "baking-grains"
              ? "bg-[#C2410C] text-white shadow-xs"
              : "bg-stone-100 text-stone-700 hover:bg-stone-200"
          }`}
        >
          Baking &amp; Grains <span className="opacity-75 ml-1">6</span>
        </button>

        <button
          onClick={() => setSelectedCategory("soups-stews")}
          className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
            selectedCategory === "soups-stews"
              ? "bg-[#C2410C] text-white shadow-xs"
              : "bg-stone-100 text-stone-700 hover:bg-stone-200"
          }`}
        >
          Soups &amp; Stews <span className="opacity-75 ml-1">5</span>
        </button>
      </div>

      {selectedCategory !== "all" ? (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-200">
            <h2 className="text-lg font-semibold text-stone-900">
              Showing recipes in category ({filteredRecipes.length})
            </h2>
            <button
              onClick={() => setSelectedCategory("all")}
              className="text-xs text-[#C2410C] hover:underline"
            >
              Clear filter
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-12">
          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-base font-semibold text-stone-900">
                  Quick Meals (&lt;25m)
                </h2>
                <span className="text-[11px] px-1.5 py-0.5 bg-stone-100 text-stone-600 rounded">
                  9 entries
                </span>
              </div>
              <button
                onClick={() => setSelectedCategory("quick-meals")}
                className="text-xs text-stone-500 hover:text-[#C2410C] transition-colors inline-flex items-center gap-1"
              >
                <span>View segment (/quick-meals)</span>
                <span>→</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickMeals.slice(0, 3).map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-base font-semibold text-stone-900">
                  Plant-Based
                </h2>
                <span className="text-[11px] px-1.5 py-0.5 bg-stone-100 text-stone-600 rounded">
                  8 entries
                </span>
              </div>
              <button
                onClick={() => setSelectedCategory("plant-based")}
                className="text-xs text-stone-500 hover:text-[#C2410C] transition-colors inline-flex items-center gap-1"
              >
                <span>View segment (/plant-based)</span>
                <span>→</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plantBased.slice(0, 3).map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-base font-semibold text-stone-900">
                  Baking &amp; Grains
                </h2>
                <span className="text-[11px] px-1.5 py-0.5 bg-stone-100 text-stone-600 rounded">
                  6 entries
                </span>
              </div>
              <button
                onClick={() => setSelectedCategory("baking-grains")}
                className="text-xs text-stone-500 hover:text-[#C2410C] transition-colors inline-flex items-center gap-1"
              >
                <span>View segment (/baking-grains)</span>
                <span>→</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bakingGrains.slice(0, 3).map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>
        </div>
      )}

      <div className="mt-14 bg-stone-50 border border-stone-200 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-600">
        <div className="flex items-start gap-2.5">
          <span className="text-base text-stone-400">🌱</span>
          <div>
            <strong className="text-stone-800 block">Test nested dynamic route sub-path</strong>
            <span>Simulate how Next.js populates the params array when visiting specific sub-paths:</span>
          </div>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <Link
            href="/recipes"
            className="px-2.5 py-1 bg-white border border-stone-200 hover:border-[#C2410C] text-[#C2410C] rounded transition-colors"
          >
            /recipes/quick-meals
          </Link>
          <Link
            href="/recipes/overnight-country-sourdough"
            className="px-2.5 py-1 bg-white border border-stone-200 hover:border-[#C2410C] text-[#C2410C] rounded transition-colors"
          >
            /recipes/baking-grains/sourdough
          </Link>
        </div>
      </div>
    </div>
  );
}
