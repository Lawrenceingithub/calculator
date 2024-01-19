import React, { useState } from "react";

export const Ingredient = () => {
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);

  const calculateAverage = () => {
    if (weight === 0 || isNaN(price) || isNaN(weight)) {
      return 0;
    }
    return price / weight;
  };

  return (
    <div className="container">
      <h3>加入材料</h3>
      <label>類型：</label>
      <input id="type" placeholder="輸入類型" />
      <label>名稱：</label>
      <input id="ingredientname" placeholder="輸入材料名稱" />
      <label>價錢：</label>
      <input
        id="price"
        placeholder="輸入價錢"
        onChange={(event) => setPrice(parseFloat(event.target.value))}
      />
      <label>重量：</label>
      <input
        id="weight"
        placeholder="輸入重量"
        onChange={(event) => setWeight(parseFloat(event.target.value))}
      />
      <label>平均價格：</label>
      <span>{calculateAverage()}</span>
    </div>
  );
};