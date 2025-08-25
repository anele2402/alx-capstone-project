import React from 'react';

function RecipeCard({ recipe }) {
  // Extract ingredients and measures
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
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      overflow: 'hidden',
      textAlign: 'left',
      padding: '15px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <h2>{recipe.strMeal}</h2>
      <h4>Ingredients:</h4>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h4>Instructions:</h4>
      <p style={{ whiteSpace: 'pre-wrap' }}>{recipe.strInstructions}</p>
    </div>
  );
}

export default RecipeCard;

