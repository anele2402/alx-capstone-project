import React from 'react';

function RecipeDetails({ recipe, onClose }) {
  if (!recipe) return null;

  const getIngredients = () => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };

  const ingredients = getIngredients();

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center overflow-auto p-4">
      <div className="bg-gray-900 rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative text-white">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-400 font-bold hover:underline"
        >
          Back
        </button>

        <button
          onClick={onClose}
          className="mb-4 text-white font-semibold py-2 px-4 rounded bg-red-500 hover:bg-red-600 transition"
        >
          HOME
        </button>

        <h2 className="text-2xl font-bold mb-2 text-white">{recipe.strMeal}</h2>
        <p className="text-red-400 mb-4">{recipe.strCategory} • {recipe.strArea}</p>

        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto rounded mb-6"
        />

        <h3 className="text-xl font-semibold mb-2 text-white">Recipe Ingredients</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-200">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-2 text-white">Preparation Instructions</h3>
        <p className="mb-6 whitespace-pre-line text-white">{recipe.strInstructions}</p>

        {recipe.strYoutube && (
          <div className="mb-6">
            <iframe
              width="100%"
              height="315"
              src={recipe.strYoutube.replace('watch?v=', 'embed/')}
              frameBorder="0"
              allowFullScreen
              title="Recipe Video"
              className="rounded"
            />
          </div>
        )}

        {recipe.strSource && (
          <a
            href={recipe.strSource}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            Open Source
          </a>
        )}
      </div>
    </div>
  );
}

export default RecipeDetails;
