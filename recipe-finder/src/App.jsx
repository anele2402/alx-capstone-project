import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState('');

  const fetchRecipes = async (query) => {
    try {
      setError('');
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();

      if (data.meals) {
        setRecipes(data.meals.slice(0, 3));
      } else {
        setRecipes([]);
        setError('No recipes found.');
      }
    } catch (err) {
      console.error(err);
      setError('Oops!Try Again.');
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    fetchRecipes(term);
  };

  return (
    <div className="appCont min-h-screen bg-gray-100 px-4 sm:px-6 md:px-8 py-6">
      <div className="flex flex-col items-center">
        <i
          className="fa fa-cutlery mb-4"
          style={{
            color: '#ED3500',
            fontSize: '3rem',
          }}
        ></i>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 textsh">
          Amazing Recipe App
        </h1>
      </div>

      {!selectedRecipe ? (
        <>
          <SearchBar onSearch={handleSearch} />

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                onClick={() => setSelectedRecipe(recipe)}
              />
            ))}
          </div>
        </>
      ) : (
        <RecipeDetails
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}

export default App;
