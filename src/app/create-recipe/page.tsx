"use client";

import { useState } from "react";
import Link from "next/link";

type IngredientRow = {
  id: number;
  quantity: string;
  name: string;
};

export default function CreateRecipePage() {
  const [title, setTitle] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState<IngredientRow[]>([
    { id: 1, quantity: "400g", name: "Extra-firm tofu, drained and pressed" },
    { id: 2, quantity: "2 tbsp", name: "Toasted sesame oil" },
    { id: 3, quantity: "1 tbsp", name: "Fresh grated ginger root" },
  ]);

  const [notification, setNotification] = useState<string | null>(null);

  const addIngredientRow = () => {
    setIngredients((prev) => [
      ...prev,
      { id: Date.now(), quantity: "", name: "" },
    ]);
  };

  const removeIngredientRow = (id: number) => {
    setIngredients((prev) => prev.filter((item) => item.id !== id));
  };

  const updateIngredient = (id: number, field: "quantity" | "name", value: string) => {
    setIngredients((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleSaveDraft = () => {
    setNotification("Draft saved locally to your browser!");
    setTimeout(() => setNotification(null), 3000);
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    setNotification("Recipe published to notebook successfully!");
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)] bg-[#FCFAF6]">
      <aside className="w-full lg:w-64 bg-white border-r border-stone-200 p-5 flex flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-7 bg-[#C2410C] text-white font-bold flex items-center justify-center rounded text-xs">
              ER
            </div>
            <div>
              <div className="font-semibold text-stone-900 text-sm">Recipe Studio</div>
              <div className="text-[10px] text-stone-400 font-mono">v1.0 Editor Mode</div>
            </div>
          </div>

          <nav className="space-y-1 mb-8 text-sm">
            <div className="flex items-center gap-2.5 px-3 py-2 bg-[#C2410C] text-white rounded font-medium">
              <span>✎</span>
              <span>Editor</span>
            </div>

            <div className="flex items-center justify-between px-3 py-2 text-stone-600 hover:bg-stone-50 rounded cursor-pointer transition-colors">
              <div className="flex items-center gap-2.5">
                <span>📄</span>
                <span>Drafts</span>
              </div>
              <span className="text-[11px] bg-stone-100 text-stone-500 px-1.5 py-0.2 rounded font-mono">
                3
              </span>
            </div>

            <div className="flex items-center gap-2.5 px-3 py-2 text-stone-600 hover:bg-stone-50 rounded cursor-pointer transition-colors">
              <span>⚙</span>
              <span>Settings</span>
            </div>
          </nav>

          <div className="pt-4 border-t border-stone-100">
            <Link
              href="/recipes"
              className="flex items-center gap-2 text-xs text-stone-600 hover:text-[#C2410C] transition-colors"
            >
              <span>←</span>
              <span>Back to Explorer</span>
            </Link>
          </div>
        </div>

        <div className="text-[11px] text-stone-400 pt-6 border-t border-stone-100 space-y-1">
          <div className="hover:text-stone-600 cursor-pointer">📖 Documentation</div>
          <div>© 2025 Everyday Recipes</div>
        </div>
      </aside>

      <main className="flex-1 p-6 lg:p-10 max-w-5xl">
        {notification && (
          <div className="mb-6 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-md flex items-center justify-between">
            <span>✓ {notification}</span>
            <button onClick={() => setNotification(null)} className="text-emerald-600 font-bold">✕</button>
          </div>
        )}

        <div className="text-xs text-stone-500 mb-2 flex items-center gap-2">
          <span>Studio</span>
          <span>/</span>
          <span className="text-stone-800 font-medium">New Recipe Draft</span>
        </div>

        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900">
            Create Recipe
          </h1>
          <span className="text-[11px] font-mono px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded">
            Unsaved Changes
          </span>
        </div>

        <p className="text-sm text-stone-600 mb-8 leading-relaxed">
          Enter recipe parameters, ingredients, and sequential preparation instructions for the culinary index.
        </p>

        <form onSubmit={handlePublish} className="space-y-8">
          <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-xs">
            <h2 className="text-base font-semibold text-stone-900 mb-5">
              Recipe Parameters
            </h2>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-8">
                  <label className="block text-stone-700 font-medium mb-1.5">
                    Recipe Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sesame Ginger Tofu Rice Bowl"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-200 rounded bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#C2410C]"
                  />
                </div>

                <div className="md:col-span-4">
                  <label className="block text-stone-700 font-medium mb-1.5">
                    Cuisine <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-200 rounded bg-white text-stone-800 focus:outline-none focus:border-[#C2410C]"
                  >
                    <option value="">Select regional style</option>
                    <option value="Asian">Asian (East &amp; South)</option>
                    <option value="Italian">Italian &amp; Mediterranean</option>
                    <option value="Middle Eastern">Middle Eastern / Levantine</option>
                    <option value="French">French Bistro</option>
                    <option value="Artisanal">Artisanal Bakery</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-6">
                  <label className="block text-stone-700 font-medium mb-1.5">
                    Prep Time (minutes) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. 25"
                      value={prepTime}
                      onChange={(e) => setPrepTime(e.target.value)}
                      className="w-full px-3 py-2 pr-12 border border-stone-200 rounded bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#C2410C]"
                    />
                    <span className="absolute right-3 top-2 text-stone-400 text-xs">
                      min
                    </span>
                  </div>
                </div>

                <div className="md:col-span-6">
                  <label className="block text-stone-700 font-medium mb-1.5">
                    Difficulty Level <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-200 rounded bg-white text-stone-800 focus:outline-none focus:border-[#C2410C]"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1.5">
                  Short Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Brief summary of flavor profile and key technique..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-200 rounded bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#C2410C] resize-y"
                />
                <span className="text-[11px] text-stone-400 mt-1 block">
                  Recommended 100-140 characters for indexing notebooks.
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-xs">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-base font-semibold text-stone-900">
                Ingredients List
              </h2>
              <span className="text-xs text-stone-500">
                {ingredients.length} Items Added
              </span>
            </div>
            <p className="text-xs text-stone-500 mb-4">
              Define quantities, units, and ingredient naming.
            </p>

            <div className="space-y-3 mb-4">
              {ingredients.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  <span className="text-stone-300 font-mono text-sm cursor-grab select-none px-1">
                    ⠿
                  </span>

                  <input
                    type="text"
                    placeholder="e.g. 200g or 2 tbsp"
                    value={item.quantity}
                    onChange={(e) => updateIngredient(item.id, "quantity", e.target.value)}
                    className="w-28 sm:w-36 px-3 py-1.5 border border-stone-200 rounded bg-white text-xs text-stone-800 focus:outline-none focus:border-[#C2410C]"
                  />

                  <input
                    type="text"
                    placeholder="Ingredient description"
                    value={item.name}
                    onChange={(e) => updateIngredient(item.id, "name", e.target.value)}
                    className="flex-1 px-3 py-1.5 border border-stone-200 rounded bg-white text-xs text-stone-800 focus:outline-none focus:border-[#C2410C]"
                  />

                  <button
                    type="button"
                    onClick={() => removeIngredientRow(item.id)}
                    className="text-stone-400 hover:text-red-500 p-1.5 rounded transition-colors text-sm"
                    title="Remove item"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addIngredientRow}
              className="w-full py-2 border border-dashed border-stone-300 hover:border-[#C2410C] hover:text-[#C2410C] text-stone-600 rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
            >
              <span>+</span>
              <span>Add Row</span>
            </button>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-200">
            <span className="text-xs text-stone-500">
              Auto-saved locally 2m ago
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleSaveDraft}
                className="px-4 py-2 bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 text-xs font-medium rounded transition-colors"
              >
                Save Draft
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#C2410C] hover:bg-[#9A3412] text-white text-xs font-medium rounded transition-colors shadow-xs"
              >
                Publish Recipe
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
