// src/components/DeleteRecipeButton.jsx
import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/'); // Redirect to home after deletion
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{ padding: '10px', marginTop: '10px', backgroundColor: '#ff4444', color: 'white' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;