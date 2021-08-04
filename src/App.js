
import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App=()=>{
  const APP_ID="811a1e30";
  const API_KEY="0256a04d41595b755f9ca4e9f8a26856";
  const [search,setSearch]=useState("");
  const [recipes,setRecipes]=useState([]);
  const [query,setQuery]=useState("chicken");
 
  useEffect(()=>{
    getRecipes();
  },[query]);

const getRecipes= async ()=>{
  const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
  const data= await response.json();
  console.log(data.hits);
  setRecipes(data.hits)
}

const updateSearch=e=>{
  setSearch(e.target.value);
  console.log(search);
}

const getSearch=e=>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
}
  return(
  <div className="App">
    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button className="search-btn">Submit</button>
    </form>
    <div className="recipe">
      {recipes.map(recipe=>(
            <Recipe key={recipe.recipe.label}
             title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
    </div>
    
  </div>
  )
}
export default App;