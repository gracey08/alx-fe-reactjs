// src/App.jsx
import { Routes, Route, Link, useParams } from 'react-router-dom'; // Import required routing components
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Recipe Sharing App</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h2>Add a Recipe</h2>
              <AddRecipeForm />
              <h2>Recipes</h2>
              <RecipeList />
            </>
          }
        />
        <Route path="/recipe/:recipeId" element={<RecipeDetailsWrapper />} />
      </Routes>
    </div>
  );
}

// Wrapper to extract recipeId from URL params
const RecipeDetailsWrapper = () => {
  const { recipeId } = useParams(); // Extract recipeId from the route
  return <RecipeDetails recipeId={recipeId} />;
};

export default App;