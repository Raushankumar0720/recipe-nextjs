import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="text-xs text-stone-500 mb-6 flex items-center gap-2">
        <Link href="/recipes" className="hover:text-stone-800">Recipes</Link>
        <span>/</span>
        <span className="text-stone-900 font-medium">About</span>
      </div>

      <div className="bg-white border border-stone-200 rounded-xl p-8 sm:p-12 shadow-xs space-y-6">
        <div>
          <span className="text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 bg-orange-50 text-[#C2410C] border border-orange-200 rounded">
            PROJECT OVERVIEW
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 mt-3 mb-2">
            Everyday Recipes Notebook
          </h1>
          <p className="text-sm text-stone-600 leading-relaxed">
            Everyday Recipes is a clean, functional culinary notebook built with Next.js App Router. It is designed to catalog everyday dishes, regional cuisines, and sequential kitchen methodologies without unnecessary complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-stone-200 text-xs">
          <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg">
            <h2 className="font-semibold text-stone-900 mb-1">01. Standardized Formulas</h2>
            <p className="text-stone-600 leading-relaxed">
              Every dish is recorded with clear metric yields, scaled ingredient lists, and tested step-by-step instructions.
            </p>
          </div>

          <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg">
            <h2 className="font-semibold text-stone-900 mb-1">02. Regional Cuisines</h2>
            <p className="text-stone-600 leading-relaxed">
              Explore culinary traditions from East Asia, the Levant, South Asia, and artisanal baking communities.
            </p>
          </div>

          <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg">
            <h2 className="font-semibold text-stone-900 mb-1">03. Next.js App Router</h2>
            <p className="text-stone-600 leading-relaxed">
              Simple frontend architecture demonstrating pages, dynamic routes, components, and interactive client state.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
          <Link
            href="/recipes"
            className="px-4 py-2 bg-[#C2410C] hover:bg-[#9A3412] text-white text-xs font-medium rounded transition-colors"
          >
            Explore Catalog →
          </Link>
          <span className="text-xs text-stone-400">
            Everyday Recipes v1.0
          </span>
        </div>
      </div>

    </div>
  );
}
