import React from 'react';

function Recipe({ recipe, onDelete, onUpdate }) {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      <button onClick={() => onDelete(recipe.id)}>Deletar</button>
      <button onClick={() => onUpdate({...recipe, name: "Updated Name"})}>Editar</button>
    </div>
  );
}

export default Recipe;
