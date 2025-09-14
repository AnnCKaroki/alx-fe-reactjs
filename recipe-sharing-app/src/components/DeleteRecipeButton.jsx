import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId, onFinish }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    if (onFinish) {
      onFinish();
    } else {
      navigate('/');
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{ color: 'white', background: 'red', border: 'none', padding: '0.5em 1em', cursor: 'pointer' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
