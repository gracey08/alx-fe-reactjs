// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.recipes);
  
    return (
      <div>
        {recipes.length === 0 ? (
          <p>No recipes yet. Add one below!</p>
        ) : (
          recipes.map((recipe) => (
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
  
  export default RecipeList;