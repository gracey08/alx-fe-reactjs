// src/components/FavoritesList.jsx
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter(Boolean) // Filter out undefined (in case a favorite was deleted)
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet. Start adding some!</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '20px' }}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;