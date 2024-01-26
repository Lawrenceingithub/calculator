import React from "react";
import { useParams } from "react-router-dom";
import { useGetIngredient } from "../hooks/useGetIngredient";
import { useAddIngredient } from "../hooks/useAddIngredient";

export const IngredientDetail = () => {
  const ingredients = useGetIngredient();
  const { id } = useParams();
  const ingredient = ingredients.find((item) => item.id === id);
  const { deleteIngredient } = useAddIngredient();

  if (!ingredient || !ingredient.id) {
    return <div>Ingredient not found.</div>;
  }

  const calculatePricePerWeight = () => {
    const price = parseFloat(ingredient.ingredientPrice);
    const weight = parseFloat(ingredient.ingredientWeight);

    if (isNaN(price) || isNaN(weight) || weight === 0) {
      return "N/A";
    }

    const pricePerWeight = price / weight;
    return pricePerWeight.toFixed(2);
  };

  return (
    <div>
      <h2>{ingredient.ingredientName}</h2>
      <img
        className="thumbnail"
        src={ingredient.ingredientPhoto}
        alt={ingredient.ingredientName}
      />
      <p>類型: {ingredient.ingredientType}</p>
      <p>重量: {ingredient.ingredientWeight}</p>
      <p>價格: {ingredient.ingredientPrice} 元</p>
      <p>價格/重量: {calculatePricePerWeight()} 元/(克/毫升/粒/盒)</p>
      <button
        onClick={() => {
          deleteIngredient();
        }}
      >
        刪除材料
      </button>
    </div>
  );
};
