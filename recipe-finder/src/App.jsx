import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails';
import RecipeCard from './components/RecipeCard';


function App() {
  return (
    <>
      <SearchBar/>
      <RecipeCard/>
      <RecipeDetails/>
    </>
  );
}

export default App
