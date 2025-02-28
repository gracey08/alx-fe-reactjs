// src/stores/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [], // Array of recipe IDs marked as favorites
  recommendations: [], // Array of recommended recipes
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe].filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
      filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== recipeId),
      favorites: state.favorites.filter((id) => id !== recipeId), // Remove from favorites if deleted
      recommendations: state.recommendations.filter((recipe) => recipe.id !== recipeId),
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
      filteredRecipes: state.filteredRecipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
      recommendations: state.recommendations.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites // Avoid duplicates
        : [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  generateRecommendations: () =>
    set((state) => {
      // Simple recommendation logic: suggest recipes not favorited, based on favorites' "type"
      const favoriteRecipes = state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id)
      );
      const recommended = state.recipes
        .filter(
          (recipe) =>
            !state.favorites.includes(recipe.id) && // Exclude already favorited
            favoriteRecipes.some((fav) =>
              recipe.title.toLowerCase().includes(fav.title.toLowerCase().split(' ')[0]) // Match first word (e.g., "Chicken" in "Chicken Soup")
            )
        )
        .slice(0, 3); // Limit to 3 recommendations
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;