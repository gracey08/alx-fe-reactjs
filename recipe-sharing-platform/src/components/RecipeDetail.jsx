import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipeData.find((r) => r.id === parseInt(id));
    if (selectedRecipe) {
      setRecipe(selectedRecipe);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  if (!recipe) {
    return <div className="text-center p-4 text-gray-500">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Back to Home
      </button>

      {/* Main Recipe Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 sm:h-80 lg:h-96 object-cover"
        />

        {/* Content Section */}
        <div className="p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
          <p className="text-gray-600 text-lg sm:text-xl mb-6 leading-relaxed">{recipe.summary}</p>

          {/* Ingredients Section */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base sm:text-lg">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Instructions</h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{recipe.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;