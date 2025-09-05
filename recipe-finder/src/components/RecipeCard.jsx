import React from 'react';

function RecipeCard({ recipe, onClick }) {
  return (
    <div
      className="bg-red-800 rounded-md shadow-md hover:shadow-lg transition cursor-pointer w-full max-w-xs mx-auto"
      onClick={() => onClick(recipe)}
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-32 h-32 sm:w-40 sm:h-40 object-cover mx-auto mt-4 rounded"
      />
      <div className="p-3 text-center">
        <h2 className="text-base font-semibold mb-1 text-white">{recipe.strMeal}</h2>
        <p className="text-red-300 text-xs mb-1">
          <strong>Category:</strong> {recipe.strCategory}
        </p>
        <p className="text-red-300 text-xs">
          <strong>Cuisine:</strong> {recipe.strArea}
        </p>
      </div>
    </div>
  );
}

export default RecipeCard;
