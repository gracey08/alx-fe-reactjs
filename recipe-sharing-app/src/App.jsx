// src/App.jsx
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Recipe Sharing App</h1>
      <h2>Add a Recipe</h2>
      <AddRecipeForm />
      <h2>Recipes</h2>
      <RecipeList />
    </div>
  );
}

export default App;