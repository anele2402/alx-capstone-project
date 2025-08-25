import { useState } from "react";

function SearchBar(onSearch) {
    const searchStyle = {
        color: 'white'
    }
    const [input,setInput] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setInput('');
    }
  };

  return (
    <>
      <div>
        <h3 style={searchStyle}>Hungry!!Discover Incredible Recipes</h3>
        
      </div>
      <div>
        <h3>Search By Dish Name</h3>
        <form onSubmit={handleSubmit}>
            
            <input 
            type="text" 
            placeholder="Enter Dish" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            /><br></br>
            <button  onclick={handleSubmit}type="submit">Search Recipe</button>
        </form>
      </div>
      <div>
        <h4>Happy Cooking!!</h4>
      </div>
    </>
  );
}

export default SearchBar;