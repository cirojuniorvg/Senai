import React, { useState } from 'react';
import RecipeForm from './components/RecipeForm';   
import RecipeList from './components/RecipeList';   
import SearchBar from './components/SearchBar';    
import Recipe from './components/Recipe';

function App() {
  const [recipes, setRecipes] = useState([]);       // armazena todas as receitas.
  const [searchQuery, setSearchQuery] = useState(''); //  controla a consulta de pesquisa.

  // adiciona uma nova receita ao estado.
  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]); 
  };


  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id)); 
  };

 
  const updateRecipe = (updatedRecipe) => {
    const newRecipes = recipes.map(recipe => {
      if (recipe.id === updatedRecipe.id) 
        return updatedRecipe;
      
      return recipe; 
    });
    setRecipes(newRecipes);  
  };


  const searchRecipes = (query) => {
    setSearchQuery(query);  
  };

  return (
    <div className="App">
      
      <RecipeForm onSave={addRecipe} />
      
      <RecipeList
        recipes={recipes.filter(recipe => recipe.name.includes(searchQuery))}
        onDelete={deleteRecipe}
        onUpdate={updateRecipe}
      />
    </div>
  );
}

export default App;
