"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/recipes" && (pathname === "/" || pathname?.startsWith("/recipes"))) {
      return true;
    }
    return pathname?.startsWith(path);
  };

  return (
    <header className="w-full bg-[#FCFAF6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/recipes" className="flex items-center gap-3 group">
          <div className="w-7 h-7 bg-[#C2410C] text-white font-bold flex items-center justify-center rounded text-xs tracking-wider">
            ER
          </div>
          <span className="font-semibold text-stone-900 tracking-tight text-lg">
            Everyday Recipes
          </span>
        </Link>

        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link
            href="/recipes"
            className={`pb-1 transition-colors ${
              isActive("/recipes")
                ? "text-[#C2410C] border-b-2 border-[#C2410C] font-semibold"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Recipes
          </Link>
          <Link
            href="/cuisines"
            className={`pb-1 transition-colors ${
              isActive("/cuisines")
                ? "text-[#C2410C] border-b-2 border-[#C2410C] font-semibold"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Cuisines
          </Link>
          <Link
            href="/about"
            className={`pb-1 transition-colors ${
              isActive("/about")
                ? "text-[#C2410C] border-b-2 border-[#C2410C] font-semibold"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            About
          </Link>
        </nav>

        <div>
          <Link
            href="/create-recipe"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#C2410C] hover:bg-[#9A3412] text-white text-sm font-medium rounded transition-colors shadow-sm"
          >
            <span>+</span>
            <span>New Recipe</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
