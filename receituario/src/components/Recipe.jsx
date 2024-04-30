import React, { useState } from 'react';


function Recipe({ recipe, onDelete, onUpdate }) {

  const [isEditing, setIsEditing] = useState(false);
 
  const [editedRecipe, setEditedRecipe] = useState({...recipe});

  // Função para manipular as mudanças nos campos de texto da receita durante a edição.
  const handleEditChange = (field, value) => {
    setEditedRecipe(prev => ({ ...prev, [field]: value }));
  };

  // Função para manipular as mudanças nos ingredientes da receita, atualizando individualmente cada campo.
  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...editedRecipe.ingredients];
    newIngredients[index][field] = value;
    setEditedRecipe(prev => ({ ...prev, ingredients: newIngredients }));
  };

  // Função para controlar o início e fim do modo de edição, e para salvar a receita editada.
  const handleEdit = () => {
    if (isEditing) {
      onUpdate(editedRecipe);
      setIsEditing(false); 
    } else {
      setIsEditing(true); 
    }
  };

  // Função para adicionar um novo campo de ingrediente vazio para ser preenchido.
  const addIngredientField = () => {
    const newIngredients = [...editedRecipe.ingredients, { name: '', quantity: '', unit: '' }];
    setEditedRecipe(prev => ({ ...prev, ingredients: newIngredients }));
  };

  // Renderização condicional: exibe campos de entrada se estiver no modo de edição.
  if (isEditing) {
    return (
      <div>
        
        <input
          value={editedRecipe.name}
          onChange={(e) => handleEditChange('name', e.target.value)}
          placeholder="Nome da receita"
        />
        <input
          value={editedRecipe.description}
          onChange={(e) => handleEditChange('description', e.target.value)}
          placeholder="Descrição"
        />
      
        {editedRecipe.ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
              placeholder="Nome do ingrediente"
            />
            <input
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
              placeholder="Quantidade"
            />
            <input
              value={ingredient.unit}
              onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
              placeholder="Unidade (ex: kg, litro)"
            />
          </div>
        ))}
        
        <button onClick={addIngredientField}>Adicionar Ingrediente</button>
        <button onClick={handleEdit}>Salvar</button>
      </div>
    );
  }


  return (
    <div>
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name}: {ingredient.quantity} {ingredient.unit}
          </li>
        ))}
      </ul>
     
      <button className="delete-button" onClick={() => onDelete(recipe.id)}>Deletar</button>
      <button className="edit-button" onClick={handleEdit}>Editar</button>
    </div>
  );
}

export default Recipe;

