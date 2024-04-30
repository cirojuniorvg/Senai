import React from 'react';
import Recipe from './Recipe';
import SearchBar from './SearchBar';


class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        
        { id: 1, name: 'Bolo de Cenoura', description: 'Um bolo delicioso e fácil de fazer.', ingredients: [{name: 'Cenoura', quantity: '2', unit: 'unidades'}] },
        { id: 2, name: 'Torta de Limão', description: 'Refrescante e cremosa.', ingredients: [{name: 'Limão', quantity: '3', unit: 'unidades'}] },
      ],
      newRecipeName: '',
      newRecipeDescription: '',
      newIngredients: [{ name: '', quantity: '', unit: '' }],
      searchQuery: ''
    };
  }


  handleDelete = (id) => {
    this.setState(prevState => ({
      recipes: prevState.recipes.filter(recipe => recipe.id !== id)
    }));
  }


  handleUpdate = (updatedRecipe) => {
    this.setState(prevState => ({
      recipes: prevState.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    }));
  }


  handleAddRecipe = () => {
    const newRecipe = {
      id: Math.max(...this.state.recipes.map(r => r.id)) + 1, 
      name: this.state.newRecipeName,
      description: this.state.newRecipeDescription,
      ingredients: this.state.newIngredients,
    };
    this.setState(prevState => ({
      recipes: [...prevState.recipes, newRecipe],
      newRecipeName: '',
      newRecipeDescription: '',
      newIngredients: [{ name: '', quantity: '', unit: '' }],
    }));
  }

  
  handleIngredientChange = (index, field, value) => {
    const newIngredients = this.state.newIngredients.map((ingredient, i) => {
        if (i === index) {
            return { ...ingredient, [field]: value };
        }
        return ingredient;
    });
    this.setState({ newIngredients });
  }


  addIngredientField = () => {
    this.setState(prevState => ({
      newIngredients: [...prevState.newIngredients, { name: '', quantity: '', unit: '' }]
    }));
  }


  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  }


  render() {
    // Filtra receitas com base na pesquisa.
    const filteredRecipes = this.state.recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    return (
      <div>
        <SearchBar onSearch={this.handleSearch} />
        <div>
          
          <input
            value={this.state.newRecipeName}
            onChange={e => this.setState({ newRecipeName: e.target.value })}
            placeholder="Nome da receita"
          />
          <input
            value={this.state.newRecipeDescription}
            onChange={e => this.setState({ newRecipeDescription: e.target.value })}
            placeholder="Descrição"
          />
          
          {this.state.newIngredients.map((ingredient, index) => (
            <div key={index}>
              <input
                value={ingredient.name}
                onChange={(e) => this.handleIngredientChange(index, 'name', e.target.value)}
                placeholder="Nome do ingrediente"
              />
              <input
                value={ingredient.quantity}
                onChange={(e) => this.handleIngredientChange(index, 'quantity', e.target.value)}
                placeholder="Quantidade"
              />
              <input
                value={ingredient.unit}
                onChange={(e) => this.handleIngredientChange(index, 'unit', e.target.value)}
                placeholder="Unidade (ex: kg, litro)"
              />
            </div>
          ))}
          <button onClick={this.addIngredientField}>Adicionar Ingrediente</button>
          <button onClick={this.handleAddRecipe}>Adicionar Receita</button>
        </div>
        
        {filteredRecipes.map(recipe => (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            onDelete={this.handleDelete}
            onUpdate={this.handleUpdate}
          />
        ))}
      </div>
    );
  }
}

export default RecipeList;
