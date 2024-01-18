import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="App-header">
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        成本計算器
      </h1>
    </div>
  );
};
