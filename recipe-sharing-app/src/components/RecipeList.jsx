// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    const favorites = useRecipeStore((state) => state.favorites);
    const addFavorite = useRecipeStore((state) => state.addFavorite);
    const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  
    const toggleFavorite = (recipeId) => {
      if (favorites.includes(recipeId)) {
        removeFavorite(recipeId);
      } else {
        addFavorite(recipeId);
      }
    };
  
    return (
      <div>
        {filteredRecipes.length === 0 ? (
          <p>No recipes match your search. Try adding one!</p>
        ) : (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} style={{ marginBottom: '20px' }}>
              <h3>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description}</p>
              <button
                onClick={() => toggleFavorite(recipe.id)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: favorites.includes(recipe.id) ? '#ff4444' : '#ccc',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                }}
              >
                {favorites.includes(recipe.id) ? 'Unfavorite' : 'Favorite'}
              </button>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default RecipeList;