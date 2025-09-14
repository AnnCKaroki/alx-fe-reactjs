import { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipeToEdit, onFinish }) => {
  const [title, setTitle] = useState(recipeToEdit.title);
  const [description, setDescription] = useState(recipeToEdit.description);
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({
      ...recipeToEdit,
      title,
      description,
    });
    if (onFinish) onFinish();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title: </label>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description: </label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
