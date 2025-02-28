// src/components/RecommendationsList.jsx
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>Add some favorites to get recommendations!</p>
      ) : (
        recommendations.map((recipe) => (
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

export default RecommendationsList;