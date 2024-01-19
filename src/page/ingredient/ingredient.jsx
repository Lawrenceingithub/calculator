import React, { useState } from "react";
import { useAddIngredient } from "../hooks/useAddIngredient";
import "./ingredient-style.css";

export const Ingredient = () => {

  const { addIngredient } = useAddIngredient();

  const [ingredientPhoto, setingredientPhoto] = useState("");
  const [ingredientType, setIngredientType] = useState("");
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientPrice, setIngredientPrice] = useState(0);
  const [ingredientWeight, setIngredientWeight] = useState(0);
  const [description, setDescription] = useState("");

  const calculateAverage = () => {
    if (
      ingredientWeight === 0 ||
      isNaN(ingredientPrice) ||
      isNaN(ingredientWeight)
    ) {
      return 0;
    }
    return ingredientPrice / ingredientWeight;
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setingredientPhoto(URL.createObjectURL(file));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addIngredient({
      ingredientPhoto,
      ingredientName,
      ingredientType,
      ingredientPrice,
      ingredientWeight,
      description,
    });
    // 清空表單字段
    setingredientPhoto("");
    setIngredientName("");
    setIngredientType("");
    setIngredientPrice(0);
    setIngredientWeight(0);
    setDescription("");
  };

  return (
    <div className="container vertical">
      <form className="add-ingredients" onSubmit={onSubmit}>
        <h3>加入材料</h3>
        <label>圖片上傳：</label>
        <input id="photo" type="file" onChange={handlePhotoChange} />

        {ingredientPhoto && <img src={ingredientPhoto} alt="已選擇的圖片" className="thumbnail" />}
        <label>類型：</label>
        <input
          id="type"
          placeholder="輸入類型"
          onChange={(e) => setIngredientType(e.target.value)}
        />
        <label>名稱：</label>
        <input
          id="ingredientname"
          placeholder="輸入材料名稱"
          onChange={(e) => setIngredientName(e.target.value)}
        />
        <label>價錢：</label>
        <input
          id="price"
          placeholder="輸入價錢"
          onChange={(event) =>
            setIngredientPrice(parseFloat(event.target.value))
          }
        />
        <label>重量：</label>
        <input
          id="weight"
          placeholder="輸入重量"
          onChange={(event) =>
            setIngredientWeight(parseFloat(event.target.value))
          }
        />
        <label>備註：</label>
        <input
          id="description"
          placeholder="備註"
          onChange={(event) => setDescription(event.target.value)}
        />
        <label>平均價格：</label>
        <span>{calculateAverage()} 克/毫升</span>
        <button type="submite">提交</button>
      </form>
    </div>
  );
};
