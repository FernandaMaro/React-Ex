import React from "react";
import IngredientsList from "./IngredientsList";
import ChefMaro from "./ChefMaro";
import { getRecipeFromChefClaude, getRecipeFromMistral, getRecipeFromGemini } from "/ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState(["oregano", "chicken", "pasta", "milk"]);
  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromGemini(ingredients);
    setRecipe(recipeMarkdown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <h2>Let's cook!</h2>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {recipe && <ChefMaro recipe={recipe} />}
    </main>
  );
}
