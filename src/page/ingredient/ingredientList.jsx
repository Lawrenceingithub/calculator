import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetIngredient } from '../hooks/useGetIngredient';

export const IngredientList = () => {
  const ingredients = useGetIngredient();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredIngredients, setFilteredIngredients] = useState([]);

  useEffect(() => {
    const filtered = ingredients.filter((ingredient) => {
      return ingredient.ingredientName.toLowerCase().includes(searchKeyword.toLowerCase());
    });
    setFilteredIngredients(filtered);
  }, [ingredients, searchKeyword]);

  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchKeyword}
        onChange={handleSearch}
        placeholder="搜尋"
      />

      {filteredIngredients.map((ingredient) => (
        <div key={ingredient.id}>
            <Link to={`/Ingredient/${ingredient.id}`} className="ingredient-link">
            <ul>{ingredient.ingredientName}</ul>
            </Link>
        </div>
      ))}
    </div>
  );
};