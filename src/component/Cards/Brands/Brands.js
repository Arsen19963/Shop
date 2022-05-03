import React from "react";
import './Brands.css'
export const Brands = ({ item }) => {
  return (
    <div className="Brands">
      <img src={item.image} alt="purina" />
    </div>
  );
};
