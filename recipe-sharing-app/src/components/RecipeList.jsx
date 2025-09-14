import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const recipes = useRecipeStore(state => state.recipes);

  // Show all if no search, else show filtered
  const list = filteredRecipes.length > 0 || useRecipeStore.getState().searchTerm
    ? filteredRecipes
    : recipes;

  return (
    <div>
      <h2>All Recipes</h2>
      <ul>
        {list.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
