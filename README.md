# Everyday Recipes (Recipe UI)

A clean, beginner-friendly frontend recipe application built with **Next.js (App Router)** and **Tailwind CSS**.

---

## 🚀 How to Run the Project

1. Open your terminal in this project folder:
   ```bash
   cd "UI_Assginments/Recipe_ui"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at:
   ```
   http://localhost:3000
   ```

---

## 📁 Routes & Pages Included

| Route | Page Purpose | Description |
|---|---|---|
| `/` | Root Home | Automatically redirects to `/recipes` |
| `/recipes` | Recipe Catalog Index | Category filters, grouped dish sections, recipe cards |
| `/recipes/[id]` | Recipe Details | Ingredients list with interactive checkboxes, step-by-step cooking method, plated photo |
| `/cuisines` | Cuisines Directory | Regional domain explorer (Japanese, Chinese, Korean, Taiwanese) and featured formulas |
| `/create-recipe` | Recipe Studio | Editor form with dynamic ingredient row addition/removal and parameter settings |
| `/not-found` | 404 Recipe Not Found | Custom 404 page with suggested alternatives and diagnostic router trace box |
| `/about` | About Notebook | Information about the culinary notebook project |

---

## 🧩 Component Architecture Overview

Here is how the project divides pages into clean, reusable components:

### 1. Global Layout (`src/app/layout.tsx`)
- **`Navbar.tsx`**: Header with the `ER` logo, navigation links (`Recipes`, `Cuisines`, `About`), active route indicator, and `+ New Recipe` button.
- **`Footer.tsx`**: Bottom bar with copyright info and footer navigation links.

### 2. Catalog Page (`src/app/recipes/page.tsx`)
- **Filter Tabs**: Simple buttons allowing users to filter dishes by category (`Quick Meals`, `Plant-Based`, `Baking & Grains`, `Soups & Stews`).
- **`RecipeCard.tsx`**: Reusable card component showing recipe image, tag badge, prep time, difficulty, title, description, yield, and a "View recipe →" link.
- **Diagnostic/Routing Callout Box**: Explains Next.js routing paradigms in a clean callout box.

### 3. Recipe Detail Page (`src/app/recipes/[id]/page.tsx`)
- **Hero & Meta Info**: Recipe title, notebook entry badge, summary, and prep stats (prep time, difficulty, servings).
- **Plated Prep Frame**: Image container showing the finished dish figure.
- **Interactive Ingredients List**: Interactive checkbox list allowing users to check off ingredients as they prepare them.
- **Methodology & Execution Steps**: Sequenced numeric step indicators (`01`, `02`, `03`...) describing each cooking phase.

### 4. Cuisines Page (`src/app/cuisines/page.tsx`)
- **`CuisineCard.tsx`**: Displays regional cuisine cards (e.g., Japanese, Chinese, Korean, Taiwanese) with recipe counts and primary base focus.
- **`RecipeCard.tsx`**: Reused here to display featured East Asian recipes.
- **Pantry Standard Box**: Information block highlighting foundational culinary guidelines.

### 5. Recipe Studio (`src/app/create-recipe/page.tsx`)
- **Studio Sidebar**: Left navigation menu (`Editor`, `Drafts`, `Settings`, `Back to Explorer`).
- **Recipe Parameters Form**: Inputs for Title, Cuisine dropdown, Prep Time, Difficulty, and Description.
- **Dynamic Ingredients Builder**: State-driven rows with quantity, ingredient name, delete button, and a `+ Add Row` button to dynamically add new ingredients.
- **Action Bar**: Save Draft and Publish Recipe buttons.

### 6. Not Found Page (`src/app/not-found.tsx`)
- **404 Alert Banner & Actions**: Action buttons to return to recipes or browse cuisines.
- **Alternative Suggestions**: Cards recommending valid alternative dishes.
- **Router Trace Box**: Terminal-style box simulating Next.js routing diagnostic trace.