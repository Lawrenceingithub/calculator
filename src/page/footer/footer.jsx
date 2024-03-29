import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 判断当前路径是否为根路径 "/"
  const isHomePage = location.pathname === "/";

  const homepagebutton = () => {
    navigate(-1);
  };
  
  if (isHomePage) {
    return null; // 如果是根路径，则不显示 Footer 组件
  } else {
    return (
      <div className="footer">
        <button className="return-btn" onClick={homepagebutton}>
          返回
        </button>
      </div>
    );
  }
};