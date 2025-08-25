import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeDetails({ recipes }) {
  if (recipes.length === 0) {
    return <p style={{ textAlign: 'center' }}>No recipes found.</p>;
  }

  return (
    <div style={{
      display: 'flex',
      width: '50%',
      height:'50%',
      justifyContent:'center',
      backGroundColor: 'black',

      padding: '20px'
    }}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeDetails;
