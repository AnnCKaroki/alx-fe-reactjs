import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import useRecipeStore from './components/recipeStore';

function App() {
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  const favorites = useRecipeStore(state => state.favorites);

  // Update recommendations on mount or when favorites change
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations, favorites]);

  return (
    <BrowserRouter>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />
        <FavoritesList />
        <RecommendationsList />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
