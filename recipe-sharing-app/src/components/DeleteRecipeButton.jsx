import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onFinish }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    if (onFinish) onFinish();
  };

  return (
    <button onClick={handleDelete} style={{ color: 'white', background: 'red', border: 'none', padding: '0.5em 1em', cursor: 'pointer' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
