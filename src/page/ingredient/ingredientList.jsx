import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetIngredient } from "../hooks/useGetIngredient";

export const IngredientList = () => {
  const ingredients = useGetIngredient();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredIngredients, setFilteredIngredients] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const filtered = ingredients.filter((ingredient) => {
      return ingredient.ingredientName
        .toLowerCase()
        .includes(searchKeyword.toLowerCase());
    });
    setFilteredIngredients(filtered);
  }, [ingredients, searchKeyword]);

  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div>
      <button className="add-btn" onClick={() => navigate("/IngredientUpload")}>
        加入材料
      </button>
      <input
        type="text"
        value={searchKeyword}
        onChange={handleSearch}
        placeholder="搜尋"
      />
      {filteredIngredients.length === 0 ? (
        <p>未能找到材料</p>
      ) : (
        <>
          {filteredIngredients.map((ingredient) => (
            <div key={ingredient.id}>
              <Link
                to={`/Ingredient/${ingredient.id}`}
                className="ingredient-link"
              >
                <p>{ingredient.ingredientName}</p>
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
