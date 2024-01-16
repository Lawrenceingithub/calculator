import React from "react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const homepagebutton = () => {
    navigate('/')
  };

  return (
    <div className="footer">
      <button className="return-btn" onClick={homepagebutton}>返回</button>
    </div>
  );
};
