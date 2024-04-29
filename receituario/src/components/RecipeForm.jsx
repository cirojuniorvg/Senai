import React, { useState } from 'react';

function RecipeForm({ onSave }) {
  const [recipe, setRecipe] = useState({ name: '', description: '', id: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(recipe);
    setRecipe({ name: '', description: '', id: '' }); // Limpar form após salvar
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={recipe.name}
        onChange={handleChange}
        placeholder="Nome da receita"
        required
      />
      <textarea
        name="description"
        value={recipe.description}
        onChange={handleChange}
        placeholder="Descrição"
        required
      />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default RecipeForm;
