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
            navigate("/Products");
          }}
        >
          加入產品
        </h1>
        <h1
          onClick={() => {
            navigate("/Ingredient");
          }}
        >
          加入材料
        </h1>
      </div>
    </div>
  );
};
