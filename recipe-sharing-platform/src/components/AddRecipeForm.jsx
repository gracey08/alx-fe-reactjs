import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, log the form data (we'll add validation in Step 2)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Add a New Recipe
      </h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        {/* Title Field */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the recipe title"
          />
        </div>

        {/* Ingredients Field */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="List ingredients, one per line (e.g., 200g spaghetti)"
          />
        </div>

        {/* Preparation Steps Field */}
        <div className="mb-6">
          <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Describe the preparation steps"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;