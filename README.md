# Everyday Recipes

Everyday Recipes is a recipe-catalog frontend built with the Next.js App Router. Browse recipes by category, open a recipe for its ingredients and cooking steps, explore cuisine entries, and experiment with a recipe form.

## Getting Started

### Requirements

- Node.js and npm

### Install and run

Run these commands from the repository root:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root route redirects to `/recipes`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run build` | Create a production build. |
| `npm run start` | Serve the production build; run `npm run build` first. |
| `npm run lint` | Run ESLint. |

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Redirects to the recipe catalog. |
| `/recipes` | Browse the catalog and filter recipes by category. |
| `/recipes/[id]` | Show a recipe by its slug or ID, including ingredients and method steps. |
| `/cuisines` | Browse the cuisine directory and featured recipes. |
| `/create-recipe` | Open the interactive recipe-entry form. |
| `/about` | Read about the project. |
| Not-found fallback | Shows the custom 404 page for unknown routes and recipe identifiers. |

## Architecture

This is a single Next.js application. The App Router maps folders under `src/app` to routes; shared navigation and footer components are mounted by the root layout. Recipe and cuisine content is imported from local TypeScript data modules rather than fetched from an API.

```text
src/
├── app/
│   ├── about/page.tsx             # Project overview
│   ├── create-recipe/page.tsx     # Client-side recipe form
│   ├── cuisines/page.tsx          # Cuisine directory
│   ├── recipes/
│   │   ├── page.tsx               # Catalog and category filters
│   │   └── [id]/page.tsx           # Recipe detail by slug or ID
│   ├── globals.css                # Tailwind CSS import and global styles
│   ├── layout.tsx                 # Root layout, metadata, navbar, and footer
│   ├── not-found.tsx              # Custom not-found experience
│   └── page.tsx                   # Redirects `/` to `/recipes`
├── components/
│   ├── CuisineCard.tsx            # Cuisine summary card
│   ├── Footer.tsx                 # Shared site footer
│   ├── Navbar.tsx                 # Shared navigation
│   └── RecipeCard.tsx             # Reusable recipe summary card
├── data/
│   ├── cuisines.ts                # Static cuisine catalog
│   └── recipes.ts                 # Static recipe catalog
└── types/
    └── recipe.ts                  # Recipe, ingredient, step, and cuisine types
```

### Data flow

- `src/data/recipes.ts` exports the recipe catalog. Each recipe contains identifying fields, category and cuisine metadata, preparation details, an image URL, ingredients, and ordered method steps.
- `src/data/cuisines.ts` exports the cuisine entries shown in the directory.
- `src/types/recipe.ts` defines the shared `Recipe`, `Ingredient`, `Step`, and `Cuisine` TypeScript types.
- Catalog and cuisine pages render these local datasets. The recipe detail route matches the dynamic route segment against a recipe's `slug` or `id`; an unmatched value invokes Next.js `notFound()`.
- Client components use React state for category selection, ingredient checkboxes, and recipe-form interactions.

## Technology

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- ESLint 9

## Current Scope

The project is a frontend prototype. Recipe and cuisine data are static TypeScript arrays; there is no database, API, authentication, or server-side recipe creation. Ingredient checkboxes and recipe-form fields are held in browser memory. The form's save and publish actions display confirmation messages but do not persist or publish recipes. Recipe photos use remote Unsplash image URLs and therefore require an internet connection to load.

To add or update catalog content, edit `src/data/recipes.ts` or `src/data/cuisines.ts` and keep the entries consistent with the types in `src/types/recipe.ts`.