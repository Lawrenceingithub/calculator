import React from "react";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="title">
        <h1
          onClick={() => {
            navigate("/Calculator");
          }}
        >
          計算器
        </h1>
        <h1
          onClick={() => {
            navigate("/ProductList");
          }}
        >
          產品列表
        </h1>
        <h1
          onClick={() => {
            navigate("/IngredientList");
          }}
        >
          材料列表
        </h1>
        <h1
          onClick={() => {
            navigate("/Products");
          }}
        >
          加入產品
        </h1>
        <h1
          onClick={() => {
            navigate("/IngredientUpload");
          }}
        >
          加入材料
        </h1>
      </div>
    </div>
  );
};
