
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    const data = await res.json();
    setRecipes(data.meals || []);
  };

  useEffect(() => {
    fetchRecipes(''); // Default load
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    fetchRecipes(term);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Welcome to Masola's Kitchen!</h1>
      <SearchBar onSearch={handleSearch} />
      <RecipeDetails recipes={recipes} />
    </div>
  );
}

export default App;


