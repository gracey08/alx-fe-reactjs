// src/components/RecipeDetails.jsx
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore((state) =>
      state.recipes.find((recipe) => recipe.id === parseInt(recipeId))
    );
    const favorites = useRecipeStore((state) => state.favorites);
    const addFavorite = useRecipeStore((state) => state.addFavorite);
    const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  
    const toggleFavorite = () => {
      if (favorites.includes(recipe.id)) {
        removeFavorite(recipe.id);
      } else {
        addFavorite(recipe.id);
      }
    };
  
    if (!recipe) {
      return <p>Recipe not found.</p>;
    }
  
    return (
      <div style={{ padding: '20px' }}>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <button
          onClick={toggleFavorite}
          style={{
            padding: '5px 10px',
            backgroundColor: favorites.includes(recipe.id) ? '#ff4444' : '#ccc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            marginBottom: '10px',
          }}
        >
          {favorites.includes(recipe.id) ? 'Unfavorite' : 'Favorite'}
        </button>
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    );
  };
  
  export default RecipeDetails;