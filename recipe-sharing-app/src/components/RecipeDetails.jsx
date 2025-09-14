import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => String(r.id) === String(recipeId))
  );

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p><strong>Recipe ID:</strong> {recipe.id}</p>
    </div>
  );
};

export default RecipeDetails;
