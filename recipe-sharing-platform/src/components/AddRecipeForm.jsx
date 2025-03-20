import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    }
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    }
    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    }

    const ingredientsList = formData.ingredients
      .trim()
      .split('\n')
      .filter((item) => item.trim() !== '');
    if (ingredientsList.length < 2) {
      newErrors.ingredients = 'Please provide at least 2 ingredients';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({
        title: '',
        ingredients: '',
        steps: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-7 lg:p-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-gray-800">
        Add a New Recipe
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10"
      >
        <div className="mb-6 md:mb-8">
          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold text-lg md:text-xl mb-2 md:mb-3"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full p-3 md:p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg md:text-xl ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter the recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm md:text-base mt-1 md:mt-2">{errors.title}</p>
          )}
        </div>

        <div className="mb-6 md:mb-8">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-semibold text-lg md:text-xl mb-2 md:mb-3"
          >
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className={`w-full p-3 md:p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg md:text-xl ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300'
            }`}
            rows="5"
            placeholder="List ingredients, one per line (e.g., 200g spaghetti)"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm md:text-base mt-1 md:mt-2">{errors.ingredients}</p>
          )}
        </div>

        <div className="mb-8 md:mb-10">
          <label
            htmlFor="steps"
            className="block text-gray-700 font-semibold text-lg md:text-xl mb-2 md:mb-3"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className={`w-full p-3 md:p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg md:text-xl ${
              errors.steps ? 'border-red-500' : 'border-gray-300'
            }`}
            rows="5"
            placeholder="Describe the preparation steps"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm md:text-base mt-1 md:mt-2">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 md:py-4 bg-blue-500 text-white rounded-lg text-lg md:text-xl font-semibold hover:bg-blue-600 transition-colors duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;