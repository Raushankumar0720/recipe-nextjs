import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-200 bg-[#FCFAF6] mt-auto py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
        <div>
          © 2025 Everyday Recipes. Functional culinary notebook.
        </div>

        <div className="flex items-center gap-6">
          <Link href="/recipes" className="hover:text-stone-800 transition-colors">
            Recipes
          </Link>
          <Link href="/cuisines" className="hover:text-stone-800 transition-colors">
            Techniques
          </Link>
          <Link href="/about" className="hover:text-stone-800 transition-colors">
            Glossary
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-800 transition-colors inline-flex items-center gap-1"
          >
            GitHub Repository ↗
          </a>
        </div>

      </div>
    </footer>
  );
}
