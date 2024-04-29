import React from 'react';
import Recipe from './Recipe';

function RecipeList({ recipes, onDelete, onUpdate }) {
  return (
    <div>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
}

export default RecipeList;
